import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/about';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/home/home/home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import ServiceDetail from './pages/serviceDetails/serviceDetails';
import Footer from './pages/shared/footer/footer';
import Header from './pages/shared/header/header';
import NotFound from './pages/shared/notFound/notFound';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/Service' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;