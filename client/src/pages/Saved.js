import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";

import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Wrapper, BookItem, BookItemForSaved } from "../components/List";

class Saved extends Component {

    state = {
        books: []
    }


    componentDidMount() {
        console.log("trying to get data of all saved books")
        this.getBooks()
    }

    deleteBookHandler = id => {
        API.deleteBook(id)
            .then(res => this.getBooks())
            .catch(err => console.log(err))
    }

    getBooks = () => {
        console.log("run!!")
        API.getBooks().then(res => {
            console.log(res)
            this.setState({
                books: res.data
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (<>
            <Jumbotron>
                <div className="container text-center">
                    <h1 className="display-4">Your Bookshelf</h1>
                    <p className="lead">Here are the books you saved!</p>
                </div>
            </Jumbotron>
            <Container>
                <div className="row">
                    <Wrapper>
                        {this.state.books.length ? (
                            this.state.books.map(book => (
                                <BookItemForSaved
                                    key={book._id}
                                    title={book.title}
                                    authors={book.authors}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    dataId={book._id}
                                    deleteBook={this.deleteBookHandler}
                                />
                            ))
                        ) : (<div></div>)}

                    </Wrapper>
                </div>

            </Container>
        </>)
    }

}

export default Saved
