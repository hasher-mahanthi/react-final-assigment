import React from 'react';
import ImageCard from './ImageCard'
import './styles.css';
function ChooseImage(props:any) {
    const imageList =
        [
          {
            id: '1',
            name: 'Linux 2 Image',
            description: "Linux 2 comes with 5 years of support.It provides Linux Kernel 4.14 tuned for optimal performance",
            type: [{name:'64-bit (x86)',selected:true,},{name:'64-bit (ARM)',selected:true,}],
            cost: 243.61,
          },
          {
            id: '2',
            name: 'Ubuntu Server 18.04 LTS',
            description: "Linux 2 comes with 5 years of support.It provides Linux Kernel 4.14 tuned for optimal performance",
            type: [{name:'64-bit (x86)',selected:true,},{name:'64-bit (ARM)',selected:true,}],
            cost: 243.61,
          },
          {
            id: '3',
            name: 'Red Hat Enterprise Linux 8',
            description: "Linux 2 comes with 5 years of support.It provides Linux Kernel 4.14 tuned for optimal performance",
            type: [{name:'64-bit (x86)',selected:true,},{name:'64-bit (ARM)',selected:true,}],
            cost: 300,
          },
          {
            id: '4',
            name: 'Microsoft Windows Server 2019 Base',
            description: "Linux 2 comes with 5 years of support.It provides Linux Kernel 4.14 tuned for optimal performance",
            type: [{name:'64-bit (x86)',selected:true,},],
            cost: 338.77,
          },
          {
            id: '5',
            name: 'SUSE Linux Enterprise Server',
            description: "Linux 2 comes with 5 years of support.It provides Linux Kernel 4.14 tuned for optimal performance",
            type: [{name:'64-bit (x86)',selected:true,},{name:'64-bit (ARM)',selected:true,}],
            cost: 200.22,
          },
        ];
        
        
       const imagecards=  imageList.map((item:any,index:any) =>(
                <ImageCard id={item.id} name={item.name} cost={item.cost} description={item.description} type={item.type} 
               />
            ));
            return <div>{imagecards}</div>      
}

export default ChooseImage;
