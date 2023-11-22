from flask import Flask, render_template, request, flash
import psycopg2
import psycopg2.extras
import re
from werkzeug.security import generate_password_hash, check_password_hash

app= Flask(__name__)
app.secret_key = 'zelerakiq'

DB_HOST = "127.0.0.1"
DB_NAME = "signup"
DB_USER = "postgres"
DB_PASS = "Xow31383"

with psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS,host=DB_HOST) as conn:
    with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cursor:
        @app.route("/register", methods=['GET', 'POST'])
        def register():
            

            if request.method == 'POST' and 'username' in request.form and 'password' in request.form and 'email' in request.form:
                firstname = request.form['firstname']
                lastname = request.form['lastname']
                username = request.form['username']
                password = request.form['password']
                grade = request.form['grade']
                email = request.form['email']

                _hashed_password = generate_password_hash(password)
                cursor.execute('SELECT * FROM user_info WHERE username = %s', (username,))
                account = cursor.fetchone()
                print(account)

                if account:
                    flash('Account already exist!')
                elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
                    flash('Invalid email addres!')
                elif not re.match(r'[A-Za-z0-9]+', username):
                    flash('Username must contain only characters and numbers!')
                elif not username or not password or not email or not firstname or not lastname or not grade:
                    flash('Plaese fill out the form!')

                else:
                    cursor.execute("INSERT INTO user_info (firstname, lastname, username, password, grade, email) VALUES (%s, %s, %s, %s, %s, %s)", (firstname, lastname, username, _hashed_password, grade, email))
                    conn.commit()
                    flash('You have sucesfully  registered!')
            elif request.method == 'POST':
                flash('Please fill out the form')
            return render_template('index.html')

if __name__ == "__main__":

    app.run(debug=True)
