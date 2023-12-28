import React from 'react'
import "./StudentTable.css"

function StudentTable() {
  return (
    <table border="1" cellpadding="10" cellspacing="0" className='result-table' >
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
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
  )
}

export default StudentTable;