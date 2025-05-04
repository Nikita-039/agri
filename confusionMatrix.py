from sklearn.metrics import accuracy_score, confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt
import pickle
import pandas as pd

# Load your models
crop_yield_model = pickle.load(open(r"crop_yield\dtr.pkl", 'rb'))
rainfall_model = pickle.load(open(r"rainfall_predict\rainfall_prediction_model_new.pkl", 'rb'))

# Load your test datasets (replace with actual test data paths)
crop_yield_test_data = pd.read_csv("crop_yield/yield_df.csv")
rainfall_test_data = pd.read_csv("rainfall_predict/Rainfall new.csv")

# Ensure all features are numeric by encoding non-numeric columns
crop_yield_test_data = pd.get_dummies(crop_yield_test_data, drop_first=True)
rainfall_test_data = pd.get_dummies(rainfall_test_data, drop_first=True)

# Align test data columns with the training data columns
crop_yield_training_columns = pickle.load(open(r"crop_yield/training_columns.pkl", 'rb'))
crop_yield_test_data = crop_yield_test_data.reindex(columns=crop_yield_training_columns, fill_value=0)

# Unpack test data (features and labels)
X_crop_yield, Y_crop_yield = crop_yield_test_data.iloc[:, :-1], crop_yield_test_data.iloc[:, -1]
X_rainfall, Y_rainfall = rainfall_test_data.iloc[:, :-1], rainfall_test_data.iloc[:, -1]

# Dictionary of models and their corresponding test data
models = {
    "Crop Yield": (crop_yield_model, X_crop_yield, Y_crop_yield),
    "Rainfall": (rainfall_model, X_rainfall, Y_rainfall)
}

# Evaluate each model and display confusion matrix
for name, (model, X_test, Y_test) in models.items():
    # Ensure the model outputs class labels
    try:
        Y_pred = model.predict(X_test)
    except ValueError as e:
        print(f"Error predicting for {name}: {e}")
        continue

    # Convert Y_test to integers if necessary
    Y_test = Y_test.astype(int)
    
    # Calculate accuracy
    accuracy = accuracy_score(Y_test, Y_pred)
    print(f"{name} Accuracy: {accuracy:.4f}")

    # Generate confusion matrix
    cm = confusion_matrix(Y_test, Y_pred)
    plt.figure(figsize=(6, 5))
    sns.heatmap(cm, annot=True, fmt="d", cmap="Blues", cbar=False)
    plt.xlabel("Predicted Labels")
    plt.ylabel("True Labels")
    plt.title(f"Confusion Matrix - {name}")
    plt.tight_layout()
    plt.show()