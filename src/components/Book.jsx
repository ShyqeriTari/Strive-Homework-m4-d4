import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import MyBadge from './MyBadge'
import './Book.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CommentArea from './CommentArea'

export default class Book extends Component {

  state = {
    selected: false,
  }

  handleClick = () => { this.setState({ selected: !this.state.selected })  }

  // handleColorChange = (e) => {
  //   this.state.selected === false ? e.currentTarget.style.backgroundColor = 'coral' : e.currentTarget.style.backgroundColor = '#212529'
  // }

  render() {
    return (
      <Col
        xs={12}
        md={4}
        className="m-auto mb-3 card-container"
        onClick={this.handleColorChange}
      >
        <div className="card bg-dark m-auto" onClick={this.handleClick}>

          <MyBadge branding="Delete Book" color="dark" className="badge" />
          <img
            className="d-block img-fluid img"
            src={this.props.bookData.img}
            alt={this.props.bookData.title}
            onClick={(e) => this.props.function(this.props.bookData.asin)}
          />
          <h4 className="bg-dark text-light">{this.props.bookData.title}</h4>
          <h6 className="bg-dark text-light">{this.props.bookData.asin}</h6>
        </div>
        {/* <div>
        {this.state.selected === true &&(
        <CommentArea branding='d-block position-absolute' branding2={this.props.bookData.asin} />
        )}</div> */}
      </Col>
    )
  }
}
