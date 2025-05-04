import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, precision_score, recall_score, confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt
import pickle

model_path = "rainfall_predict/rainfall_prediction_model_new.pkl"
data_path = "rainfall_predict/Rainfall new.csv"

def load_model(model_path):
    """Load a saved model from pickle file"""
    with open(model_path, 'rb') as f:
        return pickle.load(f)

def evaluate_model(model, X_test, y_test, model_name="Model"):
    """
    Evaluate a classification model and print various metrics
    
    Parameters:
    -----------
    model : sklearn model object
        The trained model to evaluate
    X_test : array-like
        Test features
    y_test : array-like
        True labels
    model_name : str
        Name of the model for display purposes
    """
    # Make predictions
    y_pred = model.predict(X_test)
    
    # Calculate metrics
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    
    # Print metrics
    print(f"\n{model_name} Evaluation Metrics:")
    print("-" * 40)
    print(f"Accuracy:  {accuracy:.4f}")
    print(f"Precision: {precision:.4f}")
    print(f"Recall:    {recall:.4f}")
    
    # Calculate and plot confusion matrix
    cm = confusion_matrix(y_test, y_pred)
    plt.figure(figsize=(8, 6))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
    plt.title(f'Confusion Matrix - {model_name}')
    plt.ylabel('True Label')
    plt.xlabel('Predicted Label')
    plt.show()
    
    # Print confusion matrix interpretation
    print(f"\nConfusion Matrix Interpretation for {model_name}:")
    print("-" * 40)
    print(f"True Negatives (Correct negative predictions):  {cm[0][0]}")
    print(f"False Positives (Incorrect positive predictions): {cm[0][1]}")
    print(f"False Negatives (Incorrect negative predictions): {cm[1][0]}")
    print(f"True Positives (Correct positive predictions):   {cm[1][1]}")

# Example usage:
if __name__ == "__main__":
    # For Rainfall Prediction Model
    try:
        # Load the rainfall model - using the exact path from your notebook
        model_path = "rainfall_prediction_model_new.pkl"
        rainfall_model = load_model(model_path)
        
        # Load your test data
        data_path = "Rainfall new.csv"
        rainfall_data = pd.read_csv(data_path)
        
        # Prepare the data
        X = rainfall_data.drop(columns=['rainfall'])
        y = rainfall_data['rainfall']
        le = LabelEncoder()
        y = le.fit_transform(y)
        
        # Split the data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Evaluate rainfall model
        evaluate_model(rainfall_model, X_test, y_test, "Rainfall Prediction Model")
        
    except FileNotFoundError as e:
        print(f"Error: Could not find the file. Please check if the following files exist in your current directory:")
        print(f"- Model file: {model_path}")
        print(f"- Data file: {data_path}")
        print("\nMake sure these files are in the same directory as this script.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

    # For Crop Yield Model
    try:
        # Load the crop yield model
        # crop_model = load_model("crop_yield_model.pkl")  # Update with your model's path
        
        # Load your test data
        # Note: You'll need to load and preprocess your test data similarly to how you did in training
        # crop_data = pd.read_csv("your_crop_data.csv")
        # X = crop_data.drop(columns=['yield'])
        # y = crop_data['yield']
        # X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Evaluate crop yield model
        # evaluate_model(crop_model, X_test, y_test, "Crop Yield Prediction Model")
        print("\nNote: Crop yield model evaluation is commented out. Uncomment and update paths to evaluate.")
    except Exception as e:
        print(f"Error evaluating crop yield model: {str(e)}") 