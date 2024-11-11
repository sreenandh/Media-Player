import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <>

    {/* head */}

      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, quasi. Adipisci inventore voluptatibus expedita a eveniet, nihil numquam recusandae sit. Sequi modi itaque voluptatem culpa cum nihil ratione rem voluptate.</p>
        <Link style={{textDecoration:"none"}} to={'/home'} className='btn btn-info'>Get Started</Link>
        </Col>
        <Col lg={5}>
        <img src="https://media1.tenor.com/m/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>

  {/* Card Section */}

  <div className="container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100">
  <h1 className="text-center text-warning">Features</h1>
  <div className="row mb-5 mt-5 w-100 d-flex justify-content-center">
    
    <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
      <Card style={{ width: '18rem' }} className='bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
      <Card style={{ width: '18rem' }} className='bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
      <Card style={{ width: '18rem' }} className='bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>
  {/* details section */}

  <div className="container border border-2 d-flex align-items-center justify-content-center mt-5 p-3">
    <div className="col-lg-5">
      <h4 className="text-warning fw-bolder">Simple,Powerful & Fast</h4>
      <h6 className="m-3"><span className="text-warning fw-bolder">Play Everything</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magni deserunt rem dolorem provident tenetur nemo, excepturi at. Odit quam ut est voluptates esse aperiam dolorem quidem recusandae! Explicabo, consequuntur?</h6>

      <h6 className="m-3"><span className="text-warning fw-bolder">Categorize Videos</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magni deserunt rem dolorem provident tenetur nemo, excepturi at. Odit quam ut est voluptates esse aperiam dolorem quidem recusandae! Explicabo, consequuntur?</h6>

      <h6 className="m-3"><span className="text-warning fw-bolder">Managing Videos</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magni deserunt rem dolorem provident tenetur nemo, excepturi at. Odit quam ut est voluptates esse aperiam dolorem quidem recusandae! Explicabo, consequuntur?</h6>
    </div>
    <div className="col-lg-5">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/8sgycukafqQ?si=f5_PuQrM0wgksXp6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

    </>
  )
}

export default LandingPage
