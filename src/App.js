import Mynavbar from './components/Mynavbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Mynavbar></Mynavbar>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
