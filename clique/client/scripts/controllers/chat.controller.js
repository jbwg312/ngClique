import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Users } from '../../../lib/collections';

export default class ChatCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.chatId = this.$stateParams.chatId;

    this.helpers({
      data() {
        return Chats.findOne(this.chatId);
      },
			users(){
				console.log(Users.find());
				return Users.find();
			}
    });
  }
}

ChatCtrl.$inject = ['$stateParams'];
