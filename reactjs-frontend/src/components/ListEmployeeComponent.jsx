import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
            
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.log(error);
            
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List Employees</h2>
            <Link to="/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email ID</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Link to={`/edit-employee/${employee.id}`} className='btn btn-info'>Update</Link>
                                    <button className='btn btn-danger ml-2' onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                    <Link className='btn btn-info ml-2' to={`/view-employee/${employee.id}`}>View</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent;