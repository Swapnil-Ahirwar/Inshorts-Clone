import { Card, CardContent, Grid, Typography } from "@mui/material";




const Article = ({ data }) => {
    return (
        <Card key={data._id}>
            <CardContent>
                <Grid container>
                    <Grid lg={5} sm={5} xs={12} item>
                        <img src={data.url} />
                    </Grid>
                    <Grid lg={7} md={7} sm={7} xs={12} item>
                        <Typography>{ data.title}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}


export default Article;