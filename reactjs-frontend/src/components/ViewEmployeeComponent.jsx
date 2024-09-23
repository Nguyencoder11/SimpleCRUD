import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';


const ViewEmployeeComponent = () => {
    const {id} = useParams();
    const [employee, setEmployee] = useState({});

    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then((res)=>{
            setEmployee(res.data)
        })
    }, [id]);

    return (
        <div className='mt-4'>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>View Employee Details</h3>
                <div className='card-body'>
                    <div className='row'>
                        <p>Employee First Name: <span>{employee.firstName}</span></p>
                    </div>
                    <div className='row'>
                        <p>Employee Last Name: <span>{employee.lastName}</span></p>
                    </div>
                    <div className='row'>
                        <p>Employee Email ID: <span>{employee.emailId}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployeeComponent
