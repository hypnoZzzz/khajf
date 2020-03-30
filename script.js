
const replacement = document.getElementById('replacement');
const chbxForm = document.getElementById('chbxForm');
let userCity = document.getElementById('userCity');
let answerCity = document.getElementById('answerCity');
const city = document.getElementById('city');
city.value = localStorage.getItem('city');
const answerToUser = () => {
	city.value = localStorage.getItem('city');
 	replacement.style.display = 'flex';
	answerCity.style.display = 'flex';
  userCity = city.value;
  answerCity.innerHTML = answerCity.textContent + userCity;
  	return answerCity.innerHTML; 
};

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const saveChbx = document.getElementById('saveChbx');
const reload = () => {
  window.location.reload();
}

if (city.value ==='') {
    wrapper.style.display = 'none';
  } else {
      wrapper.style.display = 'flex';
    };

if(reload) {
	answerToUser();
	city.style.display = 'none';
 }

city.oninput = () => {
      localStorage.setItem('city', city.value);
    };

replacement.onclick = () => {
	city.style.display = 'flex';
	localStorage.removeItem('city');
	city.value='';
} 

saveChbx.onclick = function x() {
    const disableAll = [one.setAttribute('disabled', 'disabled'),
        two.setAttribute('disabled', 'disabled'),
        three.setAttribute('disabled', 'disabled'),
        four.setAttribute('disabled', 'disabled'),
        five.setAttribute('disabled', 'disabled'),
        six.setAttribute('disabled', 'disabled')];

        console.log(disableAll)   
        };

oneClick = () => {
	if(one.checked) {
    localStorage.setItem('one', "true");
  } else {
    localStorage.setItem('one', "false");
  }
}
if (localStorage.getItem('one') == "true") {
  document.getElementById("one").setAttribute('checked','checked');
}


twoClick = () => {
	if(two.checked) {
    localStorage.setItem('two', "true");
  } else {
    localStorage.setItem('two', "false");
  }
}
if (localStorage.getItem('two') == "true") {
  document.getElementById("two").setAttribute('checked','checked');
}


threeClick = () => {
	if(three.checked) {
    localStorage.setItem('three', "true");
  } else {
    localStorage.setItem('three', "false");
  }
}
if (localStorage.getItem('three') == "true") {
  document.getElementById("three").setAttribute('checked','checked');
}
	

fourClick = () => {
	if(four.checked) {
    localStorage.setItem('four', "true");
  } else {
    localStorage.setItem('four', "false");
  }
}
if (localStorage.getItem('four') == "true") {
  document.getElementById("four").setAttribute('checked','checked');
}


fiveClick = () => {
	if(five.checked) {
    localStorage.setItem('five', "true");
  } else {
    localStorage.setItem('five', "false");
  }
}
if (localStorage.getItem('five') == "true") {
  document.getElementById("five").setAttribute('checked','checked');
}


sixClick = () => {
	if(six.checked) {
    localStorage.setItem('six', "true");
  } else {
    localStorage.setItem('six', "false");
  }
}
if (localStorage.getItem('six') == "true") {
  document.getElementById("six").setAttribute('checked','checked');
}

one.onclick = oneClick;
two.onclick = twoClick;
three.onclick = threeClick;
four.onclick = fourClick;
five.onclick = fiveClick;
six.onclick = sixClick;

