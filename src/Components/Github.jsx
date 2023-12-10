import React, { useEffect, useState } from 'react';

const Github = () => {
    const [data,setData]=useState([]);
        useEffect(()=>{
            fetch("https://api.github.com/users/dmamun")
            .then(res=>res.json())
            .then(data=>setData(data))

        },[])
    
    return (
        <div>
            <h1 className='text-3xl bg-slate-600 text-center mb-4'>Github followers:{data.followers}</h1>
            <img src={data.avatar_url} alt="" />
            
        </div>
    );
};

export default Github;