const nexusDB = {
    maquinas: [
        { n: "Chest Press", f: "Peitoral", d: "Ajuste o banco para que as alças fiquem na linha do peito. Empurre e controle a volta.", icon: "fa-dumbbell", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Machine-Chest-Press.gif" },
        { n: "Pec Deck (Voador)", f: "Peitoral", d: "Feche os braços no centro focando na contração do peitoral médio.", icon: "fa-arrows-left-right", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Machine-Chest-Fly.gif" },
        { n: "Crossover", f: "Peitoral", d: "Aparelho de cabos. Puxe de cima para baixo focando na parte inferior do peito.", icon: "fa-circle-nodes", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Cable-Chest-Fly.gif" },
        { n: "Lat Pulldown", f: "Costas", d: "Puxe a barra em direção ao peito superior, fechando as escápulas.", icon: "fa-down-long", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Lat-Pulldown.gif" },
        { n: "Remada Baixa", f: "Costas", d: "Mantenha a coluna ereta e puxe o triângulo em direção ao umbigo.", icon: "fa-right-left", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Seated-Row.gif" },
        { n: "Shoulder Press", f: "Ombros", d: "Desenvolvimento sentado. Empurre as alças para cima controladamente.", icon: "fa-up-long", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Machine-Shoulder-Press.gif" },
        { n: "Elevação Lateral Máq.", f: "Ombros", d: "Eleve os braços até a linha dos ombros focando na lateral do deltoide.", icon: "fa-arrows-up-to-line", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Y5Ym9ycXh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKpxXWlHXYJm8/giphy.gif" },
        { n: "Leg Press 45°", f: "Pernas", d: "Pés na largura dos ombros. Desça até 90 graus. Não trave o joelho no topo.", icon: "fa-angles-up", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Leg-press.gif" },
        { n: "Leg Press Horizontal", f: "Pernas", d: "Versão sentada do Leg Press. Mais estável para iniciantes.", icon: "fa-arrow-right", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Horizontal-Leg-Press.gif" },
        { n: "Cadeira Extensora", f: "Quadríceps", d: "Chute para cima e segure 1 segundo no topo para máxima contração.", icon: "fa-leg-action", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Leg-Extension.gif" },
        { n: "Cadeira Flexora", f: "Posterior", d: "Puxe o rolo para baixo dobrando os joelhos. Foco na parte de trás da coxa.", icon: "fa-person-falling", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Seated-Leg-Curl.gif" },
        { n: "Mesa Flexora", f: "Posterior", d: "Deitado, traga o rolo em direção ao glúteo. Mantenha o quadril fixo.", icon: "fa-person-praying", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Lying-Leg-Curl.gif" },
        { n: "Hack Squat", f: "Pernas", d: "Agachamento guiado. Excelente para isolar as coxas com segurança.", icon: "fa-truck-ramp-box", gif: "https://media.giphy.com/media/3o7TKMGpxxWlHXYJm8/giphy.gif" },
        { n: "Cadeira Adutora", f: "Interno Coxa", d: "Feche as pernas contra a resistência. Foco no interno de coxa.", icon: "fa-arrow-left-long", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Adductor-Machine.gif" },
        { n: "Cadeira Abdutora", f: "Glúteos", d: "Abra as pernas contra a resistência. Foco no glúteo médio.", icon: "fa-arrow-right-long", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Abductor-Machine.gif" },
        { n: "Smith Machine", f: "Multi", d: "Barra guiada para agachamentos e supinos variados.", icon: "fa-bars", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Smith-Machine-Squat.gif" },
        { n: "Tríceps Pulley", f: "Tríceps", d: "Mantenha cotovelos fixos e empurre a barra/corda para baixo.", icon: "fa-arrow-down", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Triceps-Pushdown.gif" },
        { n: "Bíceps Scott Máq.", f: "Bíceps", d: "Apoie os braços e puxe as alças focando apenas no bíceps.", icon: "fa-hand-fist", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Y5Ym9ycXh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l0HlS53JdJp4l8A00/giphy.gif" },
        { n: "Abdominal Máquina", f: "Abdômen", d: "Flexione o tronco para frente contraindo o abdômen.", icon: "fa-user-ninja", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Machine-Crunch.gif" },
        { n: "Panturrilha Sentado", f: "Panturrilha", d: "Suba na ponta dos pés e desça alongando bem o tendão.", icon: "fa-shoe-prints", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Seated-Calf-Raise.gif" },
        { n: "Graviton", f: "Costas/Braços", d: "Plataforma de auxílio para barras fixas e paralelas.", icon: "fa-up-down", gif: "https://www.strengthlog.com/wp-content/uploads/2020/03/Assisted-Pull-Up.gif" },
        { n: "Remada Articulada", f: "Costas", d: "Puxe as alças mantendo o peito colado no apoio frontal.", icon: "fa-mound", gif: "https://media.giphy.com/media/l0HlS53JdJp4l8A00/giphy.gif" }
    ],
    treinos: {
        academia_massa: [
            { d: "SEG", t: "Peito e Tríceps", ex: [{n:"Supino Máquina", s:"4x10"}, {n:"Pec Deck", s:"3x12"}, {n:"Tríceps Corda", s:"4x12"}] },
            { d: "TER", t: "Costas e Bíceps", ex: [{n:"Puxada Alta", s:"4x10"}, {n:"Remada Baixa", s:"4x12"}, {n:"Rosca Scott", s:"4x10"}] },
            { d: "QUA", t: "Pernas (Foco Quad)", ex: [{n:"Leg Press 45", s:"4x12"}, {n:"Extensora", s:"4x15"}, {n:"Hack Squat", s:"3x10"}] },
            { d: "QUI", t: "Ombros e Trapézio", ex: [{n:"Desenvolvimento", s:"4x10"}, {n:"Elevação Lateral", s:"4x15"}, {n:"Encolhimento", s:"4x15"}] },
            { d: "SEX", t: "Braços (Foco)", ex: [{n:"Rosca Direta", s:"3x12"}, {n:"Tríceps Testa", s:"3x12"}, {n:"Rosca Martelo", s:"3x10"}] },
            { d: "SAB", t: "Posterior e Glúteo", ex: [{n:"Mesa Flexora", s:"4x12"}, {n:"Cadeira Abdutora", s:"4x15"}, {n:"Elevação Pélvica", s:"3x15"}] },
            { d: "DOM", t: "Descanso Ativo", ex: [{n:"Caminhada", s:"30 min"}] }
        ],
        academia_emagrecer: [
            { d: "SEG", t: "Full Body HIIT", ex: [{n:"Burpees", s:"3x15"}, {n:"Agachamento", s:"3x20"}, {n:"Flexão", s:"3x15"}] },
            { d: "TER", t: "Cardio e Core", ex: [{n:"Bike", s:"20 min"}, {n:"Prancha", s:"4x45s"}, {n:"Abdominal", s:"4x25"}] },
            { d: "QUA", t: "Circuito Inferiores", ex: [{n:"Leg Press", s:"3x20"}, {n:"Extensora", s:"3x20"}, {n:"Corda", s:"5 min"}] },
            { d: "QUI", t: "Cardio Intenso", ex: [{n:"Sprints Esteira", s:"10x1min"}] },
            { d: "SEX", t: "Circuito Superiores", ex: [{n:"Puxada Alta", s:"3x20"}, {n:"Chest Press", s:"3x20"}] },
            { d: "SAB", t: "Full Body 2", ex: [{n:"Kettlebell Swing", s:"4x20"}, {n:"Mountain Climber", s:"4x40s"}] },
            { d: "DOM", t: "Caminhada", ex: [{n:"Caminhada", s:"30 min"}] }
        ]
    },
    dietas: {
        massa: [{h:"08:00", d:"4 Ovos + 100g Aveia"}, {h:"12:00", d:"200g Frango + 250g Arroz"}, {h:"16:00", d:"Whey + Fruta"}, {h:"20:00", d:"200g Carne + Macarrão"}],
        emagrecer: [{h:"08:00", d:"2 Ovos + Fruta"}, {h:"12:00", d:"150g Peixe + Salada"}, {h:"16:00", d:"Iogurte + Chia"}, {h:"19:00", d:"Sopa de Legumes"}]
    }
};

let user = { xp: 0, lvl: 1, water: 0 };

function startApp() {
    const name = document.getElementById('user-name').value;
    if(!name) return alert("Digite seu nome!");
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    document.getElementById('display-name').innerText = name;
    renderAll();
}

function renderAll() {
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

function addXP(v) {
    user.xp += v;
    if(user.xp >= 500) { user.lvl++; user.xp = 0; alert("Level UP!"); }
    updateProgress();
}

function addWater(ml) {
    user.water += ml;
    document.getElementById('water-text').innerText = `${(user.water/1000).toFixed(1)} / 3.5L`;
    if(user.water % 1000 === 0) addXP(30);
}

function calculateIMC() {
    const h = document.getElementById('imc-h').value / 100;
    const w = document.getElementById('imc-w').value;
    if(h > 0 && w > 0) {
        const imc = (w / (h * h)).toFixed(1);
        document.getElementById('imc-res').classList.remove('hidden');
        document.getElementById('imc-val-text').innerText = imc;
        document.getElementById('imc-status-text').innerText = imc < 25 ? "Peso Ideal" : "Acima do Peso";
        addXP(50);
    }
}

function renderMetas() {
    const metas = ["Meta de Água", "Treino Concluído", "Dieta 100%"];
    document.getElementById('metas-list').innerHTML = metas.map(m => `
        <div class="card-item">
            <i class="fas fa-bullseye" style="color:var(--primary)"></i>
            <span style="flex:1">${m}</span>
            <button onclick="addXP(100); this.disabled=true; this.innerText='OK'" class="btn-action" style="width:auto; padding:5px 15px">FEITO</button>
        </div>
    `).join('');
}

function renderWorkouts() {
    const goal = document.getElementById('user-goal').value;
    const loc = document.getElementById('user-location').value;
    const key = loc === 'casa' ? 'academia_emagrecer' : `academia_${goal}`;
    const treinos = nexusDB.treinos[key];

    document.getElementById('workout-grid').innerHTML = treinos.map((t, i) => `
        <div class="card glass workout-card">
            <small style="color:var(--primary)">${t.d}</small>
            <h3>${t.t}</h3>
            <button onclick="toggleWorkout(${i})" class="btn-expand">VER PROTOCOLO <i class="fas fa-chevron-down"></i></button>
            <div id="det-${i}" class="workout-details">
                ${t.ex.map(e => `<div class="exercise-row"><span>${e.n}</span><span>${e.s}</span></div>`).join('')}
                <button onclick="addXP(150); this.disabled=true; this.innerText='TREINO CONCLUÍDO'" class="btn-action" style="margin-top:15px; font-size:0.7rem">FINALIZAR +150XP</button>
            </div>
        </div>
    `).join('');
}

function toggleWorkout(id) { document.getElementById(`det-${id}`).classList.toggle('active'); }

function renderDiet() {
    const goal = document.getElementById('user-goal').value;
    const plano = nexusDB.dietas[goal];
    document.getElementById('diet-list').innerHTML = plano.map(d => `
        <div class="card-item"><b style="color:var(--primary); min-width:60px">${d.h}</b><span>${d.d}</span></div>
    `).join('');
}

function renderMachines() {
    document.getElementById('machine-list').innerHTML = nexusDB.maquinas.map((m, index) => `
        <div class="card glass machine-card" onclick="openMachineModal(${index})">
            <span class="machine-badge">${m.f}</span>
            <i class="fas ${m.icon}"></i>
            <h4>${m.n}</h4>
            <small style="color:var(--primary); font-size:0.6rem">VER DEMO</small>
        </div>
    `).join('');
}

function openMachineModal(index) {
    const m = nexusDB.maquinas[index];
    const modal = document.getElementById('machine-modal');
    document.getElementById('modal-body').innerHTML = `
        <span class="machine-badge">${m.f}</span>
        <h2 style="color:var(--primary)">${m.n}</h2>
        <div class="demo-visual"><img src="${m.gif}" alt="Demonstração"></div>
        <p style="font-size:0.8rem; line-height:1.4; color:#ccc">${m.d}</p>
        <button onclick="closeModal()" class="btn-action" style="margin-top:20px">FECHAR</button>
    `;
    modal.classList.remove('hidden');
}

function closeModal() { document.getElementById('machine-modal').classList.add('hidden'); }

function showSection(id) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

function logout() { location.reload(); }
