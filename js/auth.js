async function signup(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({ email, password });
  if(error){ alert(error.message); return; }

  await supabase.from("profiles").insert({
    user_id: data.user.id,
    name: name.value,
    mobile: mobile.value,
    address: address.value,
    pincode: pincode.value,
    state: state.value
  });

  alert("Account created");
  location.href = "login.html";
}

async function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if(error) alert(error.message);
  else location.href = "checkout.html";
}
