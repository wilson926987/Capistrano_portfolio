import React from 'react'
import { Grid  ,Stack , Box , Typography , Button } from '@mui/material'

function SampleComponents() {
  return (
    <div>
        <Typography variant='h5' padding={2} component={'div'} color={'primary'}>Components</Typography>
       <Stack direction={'row'}  padding={2}>
            <Button variant='outline'>Outlined</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='text'>Text</Button>
       </Stack>

       <Stack direction={'row'}  padding={2} display={'block'} spacing={1}>
            <Button variant='contained' size='small' >small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size ='large'>Large</Button>
       </Stack>

       <Stack direction={'row'} padding={2} spacing={1}>
        <Button variant='contained' color='inherit'>Inherit</Button>
         <Button variant='contained' color='primary'>Primary</Button>
         <Button variant='contained' color='secondary'>Secondary</Button>
         <Button variant='contained' color='success'>Success</Button>
         <Button variant='contained' color='info'>Info</Button>
         <Button variant='contained' color='warning'>Warning</Button>
         <Button variant='contained' color='error' >Error</Button>
         <Button variant='contained' color='error' disabled>Disabled</Button>
       </Stack>

    </div>
  )
}

export default SampleComponents