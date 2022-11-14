import json
import time # testing time

def get_weight(gamedata,ref_data):
  weight = 0
  if gamedata['required_age'] == ref_data['required_age']:
    weight += 1
  if gamedata['is_free'] == ref_data['is_free']:
    weight += 1

  if not isNull(gamedata['genres']):
    for gen_jogo in gamedata['genres']:
        for gen_comp in ref_data['genres']:
          if gen_jogo.get('id') == gen_comp.get('id'):
            weight += 1

  if not isNull(gamedata['categories']):
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
  connections_count = 5
  g = {
      'similar_games': []
    }
  
  db = open('backend/db/db.txt', 'r')
  
  for line in db.readlines():
    gameinfo = json.loads(line)
    game_appid = next(iter(gameinfo))
    gamedata = gameinfo[game_appid]
    # print(type(game_appid))

    appid_visitados = []
    for count in range(len(jogos_visitados)):
      appid_visitados.append(str(jogos_visitados[count].get('appid')))

    if game_appid in appid_visitados:
      continue

    ref_data = get_game(jogo_ref[0])

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
  db = open('backend/db/db.txt', 'r')

  for line in db.readlines():
    gameinfo = json.loads(line)
    game_appid = next(iter(gameinfo))
    gamedata = gameinfo[game_appid]

    if str(game_appid) == str(appid):
      db.close()
      return gamedata
    # time.sleep(1)

  db.close()


def dfs_iterativa(game_appid):
  layer = 0
  falta_visitar = [[game_appid, layer]]
  visitados = []
  visitados.append(
    {
      'appid': game_appid,
      'title': get_game(game_appid).get('name'),
      'genres': get_game(game_appid).get('genres'),
      'categories': get_game(game_appid).get('categories'),
      'img': get_game(game_appid).get('header_image'),
      'layer': layer
    }
  )
  while falta_visitar:
    v = falta_visitar.pop()
    # print(v)
    g = get_connections(v,visitados)
    print(g)
    break

# testing functions
if __name__ == '__main__':
  # game = get_game(1602010)
  # print(game.get('name'))
  dfs_iterativa(1602010)


# A fazer...
# buscar jogo no db [ok]
# definir o grafo (lista de jogos similares??) [ OK]
#terminar dfs [quase la...]
  