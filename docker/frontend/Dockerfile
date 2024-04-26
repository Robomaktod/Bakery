FROM node:latest

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json separately to leverage Docker cache
COPY frontend/package.json ./


RUN npm install
RUN npm install react-router-dom
RUN npm install -D tailwindcss

COPY frontend/tailwind.config.js .

# Add app
COPY frontend/ ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]