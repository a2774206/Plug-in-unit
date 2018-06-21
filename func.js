var timer;

var old;

var tag;

function main(id) {
	//		setTimeout(function(){
	//			alert('开始！请准确右击要获取的信息');
	//		})
	if(id=='g'){
		getNewInfo();
	}
	else if(id=="f"){
		//谷歌插件用document.documentElement.scrollTop
		//360使用 document.body.scrollTop
		var top = document.body.scrollTop = document.documentElement.scrollHeight;
	}
	else{
		document.body.scrollTop = 0
	}
}

function getNewInfo() {
	var head = document.getElementsByTagName('head')[0];
	var jquery = document.createElement('script');
	jquery.src = "https://libs.baidu.com/jquery/2.0.0/jquery.min.js";
	head.appendChild(jquery);
	
	var desc = function(a, b) {
		return $(a).find('.WB_from a').text() > $(b).find('.WB_from a').text() ? -1 : 1;
	}
	
	var sortByInput = function(sortBy) {
		var sortEle = $('.WB_feed_like').sort(sortBy);
		$(".WB_feed").empty().append(sortEle);
	}

	setTimeout(function() {
		sortByInput(desc);
	}, 50)
}



