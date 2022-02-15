import {Button, Form} from 'react-bootstrap'
import { useState} from 'react'


const AddComment = () => {


    const [selected, setSelected] = useState(false)

    const [comments, setComments] = useState({
      comment: '',
  rate: '',
  elementId:'',
})
    

     const handleClick = () => { 
        setSelected(!selected)
           }

      const handleChange = (property, value) => {
            setComments({...comments,[property] : value})
                    
          }

const handleSubmit = async (event) => {

    event.preventDefault()
console.log(comments)
    try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/',
          {
            method: 'POST',
            body: JSON.stringify(comments),
            headers: {
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmJmZjgyZWExZDAwMTViYjA0NTMiLCJpYXQiOjE2NDQ1MDI2NjQsImV4cCI6MTY0NTcxMjI2NH0.3bwJaMRCEg1s4cjThEr8yeXG0YdhPLIx-13jL7aIGbc',
              'Content-type': 'application/json',
            },
          }
        )
        if (response.ok) {
          alert('comment added!')
          setComments({
            comment: '',
            rate: '',
            elementId:''
            })
          
        } else {
         
          alert('something went wrong! please try again')

        }
      } catch (error) {
        console.log(error)
      }

}


        return( 
             <>
        <Button variant="primary" className='mb-3' onClick={handleClick}>Add comment</Button>
        <div>
        {selected === true &&(
     <Form onSubmit={handleSubmit}>  
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="text" placeholder="comment"  onChange={(e) =>
                handleChange('comment', e.target.value)} />
     </Form.Group>
   
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control type="text" placeholder="rate" onChange={(e) =>
                handleChange('rate', e.target.value)}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control type="text" placeholder="Id"  onChange={(e) =>
                handleChange('elementId', e.target.value)}/>
     </Form.Group>
     <Button variant="success" type="submit" className='mb-3'>
      Add
     </Button>
   </Form>
        )}</div>
        </>
        )
}


export default AddComment