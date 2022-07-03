import React from 'react'

export default function AddContact() {
  return (
    <div>
      <div className="ui main">
         <h2>Add Contact </h2>
         <form className="ui form">
            <div className="field">
               <label>Name</label>

               <input type="text" name = "name" placeholder = "Name" />
            </div>

            <div className="field">
               <label>Email</label>

               <input type="text" name = "email" placeholder = "E-Mail" />
            </div>
            <button className="ui blue button">Add</button>
         </form>
      </div>
    </div>
  )
}
