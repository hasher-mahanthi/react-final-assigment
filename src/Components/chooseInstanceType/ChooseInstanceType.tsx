import React,{useState} from 'react'
import Select from 'react-select';
import './styles.css';
function ChooseInstanceType(props:any) {

    const [cpuCoreOptions,setCpuCoreOptions]=useState([] as any);
    const [memoryOptions,setMemoryOptions]=useState([] as any);

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
   }
   function setCpuOptimizedCoreOptions(){
    setCpuCoreOptions(cpuOptimizedCoreOptions);
    setMemoryOptions(cpuOptimizedMemoryOptions);
   }
   function setStorageOptimizedCoreOptions(){
       setCpuCoreOptions(storageOptimizedCoreOptions);
       setMemoryOptions(storageOptimizedMemoryOptions);
   }
   function setNetworkOptimizedCoreOptions(){ //check the naming concention once
    setCpuCoreOptions(networkOptimizedCoreOptions);
    setMemoryOptions(networkOptimizedMemoryOptions);
   }
    console.log(cpuCoreOptions);
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
    return (
        <div>
            <section className="nav-bar d-flex justify-content-between">
            <button className="nav-button" onClick={setGeneralPurposeCoreOptions}>General Purpose</button>
            <button className="nav-button" onClick={setCpuOptimizedCoreOptions}>CPU Optimized</button>
            <button className="nav-button" onClick={setStorageOptimizedCoreOptions}>Storage Optimized</button>
            <button className="nav-button" onClick={setNetworkOptimizedCoreOptions}>Network Optimized</button>
            </section>
 
             <h6 className='select-menu-title'>Create Configuration</h6>
            <div className=" d-flex ">
            <Select className="cpu-core-select select" options={getCpuCoreSelectMenuOptions()}/>
            <Select className="memory-select select" options={getMemorySelectMenuOptions()}/>
            </div>
        </div>
    )
}

export default ChooseInstanceType;
