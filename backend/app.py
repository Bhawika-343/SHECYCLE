from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
import os

# Define the root path to access the original 'public' folder
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT_ROOT = os.path.dirname(os.path.dirname(BASE_DIR)) # Correcting to root folder level

# Flask setup to serve templates and a custom static folder for images
app = Flask(__name__, template_folder='templates', static_folder='static')
CORS(app)

# Load the trained models
try:
    regressor = joblib.load(os.path.join(os.path.dirname(__file__), 'models', 'cycle_len_regressor.pkl'))
    classifier = joblib.load(os.path.join(os.path.dirname(__file__), 'models', 'irregular_classifier.pkl'))
    print("Models loaded successfully.")
except Exception as e:
    print(f"Error loading models: {e}. Please run train_model.py first.")
    regressor = None
    classifier = None

@app.route('/')
def index():
    return render_template('index.html')

# New route to serve original images from the public/images folder
@app.route('/images/<path:filename>')
def serve_images(filename):
    # Absolute path to the original images subdirectory
    images_dir = os.path.join(PROJECT_ROOT, 'public', 'images')
    # fallback for nested directory structure
    if not os.path.exists(images_dir):
        images_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public', 'images')
        
    return send_from_directory(images_dir, filename)

@app.route('/predict', methods=['POST'])
def predict():
    if not regressor or not classifier:
        return jsonify({"error": "AI Models are not loaded. Server setup incomplete."}), 500

    try:
        data = request.json
        
        # Extract features
        last_period_date = data.get('last_period')
        age = float(data.get('age', 25))
        weight = float(data.get('weight', 65))
        height = float(data.get('height', 160))
        stress_level = float(data.get('stress_level', 5))
        sleep_hours = float(data.get('sleep_hours', 7))
        previous_cycle_len = float(data.get('previous_cycle_len', 28))
        
        # Calculate BMI
        height_m = height / 100
        bmi = weight / (height_m ** 2)
        
        # Create input array
        # Order: ['age', 'bmi', 'stress_level', 'sleep_hours', 'previous_cycle_len']
        X_input = pd.DataFrame([{
            'age': age,
            'bmi': bmi,
            'stress_level': stress_level,
            'sleep_hours': sleep_hours,
            'previous_cycle_len': previous_cycle_len
        }])
        
        # Predict cycle length
        predicted_cycle_length = int(np.round(regressor.predict(X_input)[0]))
        
        # Predict irregularity
        is_irregular = int(classifier.predict(X_input)[0])
        
        # Date Math based on AI predictions
        last_date = datetime.strptime(last_period_date, "%Y-%m-%d")
        next_period_date = last_date + timedelta(days=predicted_cycle_length)
        
        # Ovulation generally happens 14 days before the *next* period
        ovulation_date = next_period_date - timedelta(days=14)
        
        # Fertile window is usually 5 days before ovulation up to the day of ovulation
        fertile_start = ovulation_date - timedelta(days=5)
        fertile_end = ovulation_date
        
        # Generate AI-Powered recommendations
        recommendations = []
        if is_irregular:
            recommendations.append("Your cycle is flagged as potentially irregular. High stress or drastic weight changes might be a cause.")
        
        if stress_level >= 7:
            recommendations.append("High stress levels detected. Consider meditation, yoga, or therapy to regulate cortisol levels which affect ovulation.")
            
        if sleep_hours < 6:
            recommendations.append("Lack of sleep can disrupt circadian rhythms and hormonal balance. Aim for 7-9 hours.")
            
        if bmi < 18.5:
            recommendations.append("Your BMI is underweight, which can halt ovulation (amenorrhea). Ensure you are eating a balanced nutrient-rich diet.")
        elif bmi > 25:
            recommendations.append("A higher BMI can sometimes cause insulin resistance affecting hormones. Stay active and hydrated.")
            
        if not recommendations:
            recommendations.append("Your lifestyle markers are well balanced! Keep maintaining a regular sleep and exercise routine.")

        return jsonify({
            "predicted_cycle_length": predicted_cycle_length,
            "is_irregular": bool(is_irregular),
            "next_period": next_period_date.strftime("%Y-%m-%d"),
            "ovulation": ovulation_date.strftime("%Y-%m-%d"),
            "fertile_window_start": fertile_start.strftime("%Y-%m-%d"),
            "fertile_window_end": fertile_end.strftime("%Y-%m-%d"),
            "recommendations": recommendations
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=8000)
