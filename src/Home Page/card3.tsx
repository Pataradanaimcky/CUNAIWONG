import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Rating } from '@mui/material';
import { useState,useEffect } from 'react';
import axios from 'axios';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface Content {
  userwhocomment: string;
  description: string;
  rating: number;
  _id: string;

}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false); 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [contents,setContents] = useState<Content[]>([]);
  const [loading,setLoading] = useState(true);
  const [click,setClick] = useState(false);
  async function fetchContents() {
      const res = await axios.get("http://localhost:42069/review");
      setContents(res.data);
      setLoading(false);
    }
    
    useEffect(() => {
        fetchContents()
    }, []);
    const reverse_array = [...contents].reverse()
    const first_con = reverse_array[2]
  function handleClick() {
    setClick(!click);
  }
  if (loading) return <h1>Loading...</h1>;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={first_con.userwhocomment}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/crispychicken-basil-plant-based.png?itok=ooEpcL_M"
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={handleClick} style={{color:click?"red":"gray"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Box>
          <Rating name="read-only" value={first_con.rating} readOnly />
        </Box>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Description
          </Typography>
          <Typography paragraph>
            {first_con.description}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
