from fastapi import FastAPI
import sqlalchemy


app = FastAPI()


@app.get("/")
def root():
    return {"Hello": "World"}

