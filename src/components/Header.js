import React from 'react'
import Component from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './MyStyle.css'
import {Button} from '@material-ui/core'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isLoggedIn :true
        }
        
    }

    render(){

        return (
            <React.Fragment>
                 <header >
                <Row>
                    <Col xs lg="8">
                        <p><img id="logo" float="left" src={require("../img/logo.png")}></img><span className="logo-text">Splitwise</span></p>
                    </Col>
            {
                (!this.props.isLoggedIn) ?  ( <Col md="auto">{!this.props.isLoginOrSignup ? " Already Have an Account?":"Create account"}<Button variant="contained" onClick={this.props.isLoginOrSignupFunction}>{!(this.props.isLoginOrSignup) ?"Login":"signup"}</Button></Col> ) :  <Col xs lg="4"><p><span> Logged in As <i>{this.props.name}</i></span><Button  className="btn_signout" variant="contained" color="primary" name="signout">LOGOUT</Button></p></Col>
            
            }
            </Row>
            </header>
            </React.Fragment>
        )

    
    }
}

export default Header