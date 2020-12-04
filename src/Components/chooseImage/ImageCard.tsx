import React,{useState} from 'react'
import './styles.css';
function ImageCard(props:any) {
   const [selectedOption,setSelectedOption]=useState('');
 
    function setCard(){
        console.log(props);
        return null;
    }
    function onSelectingRadioOption(e:any){
         console.log(e.target.value);
          setSelectedOption(e.target.value);
    }
            
    
//         return(
//             <div className="image-card-list">
            
//             <div className="image-card">
//                 <div className="image-block"></div>
//                 <h2 className="image-title">{props.name}</h2>
//                 <p className="image-description">{props.description}</p>
//                 <div className="radio-btn">
//                     <input type="radio"/>64 bit (x86)<br></br>
//                     <input type="radio"/>64 bit (ARM)
//                 </div>
//                 <div className="select-button-position">
//                  <button className="select-button" onClick={setCard}>Select</button>
//                  </div>   
//             </div>
                
//         </div>
// )
return(
    <div className="image-card-list">
    
    <div className="image-card row ">
        <div className="image-block col-2"></div>
        <div className='col-8'>
        <h2 >{props.name}</h2>
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
