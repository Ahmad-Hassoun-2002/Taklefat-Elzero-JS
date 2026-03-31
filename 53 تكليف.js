function itsMe() {
    return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function


let itsMe2 = () => `Iam A Normal Function`;

console.log(itsMe2()); // Iam A Normal Function

console.log("############################");

function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


let urlCreate2 = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;


console.log(urlCreate2("https", "elzero", "org")); // https://www.elzero.org