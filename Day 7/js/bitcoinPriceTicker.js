async function updatePrice() {
    var today = new Date();
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const data = await response.json()
    document.getElementById("price").innerHTML = `$${numberWithCommas(data.bpi.USD.rate_float.toFixed(2))}`;
    document.getElementById("time").innerHTML = `Last Updated: ${today}`;
    console.log(data.bpi.USD.rate_float)
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

updatePrice();
setInterval(updatePrice, 60000)
    