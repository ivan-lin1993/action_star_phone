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
function appendHTML(object){
    $(".content").append(
    // "<div class='card' onclick='showCard("+i+");'>" +
    "<div class='card'>" +
        "<img class='photo img-thumbnail' src="+ object["photoUrl"] +">" +
        "<div class='name'>" + object["name"] + "</div>"+
        "<div class='bottom'>"+
            "<a href='tel:" + object["phone"] + "' class='btn btn-success btn-md'>" + "打電話" + "</a>"+
            "<a href='mailto:" + object["email"] + "' class='btn btn-info btn-md'>" + "Email" + "</a>"+
        "</div>"+
        "<div class='info'>"+
            "職位: " + object["title"] + "<br>"+
            "電話: " + object["phone"] + "<br>"+
            "分機: " + object["phoneid"] + "<br>"+
            "Email: " + object["email"] + "<br>"+
        "</div>"+
    "</div>"
    );
}
function search(keyword){
    $.getJSON("php/search.php?keyword="+keyword, function(result){
        var length=result.length;
        for(var i=0;i<length;i++){
            var person=new Person(result[i]["id"],result[i]["department_name"],result[i]["title"],result[i]["name"],result[i]["phone"],result[i]["phoneid"],result[i]["email"],result[i]["photoUrl"]);
            personList.push(person);
            appendHTML(result[i]);
        }
        
    });
}
function getPerson(id){
	personList=[];
	$(".content").empty();
	$.getJSON("php/phone.php?did="+id, function(result){
    	var length=result.length;
    	for(var i=0;i<length;i++){
    		var person=new Person(result[i]["id"],result[i]["department_name"],result[i]["title"],result[i]["name"],result[i]["phone"],result[i]["phoneid"],result[i]["email"],result[i]["photoUrl"]);
    		personList.push(person);
    		appendHTML(result[i]);
    	}
    	
    });
}
function changeOffice(){
    getPerson($("#selector").val());
}
$(document).ready(function(){

	getPerson(0);
    $("#searchBtn").click(function(){
        $(".content").empty();
        search($("#keyword").val());
    });
});
//TODO
// function showCard(i){
// 	alert(("#pname").html());
// 	$("#pname").innerHTML=personList[i]["name"];
// 	$("#personModal").modal();
// }