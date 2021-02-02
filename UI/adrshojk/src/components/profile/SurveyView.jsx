import React from 'react';
import { connect, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { deleteAction } from '../../redux/actions/surveyActions';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});
const SurveyView = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const { data,value } = props
  console.log('from view', props);


  const handleDelete = (id) => {
    dispatch(deleteAction(id))
    value.setNotification({
      open:true,
      message:"Deleted Successfully"
    })
  }
    
  data.length === 0 && (<div>Nothing to show</div>)

  return (
    <Container>
      {
        data.map(info =>
        (<Card className={classes.root} variant="outlined" key={info.id}>
          <CardContent>

            <Typography variant="h5" component="h2">
              {info.place}
            </Typography>

            <Typography variant="body2" component="p">
              {info.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleDelete(info.id)}>Delete</Button>
            <Button size="small" onClick={() => value.handleUpdate(info.id)} >Edit</Button>
          </CardActions>
        </Card>)
        )
      }
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.surveyData
  }
}

export default connect(mapStateToProps)(SurveyView)