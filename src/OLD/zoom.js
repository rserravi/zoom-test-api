import React, { useEffect, useState } from 'react';
import ZoomVideo from '@zoom/videosdk';
import { DecodeJwt } from '../jwtUtils';
import { Avatar, Button } from '@mui/material';

export const ZoomApi = () =>{
    const [error, setError] = useState("");
    const [avatar, setAvatar]= useState("");
    //const tokenJWT ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IlpjYmZNOWRMUmxTcXZvQXE3N2g2S0EiLCJleHAiOjE2NzU2ODY5MDIsImlhdCI6MTY3NTY4MTUwM30.VHdmVDv-dI8We2XZk-7_U5l_2FQGZzzS-2aJJZk3nbo";
    const sdkKey ="38ACe9ICOzEJ4Qb5xoQMI0CooU32uqERubxS"
    const sdkSecret="tkKgeAD5vmOknNMRPRkznHAmODfIv01K8ghn"
    const userName= "rserravi@gmail.com";
    const password= "Wrench-570";
    var client = ZoomVideo.createClient();
    var decodedJWT
    
    var stream;


    const initSDK = ()=>{
        client.init('en-US', 'CDN')
        
    }

    const startAudio = (event) =>{

    }

    const joinSession = ()=> {
        client.join("NUEVA SESION", decodedJWT, userName, password).then((result)=>{
            stream = client.getMediaStream()
            setAvatar(result.avatar);
            console.log(client.getSessionInfo());
        }).catch((error)=>{
            setError(error);
            console.log(error);
        })
    }
   
    useEffect (()=>{
        
        decodedJWT = DecodeJwt(sdkKey, sdkSecret, "NUEVA SESION",1,"NUEVA SESION",userName );
        initSDK()
        joinSession();
    },[])
    
    

    return(
        <>
        <Avatar src={avatar}>
            
        </Avatar>
            {error?<>{error.type}</>:""}<br />
            {error?<>{error.reason}</>:""}
       
            <Button variant='contained' onClick={startAudio}>
                Start Audio
            </Button>
        </>
    )
}