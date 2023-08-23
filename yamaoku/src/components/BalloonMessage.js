import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const BalloonMessage = ({ imageUrl, message, altMessage }) => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={imageUrl} alt={altMessage} style={{ width: '200px', height: '300px', borderRadius: '50%' }} />
        <Paper sx={{ p: 2, marginLeft: 2, maxWidth: '500px', borderRadius: '15px', position: 'relative' }}>
          <Typography variant="h6">{message}</Typography>
          <div
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: '10px',
              width: '0',
              height: '0',
              borderTop: '10px solid transparent',
              borderRight: '10px solid white',
              borderBottom: '10px solid transparent',
            }}
          />
        </Paper>
      </Box>
    );
  };

export default BalloonMessage;