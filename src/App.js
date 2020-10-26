import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import axios from 'axios'

function App() {
  const home = () => {
    return <h1>welcome to shreeji house</h1>;
  };
  const [names, setname] = useState({
    name:'',
    phone:'',
    email:''
  });
  const change = (e) => {
    const { name, value } = e.target;
    setname((olddata)=>{
      return{...olddata,[name]:value}
    });
  };
  const data={
    name:`${names.name}`,
    phone:`${names.phone}`,
    email:`${names.email}`
  }
  const submit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost/',data).then(console.log(data)).catch((err)=>{console.log(err)})
  }
  const contact = () => {
    return (
      <>
        <h1>welcome to shreeji contact</h1>
        <form onSubmit={submit}>
          name:
          <input name="name" type='text' value={names.name} onChange={change}/>
          <br />
          <br />
          phone:
          <input name="phone" type='text' value={names.phone} onChange={change}/>
          <br />
          <br />
          email:
          <input name="email" type='text' value={names.email} onChange={change}/>
          <br />
          <br />
          <input type="submit" />
        </form>
      </>
    );
  };
  const Navbar = () => {
    return (
      <>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/contact"> contact </NavLink>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={home}></Route>
        <Route exact path="/contact" component={contact}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
