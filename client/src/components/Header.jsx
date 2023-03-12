import { styled, AppBar, Toolbar, Typography, Button } from '@mui/material';
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
    paddingLeft: 500
});

const MenuText = styled(Typography)`
    color: #44444d;
    font-size: 13px;
`


const Header = () => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <StyledHeader position='sticky'>
            
            <Toolbar>
                <MenuIcon /><span><MenuText>Menu</MenuText></span>
                <a target="_blank" href='https://www.inshorts.com/'>
                    <Button>
                        <Image src={url} alt='logo' />
                    </Button>
                </a>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;