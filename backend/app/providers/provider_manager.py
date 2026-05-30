from app.core.settings import (
    TRAVELBOUTIQUE_ENABLED,
    AKBAR_ENABLED,
    MAKEMYTRIP_ENABLED
)

from app.providers.travelboutique import get_flights as tb_flights
from app.providers.akbar import get_flights as akbar_flights
from app.providers.makemytrip import get_flights as mmt_flights


def get_all_flight_providers():

    providers = []

    if TRAVELBOUTIQUE_ENABLED:
        providers.append(tb_flights())

    if AKBAR_ENABLED:
        providers.append(akbar_flights())

    if MAKEMYTRIP_ENABLED:
        providers.append(mmt_flights())

    return providers