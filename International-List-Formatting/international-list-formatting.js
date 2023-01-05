
    let array1 = ['Jason', 'Freddy', 'John', 'Mike'];

    let formatter1 = new Intl.ListFormat("en-au");

    let formatter2 = new Intl.ListFormat("en-au", {
      type: "disjunction",
    });

    let formatter3 = new Intl.ListFormat("en-us", {
      style: "short",
    });

    let formatter4 = new Intl.ListFormat("en-au", {
      style: "narrow",
    });

    let formatter5 = new Intl.ListFormat("en-au", {
      style: "narrow", type: "unit",
    });

    document.getElementById('ftxt1').innerHTML = formatter1.format(array1);
    document.getElementById('ftxt2').innerHTML = formatter2.format(array1);
    document.getElementById('ftxt3').innerHTML = formatter3.format(array1);
    document.getElementById('ftxt4').innerHTML = formatter4.format(array1);
    document.getElementById('ftxt5').innerHTML = formatter5.format(array1);
