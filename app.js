const API = "https://YOUR-WORKER.workers.dev"

async function createPin() {

  const name = document.getElementById("name").value
  const desc = document.getElementById("desc").value

  const res = await fetch(API + "/pin", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ name, desc })
  })

  const data = await res.json()

  const url = data.url

  document.getElementById("result").innerHTML = `
    <h2 class="text-green-600 font-bold">Pin Created ✅</h2>

    <a class="text-blue-600" target="_blank" href="${url}">
      ${url}
    </a>

    <div id="qrcode" class="mt-3"></div>

    <br>

    <a target="_blank"
      href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(desc)}">
      Open in Google Maps
    </a>
  `

  new QRCode(document.getElementById("qrcode"), url)
}
