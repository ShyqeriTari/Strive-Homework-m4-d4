import {Button, ListGroup, Row, Col} from 'react-bootstrap'
import { useEffect, useState } from 'react'

const  SingleComment = (props) => {
    


      const [selected, setSelected] = useState(false)

      const [comments, setComments] = useState([])

      // const [id, setId] = useState('')

     const handleClick = () => { 
        setSelected(!selected) }

        const fetchFunc = async () => {let httpFetch = 'https://striveschool-api.herokuapp.com/api/comments/'+ props.branding5
        try {
          let response = await fetch(
            httpFetch, {
             headers: {
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmJmZjgyZWExZDAwMTViYjA0NTMiLCJpYXQiOjE2NDQ1MDI2NjQsImV4cCI6MTY0NTcxMjI2NH0.3bwJaMRCEg1s4cjThEr8yeXG0YdhPLIx-13jL7aIGbc',
            }
        }
          )
          if (response.ok) {
            let data = await response.json()
            // console.log(data)
            setComments(data)
            
          } else {
            alert('something went wrong :(')
            }
          }
         catch (error) {
          console.log(error)
        }}

        useEffect(() => {fetchFunc()},// eslint-disable-next-line react-hooks/exhaustive-deps
         [])

  const handleDelete = async (str) => {
        let httpFetch = 'https://striveschool-api.herokuapp.com/api/comments/'+ str
        fetch(httpFetch, 
        { method: 'DELETE', 
        headers: {
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmJmZjgyZWExZDAwMTViYjA0NTMiLCJpYXQiOjE2NDQ1MDI2NjQsImV4cCI6MTY0NTcxMjI2NH0.3bwJaMRCEg1s4cjThEr8yeXG0YdhPLIx-13jL7aIGbc',
        },
    }
        )
        .then(() =>console.log('Delete successful') );
      }

        return( 
             <div>
        <div onClick={handleClick}>
        <ListGroup style={{width:'100%'}}>
            <Row>
            {comments.map((comment, idx) =>
            <Col  key={idx + 1} xs={12} md={6} lg={4} xl={3}>
                <ListGroup.Item style={
                    {fontSize:'14px'}
                }>{comment.comment}</ListGroup.Item>
  <ListGroup.Item style={{fontSize:'14px'}}>{comment.rate}</ListGroup.Item>
  <Button variant="danger" onClick={() => handleDelete(comment._id)} >Delete</Button>
              </Col>
 
                )}
  </Row>

</ListGroup>
        </div>
        </div>
        )
}


export default SingleComment