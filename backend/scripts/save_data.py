import requests
import json

response = requests.get('http://localhost:3000/predictions')
json_dict = response.json()
with open('prediction_data.json', 'w') as outfile:
    json.dump(json_dict, outfile)



