import React from 'react'
import ChartBar from './ChartBar'
import "./chart.css"

function Chart(props) {
  return (
    <div className='chart'>
      {props.datapoints.map((datapoint)=>{
        return <ChartBar key={datapoint.label} value={datapoint.value} maxValue={null} label={datapoint.lable}/>
      })}
    </div>
  )
}

export default Chart