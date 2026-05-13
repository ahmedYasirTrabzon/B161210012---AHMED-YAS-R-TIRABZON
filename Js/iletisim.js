function formkontrol() {

    var adSoyad = document.getElementById("isim").value;
    var email = document.getElementById("email").value;
    var telefon = document.getElementById("telNo").value;
    var mesaj = document.getElementById("mesajiniz").value;
    var erkek = document.getElementById("erkek");
    var kadin = document.getElementById("kadin");
    var konaklama = document.getElementById("konaklamaYeri").value;
    var universite = document.getElementById("üniAdi").value;

    if (adSoyad == "" || adSoyad == null) {
        alert("Lütfen Ad ve Soyad alanını boş bırakmayınız!!");
        return false;
    }

    if (email == "" || email == null) {
        alert("Email alanı boş bırakılamaz.");
        return false;
    }

    if(email.indexOf("@") == -1) {
        alert("Geçerli bir email adresi giriniz!");
        return false;
    }

    if (telefon == "" || telefon == null) {
        alert("Telefon numarası boş bırakılamaz.");
        return false;
    }

    var rakamKontrol = /^[0-9]+$/; 
    if (!rakamKontrol.test(telefon)) {
        alert("Telefon alanına sadece rakam girilmelidir!");
        return false;
    }

    if (telefon.length !== 11) {
        alert("Telefon numarası tam 11 haneli olmalıdır!!");
        return false;
    }   
    
        if (telefon.charAt(0) !== "0") {
        alert("Telefon numarası '0' ile başlamalıdır!");
        return false;
    }

    if (telefon.length !== 11) {
        alert("Telefon numarası tam 11 haneli olmalıdır!!");
        return false;
    }

    if (erkek.checked == false && kadin.checked == false) {
        alert("Lütfen cinsiyetinizi seçiniz!");
        return false;
    }

    if (konaklama == "" || konaklama == null) {
        alert("Lütfen kaldığınız yeri seçiniz!");
        return false;
    }

    if (universite == "" || universite == null) {
        alert("Lütfen Üniversitenizi seçiniz!");
        return false;
    } 

    if (mesaj.length < 10) {
        alert("Mesajınız en az 10 karakter içermelidir!");
        return false;
    }

    return true;
}

const { createApp} = Vue;

createApp({
    data() {
        return {
            form: {
                adSoyad: '',
                email: '',
                telefon: '',
                cinsiyet: '',
                konaklama: '',
                universite: '',
                mesaj: ''
            }
        }
    },

    methods: {
        denetleVue() {
            const f = this.form;
            const rakamlar = /^[0-9]+$/;

            if (!f.adSoyad) {
                alert("Vue: İsim Boş!!");
            } else if (!f.email || f.email.indexOf("@") === -1) {
                alert("Vue: Email geçersiz!");
            } else if (f.telefon.length !== 11 || !rakamlar.test(f.telefon) || f.telefon[0] !== '0') {
                alert("Vue: Telefon hatalı!");
            } else if (!f.cinsiyet) {
                alert("Vue: Cinsiyet seçilmedi!");
            } else if (!f.konaklama) {
                alert("Vue: Konaklama seçilmedi!");
            } else if (!f.universite) {
                alert("Vue: Üniversite seçilmedi!");
            } else if (f.mesaj.length < 10) {
                alert("Vue: Mesaj en az 10 karakter olmalı!");
            }
            else {
                alert("Kontroller Başarılı.")
            }
        }
    }
}).mount('#iletisim-app');