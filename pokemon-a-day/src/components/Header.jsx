import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import PokeballLogo from '../../pokeball.svg';

const Header = () => {
  return (
      <AppBar position="static" color="primary" sx={{ color: 'gold', backgroundColor: '#000BA3' }}>
        <Toolbar>
          <Box display="flex" alignItems="center">
            <Box
              component="img"
              src={PokeballLogo}
              alt="Pokeball Logo"
              sx={{ height: 40, width: 40, mr: 1 }}
            />
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              Pokemon-a-Day
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
