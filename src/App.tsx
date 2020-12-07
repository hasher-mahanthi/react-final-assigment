import React,{useState} from 'react';

//Components
import Select from 'react-select';
import ChooseImage from './Components/chooseImage/ChooseImage';
import ChooseInstanceType from './Components/chooseInstanceType/ChooseInstanceType';
import CostEstimates from './Components/costEstimates/CostEstimates';
import ChooseStorageAndNewtwork from './Components/chooseStorageandNetworkType/ChooseStorageAndNetworkType';

//Constants
import {REGIONS} from  './Constants';

//CSS imports
import './App.css';
import NavBar from './Components/navBar/NavBar';

//utils
import {getPageName} from './utilityFunctions/utils';

//for the style of grid refer the app which you have made
function App() {
  type option={
    value:string;
    label:string;
}
  const[page,setPage]=useState(0);
  //const[selctedLaptop,setSelectedLaptop]=useState('');
  const [selectedModel,setSelectedModel]=useState({} as any);
  const [selectedRegion,setSelectedRegion]=useState({value:'us-east-1',label:'us-east-1'} as option);

  //things to do

  //adding valid comments

  //destrcturing(this is first)

  //testing




  const setPage1 = () => {
    setPage(1);
  }
  const setPage2 = () => {
    if(selectedModel.name){
    setPage(2);
    }
    else{
      alert('you have not choosen any model yet')
    }
  }
  const setPage3 = () => {
    if(selectedModel.memory){
    setPage(3);
    }
    else{
      alert('you have not choosen choose instance type yet')
    }
  }
  const setPage4 = () => {
    setPage(4);
  }
  const setPage5 = () => {
    setPage(5);
  }

  const handleSelectedRegionChange=(option:any)=>{
    setSelectedRegion(option);
       console.log(selectedModel,selectedRegion,"selectedRegion","selectedModel");
       setSelectedRegion((state) => {
        if((state.value==='us-west-1'||state.value==='india')&&(selectedModel.id==4)){
          alert(`Windows is only available in us-east-1 and us-east-2 If you proceed you may lose data`);
        }
        
        return state;
      });
      
     
  }
  
//   function getPageName(){
//     let pageName;
//     switch(page){
//     case 1:
//       pageName = "Choose Image";
//       break;
//       case 2:
//       pageName = "Choose Instance Type";
//       break;
//       case 3:
//       pageName = "Choose Storage and Network";
//       break;
//       case 4:
//       pageName = "Configure Security";
//       break;
//       case 5:
//         pageName = "Review and Launch";
//         break;
//     default:
//       pageName = "Choose Image";
//   }
//   return pageName;
// }

function getSelectedModel(selectedItem:any){
  console.log(selectedItem,"selectedModel");
  if(Object.keys(selectedItem).length===0){
      setSelectedModel(selectedItem);
  }
  else{
    setSelectedModel({...selectedModel,...selectedItem})
  }
}

  function getPageContent(){
    if(page===1 ||page===0 )
    return <ChooseImage getSelectedModel={getSelectedModel} selectedRegion={selectedRegion}/> 
    else if(page===2)
    return  <ChooseInstanceType getSelectedModel={getSelectedModel}/>
    else if(page===3){
     return <ChooseStorageAndNewtwork />
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>HVC</h2>
      </header>
  <div className="content">
    <div className="main">
      <div className="content-header d-flex justify-content-between">
      <div className="page-title">
       { getPageName(page)}
        </div>
       
          <Select className='region-selector' options={REGIONS} 
          onChange={handleSelectedRegionChange}
          value={selectedRegion}
          />

      </div>
      <NavBar page={page} 
       setPage1={setPage1} setPage2={setPage2} setPage3={setPage3}
        setPage4={setPage4} setPage5={setPage5}/>
      {/* <div>
      <nav className="navbar"> 
            <button className={page===1?"navButton":''} onClick={setPage1}>1.Choose Image</button>
            <button className={page===2?"navButton":''} onClick={setPage2}>2.Choose Instance Type</button>
            <button className={page===3?"navButton":''} onClick={setPage3}>3.Choose Storage and Network</button>
            <button className={page===4?"navButton":''} onClick={setPage4}>4.Configure Security</button>
            <button className={page===5?"navButton":''} onClick={setPage5}>5.Review and Launch</button>
          </nav>  
      </div> */}
      {getPageContent()}
      </div>
  <div className="aside"> 
      <CostEstimates selectedModel={selectedModel}/>
    </div>
  </div>
  </div>
  );
}

export default App;
