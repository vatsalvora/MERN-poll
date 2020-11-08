import React from 'react';
import './App.css';
import PollForm from './components/poll/create/PollForm.js';
import PollList from './components/poll/list/PollList.js';
import PollView from './components/poll/view/PollView.js';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  
  return (
    <Router>
      <div style={{padding: 20 }}>
        <Button variant="contained" color="primary" style={{"margin": "10px" }}>
        <Link to="/create" style={{ color: "white" }}><AddIcon/></Link>
        </Button>
        <Button variant="contained" color="primary" style={{"margin": "10px" }}>
        <Link to="/list" style={{ color: "white" }}><CreateIcon/></Link>
        </Button>
        <Button variant="contained" color="primary" style={{"margin": "10px" }}>
        <Link to="/results" style={{ color: "white" }}><VisibilityIcon/></Link>
        </Button>
        <Switch>
          <Route path="/create">
            <PollForm/>
          </Route>
          <Route path="/list">
            <PollList/>
          </Route>
          <Route path="/view/:pollId">
            <PollView/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
