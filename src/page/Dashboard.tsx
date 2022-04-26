import { useEffect, useState } from "react";
import { Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import './Dashboard.css'

//declare props  for response data
type properties={
    id:number,
    deviceType:string,
    name:string,
    serialNumber:string,
    status:string,
    connectionStatus:string,
}
//declare props for calculate percentage and number device
type deviceCount={
  numberOfDevice:number,
  percentagefailedDevice:number,
  percentageOnlineDevice:number
}

//create functional component
const Dashboards=()=>{

  //declare usestate for first json response data
const[result,setData]=useState<properties[]>([])

//declare usestate for final state for groupdata 
const[finalresult,finalResultData]=useState<properties[]>([])

//declare usestate for unique set of device type
const[deviceType,setDeviceType]=useState<string[]>([]);

//declare usestate for  calcuate the numberof device percentage of online and failed device
const[deviceCount,setDeviceCount]=useState<deviceCount>()


const Token="ade74927-f3df-4718-8f85-d10bab443b1c";

//declare useEffect() for api calling
useEffect(()=>{

  fetch(" https://vstechtest.azurewebsites.net/api/GetData",{
        method:"GET",
        headers:{"Authorization":`Bearer ${Token}`}
      }).then(res=>res.json())
      .then(res=>setData(res))
     

//getting unique dviceTYpe like to convert to set then to arrray 
let uniquedeviceType=result.map((data)=>data.deviceType)
      setDeviceType(Array.from(new Set(uniquedeviceType)))
}

,[result])

//create Evenet handle methode for render data to grid component
function handleEvent(event:any){

let eventValue=event.target.value;

//grouped data  like particular device type data and set value into finalResultData
let resultData = result.filter(function(numbe) {
  return numbe.deviceType ===eventValue;

});
finalResultData(resultData);

//calulate number of device based on device type and percentage of faileddevice and online device
let number_of_device=resultData.length;
let failedDevice=resultData.filter((data)=>data.status==='Failed').length
let onlineDevice=resultData.filter((data)=>data.connectionStatus==='Online').length
let percentage_failed_device=Math.round((failedDevice/number_of_device)*100);
let percentage_online_device=Math.round((onlineDevice/number_of_device)*100);
setDeviceCount({numberOfDevice:number_of_device,percentagefailedDevice:percentage_failed_device,percentageOnlineDevice:percentage_online_device})


}

return(
<>
  <div className="headerPanel">
  <InputLabel id="demo-simple-select-label" >Device Type</InputLabel>
<Select labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={deviceType}
        onChange={handleEvent} >
         {deviceType.map((data)=>{return  <MenuItem value={data}>{data}</MenuItem>})}
         
</Select>

</div>
  <div>
         <span>Number Of Devices:{deviceCount?deviceCount.numberOfDevice:0} </span><br/>
         <span>  Percentage of devices online :{deviceCount?deviceCount.percentagefailedDevice:0}</span><br/>
         <span>Percentage of devices failed :{deviceCount?deviceCount.percentageOnlineDevice:0}</span>
  </div>
    
<div className="main">
<div className="grid">
    {finalresult.map((data)=>{return <Grid container item spacing={3}>
    <div className="container">
      <label>SerialNumber</label>:<span>{data.serialNumber}</span><br/>
     <label>Name</label>:<span>{data.name}</span><br/>
     <label>Status</label>:<span>{data.status}</span><br/>
     <label>ConnectionStatus</label> <span>{data.connectionStatus}</span>
    </div>
  </Grid>
    })}
   </div>
</div>

      </>)
}

export default Dashboards