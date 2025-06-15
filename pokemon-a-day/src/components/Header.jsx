import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="primary" sx={{ color: 'gold', backgroundColor: '#000BA3'}}>
      <Toolbar>
        <Typography variant="h4" component="div">
          Pokemon-a-Day
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
