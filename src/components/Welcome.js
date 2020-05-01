import React, { Component } from 'react'
import './signup.css'
import ReactDOM from 'react-dom'
import GoogleLogout from 'react-google-login'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {MenuItem} from '@material-ui/core'
import {InputLabel} from '@material-ui/core'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NativeSelect } from '@material-ui/core';
import FormControl from 'react-bootstrap/FormControl'
import Dropdown from '../index.js'
const API_URL ='http://localhost:8080'
const USER_API_URL = `${API_URL}/createGroup`
const options = [
    'one', 'two', 'three'
  ]

class Welcome extends Component{

    constructor(props){
        super(props)
        this.state={
            grp_name :"",
            grp_type:"",
            age:""
        }
    }

    addGroup =(e) =>{
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
          };
          console.log("Inside axios")
            axios.post(USER_API_URL, {
                "group_name": this.state.grp_name,
                "group_type":this.state.grp_type
            },axiosConfig     
            ).then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
                 
              })
              .catch((err) => {
                console.log("AXIOS ERROR: ", err);
              })
    }
   
    render(){
        return(
            <div>
                <header >
                    <Row>
                        <Col xs lg="8">
                            <p><img id="logo" float="left" src={require("../img/logo.png")}></img><span className="logo-text">Splitwise</span></p>
                        </Col>
                        <Col xs lg="4">
                            <p><span> Logged in As <i>{this.props.name}</i></span>
                            <Button  className="btn_signout" variant="contained" color="primary" name="signout">LOGOUT</Button></p>
                        </Col>
                    </Row>
                </header>
            <div margin-right="500px">
                
                {/*<GoogleLogout  
                clientId="267432195126-ffkt3vn90pd0560bacega91lffrr8eqq.apps.googleusercontent.com"
                buttonText="Logout"
                >

                </GoogleLogout>*/}

                
                <Row >
                    <p>WELCOME TO SPLITWISE </p>
                </Row>
                <Row>
                <Col xs-md="5">
                <div className="add_group">
                    <form>
                        <div className ="form-group">
                            <Button variant="outlined">ADD GROUP</Button>
                        </div>
                        <div className ="form-group">
                            <label className="lbl_grp"> GROUP NAME</label>
                        </div>
                        <div className ="form-group">
                            <TextField id = "group_name" variant ="outlined" 
                             name ="txt_grp_name"
                             value ={this.state.grp_name}
                             onChange={this.handleGroupName =(e)=>{this.setState({grp_name:e.target.value}) }}
                            >
                            </TextField>
                        </div>
                        <div className ="form-group">
                            <label id="label" className="lbl_grp">Group Type</label>
                        </div>
                        <div className ="form-group" >
                                <select value ={this.state.grp_type} onChange={this.handleChange=(e)=>{this.setState({grp_type:e.target.value})}}>
                                <option value="trip">Trip</option>
                                <option value="house">House</option>
                                <option  value="flat">Flat</option>
                                <option value="other">Other</option>
                                </select>
                        </div>
                        
                        <div className ="form-group">
                        <Button variant ="contained" onClick={this.addGroup}>SAVE</Button>
                        </div>
                    </form>                                
                </div>
                </Col>
                </Row>
            </div>
            </div>
        )
      }
}

export default Welcome