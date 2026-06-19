import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # ✅ dozvoljava React-u da pristupi backendu

@app.route('/')
def home():
    return "Hello, Flask! Backend radi 🎉"

@app.route('/compare', methods=['POST'])
def compare_data():
    data = request.json
    set1 = data.get('set1', [])
    set2 = data.get('set2', [])
    differences = list(set(set1) ^ set(set2))
    return jsonify({"differences": differences})

if __name__ == '__main__':
    # Render dodeljuje PORT kroz environment varijablu
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
