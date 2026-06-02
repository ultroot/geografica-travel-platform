from app.core.settings import AKBAR_PROVIDER


def get_flights():
    return {
        "provider": AKBAR_PROVIDER,
        "airline": "Air India",
        "price": 12100,
        "departure_time": "10:00",
        "arrival_time": "13:50",
        "duration": "3h 50m"
    }