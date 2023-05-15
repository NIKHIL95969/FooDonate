import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({id,name,posttext,title}) {
  console.log(name,title,posttext)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ width: 'inherit' }} variant="top" src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_640.jpg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {posttext}
        </Card.Text>
        <Button variant="primary">Need</Button>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;