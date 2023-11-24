sys.path.append(os.path.abspath('../'))
from data.repositories.user import User
from utilsService import UtilsService

class UserService:
    def createUser(firstName, lastName, username, password, email, grade):
        hash_pass = UtilsService.hashPassword(password)

        if User.getUserByUsername(username):
            return "User already exists"


        User.add(firstName, lastName, username, email, hashedPassword, grade)
        