import axios from "axios";

const Rest_SpringBoot_Base_Url = "http://localhost:8080/employees";

export const listEmployees = () => { return (axios.get(Rest_SpringBoot_Base_Url))};
export const addEmployee = (employee) => { return (axios.post(Rest_SpringBoot_Base_Url,employee))};
export const getEmployee = (employeeId) => { return (axios.get(Rest_SpringBoot_Base_Url+'/'+employeeId))};
export const updateEmployee = (employeeId,employee) => { return (axios.put(Rest_SpringBoot_Base_Url+'/'+employeeId,employee))};
export const deleteEmployee = (employeeId) => { return (axios.delete(Rest_SpringBoot_Base_Url+'/'+employeeId))};