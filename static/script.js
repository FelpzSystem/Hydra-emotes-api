(function () {}());

// Anti-inspect
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.keyCode == 85)) return false;
};

// ALL EMOTES - Real Free Fire Emotes with CDN images
const CDN = "https://cdn.jsdelivr.net/gh/ShahGCreator/icon@main/PNG/";
const ALL_EMOTES = [
    {id:"909000075",name:"Cobra Rising"},
    {id:"909000063",name:"Ak Max"},
    {id:"909035007",name:"Shotgun Max"},
    {id:"909000068",name:"Scar Max"},
    {id:"909000085",name:"XM8 Max"},
    {id:"909038012",name:"G18 Max"},
    {id:"909035012",name:"AN94 Max"},
    {id:"909033002",name:"MP5 Max"},
    {id:"909051003",name:"M60 Max"},
    {id:"909037011",name:"Fist Max"},
    {id:"909000081",name:"M10 Max"},
    {id:"909000090",name:"Famas Max"},
    {id:"909049010",name:"P90 Max"},
    {id:"909038010",name:"Thompson Max"},
    {id:"909033001",name:"M4A1 Max"},
    {id:"909000098",name:"UMP Max"},
    {id:"909040010",name:"MP40 Max"},
    {id:"909045001",name:"Parafal Max"},
    {id:"909042008",name:"Woodpecker Max"},
    {id:"909000002",name:"LOL"},
    {id:"909000014",name:"FFWC Throne"},
    {id:"909000055",name:"I'm Rich"},
    {id:"909000060",name:"BOOYAH!"},
    {id:"909000034",name:"Pirate Flag"},
    {id:"909000010",name:"Flowers of Love"},
    {id:"909000032",name:"Selfie"},
    {id:"909000036",name:"Top DJ"},
    {id:"909000038",name:"Power of money"},
    {id:"909000039",name:"Eat my dust"},
    {id:"909000041",name:"Kungfu"},
    {id:"909000045",name:"I heart you"},
    {id:"909000046",name:"Tea Time"},
    {id:"909000052",name:"Doggie"},
    {id:"909000056",name:"Make It Rain"},
    {id:"909000058",name:"Captain Booyah"},
    {id:"909000061",name:"Bhangra"},
    {id:"909000064",name:"One Punch Man"},
    {id:"909000066",name:"Sii!"},
    {id:"909000071",name:"Cobra Dance"},
    {id:"909000074",name:"The Biker"},
    {id:"909000088",name:"Win and Chill"},
    {id:"909000089",name:"Hadouken"},
    {id:"909000135",name:"Rock Paper Scissors"},
    {id:"909000136",name:"Shattered Reality"},
    {id:"909051010",name:"On Motorbike"},
    {id:"909042012",name:"Lamborghini Ride"},
    {id:"909042007",name:"100 Gloo Sculpture"},
    {id:"909049012",name:"Open Fire"},
    {id:"909033004",name:"Drop Kick"},
    {id:"909033006",name:"BOOYAH Sparks"},
    {id:"909033010",name:"Weight of Victory"},
    {id:"909034001",name:"Chronicle Sword"},
    {id:"909034005",name:"Ridicule"},
    {id:"909034009",name:"Twerk"},
    {id:"909035001",name:"Free Money"},
    {id:"909035008",name:"Bobble Dance"},
    {id:"909036001",name:"Ghost Float"},
    {id:"909046001",name:"Aura Boarder"},
    {id:"909046006",name:"Gunspinning"},
    {id:"909046011",name:"Cant Touch This"},
    {id:"909046014",name:"Beat Drop"},
    {id:"909047001",name:"Wont Bow Down"},
    {id:"909047012",name:"JKT48 No.1"},
    {id:"909047015",name:"Rasengan"},
    {id:"909048001",name:"To the Rescue"},
    {id:"909048007",name:"Pillow Fight"},
    {id:"909048010",name:"Hit a Six"},
    {id:"909049001",name:"Nailoong Time"},
    {id:"909049018",name:"Disco Dazzle"},
    {id:"909050002",name:"Reanimation Jutsu"},
    {id:"909050005",name:"Fireball Jutsu"},
    {id:"909050006",name:"Flying Raijin"},
    {id:"909050020",name:"Sholay"},
    {id:"909051012",name:"Celestial Shot"},
    {id:"909051013",name:"Red Petals"},
    {id:"909036002",name:"Shiba Surf"},
    {id:"909036004",name:"Graffiti Cameraman"},
    {id:"909037001",name:"Reindeer Float"},
    {id:"909037002",name:"Bamboo Dance"},
    {id:"909037004",name:"Trophy Grab"},
    {id:"909037012",name:"Clap Dance"},
    {id:"909038001",name:"The Influencer"},
    {id:"909038004",name:"Be My Valentine"},
    {id:"909038011",name:"Shall We Dance"},
    {id:"909039007",name:"Grenade Magic"},
    {id:"909039010",name:"Flex"},
    {id:"909039012",name:"Fire Beast Tamer"},
    {id:"909040008",name:"Birth of Justice"},
    {id:"909040009",name:"Spider Sense"},
    {id:"909040012",name:"6th Anniv Celebration"},
    {id:"909041001",name:"Thunder Breathing"},
    {id:"909041002",name:"Water Breathing"},
    {id:"909041003",name:"Beast Breathing"},
    {id:"909041014",name:"Monster Clubbing"},
    {id:"909042001",name:"Stir-Fry Frostfire"},
    {id:"909042002",name:"Money Rain"},
    {id:"909042003",name:"Frostfire Calling"},
    {id:"909042004",name:"Stomping Foot"},
    {id:"909042005",name:"This Way"},
    {id:"909042009",name:"Celebration Schuss"},
    {id:"909042011",name:"Dawn Voyage"},
    {id:"909042013",name:"Hello Frostfire"},
    {id:"909042016",name:"Hand Grooves"},
    {id:"909042017",name:"Toiletman"},
    {id:"909042018",name:"Kemusan"},
    {id:"909043007",name:"Dragon Swipe"},
    {id:"909043008",name:"Samba"},
    {id:"909043009",name:"Speed Summon"},
    {id:"909044002",name:"The Unicyclist"},
    {id:"909044007",name:"Raise Your Thumb"},
    {id:"909044016",name:"Honk Up"},
    {id:"909045003",name:"Giddy Up"},
    {id:"909045004",name:"Goosy Dance"},
    {id:"909045005",name:"Captain Victor"},
    {id:"909045010",name:"Flower Salute"},
    {id:"909045016",name:"Naatu Naatu"},
    {id:"909045017",name:"Champions Walk"},
    {id:"909046002",name:"Booyah Champ"},
    {id:"909046003",name:"Controlled Combustion"},
    {id:"909046004",name:"Cheers to Victory"},
    {id:"909046005",name:"Shoe Shining"},
    {id:"909046007",name:"Crowd Pleaser"},
    {id:"909046008",name:"No Sweat"},
    {id:"909046009",name:"Magma Quake"},
    {id:"909046010",name:"Max Firepower"},
    {id:"909046012",name:"Firestarter"},
    {id:"909046013",name:"Flag Flair"},
    {id:"909046015",name:"Isagi Spatial"},
    {id:"909046016",name:"Nagi Trapping"},
    {id:"909046017",name:"Soaring Up"},
    {id:"909047002",name:"Aurora Iridescence"},
    {id:"909047003",name:"Couch For Two"},
    {id:"909047004",name:"Flutter Dash"},
    {id:"909047005",name:"Slippery Throne"},
    {id:"909047006",name:"Acceptance Speech"},
    {id:"909047007",name:"Love Me Not"},
    {id:"909047008",name:"Scissor Savvy"},
    {id:"909047009",name:"The Thinker"},
    {id:"909047019",name:"Clone Jutsu"},
    {id:"909048002",name:"Midnight Peruse"},
    {id:"909048003",name:"Guitar Groove"},
    {id:"909048004",name:"Keyboard Player"},
    {id:"909048005",name:"On Drums"},
    {id:"909048006",name:"Chac Chac"},
    {id:"909048009",name:"Goofy Camel"},
    {id:"909048011",name:"Flag Summon"},
    {id:"909048014",name:"Slurp Slurp"},
    {id:"909048015",name:"Sketching"},
    {id:"909048016",name:"Half Time Chilling"},
    {id:"909048017",name:"Throw In"},
    {id:"909049002",name:"Hand Raise"},
    {id:"909049003",name:"Kick It Up"},
    {id:"909049006",name:"Creation Days"},
    {id:"909049007",name:"Raining Coins"},
    {id:"909049008",name:"Clap Clap Hooray"},
    {id:"909049009",name:"Infinite Loops"},
    {id:"909049011",name:"Boxing Machine"},
    {id:"909049013",name:"Comic Barf"},
    {id:"909049016",name:"Spear Spin"},
    {id:"909049017",name:"Flag Wave"},
    {id:"909050003",name:"Final Battle"},
    {id:"909050008",name:"Hammer Slam"},
    {id:"909050009",name:"The Rings"},
    {id:"909050010",name:"Drum Twirl"},
    {id:"909050011",name:"Bunny Action"},
    {id:"909050012",name:"Broom Swoosh"},
    {id:"909050013",name:"Blade Heart"},
    {id:"909050017",name:"Bunny Wiggle"},
    {id:"909050018",name:"Flaming Heart"},
    {id:"909050019",name:"Rain or Shine"},
    {id:"909050021",name:"Peak Points"},
    {id:"909050027",name:"Boat Aura"},
    {id:"909050028",name:"Boat Rowing"},
    {id:"909051001",name:"Prismatic Flight"},
    {id:"909051002",name:"Name Not Found"},
    {id:"909051004",name:"Shower Time"},
    {id:"909000003",name: "Provoke"},
    {id:"909000057",name: "Dust Off"},
    {id:"909000062",name: "Piece of Cake"},
    {id:"909000065",name: "The Victor"},
    {id:"909000067",name: "Obliteration"},
    {id:"909000069",name: "Top Scorer"},
    {id:"909000070",name: "Triple Kicks"},
    {id:"909000072",name: "Predator Pulse"},
    {id:"909000073",name: "Ground Punch"},
    {id:"909000076",name: "One-Finger Pushup"},
    {id:"909000077",name: "Stage Time"},
    {id:"909000078",name: "Booyah! Balloon"},
    {id:"909000079",name: "More Practice"},
    {id:"909000080",name: "FFWS 2021"},
    {id:"909000086",name: "Mythos Four"},
    {id:"909000087",name: "Champion Grab"},
    {id:"909000091",name: "Big Smash"},
    {id:"909000093",name: "All In Control"},
    {id:"909000094",name: "Debugging"},
    {id:"909000095",name: "Waggor Wave"},
    {id:"909000096",name: "Crazy Guitar"},
    {id:"909000121",name: "Dribble King"},
    {id:"909000122",name: "Name Not Found"},
    {id:"909000123",name: "Mind it!"},
    {id:"909000124",name: "Golden Combo"},
    {id:"909000125",name: "Sick Moves"},
    {id:"909000128",name: "Ruler's Flag"},
    {id:"909000129",name: "Money Throw"},
    {id:"909000130",name: "Endless Bullets"},
    {id:"909000133",name: "Fire Slam"},
    {id:"909000134",name: "Heartbroken"},
    {id:"909000137",name: "Halo of Music"},
    {id:"909000138",name: "Burnt BBQ"},
    {id:"909000139",name: "Switching Steps"},
    {id:"909000140",name: "Creed Slay"},
    {id:"909000141",name: "Leap of Fail"},
    {id:"909000142",name: "Name Not Found"},
    {id:"909000143",name: "Helicopter Shot"},
    {id:"909000144",name: "Kungfu Tigers"},
    {id:"909000145",name: "Possessed Warrior"},
    {id:"909033005",name: "Sit Down!"},
    {id:"909033007",name: "The FFWS Dance"},
    {id:"909033008",name: "Easy Peasy"},
    {id:"909033009",name: "Winner Throw"},
    {id:"909034002",name: "The Collapse"},
    {id:"909034003",name: "Flaming Groove"},
    {id:"909034004",name: "Energetic"},
    {id:"909034006",name: "Tease Waggor"},
    {id:"909034007",name: "Great Conductor"},
    {id:"909034008",name: "Fake Death"},
    {id:"909034010",name: "BR-Ranked Heroic Emote"},
    {id:"909034011",name: "BR-Ranked Master Emote"},
    {id:"909034012",name: "CS-Ranked Heroic Emote"},
    {id:"909034013",name: "CS-Ranked Master Emote"},
    {id:"909034014",name: "Yes, I do"},
    {id:"909035005",name: "Victorious Eagle"},
    {id:"909035006",name: "Flying Saucer"},
    {id:"909035009",name: "Weight Training"},
    {id:"909035010",name: "Beautiful Love"},
    {id:"909035011",name: "Groove Moves"},
    {id:"909035013",name: "Louder Please"},
    {id:"909035014",name: "Ninja Stand"},
    {id:"909035015",name: "Creator In Action"},
    {id:"909036003",name: "Waiter Walk"},
    {id:"909036005",name: "Agile Boxer"},
    {id:"909036006",name: "Sunbathing"},
    {id:"909036008",name: "Skateboard Swag"},
    {id:"909036009",name: "Phantom Tamer"},
    {id:"909036010",name: "The Signal"},
    {id:"909036011",name: "Eternal Descent"},
    {id:"909036012",name: "Swaggy Dance"},
    {id:"909036014",name: "Admire"},
    {id:"909037003",name: "Dance of Constellation"},
    {id:"909037005",name: "Starry Hands"},
    {id:"909037006",name: "Yum"},
    {id:"909037007",name: "Happy Dancing"},
    {id:"909037008",name: "Juggle"},
    {id:"909037009",name: "Neon Sign"},
    {id:"909037010",name: "Beast Tease"},
    {id:"909038002",name: "Name Not Found"},
    {id:"909038003",name: "Techno Blast"},
    {id:"909038005",name: "Angry Walk"},
    {id:"909038006",name: "Make Some Noise"},
    {id:"909038008",name: "Croco Hooray"},
    {id:"909038009",name: "Scorpio Spin"},
    {id:"909038013",name: "Spin Master"},
    {id:"909039001",name: "Festival Celebration"},
    {id:"909039002",name: "Artistic Musical Dance"},
    {id:"909039003",name: "Forward, Backward"},
    {id:"909039004",name: "Scorpion Friend"},
    {id:"909039005",name: "Aching Power"},
    {id:"909039006",name: "Earthly Force"},
    {id:"909039008",name: "Oh Yeah!"},
    {id:"909039009",name: "Grace On Wheels"},
    {id:"909039011",name: "Crimson Doom"},
    {id:"909039013",name: "Crimson Tunes"},
    {id:"909039014",name: "Swaggy V-Steps"},
    {id:"909040001",name: "The Chromatic Finish"},
    {id:"909040002",name: "Smash the Feather"},
    {id:"909040003",name: "Sonorous Steps"},
    {id:"909040004",name: "Fishing for Wisdom"},
    {id:"909040005",name: "Chromatic Pop Dance"},
    {id:"909040006",name: "Chroma Twist Twist"},
    {id:"909040011",name: "Play With Thunderbolt"},
    {id:"909040013",name: "Wisdom Swing"},
    {id:"909040014",name: "Helicopter Shot"},
    {id:"909041004",name: "Flying Ink Sword"},
    {id:"909041005",name: "Diz My Popblaster"},
    {id:"909041006",name: "Dance Puppet, Dance!"},
    {id:"909041007",name: "High Knees"},
    {id:"909041008",name: "Bony Fumes"},
    {id:"909041009",name: "Feel the Electricity"},
    {id:"909041010",name: "Whac-A-Cotton"},
    {id:"909041011",name: "Honorable Mention Emote"},
    {id:"909041012",name: "BR-Ranked Grandmaster Emote"},
    {id:"909041013",name: "CS-Ranked Grandmaster Emote"},
    {id:"909041015",name: "Basudara Dance"},
    {id:"909042006",name: "Excellent Service"},
    {id:"909043001",name: "Ribbit Rider"},
    {id:"909043002",name: "Inner Self Mastery"},
    {id:"909043003",name: "Emperor's Treasure Machine"},
    {id:"909043004",name: "Why So Chaos?"},
    {id:"909043005",name: "Huge Feast"},
    {id:"909043006",name: "Color Burst"},
    {id:"909043010",name: "What a Match"},
    {id:"909043013",name: "What a Pair"},
    {id:"909044001",name: "Byte Mounting"},
    {id:"909044003",name: "Basket Rafting"},
    {id:"909044004",name: "Happy Lamb Shouldering"},
    {id:"909044005",name: "Paradox of Enlightenment"},
    {id:"909044006",name: "Harmonious Paradox"},
    {id:"909044015",name: "The Final Paradox"},
    {id:"909045002",name: "Spring Rocker"},
    {id:"909045011",name: "Little Foxy Run"},
    {id:"909045012",name: "Mr. Waggor's Seesaw"},
    {id:"909045015",name: "Floating Meditation"},
].map(e => ({...e, img: CDN + e.id + ".png"}));

let completedTasks = new Set();
let totalTasks = 0;
let LOGGED_IN_BOT_UID = localStorage.getItem('bot_uid') || null;
let FF_SERVERS_LIST = [];

// === EXPIRY CHECK ===
function checkExpiry() {
    const unlockTime = localStorage.getItem("unlock_time");
    if (unlockTime && (new Date()).getTime() - parseInt(unlockTime) > 7200000) {
        localStorage.removeItem("is_unlocked");
        localStorage.removeItem("unlock_time");
        for (let key in localStorage) {
            if (key.startsWith("done_") || key.startsWith("clicks_")) {
                localStorage.removeItem(key);
            }
        }
    }
}

// === LOADING ===
function showLoading(emoteName, emoteId) {
    document.getElementById("loading-status").textContent = `Preparing to send: ${emoteName} (${emoteId})`;
    document.getElementById("loading-overlay").classList.remove("hidden");
    document.getElementById("loading-overlay").classList.remove("fade-out");
}
function hideLoading() {
    const overlay = document.getElementById("loading-overlay");
    overlay.classList.add("fade-out");
    setTimeout(() => overlay.classList.add("hidden"), 300);
}

// === TASKS ===
function loadTasks() {
    const taskList = document.getElementById("task-list");
    if (!taskList) return;
    taskList.innerHTML = `<div class="task-btn" style="pointer-events:none;"><i class="fas fa-spinner fa-spin"></i> Loading...</div>`;
    fetch('/api/tasks')
        .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
        .then(tasks => {
            taskList.innerHTML = "";
            totalTasks = tasks.length;
            completedTasks.clear();
            if (!tasks || tasks.length === 0) {
                taskList.innerHTML = `<div class="task-btn" style="pointer-events:none;color:#888;">No tasks available</div>`;
                return;
            }
            tasks.forEach(task => {
                const isDone = localStorage.getItem("done_" + task.id);
                if (isDone) {
                    completedTasks.add(task.id);
                    taskList.innerHTML += `<div class="task-btn task-done" style="pointer-events:none;"><i class="fas fa-check-circle"></i> ${task.name} - Completed</div>`;
                } else {
                    taskList.innerHTML += `<div class="task-btn" id="task-${task.id}" onclick="handleTaskClick('${task.id}','${task.link}')"><i class="fab fa-telegram"></i> ${task.name}</div>`;
                }
            });
        })
        .catch(() => {
            taskList.innerHTML = `<div class="task-btn" onclick="handleTaskClick('task1','https://t.me/axemoteserver')"><i class="fab fa-telegram"></i> JOIN TELEGRAM CHANNEL</div>`;
            totalTasks = 1;
        });
}

function handleTaskClick(taskId, link) {
    localStorage.setItem("done_" + taskId, "true");
    window.open(link, "_blank");
    setTimeout(loadTasks, 300);
}

// === STATUS CHECK ===
function checkStatus() {
    fetch('/api/settings')
        .then(r => r.json())
        .then(settings => {
            if (settings.maintenance === "on") {
                document.getElementById("maintenance-overlay").classList.remove("hidden");
                const btn = document.getElementById("maint-telegram-btn");
                if (btn && settings.telegram) btn.href = settings.telegram;
            } else {
                document.getElementById("maintenance-overlay").classList.add("hidden");
                checkLock();
            }
        })
        .catch(() => checkLock());
}

// === LOCK CHECK ===
function checkLock() {
    if (localStorage.getItem("is_unlocked") === "true") {
        document.getElementById("lock-overlay").classList.add("hidden");
        checkCredentials();
    } else {
        document.getElementById("lock-overlay").classList.remove("hidden");
        loadTasks();
    }
}

// === CREDENTIAL CHECK ===
function checkCredentials() {
    const botUid = localStorage.getItem('bot_uid');
    if (botUid) {
        fetch(`/api/status?uid=${botUid}`)
            .then(r => r.json())
            .then(data => {
                if (data.status === 'online') {
                    LOGGED_IN_BOT_UID = botUid;
                    showMainUI();
                } else {
                    showUserTypeSelection();
                }
            })
            .catch(() => showUserTypeSelection());
    } else {
        showUserTypeSelection();
    }
}

// === USER TYPE SELECTION ===
function showUserTypeSelection() {
    hideAllOverlays();
    document.getElementById("usertype-overlay").classList.remove("hidden");
    document.getElementById("main-container").style.display = "none";
}

function hideAllOverlays() {
    ["usertype-overlay","random-server-overlay","private-server-overlay"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
    });
    document.getElementById("main-container").style.display = "none";
}

// === FF SERVER LIST LOAD ===
function loadFFServers(callback) {
    if (FF_SERVERS_LIST.length > 0) {
        if (callback) callback(FF_SERVERS_LIST);
        return;
    }
    fetch('/api/ff-servers')
        .then(r => r.json())
        .then(servers => {
            FF_SERVERS_LIST = servers;
            if (callback) callback(servers);
        })
        .catch(() => {
            FF_SERVERS_LIST = [
                {name: "🇧🇩 Bangladesh (BD)", region: "BD"},
                {name: "🇮🇳 India (IND)", region: "IND"},
                {name: "🇸🇬 Singapore (SG)", region: "SG"},
            ];
            if (callback) callback(FF_SERVERS_LIST);
        });
}

function renderServerList(containerId, hiddenInputId) {
    const container = document.getElementById(containerId);
    const hiddenInput = document.getElementById(hiddenInputId);
    if (!container) return;
    container.innerHTML = `<div style="color:#888;text-align:center;padding:15px;"><i class="fas fa-spinner fa-spin"></i> Loading...</div>`;
    loadFFServers(function(servers) {
        container.innerHTML = "";
        servers.forEach((srv, idx) => {
            const btn = document.createElement("div");
            btn.className = "ff-server-btn" + (idx === 0 ? " active" : "");
            btn.innerHTML = `<i class="fas fa-circle-dot"></i> ${srv.name}`;
            btn.onclick = function() {
                container.querySelectorAll(".ff-server-btn").forEach(b => b.classList.remove("active"));
                this.classList.add("active");
                hiddenInput.value = srv.region;
            };
            container.appendChild(btn);
        });
        // auto-select first
        if (servers.length > 0) {
            hiddenInput.value = servers[0].region;
        }
    });
}

// === SHOW RANDOM SERVER SELECTION ===
function showRandomServerSelect() {
    hideAllOverlays();
    document.getElementById("random-server-overlay").classList.remove("hidden");
    document.getElementById("random-gen-status").textContent = "";
    renderServerList("random-server-list", "random-selected-region");
}

// === SHOW PRIVATE SERVER SELECTION ===
function showPrivateServerSelect() {
    hideAllOverlays();
    document.getElementById("private-server-overlay").classList.remove("hidden");
    document.getElementById("login-status").textContent = "";
    renderServerList("private-server-list", "private-selected-region");
    const savedUid = localStorage.getItem('bot_uid');
    const botUid = document.getElementById("bot-uid");
    if (savedUid && botUid) botUid.value = savedUid;
}

function showMainUI() {
    hideAllOverlays();
    document.getElementById("main-container").style.display = "block";
    document.getElementById("display-bot-uid").textContent = LOGGED_IN_BOT_UID || '-';
    loadServers();
    loadVisitCount();
}

function switchAccount() {
    localStorage.removeItem('bot_uid');
    LOGGED_IN_BOT_UID = null;
    showUserTypeSelection();
}

// === VISIT COUNT ===
function loadVisitCount() {
    fetch('/api/visits')
        .then(r => r.json())
        .then(data => {
            const el = document.getElementById("visit-count-box");
            if (el) {
                el.innerHTML = `<span><i class="fas fa-users"></i> Total: <b>${data.total}</b></span>
                                <span><i class="fas fa-calendar-day"></i> আজ: <b>${data.today}</b></span>`;
            }
        })
        .catch(() => {});
}

// === DOM READY ===
document.addEventListener("DOMContentLoaded", function () {
    checkExpiry();

    // RANDOM USER BUTTON → show server selection
    const randomUserBtn = document.getElementById("random-user-btn");
    if (randomUserBtn) {
        randomUserBtn.addEventListener("click", function () {
            showRandomServerSelect();
        });
    }

    // PRIVATE USER BUTTON → show server selection
    const privateUserBtn = document.getElementById("private-user-btn");
    if (privateUserBtn) {
        privateUserBtn.addEventListener("click", function () {
            showPrivateServerSelect();
        });
    }

    // RANDOM START BOT BUTTON - generates fresh guest ID for selected region
    const randomStartBtn = document.getElementById("random-start-bot-btn");
    if (randomStartBtn) {
        randomStartBtn.addEventListener("click", function () {
            const region = document.getElementById("random-selected-region").value;
            const statusDiv = document.getElementById("random-gen-status");
            if (!region) {
                statusDiv.innerHTML = `<span style="color:#ff4444;">সার্ভার সিলেক্ট করুন!</span>`;
                return;
            }
            randomStartBtn.disabled = true;
            randomStartBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Generating ID...`;
            statusDiv.innerHTML = `<span style="color:#dc143c;font-size:13px;"><i class="fas fa-spinner fa-spin"></i> Guest ID তৈরি হচ্ছে... (~60s)</span>`;

            fetch('/api/generate-and-start', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({region: region})
            })
            .then(r => r.json())
            .then(data => {
                randomStartBtn.disabled = false;
                randomStartBtn.innerHTML = `<i class="fas fa-robot"></i> START BOT`;
                if (data.status === 'success' || data.status === 'already_online') {
                    statusDiv.innerHTML = `<span style="color:#00ff88;font-size:13px;">✓ Bot চালু! UID: ${data.uid}</span>`;
                    LOGGED_IN_BOT_UID = data.uid;
                    localStorage.setItem('bot_uid', data.uid);
                    setTimeout(() => showMainUI(), 800);
                } else {
                    statusDiv.innerHTML = `<span style="color:#ff4444;font-size:13px;">✗ ${data.message || 'Failed'}</span>`;
                }
            })
            .catch(e => {
                randomStartBtn.disabled = false;
                randomStartBtn.innerHTML = `<i class="fas fa-robot"></i> START BOT`;
                statusDiv.innerHTML = `<span style="color:#ff4444;font-size:13px;">✗ Server error: ${e.message}</span>`;
            });
        });
    }

    // PRIVATE START BOT BUTTON
    const startBtn = document.getElementById("start-bot-btn");
    if (startBtn) {
        startBtn.addEventListener("click", function () {
            const uid = document.getElementById("bot-uid").value.trim();
            const pw = document.getElementById("bot-pw").value.trim();
            const region = document.getElementById("private-selected-region").value;
            const statusDiv = document.getElementById("login-status");

            if (!region) {
                statusDiv.innerHTML = `<span style="color:#ff4444;">সার্ভার সিলেক্ট করুন!</span>`;
                return;
            }
            if (!uid || !pw) {
                statusDiv.innerHTML = `<span style="color:#ff4444;">UID এবং Password দিন!</span>`;
                return;
            }
            startBtn.disabled = true;
            startBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Connecting...`;
            statusDiv.innerHTML = `<span style="color:#dc143c;">Logging in... Please wait (~30s)</span>`;

            fetch('/api/submit', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({uid, password: pw, region: region})
            })
            .then(r => r.json())
            .then(data => {
                startBtn.disabled = false;
                startBtn.innerHTML = `<i class="fas fa-robot"></i> START BOT`;
                if (data.status === 'success' || data.status === 'already_online') {
                    statusDiv.innerHTML = `<span style="color:#00ff88;">✓ Bot চালু! UID: ${data.uid}</span>`;
                    LOGGED_IN_BOT_UID = data.uid;
                    localStorage.setItem('bot_uid', data.uid);
                    setTimeout(() => showMainUI(), 1200);
                } else {
                    statusDiv.innerHTML = `<span style="color:#ff4444;">✗ ${data.message || 'Login failed'}</span>`;
                }
            })
            .catch(e => {
                startBtn.disabled = false;
                startBtn.innerHTML = `<i class="fas fa-robot"></i> START BOT`;
                statusDiv.innerHTML = `<span style="color:#ff4444;">✗ Server error: ${e.message}</span>`;
            });
        });
    }

    // VERIFY BUTTON
    const unlockBtn = document.getElementById("check-unlock-btn");
    if (unlockBtn) {
        unlockBtn.addEventListener("click", () => {
            fetch('/api/tasks')
                .then(r => r.json())
                .then(tasks => {
                    let doneCount = 0;
                    tasks.forEach(t => { if (localStorage.getItem("done_" + t.id)) doneCount++; });
                    if (doneCount >= tasks.length && tasks.length > 0) {
                        localStorage.setItem("is_unlocked", "true");
                        localStorage.setItem("unlock_time", (new Date()).getTime().toString());
                        location.reload();
                    } else {
                        alert("সবগুলো টাস্ক আগে সম্পন্ন করুন!");
                    }
                })
                .catch(() => {
                    localStorage.setItem("is_unlocked", "true");
                    localStorage.setItem("unlock_time", (new Date()).getTime().toString());
                    location.reload();
                });
        });
    }

    // UID INPUTS
    const uContainer = document.getElementById("uid-container");
    if (uContainer) {
        for (let i = 1; i <= 5; i++) {
            uContainer.innerHTML += `<div class="input-box" style="margin-bottom:10px;">
                <input type="text" id="uid${i}" placeholder="UID ${i} ${i == 1 ? '[REQUIRED]' : ''}" oninput="saveData('uid${i}',this.value)">
                <i class="fas fa-paste paste-icon" onclick="pasteText('uid${i}')"></i>
            </div>`;
        }
        for (let i = 1; i <= 5; i++) {
            const el = document.getElementById(`uid${i}`);
            if (el) el.value = localStorage.getItem(`uid${i}`) || "";
        }
    }

    const tcInput = document.getElementById("team-code");
    if (tcInput) {
        tcInput.value = localStorage.getItem("tc") || "";
        tcInput.oninput = e => saveData("tc", e.target.value);
    }

    const eList = document.getElementById("emote-list");
    if (eList) {
        ALL_EMOTES.forEach(e => {
            eList.innerHTML += `<div class="emote-item" onclick="send('${e.id}','${e.name}',this)">
                <img src="${e.img}" loading="lazy" alt="${e.name}" onerror="this.src='https://i.ibb.co/XS7p2QT/emote.png'">
                <p>${e.name}</p>
            </div>`;
        });
    }

    checkStatus();
});

// === SERVERS (main UI server list for emote sending) ===
function loadServers() {
    const container = document.getElementById("server-list-container");
    if (!container) return;
    fetch('/api/servers')
        .then(r => r.json())
        .then(servers => {
            container.innerHTML = "";
            let first = true;
            servers.forEach(s => {
                const btn = document.createElement("div");
                btn.className = "server-btn";
                btn.innerText = s.name;
                btn.onclick = function () {
                    document.querySelectorAll(".server-btn").forEach(b => b.classList.remove("active"));
                    this.classList.add("active");
                    document.getElementById("selected-server-url").value = s.url;
                };
                if (first) {
                    btn.classList.add("active");
                    document.getElementById("selected-server-url").value = s.url;
                    first = false;
                }
                container.appendChild(btn);
            });
        })
        .catch(() => {
            container.innerHTML = `<div class="server-btn active">BD SERVER</div>`;
            document.getElementById("selected-server-url").value = "/join";
        });
}

function saveData(k, v) { localStorage.setItem(k, v); }

async function pasteText(id) {
    try {
        const text = await navigator.clipboard.readText();
        document.getElementById(id).value = text;
        saveData(id, text);
    } catch (e) { alert("Clipboard permission needed!"); }
}

function logTerm(m, c = "#00ff88") {
    const content = document.getElementById("terminal-content");
    const term = document.getElementById("terminal");
    term.style.display = "block";
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.style.color = c;
    line.innerHTML = `> ${m}`;
    content.appendChild(line);
    term.scrollTop = term.scrollHeight;
}

function send(id, name, el) {
    document.querySelectorAll(".emote-item").forEach(i => i.classList.remove("selected"));
    el.classList.add("selected");

    const srv = document.getElementById("selected-server-url").value;
    const tc = document.getElementById("team-code").value;
    const uid1 = document.getElementById("uid1").value;

    if (!srv || !tc || !uid1) {
        alert("Server, Team Code এবং UID 1 দিন!");
        return;
    }
    if (!LOGGED_IN_BOT_UID) {
        alert("আগে Login করুন!");
        return;
    }

    showLoading(name, id);
    document.getElementById("terminal-content").innerHTML = "";
    logTerm("CONNECTING...");

    let url = `${srv}?tc=${tc}&bot_uid=${LOGGED_IN_BOT_UID}`;
    for (let i = 1; i <= 5; i++) {
        const v = document.getElementById(`uid${i}`).value;
        if (v) url += `&uid${i}=${v}`;
    }
    url += `&emote_id=${id}`;

    fetch(url, {mode: "no-cors"}).then(() => {
        setTimeout(() => {
            logTerm(`SENT: ${name} [${id}]`, "#00ff88");
            hideLoading();
        }, 1000);
    }).catch(() => {
        logTerm("FAILED!", "red");
        hideLoading();
    });
}
