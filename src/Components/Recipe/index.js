import React , {Component} from 'react';
import recipes from './data.json';
import './style.css';
import Recipes from '../Recipes';

class Recipe extends Component {
  state = {
        img:recipes[0].image,
        title:recipes[0].name,
        cal:recipes[0].calories
    }
   right = () => {
     this.setState({
           img:recipes[1].image,
           title:recipes[1].name,
           cal:recipes[1].calories
  })}
  left = () => {
    this.setState({
          img:recipes[2].image,
          title:recipes[2].name,
          cal:recipes[2].calories
 })}
  render(){
    return (
      <div className='container'>
        <div className='jumbotron'>
        <button className='btn' onClick={this.left}><i className="fa fa-caret-left"></i></button>
          <button className='btn'><i className="fa fa-caret-right" onClick={this.right}></i></button>
                <Recipes img={this.state.img}
                title={this.state.title}
                cal={this.state.cal}/>
          </div>
      </div>
    );
  }
}
export default Recipe;
