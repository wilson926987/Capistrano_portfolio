
import './App.css';

import { BrowserRouter,Routes, Route, useNavigate, Router , Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography  , Stack , Button , Menu, MenuItem, MenuItemProps, Tooltip} from '@mui/material';



import Home from './pages/Home';

import HomepagesContainer from './pages/Homepages/HomepagesContainer';
import ProfilepageContainer from './pages/Profilepage/ProfilepageContainer';
import SampleComponents from './pages/SampleComponents';

import Graphs from './pages/Graphs';
import Homepage1 from './pages/Homepages/Homepage1';
import Homepage2 from './pages/Homepages/Homepage2';
import Profilepage2 from './pages/Profilepage/Profilepage2';
import Profilepage1 from './pages/Profilepage/Profilepage1';
import { useState } from 'react';






function App() {

  const navigate = useNavigate()
  const [homepage, sethomepage] = useState(false)
  const [profilepage, setProfilepage] = useState(false)
  const [forms, setForms] = useState(false)
  const [dashboard, setDashboard] = useState(false)





  return (
    <>
       <AppBar position='static' >

<Toolbar>
  <Typography component='div' variant='h6' sx={{flexGrow :1}} onClick={()=>{navigate('/')}}>Wilson</Typography>

    <Tooltip placement='bottom' title="all components">
        <Button onClick={()=>navigate('components')}  color='inherit'> Components</Button>
    </Tooltip>
    <Button onClick={()=>navigate('graphs')}  color='inherit'> Graphs</Button>
    <Tooltip placement='bottom' title='coming soon'>
    <Button color='inherit' 
        id='homepages' 
        aria-controls={homepage}
        aria-haspopup = 'true'
        aria-expanded={homepage}
        onClick={()=>{sethomepage(!homepage)}}
        disabled
    > Homepages</Button>
    </Tooltip>
    <Button color='inherit' 
        id='dashboard' 
        aria-controls={dashboard}
        aria-haspopup = 'true'
        aria-expanded={dashboard}
        onClick={()=>{setDashboard(!dashboard)}}
    
    > Dashboard</Button>

  
    <Button color='inherit' 
        id='profilepage' 
        aria-controls={profilepage}
        aria-haspopup = 'true'
        aria-expanded={profilepage}
        onClick={()=>{setProfilepage(!profilepage)}}
        disabled
    > Profile</Button>

    <Menu id='homepagemenu' 
      anchorEl={document.getElementById('homepages')} 
      onClose={()=>sethomepage(false)}
      open={homepage}
    
      >
      <MenuItem onClick={()=>{navigate('homepages/homepage1'); sethomepage(false)}}>Homepage 1</MenuItem>
      <MenuItem onClick={()=>{navigate('homepages/homepage2') ; sethomepage(false)}}>Homepage 2</MenuItem>
    </Menu>

    <Menu id='dashboardmenu' 
      anchorEl={document.getElementById('dashboard')} 
      onClose={()=>setDashboard(false)}
      open={dashboard}
   
     
      >
      <MenuItem onClick={()=>{window.open('https://dashboard-plain1.vercel.app' , '_blank');; setDashboard(false)}}>Dashboard 1</MenuItem>
      <MenuItem disabled onClick={()=>{navigate('dashboard/dashboard2') ; setDashboard(false)}}>Dashboard 2</MenuItem>
    </Menu>

   

    <Menu id='profilemenu' 
      anchorEl={document.getElementById('profilepage')} 
      onClose={()=>setProfilepage(false)}
      open={profilepage}
    
      >
      <MenuItem onClick={()=>{navigate('profilepage/profile1') ;setProfilepage(false)}}>Profile 1</MenuItem>
      <MenuItem onClick={()=>{navigate('profilepage/profile2');setProfilepage(false)}}>Profile 2</MenuItem>
    </Menu>

     

</Toolbar>
</AppBar>


   

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='components' element={<SampleComponents/>}></Route>
          <Route path='graphs' element={<Graphs/>}></Route>

        
     
          <Route path='profilepage' element= {<ProfilepageContainer/>}>

            <Route path='profile1' element={<Profilepage1/>}></Route>
            <Route path='profile2' element={<Profilepage2/>}></Route>
          </Route>
          <Route path='homepages' element={<HomepagesContainer/>}> 
            <Route path='homepage1' element={<Homepage1/>}></Route>
            <Route path='homepage2' element={<Homepage2/>}></Route>
          </Route>



        </Routes>





</>

   
  
  );
}

export default App;
