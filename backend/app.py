from flask import Flask, render_template, request, flash
import psycopg2
import psycopg2.extras
import re
from controllers.user.auth.userAuthController import userAuthBlueprint

app = Flask(__name__)
app.secret_key = 'zelerakiq'
app.register_blueprint(userAuthBlueprint, url_prefix = "/api/user/auth")

"""
DB_HOST = "127.0.0.1"
DB_NAME = "signup"
DB_USER = "postgres"
DB_PASS = "Xow31383"

conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS,host=DB_HOST)
cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
"""

if __name__ == "__main__":
    print(app.url_map)
    app.run(debug=True)
