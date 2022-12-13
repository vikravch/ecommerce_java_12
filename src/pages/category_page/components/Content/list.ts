import product1 from '../../assets/img/img1.png'
import product2 from '../../assets/img/img2.png'
import product3 from '../../assets/img/img3.png'
import product4 from '../../assets/img/img4.png'
import product5 from '../../assets/img/img5.png'
import product6 from '../../assets/img/img6.png'
import product7 from '../../assets/img/img7.png'
import product8 from '../../assets/img/img8.png'
import product9 from '../../assets/img/img9.png'

export interface Product {
	id: number;
	img: string;
	title: string;
	price: number;
	sale?: number;
}

export const productsList: Product[] = [
	{
		id: 0,
		img: product1,
		title: 'Basic t-shirt',
		price: 35,
		sale: 0
	},
	{
		id: 1,
		img: product2,
		title: 'Basic t-shirt',
		price: 35,
		sale: 0
	},
	{
		id: 2,
		img: product3,
		title: 'Basic t-shirt',
		price: 35,
		sale: 0
	},
	{
		id: 3,
		img: product4,
		title: 'Basic t-shirt',
		price: 35,
		sale: 0
	},
	{
		id: 4,
		img: product5,
		title: 'Basic t-shirt',
		price: 35,
		sale: 0
	},
	{
		id: 5,
		img: product6,
		title: 'Basic t-shirt',
		price: 35,
		sale: 15
	},
	{
		id: 6,
		img: product7,
		title: 'Basic t-shirt',
		price: 35,
		sale: 45
	},
	{
		id: 7,
		img: product8,
		title: 'Basic t-shirt',
		price: 35,
		sale: 0
	},
	{
		id: 8,
		img: product9,
		title: 'Basic t-shirt',
		price: 35,
		sale: 0
	},
]

