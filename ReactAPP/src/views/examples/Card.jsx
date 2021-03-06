import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
  },
  media: {
    width:250,
    height: 250,
  },
});

var mybucket = "https://yourbucketname.s3.amazonaws.com/";

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mybucket+input.jpg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.gen}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.hr}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.temp}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.stat}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Button 1
        </Button>
        <Button size="small" color="primary">
          Button 2
        </Button>
      </CardActions>
    </Card>
  );
}

