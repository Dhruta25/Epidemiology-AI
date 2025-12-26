import os
import joblib
import pandas as pd
import numpy as np
from functools import lru_cache


# Build a path that works both locally & on Render
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "..", "models")

MODEL_PATH = os.path.join(MODEL_DIR, "disease_model.pkl")
ENCODER_PATH = os.path.join(MODEL_DIR, "label_encoder.pkl")


@lru_cache
def load_model():
    return joblib.load(MODEL_PATH)


@lru_cache
def load_encoder():
    return joblib.load(ENCODER_PATH)


def predict_disease(input_data: dict):
    """
    input_data: dictionary of features
    returns: disease name
    """
    model = load_model()
    label_encoder = load_encoder()

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