import React from 'react'
import './styles.css';
function ImageCard(props:any) {
 
    function setCard(){
        return null;
    }
            
    
        return(
            <div className="image-card-list">
            
            <div className="image-card">
                <div className="image-block"></div>
                <h2 className="image-title">{props.name}</h2>
                <p className="image-description">{props.description}</p>
                <div className="radio-btn">
                    <input type="radio"/>64 bit (x86)<br></br>
                    <input type="radio"/>64 bit (ARM)
                </div>
                <div className="select-button-position">
                 <button className="select-button" onClick={setCard}>Select</button>
                 </div>   
            </div>
                
        </div>
)

            
//  <div className="image-card-list">
                
//                 <div className=" image-card">
//                     <div className="image-block"></div>
//                    <h2 className="image-title" >{props.name}</h2>
//                     <p className="image-description">arun is a gd bot and having 3 pairs</p>
//                         <div className="image-buttons d-flex flex-column">
//                               <div className="d-flex flex-column">
//                                  <input className='image-radio-btn'type="radio"/>64 bit (x86)<br></br>
//                                   <input className='image-radio-btn'type="radio"/>64 bit (ARM)
//                                </div>
//                         <div >
//                         <button className="select-button" >Select</button>
//                         </div>  
//                         </div>
//                 </div>

//         </div> )
        
        // );
        
    
}

export default ImageCard;
