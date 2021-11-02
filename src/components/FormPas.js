import React, { useState } from 'react'; 
import { Button, Form } from 'react-bootstrap'; 
 
 
const FormPas = () => { 
    const [user, setUser] = useState({ 
        email: '', 
        pass1: '', 
        pass2: '', 
        show: true 
    }) 
 
    function updateState(e) { 
        let newUser = { 
            ...user, [e.target.name]: e.target.value 
        } 
        setUser(newUser) 
    } 
 
    function handleSubmit(e) { 
        e.preventDefault() 
        if (user.pass1 === '' && user.pass2 === '') { 
            console.log("Enter a password!"); 
            return 
        } 
        else if (user.pass1 === user.pass2) { 
            let change = { 
                ...user, show: false 
            } 
            setUser(change) 
        } else { 
            console.log("Пароли не совпадают!"); 
        } 
 
 
    } 
 
    let mainForm; 

    if (user.show) { 
        mainForm = ( 
            <Form className='form1' onSubmit={handleSubmit}> 
                <Form.Group className="mb-3" controlId="formBasicEmail"> 
                    <Form.Label>Email address:</Form.Label> 
                    <Form.Control className='formInp' name='email' type="email" placeholder="Enter email" onChange={updateState} /> 
 
                </Form.Group> 
 
                <Form.Group className="mb-3" controlId="formBasicPassword"> 
                    <Form.Label>Password:</Form.Label> 
 
                    <Form.Control className='formInp' name='pass1' type="password" placeholder="Password" onChange={updateState} /> 
 
                </Form.Group> 
                <Form.Group className="mb-3" controlId="formBasicPassword"> 
 
                    <Form.Control className='formInp' name='pass2' type="password" placeholder="Set password again" onChange={updateState} /> 
 
 
                </Form.Group> 
 
                <Button onSubmit={handleSubmit} variant="primary" type="submit" > 
                    log in 
                </Button> 
 
            </Form> 
        ) 
    } 
    else { 
        mainForm = ( 
            <div>{user.email} 
                <Button variant="danger" type="submit" onClick={logOut} > 
                    log out 
                </Button> 
            </div> 
        ) 
    } 
    function logOut() { 
        let newObj = { 
            show: true 
        } 
        setUser(newObj) 
    } 
    return ( 
        <div> 
            {mainForm} 
        </div> 
    ); 
}; 
 
export default FormPas;