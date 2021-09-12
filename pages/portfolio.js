import { Fragment } from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MainLayout from '../components/MainLayout';
import Navigation from '../components/Navigation';
import ProjectList from '../components/ProjectList';
import Project from '../models/project';
import dbConnect from '../lib/dbConnect';

function Portfolio({ projects }) {
  return (
    <Fragment>
      <Head>
        <title>Melad Samuel - My Portfolio</title>
        <meta name="description" content="my portfolio" />
      </Head>
      <Navigation />
      <MainLayout>
        <Typography gutterBottom variant="h2" component="h1">
          My Projects
        </Typography>
        <Divider />
        {projects && <ProjectList projects={projects} />}
      </MainLayout>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  await dbConnect();
  const result = await Project.find({});
  const projects = result.map((doc) => {
    const project = doc.toObject();
    project._id = project._id.toString();
    project.since = project.since.toLocaleString();
    return project;
  });
  console.log(projects);
  return {
    props: {
      projects: projects,
    },
    revalidate: 86400,
  };
}

export default Portfolio;
