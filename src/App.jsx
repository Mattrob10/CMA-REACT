import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Favorites from "./Components/Favorites";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/favorites' exact element={<Favorites />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
