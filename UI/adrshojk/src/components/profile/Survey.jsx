import React, { useState } from 'react'
import { Button, FormControl, Snackbar, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SurveyView from './SurveyView'
import { connect, useDispatch } from 'react-redux'
import { addAction, updateAction } from '../../redux/actions/surveyActions';
const useStyles = makeStyles((theme) => ({
    survey: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.success.light,

    },
    input: {
        width: '500px',
        maxWidth: '90vw'
    }
}));
const Survey = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState({
        place: '',
        description: '',
    })
    const [surveyData, setSurveyData] = useState([])
    const [notification, setNotification] = useState({
        open: false,
        message: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const { place, description } = userInput
        let valid = ((place === '') || (description === '')) ? false : true



        if (valid) {
            const data = {
                id: surveyData.length + 1,
                place,
                description
            }

            addData(data)
            if (userInput.id) {
                dispatch(updateAction(data, userInput.id))
            } else {

                dispatch(addAction(data))
            }
            setUserInput({
                place: '',
                description: '',
                placeErr: '',
                descriptionErr: ''
            })
            setNotification({
                open: true,
                message: "submitted successfully"
            })
        } else {
            setNotification({
                open: true,
                message: "failed : empty fields"
            })
        }
    }

    const addData = (data) => {
        setSurveyData([{ data }])
    }



    console.log({ surveyData });
    const handleChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value,
            [e.target.name + 'Err']: ''
        })
        console.log(e.target.value);
    }
    console.log({ userInput });

    const handleUpdate = (id) => {
        setUserInput({ id, ...props.data[id - 1] })

    }

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setNotification({
            open: false,
            message: ''
        })
    }


    return (
        <div className={classes.survey}>
            <h2>
                Places You love And Why
            </h2>
            <form className={classes.form} onSubmit={handleSubmit}>
                <FormControl className={classes.input}>
                    <TextField name='place' id="outlined-basic" label="Place" variant="outlined"
                        onChange={(e) => handleChange(e)}
                        value={userInput.place}
                    />

                </FormControl>
                <br />
                <br />
                <FormControl className={classes.input} >


                    <TextField
                        name='description'
                        id="outlined-multiline-static"
                        label="Why you love this place ?"
                        multiline
                        coloums={12}
                        rows={4}
                        variant="outlined"
                        onChange={(e) => handleChange(e)}
                        value={userInput.description}
                    />

                </FormControl>
                <br />
                <br />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    defaultValue="Default Value"

                >
                    submit
          </Button>
                <Snackbar open={notification.open}
                    autoHideDuration={2000}
                    message={notification.message}
                    onClose={handleClose}
                />


            </form>
            <br />
            <SurveyView value={{ handleUpdate, setNotification }} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        data: state.surveyData
    }
}

export default connect(mapStateToProps)(Survey)
