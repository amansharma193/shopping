import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['Categories', 'Deals', `What's New`, 'Pickup & Delivery'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavbarFixed(props:any) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const {onInputChange,setCartToggle} = props;


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };  

  const handleInputChange = (event:any) => {
    const value = event.target.value;
    setSearchInputValue(value);
    onInputChange(value);
  }

  const handleCartToggle=()=>{
    const value = !cartIsOpen;
    setCartIsOpen(value);
    setCartToggle(value);
  }

  const Search: any = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgb(247, 247, 247)',
    '&:hover': {
      backgroundColor: 'rgb(247,247,247)',
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '35%'
  }));
  
  const SearchIconWrapper: any = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    position: 'relative',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em)`,
      transition: theme.transitions.create('width'),
      width: '-webkit-fill-available'
    },
    width:"-webkit-fill-available"
  }));

  return (
    <AppBar position="fixed" sx={{backgroundColor: 'white'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M12 1c6.074 0 10.999 4.925 10.999 11 0 6.074-4.925 10.999-11 10.999-6.074 0-10.999-4.925-10.999-11C1 5.925 5.925 1 12 1Zm0 18.173a7.174 7.174 0 1 0-.001-14.347 7.174 7.174 0 0 0 0 14.347Zm0-3.653a3.52 3.52 0 1 1 0-7.04 3.52 3.52 0 0 1 0 7.04Z"></path></svg>
        </div>
          <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, fontSize:'16px'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className='navbarFont'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>    
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 2, color: 'rgb(51,51,51)', fontWeight:'bolder' , display: 'block' }}
              >
                {page}  
              </Button>
            ))}
          </Box>
          <Search sx={{ flexGrow:1, display: { xs: 'flex', md: 'flex' }, color: 'rgb(51, 51, 51)' }}>
            <StyledInputBase
              className='searchInput'
              placeholder="What can we help you find?"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleInputChange}
              value={searchInputValue}
              type='text'
              autoFocus={true}
            />
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img alt="Account" id="profilePicture" src="https://target.scene7.com/is/content/Target/GUEST_459579d1-8996-4e3c-889a-a975f12c0fd4" />
                <Typography
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'none', md:'inline', lg:'inline' }, fontSize: '14px', color: 'rgb(51,51,51)', padding: '7px' }}
                    >
                    Sign In
                </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box onClick={handleCartToggle} className='cart' sx={{  display: { xs: 'flex', md: 'flex' } }}>
            <svg className='cartlogo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M5.625 19.25c.77 0 1.375.605 1.375 1.375S6.395 22 5.625 22s-1.375-.605-1.375-1.375.605-1.375 1.375-1.375Zm13 0c.77 0 1.375.605 1.375 1.375S19.395 22 18.625 22s-1.375-.605-1.375-1.375.604-1.375 1.375-1.375ZM1.135 2.212l2.962.543 18.762 2.622-2.29 7.853-13.855.492.368 2.167c.094.558.55.977 1.103 1.034l.13.007H20.25v1.5H8.314a2.75 2.75 0 0 1-2.677-2.12l-.034-.17-.427-2.514L3.36 4.144.865 3.688l.27-1.476Zm3.798 2.175 1.503 7.844 12.996-.462 1.5-5.147-16-2.235Z"></path></svg>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarFixed;