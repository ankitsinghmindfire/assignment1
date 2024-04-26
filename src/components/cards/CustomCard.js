import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

import LoveSmile from "../../assets/icons/🦆 icon _love smiley_.png";
import Rating from "../../assets/icons/Component 46.png";
import "./CustomCard.css";

export default function CutomCard({ image, price, title, rating }) {
  console.log(new Array(Math.floor(rating)).fill(1));
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150px"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <div className="bodyContainer">
            <div>
              <p className="titleText">{title}</p>
              <p className="price">${price}</p>
            </div>
            <img src={LoveSmile} />
          </div>
          <div className="ratings">
            <div>
              {new Array(Math.round(rating)).fill(1).map((el) => (
                <span className="rating">
                  <img src={Rating} />
                </span>
              ))}
            </div>
            <p className="ratingsText">
              {Math.round(rating * Math.random() * 50)} ratings
            </p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
