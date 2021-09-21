import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({filter}) {
  const [value, setValue] = React.useState(null);
  console.log(value);
  return (
    <div>
      <button onClick={()=>filter(value)}>filter</button>
<Box
    //   sx={{
    //     '& > legend': { mt: 2 },
    //   }}
    >
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        
        onChange={(event, newValue) => {
          setValue(newValue);
          
        }}
        
      />
    </Box>
    </div>
    
  );
}
