
import './App.css';
import Contact from './Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Editform from './Editform';
import Task from './Task';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Task/>}></Route>
      
    </Routes>
  </BrowserRouter>
    
    </div>
  );
}

export default App;


/*<Route path="/" element={<Contact/>}></Route>
      <Route path="/edit/:id" element={<Editform/>}></Route>

      */