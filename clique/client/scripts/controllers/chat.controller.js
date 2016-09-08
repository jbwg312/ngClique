import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Messages, Users, Groups } from '../../../lib/collections';


export default class ChatCtrl extends Controller {
  constructor() {
    super(...arguments);
    this.groupId = this.$stateParams.groupId;
    this.isIOS = Ionic.Platform.isWebView() && Ionic.Platform.isIOS();
    this.isCordova = Meteor.isCordova;

    this.helpers({
      messages() {
        return Messages.find({ chatId: this.groupId });
      },
      data() {
        return Groups.findOne(this.groupId);
      },
			users(){
				let arr = [];
				let group = Groups.findOne(this.groupId);
				if(group){
					group.member_id.forEach((thingy)=>{
						arr.push(Users.find({userId: thingy}).fetch()[0]);
					})
				}
				return arr;
			},
			members(){
				let arr = [];
				let group = Groups.findOne(this.groupId);
				if(group){
					group.member_id.forEach((thingy)=>{
						var x = Users.find({userId: thingy}).fetch()[0];
						arr.push(x.name);
					})
				}
				return arr.join(', ').toLowerCase();
			}
    });
  }
  sendMessage() {
    if (_.isEmpty(this.message)) return;

    this.callMethod('newMessage', {
      text: this.message,
      type: 'text',
      chatId: this.chatId
    });

    delete this.message;
  }
  inputUp () {
   if (this.isIOS) {
     this.keyboardHeight = 216;
   }

   this.scrollBottom(true);
 }

 inputDown () {
   if (this.isIOS) {
     this.keyboardHeight = 0;
   }

   this.$ionicScrollDelegate.$getByHandle('chatScroll').resize();
 }

 closeKeyboard () {
   if (this.isCordova) {
     cordova.plugins.Keyboard.close();
   }
 }

 scrollBottom(animate) {
   this.$timeout(() => {
     this.$ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(animate);
   }, 300);
 }
}

ChatCtrl.$inject = ['$stateParams', '$timeout', '$ionicScrollDelegate'];
