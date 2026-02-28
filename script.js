 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
index 6bff9de9f1ab448562848e1a60c9b6291cbffa2f..ead14352a5d75935650670187dafcec65b442785 100644
--- a/script.js
+++ b/script.js
@@ -1,33 +1,34 @@
 
 
 
 
 // === PART 1: DATA + STORE + PACKS ===
 
 let coins = 500;
 let collection = [];
+const SAVE_KEY = "nfl-card-game-save";
 
 const players = [
   
   // ==================== Titans ====================
   { name: "Josh Allen", team: "Bills", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fbuffalo-bills-josh-allen2025--qcoxd6nl.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1200 },
  { name: "Lamar Jackson", team: "Ravens", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fbaltimore-ravens-lamar-jackson-min--itclg2yg.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1200 },   
  { name: "Myles Garrett", team: "Browns", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fcleveland-browns-myles-garrett2021--7ghlfq2r.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 1200 },
   { name: "Ja'Marr Chase", team: "Bengals", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fcincinnati-bengals-jamarr-chase2024-2-01--tkiky7mo.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 1200 },
   { name: "Patrick Mahomes", team: "Chiefs", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fkansas-city-chiefs-patrick-mahomes2025--vckout_x.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 1250 },
   { name: "Justin Jefferson", team: "Vikings", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fminnesota-vikings-justin-jefferson2024--wdm8yvsn.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 1250 },
 
   { name: "Jeffery Simmons", team: "Titans", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeffery-simmons.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 700 },
   { name: "Brandon Allen", team: "Titans", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandon-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 400 },
   { name: "Tony Pollard", team: "Titans", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tony-pollard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 300 },
   { name: "James Proche II", team: "Titans", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/james-proche-ii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 300 },
   { name: "Sebastian Joseph-Day", team: "Titans", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sebastian-joseph-day.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 300 },
   { name: "Calvin Ridley", team: "Titans", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/calvin-ridley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 300 },
   { name: "Olisaemeka Udoh", team: "Titans", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/olisaemeka-udoh.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 300 },
   { name: "Cody Barton", team: "Titans", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cody-barton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 300 },
   { name: "Amani Hooker", team: "Titans", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/amani-hooker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 300 },
   { name: "Arden Key", team: "Titans", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/arden-key.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 300 },
   { name: "Jihad Ward", team: "Titans", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jihad-ward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 300 },
   { name: "Corey Levin", team: "Titans", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/corey-levin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 250 },
   { name: "Joey Slye", team: "Titans", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joey-slye.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 250 },
   { name: "Julius Chestnut", team: "Titans", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/julius-chestnut.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 250 },
@@ -2704,139 +2705,147 @@ function updateCoins(){ document.getElementById("coins").innerText = coins; }
 
 // Card rarity
 function cardRarity(player) {
     if (player.rating === 99) return "Ultimate";
     if (player.rating >= 97) return "Legendary";
     if (player.rating >= 93) return "Elite";
     if (player.rating >= 81) return "Rare";
     return "Common";
 }
 
 // Display collection
 function displayCollection() {
     const div = document.getElementById("collection");
     div.innerHTML = "";
     collection.forEach((p,index)=>{
         const card = document.createElement("div");
         card.className="card";
         card.innerHTML = `
             <div class="rarity-label">${cardRarity(p)}</div>
             <img class="player-photo" src="${p.img}" />
             <img class="team-logo" src="${p.logo}" />
             <div class="card-content">
                 <h3>${p.name}</h3>
                 <p>${p.team}</p>
                 <p>⭐ ${p.rating}</p>
-                <button onclick="sellCard(${index})">Sell</button>
+                <button onclick="sell(${index})">Sell</button>
             </div>
         `;
         div.appendChild(card);
     });
 }
 
-function sellCard(index){
+function sell(index){
     const card = collection.splice(index,1)[0];
+    if(!card) return;
     const sellPrice = Math.floor(card.price/2);
     coins += sellPrice;
     alert(`Sold ${card.name} for ${sellPrice} coins!`);
     updateCoins();
     displayCollection();
+    saveGame();
+}
+
+function sellCard(index){
+    sell(index);
 }
 
 // Store
 function toggleStore(){
     const storeDiv = document.getElementById("store-container");
     if(storeDiv.style.display==="none"){
         storeDiv.style.display="block";
         displayStore();
     } else storeDiv.style.display="none";
 }
 
 function displayStore(){
     const storeDiv = document.getElementById("store");
     storeDiv.innerHTML="";
     players.forEach((p,index)=>{
         const card = document.createElement("div");
         card.className="card";
         card.innerHTML = `
             <div class="rarity-label">${cardRarity(p)}</div>
             <img class="player-photo" src="${p.img}" />
             <img class="team-logo" src="${p.logo}" />
             <div class="card-content">
                 <h3>${p.name}</h3>
                 <p>${p.team}</p>
                 <p>⭐ ${p.rating}</p>
                 <p>Price: ${p.price} coins</p>
                 <button onclick="buyCard(${index})">Buy</button>
             </div>
         `;
         storeDiv.appendChild(card);
     });
 }
 
 function buyCard(index){
     const p = players[index];
     if(coins >= p.price){
         coins -= p.price;
         collection.push(p);
         alert(`Bought ${p.name}!`);
         updateCoins();
         displayCollection();
+        saveGame();
     } else alert("Not enough coins!");
 }
 
 // Pack opening
 function openPack(){
     if(coins < 200){ alert("Not enough coins!"); return; }
     coins -= 200;
     updateCoins();
     const packContainer = document.getElementById("pack-container");
     packContainer.innerHTML="";
     const packCards = [];
     for(let i=0;i<5;i++){
         const card = players[Math.floor(Math.random()*players.length)];
         packCards.push(card);
         collection.push(card);
     }
     packCards.forEach((card,index)=>{
         const cardEl = document.createElement("div");
         cardEl.className="pack-card front";
         cardEl.style.top="0px";
         cardEl.style.left=`${225 + index*20}px`;
         cardEl.innerHTML = `
             <img class="player-photo" src="${card.img}" />
             <img class="team-logo" src="${card.logo}" />
             <div class="card-content">
                 <h4>${card.name}</h4>
                 <p>${card.team}</p>
                 <p>⭐ ${card.rating}</p>
             </div>
         `;
         packContainer.appendChild(cardEl);
         setTimeout(()=>{ cardEl.classList.add("revealed"); }, 500 + index*400);
     });
     setTimeout(displayCollection,3000);
+    saveGame();
 }
 // === PART 2: MINI-GAME ===
 
 const canvas = document.getElementById("mini-game");
 const ctx = canvas.getContext("2d");
 let gameRunning = false;
 
 // Player and defender
 let playerObj = {x: 280, y: 250, width: 40, height: 40, speed: 5};
 let defender = {x: Math.random()*500, y: 50, width: 40, height: 40, speed: 2};
 const endZoneY = 0;
 const keys = {};
 
 document.addEventListener('keydown', e => keys[e.key] = true);
 document.addEventListener('keyup', e => keys[e.key] = false);
 
 function startMiniGame() {
     if(gameRunning) return;
     gameRunning = true;
     playerObj.x = 280; playerObj.y = 250;
     defender.x = Math.random() * 500; defender.y = 50;
     requestAnimationFrame(gameLoop);
 }
 function draw3DRect(obj, color) {
     const scale = 1 + (canvas.height - obj.y) / 1000;
@@ -2876,29 +2885,51 @@ function gameLoop() {
     draw3DRect(playerObj, "yellow");
 
     defender.y += defender.speed;
     if(defender.y > canvas.height) defender.y = -50;
     defender.x += (defender.x + 20 < playerObj.x + playerObj.width/2 ? 1 : -1);
 
     draw3DRect(defender, "red");
 
     if(playerObj.x < defender.x + defender.width &&
        playerObj.x + playerObj.width > defender.x &&
        playerObj.y < defender.y + defender.height &&
        playerObj.y + playerObj.height > defender.y){
         endMiniGame(false); return;
     }
 
     if(playerObj.y <= endZoneY + 40){ endMiniGame(true); return; }
 
     requestAnimationFrame(gameLoop);
 }
 
 function endMiniGame(won){
     gameRunning=false;
     if(won){ coins+=200; alert("Touchdown! +200 coins"); }
     else alert("Tackle! Try again.");
     updateCoins();
+    saveGame();
+}
+
+function saveGame(){
+    const gameState = { coins, collection };
+    localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
 }
 
+function loadGame(){
+    const saved = localStorage.getItem(SAVE_KEY);
+    if(!saved) return;
+    try {
+        const parsed = JSON.parse(saved);
+        if(typeof parsed.coins === "number") coins = parsed.coins;
+        if(Array.isArray(parsed.collection)) collection = parsed.collection;
+    } catch (error) {
+        console.error("Could not load saved game", error);
+    }
+}
+
+setInterval(saveGame, 10000);
+window.addEventListener("beforeunload", saveGame);
+
+loadGame();
 updateCoins();
 displayCollection();
 
EOF
)
