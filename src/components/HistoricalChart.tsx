import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, Tooltip, Legend,CategoryScale,LinearScale,PointElement,Filler } from "chart.js";
ChartJS.register(LineElement, Tooltip, Legend,CategoryScale,LinearScale,PointElement,Filler);

type chartDaysType = {
    label : string
    value : number
}[]

type dataType = {
  prices : number[][]  
}

function HistoricalChart(){
    const {id} = useParams()
    const [data,setData] = useState<dataType>()
    const [days, setDays] = useState(1)

    const chartDays : chartDaysType = [
        {
          label: "24 Hours",
          value: 1,
        },
        {
          label: "30 Days",
          value: 30,
        },
        {
          label: "3 Months",
          value: 90,
        },
        {
          label: "1 Year",
          value: 365,
        },
      ];
    const getData = async() =>{    
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}`)
        console.log(response.data)
        setData(response.data)
    }
    useEffect(()=>{
         getData()
    },[days])
    
    return(
        <React.Fragment>
             <main className="chartContainer">
               <Line data={{
                labels:data?.prices?.map((coin) => {
                    let date = new Date(coin[0]);
                    let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                    // return days === 1 ? time : date.toLocaleDateString();
                    return date.toLocaleDateString()
                  }),
                  datasets: [
                    {
                      data: data?.prices?.map((coin) => coin[1]),
                      label: `Price ( Past ${days} Days ) in INR`,
                      borderColor: "#EEBC1D",
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 2,
                    },
                  },
               }}/>
               {
                chartDays.map((day) => (
                    <button className='btn' key={day.value} onClick={() =>setDays(day.value)}>
                      {day.label}
                    </button>
                  ))
               }
            </main> 
        </React.Fragment>
    )
    
    }
    
    export default HistoricalChart
    