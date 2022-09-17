import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import Body from "./components/Body/Body";
import NewComponent from "./components/NewComponent/NewComponent";
import Button from "./components/Button/button";
import UseState from "./components/useState/useState";



function App() {
    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]
    const fooTest = (name:string) => {
        console.log(name)
    }
  return (
    <div className="App">
      <Header title ={"Header"}/>
      <Body title={"Body"}/>
        <NewComponent students={students}/>

        <Button title={'ALL CASH'} callBack={() => fooTest('Test')}/>
        <Button title={'DOLLAR'} callBack={() => fooTest('Test')}/>
        <Button title={'RUBLE'} callBack={() => fooTest('Test')}/>
            <div>
                <UseState/>
            </div>

    </div>
  );
}

export default App;
