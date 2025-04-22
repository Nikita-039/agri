"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RainfallPredict() {
  const [formData, setFormData] = useState({
    day: "",           // New field for 'day'
    pressure: "",
    maxtemp: "",       // New field for 'maxtemp'
    temparature: "",   // New field for 'temparature'
    mintemp: "",       // New field for 'mintemp'
    dewpoint: "",
    humidity: "",
    cloud: "",
    sunshine: "",
    winddirection: "",
    windspeed: "",
  });


  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:5001/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setPrediction(data.prediction || data.error);
    } catch (err) {
      setPrediction("Failed to connect to server.");
    }
  };

  return (
    <div className="container mt-5">
      {/* Page Header */}
      <header className="text-center mb-4">
        <h1 className="display-4 fw-bold" style={{ color: '#006d77' }}>☁️ Rainfall Prediction</h1>
        <p className="text-muted">Enter meteorological parameters below to estimate expected rainfall.</p>
      </header>

      {/* Form Card */}
      <div className="card shadow border-primary bg-light">
        <div className="card-header bg-primary text-white text-center">
          <h4 className="mb-0">Input Weather Features</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="day" className="form-label">Day</label>
                <input
                  type="number"
                  className="form-control"
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="maxtemp" className="form-label">Max Temperature</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="maxtemp"
                  value={formData.maxtemp}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="temparature" className="form-label">Temperature</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="temparature"
                  value={formData.temparature}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="mintemp" className="form-label">Min Temperature</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="mintemp"
                  value={formData.mintemp}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="pressure" className="form-label">Pressure</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="pressure"
                  value={formData.pressure}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="dewpoint" className="form-label">Dewpoint</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="dewpoint"
                  value={formData.dewpoint}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="humidity" className="form-label">Humidity</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="humidity"
                  value={formData.humidity}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="cloud" className="form-label">Cloud</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="cloud"
                  value={formData.cloud}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="sunshine" className="form-label">Sunshine</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="sunshine"
                  value={formData.sunshine}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="winddirection" className="form-label">Wind Direction</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="winddirection"
                  value={formData.winddirection}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="windspeed" className="form-label">Wind Speed</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="windspeed"
                  value={formData.windspeed}
                  onChange={handleChange}
                  required
                />
              </div>


            </div>

            <button type="submit" className="btn btn-primary w-100">Predict Rainfall</button>
          </form>
        </div>
      </div>

      {/* Prediction Result */}
      {prediction && (
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="alert alert-primary text-center" role="alert">
              <h5 className="mb-1">🌧️ Predicted Rainfall:</h5>
              <strong>{prediction}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
