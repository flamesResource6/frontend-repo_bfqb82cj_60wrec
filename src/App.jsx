import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import Product from './components/Product'
import Technology from './components/Technology'
import About from './components/About'
import Sustainability from './components/Sustainability'
import Sizing from './components/Sizing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Checkout from './components/Checkout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/sizing" element={<Sizing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Layout>
  )
}

export default App
