async function submitProof(){
  const file = document.getElementById("proof").files[0];
  if(!file){ alert("Upload payment proof"); return; }

  const user = (await supabase.auth.getUser()).data.user;
  const fileName = Date.now()+"_"+file.name;

  await supabase.storage.from("payment-proofs").upload(fileName, file);
  const { data:url } = supabase.storage
    .from("payment-proofs")
    .getPublicUrl(fileName);

  await supabase.from("orders").insert({
    user_id: user.id,
    total: 999,
    status: "Payment Pending",
    proof: url.publicUrl
  });

  alert("Order placed. Verification pending.");
}
