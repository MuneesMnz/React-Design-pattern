import { Typography } from '@mui/material'
import React from 'react'

export const MuiTypogrophy = () => {
  return (
    <div>
        <Typography variant='h1' >Varient H1</Typography>
        <Typography variant='h2' >Varient H2</Typography>

        <Typography variant='h3' >Varient H3</Typography>

        <Typography variant='h4' >Varient H4</Typography>

        <Typography variant='h5' component='h1' gutterBottom >Varient H5 using gutter bottom getting margin bottom space </Typography>
        <Typography variant='h6' >Varient H6</Typography>
        <Typography variant='subtitle1' >Varient Sub Title one</Typography>
        <Typography variant='subtitle2' >Varient Sub Title two</Typography>
        <Typography >Varient Bpdy One (defult P)</Typography>
        <Typography variant='body2' >Varient Body Two</Typography>
        






    </div>
  )
}
