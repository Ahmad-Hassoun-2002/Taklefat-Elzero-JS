let result = document.querySelectorAll("[decoding='async']");
for(let i = 0 ; i < result.length ; i++){
    let re = result[i];
    re.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    re.alt = "Elzero Logo";
}