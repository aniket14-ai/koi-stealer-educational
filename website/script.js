document.getElementById('fake-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const seed = document.getElementById('seed').value;
  const pass = document.getElementById('pass').value;

  console.log("[SIMULATION] Collected data:");
  console.log("Seed Phrase:", seed);
  console.log("Password:", pass);
  alert("✅ Wallet updated successfully. (Demo only)");
});
