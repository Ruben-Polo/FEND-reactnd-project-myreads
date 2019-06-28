// Component of the book
import React, {
    Component
} from "react";

class Book extends Component {
    state = {}

    handleSelectChange = (i) => {
        var shelf = i.target.value;
        this.props.updateShelf(this.props.book, shelf);
    };

    render() {
        const {
            book
        } = this.props;
        return ( <
            div className = "book" >
            <
            div className = "book-top" > {
                book.imageLinks && ( <
                    div className = "book-cover"
                    style = {
                        {
                            width: 125,
                            height: 180,
                            backgroundImage: `url("${book.imageLinks.thumbnail}")`
                        }
                    }
                    />
                )
            } <
            div className = "book-shelf-changer" >
            <
            select defaultValue = {
                book.shelf ? book.shelf : "none"
            }
            onChange = {
                this.handleSelectChange
            } >
            <
            option value = "move"
            disabled > Move to... < /option> <
            option value = "currentlyReading" > Currently Reading < /option> <
            option value = "wantToRead" > Want to Read < /option> <
            option value = "read" > Read < /option> <
            option value = "none" > None < /option> <
            /select> <
            /div> <
            /div> <
            div className = "book-title" > {
                book.title ? book.title : ''
            } < /div> <
            div className = "book-authors" > {
                book.authors ? book.authors.join(', ') : ''
            } < /div> <
            /div>)
        }
    }

    export default Book