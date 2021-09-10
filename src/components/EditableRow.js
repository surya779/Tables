import React from 'react'

const EditableRow=({editFormData,handleEditFormChange,handleCancelClick})=> {
    return (
       <tr style={{width:"20px"}}>
           <td>
               <input 
                 type="text"
                 style={{width:"100%"}}
                 required="required"
                 placeholder="Enter a name"
                 value={editFormData.name}
                 onChange={handleEditFormChange}
                 name="name">
                </input>
            </td>
           <td> 
               <input 
                 type="text"
                 required="required"
                 style={{width:"100%"}}
                 placeholder="Enter a username"
                 value={editFormData.username}
                 onChange={handleEditFormChange}
                 name="username">
               </input>
           </td>
           <td>
               <input 
                 type="email"
                 required="required"
                 style={{width:"100%"}}
                 placeholder="Enter a email"
                 value={editFormData.email}
                 onChange={handleEditFormChange}
                 name="email">
               </input>
           </td>
           <td>  
               <input 
                 type="text"
                 required="required"
                 style={{width:"100%"}}
                 placeholder="Enter a phonenumber"
                 value={editFormData.phonenumber}
                 onChange={handleEditFormChange}
                 name="phonenumber">
               </input>
            </td>
            <td> 
               <input 
                 type="text"
                 required="required"
                 style={{width:"100%"}}
                 placeholder="Enter a website"
                 value={editFormData.website}
                 onChange={handleEditFormChange}
                 name="website">
               </input> 
            </td>
          <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
          </td>
       </tr>
    )
}

export default EditableRow
