import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
import App from "../App";

//const dummyContacts = [
    //{ id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    //{ id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    //{ id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
//];

//4/2 left at tab 3 !!!!
function ContactList() {
    const [contacts, setContacts] = useState("")
    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
                const result = await response.json();
                setContacts(result);
             
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts();
    }, []);
}
return (
    <table>
        <thead>
            <tr>
                <th colSpan="3">Contact List</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
            </tr>
            {contacts.length > 0 ? (
            contacts.map((contact) => (
                <ContactRow key={contact.id} contact={contact} />
            ))
        ) : []}
        </tbody>
    </table>
)

export default ContactList
