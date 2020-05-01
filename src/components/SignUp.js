import React, { Component } from 'react'
import './MyStyle.css'
import ReactDOM from 'react-dom'
import GoogleLogin from 'react-google-login'
import GoogleLogout from 'react-google-login'
import Welcome from './Welcome'
import axios from 'axios'
import Login from './login'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { FormLabel  } from '@material-ui/core'
import {InputAdornment } from '@material-ui/core'
import {IconButton} from '@material-ui/core'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Edit from "@material-ui/icons/Edit"
import Dashboard from './Dashbord'

const API_URL ='http://localhost:8080'
const USER_API_URL = `${API_URL}/createUser`

class SignUp extends Component{

    constructor(props){
        super(props)
        this.state ={
            isLoggedIn : false,
            email : " ",
            name : "",
            loginmessage : "",
            password:"",
            isValidUser:false,
            existingUser:false,
            data : null
        }
    
    }

    renderLoginPage(){
        
    }
    
     handleLogin = (e) =>{
        console.log("handleLogin")
        this.setState({ existingUser :true})

     }
     handleSignUp = (e) => {
       let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
          };
      
          console.log("data :",this.state.name," email :",this.state.email)
            axios.post(USER_API_URL, {
                "userName": this.state.name,
                "email":this.state.email,
                "password":this.state.password
            },axiosConfig     
            ).then((res) => {
               
                this.setState({
                   
                    isValidUser : true,
                    isLoggedIn : true
                });
                console.log("RESPONSE RECEIVED: ", res);
                console.log("State: ", this.state.isValidUser);
                
              })
              .catch((err) => {
                console.log("AXIOS ERROR: ", err);
              })

              

       }
       
       componentDidMount(){
      //   this.handleSignUp();
     }

    render(){

        const renderLoginPage = this.renderLoginPage();

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


      
       if( !this.state.isValidUser ) {
        return(
            <div>
                <header >
                    <Row>
                        <Col xs lg="8">
                            <p><img id="logo" float="left" src={require("../img/logo.png")}></img><span className="logo-text">Splitwise</span></p>
                        </Col>
                       
                        <Col md="auto"> Already Have an Account?<Button variant="contained" onClick={this.handleLogin}>Login</Button></Col>
                      
                    </Row>
                </header>
            <div className=" pltws container-fluid">
                 <div className="row  justify-content-center align-items-center">
                    <Col xs="2">                   
                        <form >
                        <strong>INTRODUCE YOURSELF</strong>
                    
                        <div className ="form-group">
                        
                        
                        <TextField   variant="outlined"
                         name="userName" 
                         type="text"
                         className="form-control" placeholder=" Username *"
                         margin="dense"
                         value ={this.state.name}
                         onChange ={this.handleOnchange=(e)=>{ this.setState({name:e.target.value}) }}
                        /*
                         InputProps ={{
                        startAdornment :(<InputAdornment disablePointerEvents position="end">
                            <IconButton>
                                <Edit></Edit>
                            </IconButton>
                             </InputAdornment>
                        )
                         }}}*/
                         ></TextField>
                        
                        </div>
                        <div className ="form-group">
                       
                        
                        <TextField   variant="outlined"  margin="dense" 
                        name ="email" placeholder="Email *"
                        value ={this.state.email}
                        className="form-control" 
                        type ="email"
                         onChange={(e)=>{this.setState({ email:e.target.value})}}>
                        </TextField>
                        </div>
                       
                        <TextField   variant="outlined" 
                        type="password"  margin="dense" 
                        name ="password" 
                        value={this.state.password}
                        className="form-control" 
                        placeholder="Password *" onChange={(e)=>{this.setState({password:e.target.value})}}>
                        </TextField> <br/>
                        <Button variant="contained" color="primary" 
                        name ="signup" onClick ={this.handleSignUp}>Sign UP</Button><br/>

                         <label>OR</label><br/>
                        <GoogleLogin className="loginBtn loginBtn--google"
                        
                            clientId="267432195126-ffkt3vn90pd0560bacega91lffrr8eqq.apps.googleusercontent.com"
                           
                            onSuccess={responseGoogleSuccess}
                            onFailure={responseGoogleFailure}
                            icon = {'false'}
                            cookiePolicy={'single_host_origin'}
                        />
                        </form>
                    
                    
                    </Col>
                </div>
            </div>
            </div>
            
        )
     }
     else{
        return(
         <Welcome name={this.state.name}></Welcome>
       
        )
    }

}
}

export default SignUp