import React from 'react';
import './Sidebar.scss'

type FilterBtnProps = {
	handleOpenSidebar: () => void;
}

const FilterBtn: React.FC<FilterBtnProps> = ({handleOpenSidebar}) => {
	return (<div className={'filterBtn'} onClick={handleOpenSidebar}>filter</div>);
};

export default FilterBtn;