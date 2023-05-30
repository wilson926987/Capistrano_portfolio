import React from 'react'
import { Grid  ,Stack , Box , Typography , Button , TextField , 
  InputAdornment , ButtonGroup , ToggleButtonGroup, ToggleButton , MenuItem ,
  FormControl, FormControlLabel, RadioGroup, Radio , FormLabel , Checkbox , Switch , Rating, Autocomplete,
  Paper, Card, CardActions , CardContent , CardMedia, Accordion, AccordionDetails, AccordionSummary, ImageList , ImageListItem , ImageListItemBar, Breadcrumbs, Link

} from '@mui/material'
import {AiFillPlusCircle ,AiOutlineCaretRight} from 'react-icons/ai'
import { useState } from 'react'
import {ImUnlocked , ImLock} from 'react-icons/im'
import {FaPizzaSlice} from 'react-icons/fa'
import {IoIosArrowDropdownCircle} from 'react-icons/io'


function SampleComponents() {
  const [togglevalue, setTogglevalue] = useState('primary')
  const [fruit, setFruit] = useState()
  const fruitarray = [ "Apple" , "Banana" , "Caimito" ,"Dalandan"]
  const [fruitlist, setFruitlist] = useState([])
  const handlefruitlist = (e)=>{
      setFruitlist(typeof e === 'string' ? e.split(','): e)
      console.log(fruitlist)
  }
  const [gender, setGender] = useState('Female')
  const [lock, setLock] = useState(false)
  const [accordion, setAccordion] = useState()

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
    <div>
         <Typography variant='h5' padding={2}  component={'div'} color={'primary'}>Components</Typography>
      

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
              <FormControlLabel label='dark mode' control={<Switch />}></FormControlLabel>


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




        

         


     
        



      </Stack>
        




    </div>
  )
}

export default SampleComponents