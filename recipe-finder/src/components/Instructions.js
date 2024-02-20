import { Card, CardHeader, List, ListItem, ListItemText } from "@mui/material";

const Instructions = ({ instructions }) => {
  return (
    <Card variant={"outlined"}  sx={{ width: "82%", padding: "1%", marginTop: "2%" }}>
      <CardHeader title="Instructions" />
      <List sx={{ padding: "16px" }}>
        <ListItem disablePadding>
          <ListItemText primary={instructions} />
        </ListItem>
      </List>
    </Card>
  );
};

export default Instructions;
