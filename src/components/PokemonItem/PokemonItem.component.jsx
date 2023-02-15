import React, {useState} from "react";
import s from "./style.module.css";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Chip } from "@material-ui/core";

const Receta = (props) => {
  const {
    id,
    name,
    img,
    imgShiny,
    types
  } = props;

  const [estado, setEstado] = useState(false);
  const selected = (state) => {
    setEstado(state);
  };

  const getBackgroundColor = () => {
    if (estado === true) {
      return "#bdea26";
    } else {
      return "white";
    }
  };
  const getBackgroundColor2 = () => {
    if (estado) {
      return "white";
    } else {
      return "#26baea";
    }
  };

  const typeColor = (type) => {
    if (type==='Grass') {
      return "#9bcc50";
    }
    if (type==='Poison') {
      return '#b97fc9'
    }
    if (type==='Fire') {
      return '#fd7d24'
    }
    if (type==='Flying') {
      return '#3dc7ef;'
    }
    if (type==='Water') {
      return '#4592c4'
    }
    if (type==='Ice') {
      return '#51c4e7'
    }
    if (type==='Electric') {
      return '#eed535'
    }
    return true;
  }

  return (
    
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 60,
        paddingInline: 5
      }}
    >
      <Card sx={{ maxWidth: 100}}>
        {estado === true ?
          <CardMedia
            component="img"
            alt="green iguana"
            height="160"
            src={imgShiny}
            class="center"
          /> : <CardMedia
            component="img"
            alt="green iguana"
            height="160"
            src={img}
            class="center"
          />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography component="div">
            #<span>{id}</span>
          </Typography>
          <div className={s.types}>
            {types.map((type, index) => 
            <Chip key={index} label={type} style={{ backgroundColor: typeColor(type), margin: 2 }} size="small" />
            )}
          </div>
        </CardContent>
        <CardActions>
          <Button 
            size="small" 
            onClick={() => selected(false)}
            style={{ backgroundColor: getBackgroundColor2() }}
            >
              Normal
          </Button>
          <Button 
            size="small" 
            onClick={() => selected(true)}
            style={{ backgroundColor: getBackgroundColor() }}
            >
              Shiny
          </Button>
        </CardActions>
      </Card>
      
    </div>
  );
};

export default Receta;
