// Import the necessary modules from Material UI
import { Button, Modal, Box, TextareaAutosize } from "@mui/material";
import { useState } from "react";

// Define a custom style for the modal
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#2e2e2e",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// Define the InputData component
function InputData() {
  // Use a state variable to control the modal visibility
  const [open, setOpen] = useState(false);

  // Define a function to handle the button click
  const handleOpen = () => setOpen(true);

  // Define a function to handle the modal close
  const handleClose = () => setOpen(false);

  // Return the JSX element
  return (
    <div className="flex items-center justify-center h-screen">
      <Button
        variant="contained"
        className="flex items-center justify-center"
        onClick={handleOpen}
      >
        Input Data
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <h2 id="modal-title" style={{ color: "white" }}>
            Enter your data
          </h2>
          <TextareaAutosize
            id="modal-description"
            aria-label="Enter your data"
            minRows={10}
            placeholder="Enter your data here"
            style={{ width: "100%" }}
          />
          <Button
            variant="contained"
            className="flex items-center justify-center"
            onClick={handleOpen}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default InputData;
