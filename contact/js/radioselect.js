$(document).ready(
	function(){
		$("#businessItem").val(0);
		$("#businessItem").css("display", "none");
		$("input[name=customer]").change(
			function(){
				var radiochecked = $("input[name=customer]:checked").val();
				if(radiochecked == 0){
					$("#businessItem").val(0);
					$("#businessItem").css("display", "none");
					$("#consumerItem").val('');
					$("#consumerItem").css("display", "block");
				}
				else if(radiochecked == 1){
					$("#consumerItem").val(0);
					$("#consumerItem").css("display", "none");
					$("#businessItem").val('');
					$("#businessItem").css("display", "block");
				}
			}
		)
}
)