import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark container">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><Link to="/">Home</Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">

    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" ><Link to="/blog"><Link to="/login">Login</Link></Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/blog"><Link to="/service">services</Link></Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/blog">Blog</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to="/about">About</Link></a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>







            
            
            
            
            
            
            

        </div>
    );
};

export default header;