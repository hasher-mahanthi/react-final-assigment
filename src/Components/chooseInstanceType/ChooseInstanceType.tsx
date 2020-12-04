import React,{useState} from 'react'
import Select from 'react-select';
function ChooseInstanceType(props:any) {

    const [cpuCoreOptions,setCpuCoreOptions]=useState([] as any);
    const generalPurposeOptions=['256MB', '512MB', '1GB', '2GB', '4GB'];
    const cpuOptimizedOptions=['16GB','32GB','64GB'];
    const storageOptimizedOptions=['16GB','32GB','64GB'];
    const networkOptimizedOptions=['256MB','512MB','1GB','2GB','4GB','16GB','32GB','64GB'];  

   function setGeneralPurpose(){
      setCpuCoreOptions(generalPurposeOptions);
   }
   function setCpuOptimized(){
    setCpuCoreOptions(cpuOptimizedOptions);
   }
   function setStorageOptimized(){
       setCpuCoreOptions(storageOptimizedOptions);
   }
   function setNetworkOptimized(){ //check the naming concention once
    setCpuCoreOptions(networkOptimizedOptions);
   }
    console.log(cpuCoreOptions);
    function getSelectMenuOptions(){
        let selectMenuOptions:any=[];
        let options=[...cpuCoreOptions];
        options.map((option)=>{
          selectMenuOptions.push({value:option,label:option})
        });
        return selectMenuOptions;
    }
    return (
        <div>
            <section className="nav-bar d-flex">
            <button className="nav-button" onClick={setGeneralPurpose}>General Purpose</button>
            <button className="nav-button" onClick={setCpuOptimized}>CPU Optimized</button>
            <button className="nav-button" onClick={setStorageOptimized}>Storage Optimized</button>
            <button className="nav-button" onClick={setNetworkOptimized}>Network Optimized</button>
            </section>
            <Select options={getSelectMenuOptions()}/>
            {/* <Select options={memoryOptions}/> */}
        </div>
    )
}

export default ChooseInstanceType
