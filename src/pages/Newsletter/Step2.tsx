import { Box, Collapse, makeStyles, MenuItem, TextField, Theme, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import MyButton from "../../components/general/Button";
import UserStore from "../../stores/User";
import { IUser, newsletterPeriodEnum } from "../../types/user";
import { createUser } from 'sdk'
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    alert: {
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.main,
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(1)
    },
    actionFooter: {
        display: 'flex',
        marginTop: theme.spacing(3),
        justifyContent: 'space-between'
    }
}))

const Step2 = () => {
    const { control, handleSubmit } = useForm<Pick<IUser, 'email' | 'newsletter'>>({
        mode: "onSubmit",
        defaultValues: {
            email: UserStore.email,
            newsletter: UserStore.newsletter
        },
    });
    const [loading, setLoading] = useState(false)
    const [isSubmited, setSubmited] = useState(false)

    const classes = useStyles()
    const history = useHistory()

    const _onSubmit: SubmitHandler<Pick<IUser, 'email' | 'newsletter'>> = async (data) => {
        try {
            setLoading(true);
            UserStore.update(data);
            await createUser(UserStore.getUser());
            setLoading(false)
            setSubmited(true)
        } catch (error) {
            console.log(error)
        }
    }

    const _onBackHandler = () => {
        history.goBack()
    }

    const newsLetterFieldRules = {
        email: {
            required: {
                value: true,
                message: 'تکمیل این بخش الزامی است',
            },
            pattern: {
                /* eslint-disable */
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'ایمیل وارد شده صحیح نمی باشد'
            }
        },
        newsletter: {
            required: {
                value: true,
                message: 'تکمیل این بخش الزامی است',
            },
        }
    }

    if (!UserStore.name || !UserStore.age) {
        return (
            <Redirect to='/newsletter' />
        )
    }

    return (
        <Box className={classes.main}>
            <form onSubmit={handleSubmit(_onSubmit)}>
                <Box>
                    <Controller
                        name="email"
                        control={control}
                        rules={newsLetterFieldRules.email}
                        defaultValue=''
                        render={({ field, fieldState, formState }) => (
                            <TextField
                                color='primary'
                                variant='outlined'
                                size='small'
                                label='ایمیل'
                                fullWidth
                                helperText={formState.errors.email?.message}
                                error={!!formState.errors.email}
                                inputRef={field.ref}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="newsletter"
                        control={control}
                        rules={newsLetterFieldRules.newsletter}
                        defaultValue={newsletterPeriodEnum.weekly}
                        render={({ field, fieldState, formState }) => (
                            <TextField
                                color='primary'
                                variant='outlined'
                                size='small'
                                label='دوره ارسال'
                                select
                                fullWidth
                                style={{ marginTop: 16 }}
                                helperText={formState.errors.newsletter?.message}
                                error={!!formState.errors.newsletter}
                                inputRef={field.ref}
                                {...field}
                            >
                                <MenuItem value={newsletterPeriodEnum.daily}>روزانه</MenuItem>
                                <MenuItem value={newsletterPeriodEnum.weekly}>هفتگی</MenuItem>
                                <MenuItem value={newsletterPeriodEnum.monthly}>ماهانه</MenuItem>
                            </TextField>
                        )}
                    />

                </Box>

                <Box className={classes.actionFooter}>
                    <MyButton onClick={handleSubmit(_onSubmit)} type='submit' disabled={loading}>
                        <Typography>ارسال</Typography>
                    </MyButton>
                    <MyButton variant='text' onClick={_onBackHandler} disabled={loading}>
                        <Typography>بازگشت</Typography>
                    </MyButton>
                    <Collapse in={isSubmited} >
                        <Box className={classes.alert}>
                            <Typography color='inherit' variant='body2'>{`درخواست شما با موفقیت ثبت شد`}</Typography>
                        </Box>
                    </Collapse>
                </Box>

            </form>
        </Box>
    )
}

export default observer(Step2);