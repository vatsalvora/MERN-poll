import React from 'react';
import './../../../App.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {
  useParams
} from "react-router-dom";

function PollView() {

  let { pollId } = useParams();

  const [value, setValue] = React.useState("Sample");

  const [poll, setPoll] = React.useState({
    id:"default",
    prompt:"Question?",
    options:["Sample"]
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const fetchPoll = (pollId) => {
    console.log("PollID: ",pollId);
    fetch(`https://mern-poll.herokuapp.com/polls/${pollId}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response Poll', data);
        let newPoll = {
          id:data.id,
          prompt:data.prompt,
          options:data.options
        };
        setPoll(newPoll);
        setValue(newPoll.options[0]);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });
  };

  const handleSubmitClick = (event) => {
    fetch(`https://mern-poll.herokuapp.com/pollResults`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "pollId": pollId,
            "response": value
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });
  };

  React.useEffect(() => {
      fetchPoll(pollId);
  },[pollId]);

  return (
    <div className="App">
    <FormControl component="fieldset">
    <FormLabel component="legend">{poll.prompt}</FormLabel>
      <RadioGroup aria-label="prompt" name="prompt" value={value} onChange={handleChange}>
        {poll.options.map((item,index) =>
          <FormControlLabel key={"option-"+index} value={item} control={<Radio />} label={item} />
        )}
        <Button variant="contained" color="primary" onClick={handleSubmitClick}>
          Save
        </Button>
      </RadioGroup>
    </FormControl>
    </div>
  );
}

export default PollView;
