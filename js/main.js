var messenger = {
	users:[{
		pic: 'images/avatar.jpg',
		name: 'Alan Jensen',
		status: 'online'
	},{
		pic: 'images/avatar.jpg',
		name: 'Jacquelin Holmes',
		status: 'online'
	},{
		pic: 'images/avatar.jpg',
		name: 'Eugene Simpson',
		status: 'offline'
	},{
		pic: 'images/avatar.jpg',
		name: 'Thomas Morgan',
		status: 'idle'
	},{
		pic: 'images/avatar.jpg',
		name: 'Hamish Labatt',
		status: 'online'
	},{
		pic: 'images/avatar.jpg',
		name: 'Katy Perry',
		status: 'offline'
	}],

	renderUsers: function () {
		var list = '';

		for (var i=0, len=this.users.length; i<len; i++) {
			list+= '<li>'
					+ '<img class="pic" src="'+ this.users[i].pic +'"/>'
					+ '<span class="msg">'+ this.users[i].name +'.</span>'
					+ '<i class="fa fa-circle '+ this.users[i].status +'"></i>'
				'</li>';
		}
		$('#user-list').html(list);
	}
}

messenger.renderUsers();