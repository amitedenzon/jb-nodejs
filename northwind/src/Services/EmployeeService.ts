import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import EmployeeModel from "../Models/EmployeeModel";

class EmployeeService {
	public async getAllEmployees(): Promise<EmployeeModel[]> {
		const res = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
		return res.data;
	}

	public async addEmployee(employee: EmployeeModel): Promise<void> {
		const options = { headers: { "content-Type": "multipart/form-data" } };
		await axios.post<EmployeeModel>(
			appConfig.employeesUrl,
			employee,
			options
		);
	}

	public async deleteEmployee(id: number): Promise<void> {
		await axios.delete(appConfig.employeesUrl + id);
	}

	public async updateProduct(employee: EmployeeModel): Promise<void> {
		const options = { headers: { "content-Type": "multipart/form-data" } };
		await axios.put<EmployeeModel>(
			appConfig.employeesUrl + employee.id,
			employee,
			options
		);
	}
}

export const employeeService = new EmployeeService();
