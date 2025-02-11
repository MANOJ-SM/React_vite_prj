import './App.css'
import Header from './components/Header'
import ParentComponent from './components/ParentComponent';
import Profile from './components/Profile';
import PackingList from './components/packingList';

// import {Header} from './components/Header'  //  for named export 



function App() {
  return (
    <>  
     {/* <Header/>
     <h1>hello</h1>
     <ParentComponent/>
     <Profile/> */}
     <PackingList/>
    </>
  )
}

export default  App;

