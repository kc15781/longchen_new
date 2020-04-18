import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'

import '../Stylesheet/Stylesheet_carousel.css'

export const Carousel_component = (props) => {
 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
     <Container className="mb-5">
      <Carousel className="mt-5 shadow_custom" activeIndex={index} onSelect={handleSelect} interval={2000}>
          {props.src.map((value, index) => {
            return (         
                <Carousel.Item>
                  <img
                    className="d-block w-100"            
                    src={props.directory+value+".jpg"}
                    
                  />
                  <Carousel.Caption>
                    <h3>{props.title[index]}</h3>
              
                  </Carousel.Caption>
                </Carousel.Item>
                   )
          })}

      </Carousel>
      </Container>
     
    );
  
}

