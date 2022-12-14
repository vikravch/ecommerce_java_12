import React from 'react';
import './Checkbox.scss'
import {Item} from "../../components/Sidebar/types";

type CheckboxProps = {
	obj: {
		name: string;
		inputType?: string;
	};
	category: Item
}

const Checkbox: React.FC<CheckboxProps> = ({ obj, category }) => {
	
	return (
		<div
			key={category}
			className={`${obj.name}__checkbox checkbox__container`}>
			{obj.inputType ? (<input className={`${obj.name}__input input`} type={obj.inputType} name="" id={category}/>) : ''}
			<label className={`${obj.name}__label label`} htmlFor={category}>{category}</label>
		</div>
	);
};

export default Checkbox;
