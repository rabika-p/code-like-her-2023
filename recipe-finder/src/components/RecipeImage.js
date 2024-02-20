import { CardMedia } from "@mui/material";

const RecipeImage = ({ imageUrl, altText }) => {
  return (
    <CardMedia
      component="img"
      image={imageUrl}
      alt={altText}
    />
  );
};

export default RecipeImage;
