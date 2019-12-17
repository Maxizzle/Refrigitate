import React from "react"
import axios from "axios"


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
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.fetchData()
        event.target.reset()
    }

    handleRecipes = (recipes) => {
        if (recipes[0]) {
            return (
                <div>
                    <h5>Title:{recipes[0].recipe.label}</h5>
                    <h5>Time:{recipes[0].recipe.totalTime}</h5>
                    <h5>{recipes[0].recipe.ingredientLines}</h5>
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
            console.log(this.state.recipes)

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <div className="searchBar">
                        <input type="text" value={this.state.value} onChange={this.handleEvent} placeholder="What's in your fridge?" />
                        <input type="submit" value="submit" />
                    </div>
                </form>
                <h3>Results</h3>
                <div className={"results"}> {this.handleRecipes(this.state.recipes)}</div>
            </div>
        )
    }
}

export default Search