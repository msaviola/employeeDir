import React from "react";

function EmployeeRow(props) {
    return (
        <tr>
            <td>{props.employeeRecord.name.first} {props.employeeRecord.name.last}</td>
            <td>{props.employeeRecord.location.street.number} {props.employeeRecord.location.street.name} {props.employeeRecord.location.city} {props.employeeRecord.location.state}{props.employeeRecord.location.country}</td>
            <td>{props.employeeRecord.email}</td>
            <td>{props.employeeRecord.phone}</td>
            <td>{props.employeeRecord.login.username}</td>
        </tr>
    );
}

export default EmployeeRow;