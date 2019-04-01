import React from "react";
import "./style.css";


function SearchBar(props) {

    return (
        <div className="card" >
            <div className="card-header">
                Search For A Book
            </div>
            <div className="card-body">
                <label htmlFor = "searchInput" className="card-title">Enter a book name</label>
                <input 
                    id = "searchInput" 
                    className="card-text mt-2"
                    name= "keyword"
                    onChange={props.inputChange}
                />   
                <div>         
                    <button id = "searchBtn" className="btn btn-primary float-right mt-2" onClick={props.clickSearch}>Search</button>
                </div>  
            </div>
        </div>
    )
}






export default SearchBar;