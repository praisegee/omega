// let videoList = document.querySelectorAll('#video .video-list .vid');
// let mainVideo = document.querySelector('#video .main-video iframe');
// let title = document.querySelector('#video .main-video .title');

// videoList.forEach(function(video) {
//     video.onclick = function() {
//         videoList.forEach(function(vid) {
//             vid.classList.remove('active');
//         });
//         video.classList.add('active');
//         if (video.classList.contains('active')) {
//             let src = video.children[0].getAttribute('scr');
//             mainVideo.src = src;
//         }
//     }
// })


$(function() {
    // alert('jQuery working..');
    var omegaUserEmail = localStorage.getItem('omegaUserEmail');
    $('.container .member-pop').css({display: 'none'});
    
    if (!omegaUserEmail || omegaUserEmail === null || omegaUserEmail === "") {
        $('.container .member-pop').css({display: 'flex'});
        $('#register').show();
    }

    var $membershipForm = $('.container .member-pop .form-container form');

    $membershipForm.on('submit', function(e) {
        e.preventDefault();

        // get the user data
        var fullname = $('#fullname').val();
        var email = $('#email').val();
        var address = $('#address').val();
        var dob = $('#dob').val();
        var phone = $('#phone').val();

        // save email into local storage for later remembrance
        localStorage.setItem('omegaUserEmail', email);

        $.ajax({
            type: "POST",
            url: "/",
            data: {
                fullname: fullname,
                email: email,
                address: address,
                dob: dob,
                phone: phone,
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });

        $('#register').hide(300);
        $('#success').show(300);

        setTimeout(function() {
            $('.container .member-pop').hide(300);
        }, 2000);
    
    });

    $('i#next-btn').on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next('.slide-img');

        if (nextImg.length) {
            currentImg.removeClass('active');
            nextImg.addClass('active');
        } else {
            currentImg = $('img.slide-img:first')
        }
    });

    $('i#prev-btn').on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev('.slide-img');

        if (prevImg.length) {
            currentImg.removeClass('active');
            prevImg.addClass('active');
        } else {
            currentImg = $('img.slide-img:last')
        }
    });

    $('.tab-panel .tabs li').on('click', function() {
        $currentTab = $(this);
        $secondTab = $(this).siblings();

        $currentTab.addClass('active-tab');
        $secondTab.removeClass('active-tab');

        var $panelToShow = $(this).attr('data-id');
        $('.tab-panel .active-panel').hide(300, function() {
            $('#'+$panelToShow).show(300, function() {
                $(this).addClass('active-panel');
            });
        });
        
    });

    var $chatForm = $('.chat .footer form');
    var $sendBtn = $('#send-btn');

    $chatForm.on('submit', function(e) {
        e.preventDefault();

        var $chatMsg = $('#chat-msg').val();
        alert($chatMsg); 
        // $sendBtn.on('click', function() {
        //     alert($chatMsg); 
        // });
    });


});