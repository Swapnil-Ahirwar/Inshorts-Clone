import { styled, AppBar, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';


const StyledHeader = styled(AppBar)`
    background: #fff;
    height: 70px
`;

const MenuIcon = styled(Menu)`
    color: #000;
`;

const Image = styled('img')({
    height: 55,
    margin: 'auto',
    paddingRight: 70
});

const MenuText = styled(Typography)`
    color: #44444d;
    font-size: 13px;
`


const Header = () => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <StyledHeader position='static'>
            
            <Toolbar>
                <MenuIcon /><span><MenuText>Menu</MenuText></span>
                <Image src={url} alt='logo' />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;