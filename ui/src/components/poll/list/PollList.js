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
  Link,
  useRouteMatch
} from "react-router-dom";

function PollList() {

  let match = useRouteMatch();
  
  const [selected, setSelected] = React.useState(false);

  const [list, setList] = React.useState(['Sample']);

  const handleChange = (event) => {
    setSelected(true);
  }

  const fetchPolls = () => {
    fetch(`https://mern-poll.herokuapp.com/polls?limit=100`, {
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
  },[]);
 
  return (
    <Router>
    <div className="App">
    {(!selected) &&
    <List component="nav" aria-label="polls">
      {list.map((item,index) =>
        <Link to={`${match.url}/view/${item.id}`}>
          <ListItem key={"item:"+index} button onClick={handleChange}>
            <ListItemText key={"label:"+index} primary={item.prompt}/>
          </ListItem>
        </Link>
      )}
    </List>}
    <Switch>
      <Route path={`${match.url}/view/:pollId`}>
        <PollView/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default PollList;
