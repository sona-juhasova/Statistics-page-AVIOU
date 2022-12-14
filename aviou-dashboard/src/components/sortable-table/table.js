// sortable table code source: https://blog.logrocket.com/creating-react-sortable-table/

import TableBody from "./table-body";
import TableHead from "./table-head";
import { useSortableTable } from "./use-sortable-table"

const Table = ({ caption, data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <>
      <table className="products-table sortable-table">
        <caption>{caption}</caption>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default Table;