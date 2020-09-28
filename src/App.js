import React from 'react';
import { BrowserRouter,Route ,Switch} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import User from "./User";
import Task from "./Task";
import Navbar from "./Navbar"
import Reset from "./Reset"





function App() {
  return (
    <BrowserRouter>
      
        <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Task" component={Task} />
          
          <Route path="/User" component={User} />
          <Route path="/Login" component={Login} />
          <Route path="/Reset" component={Reset} />
          
         </Switch>
        </div>
        
      
    </BrowserRouter>
  );
}

export default App;

