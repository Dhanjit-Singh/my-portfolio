import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import headImg from '../assets/img/menu-img.jpg';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <AppBar className='appbar'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link to="/" className='heade-name'>Dhanjit</Link>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='head-menu'>

                            <Button>
                                <Link to="/" className='head-submenu'>Home</Link>
                            </Button>

                            <Button>
                                <Link to="/about" className='head-submenu'>About</Link>
                            </Button>

                            <Button>
                                <Link to="/service" className='head-submenu'>Services</Link>
                            </Button>

                            <Button>
                                <Link to="/contact" className='head-submenu'>Contact</Link>
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="it's me">
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt="Dhanjit Kumar" src={headImg} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}


export default Header;