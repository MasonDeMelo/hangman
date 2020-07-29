from flask import Flask, request

app = Flask(__name__)


word = "SASSAFRAS"


@app.route("/api/version")
def hello_world():
    return "1.0"


@app.route("/api/guess", methods=["POST", "GET"])
def hangman():

    try:
        guesses = set(request.json.get("guesses").upper())
    except:
        guesses = set()

    miss_count = len(list(filter(lambda x: x not in word, guesses)))
    word_so_far = "".join(list(map(lambda x: x if x in guesses else "_", word)))

    return {"miss_count": miss_count, "word_so_far": word_so_far}


if __name__ == "__main__":
    app.run(debug=True, port=4444)
