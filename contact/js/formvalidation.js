$(function(){
var validation = $("form")
	.exValidation({
	rules: {
	  consumerItem: "chkselect",
	  businessItem: "chkselect",
	  contactContents: "chkrequired",
	  mail: "chkrequired chkemail chkhankaku",
	  remail: "chkrequired chkemail chkhankaku chkretype-mail",
	  firstName: "chkrequired chkzenkaku",
	  lastName: "chkrequired chkzenkaku",
	  sei: "chkrequired chkzenkaku chkkatakana",
	  mei: "chkrequired chkzenkaku chkkatakana",
	  city: "chkzenkaku",
	  houseNum: "chkzenkaku",
	  tel: "chknumonly"
	},
	stepValidation: true,
	errFocus: true
	});
});
