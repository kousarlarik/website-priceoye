import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home.jsx'
import SignIn from './Components/SignIn/SignIn.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'




function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/signin" element={<SignIn/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  </Routes>
  </BrowserRouter>
    </>
  
  );
}

export default App;
