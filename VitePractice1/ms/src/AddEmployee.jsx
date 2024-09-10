import React, { useEffect, useState } from 'react'
import { addEmployee, getEmployee, updateEmployee } from './services/EmployeeService'
import {useNavigate, useParams} from 'react-router-dom'

const AddEmployee = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState({
        firstName:"",
        lastName:"",
        email:""
    })

    const params = useParams()
    const id = params.id

    const navigate = useNavigate()

    useEffect(() => {
        if(id){
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            })
        }
    }, [id])
    

    const handleFirstName = (e) => {return (setFirstName(e.target.value))}
    const handleLastName = (e) => {return (setLastName(e.target.value))}
    const handleEmail = (e) => {return (setEmail(e.target.value))}

    function validation(){
        let valid = true
        const errorCopy = {...error}
        if(firstName){
            errorCopy.firstName = ""
        }else{
            valid=false
            errorCopy.firstName = "Enter First Name"
        }

        if(lastName){
            errorCopy.lastName = ""
        }else{
            valid=false
            errorCopy.lastName = "Enter Last Name"
        }

        if(email){
            errorCopy.email = ""
        }else{
            valid=false
            errorCopy.email = "Enter Email"
        }
        setError(errorCopy)
        return valid

    }

    function heading(){
        if(id){
            return(<h2 className='text-center mt-2'>
                        Update Employee
                    </h2>)
        }else{
            return(<h2 className='text-center mt-2'>
                        Add Employee
                    </h2>)
        }
    }

    function saveOrUpdateEmployee(e){
        e.preventDefault()
        const employee = {firstName,lastName,email}
        if(validation()){
            if(id){
                updateEmployee(id,employee).then(() => {
                    return (
                        navigate('/employees')
                    )
                })
            }else{
                addEmployee(employee).then(() => {
                    return (
                        navigate('/employees')
                    )
                })
            }
        }
        
    }

  return (
    <>
        <div className='container'>
            <br /><br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {heading()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input type="text"
                                className={`form-control ${error.firstName ? 'is-invalid':''}`}
                                placeholder='Enter First Name of Employee'
                                value={firstName}
                                onChange={handleFirstName} />
                                <div className='invalid-feedback'>
                                    {error.firstName && 'Enter first name'}
                                </div>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input type="text"
                                className={`form-control ${error.lastName ? 'is-invalid':''}`}
                                placeholder='Enter Last Name of Employee'
                                value={lastName}
                                onChange={handleLastName} />
                                <div className='invalid-feedback'>
                                    {error.lastName && 'Enter last name'}
                                </div>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input type="text"
                                className={`form-control ${error.email ? 'is-invalid':''}`}
                                placeholder='Enter Email of Employee'
                                value={email}
                                onChange={handleEmail} />
                                <div className='invalid-feedback'>
                                    {error.email && 'Enter email'}
                                </div>
                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddEmployee