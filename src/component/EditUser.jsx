import {React,useState,useEffect} from 'react'
import { FormGroup , FormControl ,styled ,TextField , Typography, Button} from '@mui/material'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate , useParams} from 'react-router-dom';


import './Styles.css';
import {EditUsers, getUser} from '../service/Api';

const notify = () => toast.success('User is Updated');

const Form = styled(FormGroup)`
  width: 40%;
  margin:2rem auto auto auto;
  & > div{
     margin-top:1.2rem;
  }
`


const defaultValue = {
  name:'',
  username:'',
  email : '',
  phone : '',
} 

const EditUser = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState(defaultValue);
//   const [userById, setUserById] = useState([]);
  const { id } = useParams();

  useEffect(() => {
   loadTheUser();
  }, [])

  const loadTheUser = async () =>{
      const res = await getUser(id);
      setuser(res.data.user);
      // console.log(res.data.user);
  }
  

   const InputfromText =(e) =>{
      setuser({...user,[e.target.name]:e.target.value});
      console.log(user);
   }

   const SendDetails = async() => {
      notify();
      await EditUsers(user,id);
      navigate('/AllUsers')
   }

  return (
    <div>
       <Form>
        <Typography className='textLabel' variant='h4'>Edit Profile</Typography>
       
         <FormControl>
            <TextField onChange={(e)=>InputfromText(e)} id="standard-basic" value={user.name}  label="name" variant="standard" name='name'/>
         </FormControl>
         <FormControl>
            <TextField onChange={(e)=>InputfromText(e)} id="standard-basic" value={user.username}  label="username" variant="standard" name='username'/>
         </FormControl>
         <FormControl>
            <TextField onChange={(e)=>InputfromText(e)} id="standard-basic" value={user.email}  label="email" variant="standard" name='email' />
         </FormControl>
         <FormControl>
            <TextField onChange={(e)=>InputfromText(e)} id="standard-basic" value={user.phone} label="phone" variant="standard" name='phone'/>
         </FormControl>
         <FormControl>
            <Button onClick={()=>SendDetails()} variant='contained' >Update</Button>
            <Toaster/>
         </FormControl>

       </Form>
    </div>
  )
}

export default EditUser;