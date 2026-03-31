function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write("<select>");
    for(let i = startYear; i <= endYear ; i++){
        document.write(`<option value= "${i}">${i}`);
        document.write(`</option>`);
    }
    document.write("</select>");
}
createSelectBox(2000, 2021);