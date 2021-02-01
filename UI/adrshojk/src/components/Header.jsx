import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color:theme.palette.success.main,
    },
}));
export const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography component="h1" variant="h5" className={classes.header}>
                   Trois Challenge 
        </Typography>
        </div>
    )
}
