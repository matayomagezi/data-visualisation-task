import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress
} from '@mui/material';
import { ScatterChart, LineChart } from '@mui/x-charts';

function App() {
  const [data, setData] = useState([]);
  const [parameter, setParameter] = useState('');
  const [values, setValues] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    const url = `http://localhost:80/data?parameter=${parameter}`;
    setLoading(true);
    axios.get(url)
      .then(response => {
        const data = response.data;
        const fetchedData = data.map(item => ({
          ...item,
          timestamp: new Date(item.timestamp).getTime(), // Convert timestamp to a numerical value for the chart
        }));
        const fetchedValues = data.map(item => item.value);
        const fetchedTimestamps = data.map(item => new Date(item.timestamp).getTime());
        setValues(fetchedValues);
        setTimestamps(fetchedTimestamps);
        setData(fetchedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  };

  return (
    <div> 
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Time-Series Data
        </Typography>
        <TextField
          label="Parameter"
          variant="outlined"
          value={parameter}
          onChange={(e) => setParameter(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={fetchData}>
          Fetch Data
        </Button>
      </Container>
      <Container>
        {loading ? (
          <CircularProgress />
        ) : (
            <ScatterChart
              width={800}
              height={400}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              series={[
                {
                  label: "Scatter Chart:",
                  data: data.map((v) => ({ x: v.timestamp, y: v.value, id: v.parameter}))
                }
                
              ]}
            />
        )}
      </Container>
      <Container>
        <LineChart
          xAxis={[{ data: values }]}
          series={[
            { 
              label: "Line Graph: " + parameter,
              data: timestamps,
            },
          ]}
          width={500}
          height={300}
        />
      </Container>
    </div>
  );
}

export default App;
