import React from "react";
import './Sidebar.scss'
import Menu from "./Menu";
import CloseBtn from "./CloseBtnSidebar";
import FilterBtn from "./FilterBtn";
import {MyContext} from "../../assets/utils/context";

type SidebarProps = {
	isOpenSidebar: boolean;
	setIsOpenSidebar: (state: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({setIsOpenSidebar, isOpenSidebar}) => {
	
	const context = React.useContext(MyContext)
	
	const handleOpenSidebar = () => {
		setIsOpenSidebar(true)
			document.body.style.overflow = 'hidden'
	}
	
	const closeSideBar = () => {
		setIsOpenSidebar(false)
		document.body.style.overflow = ''
	}
	
	return (
			<aside>
				<FilterBtn handleOpenSidebar={handleOpenSidebar} />
				<div className={isOpenSidebar ? 'bg__sidebar' : ''}>
					<div className={isOpenSidebar ? 'sidebar__mobile' : 'sidebar__desktop'}>
						{isOpenSidebar && (<CloseBtn closeSideBar={closeSideBar} />)}
						{context!.menuData.map((menu) => (
							<Menu menu={menu} key={menu.name}/>
						))}
					</div>
				</div>
			</aside>
	)
}

export default Sidebar;