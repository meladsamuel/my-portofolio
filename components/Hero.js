import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { styled } from '@mui/material/styles';

const CardCover = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: 'inherit',
  backgroundImage: 'inherit',
  '& > img': {
    width: '100%',
  },
  '&::before, &::after': {
    content: '""',
    width: '100%',
    height: '120px',
    backgroundColor: 'inherit',
    backgroundImage: 'inherit',
    position: 'absolute',
    bottom: '-90px',
  },
  '&:after': {
    left: '-50px',
    transform: 'rotate(14deg)',
  },
  ' &:before': {
    right: '-50px',
    transform: 'rotate(-14deg)',
  },
}));

function Hero() {
  return (
    <Card
      elevation={4}
      sx={{
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        flexBasis: { sm: 345 },
        minWidth: { sm: 345 },
        justifyContent: 'space-between',
      }}
    >
      <CardCover>
        <CardMedia
          component="img"
          image="https://melad-samuel.web.app/photo.jpg"
          alt="Melad Samuel"
        />
      </CardCover>
      <CardContent>
        <Typography gutterBottom align="center" variant="h4">
          Melad Samuel
        </Typography>
        <Typography
          paragraph
          variant="subtitle1"
          align="center"
          color="textSecondary"
        >
          Freelancer Engineer
        </Typography>
        <Typography align="center">
          <IconButton
            component="a"
            href="https://github.com/MeladSamuel"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/MeladSamuel"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/MeladSamuel2"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          variant="text"
          fullWidth={true}
          color="primary"
          size="large"
        >
          <Button startIcon={<CloudDownloadIcon />}>resume</Button>
          <Button startIcon={<PhoneIcon />}>contact</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
export default Hero;
