from app.core.settings import TRAVELBOUTIQUE_PROVIDER


def get_flights():
    return {
        "provider": TRAVELBOUTIQUE_PROVIDER,
        "airline": "Emirates",
        "price": 11800,
        "departure_time": "08:30",
        "arrival_time": "11:45",
        "duration": "3h 15m"
    }