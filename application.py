from flask import Flask, render_template, redirect

app= Flask(__name__)

@app.route("/") # home page
def index():
    #return render_template("coming-soon.html")
    return render_template("index.html")

@app.route("/about-me")
def about_me():
    return render_template("about-me.html")
    
@app.route("/gallery")
def gallery():
    return render_template("gallery.html")
"""
@app.route("/my-collections")
def my_collections():
    return render_template("collections.html")



@app.route("/shop")
def shop():
    return render_template("shop.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")
"""