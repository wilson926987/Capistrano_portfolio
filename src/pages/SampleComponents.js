import React from 'react'
import { Grid  ,Stack , Box , Typography , Button , TextField , 
  InputAdornment , ButtonGroup , ToggleButtonGroup, ToggleButton , MenuItem} from '@mui/material'
import {AiFillPlusCircle} from 'react-icons/ai'
import { useState } from 'react'


function SampleComponents() {
  const [togglevalue, setTogglevalue] = useState('primary')


 
  const [fruit, setFruit] = useState()
  const [fruitlist, setFruitlist] = useState([])
  const handlefruitlist = (e)=>{
      setFruitlist(typeof e === 'string' ? e.spllit(','): e)
      console.log(fruitlist)
  }

 


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
            <TextField fullWidth   variant='outlined' value={fruitlist} onChange={e=>{handlefruitlist(e.target.value)}} label="Select Fruit" select SelectProps={{multiple : true}} >
                <MenuItem value="Apple">Apple</MenuItem>
                <MenuItem value="Banana">Banana</MenuItem>
                <MenuItem value="Caimito">Caimito</MenuItem>
                <MenuItem value="Dalandan" >Dalandan</MenuItem>
            </TextField>


          </Box>

       
        </Stack>



      </Stack>
        




    </div>
  )
}

export default SampleComponents