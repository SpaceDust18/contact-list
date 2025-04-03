import ContactList from "./contactList"
import App from "../App"

function ContactRow({contact}) {
    console.log(ContactRow)
    return (
<tr>
<td>{contact.name || "Unknown"}</td>
<td>{contact.email || "No email"}</td>
<td>{contact.phone || "No Phone Number"}</td>
</tr>
    )

} 


export default ContactRow