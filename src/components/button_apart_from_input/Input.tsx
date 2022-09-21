import React, {ChangeEvent} from "react";
type InputPropsType = {
	Title:string
	setTitleValue: (el: string) => void
}
export const Input = (props:InputPropsType ) => {
	const onChangeInputHandler =(e: ChangeEvent<HTMLInputElement>) => {
		props.setTitleValue(e.currentTarget.value)
	}

	return (
		<input value={props.Title} onChange={onChangeInputHandler}/>
	);
};

