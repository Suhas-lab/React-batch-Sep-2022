import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { getRequest } from '../../api/apiUrls'
import { USER_LIST } from '../../api/api'
const columns: GridColDef[] = [
  { field: 'firstname', headerName: 'First Name', width: 120 },
  { field: 'lastname', headerName: 'Last Name', width: 120 },
  { field: 'username', headerName: 'Email Address', width: 170 },
  { field: 'city', headerName: 'City', width: 70 },
  { field: 'state', headerName: 'State', width: 70 },
  { field: 'zipCode', headerName: 'Zip Code', width: 70 },
]

class ListRegisterUserComponent extends Component<any, any> {
  static propTypes: {}
  constructor (props: any) {
    super(props)
    this.state = {
      userData: []
    }
  }

  componentWillMount () {console.log("Will mount")}

  componentDidMount () {
    console.log("Did mount")
    getRequest(USER_LIST, '').then((response: any) =>
        {
             this.setState({
                userData: response.data
            })
        }
    )
  }

  componentWillReceiveProps (nextProps: any) {
    console.log("Receive props")
    getRequest(USER_LIST, '').then((response: any) =>
    {
         this.setState({
            userData: response.data
        })
    }
)
}

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  componentWillUpdate(nextProps: any, nextState: any) {
    console.log("Will update")
    
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("Did update")
  }

  componentWillUnmount () {
    console.log("Will unmount")
  }

  render () {
    const {userData} = this.state;
    return (
      <>
        {userData && userData.length > 0 ? (
          <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={userData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            getRowId={row => row._id}
          />
        </div>
        ) : (
            <h2>No data available</h2>
        )}
      </>
    )
  }
}

ListRegisterUserComponent.propTypes = {}

export default ListRegisterUserComponent
