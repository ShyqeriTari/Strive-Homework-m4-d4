import {  useState } from 'react'
import { InputGroup, FormControl, Container, Row } from 'react-bootstrap'
//import MyInput from './MyInput'

import Book from './Book'
import books from '../data/history.json'
import CommentArea from './CommentArea'

export default function BookWrapper (){
 

  const [bookTitle, setBookTitle] = useState('')

  const [id, setId] = useState(undefined)

  const changeId = (bookId) => {
    setId(bookId)
  }

 const handleChange = value => {
    setBookTitle(value)
  }

    return (
      <Container style={{padding: '0px', margin: 'auto', paddingBottom:'100px'}}>
        <>
          <InputGroup size="sm" className="mb-3 m-auto">
            <FormControl
              onChange={e => handleChange(e.target.value)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder='search for book title'
            />
          </InputGroup>
        </>
        <Row className='m-auto'>
        <CommentArea branding2={id}/>
          {books
            .filter(book =>
              book.title
                .toLowerCase()
                .includes(bookTitle.toLowerCase())
            )
            .map(book => {
              return <Book bookData={book} key={book.asin} function={changeId}/>
            })}
            
        </Row>
      </Container>
    )
}
