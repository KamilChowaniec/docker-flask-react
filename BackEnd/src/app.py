from flask import Flask, escape, request

app = Flask(__name__)

@app.route('/elo')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')