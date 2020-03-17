import React from 'react';
import './App.scss';
import { Button, Content } from 'carbon-components-react';
import MainHeader from './components/Header/MainHeader';


function App() {
  return (
  <>
    <MainHeader>
      <Content>
        <Button>Hello</Button>
      </Content>
    </MainHeader>
  </>
  );
}

export default App;
