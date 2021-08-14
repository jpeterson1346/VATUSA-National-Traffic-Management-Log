pip install discord.py
pip install pymongo
pip install dsnpython

import discord
from discord.ext import commands
import pymongo
from pymongo import MongoClient

token = open("token.txt", "r").read()
client = discord.Client()
@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')
client.run(token)