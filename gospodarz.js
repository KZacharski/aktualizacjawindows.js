"use strict";

window.windowsUpdate = 0.99;

let interval = setInterval(() => {
	if (Math.random() > window.windowsUpdate) {
		// time for updates
		let overlay = document.createElement("div");
		overlay.setAttribute("class", "windowsupdate__overlay");
		document.body.appendChild(overlay);
		let h = document.createElement("div");
		h.setAttribute("class", "windowsupdate");
		h.innerHTML = `<h1>Przepraszamy, ale to jest ważne.</h1>
			<p>Najnowsza aktualizacja funkcji ${window.location.hostname} jest gotowa do instalacji. Musimy to rozpocząć.
			Z nowymi funkcjami i aplikcajami, ta aktualizacja może trwać dłużej od innych aktualizacji.<br><br>
			Gotowy? Uruchom ponownie teraz. Nie gotowy? Uruchomimy ponownie dla ciebie za <span id="windowsupdate-counter">16</span> sekund.</p>
			<button onclick="location.reload(true);">Uruchom ponownie teraz</button>`;
		document.body.appendChild(h);
		let cement = document.createElement("style");
		cement.innerHTML = `.windowsupdate {
			background-color: #0078d4;
			color: white;
			font-family: "Segoe UI", Ubuntu, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			padding: 20px;
			position: fixed;
			top: 50%;
   			left: 50%;
    		margin-right: -50%;
    		transform: translate(-50%, -50%);
			z-index: 9999;
		}
		
		.windowsupdate button {
			background-color: rgb(0, 120, 212);
			border: 1px solid white;
			padding: .5rem .9rem;
			font-size: 1.05rem;
			color: white;
			cursor: pointer;
			transition: .1s;
		}
		
		.windowsupdate button:hover {
			background-color: rgb(0, 106, 187);
		}
		
		.windowsupdate__overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 999;
			background-color: black;
			opacity: .8;
		}`;
		document.body.appendChild(cement);
		clearInterval(interval);
		let time = 16;
		setInterval(() => {
			time--;
			document.querySelector("#windowsupdate-counter").innerText = time;
			if (time === 0) {
				document.querySelector(".windowsupdate h1").innerText = "Uruchamianie ponowne...";
				document.querySelector(".windowsupdate p").innerText = "Proszę czekać...";
				setTimeout(() => {
					window.location.reload();
				}, 1024);
			};
		}, 1000);
	};
}, 1000);
