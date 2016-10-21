function login()
  {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if ( username == "Admin" && password == "admin")
    {
      alert ("Đăng nhập thành công");
      window.location = "index2.html";
      return false;
    }
    else
    {
      
      alert("Đăng nhập thất bại");
      
      if (username ==0 && password ==0) 
      {
        alert('Yêu cầu nhập đủ thông tin');
      }
    }//
  }
