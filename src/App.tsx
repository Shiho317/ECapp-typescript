import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import Login from "./pages/Login/Login";
import Shop from "./pages/Shop/Shop";
import SignUp from "./pages/SignUp/SignUp";
import { Wrapper } from './App.style';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
