import joblib
import pandas as pd
import numpy as np

model = joblib.load("/Users/dhrutamacm2/Desktop/Epidemiology/ML/models/disease_model.pkl")
label_encoder = joblib.load("/Users/dhrutamacm2/Desktop/Epidemiology/ML/models/label_encoder.pkl")

def predict_disease(input_data: dict):
    """
    input_data: dictionary of features
    returns: disease name
    """
    df = pd.DataFrame([input_data])
    prediction = model.predict(df)
    disease = label_encoder.inverse_transform(prediction)[0]
    return disease

if __name__ == "__main__":
    sample_input = {
        "Fever": 1,
        "Cough": 0,
        "Fatigue": 1,
        "Difficulty Breathing": 0,
        "Age": 30,
        "Gender": 1,
        "Blood Pressure": 1,
        "Cholesterol Level": 0
    }

    print(predict_disease(sample_input))
