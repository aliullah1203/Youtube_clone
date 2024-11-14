import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class SearchBar extends Component {
    render(){
        const {searchTerm,handleChange}=this.props;
        return (
            <div style={{ margin: '25px',textAlign: 'center' }}>
                <input onChange={handleChange} style={{ width: '75%' }}/>
                <button style={{ marginLeft: '8px',borderRadius: '4px',background: '#007bff' }}>Search</button>
            </div>
        );
    }
}

export default SearchBar;
