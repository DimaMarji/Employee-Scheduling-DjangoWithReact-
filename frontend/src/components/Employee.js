import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { listEmployees } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import employees from '../employees'
function Employee() {
    const dispatch = useDispatch()

    // const employeeList = useSelector(state => state.employeeList)
    // const { employees } = employeeList

   
    return (
        <div>
            <Table striped bordered hover responsive className='table-sm'>
                                <thead style={{backgroundColor:'#457b9d'}}>
                                    <tr >
                                        <th className='h5' style={{color:'white'}}>Employee Name</th>
                                        <th></th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {employees.map(employee => (
                                        <tr key={employee._id}>
                                            <td>{employee.name}</td>
                                            <td>
                                                <LinkContainer to={'/schedule'}>
                                                    <Button  variant='primary' className='btn-sm'>
                                                        <i className='fas fa-plus'></i> Schedule for a job
                                                    </Button>
                                                </LinkContainer>

                                    
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table> 
        </div>
    )
}

export default Employee
