import './App.css';
import data from "./mock-data.json"
import React,{useState,Fragment} from "react"
import {nanoid} from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

const App=()=> {
  const[contacts,setContacts] = useState(data);
  const[addFormData,setAddFormData]=useState({
    name:'',
    username:'',
    email:'',
    phonenumber:'',
    website:''
  })
  const [editFormData,setEditFormData]=useState({
    name:'',
    username:'',
    email:'',
    phonenumber:'',
    website:''
  })

  const[editContactId,setEditContactId]=useState(null)

  const handleAddFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;
    const newFormData={ ...addFormData}
    console.log(newFormData)
    newFormData[fieldName]=fieldValue;

    setAddFormData(newFormData);

  }
  const handleEditFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;
    const newFormData={ ...editFormData}
    newFormData[fieldName]=fieldValue;

    setEditFormData(newFormData);

  }
  const handleAddFormSubmit=(event)=>{
    event.preventDefault();

    const newContact ={
      id: nanoid(),
      name:addFormData.name,
      username:addFormData.username,
      email:addFormData.email,
      phonenumber:addFormData.phonenumber,
      website:addFormData.website
    }

    const newContacts = [...contacts,newContact]
    setContacts(newContacts);
  }
  const handleEditFormSubmit=(event)=>{
    event.preventDefault();
    const editedContact ={
      id: editContactId,
      name:editFormData.name,
      username:editFormData.username,
      email:editFormData.email,
      phonenumber:editFormData.phonenumber,
      website:editFormData.website
    }
    const newContacts=[...contacts];

    const index =contacts.findIndex((contact)=>contact.id===editContactId)

    newContacts[index]= editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  }
  const handleEditClick=(event,contact)=>{
    event.preventDefault();
    setEditContactId(contact.id);

  const formValues={
    name:contact.name,
    username:contact.username,
    email:contact.email,
    phonenumber:contact.phonenumber,
    website:contact.website
  }
  setEditFormData(formValues);
}

const handleCancelClick=()=>{
  setEditContactId(null);
}

const handleDeleteClick=(contactId)=>{
  const newContacts=[...contacts];
  const index= contacts.findIndex((contact)=>contact.id===contactId);
  newContacts.splice(index,1);

  setContacts(newContacts);
}
  return (
    <div className= "app-container">
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
         <tr>
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>Phonenumber</td>
          <td>Website</td>
          <td>Actions</td>
         </tr>
         </thead>
         <tbody>
           {contacts.map((contact)=>(
             <Fragment>
               {editContactId ===contact.id ? (
               <EditableRow 
                 editFormData={editFormData} 
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}/>
               ):(
               <ReadOnlyRow 
                 contact={contact}
                 handleEditClick={handleEditClick}
                 handleDeleteClick={handleDeleteClick}
               />
               )}
             </Fragment>
           ))}
           
         </tbody>
      </table>
      </form>
      <div style={{background:"#82ccdd"}}>
      <form onSubmit={handleAddFormSubmit}>
        <div style={{textAlign:"center",alignContent:"center"}}>
        <h2>Add a new details</h2>
        <input
          type="text" 
          name="name"
          required="required"
          placeholder="Enter the Name"
          onChange={handleAddFormChange}
        />
        <br/>
        <br/>
        <input 
          type="text" 
          name="username"
          required="required"
          placeholder="Enter the Username"
          onChange={handleAddFormChange}
        />
        <br/>
        <br/>
        <input 
          type="email" 
          name="email"
          required="required"
          placeholder="Enter the Email"
          onChange={handleAddFormChange}
        />
        <br/>
        <br/>
        <input 
          type="text" 
          name="phonenumber"
          required="required"
          placeholder="Enter the Phonenumber"
          onChange={handleAddFormChange}
        />
        <br/>
        <br/>
        <input 
          type="text" 
          name="website"
          required="required"
          placeholder="Enter the Website"
          onChange={handleAddFormChange}
        />
        <br/>
        <br/>
        <button type="submit">Add</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;
