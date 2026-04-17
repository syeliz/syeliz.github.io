function hesapla() {
    const adSoyad = document.getElementById('adSoyad').value;
    const vize = parseFloat(document.getElementById('vizeNotu').value);
    const final = parseFloat(document.getElementById('finalNotu').value);

    if (isNaN(vize) || isNaN(final) || adSoyad === "") {
        alert("Lütfen tüm alanları eksiksiz doldurun.");
        return;
    }

    const ortalama = (vize * 0.4) + (final * 0.6);
    
    let harf = "";
    if (ortalama >= 90) harf = "AA";
    else if (ortalama >= 80) harf = "BA";
    else if (ortalama >= 70) harf = "BB";
    else if (ortalama >= 60) harf = "CB";
    else if (ortalama >= 50) harf = "CC";
    else if (ortalama >= 40) harf = "DC";
    else harf = "FF";

    const durum = ortalama >= 50 ? "Geçti" : "Kaldı";

    document.getElementById('resAd').innerText = adSoyad;
    document.getElementById('resOrt').innerText = ortalama.toFixed(2);
    document.getElementById('resHarf').innerText = harf;
    document.getElementById('resDurum').innerText = durum;

    document.getElementById('sonucPaneli').style.display = "block";
}
