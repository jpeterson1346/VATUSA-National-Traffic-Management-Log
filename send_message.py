import discord
import datetime
import re

from discord.ext import commands

MIT_ENTRY = {
    "ENTRY_TIME" : -1,
    "AIRPORT" : -1,
    "RESTRICT" : -1,
    "VIA" : -1,
    "MIT_VALUE" : -1,
    "IMPACT" : -1,
    "EXCLUSIONS" : -1,
    "START_TIME" : -1,
    "END_TIME" : -1,
    "REQUEST" : -1,
    "PROVIDE" : -1,
    "QUALIFIER" : 0,
    "ACFT_TYPE" : 0,
    "ALTITUDE" : 0,
    "SPEED" : 0    
}

intents = discord.Intents.default()

channel_12345678 = 661596005191647233
START_KEY = "$ntml"

client = discord.Client(intents = intents)
bot = commands.Bot(command_prefix = ".")

token = open("token.txt", "r").readline()

#@client.event
#async def on_message(message):
    #if message.content.startswith(START_KEY):
        #ntml_entry = message.content
        #ntml_entry = re.match("\$ntml (.*)",ntml_entry).group(1)
        ## print("Message: " + ntml_entry)
        
        #ntml_entry_time = datetime.datetime.utcnow()
        #ntml_entry_time = ntml_entry_time.strftime("%d/%H%M")
        ## print(ntml_entry_time)

        #channel = client.get_channel(channel_12345678)
        #await message.channel.send("```" + ntml_entry_time + "\t" + ntml_entry + "```")
        
        #exit('Finished')

#@bot.command(name = "ntml")
#async def start_ntml_entry(ctx, type: str, *, content: str):
    #response = ""
    #await ctx.send("**New NTML entry for " + type + ".**")
    
    #ntml_entry_time = datetime.datetime.utcnow()
    #ntml_entry_time = ntml_entry_time.strftime("%d/%H%M")
    
    #if type == "MIT":
        #m = re.match("(?P<airport>[A-Z0-9a-z\,]{1,})( ?)(?P<who>[A-Za-z0-9]{0,})( ?)(via (?P<via_fix>[A-Z0-9]{1,})) ?(?P<MIT_value>[0-9]{1,})(MIT| MIT)(.*)(?P<start_time>[0-9]{4})( {0,1}- {0,1})(?P<end_time>[0-9]{4}) (?P<requesters>[0-9A-Za-z\, ]{1,})\:(?P<providers>[A-Z0-9a-z\, ]{1,})",content)
        
        #MIT_ENTRY["ENTRY_TIME"] = ntml_entry_time + "\t"
        #MIT_ENTRY["AIRPORT"] = m.group("airport").strip()
        #MIT_ENTRY["RESTRICT"] = " " + m.group("who").strip()
        #MIT_ENTRY["VIA"] = " via " + m.group("via_fix").strip()
        #MIT_ENTRY["START_TIME"] = " " + m.group("start_time").strip()
        #MIT_ENTRY["END_TIME"] = "-" + m.group("end_time").strip()
        #MIT_ENTRY["REQUEST"] = " " + m.group("requesters").strip()
        #MIT_ENTRY["PROVIDE"] = ":" + m.group("providers").strip()
        ## print(MIT_ENTRY)
        #for x in MIT_ENTRY.values():
            #if str(x) not in ("-1","0"):
                #response += str(x)
            
        #await ctx.send("```" + response + "```")
        ## await ctx.send("What MIT?")
        
    #exit("All done!")
    
@bot.command(name = "ntml")
async def start_ntml_entry(ctx, type: str, *, content: str):
    response = ""
    # await ctx.send("**New NTML entry for " + type + ".**")
    
    ntml_entry_time = datetime.datetime.utcnow()
    ntml_entry_time = ntml_entry_time.strftime("%d/%H%M")
    
    if type == "MIT":
        ntml_entry = "```" + ntml_entry_time + "\t" + content + "```"
        await ctx.reply("NTML **" + type + "** Entry Preview:\n" + ntml_entry)
        return ntml_entry
                        
        
#client.run(token)
bot.run(token)