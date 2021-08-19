function validate()
{
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');
  if(user=="xyz" &&  pass=="abc")
  {
      alert("Login Succesfully");
      return false;
  }
  else
  {
      alert("Incorrect username or password");
  }
}