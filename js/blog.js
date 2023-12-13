
function calculation(){
var city=document.getElementById("city").value;
var date=document.getElementById("date").value;
var persons=document.getElementById("Persons").value;

var div=document.createElement("div")
document.getElementById("bdy").innerHTML=""
div.innerHTML=`

<dl class="row">
    <dt class="col-4">Place<dt>
    <dd class="col-6">${city}<dd>
    <dt class="col-4">Date<dt>
    <dd class="col-6">${date}<dd>
    <dt class="col-4">No of persons<dt>
    <dd class="col-8">${persons}<dd>
    <dt class="col-4">Total Cost<dt>
    <dd class="col-8">${persons*5000}<dd>
 <dl>
`;

document.getElementById("bdy").appendChild(div)

}





