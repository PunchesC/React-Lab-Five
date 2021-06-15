import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Pepsi from './Components/Coke'
import Coke from'./Components/Pepsi'
import {StoryContextProvider} from "./Context/stories-context";
import {StoriesRoute} from "./Routes/StoriesRoute"
import ViewStoryRoute from "./Routes/ViewStoryRoute"
import CreateStoryRoute from './Routes/CreateStoryRoute';
import {Story} from './model/Story'


function App() {
  return (
  

    <div className="App">
    <Router>
      <StoryContextProvider>
        <h1>GC Mad Libs</h1>
        <nav>
          <Link to="/stories">See Saved Stories</Link >{" "}
          <Link to="/create-story">Create a New Story</Link>
        </nav>
        <Switch>
          <Route path="/stories/:num" exact>
            <ViewStoryRoute />
          </Route>
          <Route path="/create-story" exact>
            <CreateStoryRoute />
          </Route>
        </Switch>
        <StoriesRoute />
        
      </StoryContextProvider>
    </Router>
  </div>
   
    
    
    

      
 
    

    
  );
}
// import { formatDiagnostic } from 'typescript';

export default App;


{/* <Router>
        <h1>Soda Wars</h1>
        <nav>
          <Link to="/coke">Coke</Link> {' '}
          <Link to="/pepsi">Pepsi</Link>
        </nav>

        <Switch>
          <Route path="/coke">
            <Coke />
          </Route>
          <Route path="/pepsi">
            <Pepsi />
          </Route>
          <Route path="/">
            <Redirect to="/coke" />
          </Route>
        </Switch>
      </Router> */}
      