import Footer from './components/Footer';
import Header from './components/Header';

const App = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default App;
