from fastapi import FastAPI
from ML.src.predict import predict_disease

app = FastAPI(title="Epidemiology AI - Disease Prediction")

@app.post("/predict")
def predict(data: dict):
    result = predict_disease(data)
    return {"predicted_disease": result}

from ML.src.outbreak_risk import (
    calculate_growth_rate,
    calculate_risk_score,
    calculate_confidence
)
from ML.src.llm_explainer import explain_outbreak

@app.post("/outbreak-risk")
def outbreak_risk(data: dict):
    growth = calculate_growth_rate(
        data["cases_last_week"],
        data["cases_this_week"]
    )

    risk = calculate_risk_score(
        growth,
        data["disease"],
        data["season"]
    )

    confidence = calculate_confidence(growth)

    explanation = explain_outbreak(
        data["disease"],
        data["location"],
        growth,
        risk
    )

    return {
        "disease": data["disease"],
        "risk_percentage": risk,
        "confidence": confidence,
        "explanation": explanation
    }