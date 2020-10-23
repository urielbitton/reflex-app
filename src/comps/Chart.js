import React, { useEffect, useContext } from 'react'
import Chart from 'chart.js';
import { StoreContext } from './StoreContext'

function Charts(props) { 


  useEffect(() => {
    let chart = document.getElementById('line-chart').getContext('2d')
    let gradientpurp = chart.createLinearGradient(0, 0, 0, 400)
    gradientpurp.addColorStop(0, 'rgba(255, 204, 51,0.2)')
    gradientpurp.addColorStop(1, 'rgba(255, 204, 51,0.03)')


    //line chart
    new Chart(document.getElementById("line-chart"), {
      type: 'line', 
      data: {
        labels: [0,1,2,3,4],
        datasets: [{ 
            data: [80,77,91,72, 78],
            label: "Grades",
            borderColor: "#ffcc33",
            fill: true,
            backgroundColor: gradientpurp
          },
        ]   
      },      
      options: { 
        responsive:true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'This Semester',
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: '#f1f1f1'
            }, 
            ticks: {
              fontColor: '#777'
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#f1f1f1'
            },
            ticks: {
              stepSize: 5,
              fontColor: '#777'
              //beginAtZero: true,
            } 
          }],
        }  
      } 
    })
    
 
  },[])

  return (
    <>
      <canvas id={props.type}></canvas>
    </> 
  )
}

export default Charts