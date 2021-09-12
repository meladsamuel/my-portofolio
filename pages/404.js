import { Fragment } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';

function NotFound() {
  return (
    <Fragment>
      <Paper
        sx={{
          margin: 2,
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Box sx={{ position: 'relative', flexGrow: 1 }}>
          <Image src="/page_not_found.svg" layout="fill" />
        </Box>
        <Typography
          gutterBottom
          variant="h2"
          component="h1"
          color="primary"
          align="center"
        >
          Page Not Found
        </Typography>
      </Paper>
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }
        #__next {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Fragment>
  );
}

export default NotFound;
