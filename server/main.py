from flask import Flask
from flask import request
from pymongo.mongo_client import MongoClient
from flask_cors import CORS
import random

uri = "mongodb+srv://architbhatia2:1GmM48OyFQGbLJIX@soccer.pahd2.mongodb.net/?retryWrites=true&w=majority&appName=soccer"
# Create a new client and connect to the server
client = MongoClient(uri)

db = client['soccer-stats']

Collection = db['players']

app = Flask(__name__)
CORS(app)
if __name__ == '_main_':
  app.run(debug = True)

@app.route('/all')
def get_all():
   try:
      cursor = Collection.find()
      print(cursor)
      result = []
      for doc in cursor:
        doc['_id'] = str(doc['_id'])
        print(doc)
        result.append(doc)
      print(result)
      return result
      # return Collection.find()
   except Exception as e:
      print(e)


@app.route("/delete-all")
def del_all():
  try:
    Collection.remove()
    return "Successfully deleted all records"
  except Exception as e:
      print(e)


@app.route("/insert", methods=['POST'])
def insert_data():
  try:
      client.admin.command('ping')
      Collection.insert_one(
        {"firstName": request.json.get('firstName'),
         "lastName": request.json.get('lastName'),
         "phone": request.json.get('phone')}
      )
      return {"message": 'Added successfuly'}
  except Exception as e:
      print(e)

@app.route("/say-hi")
def say_hi():
  return "Hi, world"