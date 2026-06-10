import pymysql

from app.core.settings import (
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
)


def get_connection():
    return pymysql.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME,
        autocommit=True
    )


def test_connection():
    connection = get_connection()
    connection.close()

    return {
        "success": True,
        "message": "MariaDB connection successful"
    }


def save_flight_search(
    origin,
    destination,
    departure_date
):
    connection = get_connection()

    try:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                INSERT INTO flight_searches
                (
                    origin,
                    destination,
                    departure_date
                )
                VALUES (%s, %s, %s)
                """,
                (
                    origin,
                    destination,
                    departure_date
                )
            )

        return {
            "success": True,
            "message": "Flight search saved"
        }

    finally:
        connection.close()