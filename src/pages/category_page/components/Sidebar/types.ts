export interface MenuItem {
	name: string;
	icon?: string;
	inputType?: string;
	items: Category[];
}

export type Category = {
	name: string;
	isChecked?: boolean;
}