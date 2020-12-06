import React,{useState} from 'react'
import './styles.css';
function ImageCard(props:any) {
   const [selectedOption,setSelectedOption]=useState('');
 
    function setCard(){
        let selectedModel={...props,'type':selectedOption}
        props.getSelectedModel(selectedModel);
        console.log(props);
        return null;
    }
    function onSelectingRadioOption(e:any){
         console.log(e.target.value);
          setSelectedOption(e.target.value);
    }
return(
    <div className="image-card-list">
    
    <div className="image-card row ">
        <div className="image-block col-1"></div>
        <div className='image-content col-9'>
        <div className="image-name">{props.name}</div>
        <p >{props.description}</p>
        </div>
        <div className='col-2'>
        <div onChange={onSelectingRadioOption}>
            <input type="radio" value='64-bit-(x86)' checked={selectedOption==='64-bit-(x86)'}/>64 bit (x86)<br></br>
         {(props.id)!=='4'? <><input type="radio" value='64-bit-(ARM)' checked={selectedOption==='64-bit-(ARM)'}/>64 bit (ARM)</> :null}
        </div>
        <div >
         <button  onClick={setCard}>Select</button>
         </div> 
         </div>  
    </div>
        
</div>
)
            

        
    
}

export default ImageCard;
