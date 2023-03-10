import { Typography, Box, styled, Button } from '@mui/material';


const Container = styled(Box)( ({ theme }) => ({
    background: '#f44336',  
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',  
    height: 48,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Image = styled('img')({
    height: 34,
    '&: last-child': {
        margin: '0 50px 0 20px'
    }
});

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 300;
    margin-left: 50px;
`

const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Container>
            <Text>
                For the best experience use inshorts app on your smartphone
            </Text>
            <Box style={{ display: 'flex', marginLeft: 'auto'}}>
                <a target="_blank" href="https://apps.apple.com/us/app/news-in-shorts/id892146527">
                    <Button>
                        <Image src={appleStore} alt="applestore" />
                    </Button>
                </a>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website">
                    <Button>
                        <Image src={googleStore} alt="googlestore" />
                    </Button>
                </a>
            </Box>
        </Container>
    )
}

export default InfoHeader;