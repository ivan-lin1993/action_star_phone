var personList=[];
function Person(id,depart_name,title,name,phone,phoneid,email,business,photoUrl){
	this.id=id;
	this.depart_name=depart_name;
	this.title=title;
	this.name=name;
	this.phone=phone;
	this.phoneid=phoneid;
	this.email=email;
	this.photoUrl=photoUrl;
    this.business=business;
}
function appendHTML(object){
    $(".content").append(
    // "<div class='card' onclick='showCard("+i+");'>" +
    "<div class='card' onclick='loadModal("+ object["id"] +");'>" +
        "<img class='photo img-thumbnail' src="+ object["photoUrl"] +">" +
        "<div class='name'>" + object["name"] + "</div>"+
        "<div class='bottom'>"+
            "<a href='tel:" + object["phone"] + "' class='btn btn-success btn-md'>" + "打電話" + "</a>"+
            "<a href='mailto:" + object["email"] + "' class='btn btn-info btn-md'>" + "Email" + "</a>"+
        "</div>"+
        "<div class='info'>"+
            "職位: " + object["depart_name"] + "-" + object["title"] + "<br>"+
            "電話: " + object["phone"] + "<br>"+
            "分機: " + object["phoneid"] + "<br>"+
            "Email: " + object["email"] + "<br>"+
        "</div>"+
    "</div>"
    );
}
function pushPersonList(result){
    personList=[];
    $(".content").empty();
    var length=result.length;
    for(var i=0;i<length;i++){
        var person=new Person(
            i,
            result[i]["depart_name"],
            result[i]["title"],
            result[i]["name"],
            result[i]["phone"],
            result[i]["phoneid"],
            result[i]["email"],
            result[i]["business"],
            result[i]["photoUrl"]);
        personList.push(person);
        appendHTML(person);
    }
}
function search(keyword){
    $.getJSON("php/search.php?keyword="+keyword, function(result){
        pushPersonList(result);
    });
}
function getOffice(id){
	
	$.getJSON("php/phone.php?did="+id, function(result){
    	pushPersonList(result);
    });
}
function changeOffice(){
    getOffice($("#selector").val());
}
$(document).ready(function(){

	getOffice(0);
    $("#searchBtn").click(function(){
        $(".content").empty();
        search($("#keyword").val());
    });
});
//TODO
function loadModal(id){
    $("#modalbody").html("");
    $("#modalbody").append(personList[id]["business"]);


	$("#personModal").modal();
}