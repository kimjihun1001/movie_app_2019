import React from "react";
import axios from "axios";
import Movie from "./Movie";
// import propTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    // 받아온 data를 setState로 state에 넣어야 함.
    this.setState({ movies: movies, isLoading: false });
    // movies:movies 를 그냥 movies라고 써도 JS가 이해함.
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    // isLoading을 중괄호 안에 넣으면 그 object 안의 isLoading을 가리키는 듯. 이름은 같아야 함!
    // 그냥 const isLoading 하면 object가 되어버림. 정말 어렵군. es6 문법
    // state에서 isLoading을 가져오지 않으면 밑에서 this.state.isLoading 이라고 써야 함.

    // map으로 각각의 movie를 rendering
    return (
      <div>
        {isLoading
         ? "Loading..." 
         : movies.map(movie => (
            <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
            />
        ))}
        </div>
    );
  }
}

// ---------------------------- STATE & COMPONENT LIFE CYCLE ----------------------------
// class App extends React.Component {
//   state = {
//     count: 0
//   };

//   add = () => {
//     this.setState(current => ({count:current.count + 1}));
//   };

//   minus = () => {
//     this.setState(current => ({count:current.count - 1}));
//   };

//   constructor(props) {
//     super(props);
//     console.log("Hello");
//   };

//   render() {
//     console.log("I'm rendering");
//     return (
//       <div>
//         <h1>The number is {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     )
//   }

//   componentDidMount() {
//     console.log("Component Updated");
//   }

//   componentDidUpdate() {
//     console.log("I just updated");
//   }

// }

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
