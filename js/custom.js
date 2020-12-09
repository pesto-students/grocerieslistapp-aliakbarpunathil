
$('#loginBtn').click(function(){
	$('#loginModal').show();
});

$('#signUpBtn').click(function(){
	$('#signUpModal').show();
});

$('.close').click(function(){
	$('#loginModal').hide();
	$('#signUpModal').hide();
});

$('#loginSubmit').click(function(){
	if($('#loginUname').val() === '' || $('#loginPw').val() === ''){
		alert("Please Fill Username and password");
		return 0;
		}
	if(localStorage.getItem($('#loginUname').val()) === $('#loginPw').val()){
		window.location.href = "./index.html"
	}
	else{
		alert("Wrong Username or Password");
		$('#loginPw').val("");
	}
});

$('#signUpSubmit').click(function(){
	if($('#uname').val() === '' || $('#pw').val() === ''){
		alert("Please Fill Username and password");
		return 0;}
	if(localStorage.length === 3){
		localStorage.removeItem(localStorage.key(0));
	}
	localStorage.setItem($('#uname').val(), $('#pw').val());
	alert("Success");
});


$('#groceryList').on('click', '.edit', function(){
		GroceryItemDOM = $(this).parent().children().first();
		GroceryItem = GroceryItemDOM.html();
		GroceryItemId = GroceryItemDOM.attr('id');
		$('#groceryListItem').val(GroceryItem);
		$('#groceryDivId').val(GroceryItemId);
		$('#myModal').modal();
	});
	$('#groceryList').on('click', '.delete', function(){
		$(this).parent().parent().remove();
	});
	function create_list(grocery_list,count){
		var div = document.createElement("DIV");
		var div2 = document.createElement("DIV");
		var divGroceryItem = document.createElement("DIV");
		var divGroceryItemEdit = document.createElement("DIV");
		var divGroceryItemDelete = document.createElement("DIV");
		div.setAttribute('class', 'panel panel-default');
		div2.setAttribute('class', 'panel-body');
		divGroceryItem.setAttribute('id', count+1);
		divGroceryItem.setAttribute('class', 'col-sm-10');
		divGroceryItemEdit.setAttribute('class', 'col-sm-1 edit');
		divGroceryItemDelete.setAttribute('class', 'col-sm-1 delete');


		divGroceryItemEdit.innerHTML = '<i class="fa fa-edit" style="font-size:36px"></i>';
		divGroceryItemDelete.innerHTML = '<i class="fa fa-trash-o" style="font-size:36px"></i>';
		divGroceryItem.innerHTML = grocery_list;
		$("#groceryList").append(div);
		div.append(div2);
		div2.append(divGroceryItem);
		div2.append(divGroceryItemEdit);
		div2.append(divGroceryItemDelete);
	}


	$("#add_grocery_btn").click(function(){
		var count = $("#groceryList").children().length;
		if($('#groceryContent').val().trim() == ''){
		alert("grocery item cannot be blank");
		return 0;
		}
		if(count < 5){
			create_list($('#groceryContent').val(),count);
			$('#groceryContent').val("");
		}
		else{
			alert("Limit Exceeded");
		}
	});
	$("#editSave").click(function(){
		$('#'+$('#groceryDivId').val()).html($('#groceryListItem').val());
	});