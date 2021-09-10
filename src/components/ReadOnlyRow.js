import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick,handleDeleteClick}) => {
    console.log(contact)
    return (
        
        <tr>
            <td>{contact.name}</td>
            <td>{contact.username}</td>
            <td>{contact.email}</td>
            <td>{contact.phonenumber}</td>
            <td>{contact.website}</td>
            <td><button type="button" style={{background:"blue"}} onClick={
                (event)=> handleEditClick(event,contact)
                }>Edit
                </button>
                &nbsp;
                <button type="button"style={{background:"red"}} onClick={()=>handleDeleteClick(contact.id)}>Delete
                </button>
            </td>
        </tr>

        
    )
}

export default ReadOnlyRow
