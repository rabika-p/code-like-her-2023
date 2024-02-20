import { Button } from "@mui/material";

const ButtonComponent = ({ onClick, buttonText }) => {
  return (
    <div className="flex justify-center p-4">
      <Button
        size="small"
        color="primary"
        variant="contained"
        sx={{
          backgroundColor: "#0F6C95",
          width: "155px",
          height: "40px",
          color: "white",
          "&:hover": {
            backgroundColor: "#0B516F",
          },
        }}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ButtonComponent;
