from dotenv import load_dotenv
import os

load_dotenv()

user   =  os.environ.get("PGUSER"),
passwd =  os.environ.get("PGPASS"),
host   =  os.environ.get("PGHOST"),
port   =  os.environ.get("PGPORT"),
db     =  os.environ.get("PGNAME")


