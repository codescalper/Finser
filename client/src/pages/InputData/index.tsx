import { Button, CircularProgress, TextareaAutosize } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import axios from "axios";

function InputData() {
  const [kpi, setKpi] = useState("");
  const [loading, setLoading] = useState(false); 

  const [products, setProducts] = useState("");
  const [transaction, setTransaction] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="error" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color={"error"}
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleSubmit = async () => {
    // Handle form submission logic here
    if (
      kpi.trim() === "" ||
      products.trim() === "" ||
      transaction.trim() === ""
    ) {
      setOpen(true);
      // Notify the user to fill in all fields
      // alert("Please fill in all fields before submitting.");
      return;
    }
    try {
      // Send the input data to the backend server
      setLoading(true);
      await axios.post('http://localhost:1337/data', {
        kpi: JSON.parse(kpi),
        products: JSON.parse(products),
        transaction: JSON.parse(transaction),
      });
  
      // Navigate to the root path after successful submission
      navigate('/');
      console.log("SUBMITTEDDD DATA SUCCESSFULLY")
      console.log("KPI:", kpi);
      console.log("Products:", products);
      console.log("Transaction:", transaction);
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error if needed
    }finally{
      setLoading(false);
    }
  
  };

  return (
    <div className="flex flex-col items-center space-y-4 justify-center h-screen bg-[#2e2e2e] p-8">
      <div className="w-full max-w-3xl Space-y-5">
        <TextareaAutosize
          placeholder="Enter KPI"
          required
          value={kpi}
          onChange={(e) => setKpi(e.target.value)}
          className="w-full bg-[#4c4c4c] pl-5 text-white p-2 rounded-md resize-vertical font-mono ml-4"
          minRows={5}
          maxRows={10}
        />
        <TextareaAutosize
          placeholder="Enter Products"
          value={products}
          required
          onChange={(e) => setProducts(e.target.value)}
          className="w-full bg-[#4c4c4c] pl-5 text-white p-2 rounded-md resize-vertical font-mono mb-4"
          style={{ marginLeft: "16px" }}
          minRows={5}
          maxRows={10}
        />
        <TextareaAutosize
          placeholder="Enter Transaction"
          value={transaction}
          required
          onChange={(e) => setTransaction(e.target.value)}
          className="w-full bg-[#4c4c4c] text-white p-2 rounded-md resize-vertical font-mono mb-4"
          style={{ marginLeft: "16px" }}
          minRows={5}
          maxRows={10}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={handleSubmit}
        style={{ marginTop: "16px" }}
      >
          {loading ? <CircularProgress size={24} /> : "Submit"}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Hey please fill in each textbox and data in json format"
        action={action}
      />
    </div>
  );
}

export default InputData;
