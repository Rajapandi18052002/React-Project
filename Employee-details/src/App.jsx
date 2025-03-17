import * as React from 'react';
import './App.css'
import TextField from '@mui/material/TextField';
import { Paper,Button } from '@mui/material';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';





export default function FormPropsTextFields() {

  const [show, setShow] = useState(false); //modal call

  const handleClose = () => setShow(false); //modal call
  //-------------------storte data--------------------------------
const [user, setuser] = useState({
  Name :'',
  Email :'',
  PhoneNumber:'',
  joindate : '',
  Designation:'',
});

  const [store,setstore]=useState([]);
  
  function storevalue(){
setstore([...store,user])
console.log(store);
setuser({
  Name :'',
  Email :'',
  PhoneNumber:'',
  joindate : '',
  Designation:'',
})
}

  function handlechange(event){
    const {name,value}=event.target
    setuser({...user,[name]:value})
    console.log(user);
    
  }
//------------------delete----------------------
  function deleteuser(index){
    const deletedata = store.filter((_,i) => i!== index)
    setstore(deletedata)
  }

  //----------------------update-------------------------
const [edit, setedit] = useState(null)

function edituser(){
  
      if(edit!==null){
        const updateuser =[...store]
        updateuser[edit] = user
        setstore(updateuser)
        setShow(false)
   } 
    else{
        setuser([...store,user])
}

        setuser({
          Name :'',
          Email :'',
          PhoneNumber:'',
          joindate : '',
          Designation:'',
        })
        setedit(null)
}


function updateUser(userData,index){
setuser({
  Name :userData.Name,
  Email :userData.Email,
  PhoneNumber:userData.PhoneNumber,
  joindate : userData.joindate,
  Designation:userData.Designation,
})
setedit(index)
setShow(true);
}


  return (
    <>
 <Paper elevation={10} className='paper'>
    <h2>EMPLOYEE    DETAILS</h2>
     <div className='inputs' >
<TextField
          name='Name'
          id="employee-details"
          label="Name"
          type="text"
          autoComplete="Name"
          value={user.Name}
          onChange={handlechange}
        />
<TextField
          name='Email'
          id="employee-details"
          label="EmailID"
          type="Email"
          autoComplete="EmailId"
          value={user.Email}
          onChange={handlechange}
        />
<TextField
          name='PhoneNumber'
          id="employee-details"
          label="PhoneNumber"
          type="Phonenumber"
          autoComplete="Number"
          value={user.PhoneNumber}
          onChange={handlechange}
        />
<TextField
          name='joindate'
          id="employee-details"
          label="JoinedDate"
          type="calender"
          autoComplete="Date"
          value={user.joindate}
          onChange={handlechange}
        />
<TextField
          name='Designation'
          id="employee-details"
          label="Designation"
          type="type"
          autoComplete="text"
          value={user.Designation}
          onChange={handlechange}
        />
       <Button variant="contained" onClick={storevalue}>SUBMIT</Button>
      
   
   </div>
      </Paper>
      
      {store.map((dd,index)=>(
          <Paper elevation={10} className='details' style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title style={{color:'blueviolet', fontSize:'24px'}}><b>EMPLOYEE DETAILS</b> </Card.Title>
            <Card.Text>{dd.Name} </Card.Text>
            <Card.Text>{dd.Email} </Card.Text>
            <Card.Text>{dd.PhoneNumber} </Card.Text>
            <Card.Text>{dd.joindate} </Card.Text>
            <Card.Text>{dd.Designation} </Card.Text>
            <Button style={{backgroundColor:'green',color:'black',marginRight:'10px'}}onClick={()=>{updateUser(dd,index)}}>Edit</Button>
            <Button style={{backgroundColor:'red',color:'black'}} onClick={()=>{deleteuser(index)}}>delete</Button>
          </Card.Body>
        </Paper>
    
      ))}
      
    <Modal show={show} onHide={handleClose} className='modal' >
    <Paper elevation={10} className='modal'>
      
        <Modal.Header >
          <h2>UPDATE EMPLOYEE DETAILS</h2>
        </Modal.Header>
        <div className='modal2'>
        <TextField
          name='Name'
          id="employee-details"
          label="Name"
          type="text"
          autoComplete="Name"
          value={user.Name}
          onChange={handlechange}
        />
<TextField
          name='Email'
          id="employee-details"
          label="EmailID"
          type="Email"
          autoComplete="EmailId"
          value={user.Email}
          onChange={handlechange}
        />
<TextField
          name='PhoneNumber'
          id="employee-details"
          label="PhoneNumber"
          type="Phonenumber"
          autoComplete="Number"
          value={user.PhoneNumber}
          onChange={handlechange}
        />
<TextField
          name='joindate'
          id="employee-details"
          label="JoinedDate"
          type="calender"
          autoComplete="Date"
          value={user.joindate}
          onChange={handlechange}
        />
<TextField
          name='Designation'
          id="employee-details"
          label="Designation"
          type="type"
          autoComplete="text"
          value={user.Designation}
          onChange={handlechange}
        />
       <Button variant="contained" onClick={edituser} >SUBMIT</Button>
      
        </div>
  
        
        </Paper>
      </Modal>
      



      </>
    )};