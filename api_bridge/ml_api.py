from fastapi import FastAPI
from ml.src.predict import predict_disease

app = FastAPI(title="Epidemiology AI - Disease Prediction")

@app.post("/predict")
def predict(data: dict):
    result = predict_disease(data)
    return {"predicted_disease": result}