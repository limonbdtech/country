
import React from 'react';

const Card = ({information,handle}) => {

    let {name,population,region,startOfWeek} = information

    let convert = {
        name:name.common,
        population:population,
        region:region,
        startOfWeek:startOfWeek
    }

  
    return (
        <div style={{border:"1px solid gray", width:"30%",margin:"0 auto",marginBottom:"2rem" }}>
            <img style={{width:"100%",height:"200px"}} src={information.flags.png} alt=""/>
            <h2>Name      :{convert.name}</h2>
            <h3>Population:{convert.population}</h3>
            <h3>Region    :{convert.region}</h3>
            <h3>StartWeek :{convert.startOfWeek}</h3>
              <button style={{padding:"5px 10px", color:"red" ,marginBottom:"10px"}} onClick={()=>handle(convert)} type="button">Remove</button>
            
        </div>
    );
}

export default Card;


