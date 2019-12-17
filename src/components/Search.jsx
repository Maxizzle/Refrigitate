import React from "react"
import axios from "axios"
import './styles/Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            stock: ''
        }
    }

    handleEvent = (event) => {
        this.setState({
            stock: event.target.value
        })
        console.log(this.state.stock)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.fetchData()
        event.target.reset()
    }

    handleRecipes = (state) => {
        if (state.recipes[0]) {
            const regex = new RegExp(state.stock, "g")
            const results = this.state.recipes.map(function(result, index) {
                return (<div key={index}>
                    <img src={`${result.recipe.image}`} />
                    <div className="summary">
                        <h3>Title: {result.recipe.label}</h3>
                        <h5>Time to cook:</h5><p>{result.recipe.totalTime} minutes</p>
                        <h5>{result.recipe.ingredientLines}</h5>
                        <h5>You're missing: {result.recipe.ingredientLines.splice(regex, 1)}</h5>
                    </div>
                </div>)
            })
            return (
                <div className="results">
                {results}
                </div>
            )
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        try {
            const response = await axios.get(`https://api.edamam.com/search?app_id=e80fead2&app_key=ab2624365b996626a13d10ba827db051&q=${this.state.stock}`)
            this.setState({
                recipes: response.data.hits
            })

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <div className="searchBar">
                        <h2>Add Ingredients</h2>
                        <input type="text" value={this.state.value} onChange={this.handleEvent} placeholder="Search for ingredients..." />
                        <input type="submit" value="submit" />
                    </div>
                </form>
                <h2>Results</h2>
                {this.handleRecipes(this.state)}
            </div>
        )
    }
}

export default Search