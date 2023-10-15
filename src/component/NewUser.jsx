import {React,useState} from 'react'
import { FormGroup , FormControl ,styled ,TextField , Typography, Button} from '@mui/material'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'


import './Styles.css';
import {AddUsers} from '../service/Api';

const notify = () => toast.success('Your respone is Taken');

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

const NewUser = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState(defaultValue);

   const InputfromText =(e) =>{
      setuser({...user,[e.target.name]:e.target.value});
      console.log(user);
   }

   const SendDetails = async() => {
      notify();
      await AddUsers(user);
      navigate('/AllUsers')
   }

  return (
    <div>
       <Form>
        <Typography className='textLabel' variant='h4'>Add New User</Typography>
       
         <FormControl>
            <TextField onChange={(e)=>InputfromText(e)} id="standard-basic" label="Name" variant="standard" name='name'/>
         </FormControl>
         <FormControl>
            <TextField onChange={(e)=>InputfromText(e)} id="standard-basic" label="UserName" variant="standard" name='username'/>
         </FormControl>
         <FormControl>
            <TextField onChange={(e)=>InputfromText(e)} id="standard-basic" label="Email" variant="standard" name='email' />
         </FormControl>
         <FormControl>
            <TextField onChange={(e)=>InputfromText(e)} id="standard-basic" label="Phone" variant="standard" name='phone'/>
         </FormControl>
         <FormControl>
            <Button onClick={()=>SendDetails()} variant='contained' >Submit</Button>
            <Toaster/>
         </FormControl>
        
       </Form>
    </div>
  )
}

export default NewUser;