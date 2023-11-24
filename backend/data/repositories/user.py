 class UserRepo:
    @staticmethod
    def add(firstName, lastName, username, email, hashedPassword, grade):
        cursor.execute("INSERT INTO user_info (firstname, lastname, username, password, grade, email) VALUES (%s, %s, %s, %s, %s, %s)", (firstname, lastname, username, hashedPassword, grade, email))
        conn.commit()

    @staticmethod  
    def getUserByUsername(username):
        cursor.execute(f'SELECT * FROM user_info WHERE username = %s', (username))
        return cursor.fetchone()