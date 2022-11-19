import os
from os.path import exists

DIR_PATH=os.getcwd()
DB_PATH=f'{DIR_PATH}/db/db.txt'
file_exists = exists(DB_PATH)
print(file_exists)

print(f"File location using os.getcwd():{DIR_PATH}")