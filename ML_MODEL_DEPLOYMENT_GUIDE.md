# ML Model Deployment Guide

## Quick Start with Render + Flask

### 1. Python Model Structure

Create this structure for each of your 3 models:

```
my-text-model/
├── app.py
├── requirements.txt
├── model.pkl (or your trained model files)
└── README.md
```

### 2. Example Flask App (app.py)

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
# Import your ML libraries (sklearn, torch, etc.)

app = Flask(__name__)
CORS(app)  # Enable CORS for web requests

# Load your trained model
# model = joblib.load('model.pkl')
# or however you load your model

@app.route('/analyze', methods=['POST'])
def analyze_text():
    try:
        data = request.get_json()
        text = data.get('text', '')
        
        if not text:
            return jsonify({'error': 'Text is required'}), 400
        
        # Your ML prediction logic here
        # predictions = model.predict([text])
        # confidence_scores = model.predict_proba([text])
        
        # Mock response - replace with your actual model output
        emotions = [
            {"emotion": "Joy", "confidence": 85, "color": "success"},
            {"emotion": "Confidence", "confidence": 72, "color": "primary"},
            {"emotion": "Neutral", "confidence": 45, "color": "muted"},
            {"emotion": "Concern", "confidence": 32, "color": "warning"},
            {"emotion": "Sadness", "confidence": 18, "color": "destructive"}
        ]
        
        return jsonify({
            'emotions': emotions,
            'overall_sentiment': 'positive',
            'confidence_score': 8.5
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

### 3. Requirements.txt

```
Flask==2.3.3
flask-cors==4.0.0
numpy==1.24.3
scikit-learn==1.3.0
# Add your specific ML libraries
# torch==2.0.1
# transformers==4.33.2
# opencv-python==4.8.0.76
```

### 4. Deploy to Render

1. Push your model code to GitHub
2. Go to [Render.com](https://render.com)
3. Create new "Web Service"
4. Connect your GitHub repo
5. Set these settings:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`
   - **Environment**: Python 3

### 5. Update Supabase Edge Function URLs

Once deployed, you'll get URLs like:
- Text: `https://your-text-model.onrender.com/analyze`
- Speech: `https://your-speech-model.onrender.com/analyze-speech`
- Video: `https://your-video-model.onrender.com/analyze-video`

Set these as environment variables in Supabase:
