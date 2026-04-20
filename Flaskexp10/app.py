import requests
from flask import Flask, render_template, request, flash

app = Flask(__name__)
app.secret_key = "weather_innovation_key"

def get_weather_description(code):
    """Maps WMO Weather Codes to readable text and emojis."""
    mapping = {
        0: ("Clear Sky", "☀️"),
        1: ("Mainly Clear", "🌤️"), 2: ("Partly Cloudy", "⛅"), 3: ("Overcast", "☁️"),
        45: ("Foggy", "🌫️"), 48: ("Rime Fog", "🌫️"),
        51: ("Light Drizzle", "🌦️"), 53: ("Drizzle", "🌦️"), 55: ("Heavy Drizzle", "🌦️"),
        61: ("Slight Rain", "🌧️"), 63: ("Moderate Rain", "🌧️"), 65: ("Heavy Rain", "🌧️"),
        71: ("Slight Snow", "❄️"), 73: ("Moderate Snow", "❄️"), 75: ("Heavy Snow", "❄️"),
        95: ("Thunderstorm", "⛈️"),
    }
    return mapping.get(code, ("Unknown", "❓"))

@app.route("/", methods=["GET", "POST"])
def index():
    weather_data = None
    
    if request.method == "POST":
        city = request.form.get("city")
        
        # 1. Geocoding API (City to Lat/Lon)
        geo_url = f"https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1&language=en&format=json"
        try:
            geo_res = requests.get(geo_url).json()
            if "results" in geo_res:
                location = geo_res["results"][0]
                lat, lon = location["latitude"], location["longitude"]
                
                # 2. Weather API
                weather_url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true"
                w_res = requests.get(weather_url).json()
                current = w_res["current_weather"]
                
                desc, emoji = get_weather_description(current["weathercode"])
                
                weather_data = {
                    "city": location["name"],
                    "country": location.get("country", ""),
                    "temp": round(current["temperature"]),
                    "wind": current["windspeed"],
                    "description": desc,
                    "emoji": emoji
                }
            else:
                flash("City not found. Try another!")
        except Exception:
            flash("Connection error. Please check your internet.")

    return render_template("index.html", weather=weather_data)

if __name__ == "__main__":
    app.run(debug=True)