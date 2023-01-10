import React from 'react';
import Checkbox from "../../../UI/Checkbox";
import Ratio from "../../../UI/Ratio";

type CheckTypeProps = {
	checkType: string;
	checkValue: string;
}

const CheckboxType: React.FC<CheckTypeProps> = ({ checkType, checkValue }) => {
	switch (checkType) {
		case 'none':
			return null
		case 'checkbox':
			return <Checkbox checkValue={checkValue} />
		case 'ratio':
			return <Ratio checkValue={checkValue} />
		default:
		return <></>
	}
};

export default CheckboxType;