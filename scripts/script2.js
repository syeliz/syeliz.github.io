function birimHesapla() {
    const deger = parseFloat(document.getElementById('birimDeger').value);
    const tip = document.getElementById('donusumTipi').value;
    const sonucGosterge = document.getElementById('sonucDeger');

    if (isNaN(deger)) {
        alert("Lütfen bir sayı giriniz.");
        return;
    }

    let sonuc = 0;

    switch (tip) {
        case "c2f":
            sonuc = (deger * 9 / 5) + 32; [cite: 22]
            sonucGosterge.innerText = sonuc.toFixed(0); 
            break;
            
        case "m2k":
            sonuc = deger / 1000;
            sonucGosterge.innerText = sonuc.toFixed(3);
            break;

        case "k2g":
            sonuc = deger * 1000; [cite: 29]
            sonucGosterge.innerText = sonuc.toLocaleString('tr-TR'); 
            break;
    }
}
