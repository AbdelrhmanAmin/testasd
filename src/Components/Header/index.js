import React , { Component } from 'react';
import Logo from './logo.png';
import './style.css';

class Header extends Component {
  render(){
    return(
      <div className='wrapper'>
        <nav className="flex-nav">
          <ul>
            <li className='First'>
              <a href="#"><h2>CookApp</h2></a>
            </li>
            <li className='Second'>
              <a href="#">Buenos Aires <i className="fa fa-sort-down fa-2x"></i></a>
            </li>
            <li className='Third'>
              <a href="#"><i className="fa fa-calendar fa-2x"></i> Meals</a>
            </li>
            <li className='Third'>
              <a href="#"><i className="fa fa-shopping-cart fa-2x"></i> Host a Meal</a>
            </li>
            <li className='Fourth x'>
              <a href="#">Login</a>
            </li>
            <li className='Fourth'>
              <a href="#" className='btnX'><input type="button" value='Register' className='btn btn-success'/></a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
