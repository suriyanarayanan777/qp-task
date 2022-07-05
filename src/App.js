
import './App.css';
import Contact from './Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Editform from './Editform';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Contact/>}></Route>
      <Route path="/edit/:id" element={<Editform/>}></Route>
    </Routes>
  </BrowserRouter>
    
    </div>
  );
}

export default App;
