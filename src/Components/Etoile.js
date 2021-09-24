// import React, { useState } from "react";value
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating({ value, setValue }) {
  // const [value, setValue] = useState(0);
  
console.log(value)
  return (
    <div className="filt">
      {/* <button onClick={() => filter(value)}>filter</button> */}
      <div>
        <Box
        //   sx={{
        //     '& > legend': { mt: 2 },
        //   }}
        >
          <Typography component="legend"></Typography>
          <Rating
            name="simple-controlled"
            value={value}
            // onClick={() => {filter(value); }}
            onChange={(event, newValue) => {
              setValue(newValue); 
              // filter(value)
            }}
          
          />
        </Box>
      </div>
    </div>
  );
}
