from flask import Flask, request, jsonify
import subprocess
import os
import uuid
import csv

app = Flask(__name__)
app.config['DEBUG'] = True  # Enable debug mode

@app.route('/run-scraper', methods=['POST'])
def run_scraper():
    data = request.json
    sport = data.get('sport', 'basketball')
    category = data.get('category', 'ballons-de-basketball')
    filename = f'scraped-data-{uuid.uuid4()}.csv'
    filepath = os.path.join('/tmp', filename)

    # Run the scraper script
    process = subprocess.Popen(
        ['python3', 'DecathlonScraper.py', sport, category, filepath],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    stdout, stderr = process.communicate()

    if process.returncode != 0:
        return jsonify({'message': 'Scraper process failed', 'error': stderr.decode('utf-8')}), 500

    # Verify that the file was created
    if not os.path.exists(filepath):
        return jsonify({'message': 'Scraper process failed', 'error': 'File not created'}), 500

    # Read the CSV file and return its contents
    with open(filepath, 'r') as csvfile:
        reader = csv.reader(csvfile)
        data = list(reader)

    os.remove(filepath)  # Clean up the temporary file

    return jsonify({'message': 'Scraper has run successfully!', 'data': data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
