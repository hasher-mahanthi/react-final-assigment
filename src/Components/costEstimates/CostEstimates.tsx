import React from 'react';
import   './styles.css';

function CostEstimates(props:any) {

    let {selectedModel}=props;
    function getMemoryCost(){
        let memoryCost;
    if(selectedModel.memory==='32GB'){
          memoryCost=20;
    }
    else if(selectedModel.memory==='64GB'){
        memoryCost=40;
    }
    else{
        memoryCost=0;
    }
    return memoryCost;
}

  function getCoreCost(){
    let coreCost;
    if(selectedModel.core==='8Core'){
          coreCost=20;
    }
    else if(selectedModel.core==='16Core'){
        coreCost=40;
    }
    else{
        coreCost=0;
    }
    return coreCost;
  }
    return (
        <div className="cost-estimate-card">
            <h3>Cost Estimates</h3>
    {/* <div>{selectedModel.name}  ${selectedModel.cost}</div> */}
    {selectedModel.cost &&  <div className="d-flex justify-content-between">
    <div>CPUs-{selectedModel.name}s</div>
    <div>${selectedModel.cost}</div>
    </div>}
  {selectedModel.core &&  <div className="d-flex justify-content-between">
    <div>CPUs-{selectedModel.core}s</div>
    <div>${getCoreCost()}</div>
    </div>}
  {selectedModel.memory &&  <div className="d-flex justify-content-between">
    <div>Memory {selectedModel.memory}</div>
    <div>${getMemoryCost()}</div>
    </div>}
        </div>
    )
}

export default CostEstimates;