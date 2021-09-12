import { Fragment } from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Navigation from '../components/Navigation';
import MainLayout from '../components/MainLayout';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Melad Samuel</title>
        <meta
          name="description"
          content="Hi, I'm melad samuel, i'm a freelancer engineer living in Egypt Passionate about software engineering and IoT."
        />
      </Head>
      <Navigation />
      <MainLayout>
        <Typography gutterBottom variant="h2" component="h1">
          Hi! I&apos;m Melad 👋
        </Typography>
        <Typography paragraph color="textSecondary">
          I&apos;m a freelancer engineer living in Egypt Skilled in python,
          javascript, PHP, and C++ programming languages. Passionate about
          software engineering and IoT.
        </Typography>
        <Typography paragraph color="textSecondary">
          I&apos;m planning to ✍️ write technical blog 🧑‍💻 posts here from
          time to time, also blogging about IoT and electronics.
        </Typography>
      </MainLayout>
    </Fragment>
  );
}
