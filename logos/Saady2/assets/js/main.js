	

	function changeLang() {

		let language = window.localStorage.getItem('language');
		let themeDir;
		if (language == 'en' || language == "" || language == undefined) {
			window.localStorage.setItem('language', 'ar');
			themeDir = "style-rtl.css"
			window.localStorage.setItem('themeDir' , themeDir);
			location.reload()
		}else {
			themeDir = "style.css";
			window.localStorage.setItem('themeDir' , themeDir);
			window.localStorage.setItem('language', 'en');
			location.reload()
		}
		
        }
        
		$('#langSwitcher').on('click', function (e) {
			changeLang()
		});

		$(window).on('scroll', function () {
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').addClass('active');
			if (scrolled < 300) $('.go-top').removeClass('active');
		});

		$('.go-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 1200);
		});

        function SendMail(){
var url = "https://back.saady.law/send-email";
            var fullName = $("#name").val();
            var eMail = $("#mail").val();
            var subject = $("#subject").val();
            var phone = $("#phone").val();
            var message = $("#message").val();
var fullMessage = "Name : "+fullName +"\n"+ "Mail : "+eMail+"\n"+"Phone : "+phone+"\n"+"Message : "+ message ;
            var body = {
                subject: subject,
                message:fullMessage,
             }
            $.ajax({
                type: "POST",
                url: url,
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify(body),
                success: function(data) {
                location.reload();
                },
                error: function(data) {
                    location.reload();
                }
            });

        }
        function SaveMail(){
            var url = "https://back.saady.law/save-mail";
                        var eMail = $("#subMail").val();
                 
                        var body = {
                            mail: eMail
                         }
                        $.ajax({
                            type: "POST",
                            url: url,
                            contentType: "application/json; charset=UTF-8",
                            data: JSON.stringify(body),
                            success: function(data) {
                            location.reload();
                            },
                            error: function(data) {
                                location.reload();
                            }
                        });
            
                    }