import React, {Component} from 'react';
import {FaReply, FiTrash, FiEdit} from "react-icons/all";
import {Button, Form} from "react-bootstrap";

class Question extends Component {
  state = {
    isShownReplyBox: false
  }

  handleToggleReplyBox = () => {
    this.setState({isShownReplyBox: !this.state.isShownReplyBox})
  }

  handleCloseReplyBox = () => {
    this.setState({isShownReplyBox: false})
  }

  render() {
    const {data} = this.props;


    return (
      <div className="item">
        <div className="question">
          <span className="symbol">Q</span>
          <span className="text">{data.question}</span>
          <time className="time">{data.question_time}</time>
        </div>

        {data.answer &&
        <div className="answer">
          <span className="symbol">A</span>
          <span className='text'>{data.answer}</span>
          <time className="time">{data.answer_time}</time>
        </div>
        }

        <div className="q-a-actions">
          {data.answer ?
            <span onClick={this.handleToggleReplyBox} className="text-info"><FiEdit/> Edit</span>
            :
            <span onClick={this.handleToggleReplyBox} className="text-info"><FaReply/> Reply</span>
          }
          <span color="text-danger"><FiTrash/> Delete</span>
        </div>

        {this.state.isShownReplyBox &&
        <Form style={{padding: '15px 0 0 50px'}}>
          <Form.Group>
            <Form.Control as="textarea" rows={3}/>
          </Form.Group>

          <Button className="mr-2" variant="primary">Reply</Button>
          <Button onClick={this.handleCloseReplyBox} variant="default">Close</Button>
        </Form>
        }
      </div>
    );
  }
}

export default Question;
