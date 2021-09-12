import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import MainLayout from '../components/MainLayout';
import Navigation from '../components/Navigation';
import Box from '@mui/material/Box';

function Blog() {
  return (
    <Fragment>
      <Head>
        <title>Melad Samuel - My Blog</title>
      </Head>
      <Navigation />
      <MainLayout>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Box
            sx={{
              position: 'relative',
              flexGrow: 1,
              flexBasis: 200,
            }}
          >
            <Image src="/coming_soon.svg" layout="fill" />
          </Box>
          <Typography
            gutterBottom
            variant="h2"
            component="h1"
            color="primary"
            align="center"
          >
            Coming Soon
          </Typography>
        </Box>
      </MainLayout>
    </Fragment>
  );
}

export default Blog;
