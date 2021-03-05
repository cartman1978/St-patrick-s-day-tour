import os
from flask import Flask, render_template, flash, redirect, request, url_for, session
if os.path.exists('env.py'):
    import env


app = Flask(__name__)


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


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
