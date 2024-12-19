from flask import Flask, request, jsonify
import subprocess
import os
import uuid
import csv
import json

app = Flask(__name__)
app.config['DEBUG'] = True  # Enable debug mode

@app.route('/run-scraper', methods=['POST'])
def run_scraper():
    data = request.json
    sport = data.get('sport', 'basketball')
    category = data.get('category', 'ballons-de-basketball')

    # Run the scraper script
    process = subprocess.Popen(
        ['python3', 'DecathlonScraper.py', sport, category],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    stdout, stderr = process.communicate()

    if process.returncode != 0:
        return jsonify({'message': 'Scraper process failed', 'error': stderr.decode('utf-8')}), 500

    # Parse the JSON output from the scraper
    try:
        scraped_data = json.loads(stdout.decode('utf-8'))
    except json.JSONDecodeError:
        return jsonify({'message': 'Failed to parse scraper output', 'error': stdout.decode('utf-8')}), 500

    return jsonify({'message': 'Scraper has run successfully!', 'data': scraped_data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
