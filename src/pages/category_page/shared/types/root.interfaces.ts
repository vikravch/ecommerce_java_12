export interface IMenuItem {
	name: string;
	icon?: string;
	checkType: string;
	items_data: ICategory[];
	textStyle: string;
}

export interface ICategory {
	name: string;
	isAdded?: boolean;
	checkValue?: string;
}

export type TChosenFilter = string