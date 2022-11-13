import json
import requests
import os

def organizer():
  f = open('db.json', 'r')
  apps = f.read()

  apps = json.loads(apps)

  apps = apps['applist']['apps']

  w = open('applist.txt', 'w')

  for app in apps:
    if app.get('name') == '':
      continue
    else:
      w.write(json.dumps(app)+'\n')

  f.close()
  w.close()


def steamfiltergames():
  # max_games = 500
  count = 0
  applistfile = open('applist.txt', 'r')
  db = open('db.txt', 'a')
  applist = applistfile.readlines()
  for line in applist:
    count += 1
    print(count)
    app = json.loads(line)
    appid = str(app['appid'])
    
    appinfo = requests.get('https://store.steampowered.com/api/appdetails/?appids='+appid)
    appinfo = json.loads(appinfo.text)

    if appinfo is None:
      continue
    
    appsucess = appinfo[appid].get('sucess')
    appdata = appinfo[appid].get('data')
    
    # print(appdata)
    if appdata is None or appsucess == False:
      continue
    # else:
    #   for key, value in appdata.items():
    #     print(key +':'+ str(value) +'\n')
    # break    
    if appdata['type'] == 'game':
      game = {}
      game[appid] = {}
      game[appid]['name'] = appdata.get('name')
      game[appid]['steam_appid'] = appdata.get('steam_appid')
      game[appid]['required_age'] = appdata.get('required_age')
      game[appid]['is_free'] = appdata.get('is_free')
      game[appid]['header_image'] = appdata.get('header_image')
      game[appid]['developers'] = appdata.get('developers')
      game[appid]['publishers'] = appdata.get('price_overview')
      game[appid]['categories'] = appdata.get('categories')
      game[appid]['genres'] = appdata.get('genres')
      game[appid]['recommendations'] = appdata.get('recommendations')
      game[appid]['release_date'] = appdata.get('release_date')

      db.write(json.dumps(game)+'\n')
      print(game)
      game.clear()
      # count += 1
      # if count >= max_games:
      #   break

  applistfile.close()
  db.close()
  os.remove('applist.txt')


if __name__ == '__main__':
  fp = open('db.json', 'w+')
  api = {}
  api = requests.get('http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json')
  
  api = json.loads(api.text)
  json.dump(api,fp)
  fp.close()
  organizer()
  os.remove('db.json')
  steamfiltergames()



