import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Users, Groups } from '../../../lib/collections';

export default class ChatCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.chatId = this.$stateParams.chatId;

    this.helpers({
      data() {
				var obj = {};
        return Chats.findOne(this.chatId);
      },
			users(){
				return Users.find();
			}
    });
  }
}

ChatCtrl.$inject = ['$stateParams'];
