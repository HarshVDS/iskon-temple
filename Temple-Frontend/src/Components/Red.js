import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import NestedList from '../NestedList';

export default function AnchorTemporaryDrawer() {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        event.preventDefault();
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/aboutus' },
        { name: 'Key Features', path: '/services' },
        { name: 'Donor', path: '/causes' },
        { name: 'Contact Us', path: '/contactus' },
        { name: 'Donation', path: '/donation' }
    ];

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
           
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List >  
                {menuItems.map((item, index) => (
                    <ListItem onClick={toggleDrawer(anchor, false)} key={index} disablePadding button component={Link} to={item.path}>
                        <ListItemButton>
                            <ListItemText primary={item.name} className='sidebar-list' />
                        </ListItemButton>
                        
                    </ListItem>
                    
                ))}
            <NestedList />   
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Button type="button" onClick={toggleDrawer("right", true)}>
                    <MenuIcon style={{ fontSize: "35px" }} className="bx bx-menu" />
                </Button>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
                
            </React.Fragment>
        </div>
    );
}
