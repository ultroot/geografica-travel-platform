from app.providers.provider_manager import get_all_flight_providers


def search_flights():

    results = get_all_flight_providers()

    cheapest = min(
        results,
        key=lambda x: x["price"]
    )

    return {
        "success": True,
        "total_providers": len(results),
        "cheapest": cheapest,
        "results": results
    }