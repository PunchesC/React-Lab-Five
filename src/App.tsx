import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Pepsi from './Components/Coke'
import Coke from'./Components/Pepsi'
import {StoryContextProvider} from "./Context/stories-context";
import {StoriesRoute} from "./Components/StoriesRoute"
import ViewStoryRoute from "./Components/ViewStoryRoute"
function App() {
  return (
  
    // <Router>
    //   <StoryContextProvider>
    //   <div className="App">
    //   {" "}
    //   <Switch>
    //     <Route path="/stories/:num"></Route>
    //     <ViewStoryRoute />
    //     </Route>
    //     </Switch>
    //     <StoriesRoute />
    // </div>
    //   </StoryContextProvider>
    // </Router>
    

      <Router>
        <StoryContextProvider>
          <div className="App">
          <nav>
            <NavLink to="/stories">See Saved Stories</NavLink>{' '}
            <NavLink to="/Create">Create a New Story</NavLink>
          </nav>
            <Switch>
              <Route path="/stories/:num">
                <ViewStoryRoute />
              </Route>
            </Switch>
            <StoriesRoute />
          </div>
        </StoryContextProvider>
      </Router>
   
    
    
    

      
 
    

    
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
      