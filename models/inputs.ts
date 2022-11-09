interface ValueAndMessage {
	value: boolean | number | RegExp;
	message: string;
}

interface Input {
	id: string;
	name: string;
	placeholder?: string;
	required?: ValueAndMessage;
	minLength?: ValueAndMessage;
	maxLength?: ValueAndMessage;
	pattern?: ValueAndMessage;
	checked?: boolean;
	isEmoney?: boolean;
}

export interface InputsInt {
	billing: Input[];
	shipping: Input[];
	payment: Input[];
	'e-money': Input[];
}
