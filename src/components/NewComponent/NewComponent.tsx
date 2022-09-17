import React from "react";

type NewComponentType = {
	students: Array<StudentsBio>
}
type StudentsBio = {
	id: number
	age: number
	name: string
}

const NewComponent = (props: NewComponentType) => {

	// const topCars = [
	// 	{manufacturer: "BMW", model: "m5cs"},
	// 	{manufacturer: "Mercedes", model: "e63s"},
	// 	{manufacturer: "Audi", model: "rs6"}
	// ]
	// return (
	// 	<>
	// 		<table>
	// 			<tbody>
	// 			<tr>
	// 				{topCars.map((el, index) => {
	// 					return <tr key={index}>
	// 						<td>CAR:{topCars[index].manufacturer}</td>
	// 						<td>MODEL:{topCars[index].model}</td>
	// 					</tr>
	//
	// 				})}
	// 			</tr>
	// 			</tbody>
	// 		</table>
	// 	</>
	// )
	return (
		<div>
			<ul>
				{props.students.map((el, index) => {
					return <li key={index}>
						<span>AGE: {props.students[index].age} </span>
						<span>NAME: {props.students[index].name}</span>
					</li>

				})}
			</ul>
		</div>
	);
};

export default NewComponent;