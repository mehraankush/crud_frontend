import React,{useEffect, useState } from 'react'
import { TableHead, TableBody, TableCell, TableRow, styled,Button} from '@mui/material';
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { getAllUsers,deleteUser } from '../service/Api';
const notify = () => toast.success('User Deleted Succesfully');

const AllUsers = () => {
    const [users, setUsers] = useState([]);
  // caliing Allusers api to display all user sfron mongodb 
  useEffect(() => {
    getUsers();
  }, [])
  
  const TRow = styled(TableRow)`
   background:#000000;
   & > th{
      color:#ffff;
      font-size:1.2rem;
   }

` 
let count = 1;

  const getUsers = async () => {
    let res =  await getAllUsers();
    setUsers(res?.data?.alluser);
    // console.log(res.data.alluser);
  }
 const DeleteUser = async (id) => {
   await deleteUser(id);
   getUsers();
   notify();
 }
  return (
    <div>
      <styleTable>

        <TableHead>
            <TRow>
              <TableCell>I'D</TableCell>
              <TableCell >Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Update</TableCell>
            </TRow>
          </TableHead>
          
          <TableBody>

            {   
                users?.map(user =>(
                  <TableRow key={user._id}>
                    <TableCell>{count++}</TableCell>
                       <TableCell >{user.name}</TableCell>
                       <TableCell>{user.username}</TableCell>
                       <TableCell>{user.email}</TableCell>
                       <TableCell>{user.phone}</TableCell>
                    <TableCell>

                      <Button variant='contained' style={{ marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                      <Button variant='contained' onClick={()=>DeleteUser(user._id)} >Delete</Button>
                      <Toaster/>

                    </TableCell>
                    
                </TableRow>
                ))
            }
          </TableBody>

      </styleTable>
     
    </div>
  )
}

export default AllUsers