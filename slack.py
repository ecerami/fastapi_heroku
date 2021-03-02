# A Bare Bones Slack API
# Illustrates basic usage of FastAPI
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import List

# Message class defined in Pydantic
class Message(BaseModel):
    channel: str
    author: str
    text: str


# Instantiate the FastAPI
app = FastAPI()

# In a real app, we would have a database.
# But, let's keep it super simple for now!
channel_list = ["general", "dev", "marketing"]
message_map = {}
for channel in channel_list:
    message_map[channel] = []

@app.get("/status")
def get_status():
    """Get status of messaging server."""
    return ({"status":  "running"})

@app.get("/channels", response_model=List[str])
def get_channels():
    """Get all channels in list form."""
    return channel_list


@app.get("/messages/{channel}", response_model=List[Message])
def get_messages(channel: str):
    """Get all messages for the specified channel."""
    return message_map.get(channel)


@app.post("/post_message", status_code=status.HTTP_201_CREATED)
def post_message(message: Message):
    """Post a new message to the specified channel."""
    channel = message.channel
    if channel in channel_list:
        message_map[channel].append(message)
        return message
    else:
        raise HTTPException(status_code=404, detail="channel not found")
