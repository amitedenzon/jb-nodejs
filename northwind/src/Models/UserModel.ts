class UserModel {
	public id: number | undefined;
	public firstName: string | undefined;
	public lastName: string | undefined;
	public email: string | undefined;
	public password: string | undefined;
	public role: string | undefined; // User / Admin
}

export default UserModel;
