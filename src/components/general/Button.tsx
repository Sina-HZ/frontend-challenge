import { Button, ButtonProps, makeStyles, Theme } from "@material-ui/core"

const useStyle = makeStyles((theme: Theme) => ({
    button: {
        boxShadow: 'none'
    }
}))

const MyButton: React.FC<ButtonProps> = (props) => {
    const classes = useStyle();

    return (
        <Button
            variant='contained'
            color='primary'
            className={classes.button}
            {...props}
        >
            {props.children}
        </Button>
    )
}

export default MyButton