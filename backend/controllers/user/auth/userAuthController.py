from flask import Blueprint

def register():
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form and 'email' in request.form:
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        username = request.form['username']
        password = request.form['password']
        grade = request.form['grade']
        email = request.form['email']

        "vallidations "

        UserService.createUser(fi)

        """
        _hashed_password = generate_password_hash(password)
        print(f"\n\n{username}\n\n")
        cursor.execute(f'SELECT * FROM user_info WHERE username = %s', (username))
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

    """
    return render_template('index.html')


userAuthBlueprint = Blueprint('user/auth', __name__)
userAuthBlueprint.route('/register', methods=['POST'])(register)
