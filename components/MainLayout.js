import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Container from '@mui/material/Container';
const variants = {
  hidden: { opacity: 0, x: -400, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

function MainLayout({ children }) {
  return (
    <Container
      sx={{
        flexGrow: 1,
        display: 'flex',
        overflow: { sm: 'hidden' },
        flexDirection: { xs: 'column', sm: 'row' },
        marginY: 3,
      }}
    >
      <Hero />
      <Paper
        component={motion.main}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="hidden"
        transition={{ type: 'linear' }}
        sx={{
          flexGrow: 1,
          display: 'flex',
          overflow: 'hidden',
          marginY: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
            padding: 2,
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
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
    </Container>
  );
}
MainLayout.propTypes = {
  children: PropTypes.element,
};
export default MainLayout;
