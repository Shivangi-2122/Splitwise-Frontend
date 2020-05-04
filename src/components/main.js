import React from 'react'
import Component from 'react'
import Header from './header';
import Login from './login'
import SignUp from './signup';
import {login,signup} from '../services/loginsignup';
class Main extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            isLoggedIn:false,
            isProfile :false,
            isLoginOrSignup :false,
            loginerrormsg:"",
            username:""
        }
    }

    loginAction = (obj) =>{
        if(login(obj)!=null){
            console.log("hello shivangi suck my dick");
                this.setState({
                    username:obj.name,
                    loginerrormsg:"",
                    isLoggedIn:true
                })
               
        }
        else{
            this.setState({
                loginerrormsg:"wrongcredentials",
                isLoggedIn:false,
                username:""
            })
            
        }
    }
    isLoginOrSignup =() =>{
        if (this.state.isLoginOrSignup){
            
            this.setState({isLoginOrSignup:false})

        }
        else{

            this.setState({isLoginOrSignup:true})
        }
        console.log("Called")
            
     }
        render(){
            let props ={
                isLoginOrSignup : this.state.isLoginOrSignup,
                isLoginOrSignupFunction : this.isLoginOrSignup,
                isLoggedIn : this.state.isLoggedIn
            }
            let loginProps ={
                errorMessage:this.state.loginerrormsg,
                loginAction:this.loginAction
            }
        return(
        
            <div>
                <Header {...props}></Header>
                {this.state.isLoginOrSignup ? <Login {...loginProps}></Login> : <SignUp></SignUp>}
                
            </div>
            
          )
        }
    }


export default Main;