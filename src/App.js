import React from "react";
import propTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count:current.count + 1}));
  };

  minus = () => {
    this.setState(current => ({count:current.count - 1}));
  };

  constructor(props) {
    super(props);
    console.log("Hello");
  };

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }

  componentDidMount() {
    console.log("Component Updated");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

}



// ----------------------------  JSX & PROPS 관련 예제 ---------------------------- 
// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     img: "https://i.pinimg.com/564x/6e/04/2c/6e042ca43143d8021fec6b560541c4a1.jpg",
//     rating: 4.5
//   },
// ];

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes ={
//   name: propTypes.string,

// };

// function App() {
//   return (
//     <div className="App">
//       {foodILike.map((dish) => (
//         <Food 
//           key={dish.id}
//           name={dish.name}
//           picture={dish.img}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

export default App;
