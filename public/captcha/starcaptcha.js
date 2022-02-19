var StarCaptcha={
	key:null,
	session:null,
	warp:[],
	resolve: function(session) {},
	init: function init(key,success,fail){
		this.key=key;
		this.resolve = success;;var StarCaptcha={key:null,session:null,warp:[],resolve:function(session){},init:function init(key,success,fail){this.key=key;this.resolve=success;$(function(){$(window).scroll(function(){let top=$(window).scrollTop();$(".starcaptcha_box").css("top",top+"px")})})},start:function(){this.warp=[];var _this=this;$('.starcaptcha_box').show();$('.starcaptcha_box').html('<div class="cabox"><div class="cabox_footer"><a href="javascript:StarCaptcha.closebox();" id="close_captcha"><svg t="1645179056346" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2707" width="32" height="32"><path d="M512 853.333333a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m0 85.333334C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z" p-id="2708"></path><path d="M374.314667 315.733333l328.832 328.832-60.330667 60.330667-328.832-328.874667z" p-id="2709"></path><path d="M706.56 375.594667l-328.832 328.874666-60.330667-60.330666 328.832-328.874667z" p-id="2710"></path></svg></a></div><p style="padding:0 10px">请稍后，正在加载中...</p></div>');$.post({url:"https://apiservice.starfours.cn/captcha/",data:'type=session&id='+this.key,dataType:"json",success:function(res){if(res.code==0){_this.session=res.session_id;$('.cabox').html('<p style="padding:0 10px">请按<span style="color:#007bff;">语序</span>依次点击下列文字:</p><div class="cabox_body"><img id="caimg" src="'+res.img+'"/></div><div class="cabox_footer"><a href="javascript:StarCaptcha.closebox();" id="close_captcha"><svg t="1645179056346" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2707" width="32" height="32"><path d="M512 853.333333a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m0 85.333334C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z" p-id="2708"></path><path d="M374.314667 315.733333l328.832 328.832-60.330667 60.330667-328.832-328.874667z" p-id="2709"></path><path d="M706.56 375.594667l-328.832 328.874666-60.330667-60.330666 328.832-328.874667z" p-id="2710"></path></svg></a><a href="javascript:StarCaptcha.start();" id="refresh_captcha"><svg t="1645179178586" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3511" width="32" height="32"><path d="M699.733 776.533C644.267 810.667 580.267 832 516.267 832 328.533 832 179.2 686.933 179.2 503.467c0-46.934 8.533-89.6 29.867-132.267l4.266 29.867c4.267 17.066 25.6 25.6 42.667 21.333 17.067-4.267 25.6-25.6 21.333-42.667l-38.4-115.2c-4.266-17.066-25.6-25.6-42.666-21.333L76.8 285.867c-17.067 4.266-25.6 25.6-21.333 42.666 4.266 17.067 25.6 25.6 42.666 21.334l46.934-12.8C119.467 392.533 102.4 448 102.4 512c0 221.867 183.467 401.067 409.6 401.067 81.067 0 157.867-21.334 226.133-64 17.067-12.8 21.334-34.134 12.8-51.2-12.8-25.6-34.133-34.134-51.2-21.334z m256-81.066c-8.533-17.067-25.6-25.6-42.666-17.067l-38.4 17.067c34.133-59.734 51.2-123.734 51.2-192 0-221.867-183.467-401.067-409.6-401.067-85.334 0-162.134 25.6-230.4 68.267-17.067 12.8-21.334 34.133-12.8 51.2 12.8 17.066 34.133 21.333 51.2 8.533 55.466-34.133 119.466-55.467 187.733-55.467 187.733 0 337.067 145.067 337.067 328.534 0 55.466-12.8 106.666-38.4 153.6 0 0 0 4.266-4.267 4.266L793.6 627.2c-8.533-17.067-25.6-25.6-42.667-17.067-17.066 8.534-25.6 25.6-17.066 42.667L780.8 768c8.533 17.067 25.6 25.6 42.667 17.067l115.2-46.934c17.066-8.533 25.6-25.6 17.066-42.666z" p-id="3512"></path></svg></a><a href="javascript:StarCaptcha.sendinfo();" id="define_captcha" class="define_captcha">确定</a></div>');var clicknum=0;$('.cabox_body').click(function(e){clicknum=clicknum+1;var offset=$(this).offset();var top=Math.round(e.pageY-offset.top-10);var left=Math.round(e.pageX-offset.left-10);_this.warp.push(top+'|'+left);$(this).append('<div class="point-area" style="background-color:#1abd6c;color:#fff;z-index:9999;width:30px;height:30px;text-align:center;line-height:30px;border-radius: 50%;position:absolute;top:'+top+'px;left:'+left+'px;">'+clicknum+'</div>')})}else{$('.cabox').html('<div class="cabox_footer"><a href="javascript:StarCaptcha.closebox();" id="close_captcha"><svg t="1645179056346" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2707" width="32" height="32"><path d="M512 853.333333a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m0 85.333334C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z" p-id="2708"></path><path d="M374.314667 315.733333l328.832 328.832-60.330667 60.330667-328.832-328.874667z" p-id="2709"></path><path d="M706.56 375.594667l-328.832 328.874666-60.330667-60.330666 328.832-328.874667z" p-id="2710"></path></svg></a></div><p style="padding:0 10px">获取验证码失败了，请尝试重新获取...<br>错误信息:'+res.msg+'</p>')}},error:function(data){$('.cabox').html('<div class="cabox_footer"><a href="javascript:StarCaptcha.closebox();" id="close_captcha"><svg t="1645179056346" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2707" width="32" height="32"><path d="M512 853.333333a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m0 85.333334C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z" p-id="2708"></path><path d="M374.314667 315.733333l328.832 328.832-60.330667 60.330667-328.832-328.874667z" p-id="2709"></path><path d="M706.56 375.594667l-328.832 328.874666-60.330667-60.330666 328.832-328.874667z" p-id="2710"></path></svg></a></div><p style="padding:0 10px">获取验证码失败了，请尝试重新获取...<br></p>')}})},closebox:function(){$('.starcaptcha_box').html('');$('.starcaptcha_box').hide()},sendinfo:function(){var warplist=JSON.stringify(this.warp);var session=this.session;var _this=this;$.post({url:"https://apiservice.starfours.cn/captcha/",data:'type=sendinfo&id='+session+'&warp='+warplist,dataType:"json",success:function(res){if(res.code==0){if(res.status==true){$('.starcaptcha_box').html('');$('.starcaptcha_box').hide();_this.resolve(session)}else{_this.start();alert('验证失败，请重新验证!')}}else{alert(res.msg)}},error:function(data){alert('出错了...请重新提交验证')}})}};;
		$(function () {
		//滚动条滚动事件
			$(window).scroll(function() {
				let top = $(window).scrollTop();
				$(".starcaptcha_box").css("top",top+"px");
			});
		});
	},
	start: function(){
		this.warp=[];
		var _this = this;
		$('.starcaptcha_box').show();
		$('.starcaptcha_box').html('<div class="cabox"><div class="cabox_footer"><a href="javascript:StarCaptcha.closebox();" id="close_captcha"><svg t="1645179056346" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2707" width="32" height="32"><path d="M512 853.333333a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m0 85.333334C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z" p-id="2708"></path><path d="M374.314667 315.733333l328.832 328.832-60.330667 60.330667-328.832-328.874667z" p-id="2709"></path><path d="M706.56 375.594667l-328.832 328.874666-60.330667-60.330666 328.832-328.874667z" p-id="2710"></path></svg></a></div><p style="padding:0 10px">请稍后，正在加载中...</p></div>');
		$.post({
			url: "https://apiservice.starfours.cn/captcha/",
			data:'type=session&id='+this.key,
			dataType: "json",
			success: function(res) {
				if(res.code==0){
					_this.session=res.session_id;
					$('.cabox').html('<p style="padding:0 10px">请按<span style="color:#007bff;">语序</span>依次点击下列文字:</p><div class="cabox_body"><img id="caimg" src="'+res.img+'"/></div><div class="cabox_footer"><a href="javascript:StarCaptcha.closebox();" id="close_captcha"><svg t="1645179056346" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2707" width="32" height="32"><path d="M512 853.333333a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m0 85.333334C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z" p-id="2708"></path><path d="M374.314667 315.733333l328.832 328.832-60.330667 60.330667-328.832-328.874667z" p-id="2709"></path><path d="M706.56 375.594667l-328.832 328.874666-60.330667-60.330666 328.832-328.874667z" p-id="2710"></path></svg></a><a href="javascript:StarCaptcha.start();" id="refresh_captcha"><svg t="1645179178586" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3511" width="32" height="32"><path d="M699.733 776.533C644.267 810.667 580.267 832 516.267 832 328.533 832 179.2 686.933 179.2 503.467c0-46.934 8.533-89.6 29.867-132.267l4.266 29.867c4.267 17.066 25.6 25.6 42.667 21.333 17.067-4.267 25.6-25.6 21.333-42.667l-38.4-115.2c-4.266-17.066-25.6-25.6-42.666-21.333L76.8 285.867c-17.067 4.266-25.6 25.6-21.333 42.666 4.266 17.067 25.6 25.6 42.666 21.334l46.934-12.8C119.467 392.533 102.4 448 102.4 512c0 221.867 183.467 401.067 409.6 401.067 81.067 0 157.867-21.334 226.133-64 17.067-12.8 21.334-34.134 12.8-51.2-12.8-25.6-34.133-34.134-51.2-21.334z m256-81.066c-8.533-17.067-25.6-25.6-42.666-17.067l-38.4 17.067c34.133-59.734 51.2-123.734 51.2-192 0-221.867-183.467-401.067-409.6-401.067-85.334 0-162.134 25.6-230.4 68.267-17.067 12.8-21.334 34.133-12.8 51.2 12.8 17.066 34.133 21.333 51.2 8.533 55.466-34.133 119.466-55.467 187.733-55.467 187.733 0 337.067 145.067 337.067 328.534 0 55.466-12.8 106.666-38.4 153.6 0 0 0 4.266-4.267 4.266L793.6 627.2c-8.533-17.067-25.6-25.6-42.667-17.067-17.066 8.534-25.6 25.6-17.066 42.667L780.8 768c8.533 17.067 25.6 25.6 42.667 17.067l115.2-46.934c17.066-8.533 25.6-25.6 17.066-42.666z" p-id="3512"></path></svg></a><a href="javascript:StarCaptcha.sendinfo();" id="define_captcha" class="define_captcha">确定</a></div>');
					var clicknum=0;
					$('.cabox_body').click(function(e){
						clicknum=clicknum+1;
						var offset=$(this).offset();
						var top=Math.round(e.pageY-offset.top-10);
						var left=Math.round(e.pageX-offset.left-10);
						_this.warp.push(top+'|'+left);
						$(this).append('<div class="point-area" style="background-color:#1abd6c;color:#fff;z-index:9999;width:30px;height:30px;text-align:center;line-height:30px;border-radius: 50%;position:absolute;top:'+top+'px;left:'+left+'px;">'+clicknum+'</div>');
					})
				}else{
					$('.cabox').html('<div class="cabox_footer"><a href="javascript:StarCaptcha.closebox();" id="close_captcha"><svg t="1645179056346" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2707" width="32" height="32"><path d="M512 853.333333a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m0 85.333334C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z" p-id="2708"></path><path d="M374.314667 315.733333l328.832 328.832-60.330667 60.330667-328.832-328.874667z" p-id="2709"></path><path d="M706.56 375.594667l-328.832 328.874666-60.330667-60.330666 328.832-328.874667z" p-id="2710"></path></svg></a></div><p style="padding:0 10px">获取验证码失败了，请尝试重新获取...<br>错误信息:'+res.msg+'</p>');
				}
			},error: function(data) {
				$('.cabox').html('<div class="cabox_footer"><a href="javascript:StarCaptcha.closebox();" id="close_captcha"><svg t="1645179056346" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2707" width="32" height="32"><path d="M512 853.333333a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m0 85.333334C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z" p-id="2708"></path><path d="M374.314667 315.733333l328.832 328.832-60.330667 60.330667-328.832-328.874667z" p-id="2709"></path><path d="M706.56 375.594667l-328.832 328.874666-60.330667-60.330666 328.832-328.874667z" p-id="2710"></path></svg></a></div><p style="padding:0 10px">获取验证码失败了，请尝试重新获取...<br></p>');
			}
		})
	},
	closebox: function(){
		$('.starcaptcha_box').html('');
		$('.starcaptcha_box').hide();
	},
	sendinfo: function(){
		var warplist=JSON.stringify(this.warp);
		var session =this.session;
		var _this = this;
		$.post({
			url: "https://apiservice.starfours.cn/captcha/",
			data:'type=sendinfo&id='+session+'&warp='+warplist,
			dataType: "json",
			success: function(res) {
				if(res.code==0){
					if(res.status==true){
						$('.starcaptcha_box').html('');
						$('.starcaptcha_box').hide();
						_this.resolve(session);
					}else{
						_this.start();
						alert('验证失败，请重新验证!');
					}
				}else{
					alert(res.msg);
				}
			},error: function(data) {
				alert('出错了...请重新提交验证');
			}
		})
	}
};