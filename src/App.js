import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyles from './styles/global';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
      <GlobalStyles />
    </Router>
  )
}

export default App;
