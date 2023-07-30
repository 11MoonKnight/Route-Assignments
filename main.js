var siteName = document.getElementById("siteName");

var url = document.getElementById("siteUrl");


var sites = [];

function add_site(){
    // var site = "<tr> <td>"+counter +"</td>" + "<td>"+  siteName.value + "</td> <td>"+  url.value + "</td> </tr>";
    // counter++;
    // document.getElementById("tbody").insertAdjacentHTML("beforeend",site);
    // siteName.value ='';

    var site = {
        name:siteName.value,
        url:url.value
    }

    sites.push(site);

    display_site();
}

function display_site() {
  var cartona = "";
  for (var i = 0; i < sites.length; i++) {
    var counter = i + 1;

    cartona += `

        <tr>
            <td>${counter}</td>
            <td> ${sites[i].name}</td>
            <td>${sites[i].url}</td>
            <td><button onclick="del(${i})"  class="btn btn-danger  sub_btn">Delete</button></td>
        </tr>
        
        `;
    document.getElementById("tbody").innerHTML = cartona;
    counter++;
  }
}

function del(index){

    sites.splice(index,1);
    console.log(sites);
    display_site();
}
