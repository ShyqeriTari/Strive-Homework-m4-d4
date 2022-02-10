import { Component } from 'react'
import { InputGroup, FormControl, Container, Row } from 'react-bootstrap'
//import MyInput from './MyInput'

import Book from './Book'
import books from '../data/history.json'

export default class BookWrapper extends Component {
  state = {
    bookTitle: '',

  }


  handleChange = value => {
    this.setState({ bookTitle: value })
  }

  render() {
    return (
      <Container style={{padding: '0px', margin: 'auto', paddingBottom:'100px'}}>
        <>
          <InputGroup size="sm" className="mb-3 m-auto">
            <FormControl
              onChange={e => this.handleChange(e.target.value)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder='search for book title'
            />
          </InputGroup>
        </>
        <Row className='m-auto'>
          {books
            .filter(book =>
              book.title
                .toLowerCase()
                .includes(this.state.bookTitle.toLowerCase())
            )
            .map(book => {
              return <Book bookData={book} key={book.asin} />
            })}
        </Row>
      </Container>
    )
  }
}
