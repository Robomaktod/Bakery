from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from .con_settings import postgres_database as pd

def get_engine():
    database_url = f"postgresql://citus:bebra-123@c-bakery.yniyiilfw5yyor.postgres.cosmos.azure.com:5432/bakery?sslmode=require"
    engine = create_engine(database_url)
    return engine

engine = get_engine()
    # pd['pguser'],
    # pd ['pgpasswd'],
    # pd ['pghost'],
    # pd ['pgport'],
    # pd ['pgdb'] 

SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()
