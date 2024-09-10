import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { deleteEmployee, listEmployees } from './services/EmployeeService'

const ListEmployeesComponent = () => {
    const [employees, setEmployees] = useState([])
    
    const navigate = useNavigate()

    useEffect(() => {
        listEmployees().then((response) => {
            return (
                setEmployees(response.data)
            )
        }).catch(error => {console.error(error)})
    }, [])
    
    function directToEmployee(){
        navigate('/addEmployee')
    } 

    function directToUpdate(id){
        navigate(`/updateEmployee/${id}`)
    }

    function directToDelete(id){
        deleteEmployee(id).then(() => {
            listEmployees().then((response) => {
                return (
                    setEmployees(response.data)
                )
            }).catch(error => {console.error(error)})
        })
    }

  return (
    <>
        <div className='container'>
            <br /><br />
            <h2 className='text-center mt-2'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={directToEmployee}>Add employee</button>
            <table className='table table-striped table-bordered table-info'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {
                        employees.map((employee) => {
                            return(
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => {directToUpdate(employee.id)}}>Update</button>
                                        <button className='btn btn-danger' style={{marginLeft:'10px'}} onClick={() => {directToDelete(employee.id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ListEmployeesComponent