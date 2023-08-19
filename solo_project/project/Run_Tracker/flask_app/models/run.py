from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash
from flask_app.models import user

class Run:
    DB = "run_tracker"

    def __init__(self,data):
        self.id = data["id"]
        self.run_name = data["run_name"]
        self.location = data["location"]
        self.date = data["date"]
        self.miles = data["miles"]
        self.hours = data["hours"]
        self.minutes = data["minutes"]
        self.seconds = data["seconds"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]
        self.creator = None

    @staticmethod
    def validate_run(run):
        is_valid = True
        if not run["run_name"] or len(run["run_name"]) < 3:
            flash("Run name must be at least 3 characters!")
            is_valid = False
        if not run["location"] or len(run["location"]) < 3:
            flash("Location must be at least 3 characters!")
            is_valid = False
        if not run["date"] or len(run["date"]) <= 0:
            flash("Date of run is required!")
            is_valid = False
        if not run["miles"] or len(run["miles"]) < 0:
            flash("Number of miles must be greater than 0!")
            is_valid = False
        # if not run["hours"]:
        #     is_valid = False
        if not run["minutes"] or len(run["minutes"]) < 1:
            flash("Minutes must be greater than 0!")
            is_valid = False
        if not run["seconds"] or len(run["seconds"]) < 1:
            flash("Seconds must be greater than 0!")
            is_valid = False
        return is_valid
    
    @classmethod
    def create_run(cls,data):
        query = """
                INSERT INTO runs (run_name,location,date,miles,hours,minutes,seconds,user_id)
                VALUES (%(run_name)s,%(location)s,%(date)s,%(miles)s,%(hours)s,%(minutes)s,%(seconds)s,%(user_id)s);
                """
        return connectToMySQL(cls.DB).query_db(query,data)
    
    @classmethod
    def get_all_runs(cls):
        query = """
                SELECT * FROM runs JOIN users ON runs.user_id = users.id
                ORDER BY runs.created_at
                """
        results = connectToMySQL(cls.DB).query_db(query)
        runs = []
        for row in results:
            run = cls(row)
            run_creator_info = {
                "id":row["users.id"],
                "first_name":row["first_name"],
                "last_name":row["last_name"],
                "email":row["email"],
                "password":row["password"],
                "created_at":row["users.created_at"],
                "updated_at":row["users.updated_at"]
            }
            creator = user.User(run_creator_info)
            run.creator = creator
            runs.append(run)
        return runs
    
    @classmethod
    def get_user_runs(cls,user_id):
        data = {"user_id":user_id}
        query = """
                SELECT * FROM runs
                WHERE user_id = %(user_id)s;
                """
        results = connectToMySQL(cls.DB).query_db(query,data)
        runs = []
        for row in results:
            run = cls(row)
            runs.append(run)
        return runs
    
    @classmethod
    def get_run(cls,run_id):
        data = {"id":run_id}
        query = """
                SELECT * FROM runs JOIN users ON runs.user_id = users.id
                WHERE runs.id = %(id)s;
                """
        results = connectToMySQL(cls.DB).query_db(query,data)
        row = results[0]
        run = cls(row)
        run_creator_info = {
            "id":row["users.id"],
                "first_name":row["first_name"],
                "last_name":row["last_name"],
                "email":row["email"],
                "password":row["password"],
                "created_at":row["users.created_at"],
                "updated_at":row["users.updated_at"]
        }
        creator = user.User(run_creator_info)
        run.creator = creator
        return run
    
    @classmethod
    def update_run(cls,data,run_id):
        query = """
                UPDATE runs SET
                run_name = %(run_name)s, location = %(location)s, date = %(date)s, miles = %(miles)s, hours = %(hours)s, minutes = %(minutes)s, seconds = %(seconds)s, user_id = %(user_id)s
                WHERE id = %(id)s;
                """
        run_data = dict(data)
        run_data["id"] = run_id
        return connectToMySQL(cls.DB).query_db(query,run_data)
    
    @classmethod
    def delete_run(cls,run_id):
        data = {"id":run_id}
        query = "DELETE FROM runs WHERE id = %(id)s;"
        return connectToMySQL(cls.DB).query_db(query,data)