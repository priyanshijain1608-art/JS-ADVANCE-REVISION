import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # For development only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/hello")
def hellofun():
    return {"message":"hello dear user!"}


@app.post("/sendname/{name}")
def usename(name:str):
    return{
        "message":f"hello {name}"
    }


