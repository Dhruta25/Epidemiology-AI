from openai import OpenAI
import os
from dotenv import load_dotenv
load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def explain_outbreak(
    disease: str,
    location: str,
    growth_rate: float,
    risk_score: int
):
    prompt = f"""
    You are a public health analyst.
    Disease: {disease}
    Location: {location}
    Weekly growth rate: {growth_rate*100:.1f}%
    Risk score: {risk_score}%

    Explain the outbreak risk and preparedness steps.
    """

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content