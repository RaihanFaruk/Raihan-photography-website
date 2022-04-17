import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home'
import Login from './components/Login/login';
import Header from './components/header/header';
import Service from './components/service/service';
import Blog from './components/blog/blog'
import About from './components/about/about';
import RequireAuth from './components/blog/requireauth/requireAuth';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        {/* <Route path="/service" element={<RequireAuth><Service></Service></RequireAuth>}></Route> */}
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
