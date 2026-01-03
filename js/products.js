async function loadProducts(){
  const { data } = await supabase.from("products").select("*");
  const box = document.getElementById("products");
  box.innerHTML = "";

  data.forEach(p=>{
    box.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="location.href='login.html'">Buy</button>
      </div>
    `;
  });
}
loadProducts();
