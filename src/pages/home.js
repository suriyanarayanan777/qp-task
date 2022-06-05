import React from 'react'
import products from './datas.json'
import './home.css'
import  { useState } from 'react';
import DatePicker from 'react-date-picker';


const Home = () => {
  var dateFrom = "02/06/2022";
  var dateTo = "02/09/2022";
  var order_date = "02/07/2022";
  
  const [selectedData, setselectedData] = useState(null);
  const [flag, setflag] = useState(false)

console.log(selectedData)
var from = Date.parse(dateFrom);
  var to   = Date.parse(dateTo);
  var check = Date.parse( order_date);

  function offerCheck()
  {
  if((check <= to && check >= from))      
     setflag(true);
  }

  return (
    <div className='home'>
   {
     products && products.map(data=>{
       return(
         <div key={data.id}>
         <h2>{data.product_name}</h2>
         <h3>Fixed price: {data.product_price}</h3>
         <img src={data.product_url} height="100px" width="200px"/>
         <button onClick={offerCheck}>Buy now</button>
         {
           flag && <h4>Discounted price :{data.product_price*.1}</h4>
         }
         </div>
         
       )
     })
   }
 <DatePicker selected={selectedData} onChange={date=>setselectedData(date)} dateformat='dd/mm/yyyy'/>
    </div>
  )
}

export default Home
