import Link from 'next/link';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Fragment } from 'react';

const ButtonLink = ({ className, href, hrefAs, children }) => (
  <Link href={href} as={hrefAs} scroll={false}>
    <a className={className}>{children}</a>
  </Link>
);

function Navigation() {
  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component={ButtonLink}
            href="/"
            color="inherit"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 32,
            }}
          >
            <Image src="/favicon.ico" width="32" height="32" />
          </Box>
          <Box flexGrow={1} />
          <Stack spacing={1} direction="row">
            <Button component={ButtonLink} href="/portfolio" color="inherit">
              Portfolio
            </Button>
            <Button component={ButtonLink} href="/contact" color="inherit">
              contact
            </Button>
            <Button
              component={ButtonLink}
              href="/blog"
              color="primary"
              variant="contained"
            >
              blog
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}

export default Navigation;
