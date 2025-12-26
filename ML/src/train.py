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