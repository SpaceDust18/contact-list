import { useEffect, useState } from 'react'
import ContactList from './components/contactList'
import ContactRow from './components/ContactRow'
import './App.css'

function App() {

  //const [contacts, setContacts] = useState(dummyContacts)
  //console.log("Contacts:", contacts)
  //useEffect(()=>{
    //const getContacts = async () => {
      //const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/todos/1')
      //const data =await response.json()
      //setContacts(data)
    //}
    //getContacts();
    //console.log("first UE")
  //}, [])
  return (
    <>
      <ContactList/>
    </>
  )
}

export default App
