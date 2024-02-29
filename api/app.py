from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify({'message': 'Hello, World!'})

@app.route('/api')
def hello_api():
    return jsonify({'message': 'Hello, World! API'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
