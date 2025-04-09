import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Greeting from './component/greeting';
import Counter from './component/counter';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("")
  const [profession, setProfession] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setName(name);
    setAge(age);
    setProfession(profession);
  }

  return (
    <div className="App">
        <h1>React Debugging</h1>
        <Greeting name={name} age={age} profession={profession}/>
        <Counter />

        <form onSubmit={submit}>
          <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='enter your name'/>
          <input type='text' value={age} onChange={(e)=> setAge(e.target.value)} placeholder='enter your age'/>
          <input type='text' value={profession} onChange={(e)=> setProfession(e.target.value)} placeholder='enter your profession'/>
        </form>
    </div>
  );
}

export default App;

//çI created a DEMO project that uses a props to display values, I created the application, and created a component called greeting, greeting component accept 3 props name, age, profession, inside the main app, we added a state manage meant using use state from react which are set name, set age, set profession, and then created a form that has 3 input,
//that accept the value from the user once a user input the onchange function change the user name age profession, then it will pass down the input to the state managements greeting and pass them to the props then they onchange function will execute we will go over to chrome and install the react debugging toolbar,and then set it up using the react
//debugg tool we are able to see the props that is been passed down any time a prop was missing it gets detected inside the tool using this tool we are able to get our missing props , and also to get the component being diplayed.