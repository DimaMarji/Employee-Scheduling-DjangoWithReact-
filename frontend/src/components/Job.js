import React from 'react'
import jobs from '../jobs'
import { Navbar, Nav, Container,Dropdown } from 'react-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import employees from '../employees'
function Job() {
   

    return (
        <div>
            <Table striped bordered hover responsive className='table-sm'>
                                <thead style={{backgroundColor:'#457b9d'}}>
                                    <tr>
                                        <th className='h5' style={{color:'white'}}>Job Name</th>
                                        <th></th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {jobs.map(job => (
                                        <tr key={job._id}>
                                            <td>{job.name}</td>
                                            <td>{job.employee ? (
                                               <span style={{color:'white'}} className=" rounded-pill border bg-success border-5">{job.employee}</span> 
                                            ):(
                                                <select className='btn btn-sm btn-primary' >
                                                      <option>Schedule</option>
                                                    {employees.map(employee => (
                                                      
                                                    <option value={employee.id}>{employee.name}</option>
                                                    ))}
                                                    </select>
                                            )}
                                    
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table> 
        </div>
    )
}

export default Job
