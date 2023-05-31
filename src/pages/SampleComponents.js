import React, { useEffect } from 'react'
import { Grid  ,Stack , Box , Typography , Button , TextField , 
  InputAdornment , ButtonGroup , ToggleButtonGroup, ToggleButton , MenuItem ,
  FormControl, FormControlLabel, RadioGroup, Radio , FormLabel , Checkbox , Switch , Rating, Autocomplete,
  Paper, Card, CardActions , CardContent , CardMedia, Accordion, AccordionDetails, AccordionSummary, ImageList , ImageListItem , ImageListItemBar, 
  Breadcrumbs, Link, Drawer, IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon, BottomNavigation, BottomNavigationAction, Avatar, AvatarGroup, Badge,
  List, ListItem, ListItemText, ListItemIcon, ListItemButton, Divider, Chip , Tooltip, Alert, Snackbar, AlertTitle, SnackbarContent ,
  Dialog, DialogTitle , DialogContent, DialogActions, CircularProgress,LinearProgress, Skeleton, Tabs, Tab,
  CssBaseline, ThemeProvider, createTheme,
  

} from '@mui/material'

import { LoadingButton, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@mui/lab'



import { LocalizationProvider , DatePicker, StaticDatePicker, MobileDatePicker } from '@mui/x-date-pickers'


import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'










import { AiFillMail, AiFillPlusCircle ,AiOutlineCaretRight ,AiFillPrinter ,AiFillCopy, AiFillDelete ,AiFillHome ,AiFillSetting,} from 'react-icons/ai'
import { useState } from 'react'
import {ImUnlocked , ImLock ,ImMenu, ImMail} from 'react-icons/im'
import {FaPizzaSlice ,FaUserCircle ,FaSave} from 'react-icons/fa'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import {BsFillQuestionCircleFill} from "react-icons/bs"




function SampleComponents() {
  const [togglevalue, setTogglevalue] = useState('primary')
  const [fruit, setFruit] = useState()
  const fruitarray = [ "Apple" , "Banana" , "Caimito" ,"Dalandan"]
  const [fruitlist, setFruitlist] = useState([])
  const [snackbar, setSnackbar] = useState(false)
  const [snackbar2, setSnackbar2] = useState(false)
  const [snackbaralert, setSnackbaralert] = useState(false)
  const [dialog1, setDialog1] = useState(false)
  const [loadbutton, setLoadbutton] = useState(false)
  const [tab, setTab] = useState(1)
  const [theme, setTheme] = useState('light')
  const changeTheme= (e)=>{
    setTheme(e===true? 'dark' : 'light')
  }


  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handlefruitlist = (e)=>{
      setFruitlist(typeof e === 'string' ? e.split(','): e)
      console.log(fruitlist)
  }
  const [gender, setGender] = useState('Female')
  const [lock, setLock] = useState(false)
  const [accordion, setAccordion] = useState()
  const [sidebar, setSidebar] = useState(false)
  const [bottomnav, setBottomnav] = useState(false)
  const [bottomnavValue, setBottomnavValue] = useState(0)
  const [chiplist , setchiplist] = useState([
    { name: "chip1" , id: 1},
    { name: "chip2" , id: 2},
    { name: "chip3" , id: 3},
    { name: "chip4" , id: 4}

  ]) 

  const imagelist = [
    {
        src : "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        ,title: 'photo1'
    },
    {
      src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      , title: 'photo2'
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1663040669845-e4ff569ee5f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
        ,title: 'photo3'
    },
    {
        src: "https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"  
        ,title: 'photo4'
    },
    {
        src: "https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        ,title: 'photo5'
    },
    {
        src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        ,title: 'photo6'
    },
    {
        src :"https://images.unsplash.com/photo-1504470695779-75300268aa0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        ,title: "photo7"
    },
    {
        src: "https://images.unsplash.com/photo-1521133573892-e44906baee46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        , title: 'photo8'
    },{
      src: 'https://images.unsplash.com/photo-1521178010706-baefe2334211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
      ,title: 'photo9'
    }
  ]





  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
       <CssBaseline />
         <div>

<Stack direction={'row'} alignItems={'center'}>
  <IconButton size ='large' edge='start' color='primary'>
    <ImMenu onClick={()=>setSidebar(!sidebar)}/>
  </IconButton>

 
  <Typography variant='h5'  component={'div'} color={'primary'}>Components</Typography>


</Stack>
  

<Stack padding={3} spacing={2}>


<Stack direction={'row'}  >
      <Button variant='outlined'>Outlined</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='text'>Text</Button>
 </Stack>

 <Stack direction={'row'}>
    <ButtonGroup variant='contained'>
      <Button>Left</Button>
      <Button>Button Group Contained</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </Stack>
  <Stack direction={'row'}>
    <ButtonGroup variant='outlined'>
      <Button>Left</Button>
      <Button>Button Group Outlined</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </Stack>
  <Stack direction={'row'}>
    <ButtonGroup variant='text'>
      <Button>Left</Button>
      <Button>Button Group Text</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </Stack>

 <Stack direction={'row'}  display={'block'} spacing={1}>
      <Button variant='contained' size='small' >small</Button>
      <Button variant='contained' size='medium'>Medium</Button>
      <Button variant='contained' size ='large' >Large</Button>
 </Stack>

 <Stack direction='row' spacing={2}>
  <Button variant='contained' color='success' size='small' startIcon={<AiFillPlusCircle/>}>Icon left</Button>
  <Button variant='contained' color='success' size='small' endIcon={<AiFillPlusCircle/>}>Icon Right</Button>


 </Stack>


 <Stack direction={'row'} spacing={4}>
    <ToggleButtonGroup color={togglevalue} value={togglevalue} className='toggleButtonGroup'>
      <ToggleButton value={'primary'} onClick={()=>setTogglevalue('primary')}>Primary</ToggleButton>
      <ToggleButton value={'secondary'} onClick={()=>setTogglevalue('secondary')}>Secondary</ToggleButton>
      <ToggleButton value={'success'} onClick={()=>setTogglevalue('success')} >Success</ToggleButton>
    </ToggleButtonGroup>

    <Typography>Sample Text</Typography>


 </Stack>

 <Stack direction={'row'} spacing={1}>
  <Button variant='contained' color='inherit'>Inherit</Button>
   <Button variant='contained' color='primary'>Primary</Button>
   <Button variant='contained' color='secondary'>Secondary</Button>
   <Button variant='contained' color='success'>Success</Button>
   <Button variant='contained' color='info'>Info</Button>
   <Button variant='contained' color='warning'>Warning</Button>
   <Button variant='contained' color='error' >Error</Button>
   <Button variant='contained' color='error' disabled>Disabled</Button>
 </Stack>

 



 <Stack direction={'row'} spacing={1}>
  <TextField variant='outlined' label='Outlined'/>
  <TextField variant='filled' label='Filled' color='success'/>
  <TextField variant='standard' label='Standard' placeholder='Enter name' color='success'/>

 </Stack>

 <Stack direction={'row'}  spacing={1}>
    <TextField variant='outlined' size='small' label="Small" helperText='This is a helper text'/>
    <TextField variant='outlined' size='medium' label="Medium" />
 </Stack>

 <Stack direction={'row'}  spacing={1}>
  <TextField variant='outlined' size='small' helperText='Read only' InputProps={{readOnly : true }}value={'Read Only Text'}/>
  <TextField variant='outlined' size='small' helperText='Disabled' disabled value={'Disabled'}/>

 </Stack>
 
 <Stack direction={'row'}  spacing={1}>
 <TextField variant='outlined' type='number' InputProps={{startAdornment :<InputAdornment position='start' >$</InputAdornment>}}/>
 <TextField variant='outlined' type='number' InputProps={{endAdornment :<InputAdornment position='end' >kg</InputAdornment>}}/>

 </Stack>


  <Stack direction={'row'} spacing={1}>
    <Box width={'240px'} >
      <TextField fullWidth variant='outlined' value={fruit} label="Select Fruit" select>
          <MenuItem value="Apple">Apple</MenuItem>
          <MenuItem value="Banana">Banana</MenuItem>
          <MenuItem value="Caimito">Caimito</MenuItem>
      </TextField>
    </Box>
    <Box width={'240px'}  >
      <TextField fullWidth   variant='outlined' value={fruitlist} onChange={e=>{handlefruitlist(e.target.value)}} label="Select Multiple Fruits" select SelectProps={{multiple : true}} >
          <MenuItem value="Apple">Apple</MenuItem>
          <MenuItem value="Banana">Banana</MenuItem>
          <MenuItem value="Caimito">Caimito</MenuItem>
          <MenuItem value="Dalandan" >Dalandan</MenuItem>
      </TextField>


    </Box>


    <Box width={'260px'} >   
      <Autocomplete className='notransition' options={fruitarray} 

        renderInput={params=> <TextField {...params}  label ="Autocomplete" fullWidth  className='notransition'/>}
        />
    </Box>

  </Stack>

  <Box> 
      <FormControl>
        <FormLabel id='grouplabel'>
          Select Gender
        </FormLabel>

        <Stack direction={'row'} spacing={8}> 
        <RadioGroup name='mediumradio'>  
          <FormControlLabel control={<Radio/>} label='Male' value={'Male'}></FormControlLabel>
          <FormControlLabel control={<Radio/>} label='Female' value={'Female'}></FormControlLabel>
          <FormControlLabel control={<Radio/>} label='Other' value={'Other'}></FormControlLabel>

          
        </RadioGroup>

        <RadioGroup name='smallradio' value={gender} onChange={e=>setGender(e.target.value)}>  
          <FormControlLabel control={<Radio size='small' color='success'/>} label='Male' value={'Male'}></FormControlLabel>
          <FormControlLabel control={<Radio size='small' color='success'/>} label='Female' value={'Female'}></FormControlLabel>
          <FormControlLabel control={<Radio size='small' color='success'/>} label='Other' value={'Other'}></FormControlLabel>
         
        </RadioGroup>

        <Stack >
        <FormControlLabel  label='I accept terms and conditions' value={'primary'} control={<Checkbox color='primary' checked />}></FormControlLabel>
        <FormControlLabel  label='I accept terms and conditions' value={'secondary'} control={<Checkbox color='secondary' checked />}></FormControlLabel>
        <FormControlLabel  label='I accept terms and conditions' value={'success'} control={<Checkbox color='success'checked /> }></FormControlLabel>
         
        </Stack>

        <Stack  direction={'row'}>
        <FormControlLabel  label='I accept terms and conditions' value={'primary'} control={<Checkbox color='primary' checked />}></FormControlLabel>
        <FormControlLabel  label='I accept terms and conditions' value={'secondary'} control={<Checkbox color='secondary' checked />}></FormControlLabel>
        <FormControlLabel  label='I accept terms and conditions' value={'success'} control={<Checkbox color='success'checked /> }></FormControlLabel>
         
        </Stack>
        <Box>
        <Checkbox color='warning' value={lock} onChange={e=>setLock(e.target.value)} icon={<ImLock/>} checkedIcon={<ImUnlocked/>}></Checkbox>
        <FormControlLabel label='dark mode' control={<Switch onChange={e=>{changeTheme(e.target.checked)}}/>}></FormControlLabel>


        </Box>
        
        </Stack>
      </FormControl>
    </Box>

    <Stack direction={'row'} spacing={12}>

      <Box>
          <Typography variant='h6' component={'div'} color={'secondary'}>Star Rating</Typography>
          <Rating precision={.5}></Rating>

      </Box>

      <Box>
          <Typography variant='h6' component={'div'} color={'secondary'}>Custom Rating</Typography>
          <Rating className='notransition' spacing={4}  icon={<FaPizzaSlice/>} emptyIcon={<FaPizzaSlice/>}></Rating>

      </Box>

    </Stack>

    <Stack direction={'row'} spacing={6}>
        <Paper sx={{padding :'32px' }} > 

            <Typography variant='h1' component={'div'}>typography h1</Typography>
            <Typography variant='h2' component={'div'}>typography h2</Typography>
            <Typography variant='h3' component={'div'}>typography h3</Typography>
            <Typography variant='h4' component={'div'}>typography h4</Typography>
            <Typography variant='h5' component={'div'}>typography h5</Typography>
            <Typography variant='h6' component={'div'}>typography h6</Typography>
            <Typography variant='body1' component={'div'}>typography body1</Typography>
            <Typography variant='body2' component={'div'}>typography body2</Typography>

        </Paper>


    </Stack>


    <Stack direction={'row' } spacing={5}>
        <Box width='30%'>
          <Card>
            <CardContent>
              <Typography variant ='h5' component={'div'} gutterBottom>Sample Card</Typography>
              <Typography variant='body1' component={'div'}>This is a  card</Typography>
              
            </CardContent>
            <CardActions>

              <Stack direction={'row'} justifyContent={'flex-end'} width={'100%'} spacing={1}>
                <Box> 
                  <Button size='small'  onClick={()=>alert('click me')}>  
                      Click me
                  </Button>   
                </Box>
                <Box> 
                  <Button size='small' onClick={()=>alert('click me')}>  
                      Click me
                  </Button>   
                </Box>
                 
              </Stack>
                         
            </CardActions>

          </Card>
        </Box>


        <Box width={'30%'}>
          <Card>

          <CardContent>
              <Typography variant ='h5' component={'div'} gutterBottom>Sample Card</Typography>
              <Typography variant='body1' component={'div'}>This is a  card</Typography>
              
            </CardContent>


            <CardMedia component ='img' height={'140'} image='https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='unsplash image'/>

            
          </Card>


        </Box>
        <Box width={'20%'} minWidth={300}>
          <Card>
          <CardMedia  component ='img' height={'140'} image='https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='unsplash image'/>


          <CardContent>
              <Typography variant ='h5' component={'div'} gutterBottom>Sample Card</Typography>
              <Typography variant='body1' component={'div'}>This is a  card</Typography>
              
            </CardContent>
            <CardActions>

              <Stack direction={'row'} justifyContent={'flex-end'} width={'100%'} spacing={1}>
                <Box> 
                  <Button size='small'  onClick={()=>alert('click me')}>  
                      Click me
                  </Button>   
                </Box>
                <Box> 
                  <Button size='small' onClick={()=>alert('click me')}>  
                      Click me
                  </Button>   
                </Box>
                 
              </Stack>
                         
            </CardActions>


           
            
          </Card>


        </Box>

    </Stack>


    <Stack>
        <Box>
          <Accordion expanded={accordion ==="acc1"} onChange={()=>{setAccordion( accordion=== undefined ? "acc1" : accordion !== 'acc1' ? 'acc1': undefined )}}>
            <AccordionSummary expandIcon={<IoIosArrowDropdownCircle/>}>
              <Typography variant='h6' component={'div'}>This is an Accordion {accordion}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' component={'div'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum asperiores libero veniam nihil, voluptates placeat soluta necessitatibus ex architecto! Ducimus ea dolor fuga minus deleniti nesciunt soluta provident nihil.
              </Typography>
              
            </AccordionDetails>
          </Accordion>
          <Accordion   expanded={accordion ==="acc2"} onChange={(e)=>{setAccordion(accordion=== undefined ? "acc2" : accordion !== 'acc2' ? 'acc2': undefined ) ; console.log(e)}}>
            <AccordionSummary expandIcon={<IoIosArrowDropdownCircle/>}>
              <Typography variant='h6' component={'div'}>This is an Accordion 2 {accordion}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' component={'div'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum asperiores libero veniam nihil, voluptates placeat soluta necessitatibus ex architecto! Ducimus ea dolor fuga minus deleniti nesciunt soluta provident nihil.
              </Typography>
              
            </AccordionDetails>
          </Accordion>
          <Accordion  expanded={accordion ==="acc3"} onChange={()=>{setAccordion( accordion=== undefined ? "acc3" : accordion !== 'acc3' ? 'acc3': undefined )}}>
            <AccordionSummary expandIcon={<IoIosArrowDropdownCircle/>}>
              <Typography variant='h6' component={'div'}>This is an Accordion 3 {accordion}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' component={'div'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum asperiores libero veniam nihil, voluptates placeat soluta necessitatibus ex architecto! Ducimus ea dolor fuga minus deleniti nesciunt soluta provident nihil.
              </Typography>
              
            </AccordionDetails>
          </Accordion>
        </Box>

    </Stack>


    <Stack direction={'row'} >

   <Box width={'30%'}> 
    <Typography padding={4} variant='h6'>Default</Typography>
   <ImageList cols={2} sx={{height:'400px' }} rowHeight={'400px'}>  
          {imagelist.map(item=>(
            <ImageListItem key={item.src} >
              <img src={item.src} alt="" loading='lazy'/>
              <ImageListItemBar title={item.title} subtitle={item.title}/>
            </ImageListItem>
          ))}        
      </ImageList>
      </Box>

      <Box width={'30%'}> 
        <Typography padding={4} variant='h6'>masonry</Typography>
   <ImageList variant='masonry' cols={5} sx={{height:'400px' }} gap={18}>  
          {imagelist.map(item=>(
            <ImageListItem key={item.src} >
              <img src={item.src} alt="" loading='lazy'/>
            </ImageListItem>
          ))}        
      </ImageList>
      </Box>
      <Box width={'40%'}> 
        <Typography padding={4} variant='h6'>Woven</Typography>
   <ImageList variant='woven' cols={3} sx={{height:'400px'}} gap={6}>  
          {imagelist.map(item=>(
            <ImageListItem key={item.src} >
              <img src={item.src} alt="" loading='lazy'/>
            </ImageListItem>
          ))}        
      </ImageList>
      </Box>






    </Stack>

    <Stack direction={'row'}  spacing={30}  >

   
        <Breadcrumbs>
            <Link>Home</Link>
            <Link>Animals</Link>
            <Link>Dogs</Link>
            <Link>Chiuaua</Link>
        </Breadcrumbs>       
        <Breadcrumbs separator={<AiOutlineCaretRight/>} >
            <Link>Home</Link>
            <Link>Animals</Link>
            <Link>Dogs</Link>
            <Link>Chiuaua</Link>
        </Breadcrumbs>

        <Breadcrumbs separator={<AiOutlineCaretRight/>} maxItems={2} >
            <Link>Home</Link>
            <Link>Animals</Link>
            <Link>Dogs</Link>
            <Link>Chiuaua</Link>
        </Breadcrumbs>
    </Stack>


<Drawer   anchor='left' open={sidebar} onClose={()=>setSidebar(false)}>

  <Box  padding={2} width={'250px'} role='presentation'>
    <Typography variant='body1' component={'div'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ea tenetur perspiciatis officia doloribus facilis, voluptate dolores, commodi facere alias nesciunt voluptatibus nisi quam voluptas ratione repellendus accusantium atque. Deserunt.</Typography>

  </Box>

</Drawer>



<SpeedDial icon={<SpeedDialIcon/>}   ariaLabel= 'Navigation speed dial' sx={{position: 'fixed' , bottom: 16 ,right:16}}>
      <SpeedDialAction icon={<AiFillDelete/>} title='delete'/>
      <SpeedDialAction icon={<AiFillCopy/>} title='copy'/>
      <SpeedDialAction icon={<AiFillPrinter/>} title='print' tooltipTitle='Print' tooltipOpen/>

</SpeedDial>

{!bottomnav &&
  <BottomNavigation sx={{position:"relative" , bottom:0 , width: '100%', left:0 , zIndex: 99}} onChange={(event, e)=>{setBottomnavValue(e)}} value={bottomnavValue}>
    <BottomNavigationAction label='Home' icon={<AiFillHome/>}/>
    <BottomNavigationAction label='Profile' icon={<FaUserCircle/>}/>
    <BottomNavigationAction label="Settings" icon={<AiFillSetting/>}/>
  </BottomNavigation>
}


<Stack direction={'row'} spacing={30}>
  <AvatarGroup>
    <Avatar sx={{bgcolor: 'primary.main'}}>TT</Avatar>
    <Avatar sx={{bgcolor: 'success.light'}}>XX</Avatar>
    <Avatar sx={{bgcolor: 'lightblue'}}>NN</Avatar>
    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'>Wilson</Avatar>
    <Avatar src='https://randomuser.me/api/portraits/women/69.jpg'>Wilson</Avatar>
  </AvatarGroup>
  <AvatarGroup max={3}>
    <Avatar sx={{bgcolor: 'primary.light'}}>TT</Avatar>
    <Avatar sx={{bgcolor: 'palegreen'}}>XX</Avatar>
    <Avatar sx={{bgcolor: 'lightblue'}}>NN</Avatar>
    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'>Wilson</Avatar>
    <Avatar src='https://randomuser.me/api/portraits/women/69.jpg'>Wilson</Avatar>
  </AvatarGroup>
    

</Stack>

<Stack direction={'row'} spacing={5}>
  <Badge badgeContent={67} color='warning'>
      <AiFillMail className='svg-large' color='primary'/>         
  </Badge>

  <Badge badgeContent={67} color='warning'>
      <AiFillMail className='svg-large' color='primary'/>         
  </Badge>

</Stack>

  <Stack  direction={'row'} spacing={4}>
    <Box width={'20%'} sx={{bgcolor:'primary' ,borderRadius:'12px'}}>
        <List>
          <ListItem>  
            <ListItemText primary="List item 1"/>
          </ListItem>
          <ListItem>  
            <ListItemText primary="List item 2"/>
          </ListItem>
          <ListItem>  
            <ListItemText primary="List item 3"/>
          </ListItem>
          <ListItem>  
            <ListItemText primary="List item 4"/>
          </ListItem>

        </List>
    </Box>   


    <Box width={'20%'} sx={{bgcolor:'primary' ,borderRadius:'12px'}}>
        <List>
          <ListItem>  
            <ListItemIcon>
              <ImMail/>
            </ListItemIcon>
            <ListItemText primary="List item 1"/>
          </ListItem>
          <ListItem>  
          <ListItemIcon>
              <ImMail/>
            </ListItemIcon>
            <ListItemText primary="List item 2"/>
          </ListItem>
          <ListItem>  
          <ListItemIcon>
              <ImMail/>
            </ListItemIcon>
            <ListItemText primary="List item 3"/>
          </ListItem>
          <ListItem>  
              <ListItemIcon>
              <ImMail/>
            </ListItemIcon>
            <ListItemText primary="List item 4"/>
          </ListItem>

        </List>
    </Box>
    
    
    <Box width={'20%'} sx={{bgcolor:'primary' ,borderRadius:'12px'}}>
        <List>
          <ListItem>  
            <ListItemIcon>
              <Avatar></Avatar>       
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="subtext"/>
          </ListItem>
          <ListItem>  
          <ListItemIcon>
                <Avatar></Avatar>    
            </ListItemIcon>
            <ListItemText primary="List item 2" secondary="subtext"/>
          </ListItem>
          <ListItem>  
          <ListItemIcon>
          <Avatar></Avatar>    
            </ListItemIcon>
            <ListItemText primary="List item 3" secondary="subtext"/>
          </ListItem>
          <ListItem>  
              <ListItemIcon>
              <Avatar></Avatar>    
            </ListItemIcon>
            <ListItemText primary="List item 4" secondary="subtext"/>
          </ListItem>

        </List>
    </Box>  

       
    <Box width={'20%'} sx={{bgcolor:'primary' ,borderRadius:'12px'}}>
        <List disablePadding>
          <ListItem>  
            <ListItemButton>
              <ListItemIcon>
                <Avatar></Avatar>       
              </ListItemIcon>
              <ListItemText primary="List button 1" secondary="subtext"/>
            </ListItemButton>
          </ListItem>
          <ListItem>  
            <ListItemButton>
              <ListItemIcon>
                <Avatar></Avatar>       
              </ListItemIcon>
              <ListItemText primary="List button 1" secondary="subtext"/>
            </ListItemButton>
          </ListItem>
    
        </List>
    </Box>  

    <Box width={'20%'} sx={{bgcolor:'primary' ,borderRadius:'12px'}}>
        <List disablePadding>
          <ListItem>  
            <ListItemButton>
              <ListItemIcon>
                <Avatar></Avatar>       
              </ListItemIcon>
              <ListItemText primary="List button 1" secondary="subtext"/>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem>  
            <ListItemButton>
              <ListItemIcon>
                <Avatar></Avatar>       
              </ListItemIcon>
              <ListItemText primary="List button 1" secondary="subtext"/>
            </ListItemButton>
          </ListItem>
    
        </List>
    </Box> 
  </Stack>

  <Stack direction ={'row'} spacing={1}>
    <Chip label="Chip" color ="primary" size='small'></Chip>
    <Chip label="Chip" color ="primary" ></Chip>
    <Chip label="Chip outlined" variant='outlined' color ="primary" ></Chip>
    <Chip label="Chip click" color ="success" onClick={()=>{alert("Success")}}  ></Chip>
    <Chip label="Avatar" color ="primary" avatar={<Avatar></Avatar>} ></Chip>
    <Chip label="Chip" color ="warning" onDelete={()=>{alert("deleted")}} ></Chip>

    {chiplist.map(item=>(
      <Chip key={item.id} avatar={<Avatar></Avatar>} label={item.name} onDelete={()=>{setchiplist(chiplist.filter(temp=>item.id !== temp.id))}}></Chip>
    ))}
  </Stack>

  <Stack direction={'row'} spacing={4} alignItems={'center'}>

    <Box>
    <Tooltip title='information' >
      <IconButton color='primary'>
       <BsFillQuestionCircleFill/>
      </IconButton>
    </Tooltip>
    </Box>
    <Box>
    <Tooltip title='information' placement='right'>
      <IconButton color='primary'>
       <BsFillQuestionCircleFill/>
      </IconButton>
    </Tooltip>
    </Box>
    <Box>
    <Tooltip title='with arrow' placement='right' arrow>
      
      <IconButton color='primary'>
       <BsFillQuestionCircleFill/>
      </IconButton>
    </Tooltip>
    </Box>

    <Box>
    <Tooltip title='using chip' placement='right' arrow>        
          <Chip label="Chip" color ="primary" size='small'></Chip>   
    </Tooltip>
    </Box>
    <Box>
    <Tooltip title='with delay' placement='right' enterDelay={600} leaveDelay={200}>        
        <Avatar src='https://randomuser.me/api/portraits/women/69.jpg'>Wilson</Avatar>
    </Tooltip>
    </Box>

    <Box>
    <Tooltip title='with badges' placement='right'>        
    <Badge badgeContent={67} color='warning'>
      <IconButton color='secondary'> <AiFillMail className='svg-large' color='primary'/>  </IconButton>
        
  </Badge>
    </Tooltip>
    </Box>


  </Stack>


  <Stack spacing={3}>
    <Alert severity='error'>This is a sample Alert error</Alert>
    <Alert severity='warning'>This is a sample Alert warning</Alert>
    <Alert severity='info'>This is a sample Alert info</Alert>
    <Alert severity='success'>This is a sample Alert success</Alert>
    <Alert severity='success' variant='outlined'>This is a sample Alert outlined</Alert>
    <Alert severity='success' variant='filled'>This is a sample Alert filled</Alert>
    <Alert severity='success' variant='outlined'>
      <AlertTitle>Alert Title</AlertTitle>
      This is a sample Alert with title</Alert>
    <Alert severity='success' variant='outlined' icon={<ImMail/>}>
      <AlertTitle>Alert Title and Custom Icon</AlertTitle>
      This is a sample Alert with title</Alert>
    <Alert severity='success' variant='outlined' icon={<ImMail/>} onClose={()=>{alert("alert Closed")}}>
      <AlertTitle>Delete Alert</AlertTitle>
      This is a sample Alert with title</Alert>

      <Alert severity='success' variant='outlined' icon={<ImMail/>} action={<><Button color='inherit' size='small'>Action 1</Button><Button color='inherit' size='small'>Action 2</Button></>}>
      <AlertTitle>With Actions</AlertTitle>
      This is a sample Alert with title</Alert>
 
 
 
  </Stack>

  

  <Stack direction={'row'} spacing={3}>

    <Button variant='contained' onClick={()=>{setSnackbar(true)}}>Default Snackbar</Button>
    <Button variant='contained' onClick={()=>{setSnackbar2(true)}}>Custom position</Button>  
    <Button variant='contained' onClick={()=>{setSnackbaralert(true)}}>Snack Bar Alert</Button>  
  </Stack>
  <Stack direction={'row'} spacing={3}> 
      <Button variant='contained' color='warning' onClick={()=>{setDialog1(true)}}>Default Dialogbar</Button>
  </Stack>

  <Snackbar message="Default snackbar" color='secondary' autoHideDuration={3000} open={snackbar} onClose={()=>{setSnackbar(false)}}></Snackbar>
  <Snackbar message="Default snackbar" autoHideDuration={3000} open={snackbar2} onClose={()=>{setSnackbar2(false)}} anchorOrigin={{vertical:'top' , horizontal:'center'}}></Snackbar>
  <Snackbar  autoHideDuration={2000} open={snackbaralert} onClose={()=>{setSnackbaralert(false)}}>
    <SnackbarContent
     message='Snackbar content'
      sx={{backgroundColor: 'whitesmoke' , color:'black'}}
     ></SnackbarContent>
  </Snackbar>


  <Dialog open={dialog1} onClose={()=>setDialog1(false)}>
    <DialogTitle>Sample Dialog Prompt</DialogTitle>
    <DialogContent>
      <Typography variant='body1' component={'div'}>Some confirmation message here Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, facilis eius? Sapiente quisquam, soluta ex architecto ducimus sed minima perspiciatis provident facere pariatur id accusantium debitis illum explicabo dolores amet?</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>setDialog1(false)}>Confirm</Button>
      <Button onClick={()=>setDialog1(false)}>Cancel</Button>
    </DialogActions>
  </Dialog>


  <Stack direction={'row'} spacing={12}> 
    <CircularProgress />
    <CircularProgress  color='success'/>
    <CircularProgress variant='determinate' value={60}/>
   <CircularProgress thickness={12}/>       
  </Stack>
  <Stack spacing={8}>
    <LinearProgress  color='success' />
    <LinearProgress variant='determinate' value={60}/>
 
  </Stack>


  <Stack width={"250px"} spacing ={4}>
      <Skeleton variant='text' animation={false}/>
      <Skeleton variant='text' animation={'wave'}/>
      <Skeleton variant='text' />
      <Skeleton variant='circular' width={40} height={40} />
      <Skeleton  variant='rectangular' width={'200px'} height={'60px'} animation='wave'/>
  </Stack>

  <Stack direction={'row'} spacing={2}>
    <Button variant='contained' onClick={()=>setLoadbutton(!loadbutton)}>Refresh button</Button>

    <LoadingButton variant='outlined' loading={loadbutton}>
      Button Load
    </LoadingButton>
    <LoadingButton variant='contained' color='success' loading={loadbutton}>
      Button Load
    </LoadingButton>
    <LoadingButton variant='contained' color='success' loading={loadbutton} loadingPosition='start'>
      Load Position Start
    </LoadingButton>
    <LoadingButton variant='contained' color='success' loading={loadbutton} startIcon={<FaSave/>} >
        With Icon
    </LoadingButton>


  </Stack>

  <LocalizationProvider dateAdapter={AdapterDateFns}>
  <Stack spacing={3} direction={'row'} alignItems={'center'}>  
   <DatePicker label='Date picker' />
   <MobileDatePicker/>
 </Stack>

 <Stack spacing={3} direction={'row'} >
  <Box>
    default mobile
   <StaticDatePicker displayStaticWrapperAs='mobile'/>
  </Box>
  <Box>
    desktop
    <StaticDatePicker displayStaticWrapperAs='desktop'/>
  </Box>
  <Box>
    open year
    <StaticDatePicker displayStaticWrapperAs='desktop' openTo='year'/>
  </Box>
  <Box>
    landscape
    <StaticDatePicker displayStaticWrapperAs='mobile' orientation='landscape'/>
  </Box>
  <Box>
    disable past
    <StaticDatePicker displayStaticWrapperAs='mobile' disablePast/>
  </Box>
 
 
 

 </Stack>

  </LocalizationProvider>
 

<Box width={'30%'}>
<Tabs value={tab} onChange={(event, e)=>{setTab(e)}}  centered variant='fullWidth'>
      <Tab label="tab 1"></Tab>
      <Tab label="tab 2"></Tab>
      <Tab label="tab 3"></Tab>
 </Tabs>
 <Typography variant='body1' component={'div'}>{tab===0 ? "Tab 1 Active" : tab===1 ? " Tab 2 Active" : "TAb 3 Active"}</Typography>


</Box>

<Stack direction={'row'} spacing={4}>
  <Box width={'25%'}>
    <Timeline >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          Manila
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          Japan
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot/>
          
        </TimelineSeparator>
        <TimelineContent>
          Dubai
        </TimelineContent>
      </TimelineItem>
    </Timeline>
   
  </Box>

  <Box width={'25%'}>
    <Timeline position='alternate' >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='filled'/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          Manila
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          Japan
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot/>
          
        </TimelineSeparator>
        <TimelineContent>
          Dubai
        </TimelineContent>
      </TimelineItem>
    </Timeline>
   
  </Box>

  <Box width={'25%'}>
    <Timeline position='left' >
      <TimelineItem>
      <TimelineOppositeContent>
          6:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          Manila
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          8:00
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot color='warning'/>
          <TimelineConnector/>
        </TimelineSeparator >
        <TimelineContent>
          Japan
        </TimelineContent>
       
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          10:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'/>
          
        </TimelineSeparator>
        <TimelineContent>
          Dubai
        </TimelineContent>
      </TimelineItem>
    </Timeline>
   
  </Box>


</Stack >
      


    


</Stack>
  


</div>
    </ThemeProvider>
  )
}

export default SampleComponents