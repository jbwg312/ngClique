import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Users, Groups } from '../../../lib/collections';

export default class ChatsCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.helpers({
      data() {
        console.log("*************DATA***************");
        console.log(Groups.find());
        return Groups.find();
      }
    });
  }
  remove(chat) {
    this.data.remove(chat);
  }
}
