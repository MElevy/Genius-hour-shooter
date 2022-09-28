from flask import Flask as App, render_template as render, send_file

app = App(__name__)

@app.route('/')
def index():
    return render('index.html')

class Files:
    class Scripts:
        @app.route('/scripts/main.js')
        def main_js():
            return send_file('scripts/main.js', mimetype = 'text/javascript')

        @app.route('/scripts/keyTracker.js')
        def keyTracker_js():
            return send_file(
                'scripts/keyTracker.js', mimetype = 'text/javascript'
            )

        @app.route('/scripts/sprites.js')
        def sprites_js():
            return SPRI

    class Assets:
        @app.route('/assets/plane.png')
        def plane_png():
            return send_file('assets/plane.png', mimetype = 'image/png')

        @app.route('/assets/bullet.png')
        def bullet_png():
            return send_file('assets/bullet.png', mimetype = 'image/png')
