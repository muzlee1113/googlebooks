import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";

import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Wrapper, BookItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// test json
import testData from "../test.json"


class Search extends Component {


    state = {
        keyword: "",
        books: []
    }

    saveBookHandler = (bookobj)=>{
        API.saveBook(bookobj)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

    }

    searchHandler = (e)=>{
        e.preventDefault()
        console.log(this.state.keyword)
        API.search(this.state.keyword)
        .then(res=>{
            console.log(res.data.items)
            let booksArr=[]
            for (let i in res.data.items){
                let book={}
                book.authors = res.data.items[i].volumeInfo.authors
                book.description= res.data.items[i].volumeInfo.description
                book.image= res.data.items[i].volumeInfo.imageLinks.thumbnail
                book.link= res.data.items[i].volumeInfo.previewLink
                book.title= res.data.items[i].volumeInfo.title
                book.id= res.data.items[i].id
                booksArr.push(book)
            }
            console.log(booksArr)
            this.setState({
                books: booksArr
            })
        })
    }

    inputOnChangeHandler = (e)=>{
        const{name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    render(){
        return (<>
        <Jumbotron>
            <div className="container text-center">
                <h1 className="display-4">Google Books Search</h1>
                <p className="lead">Search for and save book of insterest!</p>
            </div>
        </Jumbotron>
        <Container>
        
        <div className="row">
            <div className="col-12 p-0">
                <SearchBar 
                    clickSearch={this.searchHandler}
                    inputChange = {this.inputOnChangeHandler}
                />
            </div>
        </div>
        <div className="row">
            <Wrapper>
                {this.state.books.length? (
                    this.state.books.map(book=>(
                    <BookItem 
                        key = {book.id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        bookobj={{
                            id: book.id,
                            title: book.title,
                            authors: book.authors,
                            description: book.description,
                            image: book.image,
                            link: book.link
                        }}
                        saveBook = {this.saveBookHandler}
                    />
                ))
                ):(<div></div>)}
                
            </Wrapper>
        </div>

        </Container>
        </>)}



}



export default Search




