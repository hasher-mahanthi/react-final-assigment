import React,{useState} from 'react';
import './App.css';
import ChooseImage from './Components/chooseImage/ChooseImage';


//for the style of grid refer the app which you have made
function App() {

  const[page,setPage]=useState(0);


  const setPage1 = () => {
    setPage(1);
  }
  const setPage2 = () => {
    setPage(2);
  }
  const setPage3 = () => {
    setPage(3);
  }
  const setPage4 = () => {
    setPage(4);
  }
  const setPage5 = () => {
    setPage(5);
  }
  
  function getPageName(){
    let pageName;
    switch(page){
    case 1:
      pageName = "Choose Image";
      break;
      case 2:
      pageName = "Choose Instance Type";
      break;
      case 3:
      pageName = "Choose Storage and Network";
      break;
      case 4:
      pageName = "Configure Security";
      break;
      case 5:
        pageName = "Review and Launch";
        break;
    default:
      pageName = "Choose Image";
  }
  return pageName;
}

  function getPageContent(){
    return <ChooseImage /> 

  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>HVC</h2>
      </header>
  <div className="content">
    <div className="main">
      <div className="content-header d-flex justify-content-between">
      <div>
       { getPageName()}
        </div>
        <div>
        <select placeholder="Region">
            <option value="us-east-1<">us-east-1</option>
            <option value="us-east-2">us-east-2</option>
            <option value="us-west-1">us-west-1</option>
            <option value="india">india</option>
          </select>
          </div>
      </div>
      <div>
      <nav className="navbar">
            <button className={page===1?"navButton":''} onClick={setPage1}>1.Choose Image</button>
            <button className={page===2?"navButton":''} onClick={setPage2}>2.Choose Instance Type</button>
            <button className={page===3?"navButton":''} onClick={setPage3}>3.Choose Storage and Network</button>
            <button className={page===4?"navButton":''} onClick={setPage4}>4.Configure Security</button>
            <button className={page===5?"navButton":''} onClick={setPage5}>5.Review and Launch</button>
          </nav>  
      </div>
      {getPageContent()}
      </div>
  <div className="aside"> 
      2 of 3 (wider)
    </div>
  </div>
  </div>
  );
}

export default App;
