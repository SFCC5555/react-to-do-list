
import logo from './logo.svg';
import './App.css';

import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {Button} from "./Button";

import { useState } from 'react';

let data = JSON.parse(localStorage.getItem('data'));

let keyCounter = data?data.dataKeyCounter:0;

function App() {

  function setData() {
    localStorage.setItem('data',JSON.stringify({dataKeyCounter:keyCounter,dataCounter:counter,dataTaskList:taskList}))
  }

  let indexCounter=0;
  let [counter,setCounter] = useState(data?data.dataCounter:0);
  let [input,setInput] = useState('');
  let [taskList,setTaskList] = useState(data?data.dataTaskList:[]);

  function handleChange(event) {
    setInput(event.target.value)
  }
  
  function addTask() {

    if (input!=='') {

      setTaskList(taskList.concat([input]));

      setInput('');

      setCounter(counter+1);

    }  

  }

  document.addEventListener('keydown',addTaskEnter);

  function addTaskEnter(event) {
    if (event.key==='Enter') {
      addTask();
    }
  }

  function clearAll() {
    setTaskList([]);
    setCounter(0);
  }


  function clearTask(index) {

    setTaskList(taskList.slice(0,index).concat(taskList.slice(index+1)));
    setCounter(counter-1);
  }


  function clearDone() {
    let undone = document.querySelectorAll('.todoItem');
    let done = document.querySelectorAll('.checkItem');
    
    let newTaskList = []

    undone.forEach(u=>{
      newTaskList.push(u.innerText)
    })
    
    setTaskList(newTaskList)
    setCounter(counter-done.length);
  }

  setData()

  return (
    <React.Fragment>
      <h1>To-do List</h1>
      <div className='searchSection'>
        <TodoSearch handleChange={handleChange} inputContent={input}/>
        <Button name='ADD' actionFunction={addTask}/>
      </div>

      <TodoCounter counter={counter}/>
      <TodoList>
        {
        taskList.map(t=>{
          keyCounter++
          indexCounter++
        return (<TodoItem actionFunction={clearTask} index={indexCounter-1} key={keyCounter} name={t}/>)
      })}
      </TodoList>
      <div className='deleteSection'>
        <Button name='CLEAR DONE' actionFunction={clearDone}/>
        <Button name='CLEAR ALL' actionFunction={clearAll}/>
      </div>
      
      <div className="react">
          <p>Powered by React.</p>
          <img src={logo} className="reactLogo" alt="logo" />
      </div>

    </React.Fragment>

  );
}

/*let data = JSON.parse(localStorage.getItem('data'));

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state =  {input:'',counter:data?data.dataCounter:0,taskList:data?data.dataTaskList:[]};

    this.handleChange = this.handleChange.bind(this);

    this.addTask = this.addTask.bind(this);

    this.addTaskEnter = this.addTaskEnter.bind(this);

    this.clearAll = this.clearAll.bind(this);

    this.clearTask = this.clearTask.bind(this);

    this.clearDone = this.clearDone.bind(this);

    this.keyCounter = data?data.dataKeyCounter:0;

    this.indexCounter = 0;

    document.addEventListener('keydown',this.addTaskEnter);


  }


  handleChange(event) {
    this.setState({input:event.target.value})
  }
  
  addTask() {

    if (this.state.input!=='') {

      this.indexCounter=0
      
      this.setState(state=>({taskList:state.taskList.concat([state.input])}));

      this.setState(state=>({counter:state.counter+1}));
      
      this.setState({input:''});

    }  

  }

  addTaskEnter(event) {
    if (event.key==='Enter') {
      this.addTask();
    }
  }

  clearAll() {
    this.indexCounter=0
    this.setState({taskList:[]});
    this.setState({counter:0});
  }


  clearTask(index) {
    this.indexCounter=0
    this.setState(state=>({taskList:state.taskList.slice(0,index).concat(state.taskList.slice(index+1))}));
    this.setState(state=>({counter:state.counter-1}));
  }


  clearDone() {
    this.indexCounter=0
    let undone = document.querySelectorAll('.todoItem');
    let done = document.querySelectorAll('.checkItem');
    
    let newTaskList = []

    undone.forEach(u=>{
      newTaskList.push(u.innerText)
    })
    
    this.setState({taskList:newTaskList})
    this.setState(state=>({counter:state.counter-done.length}));

  }

  render() {
    
    localStorage.setItem('data',JSON.stringify({dataKeyCounter:this.keyCounter,dataCounter:this.state.counter,dataTaskList:this.state.taskList}))

    return (
      <React.Fragment>
        <h1>To-do List</h1>
        <div className='searchSection'>
          <TodoSearch handleChange={this.handleChange} inputContent={this.state.input}/>
          <Button name='ADD' actionFunction={this.addTask}/>
        </div>
  
        <TodoCounter counter={this.state.counter}/>
        <TodoList>
          {this.state.taskList.map(t=>{
            this.keyCounter++
            this.indexCounter++
          return (<TodoItem actionFunction={this.clearTask} index={this.indexCounter-1} key={this.keyCounter} name={t}/>)
        })}
        </TodoList>
        <div className='deleteSection'>
          <Button name='CLEAR DONE' actionFunction={this.clearDone}/>
          <Button name='CLEAR ALL' actionFunction={this.clearAll}/>
        </div>
        
        <div className="react">
            <p>Powered by React.</p>
            <img src={logo} className="reactLogo" alt="logo" />
        </div>
  
      </React.Fragment>
  
    );

  }

}*/


export default App;

