def calculate_growth_rate(last_week: int, current_week: int) -> float:
    if last_week == 0:
        return 1.0
    return (current_week - last_week) / last_week
def calculate_risk_score(
    growth_rate: float,
    disease: str,
    season: str
) -> int:
    score = 0

# Growth contribution
    if growth_rate > 0.5:
        score += 50
    elif growth_rate > 0.2:
        score += 30
    else:
        score += 10

# Seasonal diseases
    seasonal_diseases = ["Malaria", "Dengue"]
    if disease in seasonal_diseases and season == "Monsoon":
        score += 20

    return min(score, 100)

def calculate_confidence(growth_rate: float) -> int:
    return min(int(abs(growth_rate) * 100), 100)