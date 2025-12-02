import json
import requests
import pandas as pd

def handler(event, context):
    url = "https://api.wheretheiss.at/v1/satellites/25544"
    req = requests.get(url)

    if req.status_code != 200:
        return {
            "statusCode": req.status_code,
            "body": json.dumps({"error": "Failed to fetch data"})
        }

    our_data = req.json()

    # Convert to DataFrame (optional)
    df = pd.DataFrame([our_data])
    result = df.to_dict(orient="records")

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(result)
    }
