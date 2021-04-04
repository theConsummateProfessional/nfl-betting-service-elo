import requests
import json

with open('prediction_data.json', 'r') as json_file:
    predict = json.loads(json_file.read())
    
for team in predict:
    requests.post('http://localhost:3000/predictions', json=team)
    