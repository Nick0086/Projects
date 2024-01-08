import React from 'react'
import "./StudentTable.css"

function StudentTable({studentData,delateHandler,editHandler}) {

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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            studentData &&
            studentData.map((data,index) => (
              <tr key={index}>
                <td>{data.no}</td>
                <td>{data.firstname + " " + data.lastname}</td>
                <td>{data.sub1}</td>
                <td>{data.sub2}</td>
                <td>{data.sub3}</td>
                <td>{data.sub4}</td>
                <td>{data.sub5}</td>
                <td>{data.total}</td>
                <td>{data.percentage}</td>
                <td><button type="submit" className='submit-btn edit-btn' onClick={(e) => editHandler(index)} >Edit</button></td>
                <td><button type="submit" className='submit-btn del-btn' onClick={(e) => delateHandler(index)} >Remove</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
}

export default StudentTable