import { Notyf } from "notyf";

class Notify {
	private notyf = new Notyf({
		duration: 4000,
		position: { x: "center", y: "top" },
		dismissible: true,
	});

	private extractMessage(err: any) {
		//on string ERROR
		if (typeof err === "string") return err;

		//on axios ERROR
		if (typeof err?.response?.data === "string") return err.response.data;

		//on javascript ERROR
		if (typeof err?.message === "string") return err.message;

		return "Something went wrong, please try again."; //JIC
	}

	public success(msg: string): void {
		this.notyf.success(msg);
	}

	public error(err: any): void {
		const msg = this.extractMessage(err);
		this.notyf.error(msg);
	}
}

export const notify = new Notify();
