import React from "react";
import axios from "axios";
import Instructions from './Instructions'
import "./styles/Search.css";
import './styles/TagsInput.scss'
import TagsInput from './TagsInput'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      tags: [],
      value: ''
    };
    console.log(this.state.recipes)
  }

  handleEvent = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addTags()
    this.fetchData();
  };

  handleRecipes = state => {
    if (state.recipes[0]) {
      const results = this.state.recipes.map(function (result, index) {
        const ings = result.recipe.ingredientLines.map(function (ing, index) {
          if (ing.includes(state.input)) {
          } else {
            return <div key={index}>{ing}</div>;
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
                <p className="bold">Time to cook: </p>
                <p> {result.recipe.totalTime} minutes</p>
              </div>
              <div className="missing">
                <p className="bold">You're missing: </p>
                <div className="missing_ings">
                  <div>{ings}</div>
                </div>
              </div>
            </div>
          </div>
        );
      });
      return <div className="results">{results}</div>;
    }
  }

  fetchData = async () => {
    const query = `${this.state.tags.toString()},${this.state.value}`
    console.log("query:", query)
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?app_id=e80fead2&app_key=ab2624365b996626a13d10ba827db051&q=${query}`
      );
      this.setState({
        recipes: response.data.hits
      });
    } catch (error) {
      console.log(error);
    }
  }

  removeTags = indexToRemove => {
    this.setState({ tags: [...this.state.tags.filter((_, index) => index !== indexToRemove)] })
  }
  
  addTags = async () => {
    console.log("tags:", this.state.tags, "value:", this.state.value)
    if (this.state.value !== "") {
      this.setState({tags: [...this.state.tags, this.state.value]})
      console.log("tags 2:", this.state.tags, "value:", this.state.value)
      this.setState({value: ''})
    }
  };

  

  // THIS FIRST PART IS WHAT'S RENDERING IF NO RECIPE
  render() {
    if (this.state.recipes.length === 0) {
      return (
        <div className="search_container">
          <div className="search_form">
            <form onSubmit={this.handleSubmit}>
              <div className="search_bar">
                <h2 className="add_ingredients">Add Ingredients</h2>

                <div className="tags-input">
                  <ul id="tags">
                    {this.state.tags.map((tag, index) => (
                      <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                          onClick={() => this.removeTags(index)}
                        >
                          x
                        </span>
                      </li>
                    ))}
                  </ul>
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleEvent}
                    placeholder="Search"
                  />
                </div>
                <input className="search_button" type="submit" value="SEARCH" />
              </div>
            </form>
          </div>
          <div className="results_container">
            <h2 className="results">Welcome to Refrigitate!</h2>
            <Instructions />
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

                <div className="tags-input">
                  <ul id="tags">
                    {this.state.tags.map((tag, index) => (
                      <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                          onClick={() => this.removeTags(index)}
                        >
                          x
                        </span>
                      </li>
                    ))}
                  </ul>
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleEvent}
                    placeholder="Search for ingredients"
                  />
                </div>
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
