import React from "react";

function Table({ children }) {
  return (
    <div className="bg-secondary-0 overflow-x-auto text-xs lg:text-lg ">
      <table>{children}</table>
    </div>
  );
}

export default Table;
function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return (
    <tbody>
      {children}
    </tbody>
  );
}

function TableRow({ children }) {
  return <tr className="text-center">{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
