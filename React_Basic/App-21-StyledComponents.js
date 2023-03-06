// npm install styled-components --save 

import React from 'react';  
import styled from 'styled-components';  
  
class App extends React.Component {  
  render() {  
    const Div = styled.div`  
            margin: 20px;  
            border: 5px dashed black;  
            &:hover {  
            background-color: ${(props) => props.hoverColor};  
            }  
            `;  
    const Title = styled.h1`  
            font-family: Arial;  
            font-size: 35px;  
            text-align: center;  
            color: blue;  
            `;  
    const Paragraph = styled.p`  
            font-size: 25px;  
            text-align: center;  
            background-Color: lightblue;  
            `;  
    return (  
       <div>            
            <Title>::: Welcome to React Programming :::</Title>  
            <p></p>  
            <Div hoverColor="grey">  
                 <Paragraph>This Styled Components Content !!!</Paragraph>  
            </Div>  
        </div>  
    );  
  }  
}  
export default App;  