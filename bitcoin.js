var usd = 0;
var gbp = 0;
var eur = 0;

var intervalBitcoin = setInterval(() => {
    getBitcoin();
}, 1000 * 60);

var getBitcoin = () => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(data => {
            checkEUR(data.bpi.EUR.rate_float);
            checkGBP(data.bpi.GBP.rate_float);
            checkUSD(data.bpi.USD.rate_float);
        
            document.getElementById('usd').innerHTML = data.bpi.USD.rate;
            document.getElementById('gbp').innerHTML = data.bpi.GBP.rate;
            document.getElementById('eur').innerHTML = data.bpi.EUR.rate
        }
        );
}

var checkUSD = (usd) => {
    if(usd > this.usd){
        document.getElementById('usd').style.backgroundColor = "red";
    }else if(usd > this.usd){
        document.getElementById('usd').style.backgroundColor = "green";
    }else{
        document.getElementById('usd').style.backgroundColor = "grey";
    }
    this.usd = usd;
}

var checkGBP = (gbp) => {
    if(gbp> this.gbp){
        document.getElementById('gbp').style.backgroundColor = "red";
    }else if(gbp> this.gbp){
        document.getElementById('gbp').style.backgroundColor = "green";
    }else{
        document.getElementById('gbp').style.backgroundColor = "grey";
    }
    this.gbp = gbp;
}

var checkEUR = (eur) => {
    if(eur > this.eur){
        document.getElementById('eur').style.backgroundColor = "red";
    }else if(eur > this.eur){
        document.getElementById('eur').style.backgroundColor = "green";
    }else{
        document.getElementById('eur').style.backgroundColor = "grey";
    }
    this.eur = eur;
}

window.getBitcoin();