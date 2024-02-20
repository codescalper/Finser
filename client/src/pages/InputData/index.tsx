import { Button, Modal, Box, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

function InputData() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    handleOpen();
    navigate("/");
  };

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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default InputData;
