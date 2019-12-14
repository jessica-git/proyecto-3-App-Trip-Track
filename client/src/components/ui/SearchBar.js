import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
        }
    }

    handleOnChange = e => {
        this.setState({ searchValue: e.target.value })
    }

    handleOnClick = e => {
    }

    render() {
        return (
          
                <div >
                    <input
                        className="input"
                        type="text"
                        placeholder="Find a travel"
                        value={this.state.searchValue}
                        onChange={e => this.handleOnChange(e)}
                    />

                    <p className="control">
                        <Link to={`/search/${this.state.searchValue}`}>Search</Link>
                    </p>
                </div>
        );
    }
}

export default SearchBar;

