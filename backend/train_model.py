import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib
import os

def generate_synthetic_data(num_samples=1000):
    np.random.seed(42)
    
    # Generate random features
    age = np.random.randint(18, 50, num_samples)
    weight = np.random.uniform(45, 100, num_samples) # kg
    height = np.random.uniform(150, 180, num_samples) # cm
    stress_level = np.random.randint(1, 10, num_samples) # 1-10
    sleep_hours = np.random.uniform(4, 10, num_samples)
    previous_cycle_len = np.random.randint(21, 35, num_samples)
    
    # Calculate BMI
    height_m = height / 100
    bmi = weight / (height_m ** 2)
    
    # Target: Next cycle length
    # Base it slightly on previous_cycle_len, stress_level, and sleep_hours
    noise = np.random.normal(0, 2, num_samples)
    next_cycle_length = previous_cycle_len + (stress_level * 0.2) - ((sleep_hours - 7) * 0.3) + noise
    next_cycle_length = np.clip(np.round(next_cycle_length), 15, 45).astype(int)
    
    # Target: Irregular Cycle Flag
    # Consider irregular if cycle > 35 or < 21
    irregular_cycle = ((next_cycle_length > 35) | (next_cycle_length < 21)).astype(int)
    
    df = pd.DataFrame({
        'age': age,
        'bmi': bmi,
        'stress_level': stress_level,
        'sleep_hours': sleep_hours,
        'previous_cycle_len': previous_cycle_len,
        'next_cycle_length': next_cycle_length,
        'irregular_cycle': irregular_cycle
    })
    
    return df

def train_and_save_models():
    print("Generating synthetic data...")
    df = generate_synthetic_data(5000)
    
    X = df[['age', 'bmi', 'stress_level', 'sleep_hours', 'previous_cycle_len']]
    y_reg = df['next_cycle_length']
    y_clf = df['irregular_cycle']
    
    # Train Regression model for Cycle Length
    print("Training Regression Model (Random Forest)...")
    X_train, X_test, y_train, y_test = train_test_split(X, y_reg, test_size=0.2, random_state=42)
    rf_regressor = RandomForestRegressor(n_estimators=100, random_state=42)
    rf_regressor.fit(X_train, y_train)
    print(f"Regressor R^2 on test data: {rf_regressor.score(X_test, y_test):.4f}")
    
    # Train Classification model for Irregular Cycle Anomaly
    print("Training Classification Model (Random Forest)...")
    X_train_c, X_test_c, y_train_c, y_test_c = train_test_split(X, y_clf, test_size=0.2, random_state=42)
    rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_classifier.fit(X_train_c, y_train_c)
    print(f"Classifier Accuracy on test data: {rf_classifier.score(X_test_c, y_test_c):.4f}")
    
    # Save Models
    os.makedirs('models', exist_ok=True)
    joblib.dump(rf_regressor, 'models/cycle_len_regressor.pkl')
    joblib.dump(rf_classifier, 'models/irregular_classifier.pkl')
    print("Models saved successfully in 'models/' directory.")

if __name__ == '__main__':
    train_and_save_models()
