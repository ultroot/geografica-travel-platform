import os

from dotenv import load_dotenv

load_dotenv()

APP_NAME = os.getenv("APP_NAME")
APP_VERSION = os.getenv("APP_VERSION")

TRAVELBOUTIQUE_PROVIDER = os.getenv("TRAVELBOUTIQUE_PROVIDER")
AKBAR_PROVIDER = os.getenv("AKBAR_PROVIDER")
MAKEMYTRIP_PROVIDER = os.getenv("MAKEMYTRIP_PROVIDER")
TRAVELBOUTIQUE_ENABLED = os.getenv(
    "TRAVELBOUTIQUE_ENABLED",
    "true"
).lower() == "true"

AKBAR_ENABLED = os.getenv(
    "AKBAR_ENABLED",
    "true"
).lower() == "true"

MAKEMYTRIP_ENABLED = os.getenv(
    "MAKEMYTRIP_ENABLED",
    "true"
).lower() == "true"