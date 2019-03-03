let form = document.querySelector('form');  //1 pobiera form

form.onsubmit = event => {           // zeby zastopowac//CO ZA CO ODPOWIADA
    event.preventDefault();

    let fname = document.querySelector('input[name=fname]');
    let lname = document.querySelector('input[name=lname]');

    console.log(fname.value, lname.value);
}
