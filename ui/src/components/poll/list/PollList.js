import React from 'react';
import './../../../App.css';
import PollView from './../view/PollView.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PollList() {
  const [list, setList] = React.useState(['Sample']);

  const fetchPolls = (event) => {
    fetch(`https://mern-poll.herokuapp.com/polls`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
        let newList = data
        .filter(poll => 'prompt' in poll && 
          'options' in poll && poll.options.length > 0);

        setList(newList);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });
  };

  React.useEffect(() => {
      fetchPolls();
      setInterval(() => fetchPolls(), 5000);
  },[]);
 
  return (
    <Router>
    <div className="App">
    <List component="nav" aria-label="polls">
      {list.map((item,index) =>
        <Link to={"/view/"+item.id}>
          <ListItem key={"item:"+index} button>
            <ListItemText key={"label:"+index} primary={item.prompt}/>
          </ListItem>
        </Link>
      )}
    </List>
    <Switch>
      <Route path="/view/:pollId">
        <PollView/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default PollList;
