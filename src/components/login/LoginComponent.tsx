import React, { useEffect, useReducer, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from "react-router-dom";
import { loginReducer } from '../../redux/reducer/loginReducer';
import BasicButtonCommon from '../commoncomponent/BasicButtonCommon';
// Define function component we can follow the function structure. That structure should be normal function or arrow function. Right now i am using arrow function to define component.

const LoginComponent = () => {
  // Function component will use the different type of hooks. Function component don't have there own lifecycle like class component. For execution internal things use hooks only.

  // Hooks: Hooks are method which use to manipulate the component state within component.
  // Different kind hooks will use which are perfom the life cycle.

  // Hooks: useState, useEffect, useRef, useMemo, useCallback

  // useState : it is use define component state.
  const dispatchLogin = useDispatch();
  const getLoginState = useSelector(state => state);

  console.log("getLoginState in useselector", getLoginState);

  const navigate = useNavigate()

  const [userdetails, setUserdetails] = useState<any>({
    name: '',
    phoneno: 121212,
    additiondetails: [{ id: 1, address1: '', address2: '' }],
    yesorno: false
  });

  const [buttonProps, setbuttonProps] = useState({
    variant: 'outlined',
    label: 'Login Button'
  });
  const initialLoginState = {
    isLogedIn: false
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const [count, setCount] = useState(0)
  // userdetails : will contain all data which used within your component
  // setUserdetails : this is method to use update state within component

  const inputHandler = () => {
    // setUserdetails({
    //     ...userdetails,
    //     name: 'Name change after click',
    //     phoneno: 3434343434
    // })
    setCount(count + 1)
  }

  const methodoncall = () => {
    console.log('method need to call on component load')
    setUserdetails({
      ...userdetails,
      name: 'State update on mount phase',
      phoneno: 3434343434
    })
  }

  // How life cycle will achieve in function component;

  // useEffect : This hook will help to achieve lifecycle of component.

  useEffect(() => {
    // This area will execute mounting phase of component.
    // if(count > 5){
    //     methodoncall();
    // }
    // methodoncall();
    // setInterval(()=>{
    //     console.log('Set interval is on');
    //     inputHandler()
    // }, 5000);
    console.log("loginState", loginState)
    return () => {
      // unmounting phase of function component
      // Will unsubscribe all the call and continious process.
      // clearInterval('')
    }
  }, []) // dependecy array => It will use to trigger the change between state and based on that we can re-render the component. Need to specify that dependency into this array. This is update phase but it will work based on dependecies.

  const navigateToFeature = () =>{
    navigate('/pricing');
  }

  const handlerUserlogin = () =>{
    console.log("Make state update login");
    debugger
    // dispatch({type: 'LOGIN', isLogedIn: true});
  }

  return (
    <>
      {/* {console.log("userdetails", userdetails)}
        <h2>Component Load time value: {userdetails.name}</h2>
        <h2>Component Load time Phone no: {userdetails.phoneno}</h2>
        <div>Count value: {count}</div>
        <input type={'button'} value={'Change State'} onClick={inputHandler} /> */}
        <div>Count value: {count}</div>
      <Form className='userLoginForm'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Form.Select aria-label='Default select example'>
          <option>Open this select menu</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Form.Select>
        {/* <Button variant='primary' type='submit' onClick={navigateToFeature}>
          Submit
        </Button> */}
        {/* <BasicButtonCommon btnProps={buttonProps} /> */}
        <Button onClick={handlerUserlogin}>Update User Login</Button>
      </Form>
    </>
  )
}

export default LoginComponent
