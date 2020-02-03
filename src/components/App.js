import React from 'react';
import Input from './Input';
import ArticleList from './ArticleList';
import { Container } from 'reactstrap';

const App = () => (
  <Container className="App-header">
    <Input />
    <ArticleList />
  </Container>
);
export default App;