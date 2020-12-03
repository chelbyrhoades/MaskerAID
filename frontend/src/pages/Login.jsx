import axios from 'axios';
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Login.css';
import {Repository} from '../api/repository';

 export class Login extends React.Component {

    repo = new Repository();

    state = {

      email: "",
      password: "",
      accountType: "",
      success: false,
      error: false,
      errorMsg: "",
      uid: 9999

    }


    handleLogin = () => {

      this.checkError();
      if (!this.state.error) {
        this.repo.login(this.state.email, this.state.password).then(data => {
          this.setState({uid: data.data.split(":")[0]});
        })
        setTimeout(() => {
          this.props.onLogin(this.state.uid);
          this.setState({success: true});
        }, 1000);
        
      }
    }

    checkError = () => {
      if (this.state.username == "")
        this.setState({errorMsg: "Username is required", error: true})
      if (this.state.password == "")
        this.setState({errorMsg: "Password is required", error: true})
      //Fill in errors from post request
    }

    render() {

      return (
        <div className="container">
          <h3>Login</h3>
          <label htmlFor="email">Email</label>
          <input className="form-control" 
            type="text" 
            name="email" 
            id="email"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}
          />
          <label htmlFor="password">Password</label>
          <input className="form-control" 
            type="password" 
            name="password" 
            id="password"
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
          />
          {this.state.error && <div className="alert alert-danger" role="alert">Sample error -- for user doesnt exist or wrong password</div>}
          <button className="btn btn-primary btn-block" onClick={this.handleLogin}>Login</button>
          <span>Don't have an account? </span>
          <Link to="/create">
            Create Account
          </Link>
          {this.state.success && <Redirect to="/home"/>}
        </div>
      );

    }

 }