import React,{useState} from 'react'
import Select from 'react-select';
import './styles.css';
import ErrorModal from './ErrorModal';
function ChooseInstanceType(props:any) {

    const {getSelectedModel}=props;

    type option={
        value:string;
        label:string;
    }

    const [cpuCoreOptions,setCpuCoreOptions]=useState([] as any);
    const [memoryOptions,setMemoryOptions]=useState([] as any);
    const [selectedCoreOption,setSelectedCoreOption]=useState(({value:'',label:''} as option));
    const [selectedMemoryOption,setSelectedMemoryOption]=useState({value:'',label:''} as option);
    const [error,setError]=useState(false);

    const generalPurposeCoreOptions=['1Core', '2Core', '4Core'];
    const cpuOptimizedCoreOptions=['1Core', '8Core', '16Core'];//keep these constants in one file 
    const storageOptimizedCoreOptions=['1Core', '2Core', '8Core','16Core'];
    const networkOptimizedCoreOptions=['1Core', '2Core', '4Core','8Core','16Core']; 

    const generalPurposeMemoryOptions=['256MB', '512MB', '1GB', '2GB', '4GB'];
    const cpuOptimizedMemoryOptions=['16GB','32GB','64GB'];//keep these constants in one file 
    const storageOptimizedMemoryOptions=['16GB','32GB','64GB'];
    const networkOptimizedMemoryOptions=['256MB','512MB','1GB','2GB','4GB','16GB','32GB','64GB'];  

   function setGeneralPurposeCoreOptions(){
      setCpuCoreOptions(generalPurposeCoreOptions);//keep the functions in one file
      setMemoryOptions(generalPurposeMemoryOptions);
       if(selectedCoreOption.value&&generalPurposeCoreOptions.every((value)=>value!==selectedCoreOption.value)){
       
        alert(selectedCoreOption.value+'is not available for GeneralPurposeCoreOptions') 
          
       }
       if(selectedMemoryOption.value&&generalPurposeMemoryOptions.every((value)=>value!==selectedMemoryOption.value)){
       
        alert(selectedMemoryOption.value+'is not available for GeneralPurposeMemoryOptions') 
          
       }
   }
   function setCpuOptimizedCoreOptions(){
    setCpuCoreOptions(cpuOptimizedCoreOptions);
    setMemoryOptions(cpuOptimizedMemoryOptions);
    if(selectedCoreOption.value&&cpuOptimizedCoreOptions.every((value)=>value!==selectedCoreOption.value)){
        
        alert(selectedMemoryOption.value+'is not available for CpuOptimizedCoreOptions') 
     }
     if(selectedMemoryOption.value&&cpuOptimizedMemoryOptions.every((value)=>value!==selectedMemoryOption.value)){
       
        alert(selectedMemoryOption.value+'is not available for GeneralPurposeMemoryOptions') 
          
       }
   }
   function setStorageOptimizedCoreOptions(){
       setCpuCoreOptions(storageOptimizedCoreOptions);
       setMemoryOptions(storageOptimizedMemoryOptions);
       if(selectedCoreOption.value&&storageOptimizedCoreOptions.every((value)=>value!==selectedCoreOption.value)){
        
        alert(selectedCoreOption.value+'is not available for storage optimized CoreOptions') 
     }
     if(selectedMemoryOption.value&&storageOptimizedMemoryOptions.every((value)=>value!==selectedMemoryOption.value)){
       
        alert(selectedMemoryOption.value+'is not available for GeneralPurposeMemoryOptions') 
          
       }
   }
   function setNetworkOptimizedCoreOptions(){ //check the naming concention once
    setCpuCoreOptions(networkOptimizedCoreOptions);
    setMemoryOptions(networkOptimizedMemoryOptions);
    if(selectedCoreOption.value&&networkOptimizedCoreOptions.every((value)=>value!==selectedCoreOption.value)){
        
        alert(selectedCoreOption.value+'is not available for NetworkOptimizedCoreOptions') 
     }
     if(selectedMemoryOption.value&&networkOptimizedMemoryOptions.every((value)=>value!==selectedMemoryOption.value)){
       
        alert(selectedMemoryOption.value+'is not available for GeneralPurposeMemoryOptions') 
          
       }
   }
    function getCpuCoreSelectMenuOptions(){
        let selectMenuOptions:any=[];
        let options=[...cpuCoreOptions];
        options.map((option)=>{
          selectMenuOptions.push({value:option,label:option})
        });
        return selectMenuOptions;
    }
    function getMemorySelectMenuOptions(){
        let selectMenuOptions:any=[];
        let options=[...memoryOptions];
        options.map((option)=>{
          selectMenuOptions.push({value:option,label:option})
        });
        return selectMenuOptions;
    }

  const   handleCoreOptionChange = (option:any) => {
    setSelectedCoreOption(option);
    getSelectedModel({
        'core':option.value,
    })
      };
      const   handleMemoryOptioonChange = (option:any) => {
        setSelectedMemoryOption(option);
        getSelectedModel({
            'memory':option.value,
        })
          };

          //change the name of navbar
    return (
        <div>
            <section className="nav-bar d-flex ">  
            <button className="nav-button" onClick={setGeneralPurposeCoreOptions}>General Purpose</button>
            <button className="nav-button" onClick={setCpuOptimizedCoreOptions}>CPU Optimized</button>
            <button className="nav-button" onClick={setStorageOptimizedCoreOptions}>Storage Optimized</button>
            <button className="nav-button" onClick={setNetworkOptimizedCoreOptions}>Network Optimized</button>
            </section>
 
             <h6 className='select-menu-title'>Create Configuration</h6>
            <div className=" d-flex ">
            <Select className="cpu-core-select select" options={getCpuCoreSelectMenuOptions()} value={selectedCoreOption}
        onChange={handleCoreOptionChange}/>
            <Select className="memory-select select" options={getMemorySelectMenuOptions()}
            value={selectedMemoryOption}
            onChange={handleMemoryOptioonChange}
            />
       
            </div>
        </div>
    )
}

export default ChooseInstanceType;
