import React, { useState } from "react";
import { GenerateIconWithFileName } from "../utils/utils";
import "./DynamicTable.css";


export const DynamicTable = ({
  data = [], 
  headers = [], 
  checkedFiles = [], 
  setCheckedFiles = () => {}, 
  checkbox = true,
  onRowСlick = () => {},
  renderRowActions = null, 
  onRowHover = null, 
}) => {

  const [hoveredRow, setHoveredRow] = useState(null);


  const toggleRowCheckbox = (fileId) => {
    setCheckedFiles((prev) =>
      prev.includes(fileId)
        ? prev.filter((id) => id !== fileId)
        : [...prev, fileId],
    );
  };


  const toggleAllCheckboxes = () => {
    setCheckedFiles(
      checkedFiles.length === data.length ? [] : data.map((row) => row.id),
    );
  };


  const renderCellContent = (header, row) => {
    if (header.key === "file_name") {
      return (
        <GenerateIconWithFileName fileName={row.file_name} link={row.link} />
      );
    }

    if (header.key === "first_name") {
      return (
        <GenerateIconWithFileName fileName={row.first_name} link={row.link} />
      );
    }
    
    if (header.key === "is_staff" && renderRowActions) {
      return renderRowActions(row);
    }

    return row[header.key];
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            {checkbox && (
              <th
                style={{ width: "40px" }}
                className="text-center align-middle"
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={
                    data.length > 0 && checkedFiles.length === data.length
                  }
                  onChange={toggleAllCheckboxes}
                />
              </th>
            )}
            {headers.map((header, headerIndex) => (
              <th
                key={header.key}
                className={`${
                  headerIndex === 0 ? "text-start ps-5" : "text-center"
                } align-middle`}
              >
                {header.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={hoveredRow === index ? "table-active" : ""}
              onMouseEnter={() => {
                setHoveredRow(index);
                onRowHover && onRowHover(row);
              }}
              onMouseLeave={() => setHoveredRow(null)}
              onClick={() => onRowСlick(row.id)}
            >
              {checkbox && (
                <td className="text-center align-middle">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={checkedFiles.includes(row.id)}
                    onChange={() => toggleRowCheckbox(row.id)}
                    onClick={(event) => {
                      event.stopPropagation(); 
                    }}
                  />
                </td>
              )}
              {headers.map((header, headerIndex) => (
                <td
                  key={header.key}
                  className={`${
                    headerIndex === 0 ? "text-start ps-5" : "text-center"
                  } align-middle`}
                >
                  {renderCellContent(header, row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
