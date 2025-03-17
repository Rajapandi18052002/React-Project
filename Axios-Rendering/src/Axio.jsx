import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Axio = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("foods/")
      .then((response) => {
        setProducts(response.data.products);
        console.log(products);
      })
      .catch((err) => console.log(err));
  });

  const [foods,setFood]=useState([{
name:'',
img:'',
price:''
  },
  {

  }])
  
  return (
    <>
      {products.map((dd) => (
        <Card style={{ width: "18rem" }}>   
          <Card.Img variant="top" src={dd.images[0]} />
          <Card.Body>
            <Card.Title>{dd.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
 </>
  );
};

export default Axio;