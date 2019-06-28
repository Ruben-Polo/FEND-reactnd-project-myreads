// Container of the library
import React, {
    Component
} from "react";
import {
    Link
} from "react-router-dom";
import BookShelf from "../components/BookShelf.js";

export default class BookShelfList extends Component {

    render() {
        return ( <
            div className = "list-books" >
            <
            div className = "list-books-content" >
            <
            div >
            <
            BookShelf shelfTitle = "Currently Reading"
            bookList = {
                this.props.currentlyReading
            }
            updateShelf = {
                this.props.updateShelf
            }
            /> <
            BookShelf shelfTitle = "Want to Read"
            bookList = {
                this.props.wantToRead
            }
            updateShelf = {
                this.props.updateShelf
            }
            /> <
            BookShelf shelfTitle = "Read"
            bookList = {
                this.props.read
            }
            updateShelf = {
                this.props.updateShelf
            }
            /> <
            /div> <
            /div> <
            div className = "open-search" >
            <
            Link to = "/search" > < /Link> <
            /div> <
            /div>);
        }
    };