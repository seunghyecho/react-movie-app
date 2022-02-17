import { useTable, useSortBy } from "react-table";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

export default function TableComponent({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          sortBy: [{ id: "id", desc: true }],
        },
      },
      useSortBy
    );
  return (
    <table {...getTableProps()} style={{}}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaCaretDown />
                      ) : (
                        <FaCaretUp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} style={{}}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
