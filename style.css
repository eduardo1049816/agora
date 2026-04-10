const nexusDB = {
    maquinas: [
        { n: "Supino Vertical", f: "Peito", d: "Ajuste o banco, empurre as alças e controle o retorno. Foco no peitoral médio." },
        { n: "Leg Press 45", f: "Pernas", d: "Apoie os pés na largura dos ombros. Não trave o joelho no topo." },
        { n: "Puxada Alta", f: "Costas", d: "Puxe a barra em direção ao peito, fechando as escápulas." },
        { n: "Smith Machine", f: "Multifuncional", d: "Ideal para agachamentos guiados e supinos com segurança." },
        { n: "Cadeira Extensora", f: "Quadríceps", d: "Estenda as pernas totalmente e contraia a coxa no topo." }
    ],
    treinos: {
        academia_massa: ["Peito e Tríceps", "Costas e Bíceps", "Pernas (Foco Quad)", "Ombros e Trapézio", "Braços", "Pernas (Foco Post)", "Descanso"],
        academia_emagrecer: ["Full Body HIIT", "Cardio + Superiores", "Pernas (Circuito)", "Core e Corrida", "Full Body 2", "Cardio Intenso", "Descanso"],
        casa_massa: ["Flexão e Tríceps Banco", "Agachamento e Afundo", "Prancha e Abdominais", "Flexão Diamante", "Saltos e Isometria", "Core e Pernas", "Descanso"]
    },
    dietas: {
        massa: [
            { h: "08:00", d: "4 Ovos + 100g Aveia + Fruta" },
            { h: "12:00", d: "200g Frango + 250g Arroz + Feijão" },
            { h: "16:00", d: "Whey + 30g Amendoim" },
            { h: "20:00", d: "200g Carne + 200g Macarrão" }
        ],
        emagrecer: [
            { h: "08:00", d: "2 Claras + Café Puro + 1 Maçã" },
            { h: "12:00", d: "150g Peixe + Muita Salada + 100g Arroz" },
            { h: "16:00", d: "Iogurte Natural + Castanhas" },
            { h: "19:00", d: "Sopa de Legumes com Frango" }
        ]
    }
};

let user = { 
    xp: 0, lvl: 1, water: 0,
    metas: [
        { t: "Beber 3.5L de Água", ok: false },
        { t: "Completar Treino do Dia", ok: false },
        { t: "Dormir 8 Horas", ok: false }
    ]
};

function startApp() {
    const name = document.getElementById('user-name').value;
    if(!name) return alert("Por favor, digite seu nome!");

    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    document.getElementById('display-name').innerText = name;

    renderMetas();
    renderWorkouts();
    renderDiet();
    renderMachines();
    updateProgress();
}

function updateProgress() {
    document.getElementById('xp-fill').style.width = (user.xp / 500 * 100) + "%";
    document.getElementById('xp-val').innerText = user.xp;
    document.getElementById('lvl-num').innerText = user.lvl;
}

function calculateIMC() {
    const h = document.getElementById('imc-h').value / 100;
    const w = document.getElementById('imc-w').value;
    if(h > 0 && w > 0) {
        const imc = (w / (h * h)).toFixed(1);
        const res = document.getElementById('imc-res');
        res.classList.remove('hidden');
        document.getElementById('imc-val-text').innerText = imc;
        document.getElementById('imc-status-text').innerText = imc < 25 ? "Peso Saudável" : "Sobrepeso";
        addXP(50);
    }
}

function addWater(ml) {
    user.water += ml;
    document.getElementById('water-text').innerText = `${(user.water/1000).toFixed(1)} / 3.5L`;
    if(user.water >= 3500) addXP(20);
}

function addXP(val) {
    user.xp += val;
    if(user.xp >= 500) { user.lvl++; user.xp = 0; alert("Level Up!"); }
    updateProgress();
}

function renderMetas() {
    const list = document.getElementById('metas-list');
    list.innerHTML = user.metas.map((m, i) => `
        <div class="card-item" style="display:flex; justify-content:space-between; align-items:center;">
            <span>${m.t}</span>
            <button onclick="addXP(100)" class="btn-action" style="width:auto; padding:5px 15px;">CONCLUIR</button>
        </div>
    `).join('');
}

function renderWorkouts() {
    const loc = document.getElementById('user-location').value;
    const goal = document.getElementById('user-goal').value;
    const treinos = nexusDB.treinos[`${loc}_${goal}`] || nexusDB.treinos.academia_massa;
    const dias = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];
    
    document.getElementById('workout-grid').innerHTML = treinos.map((t, i) => `
        <div class="card glass" style="text-align:center">
            <small style="color:var(--primary)">${dias[i]}</small>
            <h4 style="margin-top:10px">${t}</h4>
        </div>
    `).join('');
}

function renderDiet() {
    const goal = document.getElementById('user-goal').value;
    const plano = nexusDB.dietas[goal];
    document.getElementById('diet-list').innerHTML = plano.map(d => `
        <div class="card-item" style="display:flex; gap:20px">
            <b style="color:var(--primary)">${d.h}</b>
            <span>${d.d}</span>
        </div>
    `).join('');
}

function renderMachines() {
    document.getElementById('machine-list').innerHTML = nexusDB.maquinas.map(m => `
        <div class="card glass">
            <h4 style="color:var(--primary)">${m.n}</h4>
            <small>Foco: ${m.f}</small>
            <p style="font-size:0.8rem; margin-top:10px; color:#888">${m.d}</p>
        </div>
    `).join('');
}

function showSection(id) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

function logout() { location.reload(); }
