import React from 'react';
import { Button, FormControl, FormLabel, RadioGroup, FormControlLabel, NativeSelect, InputLabel, Typography, Slider } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import './App.css';
import logo from './logo.svg';




function App() {


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  return (
    <div className="App">
      <header className="App-header">






        
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>



      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" disabled>Disabled</Button>
      <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>


<InputLabel htmlFor="select">Age</InputLabel>
<NativeSelect id="select">
  <option value="10">Ten</option>
  <option value="20">Twenty</option>
</NativeSelect>


<Typography id="discrete-slider-small-steps" gutterBottom>  Small steps </Typography>
<Slider
  defaultValue={0.00000005}
  aria-labelledby="discrete-slider-small-steps"
  step={0.00000001}
  marks
  min={-0.00000005}
  max={0.0000001}
  valueLabelDisplay="auto"
/>


      </header>
    </div>
  );
}

export default App;
