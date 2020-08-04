import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TableCard from '../../components/Cards/TableCard';
import ImageCard from '../../components/Cards/ImageCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '90%',
    // margin: 10
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  items: {
    width: '80%',
  },
}));

function Content() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: '-moz-center', margin: 50 }}>
      <div style={{ textAlign: '-webkit-center' }}>
        <Grid container className={classes.root} spacing={3}>
          <Grid item xs={12} sm={6}>
            <TableCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImageCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Content;