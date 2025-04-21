from flask import Flask, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load the saved model
loaded_model = joblib.load("rainfall_prediction_model_new.pkl")

# Feature order
feature_names = ['pressure', 'dewpoint', 'humidity', 'cloud', 'sunshine', 'winddirection', 'windspeed']

@app.route("/")
def home():
    return "Rainfall prediction API is running"

@app.route("/predict", methods=['POST'])
def predict():
    try:
        # Assuming JSON payload from Next.js
        data = request.get_json()

        input_data = [[
            float(data['pressure']),
            float(data['dewpoint']),
            float(data['humidity']),
            float(data['cloud']),
            float(data['sunshine']),
            float(data['winddirection']),
            float(data['windspeed'])
        ]]

        input_df = pd.DataFrame(input_data, columns=feature_names)
        prediction = loaded_model.predict(input_df)
        result = "Rainfall" if int(prediction[0]) == 1 else "No Rainfall"

        return jsonify({"prediction": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5001)
