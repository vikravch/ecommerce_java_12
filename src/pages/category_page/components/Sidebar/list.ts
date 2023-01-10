import {MenuItem} from "./types";
import {IMenuItem} from "../../shared/types/root.interfaces";

export const menuItems: IMenuItem[] = [
	{
		name: 'Categories',
		icon: 'categories',
		checkType: 'none',
		textStyle: 'sidebar_item_text',
		items_data: [
			{
				name: 'All',
				checkValue: 'checked',
				isAdded: true,
			},
			{
				name: 'Coats & Jackets',
				checkValue: 'unchecked',
				isAdded: false,
			},
			{
				name: 'T-shirts',
				checkValue: 'unchecked',
				isAdded: false,
			},
			{
				name: 'Tops',
				checkValue: 'unchecked',
				isAdded: false,
			},
			{
				name: 'Trousers',
				checkValue: 'unchecked',
				isAdded: false,
			},
			{
				name: 'Jumpsuits & Rompers',
				checkValue: 'unchecked',
				isAdded: false,
			},
			{
				name: 'Pants',
				checkValue: 'unchecked',
				isAdded: false,
			},
			{
				name: 'Shorts',
				checkValue: 'unchecked',
				isAdded: false,
			},
			{
				name: 'Sweaters',
				checkValue: 'unchecked',
				isAdded: false,
			},
			{
				name: 'Shoes',
				checkValue: 'unchecked',
				isAdded: false,
			},
		]
	},
	{
		name: 'Price',
		icon: 'price',
		checkType: 'checkbox',
		textStyle: 'sidebar_item_text',
		items_data: [
			{
				name: 'Under 100$',
				isAdded: true,
				checkValue: 'checked',
			},
			{
				name: '100$ - 200$',
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: '200$ - 400$',
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: '400$ - 600$',
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: 'Over 600$',
				isAdded: false,
				checkValue: 'unchecked',
			},
		]
	},
	{
		name: 'Size',
		icon: 'size',
		checkType: 'checkbox',
		textStyle: 'sidebar_item_text',
		items_data: [
			{
				name: 'XS',
				isAdded: false,
				checkValue: 'disabled',
			},
			{
				name: 'S',
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: 'M',
				isAdded: true,
				checkValue: 'checked',
			},
			{
				name: 'L',
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: 'XL',
				isAdded: false,
				checkValue: 'disabled',
			},
			{
				name: 'XXL',
				isAdded: false,
				checkValue: 'unchecked',
			},
		]
	},
	{
		name: 'Collection',
		icon: 'collection',
		checkType: 'checkbox',
		textStyle: 'sidebar_item_text',
		items_data: [
			{
				name: 'One',
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: 'Two',
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: 'Three',
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: 'Four',
				isAdded: true,
				checkValue: 'checked',
			},
		]
	},
	{
		name: 'Brand',
		icon: 'brand',
		checkType: 'checkbox',
		textStyle: 'sidebar_item_text',
		items_data: [
			{
				name: "Levi's",
				isAdded: true,
				checkValue: 'checked',
			},
			{
				name: "Jungmaven",
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: "Sunspel",
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: "Uniqlo",
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: "Aime Leon Dore",
				isAdded: true,
				checkValue: 'checked',
			},
		]
	},
	{
		name: 'Style',
		icon: 'style',
		checkType: 'ratio',
		textStyle: 'sidebar_item_text',
		items_data: [
			{
				name: "All styles",
				isAdded: true,
				checkValue: 'checked',
			},
			{
				name: "A-Line",
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: "Graphic T-Shirts",
				isAdded: false,
				checkValue: 'unchecked',
			},
		]
	},
	{
		name: 'Season',
		icon: 'season',
		checkType: 'checkbox',
		textStyle: 'sidebar_item_text',
		items_data: [
			{
				name: 'Spring',
				isAdded: false,
				checkValue: 'unchecked',
			},
			{
				name: 'Summer',
				isAdded: true,
				checkValue: 'checked',
			},
			{
				name: 'Fall',
				isAdded: true,
				checkValue: 'checked',
			},
			{
				name: 'Winter',
				isAdded: false,
				checkValue: 'unchecked',
			},
		]
	}
]