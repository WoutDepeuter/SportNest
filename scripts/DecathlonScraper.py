import requests
from bs4 import BeautifulSoup
import csv

# Define sport and category as variables
sport = "basketball"
category = "ballons-de-basketball"

# Define the target URL
URL = f"https://www.decathlon.be/fr/tous-les-sports/{sport}/{category}"

# Function to fetch webpage content
def fetch_webpage(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.text
    else:
        print(f"Failed to fetch {url}, status code: {response.status_code}")
        return None

# Function to parse the webpage content and extract product details
def parse_webpage(html_content):
    soup = BeautifulSoup(html_content, "html.parser")

    # Find product containers
    items = []
    for product in soup.find_all("div", class_="product-block-top-main"):
        name = product.select_one(".vtmn-block.vtmn-typo_text-3.svelte-bcstxf")
        price = product.select_one(".vtmn-price.vtmn-price_size--large.vtmn-price_variant--accent")
        image = product.select_one("img")
        link = product.select_one("a.vtmn-absolute")

        # Extract name, price, image URL, and product link
        if name and price and image and link:
            # Extract the price and strip whitespace
            price_text = price.get_text(strip=True)
            if "€" in price_text:
                price_number = price_text.replace("€", "").strip()  # Remove '€' and get the number
                try:
                    price_int = int(price_number)  # Convert to integer
                    whole = price_int // 100  # Get whole part (divide by 100)
                    decimal = price_int % 100  # Get decimal part (remainder)
                    formatted_price = f"{whole},{decimal:02d}€"  # Format as whole,decimal€ (e.g., 160,00€)
                except ValueError:
                    formatted_price = price_text  # Fallback if conversion fails
            else:
                formatted_price = price_text.strip()  # If no currency symbol

            # Get the image URL
            image_url = image.get('src') if image else None
            # Get the product link (URL)
            product_url = link.get('href') if link else None

            # Construct the full URL for the product (assuming relative links)
            if product_url:
                product_url = f"https://www.decathlon.be{product_url}"

            items.append({
                "name": name.get_text(strip=True),
                "price": formatted_price,
                "image_url": image_url,
                "product_url": product_url
            })

    return items

# Main logic to fetch and save the data to CSV
def main():
    html_content = fetch_webpage(URL)
    if html_content:
        sports_equipment = parse_webpage(html_content)
        # Save the results to a CSV file
        with open("/storage/app/public/scraped-data.csv", "w", newline="", encoding="utf-8") as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=["name", "price", "image_url", "product_url"])
            writer.writeheader()
            writer.writerows(sports_equipment)
        print("Data saved to sports_equipment.csv")

if __name__ == "__main__":
    main()
