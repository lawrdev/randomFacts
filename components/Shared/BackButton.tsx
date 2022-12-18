import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function BackBtn() {
  return (
    <div>
      <Button
        variant="text"
        onClick={() => {
          window.history.go(-1);
        }}
        size="small"
        sx={{
          marginTop: "20px",
          textTransform: "none",
          color: "#a3195b",
        }}
        startIcon={<ArrowBackIosIcon />}
        className="mb-3"
      >
        Back
      </Button>
    </div>
  );
}

export default BackBtn;
