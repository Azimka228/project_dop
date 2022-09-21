import React, { useState} from "react";
import "./App.css";
import Button from "./components/button_apart_from_input/Button";
import {Input} from "./components/button_apart_from_input/Input";


function App() {
	// const students = [
	// 	{id: 1, name: "James", age: 8},
	// 	{id: 2, name: "Robert", age: 18},
	// 	{id: 3, name: "John", age: 28},
	// 	{id: 4, name: "Michael", age: 38},
	// 	{id: 5, name: "William", age: 48},
	// 	{id: 6, name: "David", age: 58},
	// 	{id: 7, name: "Richard", age: 68},
	// 	{id: 8, name: "Joseph", age: 78},
	// 	{id: 9, name: "Thomas", age: 88},
	// 	{id: 10, name: "Charles", age: 98},
	// 	{id: 11, name: "Christopher", age: 100},
	// ]
	const [message, setMessage] = useState([
		{message: "hi"}
	])
	const addMessage = (value: string) => {
		let newMessage = {message: value}
		setMessage([
			newMessage,
			...message,

		])
		setTitleValue("")
	}
	const callBackButtonHandler = () => {
		addMessage(Title)
	}
	const [Title, setTitleValue] = useState("")
	console.log(message)
	return (
		<div className="App">
			<Input Title={Title} setTitleValue={setTitleValue}/>
			<Button  name={'ADD'} callBackButtonHandler={callBackButtonHandler} />
			{message.map((el, index) => {
				return (<div key={index}>
					{el.message}
				</div>)
			})}





			{/*<Header title ={"Header"}/>*/}
			{/*<Body title={"Body"}/>*/}
			{/*  <NewComponent students={students}/>*/}
			{/*      <div>*/}
			{/*          <UseState/>*/}
			{/*          <Filter/>*/}
			{/*      </div>*/}
			{/*<FullInput message={message} addMessage={addMessage} Title={Title} setTitleValue={setTitleValue}*/}
			{/*		   addTitleValue={addTitleValue}/>*/}
		</div>
	);
}

export default App;
