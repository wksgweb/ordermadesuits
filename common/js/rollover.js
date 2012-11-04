$(document).ready(
	function(){
		$("#nav img").hover(function(){
			$(this).fadeTo("normal", 0); //マウスオーバーで透明度を0%にする
		},function(){
			$(this).fadeTo("normal", 1.0); //マウスアウトで透明度を100%にする
		},
		$("#side dd a img").hover(function(){
			$(this).fadeTo("fastl", 0); //マウスオーバーで透明度を0%にする
		},function(){
			$(this).fadeTo("normal", 1.0); //マウスアウトで透明度を100%にする
		}
	)
	)
}
)