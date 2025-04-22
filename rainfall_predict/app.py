from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load the saved model
loaded_model = joblib.load("rainfall_prediction_model_new.pkl")

# Feature order
feature_names = [
    'day',
    'pressure',
    'maxtemp',
    'temparature',
    'mintemp',
    'dewpoint',
    'humidity',
    'cloud',
    'sunshine',
    'winddirection',
    'windspeed'
]

@app.route("/")
def home():
    return "Rainfall prediction API is running"

@app.route("/predict", methods=['POST'])
def predict():
    try:
        # Assuming JSON payload from Next.js
        data = request.get_json()

        # Extracting the features from the incoming data
        input_data = [[
            float(data.get('day', 0)),        # Default 0 if 'day' is not provided
            float(data['pressure']),
            float(data.get('maxtemp', 0)),    # Default 0 if 'maxtemp' is not provided
            float(data.get('temparature', 0)),# Default 0 if 'temparature' is not provided
            float(data.get('mintemp', 0)),    # Default 0 if 'mintemp' is not provided
            float(data['dewpoint']),
            float(data['humidity']),
            float(data['cloud']),
            float(data['sunshine']),
            float(data['winddirection']),
            float(data['windspeed'])
        ]]

        # Convert the input into a DataFrame with the correct feature names
        input_df = pd.DataFrame(input_data, columns=feature_names)
        
        # Model prediction
        prediction = loaded_model.predict(input_df)
        
        # Return the prediction result
        result = "Rainfall" if int(prediction[0]) == 1 else "No Rainfall"

        return jsonify({"prediction": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5001)
