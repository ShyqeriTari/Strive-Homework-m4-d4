import {Button, ListGroup, Row, Col} from 'react-bootstrap'
import { Component } from 'react'

class SingleComment extends Component {
    

    state = {
        selected: false,
        comments: [],
      }

      handleClick = () => { this.setState({ 
        ...this.state,
          selected: !this.state.selected })  }

          componentDidMount = async () => {

           let httpFetch = 'https://striveschool-api.herokuapp.com/api/comments/'+ this.props.branding5
            console.log("I'm fully mounted!")
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
        md={4}
        lg={2}
        xl={2}>
                <ListGroup.Item style={
                    {fontSize:'12px'}
                }>{comment.comment}</ListGroup.Item>
  <ListGroup.Item style={{fontSize:'12px'}}>{comment.rate}</ListGroup.Item>
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