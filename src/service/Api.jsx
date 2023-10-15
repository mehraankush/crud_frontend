import axios from 'axios';

const URL = process.env.REACT_APP_NODE_URL;
console.log(URL)

export const AddUsers = async (data) => {
    try{
    return  await axios.post(`${URL}/add`, data);
    }catch(err){
        console.log('Erro in sending data',err);
    }
}

export const getAllUsers = async() =>{
  try{
    return await axios.get(`${URL}/allusers`);
  }catch(error){
     console.log("Error while getting all users",error);
  }
}

export const getUser = async(id) =>{
  try{
     return await axios.get(`${URL}/edit/${id}`);
  }catch(err){
    console.log("Erro in Finding users",err);
  }
}

export const EditUsers = async(user,id) =>{
    try{
      return await axios.post(`${URL}/edit/${id}`,user);
    }catch(err){
      console.log("Erro in Making api edit request",err);
    }
}

export const deleteUser = async (id) =>{
     try{
       return await axios.delete(`${URL}/delete/${id}`);
     }catch(err){
      console.log("Error in deleting the user",err);
     }
}