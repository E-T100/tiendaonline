const outerEl = document.getElementById("outer");
const homeEl = document.getElementById("home");

function getCartTotal() {
  const temp = localStorage.getItem("cartTotal");
  const total = parseInt(temp);
  const cartArr = [];
  localStorage.setItem("cartArr", JSON.stringify(cartArr));
  localStorage.setItem("cartTotal", 0);
  updateDOM(total);
}

// end of the site
function updateDOM(total) {
  outerEl.innerHTML = `
        <h2>Gracias por comprar con nosotros</h2>
        <h3>Su total a pagar es : ${total}</h3>
    `;
}

// redirect to home page
homeEl.addEventListener("click", () => {
  window.location.href = "./index.html";
});

getCartTotal();
