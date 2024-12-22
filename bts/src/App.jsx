import './App.css';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreference from './container/CategoriesPreference';
import PostsData from './container/PostsData';
import NavbarForApp from './container/NavbarForApp';
import LoginSignup from './container/LoginSignup';
import ContactUS from './container/ContactUS';

function App() {
  return (
    <>
      <NavbarForApp />
      <Routes>
        <Route path="/" element={<PostsData />} />
        <Route path="/category" element={<CategoriesPreference />} />
        <Route path="/contactus" element={<ContactUS/>} />
        <Route path="/loginSignUp" element={<LoginSignup/>} />
      </Routes>
    </>
  );
}

export default App;
