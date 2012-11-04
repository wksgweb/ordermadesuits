$(document).ready(function(){
  $("table#requiredTable").each(function(){
    jQuery(this).find("tr:even").addClass("even"),
	jQuery(this).find("tr:odd").addClass("odd");
  });
});