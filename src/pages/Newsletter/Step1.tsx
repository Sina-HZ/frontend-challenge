import { Box, makeStyles, TextField, Theme, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MyButton from "../../components/general/Button";
import UserStore from "../../stores/User";
import { IUser } from "../../types/user";

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }
}))

const Step1 = () => {
    const { control, handleSubmit } = useForm<Pick<IUser, 'name' | 'age'>>({
        mode: "onSubmit",
        defaultValues: {
            name: UserStore.name,
            age: UserStore.age
        },
    });

    const classes = useStyles();
    const history = useHistory()

    const newsLetterFieldRules = {
        name: {
            required: {
                value: true,
                message: 'تکمیل این بخش الزامی است',
            },
        },
        age: {
            required: {
                value: true,
                message: 'تکمیل این بخش الزامی است',
            },
            min: {
                value: 18,
                message: 'حداقل سن ۱۸ سال است'
            },
            max: {
                value: 99,
                message: 'حداکثر سن ۹۹ سال است'
            },
            pattern: {
                value: /^[0-9]*$/i,
                message: 'فقط عدد وارد کنید'
            }
        }
    }


    const _onSubmit: SubmitHandler<Pick<IUser, 'name' | 'age'>> = (data: any) => {
        UserStore.update(data);
        history.push('/newsletter?step=2', data)
    }

    return (
        <Box className={classes.main}>
            <form onSubmit={handleSubmit(_onSubmit)}>
                <Box>
                    <Controller
                        name="name"
                        control={control}
                        rules={newsLetterFieldRules.name}
                        defaultValue=''
                        render={({ field, fieldState, formState }) => (
                            <TextField
                                color='primary'
                                variant='outlined'
                                size='small'
                                label='نام و نام خانوادگی'
                                fullWidth
                                helperText={formState.errors.name?.message}
                                error={!!formState.errors.name}
                                inputRef={field.ref}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="age"
                        control={control}
                        rules={newsLetterFieldRules.age}
                        defaultValue=''
                        render={({ field, fieldState, formState }) => (
                            <TextField
                                color='primary'
                                variant='outlined'
                                size='small'
                                label='سن'
                                fullWidth
                                style={{ marginTop: 16 }}
                                inputProps={{ maxLength: 3 }}
                                helperText={formState.errors.age?.message}
                                error={!!formState.errors.age}
                                inputRef={field.ref}
                                {...field}
                            />
                        )}
                    />

                </Box>
                <Box mt={3}>
                    <MyButton onClick={handleSubmit(_onSubmit)} type='submit' >
                        <Typography>تایید و مرحله بعد</Typography>
                    </MyButton>
                </Box>
            </form>
        </Box>
    )
}

export default observer(Step1);