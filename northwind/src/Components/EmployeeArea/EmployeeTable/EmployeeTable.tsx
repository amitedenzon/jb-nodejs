import { useEffect, useState } from "react";
import "./EmployeeTable.css";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";
import EmployeeModel from "../../../Models/EmployeeModel";

export function EmployeeTable(): JSX.Element {
	const [employees, setEmployees] = useState<EmployeeModel[]>([]);

	useEffect(() => {
		employeeService
			.getAllEmployees()
			.then((dbEmployee) => {
				setEmployees(dbEmployee);
			})
			.catch((err) => {
				notify.error(err);
			});
	});
	return (
		<div className="EmployeeTable">
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Country</th>
						<th>City</th>
						<th>Birth Date</th>
						<th>Image</th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee) => (
						<tr>
							<td>{employee.firstName}</td>
							<td>{employee.lastName}</td>
							<td>{employee.country}</td>
							<td>{employee.city}</td>
							<td>{employee.birthDate?.toString()}</td>
							<td>
								<img src={employee.imageUrl} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
