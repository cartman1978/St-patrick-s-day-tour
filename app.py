import os
from flask import Flask, render_template, flash, redirect, request, url_for, session
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
if os.path.exists('env.py'):
    import env

app = Flask(__name__)

# -------------- Database Connection -----------------------
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

# creating an instance of pymongo. constructor method
mongo = PyMongo(app)


@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")


@app.route("/description")
def description():
    return render_template("description.html")


@app.route("/login")
def login():
    return render_template("login.html")

# -------------- Game.html Python -----------------------

@app.route("/game", methods=["GET", "POST"])
def game():
    player_l = list(mongo.db.players.find().sort("n_drinks", -1))
    return render_template("game.html", players_list=player_l)


@app.route("/add_player", methods=["GET", "POST"])
def add_player():
    if request.method == "POST":
        new_player = {
            "name": request.form.get("input_new_player"),
            "n_drinks": request.form.get("input_n_drinks")
            }
        mongo.db.players.insert_one(new_player)
        flash("New Player Added")
    return redirect(url_for("game"))


@app.route("/delete_player/<player_id>")
def delete_player(player_id):
    mongo.db.players.remove({"_id": ObjectId(player_id)})
    # if user removed, share the flash message
    # removed_player = str(mongo.db.players.remove({"_id": ObjectId(player_id)})["name"])
    flash("player has been removed ")
    return redirect(url_for("game"))


@app.route("/rank_update_refresh/<player_id>", methods=["GET", "POST"])
def rank_update_refresh(player_id):
    if request.method == "POST":
        updated_n_drinks = {
            "name": request.form.get("name_rank"),
            "n_drinks": request.form.get("n_drinks_rank")
        }
        mongo.db.players.update({"_id": ObjectId(player_id)}, updated_n_drinks)
        flash("Player number of drinks have been updated and rank has been refreshed")
    return redirect(url_for("game"))

# --------------  Tours Python -----------------------

@app.route('/dublin_tour')
def dublin_tour():
    return render_template("dublin_tour.html")


@app.route('/cork_tour')
def cork_tour():
    return render_template("cork_tour.html")

# -------------- END Tours Python -----------------------

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
