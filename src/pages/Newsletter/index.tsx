import { Box, makeStyles, Paper, Theme, Typography } from "@material-ui/core"
import { useLocation } from "react-router-dom";
import queryString from 'query-string'
import Step1 from "./Step1";
import Step2 from "./Step2";

const lorem = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.`

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: theme.spacing(3)
    },
    paper: {
        maxWidth: 690,
        overflow: 'hidden',
        height: 500,
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            height: '100%',
        }
    },
    imageSide: {
        flex: 2,
        backgroundColor: '#dedede',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    formSide: {
        padding: theme.spacing(3),
        flex: 2.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    contentBox: {
        flex: 3
    },
    formWraper: {
        flex: 2
    },
    lorem: {
        lineHeight: 1.8
    },
    steperBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: theme.spacing(1, 2),
        maxWidth: 690,
        width: '100%',
        '& span': {
            color: theme.palette.text.secondary
        }
    },
    bgImg: {
        width: '100%', 
        height: '100%', 
        display: 'block', 
        objectFit: 'cover', 
        objectPosition: 'top center'
    }
}))

const Newsletter: React.FC = (props) => {
    const { search } = useLocation();
    const query: { step?: string } = queryString.parse(search);
    const classes = useStyles()

    const stepOneRule = !Object.keys(query).length || query?.step === '1';
    const stepTwooRule = query && query?.step === '2';
    const totalStep = '2';

    return (
        <Box className={classes.main}>
            <Paper elevation={1} className={classes.paper}>
                <Box className={classes.formSide}>
                    <Box className={classes.contentBox}>
                        <Typography variant='h6' >عضویت در خبرنامه</Typography>
                        <Typography variant='body2' className={classes.lorem}>{lorem}</Typography>
                    </Box>

                    <Box className={classes.formWraper}>
                        {stepOneRule && <Step1 />}
                        {stepTwooRule && <Step2 />}
                    </Box>

                </Box>
                <Box className={classes.imageSide}>
                    <img src={process.env.PUBLIC_URL + '/frontend-challenge/assets/images/bg-newsletter.jpg'} alt='form bg' className={classes.bgImg} />
                </Box>
            </Paper>

            <Box className={classes.steperBox}>
                <Typography variant='caption'>{`صفحه ${stepOneRule ? '1' : '2'} از ${totalStep}`}</Typography>
            </Box>

        </Box>
    )
}

export default Newsletter