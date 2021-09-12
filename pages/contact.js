import { Fragment } from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Navigation from '../components/Navigation';
import MainLayout from '../components/MainLayout';
import Form from '../components/Form';

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Melad Samuel - Contact with me</title>
        <meta
          title="description"
          content="please feel free to contact with me."
        />
      </Head>
      <Navigation />
      <MainLayout>
        <Typography gutterBottom variant="h2" component="h1">
          Contact
        </Typography>
        <Divider />
        <Form />
      </MainLayout>
    </Fragment>
  );
}
export default Contact;
