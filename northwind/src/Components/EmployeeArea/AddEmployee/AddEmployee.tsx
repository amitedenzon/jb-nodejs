import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";
import useTitle from "../../../Utils/useTitle";
import "./AddEmployee.css";
import EmployeeModel from "../../../Models/EmployeeModel";

export default function AddEmployee(): JSX.Element {
	useTitle("Add Employee");

	const { register, handleSubmit, formState } = useForm<EmployeeModel>();
	const navigate = useNavigate();

	async function send(employee: EmployeeModel) {
		try {
			employee.image = (employee.image as unknown as FileList)[0];
			await employeeService.addEmployee(employee);

			notify.success("Employee has been added.");
			navigate("/employees");
		} catch (err: any) {
			notify.error(err);
		}
	}

	return (
		<div className="AddEmployee">
			<form onSubmit={handleSubmit(send)}>
				<h2>Add Employee</h2>

				<label>First Name: </label>
				<input
					type="text"
					{...register(
						"firstName",
						EmployeeModel.firstNameValidation
					)}
				/>
				<span className="err">
					{formState.errors.firstName?.message}
				</span>

				<label>Last Name: </label>
				<input
					type="text"
					{...register("lastName", EmployeeModel.lastNameValidation)}
				/>
				<span className="err">
					{formState.errors.lastName?.message}
				</span>

				<label>Country: </label>
				<input
					type="text"
					{...register("country", EmployeeModel.countryValidation)}
				/>
				<span className="err">{formState.errors.country?.message}</span>

				<label>City: </label>
				<input
					type="text"
					{...register("city", EmployeeModel.cityValidation)}
				/>
				<span className="err">{formState.errors.city?.message}</span>

				<label>Birth Date: </label>
				<input
					type="date"
					{...register(
						"birthDate",
						EmployeeModel.birthDateValidation
					)}
				/>
				<span className="err">
					{formState.errors.birthDate?.message}
				</span>

				<label>Image: </label>
				<input
					type="file"
					accept="image/*"
					{...register("image", EmployeeModel.imageValidation)}
				/>
				<span className="err">{formState.errors.image?.message}</span>

				<button>Add</button>
			</form>
		</div>
	);
}
