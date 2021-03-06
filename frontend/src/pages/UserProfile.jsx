import React from 'react';
import axios from 'axios';
import {Repository} from '../api/repository';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { EditProfile } from './EditProfile';

class UserProfile extends React.Component{
    //need get user info call
    repo = new Repository();
    state = {

        
        data: {
            name: "",
            email: "",
            typeName: "",
            phone: "",
            country: "",
            streetAddress: ""
        }

    };
    handleNameChange(e){
        this.setState({name:e.target.value})
      }
      handlePasswordChange(e){
        this.setState({password:e.target.value})
      }
      //.then(data => console.log({data})
    componentDidMount(){
        const id = this.props.match.params.userId;
        this.repo.getAccountInfo(id)
        .then(userData => this.setState({data: userData[0]})
        
        );
        console.log("user profile mounted");
        
    }
  
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.data.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{`Email: ${this.state.data.email}`}</li>
                        <li className="list-group-item">{`Address: ${this.state.data.address}`}</li>
                        <li className="list-group-item">{`Phone number: ${this.state.data.phone}`}</li>
                        <li className="list-group-item">{`Country: ${this.state.data.country}`}</li>
                    </ul>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <Link to="/home">Return to homepage</Link>
                            </div>
                            <div className="col">
                                <Link to={`/orders/${this.props.match.params.userId}`} className="btn btn-primary btn-block">My orders</Link>
                            </div>
                            <div className="col">
                                <Link to={`/user/edit/${this.props.match.params.userId}`} className="btn btn-primary btn-block">Edit my profile</Link>
                            </div>
                            {this.state.data.typeName === "distributor" && 
                            <>
                                <div className="col">
                                    <Link to={`/distributors/${this.props.match.params.userId}`} className="btn btn-primary btn-block">My listings</Link>
                                </div>
                                <div className="col">
                                    <Link to={"/createListing"} className="btn btn-primary btn-block">Create a listing</Link>
                                </div>
                            </>
                            }
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        );
    }//end render
    
}//end userProfile class
export default withRouter(UserProfile);
