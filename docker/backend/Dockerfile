FROM python:3.9-alpine

WORKDIR /code
COPY requirements.txt .

RUN python -m pip install --no-cache-dir --upgrade pip==21.3.1
RUN pip install --no-cache-dir --upgrade pip
RUN pip install -r ./requirements.txt

COPY ./backend /code/backend_app

CMD ["uvicorn", "backend_app.api.main:app", "--host", "0.0.0.0", "--port", "80", "--reload"]
