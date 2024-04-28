import { Button, CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import axios from "axios";
import { FileUpload } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function InputData() {
  const [kpi, setKpi] = useState(null);
  const [products, setProducts] = useState(null);
  const [transaction, setTransaction] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [kpisJson, setKpiJson] = useState<any[]>([]); 
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

  const sendPostRequestAndSaveJSON = async (csvFile, key) => {
    const formData = new FormData();
    formData.append("email", "msfunbook@gmail.com");
    formData.append("csv", csvFile);

    const response = await axios.post(
      "https://cors-finser-v1.onrender.com/https://data.page/api/getjson",
      formData,
      {}
    );
    const jsonData = response.data;
    console.log(`Converted ${key} to JSON`);
    return jsonData;
  };

  const handleSubmit = async () => {
    if (!kpi || !products || !transaction) {
      setOpen(true);
      return;
    }
    try {
      setLoading(true);

      const kpiContent = await readFileContent(kpi);
      const productsContent = await readFileContent(products);
      const transactionContent = await readFileContent(transaction);

      const kpiJson = await sendPostRequestAndSaveJSON(kpiContent, "KPI");
      const productJson = await sendPostRequestAndSaveJSON(productsContent, "Products");
      const transactionJson = await sendPostRequestAndSaveJSON(transactionContent, "Transaction");
      setKpiJson(kpiJson);

      await axios.post('https://finser-v1.onrender.com/data', { 
        kpi: kpiJson, 
        products: productJson, 
        transaction: transactionJson 
      });
      
      console.log("SUBMITTED DATA SUCCESSFULLY");
      console.log("KPI JSON:", kpisJson);
      console.log("Products JSON:", productJson);
      console.log("Transaction JSON:", transactionJson);
      navigate('/');
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setLoading(false);
    }
  };


  const readFileContent = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (event) => {
        reject(event.target.error);
      };
      reader.readAsText(file);
    });
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