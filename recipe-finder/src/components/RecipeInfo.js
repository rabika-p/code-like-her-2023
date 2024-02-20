import {
  CardContent,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

// Create a custom theme to override the default font
const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const RecipeInfo = ({ name, category, area }) => {
  return (
    <ThemeProvider theme={theme}>
      <CardContent>
        <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "500" }}>
          {name}
        </Typography>
        <div className="flex justify-between mt-3">
          <Typography
            variant="h2"
            color="text.secondary"
            sx={{ fontSize: "1rem" }}
          >
            Category: {category}
          </Typography>
          <Typography
            variant="h2"
            color="text.secondary"
            sx={{ fontSize: "1rem" }}
          >
            Area: {area}
          </Typography>
        </div>
      </CardContent>
    </ThemeProvider>
  );
};

export default RecipeInfo;
