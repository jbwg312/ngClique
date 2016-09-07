import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Users } from '../../../lib/collections';

export default class ChatsCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.helpers({
      data() {
        return Chats.find();
      },
			users(){
				var x = Users.find();
				console.log(x.collection._docs);
				return Users.find();
			}
    });
  }
  remove(chat) {
    this.data.remove(chat);
  }
}
