from app.core.settings import MAKEMYTRIP_PROVIDER


def get_flights():
    return {
        "provider": MAKEMYTRIP_PROVIDER,
        "airline": "Qatar Airways",
        "price": 11900,
        "departure_time": "09:15",
        "arrival_time": "12:40",
        "duration": "3h 25m"
    }