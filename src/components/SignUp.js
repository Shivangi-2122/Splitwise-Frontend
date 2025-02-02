import React from 'react'
import Component from 'react'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GoogleLogin from 'react-google-login'
import GoogleLogout from 'react-google-login'

class Signup extends React.Component{

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
        
        )
    }
}

export default Signup