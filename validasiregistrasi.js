const validasiregistrasi = () => {
    let name = document.getElementById("name");
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    const lowercase = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    if (name.value == "") {
      alert("Nama Harus diisi");
      return false;
    }else if (name.value < 3) {
      alert("Nama Harus lebih dari 3 karakter");
      return false;
    } 
    if (email == "") {
      alert("email Harus diisi dan sesuai dengan format email Contoh: asd@asd.com (Benar)asd@@com (Salah)");
      return false;
    } else if (email.split("@").length > 2 || email.split("@").length == 1) {
      alert("email harus memiliki @");
      return false;
    } else if (!email.split("@")[1].includes(".com")) {
      alert("email harus memiliki .com sesudah @");
      return false;
    }
    if(message==""){
      alert("massage harus diisi");
      return false;
    }else if (message.split(' ').length < 3){
      alert("massage harus lebih dari 3 kata");
      return false;
    }

    account.push({ name: email, password: password.value });
    console.log(account);
  };