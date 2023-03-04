import sys
import fasttext
import fasttext.util
import pickle
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/ping", methods=["GET"])
def ping():
    return jsonify({"ping": "pong"})

@app.get('/getKeys/<keyword>')
def getKeys(keyword):
    print('Querying for: ', keyword)
    similarWords = model.get_nearest_neighbors(keyword, k=2000)

    winners = []
    for relevance, word in similarWords:
        word = word.upper()
        if word in wordClueDict:
            winners.append({
                "word": word,
                "clue": wordClueDict[word],
                "relevance": relevance
            })
            if len(winners) > 50:
                break
    return jsonify(winners)


if __name__ == '__main__':
    model = fasttext.load_model('cc.en.100.bin')
    with open('wordClue.pkl', 'rb') as f:
        wordClueDict = pickle.load(f)
    print('model loaded')
    app.run(host='localhost', port=sys.argv[1])
