import React from "react";
import axios from "axios";
import Instructions from './Instructions'
import "./styles/Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      stock: ""
    };
    console.log(this.state.recipes)
  }

  handleEvent = event => {
    this.setState({
      stock: event.target.value
    });
    console.log(this.state.stock);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchData();
    event.target.reset();
  };

  handleRecipes = state => {
    if (state.recipes[0]) {
      //   const regex = new RegExp(state.stock, "g");
      const results = this.state.recipes.map(function(result, index) {
        const ings = result.recipe.ingredientLines.map(function(ing, index) {
          if (ing.includes(state.stock)) {
          } else {
            return <p key={index}>{ing}</p>;
          }
        });
        return (
          <div key={index} className="other_return">
            <img
              className="recipe_img"
              src={`${result.recipe.image}`}
              alt="recipe"
            />
            <div className="summary">
              <h3 className="recipe_header"> {result.recipe.label}</h3>
              <div className="time_cook">
                <p className="bold">Time to cook:</p>
                <p>{result.recipe.totalTime} minutes</p>
              </div>
              {/* {result.recipe.ingredientLines} */}
              <div className="missing">
                <p className="bold">You're missing: </p>
                <div className="missing_ings">
                  <p>{ings}</p>
                </div>
              </div>
            </div>
          </div>
        );
      });
      return <div className="results">{results}</div>;
    }
  };

  // componentDidMount() {
  //   this.fetchData();
  // }

  fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?app_id=e80fead2&app_key=ab2624365b996626a13d10ba827db051&q=${this.state.stock}`
      );
      this.setState({
        recipes: response.data.hits
      });
    } catch (error) {
      console.log(error);
    }
  };

  // THIS FIRST PART IS WHAT'S RENDERING IF NO RECIPE
  render() {
    if (this.state.recipes.length ===0) {
      return (
        <div className="search_container">
          <div className="search_form">
            <form onSubmit={this.handleSubmit}>
              <div className="search_bar">
                <h2 className="add_ingredients">Add Ingredients</h2>
                <input
                  className="search_input"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleEvent}
                  placeholder="Search for ingredients..."
                />
                <input className="search_button" type="submit" value="SEARCH" />
              </div>
            </form>
          </div>
          <div className="results_container">
            <h2 className="results">Welcome to Refrigitate!</h2>
            <Instructions/>
          </div>
        </div>
      );
    } else {
      /// IF RECIPE
      return (
        <div className="search_container">
          <div className="search_form">
            <form onSubmit={this.handleSubmit}>
              <div className="search_bar">
                <h2 className="add_ingredients">Add Ingredients</h2>
                <input
                  className="search_input"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleEvent}
                  placeholder="Search for ingredients..."
                />
                <input className="search_button" type="submit" value="SEARCH" />
              </div>
            </form>
          </div>
          <div className="results_container">
            <h2 className="results">Results</h2>
            {this.handleRecipes(this.state)}
          </div>
        </div>
      );
    }
  }
}

export default Search;
