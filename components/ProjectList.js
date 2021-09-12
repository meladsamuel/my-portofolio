import ProjectItem from './ProjectItem';
import Grid from '@mui/material/Grid';

function ProjectList({ projects }) {
  return (
    <Grid container spacing={2} sx={{ paddingTop: 2 }}>
      {projects.map((project) => (
        <Grid key={project._id} item xs={12} md={6}>
          <ProjectItem
            name={project.name}
            description={project.description}
            image={project.image}
            url={project.projectUrl}
            repo={project.repoUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
}
export default ProjectList;
