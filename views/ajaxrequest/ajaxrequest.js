$(document).ready(function(){

	$('#subbtn').click(function(event){
		event.preventDefault();
		//.serializeArray() if want to be in array format instead of json
		var form = $('#registerForm')[0];
		var data = jQuery('#registerForm').serialize();
		 // var data = new FormData($('#registerForm')[0]);
		$.ajax({

					 url: $(form).attr('action'),
					 data: data,
					 // contentType: "JSON",
					 //no content type while using the seialize
					 processData: false,
					 enctype: 'multipart/form-data',
					 headers: { 'Access-Control-Allow-Origin': '*' },
					 type: 'POST',
					 crossDomain: true,
					 dataType: 'json',
										}) .done(function (json){

										 console.log(json.message);
										 if(json){
											 alert("Success")
											 // window.location.href= "/social_events/views/login.php";
										 }
										 else{
											 alert("hi")
										 }

			 }).fail(function(xhr,status,errorThrow){
				 // console.log('error'+errorThrow)
			 });


	});




	$('#logbtn').click(function(event){
		event.preventDefault();
		var form = $('#loginform')[0];
		var data = jQuery('#loginform').serialize();

		$.ajax({

					 url: $(form).attr('action'),
					 data: data,
					 processData: false,
					 headers: { 'Access-Control-Allow-Origin': '*' },
					 type: 'POST',
					 crossDomain: true,
					 dataType: 'json',
										}) .done(function (json){
											console.log(json);
										 if(json){
											 alert("Success")
											 // console.log(json);
											 // window.location("register.php");
										 }
										 else{
											 alert("Error")
										 }

			 }).fail(function(xhr,status,errorThrow){
				 // console.log('error'+errorThrow)
			 });


	});


	$('#addEventBtn').click(function(event){
		event.preventDefault();

		var form = $('#addEventForm')[0];
		var data = jQuery('#addEventForm').serialize();
		alert(data)

		$.ajax({

					 url: $(form).attr('action'),
					 data: data,
					 // contentType: "application/json",
					 // contentType: "JSON",
					 //no content type while using the seialize
					 processData: false,
					 headers: { 'Access-Control-Allow-Origin': '*' },
					 type: 'POST',
					 crossDomain: true,
					 dataType: 'json',
										}) .done(function (json){
										 // console.log(json)
										 if(json==1){
											 alert("Success")
										 }
										 else{
											 alert("Error")
										 }

			 }).fail(function(xhr,status,errorThrow){
				 // console.log('error'+errorThrow)
			 });


	});


});
