import React from 'react';

const ContactCard = (props) => {
   const { name, email} = props.contact;
   return (
      <div className="items">
        <div className="content">
          <div className="header">
            {name}
            <div>
              {email}
            </div>
          </div>
          <i className="trash alternate outline icon"> </i>
        </div>
      </div>
   );
};

export default ContactCard;