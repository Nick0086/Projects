import React from 'react'
import "./StudentTable.css"

function StudentTable({studentdatas,removeHandler,geteditdata}) {

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
    </table>
  )
}

export default StudentTable;