import React, { Component } from 'react';
/*
    This is a functional component because it is simply a function
    Info in JSX comes out 

    const SearchBar = () => {
    return <input />;
};
*/

//A class component is  used when we want a component to have some sort of internal record keeping 
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
    }
    render() {
        return (
            <div className="search-bar">
                <input
                type="text"
                className="search-bar input"
                value={this.state.term}
                 onChange={event => this.onInputChange(event.target.value) } 
                 />
            </div>
            
        )     
    }

    onInputChange(term){
        this.setState({ term })
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;