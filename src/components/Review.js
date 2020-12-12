import React, {Component} from 'react';
import Rating from "react-rating";
import star from "../assets/img/star.svg";
import starFull from "../assets/img/star-full.svg";
import {FaStore, FiTrash, GoReply} from "react-icons/all";
import {Button, Form} from "react-bootstrap";

class Review extends Component {
  state = {
    isShowingReplyForm: false
  }

  handleToggleReplyForm = () => {
    this.setState({
      isShowingReplyForm: !this.state.isShowingReplyForm
    })
  }

  handleCloseReplyForm = () => {
    this.setState({
      isShowingReplyForm: false
    })
  }

  render() {
    const {data} = this.props;

    return (
      <div className="product-review">
        <div className="review-header">
          <div className="review-info">
            <Rating
              className="review-rating rating-sm mr-3"
              readonly={true}
              emptySymbol={
                <img src={star} className="rating-icon" alt=""/>
              }
              fullSymbol={
                <img
                  src={starFull}
                  className="rating-icon"
                  alt=""
                />
              }
              initialRating={data.rating}/>

            <span className="reviewer">by {data.review_by}</span>

            <small className="text-muted">{data.time_ago}</small>
          </div>

          <small>
            <span onClick={this.handleToggleReplyForm} className="mr-3 text-info d-inline-block"><GoReply/> REPLY</span>
            <span className="text-danger d-inline-block"><FiTrash/> DELETE</span>
          </small>
        </div>

        <div className="review-body">
          <div className="review">
            <p className="review-text">{data.review_text}</p>
            {data.images && <div className="review-photos">
              {data.images.map(img => (
                <div key={img.id} className="review-photo">
                  <img
                    src={img.image}
                    alt=""/>
                </div>
              ))}
            </div>}
          </div>

          {data.reply &&
          <div className="review-reply">
            <div className="store-reply">
              <FaStore/> reply by {data.reply.reply_by} - {data.reply.time_ago}
            </div>
            <div className="reply-text">{data.reply.reply_text}</div>
          </div>
          }

          {this.state.isShowingReplyForm &&
          <Form className="mt-3">
            <Form.Group controlId="reviewReply">
              <Form.Control rows={3} as="textarea" placeholder="Reply"/>
            </Form.Group>

            <div className="text-right">
              <Button onClick={this.handleCloseReplyForm} className="mr-2" variant={"default"}>Close</Button>
              <Button variant={"primary"}>Reply</Button>
            </div>
          </Form>
          }
        </div>
      </div>
    );
  }
}

export default Review;
