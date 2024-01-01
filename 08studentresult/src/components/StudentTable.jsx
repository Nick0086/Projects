import React from 'react'
import "./StudentTable.css"

function StudentTable({ studentdatas, removeHandler, geteditdata }) {

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
          <title>Print Table</title>
          <style>
            /* Add your styles for printing here */
            h1{
              text-align: center;
            }
            .result-table {
              border: 1px solid #000;
              border-collapse: collapse;
              margin: 10px;
              text-align: center;
            }
            .result-table th, .result-table td {
              border: 1px solid #000;
              padding: 8px;
            }
          </style>
        </head>
        <body>
          <h1>Student Table</h1>
          <table border="1" cellPadding="8" cellSpacing="0" class='result-table'>
            <!-- Your table content -->
            <tr>
          <th>ID</th>
          <th>Name</th>
          <th>AC</th>
          <th>Law</th>
          <th>Stat</th>
          <th>Eco</th>
          <th>Audit</th>
          <th>Total Marks</th>
          <th>Percentage</th>
          <th>Result</th>
          <th>Max Mark</th>
          <th>Min Mark</th>
        </tr>
            ${getPrintableTableContent()}
          </table>
        </body>
        </html>
      `);
    printWindow.document.close();
    printWindow.print();
  };

  const getPrintableTableContent = () => {
    // Generate the HTML content for the table based on your data
    return studentdatas.map((data) => (
      `<tr>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.sub1}</td>
          <td>${data.sub2}</td>
          <td>${data.sub3}</td>
          <td>${data.sub4}</td>
          <td>${data.sub5}</td>
          <td>${data.total}</td>
          <td>${data.percentage}</td>
          <td>${data.result}</td>
          <td>${data.max}</td>
        <td>${data.min}</td>
        </tr>`
    )).join('');
  };


  return (
    <table border="1" cellPadding="8" cellSpacing="0" className='result-table' >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>AC</th>
          <th>Law</th>
          <th>Stat</th>
          <th>Eco</th>
          <th>Audit</th>
          <th>Total Marks</th>
          <th>Percentage</th>
          <th>Result</th>
          <th>Max Mark</th>
          <th>Min Mark</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          studentdatas &&
          studentdatas.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.sub1}</td>
              <td>{data.sub2}</td>
              <td>{data.sub3}</td>
              <td>{data.sub4}</td>
              <td>{data.sub5}</td>
              <td>{data.total}</td>
              <td>{data.percentage}</td>
              <td>{data.result}</td>
              <td>{data.max}</td>
              <td>{data.min}</td>
              <td><button type="submit" className='submit-btn edit-btn' onClick={(e) => geteditdata(data.id)}  >Edit</button></td>
              <td><button type="submit" className='submit-btn del-btn' onClick={(e) => removeHandler(data.id)} >Remove</button></td>
            </tr>
          ))
        }
      </tbody>
      <tbody>
        <button type="submit" className='submit-btn print-btn' onClick={handlePrint} >Print Table 🖨️</button>
      </tbody>
    </table>
  )
}

export default StudentTable;