import React, { useState } from 'react';
import { useEffect } from 'react';

import Card from './Card';

const Api = () => {
    let [country,setcountry] = useState([])
    let [data,setdata] = useState([])
  
    useEffect(() => {
        
        fetch('https://restcountries.com/v3.1/all')
        .then( res => res.json() )
        .then(data => setcountry(data))
        .catch(data=> console.log(data))
       
     
    }, []);
    
    let handle = (value)=>{
        setdata([...data,value])
    }

     let sum = data.reduce((pre,post)=> pre +post. population ,0)
     console.log(sum)
    
    
    return (
        <div style={{textAlign:"center"}}>
            <h2>{country.length}</h2>
            <h2>add population: {sum}</h2>
            <ul>

                { data.map(pd=><li>{pd.name}</li>)}
            </ul>
            { country.map((item,index) => <Card key={index} information={item} handle={handle}/>)}
        </div>
    );
}

export default Api;
