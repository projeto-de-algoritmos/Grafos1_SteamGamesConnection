from flask import Flask
from flask_cors import CORS
import dfs as dfs

app = Flask(__name__)
CORS(app)

@app.route('/')
def main():
  return "Minha pagina Flask"

@app.route('/dfs/<appid>')
def search_connections(appid):
  return dfs.dfs_iterativa(appid)

if __name__ == '__main__':
  app.run(debug=True)