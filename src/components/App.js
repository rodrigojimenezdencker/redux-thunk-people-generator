import React from 'react';
import Input from './Input';
import PeopleList from './PeopleList';
import { Container } from 'reactstrap';

const App = () => (
  <Container className="App-header">
    <Input />
    <PeopleList />
  </Container>
);
export default App;