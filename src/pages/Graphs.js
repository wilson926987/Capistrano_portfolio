import React, { useState } from 'react'
import { Grid, Paper, Stack, Typography, colors } from '@mui/material'
import ReactApexChart from 'react-apexcharts'



function Graphs() {

    const [subjects, setSubjects] = useState([
        {'name' : "Capstone" , 'count' : 300},
        {'name' : "Database" , 'count' : 143},
        {'name' : "Data Structures" , 'count' : 497},
        {'name' : "Web Design" , 'count' : 238},
        {'name' : "Automata" , 'count' : 343 },

    ])
  return (
 
    <div>
        <Typography variant='h6' component={'div'}>
            Sample Data: number of classes per subject
        </Typography>
        <Typography variant='body1' component={'div'}>
            <ul>
                {subjects.map((item,key)=>(
                    <li key={key}>{item.name} : {item.count}</li>
                ))}      
            </ul>
        </Typography>

        <Stack direction={'row'} spacing  = {6}>
            <Paper sx={{padding : '12px' , width: '400px'}} elevation={3}>
                <Typography variant='h6' component={'div'}>Default Bar Chart</Typography>
                    <ReactApexChart
                        type='bar'
                        options={{
                            xaxis: {
                                categories: subjects.map(item=>item.name),
                              },
                        }}

                       
                        series={
                            [
                                {
                                  name: 'Series 1',
                                  data: subjects.map(item=>item.count),
                                },
                              ]
                        }               
                    />

              
            </Paper>

            <Paper sx={{padding : '12px' , width: '400px'}}>
                 <Typography variant='h6' component={'div'}>Default Bar Chart</Typography>
                <ReactApexChart
                        type='bar'
                        options={{
                            chart: {
                                type: 'bar',
                              },
                            xaxis: {
                                categories: subjects.map(item=>item.name),
                                
                              },
                            plotOptions:{
                                bar:{
                                    horizontal:true,
                                }
                                
                            },
                            dataLabels:{
                                enabled:false
                            }
                        }}

                       
                        series={
                            [
                                {
                                  name: 'Series 1',
                                  data: subjects.map(item=>item.count),
                                },
                              ]
                        }               
                    />

           


            </Paper>

            <Paper sx={{padding : '12px' , width: '400px'}}>
                 <Typography variant='h6' component={'div'}>Default Pie Chart</Typography>
                <ReactApexChart
                        type='pie'
                        options={{   
                            chart: {
                                type: 'pie',
                              },   
                            
                           labels: subjects.map(item =>(item.name)),
                           dataLabels:{
                            enabled: false
                           }
                        
                        }}

                       
                        series= {subjects.map(subject => subject.count)}  
                                      
                    />

           


            </Paper>

            <Paper sx={{padding : '12px' , width: '400px'}}>
                 <Typography variant='h6' component={'div'}>Default Donut Chart</Typography>
                <ReactApexChart
                        type='donut'
                        options={{   
                            chart: {
                                type: 'donut',
                              },   
                            
                           labels: subjects.map(item =>(item.name)),
                           dataLabels:{
                            enabled: false
                           }
                        
                        }}

                       
                        series= {subjects.map(subject => subject.count)}  
                                      
                    />

           


            </Paper>


        </Stack>


    </div>
  )
}

export default Graphs