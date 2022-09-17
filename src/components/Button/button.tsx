import React from "react";

type ButtonType = {
	title: string
	callBack: () => void
}

const Button = (props: ButtonType) => {

	const onClickHandler = () =>{
		props.callBack()
	}
	return (<>
			<button onClick={onClickHandler}>{props.title}</button>
		</>

	);
};

export default Button;