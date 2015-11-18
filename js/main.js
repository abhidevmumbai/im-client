var messenger = {
	animationEnd: 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    users: {
        aj: {
            pic: 'images/avatar.jpg',
            name: 'Alan Jensen',
            status: 'online',
            department: 'Administrator US Group',
            email: 'alan.jensen@corp.company.com',
            details: {
	            mobile: '+44 (0) 7887 554 433',
	            location: 'UK-London',
	            manager: 'Alan Jenson',
	            ext: '14592',
	            skill: 'Expert User (50k+)',
	            lastActivity: 'Online Now'
	        }
        },
        jh: {
            pic: 'images/avatar.jpg',
            name: 'Jacquelin Holmes',
            status: 'online',
            department: 'Administrator UK Group',
            email: 'jaqueline.holmes@corp.company.com',
            details: {
	            mobile: '+44 (0) 7887 554 433',
	            location: 'UK-London',
	            manager: 'Alan Jenson',
	            ext: '14592',
	            skill: 'Expert User (50k+)',
	            lastActivity: 'Online Now'
	        }
        },
        es: {
            pic: 'images/avatar.jpg',
            name: 'Eugene Simpson',
            status: 'offline',
            department: 'Administrator UK Group',
            email: 'eugene.simpson@corp.company.com',
            details: {
	            mobile: '+44 (0) 7887 554 433',
	            location: 'UK-London',
	            manager: 'Alan Jenson',
	            ext: '14592',
	            skill: 'Expert User (50k+)',
	            lastActivity: 'Offline'
	        }
        },
        tm: {
            pic: 'images/avatar.jpg',
            name: 'Thomas Morgan',
            status: 'idle',
            department: 'Administrator UK Group',
            email: 'thomas.morgan@corp.company.com',
            details: {
	            mobile: '+44 (0) 7887 554 433',
	            location: 'UK-London',
	            manager: 'Alan Jenson',
	            ext: '14592',
	            skill: 'Expert User (50k+)',
	            lastActivity: 'Idle'
	        }
        },
        hl: {
            pic: 'images/avatar.jpg',
            name: 'Hamish Labatt',
            status: 'online',
            department: 'Administrator UK Group',
            email: 'hamish.labatt@corp.company.com',
            details: {
	            mobile: '+44 (0) 7887 554 433',
	            location: 'UK-London',
	            manager: 'Alan Jenson',
	            ext: '14592',
	            skill: 'Expert User (50k+)',
	            lastActivity: 'Online Now'
	        }
        },
        kp: {
            pic: 'images/avatar.jpg',
            name: 'Katy Perry',
            status: 'offline',
            department: 'Administrator UK Group',
            email: 'katy.perry@corp.company.com',
            details: {
	            mobile: '+44 (0) 7887 554 433',
	            location: 'UK-London',
	            manager: 'Alan Jenson',
	            ext: '14592',
	            skill: 'Expert User (50k+)',
	            lastActivity: 'Offline'
	        }
        }
    },

    init: function() {
        this.renderUsers();
        this.bindEvents();

        $('#user-list #jh').click();
    },

    renderUsers: function() {
        var list = '';

        for (key in this.users) {
            list += '<li id="'+ key +'">' + '<img class="pic FL" src="' + this.users[key].pic + '"/>' + '<span class="msg">' + this.users[key].name + '.</span>' + '<i class="fa fa-circle ' + this.users[key].status + '"></i>'
            '</li>';
        }
        $('#user-list').html(list);
    },

    viewProfile: function (id, flag) {
    	var profilePane = $('.profilePane'),
    		user = this.users[id],
    		html = '<p class="actions">'
    				+'<button class="emailBtn FL"><i class="fa fa-envelope"></i></button>'
    				+'<button class="callBtn FR"><i class="fa fa-phone"></i></button>'
    				+'<img class="pic" src="'+ user.pic +'" /></p>'
                    +'<p class="name">'+ user.name +'</p>'
                    +'<p>84/1300</p>'
                    +'<p>'+ user.department +'</p>'
                    +'<p>'+ user.email +'</p>',
            details = '<ul class="details">';

        for (key in user.details) {
        	details += '<li>'
                        +'<div class="term">'+ key +':</div>'
                        +'<div class="desc">'+ user.details[key] +'</div>'
                    '</li>';
        }
        details += '</ul>';
		html += details;    	

    	profilePane.find('.name').text(user.name);
    	profilePane.find('.content').html(html);
    	if (flag) {
    		profilePane.fadeIn('slow', function () {
    			$(this).find('.emailBtn').show().addClass('animated zoomIn').one(messenger.animationEnd, function () {
    				$(this).removeClass('animated zoomIn');
    			});

    			$(this).find('.callBtn').show().addClass('animated zoomIn').one(messenger.animationEnd, function () {
    				$(this).removeClass('animated zoomIn');
    			});
    		});
    	} else {
    		profilePane.fadeOut('slow');
    	}
    },

    bindEvents: function() {
    	$('#user-list').on('click', 'li', function() {
    		var id = $(this).attr('id');

    		$('#user-list li').removeClass('active');
    		$(this).addClass('active');
    		$('.leftPane .header .name').text(messenger.users[id].name);
    		
    		if ($('.profilePane').is(':visible')) {
    			messenger.viewProfile(id, true);
    		}
        });

        $('#profileBtn').bind('click', function(ev) {
        	ev.preventDefault();
        	var id = $('#user-list li.active').attr('id'),
        		flag = $('.profilePane').is(':visible');
        	messenger.viewProfile(id, !flag);
        });

        $('.profilePane .backBtn').bind('click', function(ev) {
        	ev.preventDefault();
        	$('.profilePane').fadeOut('slow');
        });

        /* action btns */
		$('.callBtn').bind('click', function(ev) {
        	ev.preventDefault();
        	messenger.startCall();
        });        
    }
}

messenger.init();