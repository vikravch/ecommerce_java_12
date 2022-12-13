import React, {RefObject} from 'react';
import styles from "./Sidebar.module.scss";
import CategoriesList from "./CategoriesList";
import PricesList from "./PricesList";
import SizesList from "./SizesList";
import CollectionsList from "./CollectionsList";
import BrandsList from "./BrandsList";
import StylesList from "./StylesList";
import SeasonsList from "./SeasonsList";


const Sidebar: React.FC = () => {
	
	const [isOpen, setIsOpen] = React.useState<boolean>(false)
	
	const handleChangeStyles = () => {
		setIsOpen(prevState => !prevState)
		document.body.style.backgroundColor = '#43434387'
	}
	
	const closeSideBar = () => {
		document.body.style.backgroundColor = ''
	}
	
	// React.useEffect(() => {
	// 	let handler = (e: any) => {
	// 		if (!menuRef.current!.contains(e.currentTarget)) {
	// 			setIsOpen(false)
	// 			document.body.style.backgroundColor = ''
	// 		}
	// 	}
	// 	document.body.addEventListener('mousedown', handler)
	// 	return () => {
	// 		document.body.removeEventListener('mousedown', handler)
	// 	}
	// }, [])
	// const menuRef = React.useRef<HTMLDivElement>(null)
	
	
	return (
		<div className={styles.wrapper}
		>
			<div
				onClick={handleChangeStyles}
				className={styles.filterBtn}>filter
			</div>
			<aside
				// ref={menuRef}
				
				// className={isOpen ? styles.sidebarMobile : styles.sidebar}>
				className={isOpen ? styles.sidebarMobile : styles.sidebar}>
				{isOpen && (<div
					onClick={() => setIsOpen(prevState => !prevState)}
					style={{
						height: '30px',
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<svg
						onClick={closeSideBar}
						xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#568FFF"
						className="bi bi-arrow-left" viewBox="0 0 16 16">
						<path fillRule="evenodd"
						      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
					</svg>
				</div>)}
				<CategoriesList/>
				<PricesList/>
				<SizesList/>
				<CollectionsList/>
				<BrandsList/>
				<StylesList/>
				<SeasonsList/>
			</aside>
		
		</div>
	);
};

export default Sidebar;