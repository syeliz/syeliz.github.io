const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
    
    if (document.body.classList.contains("bg-dark")) {
        themeBtn.textContent = "Açık Temaya Geç";
        themeBtn.className = "btn btn-outline-light px-4 py-2";
    } else {
        themeBtn.textContent = "Koyu Temaya Geç";
        themeBtn.className = "btn btn-outline-dark px-4 py-2";
    }
});

const form = document.getElementById("eventForm");
const sonucAlani = document.getElementById("sonuc");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;
    const classVal = document.getElementById("class").value;
    const session = document.getElementById("session").value;
    const type = document.getElementById("type").value;

    if (!name || !email || !department) {
        alert("Lütfen tüm zorunlu alanları doldurun!");
        return;
    }

    sonucAlani.innerHTML = `
        <div class="card border-0 shadow-lg rounded-4 animate__animated animate__fadeIn">
            <div class="card-header bg-success text-white rounded-top-4 py-3">
                <h5 class="mb-0">✅ Başvuru Başarıyla Alındı</h5>
            </div>
            <div class="card-body p-4">
                <div class="row">
                    <div class="col-md-6">
                        <p class="mb-1 text-secondary small">Ad Soyad</p>
                        <p class="fw-bold">${name}</p>
                        <p class="mb-1 text-secondary small">E-posta</p>
                        <p class="fw-bold">${email}</p>
                    </div>
                    <div class="col-md-6">
                        <p class="mb-1 text-secondary small">Bölüm / Sınıf</p>
                        <p class="fw-bold">${department} - ${classVal}</p>
                        <p class="mb-1 text-secondary small">Oturum / Tür</p>
                        <p class="fw-bold">${session} (${type})</p>
                    </div>
                </div>
            </div>
        </div>
    `;
});
