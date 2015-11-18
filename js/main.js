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

    timer: {
    	secs: 0,
    	mins: 0
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
    		html = 	'<div class="callStatus DN">Calling...</div>'
    				+'<p class="actions">'
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

		html  += '<p class="activeCall DN">'
    				+'<button class="muteBtn FL"><i class="fa fa-microphone-slash"></i></button>'
    				+'<button class="endBtn FR"><i class="fa fa-phone"></i></button>'
    				+'</p>'

		profilePane.css({
			'background': 'url("images/avatar.jpg") center no-repeat',
			'background-size': '100% 100%'
		});
    	profilePane.find('.name').text(user.name);
    	profilePane.find('.content').html(html);

    	// Adding animation to the action btns
    	if (flag) {
    		profilePane.fadeIn('slow', function () {
    			$(this).find('.emailBtn, .callBtn').show().addClass('animated zoomIn').one(messenger.animationEnd, function () {
    				$(this).removeClass('animated zoomIn');
    			});
    		});
    	} else {
    		profilePane.fadeOut('slow');
    	}
    },

    startCall: function () {
    	console.log('starting call');
    	var profilePane = $('.profilePane');
    	profilePane.find('.callStatus').show();
    	$('.callStatus').slideDown();
    	profilePane.find('.details').slideUp();

    	setTimeout(function() {
    		messenger.startTimer();
    	}, 3000);
    },

    endCall: function () {
    	console.log('ending call');
    	var leftPane = $('.leftPane'),
    		rightPane = $('.rightPane'),
    		statusDiv = $('<div class="callStatus DN">Calling...</div>');

    	leftPane.find('.callStatus').slideUp();
    	leftPane.find('.details').slideDown();

    	$('.activeCall, .activeCall button').hide();
		leftPane.find('.emailBtn, .callBtn').show().addClass('animated zoomIn').one(messenger.animationEnd, function () {
			$(this).removeClass('animated zoomIn');
		});

		rightPane.find('.content .callBox').slideUp();
    	// Reset timer
    	clearInterval(messenger.timerId);
    	this.timer.secs = 0;
    	this.timer.mins = 0; 
    },

    startTimer: function () {
    	var leftPane = $('.leftPane'),
    		rightPane = $('.rightPane')
    		secs = new Date,
			time = '';

		rightPane.find('.name').text(messenger.currUser.name);
		rightPane.find('.content .callBox').slideDown();

		$('.activeCall, .activeCall button').show();
		leftPane.find('.emailBtn, .callBtn').hide();

		$('.activeCall').find('.muteBtn, .endBtn').show().addClass('animated zoomIn').one(messenger.animationEnd, function () {
			$(this).removeClass('animated zoomIn');
		});

		messenger.timerId = setInterval(function() {
			messenger.timer.secs = (new Date - secs) / 1000;
			console.log(messenger.timer);
			if (messenger.timer.secs > 60) {
				messenger.timer.mins++;
				messenger.timer.secs = 0;
				secs = new Date;
			}

			if (messenger.timer.secs < 10) {
				time = messenger.timer.mins + ':0' + Math.floor(messenger.timer.secs);
			} else {
				time = messenger.timer.mins + ':' + Math.floor(messenger.timer.secs);
			}
			console.log(time);
			$('.callStatus').text(time);
		}, 1000);
    },

    bindEvents: function() {
    	// User list
    	$('#user-list').on('click', 'li', function() {
    		var id = $(this).attr('id');
    		
    		messenger.currUser = messenger.users[id];

    		$('#user-list li').removeClass('active');
    		$(this).addClass('active');
    		$('.leftPane .header .name').text(messenger.users[id].name);
    		
    		if ($('.profilePane').is(':visible')) {
    			messenger.viewProfile(id, true);
    		}
        });

    	// Profile view
        $('#profileBtn').bind('click', function(ev) {
        	ev.preventDefault();
        	var id = $('#user-list li.active').attr('id'),
        		flag = $('.profilePane').is(':visible');
        	messenger.viewProfile(id, !flag);
        });


        // Profile view back btn
        $('.profilePane .backBtn').bind('click', function(ev) {
        	ev.preventDefault();
        	$('.profilePane').fadeOut('slow');
        });

        /* Profile view action btns */
		$('.profilePane').on('click', '.callBtn', function() {
        	messenger.startCall();
        });

        $('#wrapper').on('click', '.endBtn', function() {
        	messenger.endCall();
        });
    }
}

messenger.init();