
import './App.css';

import { BrowserRouter,Routes, Route, useNavigate, Router , Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography  , Stack , Button , Menu, MenuItem, MenuItemProps} from '@mui/material';



import Home from './pages/Home';
import DashboardContainer from './pages/Dashboard/DashboardContainer';
import FormsContainer from './pages/Forms/FormsContainer';
import HomepagesContainer from './pages/Homepages/HomepagesContainer';
import ProfilepageContainer from './pages/Profilepage/ProfilepageContainer';
import SampleComponents from './pages/SampleComponents';
import Dashboard1 from './pages/Dashboard/Dashboard1';
import Dashboard2 from './pages/Dashboard/Dashboard2';
import Forms1 from './pages/Forms/Forms1';
import Forms2 from './pages/Forms/Forms2';
import Homepage1 from './pages/Homepages/Homepage1';
import Homepage2 from './pages/Homepages/Homepage2';
import Profilepage2 from './pages/Profilepage/Profilepage2';
import Profilepage1 from './pages/Profilepage/Profilepage1';
import { useState } from 'react';
import {AiOutlineCaretDown , AiOutlineCaretUp} from 'react-icons/ai'






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

    <Button onClick={()=>navigate('components')}  color='inherit'> Components</Button>
    <Button color='inherit' 
        id='homepages' 
        aria-controls={homepage}
        aria-haspopup = 'true'
        aria-expanded={homepage}
        onClick={()=>{sethomepage(!homepage)}}
       
    > Homepages</Button>
    <Button color='inherit' 
        id='dashboard' 
        aria-controls={dashboard}
        aria-haspopup = 'true'
        aria-expanded={dashboard}
        onClick={()=>{setDashboard(!dashboard)}}
    
    > Dashboard</Button>

    <Button color='inherit' 
        id='forms' 
        aria-controls={forms}
        aria-haspopup = 'true'
        aria-expanded={forms}
        onClick={()=>{setForms(!forms)}}
       
    > Forms</Button>
    <Button color='inherit' 
        id='profilepage' 
        aria-controls={profilepage}
        aria-haspopup = 'true'
        aria-expanded={profilepage}
        onClick={()=>{setProfilepage(!profilepage)}}
       
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
      <MenuItem onClick={()=>{navigate('dashboard/dashboard1') ; setDashboard(false)}}>Dashboard 1</MenuItem>
      <MenuItem onClick={()=>{navigate('dashboard/dashboard2') ; setDashboard(false)}}>Dashboard 2</MenuItem>
    </Menu>

    <Menu id='formsmenu' 
      anchorEl={document.getElementById('forms')} 
      onClose={()=>setForms(false)}
      open={forms}
    
      >
      <MenuItem onClick={()=>{navigate('forms/form1') ; setForms(false)}}>Form 1</MenuItem>
      <MenuItem onClick={()=>{navigate('forms/form2');setForms(false)}}>Form 2</MenuItem>
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
          <Route path='dashboard' element ={<DashboardContainer/>}>

            <Route path='dashboard1' element={<Dashboard1/>}></Route>
            <Route path='dashboard2' element={<Dashboard2/>}></Route>
          </Route>
          <Route path='forms' element={<FormsContainer/>}>
            <Route path='form1' element={<Forms1/>}></Route>
            <Route path='form2' element={<Forms2/>}></Route>

          </Route>
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
