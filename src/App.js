import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import Registes from './pages/Registers';
import Anning from './pages/Courses/Anning';
import PhatTrienPhanMem from './pages/Courses/PhatTrienPhanMem';
import ThietKeDoHoa from './pages/Courses/ThietKeDoHoa';
import CEH from './pages/Courses/CEH';
import AWS from './pages/Courses/AWS';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/registers" element={<Registes />} />
                    <Route path="/admissions" element={<Admissions />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/anningmang" element={<Anning />} />
                    <Route path="/phattrienphanmem" element={<PhatTrienPhanMem />} />
                    <Route path="/thietkedohoa" element={<ThietKeDoHoa />} />
                    <Route path="/ceh" element={<CEH />} />
                    <Route path="/aws" element={<AWS />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
