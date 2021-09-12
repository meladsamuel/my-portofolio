import Image from 'next/image';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

function ProjectItem(props) {
  const [readMore, setReadMore] = useState(false);
  const readMoreIcon = readMore ? (
    <KeyboardArrowUpIcon />
  ) : (
    <KeyboardArrowDownIcon />
  );
  const handleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };
  return (
    <Card elevation={4}>
      <CardActionArea component="a" href={props.url} target="_blank">
        <CardMedia
          sx={{
            paddingTop: `${(9 / 16) * 100}%`,
            flexGrow: 1,
            position: 'relative',
          }}
        >
          <Image src={props.image} alt={props.name} layout="fill" />
        </CardMedia>
        <CardContent sx={{ overflow: 'hidden' }}>
          <Typography
            noWrap={!readMore}
            variant="h6"
            color="textPrimary"
            component="h2"
          >
            {props.name}
          </Typography>
          <Typography
            noWrap={!readMore}
            align="justify"
            color="textSecondary"
            component="p"
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton component="a" href={props.repo} target="_blank">
          <GitHubIcon />
        </IconButton>
        <Box flexGrow={1} />
        <Button onClick={handleReadMore} endIcon={readMoreIcon}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProjectItem;
