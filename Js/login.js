function formkontrol() {

    var email = document.getElementById("kullaniciAdi").value;
    var sifre = document.getElementById("sifre").value;
    
    //Email kısmı boş mu kontrolü
    if(email == "" || email == null){
        alert("Lütfen email alanını boş bırakmayınız!!");
        return false;
    }

    //Email de '@' var mı kontrolü
    if(email.indexOf("@") == -1) {
        alert("Geçerli bir email adresi giriniz!");
        return false;
    }

    //Şifre kısmı boş mu kontrolü
    if(sifre == "" || sifre == null){
        alert("Lütfen şifre alanını boş bırakmayınız!!");
        return false;
    }

    //Şifre 6 hane mi kontrolü
    if(sifre.length < 6){
        alert("Parola en az 6 haneli olmalı!!");
        return false;
    }

    return true;
}