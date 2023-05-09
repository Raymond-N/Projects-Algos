from flask_app import app
from flask import render_template,redirect,request,session
from flask_app.models import user,run

@app.route("/dashboard")
def dashboard():
    if "user_id" not in session:
        return redirect("/")
    current_user = user.User.get_by_id(session["user_id"])
    all_runs = run.Run.get_all_runs()
    return render_template("dashboard.html",user=current_user,runs=all_runs)