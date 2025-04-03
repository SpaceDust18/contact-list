import React, { useState, useEffect} from "react"

function selectedContact({ selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState()
    useEffect(() => {
        async function fetchContact() {
          try {
            const response = await fetch(
              `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            setContact(result);
        
          } catch (error) {
            console.error("Error fetching contact:", error);
          }
        }
    
        fetchContact();
      }, [selectedContactId]);
    
      if (!contact) {
        return <p>Loading contact...</p>;
      }
    
      return (
        <div className="selected-contact">
          <h2>{contact.name}</h2>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Website:</strong> {contact.website}</p>
          <p><strong>Company:</strong> {contact.company.name}</p>
          <p><strong>Address:</strong> {contact.address.street}, {contact.address.city}</p>
          
          <button className="back-button" onClick={() => setSelectedContactId(null)}>Back to Contacts</button>
        </div>
      );
    }

export default selectedContact