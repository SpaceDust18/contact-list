
function ContactRow({contact}) {
    console.log(ContactRow)
    return (
<tr>
<td>{contact.name}</td>
<td>{contact.email}</td>
<td>{contact.phone}</td>
</tr>
    )

} 


export default ContactRow