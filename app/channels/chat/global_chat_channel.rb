# frozen_string_literal: true

module Chat
  class GlobalChatChannel < ApplicationCable::Channel
    CHANNEL_PREFIX = "global_chat"
    MESSAGE_INTERVAL = 0.1
    MAX_MESSAGES = 10

    MESSAGE_ACTION = "message"
    WAIT_ACTION = "wait"

    def subscribed
      @messages_queue = Queue.new

      @consumer_thread = Thread.new do
        loop do
          message = @messages_queue.pop

          ActionCable.server.broadcast(CHANNEL_PREFIX, message) if message

          sleep(MESSAGE_INTERVAL)
        end
      end

      stream_from CHANNEL_PREFIX
    end

    def receive(data)
      if @messages_queue.size >= MAX_MESSAGES
        transmit(wait_message)
      else
        @messages_queue.push(chat_message(data))
      end
    end

    def unsubscribed
      @consumer_thread.kill
    end

    private

    def wait_message
      {
        action: WAIT_ACTION,
        body: {
          message: "Too many messages! Please wait..."
        }
      }
    end

    def chat_message(data)
      {
        action: MESSAGE_ACTION,
        body: {
          id: data["id"],
          message: data["message"],
          timestamp: data["timestamp"]
        }
      }
    end
  end
end
