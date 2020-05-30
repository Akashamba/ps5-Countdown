from flask import Flask, render_template, url_for
import time

app = Flask(__name__)


@app.route('/')
def home():
    t = 5
    while t:
        mins, secs = divmod(t, 60)
        timeformat = '{:02d}:{:02d}'.format(mins, secs)
        time.sleep(1)
        t -= 1
        return render_template('home.html', text=timeformat)


if __name__ == "__main__":
    app.run(debug=True)
