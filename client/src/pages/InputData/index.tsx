import { Button, CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import axios from "axios";
import { FileUpload } from "@mui/icons-material";

function InputData() {
  const [kpi, setKpi] = useState(null);
  const [products, setProducts] = useState(null);
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(false);
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
    if (!kpi || !products || !transaction) {
      setOpen(true);
      return;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("kpi", kpi);
      formData.append("products", products);
      formData.append("transaction", transaction);

      await axios.post("http://localhost:1337/data", formData);
      navigate("/");
      console.log("SUBMITTED DATA SUCCESSFULLY");
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 justify-center h-screen bg-[#2e2e2e] p-8">
      <div className="w-full max-w-3xl space-y-5">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <label
            htmlFor="kpi-file"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            KPI.csv
          </label>
          <label
            htmlFor="kpi-file"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            <FileUpload />
          </label>
          <input
            type="file"
            id="kpi-file"
            style={{color:"#03fcf8"}}
            accept=".csv"
            onChange={(e) => setKpi(e.target.files[0])}
            className="hidden"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <label
            htmlFor="products-file"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            Products.csv
          </label>
          <label
            htmlFor="products-file"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            <FileUpload />
          </label>
          <input
            type="file"
            style={{color:"#03fcf8"}}
            id="products-file"
            accept=".csv"
            onChange={(e) => setProducts(e.target.files[0])}
            className="hidden"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <label
            htmlFor="transaction-file"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            Transaction.csv
          </label>
          <label
            htmlFor="transaction-file"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "underline",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            <FileUpload />
          </label>
          <input
            type="file"
            id="transaction-file"
            style={{color:"#03fcf8"}}
            accept=".csv"
            onChange={(e) => setTransaction(e.target.files[0])}
            className="hidden"
          />
        </div>
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
        message="Please select all three files before submitting."
        action={action}
      />
    </div>
  );
}

export default InputData;