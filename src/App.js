import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ShortListScreen from './screens/ShortListScreen';
import RejectListScreen from './screens/RejectListScreen';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  // if (!localStorage.getItem('shortList')) {
  //   localStorage.setItem('shortList', []);
  // }

  // if (!localStorage.getItem('reject')) {
  //   localStorage.setItem('rejectList', []);
  // }
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/search/:keyword" exact component={HomeScreen} />
          <Route path="/page/:pageNumber" exact component={HomeScreen} />
          <Route path="/search/:keyword/page/:pageNumber" exact component={HomeScreen} />
          <Route path="/user/:id" component={ProductScreen} />
          <Route path="/shortlisted" component={ShortListScreen} />
          <Route path="/rejected" component={RejectListScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
