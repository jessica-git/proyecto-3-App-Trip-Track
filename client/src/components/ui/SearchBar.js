import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import searchIcon from "../../images/magnifying-glass copia.png"
import "../../styelsheets/UI.css";


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
        console.log(e)
        this.setState({ searchValue: ""})
        
    }

    render() {
        return (

            <div className="searchBar">
                <input
                    className="searchBar"
                    type="text"
                    placeholder="Encuentra tu viaje"
                    value={this.state.searchValue}
                    onChange={e => this.handleOnChange(e)}
                />
                <Link to={`/search/${this.state.searchValue}`}><img src={searchIcon} alt="lupa logo" /></Link>
            </div>
        );
    }
}

export default SearchBar;

