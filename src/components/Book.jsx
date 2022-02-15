import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import MyBadge from './MyBadge'
import './Book.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import CommentArea from './CommentArea'

export default function Book (props) {


  const [selected, setSelected] = useState(false)

  const handleClick = () => {setSelected(!selected )}

  // handleColorChange = (e) => {
  //   this.state.selected === false ? e.currentTarget.style.backgroundColor = 'coral' : e.currentTarget.style.backgroundColor = '#212529'
  // }

    return (
      <Col
        xs={12}
        md={4}
        className="m-auto mb-3 card-container"
        // onClick={this.handleColorChange}
      >
        <div className="card bg-dark m-auto" onClick={handleClick}>

          <MyBadge branding="Delete Book" color="dark" className="badge" />
          <img
            className="d-block img-fluid img"
            src={props.bookData.img}
            alt={props.bookData.title}
            onClick={(e) => props.function(props.bookData.asin)}
          />
          <h4 className="bg-dark text-light">{props.bookData.title}</h4>
          <h6 className="bg-dark text-light">{props.bookData.asin}</h6>
        </div>
        {/* <div>
        {this.state.selected === true &&(
        <CommentArea branding='d-block position-absolute' branding2={this.props.bookData.asin} />
        )}</div> */}
      </Col>
    )
  }

