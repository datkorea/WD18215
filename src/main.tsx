import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'

interface propsType {
  name: string;
  age?: number
}

function showName({name} : propsType): string{
  return `hello Datvip123 ${name} `;
}

function ShowName({ name }: propsType): JSX.Element {
  return React.createElement("h1", null, `Hello ${name}`);
}


const myName: string = 'Datvip';
const myAge: number = 21;
const isStatus: boolean = false;
const myInfo: {name:string, age: number,status: boolean} = {
  name: 'Datvip',
  age: 21,
  status: false
}


ReactDOM.createRoot(document.getElementById("root")!).render(
  <div>
    <div>Name: {myName}</div>
    <div>Age: {myAge}</div>
    <div>IsStatus: {isStatus ? "ABC" : "XXX"}</div>
    <div>
      myIn4: {myInfo.name} - {myInfo.age} - {myInfo.status ? "ABC" : "XXX"}
    </div>
    <div>funciton : {showName({name: " Datpro123", age : 20})} </div>
    <div>component :<ShowName name = "Dat" age={ 20} /></div>
  </div>
);
