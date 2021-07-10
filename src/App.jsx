import React from 'react'

import Header from './components/header'
import Footer from './components/footer'

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
