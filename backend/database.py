from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from .config import user, passwd, host, port, db

def get_engine():
    database_url = f"postgresql://{user[0]}:{passwd[0]}@{host[0]}:{port[0]}/{db}"
    print(f"Hello {database_url}")
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
