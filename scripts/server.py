from flask import Flask, request, jsonify
import json
from DecathlonScraper import run_scraper

app = Flask(__name__)
app.config['DEBUG'] = True  # Enable debug mode

@app.route('/run-scraper', methods=['POST'])
def run_scraper_endpoint():
    data = request.json
    sport = data.get('sport', 'basketball')
    category = data.get('category', 'ballons-de-basketball')

    # Run the scraper function
    scraped_data = run_scraper(sport, category)

    if not scraped_data:
        return jsonify({'message': 'Scraper process failed'}), 500

    return jsonify({'message': 'Scraper has run successfully!', 'data': scraped_data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
