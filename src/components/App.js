import './App.css';
import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';

function App() {

  const contacts = [

    {
      id : "1",
      name : "Abhishek",
      email : "contactabhishek249@gmail.com"
    },
    {
      id : "2",
      name : "Nikhil",
      email : "nikhil80908@gmail.com"
    }
  ];

  return (
    <div className="ui container">

       <Header/>
       <AddContact/>
       <ContactList contacts = {contacts}/>

    </div>
  );
}

export default App;
