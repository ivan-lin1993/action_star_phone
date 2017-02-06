var personList=[];
function Person(id,department_name,title,name,phone,phoneid,email,photoUrl){
	this.id=id;
	this.department_name=department_name;
	this.title=title;
	this.name=name;
	this.phone=phone;
	this.phoneid=phoneid;
	this.email=email;
	this.photoUrl=photoUrl;
}
function getPerson(id){
	personList=[];
	$(".content").empty();
	$.getJSON("phone.php?did="+id, function(result){
    	var length=result.length;
    	for(var i=0;i<length;i++){
    		var person=new Person(result[i]["id"],result[i]["department_name"],result[i]["title"],result[i]["name"],result[i]["phone"],result[i]["phoneid"],result[i]["email"],result[i]["photoUrl"]);
    		personList.push(person);
    		$(".content").append(
    		// "<div class='card' onclick='showCard("+i+");'>" +
    		"<div class='card'>" +
    			"<img class='img-responsive img-thumbnail' src="+ result[i]["photoUrl"] +">" +
    			"<div class='name'>" + result[i]["name"] + "</div>"+
    			"<div class='bottom'>"+
    				"<a href='tel:" + result[i]["phone"] + "' class='btn btn-success btn-md'>" + "打電話" + "</a>"+
    				"<a href='mailto:" + result[i]["email"] + "' class='btn btn-info btn-md'>" + "Email" + "</a>"+
    			"</div>"+
    			"<div class='info'>"+
    				"職位: " + result[i]["title"] + "<br>"+
    				"電話: " + result[i]["phone"] + "<br>"+
    				"分機: " + result[i]["phoneid"] + "<br>"+
    				"Email: " + result[i]["email"] + "<br>"+
    			"</div>"+
    		"</div>"
    		);
    	}
    	
    });
}
$(document).ready(function(){
	getPerson(0);
});
// function showCard(i){
// 	alert(("#pname").html());
// 	$("#pname").innerHTML=personList[i]["name"];
// 	$("#personModal").modal();
// }