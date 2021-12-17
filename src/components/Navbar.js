//rfc --for import react based component
import React from 'react'
// import { a } from 'react-router-dom'




import PropTypes from 'prop-types'
export default function Navbar(props) {
        // CTRL+F   FOR---REPLACE CLASS TO CLASSNAME 

    return (
        <nav className={`navbar navbar-expand-lg navbar ${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.titel}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#">mylink</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-a dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className ="nav-a disabled">{props.disable}</a>
        </li>
      </ul>
      {/* <form className="d-flex"> */}
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      {/* </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>       {/*from this we are able to see text
      */} 
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    )
}
 Navbar.propTypes= {titel:PropTypes.string,
    disable:PropTypes.string,
 }

 //Navbar.propTypes={titel:PropType.string,
 //disable:PropTypes.string,
 //a:PropTypes.string,
 //}

//Navbar.defaultProps = {
//  titel='set titel',
//  disable='get disable',
//};