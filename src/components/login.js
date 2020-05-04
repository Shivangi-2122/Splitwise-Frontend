import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GoogleLogin from 'react-google-login'
import GoogleLogout from 'react-google-login'
import {FormGroup} from '@material-ui/core'

class Login extends Component{

    constructor(props){
        super(props)
        this.state ={
            username:"",
            password:""
        }
    }

    render(){
        const responseGoogleSuccess = (response) => {
            this.setState(
                {
                    isLoggedIn : true,
                    email : response.profileObj.email,
                    name : response.profileObj.givenName,
                    loginmessage : "Logged In as ",
                    isValidUser:true

                } 
            )
            console.log(response)
        }

       const  responseGoogleFailure  = (response) =>{
           console.log(response)
       }

       const responseLogout = (response) => {
           this.setState ={
               name : "",
               email : "",
               loginmessage :"",
               logoutmessage : "Logged Out Successfully"
               
           }
       }


        return(
            <div className=" pltws container-fluid">
                 <div className="row  justify-content-center align-items-center">
                    <Col xs="2"> 
                        <form>
                            <FormGroup>
                                <TextField
                                        variant="outlined"  margin="dense" 
                                        name ="username" placeholder="Username/Email *"
                                        value ={this.state.username}
                                        className="form-control" 
                                        type ="text"
                                        onChange={(e)=>{this.setState({ username:e.target.value})}}
                                    >
                                </TextField>
                            </FormGroup>
                            <FormGroup>
                            <TextField
                                        variant="outlined"  margin="dense" 
                                        name ="password" placeholder="Password *"
                                        value ={this.state.password}
                                        className="form-control" 
                                        type ="text"
                                        onChange={(e)=>{this.setState({ password:e.target.value})}}
                                    >
                                </TextField>
                            </FormGroup>
                            <FormGroup>
                                <Button variant="contained" color="primary" name ="login" onClick ={this.props.loginAction}>Submit</Button>
                                
                                <label>OR</label>
                                <GoogleLogin className="loginBtn loginBtn--google"
                                   clientId="267432195126-ffkt3vn90pd0560bacega91lffrr8eqq.apps.googleusercontent.com"
                                   onSuccess={responseGoogleSuccess}
                                   onFailure={responseGoogleFailure}
                                    icon = {'false'}
                                   cookiePolicy={'single_host_origin'}
                                />
                            </FormGroup>
                    
                    </form>
                </Col>
                </div>
                {(this.props.errorMessage!="")?<h1>{this.props.errorMessage}</h1>:""}
            </div>
        )
    }
}

export default Login