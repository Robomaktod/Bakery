from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from .con_settings import postgres_database as pd

def get_engine(user, passwd, host, port, db):
    database_url = f"postgresql://{user}:{passwd}@{host}:{port}/{db}"
    print(database_url)
    engine = create_engine(database_url)
    return engine

engine = get_engine(
    pd['pguser'],
    pd ['pgpasswd'],
    pd ['pghost'],
    pd ['pgport'],
    pd ['pgdb'] 
)

SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()
