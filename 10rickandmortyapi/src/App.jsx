import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Cards';
import { Col, Container, Row } from 'react-bootstrap';

function App() {

  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character')
      .then((res) => setCharacterData(res.data))
      .catch((error) => console.log("error in fetch", error))
  }, [])

  console.log("datd",characterData)

  return (
    <>
      <Container>
        <Row  md={2} sm={1} className='my-4' >
            {characterData.results && characterData.results.map((data) => (<Col className='mb-4' key={data.id} ><Card key={data.id} character={data} /></Col>))}
        </Row>
      </Container>
      {/* {data.length > 0 && data.filter((item) => item.id <= 10).map((item) => <h1 key={item.id}>{item.name}</h1>)} */}
    </>
  );
}

export default App;
