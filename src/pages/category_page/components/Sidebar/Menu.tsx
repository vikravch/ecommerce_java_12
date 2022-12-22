import React from "react";
import './Sidebar.scss'
import { MenuItem } from "./types";
import Checkbox from "../../UI/Checkbox";

type MenuProps = {
	menu: MenuItem,
}

const Menu: React.FC<MenuProps> = ({menu}) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(true)
	const [isActiveCategory, setIsActiveCategory] = React.useState<number>(0)
	const [menuData, setMenuData] = React.useState<MenuItem>(menu)
	
	React.useEffect(() => {
		console.log(menuData + ' menuData')
		console.log(menu + ' menu')
	}, [])
	
	const handleChangeClass = (id: number) => {
		setIsActiveCategory(id)
	}
	
	return (
		<div
			key={menu.name}
			className={`${menu.name}__block block`}>
			
			{/*DropDown Item*/}
			<div
				onClick={() => setIsOpen(prevState => !prevState)}
				className={'dropDownItem'}>
				<h4 className={`${menu.name}__title title`}>{menu.name}</h4>
				<svg
					className={isOpen ? 'up' : 'down'}
					width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9.16658 0.64168C9.01045 0.486471 8.79924 0.399353 8.57908 0.399353C8.35893 0.399353 8.14772 0.486471 7.99158 0.64168L4.99992 3.59168L2.04992 0.64168C1.89378 0.486471 1.68257 0.399353 1.46242 0.399353C1.24226 0.399353 1.03105 0.486471 0.874917 0.64168C0.79681 0.719149 0.734814 0.811317 0.692507 0.912866C0.6502 1.01442 0.628418 1.12334 0.628418 1.23335C0.628418 1.34336 0.6502 1.45228 0.692507 1.55383C0.734814 1.65538 0.79681 1.74754 0.874917 1.82501L4.40825 5.35835C4.48572 5.43645 4.57789 5.49845 4.67944 5.54076C4.78099 5.58306 4.88991 5.60485 4.99992 5.60485C5.10993 5.60485 5.21885 5.58306 5.3204 5.54076C5.42195 5.49845 5.51411 5.43645 5.59158 5.35835L9.16658 1.82501C9.24469 1.74754 9.30669 1.65538 9.34899 1.55383C9.3913 1.45228 9.41308 1.34336 9.41308 1.23335C9.41308 1.12334 9.3913 1.01442 9.34899 0.912866C9.30669 0.811317 9.24469 0.719149 9.16658 0.64168Z"
						fill="grey"/>
				</svg>
			</div>
			
			{/*List*/}
			{isOpen && (
				<div className={`${menu.name}__list list`}>
			{/*CheckBox Containers*/}
					{menu.items.map((category, id) => (
						<Checkbox
							key={category.name}
							menu={menu}
							category={category}
							id={id}
							handleChangeClass={handleChangeClass}
							isActiveCategory={isActiveCategory}
							// setMenuData={setMenuData}
							// menuData={menuData}
						/>
					))}
				</div>
			)
			}
		
		</div>
	)
}

export default Menu;