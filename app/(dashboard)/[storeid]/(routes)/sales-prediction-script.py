import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import json

# Load the data
data = pd.read_csv('toy_store_2023_sales.csv')

# Prepare the features and target
X = pd.get_dummies(data['Month'], drop_first=True)
categories = ['Lego Sets', 'Planes', 'Bikes', 'Car Section', 'Dolls', 'Sports']

predictions = {}

for category in categories:
    y = data[category]
    
    # Split the data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train the model
    model = LinearRegression()
    model.fit(X_train, y_train)
    
    # Make predictions for the next year
    next_year = pd.get_dummies(pd.Series(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                                          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), 
                               drop_first=True)
    predictions[category] = model.predict(next_year).tolist()

# Convert predictions to the desired format
result = []
for i, month in enumerate(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                           'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']):
    month_data = {'month': month}
    for category in categories:
        month_data[category] = round(predictions[category][i], 2)
    result.append(month_data)

# Save predictions to a JSON file
with open('sales_predictions.json', 'w') as f:
    json.dump(result, f)

print("Predictions saved to sales_predictions.json")
