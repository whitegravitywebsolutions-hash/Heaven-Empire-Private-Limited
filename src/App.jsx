import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import WhyUs from './pages/WhyUs'
import Partner from './pages/Partner'
import Contact from './pages/Contact'
import Terms from './pages/Terms'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
    </Routes>
  )
}
