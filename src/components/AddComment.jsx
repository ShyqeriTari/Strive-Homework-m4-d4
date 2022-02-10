import {Button, Form} from 'react-bootstrap'
import { Component } from 'react'


class AddComment extends Component {

    state = {
        selected: false,
        comments:{
            comment: '',
        rate: '',
        elementId:'',
    },
    
      }

      handleClick = () => { this.setState({ 
        ...this.state.comments,
          selected: !this.state.selected })  }

          handleChange = (property, value) => {
            this.setState({
                ...this.state,
                comments:{
                    ...this.state.comments,
                [property] : value,
                }
              },
            )
          }

handleSubmit = async (event) => {

    event.preventDefault()
console.log(this.state.comments)
    try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/',
          {
            method: 'POST',
            body: JSON.stringify(this.state.comments),
            headers: {
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmJmZjgyZWExZDAwMTViYjA0NTMiLCJpYXQiOjE2NDQ1MDI2NjQsImV4cCI6MTY0NTcxMjI2NH0.3bwJaMRCEg1s4cjThEr8yeXG0YdhPLIx-13jL7aIGbc',
              'Content-type': 'application/json',
            },
          }
        )
        if (response.ok) {
          alert('comment added!')
          this.setState({
            ...this.state,
            comments:{
            comment: '',
            rate: '',
            elementId:''
            }
          })
        } else {
         
          alert('something went wrong! please try again')

        }
      } catch (error) {
        console.log(error)
      }

}

    render(){
        return( 
             <>
        <Button variant="primary" className='mb-3' onClick={this.handleClick}>Add comment</Button>
        <div>
        {this.state.selected === true &&(
     <Form onSubmit={this.handleSubmit}>  
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="text" placeholder="comment"  onChange={(e) =>
                this.handleChange('comment', e.target.value)} />
     </Form.Group>
   
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control type="text" placeholder="rate" onChange={(e) =>
                this.handleChange('rate', e.target.value)}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control type="text" placeholder="Id"  onChange={(e) =>
                this.handleChange('elementId', e.target.value)}/>
     </Form.Group>
     <Button variant="success" type="submit" className='mb-3'>
      Add
     </Button>
   </Form>
        )}</div>
        </>
        )
}

}

export default AddComment