import { useEffect, useState } from 'react'
import ContactList from './components/contactList'
import './App.css'

function App() {
  const [contactList, setContactList] = useState(dummyContacts)
  console.log("Contacts:", contactList)

  useEffect(()=>{
    const getContacts = async () => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/todos/1')
      const data =await response.json()
      setContactList(data)
    }
    getContacts();
    console.log("first UE")
  }, [])
  return (
    <>
    <h1>Hi</h1>
      <ContactList contactList={contactList} setContactList={setContactList} />
    </>
  )
}iuyhoiuyo

export default App
