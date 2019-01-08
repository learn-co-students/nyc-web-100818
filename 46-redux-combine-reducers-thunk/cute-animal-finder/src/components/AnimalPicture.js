import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions'; // { }
import AnimalAdapter from '../apis/AnimalAdapter';

class AnimalPicture extends Component {
  getCat = (event) => {
    // this.props.updateAnimal(url);
  }

  getDog = (event) => {
    // am i using thunk? No
    // you can do anything async with redux same way as you did with react
    // AnimalAdapter.getDog()
    //   .then(url => {
    //     // this.setState({ url })
    //     this.props.updateAnimal(url);
    //   })

    this.props.fetchAnimal();
  }

  renderPicture = () => {
    if (this.props.isLoaded) {
      return <img src={this.props.animalSrc} alt="cute animal" />
    } else {
      return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
    }
  }

  render() {
  console.log(this.props);
    return (
    <div className="animal-picture">
      <button onClick={this.getCat}>Fetch Cat</button>
      <button onClick={this.getDog}>Fetch Dog</button>
      {this.renderPicture()}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    animalSrc: state.animal.animalSrc,
    isLoaded: state.animal.isLoaded
  }
}
//
// function mapDispatchToProps(dispatch) {
//   return {
//     // updateAnimal: (url) => dispatch(updateAnimalAction(url))
//     // updateAnimal: () => {
//     //   AnimalAdapter.getDog()
//     //     .then(url => {
//     //       // this.setState({ url })
//     //       // this.props.updateAnimal(url);
//     //       dispatch(updateAnimalAction(url))
//     //     })
//     // }
//     updateAnimal: () => dispatch(fetchAnimalAction())
//   }
// }

export default connect(mapStateToProps, actions)(AnimalPicture);
