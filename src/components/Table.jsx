import React from "react";

const Table = () => {
  return (
    <div className="table-responsive">
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Precio</td>
            <td>Stock</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>producto 1</td>
            <td>100</td>
            <td>10</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
