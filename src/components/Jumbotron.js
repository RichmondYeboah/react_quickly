import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cheetahs from '../assets/cheetahexperience.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${cheetahs}) no-repeat fixed bottom;
    background-size: cover;
    background-position: center;
    color: #efefef;
    height: 220px;
    width: 100%;
    position: relative;
    z-index: -2;
}

.overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

const welcomebar =() => {
    return (
        <div>
        <input type="text" placeholder="cat photo URL" required></input>
        <button type="submit">Submit</button>
        </div>

    )
}





export const Jumbotron = () => ( 
<Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
          <h1>Welcome</h1>
          <welcomebar/>
      </Container>
    </Jumbo>
</Styles>
)