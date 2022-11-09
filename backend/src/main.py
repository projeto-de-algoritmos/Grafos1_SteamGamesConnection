from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def main():
  return "Minha pagina Flask"

@app.route('/search')
def search():
  return "testing search"

if __name__ == '__main__':
  app.run(debug=True)