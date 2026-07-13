import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurServices from './pages/OurServices';
import PriceList from './pages/PriceList';
import OurStory from './pages/OurStory';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <main className="page-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/our-services" component={OurServices} />
            <Route path="/price-list" component={PriceList} />
            <Route path="/our-story" component={OurStory} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-of-service" component={TermsOfService} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;