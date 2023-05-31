import React, { useState } from 'react'
import { Typography, Grid, Paper, IconButton , Button, Stack , Divider, Box,  List, ListItem, ListItemText, ListItemIcon, ListItemButton, Icon, } from '@mui/material'
import ReactApexChart from 'react-apexcharts'
import {MdDashboard ,MdFolderCopy ,MdError} from 'react-icons/md'
import {FaUser ,FaCalendarAlt ,FaStoreAlt} from 'react-icons/fa'
import {BsTable ,BsTwitter} from 'react-icons/bs'
import {AiOutlineForm ,AiFillQuestionCircle ,AiFillWarning}from 'react-icons/ai'
function Dashboard1() {

  const [sales, setSales] = useState([
    {"month" :"January" , 'value' : 1000 },
    {"month" :"February" , 'value' : 475 },
    {"month" :"March" , 'value' : 346 },
    {"month" :"April" , 'value' : 484 }
  ])
  return (

    <Stack direction={'row'} >
      <Paper elevation={6} sx={{width: "280px" , height: "100vh"}} className='relative'> 
     

      <Stack padding={1} spacing={1} >
          <Box height={'7vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>     
            <Typography variant='h6' component={'div'} textAlign={'center'}>Dashboard 1</Typography>   
          </Box>
          <Divider/>
          <Button size='large' startIcon={<MdDashboard/>} fullWidth variant='contained' color='primary' className='drawerbutton1' >
                dashboard
          </Button>
          <Button size='large' startIcon={<FaUser/>} fullWidth variant='text' color='primary' className='drawerbutton1' >
                user profile
          </Button>
          <Button size='large' startIcon={<BsTable/>} fullWidth variant='text' color='primary' className='drawerbutton1' >
                tables
          </Button>
          <Button size='large' startIcon={<AiOutlineForm/>} fullWidth variant='text' color='primary' className='drawerbutton1' >
                forms
          </Button>

      </Stack>

      <Box  className='drawerfooter'>
        <IconButton color="primary">
            <AiFillQuestionCircle/>
        </IconButton>
        <Typography color={'primary'}>INFO</Typography>
      </Box>



     
    

      </Paper>

      <Box width={'100%'} paddingTop={10} className='dimbackground'>
        <Grid container padding={2} spacing={3}>
            <Grid item xs={12} md={3} sx={{minWidth: '400px'}}>
              <Paper elevation={3} sx={{padding: "12px" , minHeight: '80px'}} className='relative' >
                <Paper className='dbpanelicon1' elevation={2} sx={{backgroundColor:'warning.light'}}>
                   <MdFolderCopy/>
                </Paper>

                <Stack alignItems={'flex-end'}>
                  <Typography variant='body1' component={'div'}>Used Space</Typography>
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                   <Typography variant='h5'  component={'div'}>47/50</Typography>
                   <Typography variant='body1' component={'div'}>GB</Typography>
                  </Stack>
                 
                  

                </Stack>
                <Divider className='margintop18'/>
                <Typography variant='body2' component={'div'} > <AiFillWarning/> get more space</Typography>




              </Paper>

            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{padding: "12px" , minHeight: '80px'}} className='relative' >
                <Paper className='dbpanelicon1' elevation={2} sx={{backgroundColor:'success.light'}}>
                   <FaStoreAlt/>
                </Paper>

                <Stack alignItems={'flex-end'}>
                  <Typography variant='body1' component={'div'}>Revenue</Typography>
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                   <Typography variant='h5'  component={'div'}>$34,000</Typography>
                   <Typography variant='body1' component={'div'}></Typography>
                  </Stack>

                </Stack>
                <Divider className='margintop18'/>
                <Typography variant='body2' component={'div'} > <FaCalendarAlt/> last 24 hours</Typography>




              </Paper>

            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{padding: "12px" , minHeight: '80px'}} className='relative' >
                <Paper className='dbpanelicon1' elevation={2} sx={{backgroundColor:'error.light'}}>
                   <MdError/>
                </Paper>

                <Stack alignItems={'flex-end'}>
                  <Typography variant='body1' component={'div'}>Fixed Issues</Typography>
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                   <Typography variant='h5'  component={'div'}>47/50</Typography>
                   <Typography variant='body1' component={'div'}></Typography>
                  </Stack>
                 
                  

                </Stack>
                <Divider className='margintop18'/>
                <Typography variant='body2' component={'div'} > Tracked from github</Typography>




              </Paper>

            </Grid>

            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{padding: "12px" , minHeight: '80px'}} className='relative' >
                <Paper className='dbpanelicon1' elevation={2} sx={{backgroundColor:'primary.light'}}>
                   <BsTwitter/>
                </Paper>

                <Stack alignItems={'flex-end'}>
                  <Typography variant='body1' component={'div'}>Followers</Typography>
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                   <Typography variant='h5'  component={'div'}>+245</Typography>
                   <Typography variant='body1' component={'div'}></Typography>
                  </Stack>
                 
                  

                </Stack>
                <Divider className='margintop18'/>
                <Typography variant='body2' component={'div'} > just updated</Typography>




              </Paper>

            </Grid>


            <Grid item xs={12}  md={4}>
                <Paper elevation={3} sx={{padding: "12px" , minHeight: '80px', marginTop: '40px'}}>
                    <Paper className='dbchart' sx={{backgroundColor: 'success.light'}}>
                      <ReactApexChart
                      type='line'
                      options={{
                        xaxis: {
                            categories: sales.map(item=>item.month),
                          },
                          colors :['#FFFFFF'],
                       
                    }}              
                       height={149}                   
                      series={ [
                        {
                          name: 'Series 1',
                          data: sales.map(item=>item.value),
                        },
                      ]}
                      />


                    </Paper>

                    <Typography variant='body1'>Daily Sales</Typography>
                     <Divider className='margintop18'/>
                     <Typography variant='body2'>Updated 24 hours ago</Typography>

                </Paper>

               
            </Grid>

        </Grid>
    


      </Box>


    </Stack>
   
  )
}

export default Dashboard1