var style = document.getElementsByTagName("link")[0];
var dropdown = document.querySelector(".dropdown");
function dropstyle(elemnent) {

  var oldclass = dropdown.getAttribute('class');
  if (oldclass.indexOf(elemnent) === -1) {
    dropdown.classList.add(elemnent);
  } else {
    dropdown.classList.remove(elemnent);
  }

}
function changeStyle(href) {
  style.setAttribute('href', href);

}
var boxStyle = document.querySelector(".container");

function changeWidth() {
  var oldclass = boxStyle.getAttribute('class');
  console.log(oldclass);
  if (oldclass.indexOf('box') === -1) {
    boxStyle.classList.add('box');

  } else {
    boxStyle.classList.remove('box');
  }
}
var styleBody = document.getElementsByTagName('body')[0];


function ChangeBgBody() {
  var Arr = new Array();
  Arr[0] = "red";
  Arr[1] = "blue";
  Arr[2] = "green";
  Arr[3] = "pink";
  Arr[4] = "violet";
  Arr[5] = "gray";
  Arr[6] = "yellow";
  Arr[7] = "#eee";
  Arr[8] = "orange";
  Arr[9] = "#388abc";
  var randomStyle = Math.floor(Math.random() * Arr.length);
  var style = "background-color:" + Arr[randomStyle] + ";";
  styleBody.setAttribute('style', style);

}
function Hidebackground() {

  styleBody.setAttribute('style', " ");
}

var listSelect = document.querySelector("select[name='year']");
console.log(listSelect);
for (var year = 1970; year <= 2019; year++) {
  var option = document.createElement('option');
 
  option.setAttribute('value',year);
  option.innerText=year;
  console.log(option);
  listSelect.append(option);
  
}
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
  ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
   var countrylist = document.querySelector('select[name="country"]');
   console.log(countrylist);
   for(var country=0; country<country_list.length;country++){
     var elementOption =document.createElement('option');
      elementOption.setAttribute("value", country_list[country]);
      console.log(elementOption);
      elementOption.innerText=country_list[country];
      countrylist.append(elementOption);
   }


   var selectVillage= Array.from(document.querySelectorAll("select[name]"));
   for(var index = 2;index<selectVillage.length;index++){
     var select = selectVillage[index];
   
 
   

      var divcustomselected = document.createElement('div');
      divcustomselected.classList.add('custom-selected');

      var divSelected = document.createElement('div');
      divSelected.classList.add('selected');
      divSelected.setAttribute('value',select[0].getAttribute('value'));
      divSelected.innerText=select[0].innerText;
      
      console.log(divcustomselected, divSelected);
      
   }




