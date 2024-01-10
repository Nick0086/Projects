import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Cards';
import { Col, Container, Row } from 'react-bootstrap';
import Buttons from './components/Button';

function App() {

  const [characterData, setCharacterData] = useState([]);
  const [page,setPage] = useState(1);

  useEffect(() => {

    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => setCharacterData(res.data))
      .catch((error) => console.log("error in fetch", error))
  }, [page])

  console.log("datd", characterData)


  return (
    <>
      {
        characterData.results && <Container className='my-5' >
          <Row md={2} sm={1} className='my-4' >
            {characterData.results && characterData.results.map((data) => (<Col className='mb-4' key={data.id} ><Card key={data.id} character={data} /></Col>))}
          </Row>
          <div className='text-center' >
            <Buttons disabled={characterData.info.prev === null ? true : false} onClick={() => setPage(page-1)}>Prev</Buttons>
            <Buttons disabled={characterData.info.next === null ? true : false} onClick={() => setPage(page+1)}>next</Buttons>
          </div>
        </Container>
      }
      {/* {data.length > 0 && data.filter((item) => item.id <= 10).map((item) => <h1 key={item.id}>{item.name}</h1>)} */}
    </>
  );
}

export default App;
