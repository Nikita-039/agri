from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

# Load model and preprocessor
dtr = pickle.load(open('dtr.pkl','rb'))
preprocessor = pickle.load(open('preprocessor.pkl','rb'))

app = Flask(__name__)
CORS(app) 

@app.route("/")
def home():
    return "Crop Yield Prediction API is running"

@app.route("/predict", methods=['POST'])
def predict():
    try:
        data = request.json

        features = np.array([[data['Year'],
                              data['average_rain_fall_mm_per_year'],
                              data['pesticides_tonnes'],
                              data['avg_temp'],
                              data['Area'],
                              data['Item']]], dtype=object)

        transformed = preprocessor.transform(features)
        prediction = dtr.predict(transformed)

        return jsonify({"prediction": prediction[0]})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
