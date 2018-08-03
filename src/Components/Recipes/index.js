import React , {Component} from 'react';

class Recipes extends Component {
  render(){
    return(
      <div>
          <div><img src={this.props.img} />
          <h1>Name: {this.props.title}</h1>
          <p>Calories: {this.props.cal}</p></div>
      </div>
    )
  }
}
export default Recipes
