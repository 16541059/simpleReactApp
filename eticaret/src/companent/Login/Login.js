import React, { useEffect, useRef } from 'react'
import "./Login.css"
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userAction from "../../redux/action/userAction";

import { Card, Button, CardHeader, CardBody,  Label, Input, Form } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';


function Login(props) {
    const users = useSelector(state => Array.from(state.usersReducer));
  let   history = useHistory()

    useEffect(() => {


        props.actions.getUsers()


    }, [props.actions]);


    const email = useRef()
    const password = useRef()

    const login=() =>{
        // console.log(email.current.value)
        // console.log(password.current.value)
   
       var add= users.find(user=> user.email===email.current.value && user.password===password.current.value)
       if(add){
           
         
        localStorage.setItem("myData",add.name)
        localStorage.getItem("myData")
        history.push("/home")
        
        
        
       }

    }
    let     data=localStorage.getItem("myData")
  
    return (
        <div >
            { !data?


      
            <Card color="dark" className="card">
                <CardHeader tag="h3">Giriş</CardHeader>
                <CardBody>
                    <img className="rounded-circle" style={{marginLeft:"40%",marginRight:"40%"}} src="https://picsum.photos/125/125?grayscale" alt=""></img>
                    <Form>
                        <div className="form-group">
                            <Label className="">E-mail</Label>
                            <Input className="form-control" type="email" placeholder="E-mail giriniz"
                                ref={email} onChange={(e) => email.current.value = e.target.value}
                            ></Input>
                        </div>
                        <div className="form-group">
                            <Label className="">Sifre </Label>
                            <Input className="form-control" type="password" placeholder="Sifre giriniz"
                                ref={password} onChange={(e) => password.current.value = e.target.value}
                            ></Input>
                        </div>
                        
                    </Form>
                 
                    <div className="form-group">
                        <Button   className=" btn btn-success  pull-right"  onClick={login}>
                            <FontAwesomeIcon icon={['fas', 'sign-in-alt']} /> Giriş
                        </Button>
                      
                        <Button type="submit" className="btn btn-warning  pull-right mr-2" >
                            <FontAwesomeIcon icon={['fas', 'unlock-alt']} /> Şifremi Unuttum
                        </Button>

                    </div>
                    
            
                </CardBody>


            </Card>:<div>{console.log(data)}</div>
            
            } 

        </div>
    )
}

const mapStateToProps = state => {

    return {

        users: state.usersReducer,
        session: state.sessionReducer


    }

}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            getUsers: bindActionCreators(userAction.getUsers, dispatch),
          



        }
    }
    // return { ...actions, dispatch };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)