import {Button, ListGroup, Row, Col} from 'react-bootstrap'
import { Component } from 'react'

class SingleComment extends Component {
    

    state = {
        selected: false,
        comments: [],
        id: ''
      }

    //   handleDelete = async () => {
    //     let httpFetch = 'https://striveschool-api.herokuapp.com/api/comments/'+ this.state.id
    //     fetch(httpFetch, 
    //     { method: 'DELETE', 
    //     headers: {
    //         'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmJmZjgyZWExZDAwMTViYjA0NTMiLCJpYXQiOjE2NDQ1MDI2NjQsImV4cCI6MTY0NTcxMjI2NH0.3bwJaMRCEg1s4cjThEr8yeXG0YdhPLIx-13jL7aIGbc',
    //     },
    // }
    //     )
    //     .then(() =>console.log('Delete successful') );
    //   }

      handleClick = () => { this.setState({ 
        ...this.state,
          selected: !this.state.selected })  }

          componentDidMount = async () => {

           let httpFetch = 'https://striveschool-api.herokuapp.com/api/comments/'+ this.props.branding5
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
                console.log(data)
                this.setState({
                    
                    ...this.state.selected,
                 comments: data,
                })
              } else {
                alert('something went wrong :(')
                }
              }
             catch (error) {
              console.log(error)
            }
          }

    render(){
        return( 
             <div>
        <Button variant="primary" className='mb-3' onClick={this.handleClick}>Read comments</Button>
        <div>{this.state.selected === true &&(
        <ListGroup style={{width:'100%'}}>
            <Row>
            {this.state.comments.map((comment, idx) =>
                
                    <Col  key={idx + 1} xs={12}
        md={6}
        lg={4}
        xl={3}>
                <ListGroup.Item style={
                    {fontSize:'14px'}
                }>{comment.comment}</ListGroup.Item>
                {/* {this.setState({...this.state,
                id : comment._id})} */}
  <ListGroup.Item style={{fontSize:'14px'}}>{comment.rate}</ListGroup.Item>
  <Button variant="danger" >Delete</Button>

  {/* onClick={this.handleDelete} */}
            
              </Col>
                
                
                
                )}
  </Row>

</ListGroup>)}
        </div>
        </div>
        )
}

}

export default SingleComment