import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Ingredients = ({ ingredients }) => {
  return (
    <Card variant={"outlined"} sx={{width: "30%",  padding: "1%", marginLeft: "2%"}}>
      <CardHeader title="Ingredients" />
      <List sx={{ marginBottom: "8px" }}>
        {ingredients.map((ingredient, index) => (
          <ListItem key={index}>
            <ListItemText primary={ingredient} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Ingredients;
