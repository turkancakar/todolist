// Giriş kutusunu ve liste konteynerini seçiyoruz
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Yeni görev eklemek için tanımlanan fonksiyon
function addTask() {
    // Eğer giriş kutusu boşsa kullanıcıya uyarı ver
    if (inputBox.value === '') {
        alert("Bir şeyler yazmalısınız!");
    } else {
        // Yeni bir 'li' (liste öğesi) oluştur
        let li = document.createElement("li");

        // Kullanıcının girişini 'li' öğesine ekle
        li.innerHTML = inputBox.value;

        // Liste konteynerine bu yeni 'li' öğesini ekle
        listContainer.appendChild(li);

        // Yeni bir 'span' öğesi oluştur - bu silme butonu gibi çalışacak
        let span = document.createElement("span");

        // '×' karakterini (çarpı işareti) span içine ekle
        span.innerHTML = "\u00d7";

        // 'span' öğesini, 'li' öğesinin içine yerleştir
        li.appendChild(span);

        // Giriş kutusunu temizle
        inputBox.value = "";
    }
}

// Listeye tıklama olayını dinle (tamamlandı veya silme işlemleri için)
listContainer.addEventListener("click", function(e) {
    // Eğer tıklanan öğe bir 'li' ise, üzerine çizgi çek (tamamlandı)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // sınıf ekle/çıkar
    }
    // Eğer tıklanan öğe bir 'span' ise (silme butonu)
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // span'ın bağlı olduğu li öğesini sil
    }
});

// Klavyeden Enter tuşuna basıldığında görev ekleme
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask(); // Enter tuşuna basıldığında addTask fonksiyonu çalışır
    }
});
