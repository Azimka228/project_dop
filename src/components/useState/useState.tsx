import React, {useState} from "react";
import Button from "../Button/button";

const UseState = () => {
	let [Number,setNumber] = useState(0)

	const IncrementNum = () =>{
		setNumber(++Number)
	}
	const DecrementNum = () =>{
		setNumber(--Number)
	}
	const ResetNum = () => {
		setNumber(0)
	}

	return (
		<>
			<div>{Number}</div>
			<div>
				<Button title={"Increement"} callBack={IncrementNum}/>
				<Button title={"Decrement"} callBack={DecrementNum}/>
				<Button title={"Reset"} callBack={ResetNum}/>
			</div>

		</>
	);
};

export default UseState;