import React from 'react'
import PropType from 'prop-types';
import {Card,Button} from 'react-bootstrap'
export default function Personinfo(props) {
    return (
        <div>
         
          <Card className="col-10 mx-auto" style={{ width: '18rem',textAlign:"center" }}>
  
  <Card.Body>
    <Card.Title><h1>{props.person.name}</h1></Card.Title>
    <Card.Text>
    <p>{props.person.description}</p>
    </Card.Text>
    <Button variant="primary">info</Button>
  </Card.Body>
</Card>
        </div>
    )
}
Personinfo.propTypes={
    person:PropType.object,
}