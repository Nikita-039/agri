"use client";

import { useState, useEffect } from "react";

export default function CropYield() {
  const [formData, setFormData] = useState({
    Year: "2013",
    average_rain_fall_mm_per_year: "",
    pesticides_tonnes: "",
    avg_temp: "",
    Area: "",
    Item: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setPrediction(data.prediction || data.error);
  };

  // Inject Bootstrap CDN once
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    link.integrity = "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="container my-5">
      {/* Page Header */}
      <header className="text-center mb-4">
      <h1 className="display-4 fw-bold" style={{ color: '#006d77' }}>🌾 Crop Yield Prediction</h1>
        <p className="text-muted">
          Enter agricultural parameters below to forecast crop yield using our machine learning model.
        </p>
      </header>

      {/* Form Card */}
      <div className="card shadow border-success bg-light">
        <div className="card-header bg-success text-white text-center">
          <h3 className="mb-0">Input All Required Features</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="Year" className="form-label">Year</label>
                <input type="number" className="form-control" name="Year" step="any" value={formData.Year} onChange={handleChange} />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="average_rain_fall_mm_per_year" className="form-label">Average Rainfall (mm/year)</label>
                <input type="number" className="form-control" name="average_rain_fall_mm_per_year" step="any" value={formData.average_rain_fall_mm_per_year} onChange={handleChange} />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="pesticides_tonnes" className="form-label">Pesticides Used (tonnes)</label>
                <input type="number" className="form-control" name="pesticides_tonnes" step="any" value={formData.pesticides_tonnes} onChange={handleChange} />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="avg_temp" className="form-label">Average Temperature (°C)</label>
                <input type="number" className="form-control" name="avg_temp" step="any" value={formData.avg_temp} onChange={handleChange} />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="Area" className="form-label">Country/Area</label>
                <input type="text" className="form-control" name="Area" value={formData.Area} onChange={handleChange} />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="Item" className="form-label">Crop Type</label>
                <input type="text" className="form-control" name="Item" value={formData.Item} onChange={handleChange} />
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3">
              Predict Yield
            </button>
          </form>

          {prediction && (
            <div className="alert alert-success text-center mt-4" role="alert">
              <h4 className="mb-0">Predicted Yield:</h4>
              <strong>{prediction}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
