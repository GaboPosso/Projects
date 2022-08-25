import './App.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
function App() {

  const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character/")
        .then((res) => res.json())
        .then((data) => setData(data.results));
    }, []);
  return (
    <div className="App">
      {data.map((character) => (
        <Card className='m-4' key={character.id} style={{ width: "18rem"}}>
          <Card.Img variant="top" src={character.image}/>
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>{character.species}</Card.Text>
            <Button variant='primary' href={character.url} target='_blank'>
              More Info
            </Button>
          </Card.Body>
        </Card>
        ))}
    </div>
  );
}

export default App;
