import React from "react";

type MessageType = {
	message: Array<MessageArrayType>
}
type MessageArrayType ={
	message: string
}
const FulInputMessages = (props:MessageType) => {
	return (
		<div>
			{props.message.map((el, index) => {
				return (<div key={index}>
					{el.message}
				</div>)
			})}
		</div>
	);
};

export default FulInputMessages;