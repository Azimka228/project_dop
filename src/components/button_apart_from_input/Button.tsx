import React from "react";

type ButtonPropsType = {
	name: string
	callBackButtonHandler: () => void
}


const Button = (props: ButtonPropsType) => {
	const onClickHandler =() => {
		props.callBackButtonHandler()
	}
	return (<button onClick={onClickHandler}>{props.name}</button>
	);
};

export default Button;