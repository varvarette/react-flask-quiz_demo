from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route('/api/questions')
def get_questions():
    with open('../data/questions.json') as f:
        questions = json.load(f)
    return jsonify(questions)

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.get_json()
    entry = {
        'timestamp': datetime.utcnow().isoformat(),
        'answers': data
    }
    with open('responses.json', 'a') as f:
        f.write(json.dumps(entry) + '\n')
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
