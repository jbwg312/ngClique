import { Mongo } from 'meteor/mongo';

export const Chats = new Mongo.Collection('chats');
export const Messages = new Mongo.Collection('messages');
//TODO : Facebook uses a collection called users already. need to change this to something else
export const Users = new Mongo.Collection('users1');
export const Groups = new Mongo.Collection('groups');
