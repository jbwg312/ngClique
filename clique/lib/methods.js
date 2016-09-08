import { Meteor } from 'meteor/meteor';
import { Chats, Messages, Users, Groups } from '../lib/collections';


Meteor.methods({
  newMessage(message) {

    check(message, {
      text: String,
      type: 'text',
      chatId: String
    });

    message.timestamp = new Date();

    const messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });

    return messageId;
  }
});
