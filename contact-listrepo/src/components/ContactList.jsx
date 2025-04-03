import React, { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";

function ContactList({setSelectedContactId}) {
    const [contacts, setContacts] = useState([])   

    useEffect(()=>{
        async function fetchContacts() {
            try {
                const response = await fetch(
                    "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
                  );
                  const result = await response.json();
                  setContacts(result);
              } catch (error) {
                console.error(error);
              }
            }
            fetchContacts()
    },[]) 
return (
    <table className="contact-list">
        <thead>
            <tr>
                <th colSpan="3">Contact List</th>
            </tr>
        </thead>
        <tbody>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}
            />
          ))
        ) : (
          <tr>
            <td colSpan="3">No contacts available</td>
          </tr>
        )}
        </tbody>
    </table>
        )
    }
export default ContactList
