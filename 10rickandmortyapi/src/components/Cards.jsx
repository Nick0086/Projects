import React from 'react'
import "./Cards.css"
import { Col, Row } from 'react-bootstrap';

function Card({ character }) {
  return (
    <div className='card-container' >
      <Row className='align-items-center h-100' >
        <Col lg={5} ><img src={character.image} className='hero-image' alt="img" /></Col>
        <Col lg={7} >
          <div className='character-info' >
            <div className='mb-4' >
              <h2 className='mb-1'>{character.name}</h2>
              <div className='fs-18 d-flex align-items-center text-capitalize'>
                <span className={`status_icon ${character.status === "Dead" ? "bg-red" : ""} ${character.status === "unknown" ? "bg-unkon" : ""}`}></span>
                {character.status} - {character.species}
              </div>
            </div>
            <div className='mb-4' >
              <p className='fs-18 mb-2' >Last known location:</p>
              <p className='last-known'>{character.location.name} </p>
            </div>
            <div>
              <p className='fs-18 mb-2' >First seen in:</p>
              <p className='last-known'>{character.origin.name} </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Card;