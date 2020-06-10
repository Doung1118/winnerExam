import React, { Component } from 'react'

import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
//53:00

export default class Form extends Component {

  // 40:21

  state = {
    name: '',
    lastname: '',
    email: '',
    message: '',
    sent: false
  }

  //handle inputs
  handleName = (e) => {
    console.log(e.target.value);
    this.setState({
      // name: e.target.name
      name: e.target.value
    })
  }

  // setState is change  "state of content "//
  //this 是指component 

  //end of handle inputs 

  handleEmail = (e) => {
    this.setState({
      // email: e.target.email
      email: e.target.value
    })
  }



  handleMessage = (e) => {
    this.setState({
      // message: e.target.message
      message: e.target.value
    })
  }


  handleLastname = (e) => {
    this.setState({
      // lastname: e.target.lastname
      lastname: e.target.value

    })
  }



  // 54:00
  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      message: this.state.message
    }
    axios.post('/api/forma', data)
      .then(res => {
        this.setState({
          sent: true,
        }, this.resetForm())
      }).catch(() => {
        console.log('message not sent');
      })
  }

  //for resting init data 
  // 1:00
  resetForm = () => {
    this.setState({
      name: '',
      lastname: '',
      email: '',
      message: '',
    })

  }



  render() {
    return (

      <div className="container">
        <form onSubmit={this.formSubmit}>
          {/* single item */}
          <div className="singleItem">
            <label htmlFor="name">name</label>
            <input type="text" name="name" className="name"
              placeholder="your name..."

              // 45:13 tuber
              value={this.state.name}
              //compont state of handleName // 

              onChange={this.handleName}
            //onChange 的Ｃ是大寫// 

            />
          </div>
          {/* end of single item   */}

          {/* single item */}
          <div className="singleItem">
            <label htmlFor="name">last name </label>
            <input type="text" name="name" className="name"
              placeholder="your last name..."

              value={this.state.lastname}
              onChange={this.handleLastname}

            />
          </div>
          {/* end of single item   */}

          {/* single item */}
          <div className="singleItem">
            <label htmlFor="name">email</label>
            <input type="text" name="name" className="name"
              placeholder="your email..."

              value={this.state.email}
              onChange={this.handleEmail}

            />
          </div>
          {/* end of single item   */}

          {/* single item */}
          <div className="textArea singleItem">
            <label htmlFor="message">Message</label>
            <textarea name="message" id=""
              cols="30" rows="5" placeholder="your Message..."


              value={this.state.message}
              onChange={this.handleMessage}

            ></textarea>
          </div>
          {/* end of single item   */}

          {/* 1:32:00 */}
          <div className={this.state.sent ? 'msg msgAppear' : 'msg'} >Message has been desent</div>
          <div className="btn" >
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    )
  }
}