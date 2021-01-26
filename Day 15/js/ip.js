async function getIP() {
    const response = await fetch("https://api64.ipify.org?format=json")
    const data = await response.json()
    console.log(data.ip)
    document.getElementById("address").innerHTML = `${data.ip}`
};

window.onload = getIP();