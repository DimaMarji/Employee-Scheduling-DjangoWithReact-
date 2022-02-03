import React from 'react'
import Employee from '../components/Employee'
import Job from '../components/Job'
import { Row, Col, Image, ListGroup,Card, Button, Form, Table, Container} from 'react-bootstrap'
function MainPage() {
    return (
        <div>
           <Employee/> 
           <div className='mt-5'>
           <Job/>
          </div> 
          <Container className='mt-5'>
          <Row className="justify-content-md-center" ><Col md={4}>
              <Card className=' shadow rounded-sm border border-gray-200 mb-3'><ListGroup >
                        <ListGroup.Item  style={{backgroundColor:'#edf2fb'}}>
                        <p style={{color:'#457b9d'}} className='h4 text-capitalize'>Total Jobs Number</p>
                        <p>Today</p>
                        <h2 style={{color:'#f07167'}} className='text-center'>22</h2>
                        
                        
                        </ListGroup.Item></ListGroup>
            
                        </Card></Col>
                        <Col md={4}>
              <Card className=' shadow rounded-sm border border-gray-200 mb-3'><ListGroup >
                        <ListGroup.Item  style={{backgroundColor:'#edf2fb'}}>
                        <p style={{color:'#457b9d'}} className='h4 text-capitalize'>not Schedule Jobs Number</p>
                        <p>Today</p>
                        <h2 style={{color:'#f07167'}} className='text-center'>22</h2>
                        
                        
                        </ListGroup.Item></ListGroup>
            
                        </Card></Col></Row></Container>

        </div>
    )
}

export default MainPage
