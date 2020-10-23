import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

function App() {
  const [value, setValue] = React.useState(['Sample']);
  const [question, setQuestion] = React.useState('Question?');

  const handleChange = (index) => (event) => {
    let valueCopy = [...value]
    valueCopy[index] = event.target.value;
    setValue(valueCopy);
  };

  const handlePromptChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAddClick = (event) => {
    let valueCopy = [...value];
    valueCopy.push("Sample");
    setValue(valueCopy);
  };

  const handleRemoveClick = (event) => {
    let valueCopy = [...value];
    valueCopy.pop();
    setValue(valueCopy);
  };

  const handleSubmitClick = (event) => {
    fetch(`http://0.0.0.0:${process.env.PORT}/polls`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "prompt": question,
            "options": value
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

  return (
    <div className="App">
    <FormControl component="fieldset">
    <FormLabel component="legend">{<TextField id="prompt" label={question} onChange={handlePromptChange}/>}</FormLabel>
      <FormGroup aria-label="choices" name="choices">
        <div style={{ padding: 20 }}>
        {value.map((item,index) =>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <RadioButtonUncheckedIcon />
            </Grid>
            <Grid item>
              <TextField id={"option-"+index} label={item} onChange={handleChange(index)}/>
            </Grid>
          </Grid>
        )}
        </div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleAddClick}>
            Add
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleRemoveClick}>
            Remove
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSubmitClick}>
            Save
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
    </FormControl>
    </div>
  );
}

export default App;
