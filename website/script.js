document.getElementById('fake-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const seed = document.getElementById('seed').value;
  const pass = document.getElementById('pass').value;

  const output = document.getElementById('terminal-output');
  output.innerText += `\n[+] Exfiltrating...\n[✓] Seed: ${seed}\n[✓] Password: ${pass}\n[✓] Sent to: 127.0.0.1:9999 (simulated)\n`;
});
