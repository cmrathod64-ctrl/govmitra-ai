import { useState } from "react";
import { supabase } from "../lib/supabase";

function BulkImportGR() {
  const [rows, setRows] = useState([]);
  const [fileName, setFileName] = useState("");
  const [importing, setImporting] = useState(false);

  // Parse one CSV line safely
  // Handles commas inside quoted text
  const parseCSVLine = (line) => {
    const values = [];
    let currentValue = "";
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        // Handle escaped double quotes ""
        if (
          insideQuotes &&
          line[i + 1] === '"'
        ) {
          currentValue += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (
        char === "," &&
        !insideQuotes
      ) {
        values.push(currentValue);
        currentValue = "";
      } else {
        currentValue += char;
      }
    }

    values.push(currentValue);

    return values;
  };

  // Validate CSV rows
  const validateRows = (data) => {
    const requiredFields = [
      "title",
      "department",
      "gr_date",
      "summary",
      "pdf_url",
    ];

    for (let i = 0; i < data.length; i++) {
      for (const field of requiredFields) {
        if (!data[i][field]?.trim()) {
          return {
            valid: false,
            message:
              `Row ${i + 2}: ${field} is missing.`,
          };
        }
      }

      // Validate date format YYYY-MM-DD
      const datePattern =
        /^\d{4}-\d{2}-\d{2}$/;

      if (
        !datePattern.test(
          data[i].gr_date.trim()
        )
      ) {
        return {
          valid: false,
          message:
            `Row ${i + 2}: Invalid GR date "${data[i].gr_date}". ` +
            `Expected format: YYYY-MM-DD`,
        };
      }
    }

    return {
      valid: true,
      message:
        "All GR records are valid.",
    };
  };

  // Read and preview CSV
  const handleFileChange = (e) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    if (
      !file.name
        .toLowerCase()
        .endsWith(".csv")
    ) {
      alert(
        "Please select a CSV file."
      );

      e.target.value = "";

      return;
    }

    setFileName(file.name);

    const reader =
      new FileReader();

    reader.onload = (event) => {
      try {
        // Remove UTF-8 BOM if present
        const text =
          event.target.result.replace(
            /^\uFEFF/,
            ""
          );

        const lines = text
          .split(/\r?\n/)
          .filter(
            (line) =>
              line.trim() !== ""
          );

        if (lines.length < 2) {
          alert(
            "CSV file is empty or contains no GR data."
          );

          setRows([]);

          return;
        }

        // Parse headers safely
        const headers =
          parseCSVLine(lines[0]).map(
            (header) =>
              header.trim()
          );

        // Parse data rows safely
        const parsedRows =
          lines.slice(1).map(
            (line) => {
              const values =
                parseCSVLine(line);

              const row = {};

              headers.forEach(
                (header, index) => {
                  row[header] =
                    values[
                      index
                    ]?.trim() || "";
                }
              );

              return row;
            }
          );

        // Validate before preview
        const validation =
          validateRows(parsedRows);

        if (!validation.valid) {
          alert(
            "❌ " +
              validation.message
          );

          setRows([]);

          return;
        }

        setRows(parsedRows);

        alert(
          "✅ " +
            validation.message
        );
      } catch (error) {
        console.error(
          "CSV Read Error:",
          error
        );

        alert(
          "Error reading CSV file."
        );

        setRows([]);
      }
    };

    reader.readAsText(
      file,
      "UTF-8"
    );
  };

  // Import GRs with duplicate protection
  const handleImport = async () => {
    if (rows.length === 0) {
      alert(
        "No GR records available to import."
      );

      return;
    }

    const confirmImport =
      window.confirm(
        `Are you sure you want to import ${rows.length} GRs?`
      );

    if (!confirmImport) {
      return;
    }

    try {
      setImporting(true);

      // Fetch existing GRs
      const {
        data: existingGRs,
        error: fetchError,
      } = await supabase
        .from("grs")
        .select(
          "title, gr_date"
        );

      if (fetchError) {
        console.error(
          "Duplicate Check Error:",
          fetchError
        );

        alert(
          "❌ Could not check existing GRs: " +
            fetchError.message
        );

        return;
      }

      // Skip duplicates based on title + date
      const newRows =
        rows.filter((row) => {
          return !existingGRs?.some(
            (existing) =>
              existing.title
                ?.trim()
                .toLowerCase() ===
                row.title
                  .trim()
                  .toLowerCase() &&
              existing.gr_date ===
                row.gr_date.trim()
          );
        });

      const skippedCount =
        rows.length -
        newRows.length;

      if (
        newRows.length === 0
      ) {
        alert(
          `ℹ️ No new GRs to import. ${skippedCount} duplicate GR(s) were skipped.`
        );

        return;
      }

      // Prepare records
      const recordsToInsert =
        newRows.map((row) => {
          const {
            data:
              publicUrlData,
          } =
            supabase.storage
              .from(
                "gr-pdfs"
              )
              .getPublicUrl(
                row.pdf_url.trim()
              );

          return {
            title:
              row.title.trim(),

            department:
              row.department.trim(),

            gr_date:
              row.gr_date.trim(),

            summary:
              row.summary.trim(),

            keywords:
              row.keywords
                ? row.keywords
                    .split(",")
                    .map(
                      (
                        keyword
                      ) =>
                        keyword.trim()
                    )
                    .filter(
                      Boolean
                    )
                : [],

            pdf_url:
              publicUrlData.publicUrl,

            official_source_url:
              row
                .official_source_url
                ?.trim() ||
              null,
          };
        });

      // Insert new records
      const {
        error:
          insertError,
      } = await supabase
        .from("grs")
        .insert(
          recordsToInsert
        );

      if (insertError) {
        console.error(
          "Bulk Import Error:",
          insertError
        );

        alert(
          "❌ Bulk Import Failed: " +
            insertError.message
        );

        return;
      }

      alert(
        `✅ ${recordsToInsert.length} GR(s) imported successfully!` +
          (skippedCount > 0
            ? ` ${skippedCount} duplicate GR(s) skipped.`
            : "")
      );

      setRows([]);
      setFileName("");
    } catch (error) {
      console.error(
        "Bulk Import Error:",
        error
      );

      alert(
        "❌ Error importing Government Resolutions."
      );
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700 mb-2">
        📥 Bulk Import Government Resolutions
      </h2>

      <p className="text-gray-600 mb-5">
        Upload a CSV file to preview GR data before importing.
      </p>

      <input
        type="file"
        accept=".csv,text/csv"
        onChange={
          handleFileChange
        }
        disabled={importing}
        className="w-full border rounded-xl p-3"
      />

      {fileName && (
        <p className="mt-3 text-sm text-gray-600">
          📄 Selected File:{" "}
          {fileName}
        </p>
      )}

      {rows.length > 0 && (
        <div className="mt-6">

          <h3 className="text-lg font-bold text-green-700">
            CSV Preview
          </h3>

          <p className="text-gray-600 mt-1 mb-4">
            Total GRs found:{" "}
            {rows.length}
          </p>

          <div className="overflow-x-auto">

            <table className="w-full border-collapse border">

              <thead>
                <tr className="bg-gray-100">

                  <th className="border p-2">
                    Title
                  </th>

                  <th className="border p-2">
                    Department
                  </th>

                  <th className="border p-2">
                    Date
                  </th>

                  <th className="border p-2">
                    PDF
                  </th>

                </tr>
              </thead>

              <tbody>

                {rows.map(
                  (
                    row,
                    index
                  ) => (
                    <tr
                      key={
                        index
                      }
                    >

                      <td className="border p-2">
                        {
                          row.title
                        }
                      </td>

                      <td className="border p-2">
                        {
                          row.department
                        }
                      </td>

                      <td className="border p-2">
                        {
                          row.gr_date
                        }
                      </td>

                      <td className="border p-2">
                        {
                          row.pdf_url
                        }
                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

          <button
            type="button"
            onClick={
              handleImport
            }
            disabled={
              importing
            }
            className="mt-5 w-full bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {importing
              ? "⏳ Importing GRs..."
              : `📥 Import ${rows.length} GRs`}
          </button>

        </div>
      )}

    </div>
  );
}

export default BulkImportGR;