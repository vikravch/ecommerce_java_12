export interface MenuItems {
	name: string;
	icon?: string;
	inputType?: string;
	items: Item[];
}

export type Item = string