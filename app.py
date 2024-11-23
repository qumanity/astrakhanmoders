from flask import Flask, render_template

app = Flask(__name__)

# Главная страница
@app.route('/')
def home():
    return render_template('index.html')

# Страница "О нас"
@app.route('/about')
def about():
    return render_template('about.html')

    # Страница "Руководство модерации"
@app.route('/chief')
def chief():
    return render_template('chief.html')

    # Страница "Префиксы и роли"
@app.route('/roles')
def roles():
    return render_template('roles.html')

    # Страница "Беседы ВК"
@app.route('/vk')
def vk():
    return render_template('vk.html')

    # Страница "Команды модерации"
@app.route('/possibilities')
def possibilities():
    return render_template('possibilities.html')

    # Страница "Новости"
@app.route('/news')
def news():
    return render_template('news.html')

    # Страница "Правила модерации"
@app.route('/rules')
def rules():
    return render_template('rules.html')

# Запуск приложения
if __name__ == '__main__':
    app.run(debug=True)
