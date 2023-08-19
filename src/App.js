import logo from './logo.svg';
import './App.css';
import ProfileCards from "./components/profilecards/Profilecards";

export default function App(){
  return(
    <div className="App">
       <div>
        <h1>Profile Cards Project</h1>
        <div style={{padding:"20px",flexWrap:"wrap"}}>
          <ProfileCards />
          </div>
       </div>
    </div>
  )
}