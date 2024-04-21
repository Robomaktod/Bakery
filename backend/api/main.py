from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy.orm import sessionmaker

from . import crud, models
from .database import SessionLocal, engine
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

 
origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
    "http://localhost:5500",
    "http://127.0.0.1",
    "http://127.0.0.1:8080",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()




@app.get("/")
async def main():
    return {"message": "Hello world!"}


@app.get("/load-katalog")
async def loadKatalog(db: Session = Depends(get_db)):
    products = crud.get_katalog(db)
    return products

