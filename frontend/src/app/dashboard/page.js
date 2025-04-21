// frontend/app/dashboard/page.js

export default function Dashboard() {
  return (
    <div className="container-fluid py-5 bg-light text-center min-vh-100">
      {/* Header */}
      <header className="mb-5">
        <h1 className="display-4 fw-bold" style={{ color: '#006d77' }}>
          Agri AI Dashboard
        </h1>
        <p className="lead text-muted">
          Welcome to the Agri AI Smart Dashboard, your go-to platform for accurate crop yield and rainfall predictions.
        </p>
      </header>

      {/* Feature Cards in Row */}
      <div className="row justify-content-center g-4">
        {/* Crop Yield Card */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <div className="card-body text-start">
              <h3 className="card-title text-success fw-bold">🌾 Crop Yield Analysis</h3>
              <p className="card-text">
                Get data-driven insights into expected crop yields based on environmental parameters. Enter details like soil moisture, rainfall, and crop type to forecast productivity.
              </p>
              <p className="text-muted">
                This tool empowers farmers and planners to make smart, timely decisions for optimized agricultural output.
              </p>
              <a href="/crop-yield-analysis" className="btn btn-success mt-3">
                Go to Crop Yield Analysis
              </a>
            </div>
          </div>
        </div>

        {/* Rainfall Card */}
        <div className="col-md-6">
          <div className="card shadow border-0 h-100">
            <div className="card-body text-start">
              <h3 className="card-title text-primary fw-bold">🌧️ Rainfall Prediction</h3>
              <p className="card-text">
                Predict rainfall patterns using weather indicators like temperature, humidity, and wind speed. Our ML models provide accurate, region-based forecasts.
              </p>
              <p className="text-muted">
                Plan better, reduce risks, and improve yield with timely rainfall data at your fingertips.
              </p>
              <a href="/rainfall-prediction" className="btn btn-primary mt-3">
                Go to Rainfall Prediction
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-5 text-muted small">
        <p><strong>Agri Smart</strong> — Empowering Farmers with Data-driven Insights</p>
        <p>&copy; {new Date().getFullYear()} Agri Smart Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
