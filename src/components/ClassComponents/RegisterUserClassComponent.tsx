import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material'
import { getRequest, postrequestMethod } from '../../api/apiUrls'
import { USER_LIST, USER_SAVE } from '../../api/api'
import ListRegisterUserComponent from './ListRegisterUserComponent'
export interface stateinterface {
  name: string
  btnProperty: {}
}

class RegisterUserClassComponent extends Component<any, any> {
  static propTypes: {}
  constructor (props: any) {
    super(props)
    // this.submitUserData = this.submitUserData.bind();
    this.state = {
        alluserlist: [],
        collectControlData: {},
        checkState: false
    }
  }

  componentWillMount () {
    // console.log('Wil mount executed')
  }

  componentDidMount () {
    // console.log('Did mount executed')
  }

  // After receive any certain props value then this method will executed
  componentWillReceiveProps (nextProps: any) {
    // console.log('Will receive props executed')
  }

  // This method only call while receive a props and props have some changes only
  // shouldComponentUpdate(nextProps: any, nextState: any) {

  // }

  componentWillUpdate (nextProps: any, nextState: any) {
    // console.log('Wil update executed')
  }

  componentDidUpdate (prevProps: any, prevState: any) {
    // console.log('Did update executed')
  }

  componentWillUnmount () {
    // console.log('Will unmount executed')
  }

  submitUserData = () => {
    console.log('submit method', this.state)

    if (this.state && Object.keys(this.state).length > 0) {
      postrequestMethod(USER_SAVE, this.state)
        .then(res => {
            if(res){
                // this.getUserListSuccess();
                // this.setState({
                //     collectControlData:{}
                // })
                this.setState({checkState: true})
            }
        })
        .catch((error: any) => console.log(error))
    }
  }

//   getUserListSuccess = () =>{
//         getRequest(USER_LIST, '').then((response: any)=>{
//             console.log("response", response);
//             this.setState({alluserlist: response.data})
//         }).catch((error: any) =>{console.log(error)})
//   }

  dataHandler = (e: any) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label={'First Name'}
            variant='outlined'
            name={'firstname'}
            onChange={this.dataHandler}
          />
          <TextField
            id='outlined-basic-1'
            label={'Last Name'}
            variant='outlined'
            name={'lastname'}
            onChange={this.dataHandler}
          />
          <TextField
            id='outlined-basic-2'
            label={'User Name'}
            variant='outlined'
            name={'username'}
            onChange={this.dataHandler}
          />
          <TextField
            id='outlined-basic-3'
            label={'City'}
            variant='outlined'
            name={'city'}
            onChange={this.dataHandler}
          />
          <TextField
            id='outlined-basic-4'
            label={'State'}
            variant='outlined'
            name={'state'}
            onChange={this.dataHandler}
          />
          <TextField
            id='outlined-basic-5'
            label={'Zip Code'}
            variant='outlined'
            name={'zipCode'}
            onChange={this.dataHandler}
          />
          <Button variant='contained' onClick={this.submitUserData}>
            Submit
          </Button>
        </Box>
        <Box>
            <Typography component={'h2'} style={{textAlign: 'center'}}>User List</Typography>
            <ListRegisterUserComponent dataSubmitted={this.state.checkState} />
        </Box>
      </>
    )
  }
}

RegisterUserClassComponent.propTypes = {}

export default RegisterUserClassComponent
