const TableBody = ({ tableData, columns }) => {
    return (
      <tbody>
        {tableData.map((data) => {
          return (
            <tr key={data.product_id} className='products-table-row'>
              {columns.map(({ accessor,format }) => {
                let tData = data[accessor] ? data[accessor] : "——";
                if(data[accessor] && format)
                {
                    tData = format(tData);
                }
                return <td key={accessor}>{tData}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };
  
  export default TableBody;