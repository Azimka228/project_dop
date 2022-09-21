import React, {ChangeEvent} from "react";
import FulInputMessages from "./FullInputMessages/FulInputMessages";

type inputType = {
	message: Array<MessageArrayType>
	addMessage: (m: string) => void
	Title: string
	setTitleValue: (e: string) => void
	addTitleValue: (e: ChangeEvent<HTMLInputElement>) => void
}
type MessageArrayType = {
	message: string
}
const FullInput = (props: inputType) => {
	const handleKeyDown = (event: { key: string; }) => {
		event.key === "Enter" && props.addMessage(props.Title)
	}
	return (
		<>
			<div>
				<input onKeyDown={handleKeyDown} type="text" onChange={props.addTitleValue} value={props.Title}/>
				<button onClick={() => props.addMessage(props.Title)}>+</button>
				<FulInputMessages message={props.message}/>
			</div>
		</>
	);
};

export default FullInput;