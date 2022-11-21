import json
import time # testing time
from definitions import DB_PATH1, DB_PATH2

def get_name(name):
  try:
    db = open(f'{DB_PATH1}', 'r')
  except:
    db = open(f'{DB_PATH2}', 'r')

  name = name.upper()
  gamelist = []
  count = 0

  for line in db.readlines():
    gameinfo = json.loads(line)
    game_appid = next(iter(gameinfo))
    gamedata = gameinfo[game_appid]

    if name in gamedata['name'].upper():
      gamelist.append(
        {
          'value': game_appid,
          'label': gamedata['name'],
          'img': gamedata['header_image']
        }
      )
      count += 1
      if count >=5:
        break

  db.close()
  return json.dumps(gamelist)



  return name

def get_weight(gamedata,ref_data):
  weight = 0
  if gamedata['required_age'] == ref_data['required_age']:
    weight += 1
  if gamedata['is_free'] == ref_data['is_free']:
    weight += 1

  if not isNull(gamedata['genres']) and not isNull(ref_data['genres']):
    for gen_jogo in gamedata['genres']:
        for gen_comp in ref_data['genres']:
          if gen_jogo.get('id') == gen_comp.get('id'):
            weight += 1

  if not isNull(gamedata['categories']) and not isNull(ref_data['categories']):
    for cat_jogo in gamedata['categories']:
        for cat_comp in ref_data['categories']:
          if cat_jogo.get('id') == cat_comp.get('id'):
            weight += 1
  return weight


def isNull(value):
  if value is None:
    return True
  else:
    return False

def get_connections(jogo_ref,jogos_visitados):
  connections_count = 3
  g = {
      'similar_games': []
    }
  
  try:
    db = open(f'{DB_PATH1}', 'r')
  except:
    db = open(f'{DB_PATH2}', 'r')
  
  for line in db.readlines():
    gameinfo = json.loads(line)
    game_appid = next(iter(gameinfo))
    gamedata = gameinfo[game_appid]
    # print(type(game_appid))

    appid_visitados = []
    for count in range(len(jogos_visitados)):
      appid_visitados.append(str(jogos_visitados[count].get('id')))

    if game_appid in appid_visitados:
      continue
    
    ref_data = get_game(jogo_ref)

    connection = {
      'id': game_appid,
      'name': gamedata['name'],
      'weight': 0
    }
    
    connection['weight'] = get_weight(gamedata,ref_data)
    
    if(connection['weight'] >= 3):
      g['similar_games'].append(connection)
      connections_count -= 1
      if connections_count == 0:
        break

  return g

def get_game(appid):
  try:
    db = open(f'{DB_PATH1}', 'r')
  except:
    db = open(f'{DB_PATH2}', 'r')

  for line in db.readlines():
    gameinfo = json.loads(line)
    game_appid = next(iter(gameinfo))
    gamedata = gameinfo[game_appid]

    if str(game_appid) == str(appid):
      db.close()
      return gamedata
    # time.sleep(1)

  db.close()


def dfs_iterativa(game_appid, max_layer=3):
  layer = 0
  falta_visitar = [[game_appid, layer]]
  visitados = []
  visitados.append(
    {
      'id': game_appid,
      'label': get_game(game_appid).get('name'),
      'genres': get_game(game_appid).get('genres'),
      'categories': get_game(game_appid).get('categories'),
      'img': get_game(game_appid).get('header_image'),
      'layer': layer
    }
  )

  edges = []
  while falta_visitar:
    v, layer = falta_visitar.pop()
    g = get_connections(v,visitados)

    if layer >= max_layer:
      continue
  
    appid_visitados = []
    for count in range(len(visitados)):
      appid_visitados.append(str(visitados[count].get('id')))
    
    for vizinho in g['similar_games']:
      if vizinho['id'] not in appid_visitados:
        visitados.insert(0,
          {
            'id': vizinho['id'],
            'label': get_game(vizinho['id']).get('name'),
            'genres': get_game(vizinho['id']).get('genres'),
            'categories': get_game(vizinho['id']).get('categories'),
            'img': get_game(vizinho['id']).get('header_image'),
            'layer': layer+1
          }
        )
        falta_visitar.append([vizinho['id'], layer+1])
        edges.append(
          {
            'from': v,
            'to': vizinho['id']
          }
        )

  return {
    'nodes': visitados,
    'edges': edges
  }

# testing functions
# if __name__ == '__main__':
  # game = get_game(1602010)
  # print(game.get('name'))
  # dfs_iterativa(1602010)
  # print(get_name('Persona'))


# A fazer...
# buscar jogo no db [ok]
# definir o grafo (lista de jogos similares??) [ OK]
#terminar dfs [quase la...]
  