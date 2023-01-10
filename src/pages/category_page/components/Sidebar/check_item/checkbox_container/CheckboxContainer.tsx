import React from 'react';
import styles from './CheckboxContainer.module.scss'
import CheckboxType from "../../../../components/Sidebar/check_item/CheckboxType";
import {ICategory, IMenuItem} from "../../../../shared/types/root.interfaces";
import Text from "../../../../shared/ui/text";

type CheckboxSecondProps = {
	children: React.ReactNode;
	isAdded: boolean;
	onClick: (menu: IMenuItem, category: ICategory, id: number) => void;
	checkType: string;
	id: number;
	category: ICategory;
	menu: IMenuItem;
	checkValue: string;
}

const CheckboxContainer: React.FC<CheckboxSecondProps> = ({
	                                                          isAdded,
	                                                          onClick,
	                                                          children,
	                                                          checkType,
	                                                          id,
	                                                          menu,
	                                                          category,
	                                                          checkValue
                                                          }) => {
	return (
		<div
			className={`${menu.name === 'Size' ? styles.sizes_checkbox_container : ''} ${styles[checkValue]}`}
			onClick={() => onClick(menu, category, id)}
		>
			<CheckboxType checkType={checkType} checkValue={checkValue}/>
			<Text checkValue={checkValue} checkType={checkType} categoryId={id}>{children}</Text>
		</div>
	);
};

export default CheckboxContainer;