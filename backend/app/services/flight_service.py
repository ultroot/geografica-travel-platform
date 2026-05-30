from app.providers.travelboutique import get_flights as tb_flights
from app.providers.akbar import get_flights as akbar_flights
from app.providers.makemytrip import get_flights as mmt_flights

def search_flights():

    results = [
        tb_flights(),
        akbar_flights(),
        mmt_flights()
    ]

    cheapest = min(results, key=lambda x: x["price"])

    return {
        "success": True,
        "total_providers": len(results),
        "cheapest": cheapest,
        "results": results
    }