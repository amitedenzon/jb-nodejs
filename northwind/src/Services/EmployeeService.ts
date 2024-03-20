import axios from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";
import { appConfig } from "../Utils/AppConfig";

class EmployeeService {
	public async getAllEmployees(): Promise<EmployeeModel[]> {
		const res = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
		return res.data;
	}
}

export const employeeService = new EmployeeService();
