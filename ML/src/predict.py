import joblib
import pandas as pd

model = joblib.load("../models/disease_model.pkl")
label_encoder = joblib.load("../models/label_encoder.pkl")

def predict_disease(input_data: dict):
    """
    input_data: dictionary of features
    returns: disease name
    """
    df = pd.DataFrame([input_data])
    prediction = model.predict(df)
    disease = label_encoder.inverse_transform(prediction)[0]
    return disease

