export interface CheckoutForm {
	address: string;
	city: string;
	country: string;
	email: string;
	'payment-method': string;
	phone: string;
	zip: string;
	'e-money pin'?: string;
	'e-money number'?: string;
}
