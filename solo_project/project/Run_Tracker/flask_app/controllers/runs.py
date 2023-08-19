from flask_app import app
from flask import flash
from flask import render_template,redirect,request,session,abort
from flask_app.models import user,run

@app.route("/dashboard")
def dashboard():
    if "user_id" not in session:
        return redirect("/")
    current_user = user.User.get_by_id(session["user_id"])
    all_runs = run.Run.get_all_runs()
    return render_template("dashboard.html",user=current_user,runs=all_runs)

@app.route("/new/run")
def add_run():
    if "user_id" not in session:
        return redirect("/")
    current_user = user.User.get_by_id(session["user_id"])
    return render_template("add-run.html",user=current_user)

@app.route("/add-run",methods=["POST"])
def create_run():
    if "user_id" not in session:
        return redirect("/")
    if run.Run.validate_run(request.form):
        run.Run.create_run(request.form)
        return redirect("/dashboard")
    return redirect("/new/run")

@app.route("/run-details/<int:id>")
def get_run(id):
    if "user_id" not in session:
        return redirect("/")
    current_user = user.User.get_by_id(session["user_id"])
    current_run = run.Run.get_run(id)
    return render_template("run-details.html",user=current_user,run=current_run)

@app.route("/edit-run/<int:id>")
def update_run(id):
    if "user_id" not in session:
        return redirect("/")
    current_user = user.User.get_by_id(session["user_id"])
    current_run = run.Run.get_run(id)
    if current_run.user_id != current_user.id:
        flash("You are not authorized to edit this data!")
        return redirect("/dashboard")
    return render_template("edit-run.html",user=current_user,run=current_run)

@app.route("/edit-run/<int:id>",methods=["POST"])
def edit_run(id):
    if "user_id" not in session:
        return redirect("/")
    if run.Run.validate_run(request.form):
        run.Run.update_run(request.form, id)
        return redirect("/dashboard")
    return redirect(f"/edit-run/{id}")

@app.route("/delete/<int:id>")
def delete_run(id):
    if "user_id" not in session:
        return redirect("/")
    current_user = user.User.get_by_id(session["user_id"])
    current_run = run.Run.get_run(id)
    if current_run.user_id != current_user.id:
        flash("You are not authorized to delete this data!")
        return redirect("/dashboard")
    run.Run.delete_run(id)
    return redirect("/dashboard")