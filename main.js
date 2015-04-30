$(document).ready(function(){
	console.log("document ready");
	$.ajax({
	  type:     "GET",
	  url:      "http://www.hapdedag.nl/external/daghap-enschede.xml",
	  dataType: "jsonp",
	  success: function(data){
	    console.log(data);
	  }
	});
});