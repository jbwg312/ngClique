import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Users, Groups } from '../../../lib/collections';

export default class ChatsCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.helpers({
      data() {
				return Chats.find();
      },
			users(){
				const arr = [];
				const groups = Groups.find().fetch();
				groups.forEach(function (group) {
					console.log(group.member_id);
					const arr2 = [];
					group.member_id.forEach((member)=>{
						console.log(Users.find({_id: member}).fetch())
					});
					arr.push(arr2)
				})
				Promise.all(arr).then(function(data){
					console.log(data);
					return arr;
				})
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
