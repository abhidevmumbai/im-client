var messenger = {
    users: {
        aj: {
            pic: 'images/avatar.jpg',
            name: 'Alan Jensen',
            status: 'online'
        },
        jh: {
            pic: 'images/avatar.jpg',
            name: 'Jacquelin Holmes',
            status: 'online'
        },
        es: {
            pic: 'images/avatar.jpg',
            name: 'Eugene Simpson',
            status: 'offline'
        },
        tm: {
            pic: 'images/avatar.jpg',
            name: 'Thomas Morgan',
            status: 'idle'
        },
        hl: {
            pic: 'images/avatar.jpg',
            name: 'Hamish Labatt',
            status: 'online'
        },
        kp: {
            pic: 'images/avatar.jpg',
            name: 'Katy Perry',
            status: 'offline'
        }
    },

    init: function() {
        this.renderUsers();
        this.bindEvents();
    },

    renderUsers: function() {
        var list = '';

        for (key in this.users) {
            list += '<li id="'+ key +'">' + '<img class="pic FL" src="' + this.users[key].pic + '"/>' + '<span class="msg">' + this.users[key].name + '.</span>' + '<i class="fa fa-circle ' + this.users[key].status + '"></i>'
            '</li>';
        }
        $('#user-list').html(list);
    },

    viewProfile: function (id) {
    	var user = this.users[id],
    		html = '';
    },

    bindEvents: function() {
    	$('#user-list').on('click', 'li', function(ev) {
    		ev.preventDefault();
    		$('#user-list li').removeClass('active');
    		$(this).addClass('active');
    		$('.leftPane .header .name').text(messenger.users[$(this).attr('id')].name);
        });

        $('#profileBtn').bind('click', function(ev) {
        	ev.preventDefault();
        	var id = $('#user-list li.active').attr('id');
        	messenger.viewProfile(id);
        	$('.profilePane').fadeToggle('slow');
        });

        $('.profilePane .backBtn').bind('click', function(ev) {
        	ev.preventDefault();
        	$('.profilePane').fadeOut('slow');
        });
    }
}

messenger.init();