from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from pymongo import MongoClient
from bson.json_util import dumps

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})   # Enable CORS for all routes

def get_db():
    client = MongoClient(host='mongodb',
                         port=27017, 
                         username='root', 
                         password='root',
                        authSource="admin")
    db = client["testdb"]
    return db

@app.route('/')
def home():
    print("WORK PLEASE")
    return "Assesment"


@app.route('/data' , methods=['GET'])
def data():
    db = get_db()
    parameter = request.args.get('parameter')
    if not parameter:
        return "error: Parameter is required", 400
    
    print("DO WE GET DB")
    print(db)
    data = db.deviceDataFoo.find({"parameter": parameter, "type": "numeric"}).sort("timestamp", 1)
    print("WHATS HERE")
    print(data)
    return dumps(data, default=str)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
