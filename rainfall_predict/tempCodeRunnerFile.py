import joblib
model = joblib.load("rainfall_prediction_model_new.pkl")
print(model.feature_names_in_) 