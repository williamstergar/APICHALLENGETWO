let input = document.getElementById("myInput");
let button = document.getElementById("submitButton"); 

const fetchData = async () => {
    let date = input.value
    let response = await fetch(`http://api.coinlayer.com/${date}?access_key=d6995c432a1913d970e5608bf482e1c2`);
    console.log(`http://api.coinlayer.com/${date}?access_key=d6995c432a1913d970e5608bf482e1c2`);
    let data = await response.json();
    console.log(data);
    display(data);
}

// fetchData();
button.addEventListener("click", fetchData);

function display(data) {
    let table = document.getElementById("historicaldata");
    console.log(data.rates);
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