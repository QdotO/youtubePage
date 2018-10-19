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
            <div>
                <input
                className="col-md-10"
                value={this.state.term}
                 onChange={event => this.setState({ term: event.target.value}) } 
                 />
            </div>
            
        )
            
    
    }
};

export default SearchBar;