import {MenuItem} from "./types";

export const menuItems: MenuItem[] = [
	{
		name: 'Categories',
		icon: 'categories',
		items: [
			{name: 'All'},
			{name: 'Coats & Jackets'},
			{name: 'T-shirts'},
			{name: 'Tops'},
			{name: 'Trousers'},
			{name: 'Jumpsuits & Rompers'},
			{name: 'Pants'},
			{name: 'Shorts'},
			{name: 'Sweaters'},
			{name: 'Shoes'},
		]
	},
	{
		name: 'Price',
		icon: 'price',
		inputType: 'checkbox',
		items: [
			{
				name: 'Under 100$',
				isChecked: true,
			},
			{
				name: '100$ - 200$',
				isChecked: false,
			},
			{
				name: '200$ - 400$',
				isChecked: false,
			},
			{
				name: '400$ - 600$',
				isChecked: false,
			},
			{
				name: 'Over 600$',
				isChecked: false,
			},
		]
	},
	{
		name: 'Size',
		icon: 'size',
		inputType: 'checkbox',
		items: [
			{
				name: 'XS',
				isChecked: false,
			},
			{
				name: 'S',
				isChecked: false,
			},
			{
				name: 'M',
				isChecked: true,
			},
			{
				name: 'L',
				isChecked: false,
			},
			{
				name: 'XL',
				isChecked: false,
			},
			{
				name: 'XXL',
				isChecked: false,
			},
		]
	},
	{
		name: 'Collection',
		icon: 'collection',
		inputType: 'checkbox',
		items: [
			{
				name: 'One',
				isChecked: false,
			},
			{
				name: 'Two',
				isChecked: false,
			},
			{
				name: 'Three',
				isChecked: false,
			},
			{
				name: 'Four',
				isChecked: true,
			},
		]
	},
	{
		name: 'Brand',
		icon: 'brand',
		inputType: 'checkbox',
		items: [
			{
				name: "Levi's",
				isChecked: true,
			},
			{
				name: "Jungmaven",
				isChecked: false,
			},
			{
				name: "Sunspel",
				isChecked: false,
			},
			{
				name: "Uniqlo",
				isChecked: false,
			},
			{
				name: "Aime Leon Dore",
				isChecked: true,
			},
		]
	},
	{
		name: 'Style',
		icon: 'style',
		inputType: 'radio',
		items: [
			{
				name: "All styles",
				isChecked: true,
			},
			{
				name: "A-Line",
				isChecked: false,
			},
			{
				name: "Graphic T-Shirts",
				isChecked: false,
			},
		]
	},
	{
		name: 'Season',
		icon: 'season',
		inputType: 'checkbox',
		items: [
			{
				name: 'Spring',
				isChecked: false,
			},
			{
				name: 'Summer',
				isChecked: true,
			},
			{
				name: 'Fall',
				isChecked: true,
			},
			{
				name: 'Winter',
				isChecked: false,
			},
		]
	}
]