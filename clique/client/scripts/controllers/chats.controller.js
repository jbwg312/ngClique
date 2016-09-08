import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Groups, Users } from '../../../lib/collections';

export default class ChatsCtrl extends Controller {
  constructor($reactive) {
    super(...arguments);

    this.helpers({
      data() {
				return Chats.find();
      },
			users(){
				let arr = [];
				let groups = Groups.find().fetch();
				groups.map((thing)=>{
					let arr2 = []
					thing.member_id.forEach((thingy)=>{
						arr2.push(Users.find({_id: thingy}));
					})
					arr.push(arr2)
				})
				return arr;
				// return this.callMethod('findUsers');
			},
			groups(){
				return Groups.find()
			}

    });
  }
  remove(chat) {
    this.data.remove(chat);
  }
}

ChatsCtrl.$inject = ['$reactive'];
