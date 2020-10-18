import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const [value, setValue] = React.useState(['Sample']);
  const [selected, setSelected] = React.useState('');
  const [question, setQuestion] = React.useState('Question?');

  const handleChange = (index) => (event) => {
    let valueCopy = [...value]
    valueCopy[index] = event.target.value;
    setSelected(event.target.value);
    setValue(valueCopy);
  };

  const handleRadioChange = (event) => {
    setSelected(event.target.value);
  };

  const handlePromptChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleClick = (event) => {
    let valueCopy = [...value];
    valueCopy.push("Sample");
    setValue(valueCopy);
  };

  const classes = useStyles();

  return (
    <div className="App">
    <div>
    <FormControl component="fieldset">
    <FormLabel component="legend">{<Input type="text" value={question} onChange={handlePromptChange}/>}</FormLabel>
      <RadioGroup aria-label="gender" name="question" value={selected} onChange={handleRadioChange}>
        {value.map((item,index) =>
          <FormControlLabel key={index} value={item} control={<Radio />} label={
            <Input type="text" value={item} onChange={handleChange(index)}/>
        } />
        )}
      </RadioGroup>
    </FormControl>
    </div>
    <div className={classes.root}>
    <Button variant="contained" color="primary" onClick={handleClick}>
    Add Choice
    </Button>
    <Button variant="contained" color="primary">
    Save
    </Button>
    </div>
    </div>
  );
}

export default App;
