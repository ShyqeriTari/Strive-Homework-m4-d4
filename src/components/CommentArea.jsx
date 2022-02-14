import { Card, Col } from "react-bootstrap"
import SingleComment from "./SingleComment"
import AddComment from "./AddComment"

const CommentArea = (props) => (
    <Card className={props.branding} style={{zIndex: '150', width:'40%', textAlign: 'center'}} key={props.branding2}>
  <Card.Header>Comments</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <AddComment branding={props.branding2}/>
    <SingleComment branding5={props.branding2}/>
    </blockquote>
  </Card.Body>
</Card>
)

export default CommentArea