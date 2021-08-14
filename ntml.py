import discord
import datetime
from discord.ext import commands
from discord.ext import tasks

token = open("token.txt", "r").read()

channel_12345678 = 661596005191647233

class MyClient(discord.Client):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # an attribute we can access from our task
        self.counter = 0

        # start the task to run in the background
        self.my_background_task.start()

    async def on_ready(self):
        print('Logged in as')
        print(self.user.name)
        print(self.user.id)
        print('------')

    @tasks.loop(seconds=30) # task runs every 30 seconds
    async def my_background_task(self):
        message_send_time = datetime.datetime.now()
        message_send_time = message_send_time.strftime("%d %b %Y %H:%M:%S.%f")
        
        channel = self.get_channel(channel_12345678) # channel ID goes here
        self.counter += 1
        
        await channel.send("```" + str(self.counter) + " " + message_send_time + "```")

    @my_background_task.before_loop
    async def before_my_task(self):
        await self.wait_until_ready() # wait until the bot logs in

client = MyClient()
client.run(token)