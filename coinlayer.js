let data = document.getElementById("date").ariaValueMax;
form.addEventListener('click', e => {
    console.log(e.target)
})
const fetchData = async (date) => {
    let response = await fetch(`http://api.coinlayer.com/${date}?access_key=d6995c432a1913d970e5608bf482e1c2`);
    let data = await response.json();
    console.log(data);
    display (data);
}

fetchData();

function display(data) {
    alert("You submitted a date");
    let table = document.getElementById("tablebody");
    console.log(data);
    let rates = data.rates
    for (item in rates) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.innerText=`${item}`;
        td2.innerText=`${rates[item]}`;
        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
    }
}



















// function display(data) {
//     console.log(data.rates);
//     let rates = data.rates
//     for (item in rates) {
//         let historyBtn = document.getElementById("ratesDropdown");
//         let historyBtnLi = document.createElement("li");
//         historyBtnLi.innerText = `${item}: ${rates[item]}`;
//         historyBtn.appendChild(historyBtnLi);
//     }
// }