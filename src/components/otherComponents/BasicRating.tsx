import * as React from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { Table } from 'react-bootstrap'
import { USER_LIST } from '../../api/api'
import BasicButtonCommon from '../commoncomponent/BasicButtonCommon';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getRequest } from '../../api/apiUrls'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'first_name', headerName: 'First Name', width: 130 },
  { field: 'last_name', headerName: 'Last Name', width: 130 },
  { field: 'avatar', headerName: 'Avatar', width: 130 },
];
export default function BasicRating (props: any) {
  const [value, setValue] = React.useState<number | null>(2)
  const [userData, setUserData] = React.useState<any>([]);
  console.log('props', props)

  React.useEffect(() => {
    return () => {}
  }, [])

  const showUserlist = () => {
    console.log('APi url for user list=>', USER_LIST)
    fetch(USER_LIST).then((response: any) =>
    response.json()
    ).then((userlist)=> 
    {console.log("response using fetch", userlist);
    setUserData(userlist.data)})

    getRequest(USER_LIST, '').then((userlist:any)=>{
      console.log("response using axios", userlist);
      setUserData(userlist.data.data)
    }).catch((error:any) => console.log(error));

    // for server communication there are 4 methods => 
    /* GET => This method will return the data or fetch only data to communicate with REST api.

       POST => Post method will be used to send data from front to backend. And data will store in database

      DELETE => This method is use for delete a specific record from database. Or multiple records we can delete through this method.

      PUT => Put will use to update a specific or single record.

      UPDATE => UPDATE method will update single record as well as multiple records. 
    */

  }
  return (
    <>
      <Box
        sx={{
          '& > legend': { mt: 2 }
        }}
      >
        <Typography component='legend'>Basic Rating component</Typography>
        <Typography component='legend'>{props.starRating}</Typography>
        <Rating
          name='no-value'
          value={props.starRating ? props.starRating : 1}
        />
        <BasicButtonCommon btnClickHandler={showUserlist} />
      </Box>
      {/* <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      </div> */}
      <ul className='userlist'>
      {userData.map((data:any, index:any)=>
          <li key={index}><span>{data.id}</span>
          <span>{data.email}</span>
          <span>{data.first_name}</span>
          <span>{data.last_name}</span>
          <span><img src={data.avatar} alt="" /></span>
          </li>
          )
      }
      </ul>
      {/* <Table striped>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data:any, index:any)=>
          <tr key={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.website}</td>
          </tr>
          )
          }
        </tbody>
      </Table> */}
    </>
  )
}
