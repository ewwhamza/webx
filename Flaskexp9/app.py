from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get data from the AJAX request
        name = request.form.get('name')
        email = request.form.get('email')
        rating = request.form.get('rating')
        comments = request.form.get('comments')

        # Logic: You could save this to a database or file here
        print(f"Feedback Received: {name} ({email}) | Rating: {rating} stars | Info: {comments}")

        # Return JSON so the frontend knows it was successful
        return jsonify({"message": "Success"}), 200

    return render_template('feedback.html')

if __name__ == '__main__':
    app.run(debug=True)