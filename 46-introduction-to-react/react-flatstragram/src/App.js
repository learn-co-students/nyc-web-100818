import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import images from "./images"

// console.log(images)
// images.forEach(console.log)

// class App extends React.Component {
//   // state = {
//   //   images: images
//   // }

//   // componentDidMount() {
//   //   setTimeout(() => {
//   //     this.setState({ images: [...this.state.images, 'https://scontent-lga3-1.cdninstagram.com/vp/f890b8960b2c1969d129061537d6dd9f/5C9427B8/t51.2885-15/sh0.08/e35/c183.0.714.714/s640x640/42154284_537894343303154_777055284307689472_n.jpg'] })
//   //   }, 2000)
//   // }


//   render() {
//     return (
//       <div>
//         <h1>flatStagram</h1>
//         {images.map((e, i, a) => <img key={e} src={e} />)}
//       </div>
//     )
//   }
// }

// const FnApp = props => (
//   <div>
//     <h1>flatStagram</h1>
//     {images.map((e, i, a) => <img key={e} src={e} />)}
//   </div>
// )

const MyHeader = props => {
  console.log("In MyHeader. Props are: ", props)
  return <h1>{props.message}</h1>
}

const Images = props => {
  console.log("In Images. Props are: ", props)
  return props.images.map(imgSrc => <img key={imgSrc} src={imgSrc} />)
}

const App = props => {
  return (
    <>
      <MyHeader message="flatStagram" tomato="Potato" />
      <Images images={images} />
    </>
  )
}

export default App;
