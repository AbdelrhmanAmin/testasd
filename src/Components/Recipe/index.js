import React , {Component} from 'react';
import recipes from './data.json';
import './style.css';

class Recipe extends Component {
  stats = {
    title: 'Title',
    img: 'Image',
    cal: 'Calories'
  }
  // recipes.forEach((recipe)=> {
  //    return this.setState({
  //     title:recipe.name,
  //     img:recipe.image,
  //     cal:recipe.calories
  //   })
  // });
    onClick = () => {
        recipes.map((recipe) => {
          console.log(recipe);
             return this.setState({
              title:recipe.name,
              img:recipe.image,
              cal:recipe.calories
        });
  })}
  render(){
    return (
      <div className='container'>
        <div className='jumbotron'>
        <button className='btn' onClick={this.onClick.bind(this)}><i className="fa fa-caret-left"></i></button>
          <button className='btn' onClick={this.onClick.bind(this)}><i className="fa fa-caret-right"></i></button>
                <div>
                   <img src={this.stats.img} />
                   <h1>Name: {this.stats.title}</h1>
                   <p>Calories: {this.stats.cal}</p>
                </div>
          </div>
      </div>
    );
  }
}
export default Recipe;
