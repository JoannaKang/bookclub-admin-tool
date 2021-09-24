import { Wrapper } from './styled';
import React from 'react'

const App:React.FC = () => {
  return (
    <Wrapper className="App">
      <input type="text"/>
      <input type="button" value="submit"/>
    </Wrapper>
  );
}

export default App;
