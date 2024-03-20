import { RegisterOptions } from "react-hook-form";

export default class EmployeeModel {
	public id: number | undefined;
	public firstName: string | undefined;
	public lastName: string | undefined;
	public country: string | undefined;
	public city: string | undefined;
	public birthDate: Date | undefined;
	public imageUrl: string | undefined;
	public image: File | undefined;

	public static firstNameValidation: RegisterOptions<
		EmployeeModel,
		"firstName"
	> = {
		required: { value: true, message: "Missing first name." },
		minLength: { value: 2, message: "Name too short." },
		maxLength: { value: 20, message: "Name too long." },
	};

	public static lastNameValidation: RegisterOptions<
		EmployeeModel,
		"lastName"
	> = {
		required: { value: true, message: "Missing last name." },
		minLength: { value: 2, message: "Name too short." },
		maxLength: { value: 20, message: "Name too long." },
	};

	public static countryValidation: RegisterOptions<EmployeeModel, "country"> =
		{
			required: { value: true, message: "Missing country." },
			minLength: { value: 2, message: "Name too short." },
			maxLength: { value: 20, message: "Name too long." },
		};

	public static cityValidation: RegisterOptions<EmployeeModel, "city"> = {
		required: { value: true, message: "Missing city." },
		minLength: { value: 2, message: "Name too short." },
		maxLength: { value: 20, message: "Name too long." },
	};

	public static birthDateValidation: RegisterOptions<
		EmployeeModel,
		"birthDate"
	> = {
		required: { value: true, message: "Missing birth date." },
	};

	public static imageValidation: RegisterOptions<EmployeeModel, "image"> = {
		required: { value: true, message: "Missing image." },
	};
}
