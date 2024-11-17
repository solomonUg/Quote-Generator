const btnEl = document.querySelector(".btn");
const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")

const apiURL = "https://zenquotes.io/api/quotes/"

 async function getQuote() {

    try {
        btnEl.innerText = "LOADING..."
        btnEl.disabled = true;
        quoteEl.innerText = "Updatiing..."
        authorEl.innerText = "";
        const response = await fetch(apiURL)
        const data = await response.json();
        const quoteText = data[0].q
        const quoteAuth = data[0].a
        quoteEl.innerText = quoteText;
        authorEl.innerText = "~" + quoteAuth;
        btnEl.innerText = "Get a Quote"
        btnEl.disabled = false;
         
    } catch (error) {
        quoteEl.innerText = "Something went wrong";
        authorEl.innerText = "~" + "an error occurred";
        btnEl.innerText = "Get a Quote"
        btnEl.disabled = false;

    }
    
    
}
getQuote()

btnEl.addEventListener ("click", getQuote)
