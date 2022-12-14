import React, {useEffect} from "react";
import {menuItems} from "./list";
import './Sidebar.scss'
import Menu from "./Menu";

const Sidebar: React.FC = () => {
	
	const [isOpen, setIsOpen] = React.useState(false)
	
	const handleOnChangeWidth = () => {
		setIsOpen(prevState => !prevState)
		document.body.style.overflow = 'hidden'
	}
	
	const closeSideBar = () => {
		setIsOpen(false)
		document.body.style.overflow = ''
	}
	
	return (
		<aside>
			<div className={'filterBtn'} onClick={() => handleOnChangeWidth()}>filter</div>
			<div className={'container'}>
				<div className={isOpen ? 'sidebar__mobile' : 'sidebar__desktop'}>
					{isOpen && (
						<div className={'closeBtn'}>
							<svg
								onClick={closeSideBar}
								xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
							</svg>
						</div>
					)}
					{menuItems.map((obj) => (
						<Menu obj={obj} key={obj.name}/>
					))}
				</div>
			</div>
		</aside>
	)
}

export default Sidebar;