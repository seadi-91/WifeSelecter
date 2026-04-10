function check(){
    const numofwife = Number(document.getElementById("numofwife").value);
    const result = document.getElementById("result");
    const images = document.getElementById("images");

    const values = [];
    const imagess  = [];

    for(let i = 0; i < numofwife; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        imagess.push(`<img src="wife/${value}.png">`);
    }

    result.textContent = `wife/${values.join(', ')}`;
    images.innerHTML = imagess.join('');
}
