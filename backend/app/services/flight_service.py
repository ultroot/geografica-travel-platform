from app.providers.provider_manager import get_all_flight_providers


def search_flights(
    from_city: str = "",
    to_city: str = "",
    travel_date: str = ""
):

    results = get_all_flight_providers()

    cheapest = min(
        results,
        key=lambda x: x["price"]
    )

    return {
        "success": True,
        "from_city": from_city,
        "to_city": to_city,
        "travel_date": travel_date,
        "total_providers": len(results),
        "cheapest": cheapest,
        "results": results
    }