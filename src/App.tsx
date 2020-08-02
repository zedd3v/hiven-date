import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

export default function App(): JSX.Element {
  return (
    <div className="h-100">
      <Container fluid className="h-100">
        <Header logo={logo} />
        <Content />
        <Footer />
      </Container>
    </div>
  );
}
// new Date(141959053227063348 / 4194304 + 1562544e6)
