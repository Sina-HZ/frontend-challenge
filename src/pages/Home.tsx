import { Box, Button, makeStyles, Paper, Theme, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: theme.spacing(3)
    },
    paper: {
        maxWidth: 600,
        padding: theme.spacing(3)
    }
}))

const Home = () => {
    const classes = useStyles()

    return (
        <Box className={classes.main}>
            <Paper elevation={1} className={classes.paper}>
                <Box>
                    <Typography gutterBottom>برای اطلاع از آخرین آگهی‌ها و جذاب ترین قیمت‌ها می‌توانید در خبرنامه سایت عضو شوید تا این اطلاعات برای شما ارسال شود.</Typography>
                    <Link to='/newsletter'>
                        <Button color='primary' variant='contained'>
                            <Typography>عضویت در خبرنامه</Typography>
                        </Button>
                    </Link>
                </Box>
            </Paper>
        </Box>
    )
}

export default Home