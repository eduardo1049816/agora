const nexusDB = {
    maquinas: [
        { n: "Supino Vertical", f: "Peitoral", d: "Ajuste o banco para que as alças fiquem na linha do mamilo. Empurre e controle a volta." },
        { n: "Pec Deck (Voador)", f: "Peitoral", d: "Mantenha os cotovelos na linha dos ombros. Foque no esmagamento do peito no centro." },
        { n: "Lat Pulldown (Puxada)", f: "Costas", d: "Puxe a barra em direção ao peito, não ao pescoço. Mantenha os cotovelos para baixo." },
        { n: "Remada Baixa", f: "Costas", d: "Mantenha a coluna ereta. Puxe o triângulo em direção ao umbigo fechando as escápulas." },
        { n: "Leg Press 45°", f: "Pernas", d: "Pés na largura dos ombros. Desça o máximo sem tirar a lombar do banco." },
        { n: "Cadeira Extensora", f: "Quadríceps", d: "Ajuste o rolo no tornozelo. Extensão total e 1 segundo de contração no topo." },
        { n: "Mesa Flexora", f: "Posterior de Coxa", d: "Mantenha o quadril colado no banco. Traga o rolo até o glúteo." },
        { n: "Smith Machine", f: "Multifuncional", d: "Barra guiada. Ideal para agachamentos, passadas e supinos com segurança extra." },
        { n: "Hack Squat", f: "Pernas (Ênfase Quad)", d: "Posicione as costas no encosto. Desça controlando o peso, pés levemente à frente." },
        { n: "Cadeira Abdutora", f: "Glúteos", d: "Afaste as pernas com força lateral. Tronco levemente à frente aumenta a ativação." },
        { n: "Shoulder Press", f: "Ombros", d: "Desenvolvimento sentado. Mantenha os cotovelos levemente à frente da linha do ombro." },
        { n: "Tríceps Pulley", f: "Tríceps", d: "Cotovelos colados no corpo. Estenda totalmente o braço usando a barra ou corda." },
        { n: "Bíceps Scott Machine", f: "Bíceps", d: "Apoie os braços totalmente no estofado. Isso evita roubar com o balanço do corpo." },
        { n: "Crossover Polia Alta", f: "Peitoral", d: "Excelente para isolar o peitoral inferior e médio usando cabos." }
    ],
    treinos: {
        academia_massa: [
            { d: "SEG", t: "Peito e Tríceps", ex: [{n:"Supino Máquina", s:"4x10"}, {n:"Pec Deck", s:"3x12"}, {n:"Crossover", s:"3x15"}, {n:"Tríceps Corda", s:"4x12"}] },
            { d: "TER", t: "Costas e Bíceps", ex: [{n:"Puxada Alta", s:"4x10"}, {n:"Remada Baixa", s:"4x12"}, {n:"Serrote", s:"3x10"}, {n:"Rosca Scott", s:"4x10"}] },
            { d: "QUA", t: "Pernas (Foco Quad)", ex: [{n:"Leg Press 45", s:"4x12"}, {n:"Extensora", s:"4x15"}, {n:"Agachamento Hack", s:"3x10"}, {n:"Panturrilha", s:"4x20"}] },
            { d: "QUI", t: "Ombros e Trapézio", ex: [{n:"Desenvolvimento", s:"4x10"}, {n:"Elevação Lateral", s:"4x15"}, {n:"Remada Alta", s:"3x12"}, {n:"Encolhimento", s:"4x15"}] },
            { d: "SEX", t: "Braços (Foco)", ex: [{n:"Rosca Direta", s:"3x12"}, {n:"Tríceps Testa", s:"3x12"}, {n:"Rosca Martelo", s:"3x10"}, {n:"Mergulho Banco", s:"3x15"}] },
            { d: "SAB", t: "Posterior e Glúteo", ex: [{n:"Mesa Flexora", s:"4x12"}, {n:"Stiff", s:"3x12"}, {n:"Cadeira Abdutora", s:"4x15"}, {n:"Elevação Pélvica", s:"3x15"}] },
            { d: "DOM", t: "Descanso Ativo", ex: [{n:"Caminhada", s:"30 min"}, {n:"Alongamento", s:"15 min"}] }
        ],
        academia_emagrecer: [
            { d: "SEG", t: "Full Body HIIT", ex: [{n:"Burpees", s:"3x15"}, {n:"Agachamento", s:"3x20"}, {n:"Flexão de Braço", s:"3x15"}, {n:"Esteira", s:"10 min"}] },
            { d: "TER", t: "Cardio + Core", ex: [{n:"Bike", s:"20 min"}, {n:"Prancha", s:"4x45s"}, {n:"Abdominal Infra", s:"4x25"}] },
            { d: "QUA", t: "Circuito Inferiores", ex: [{n:"Leg Press", s:"3x20"}, {n:"Extensora", s:"3x20"}, {n:"Afundo", s:"3x12"}, {n:"Corda", s:"5 min"}] },
            { d: "QUI", t: "Cardio Intenso", ex: [{n:"Esteira (Sprints)", s:"10x1min"}, {n:"Elíptico", s:"15 min"}] },
            { d: "SEX", t: "Circuito Superiores", ex: [{n:"Puxada Alta", s:"3x20"}, {n:"Supino Máquina", s:"3x20"}, {n:"Elevação Lateral", s:"3x20"}] },
            { d: "SAB", t: "Full Body 2", ex: [{n:"Kettlebell Swing", s:"4x20"}, {n:"Mountain Climber", s:"4x40s"}, {n:"Salto na Caixa", s:"3x10"}] },
            { d: "DOM", t: "Descanso Ativo", ex: [{n:"Caminhada Leve", s:"30 min"}] }
        ]
    },
    dietas: {
        massa: [
            { h: "08:00", d: "4 Ovos + 100g Aveia + 1 Banana" },
            { h: "12:00", d: "200g Frango + 250g Arroz + Salada" },
            { h: "16:00", d: "30g Whey + 1 Fruta + 30g Castanhas" },
            { h: "20:00", d: "200g Carne + 200g Macarrão" }
        ],
        emagrecer: [
            { h: "08:00", d: "2 Ovos + 1 Fruta + Café s/ Açúcar" },
            { h: "12:00", d: "150g Peixe + 100g Arroz + Muita Salada" },
            { h: "16:00", d: "Iogurte Natural + 10g Chia" },
            { h: "19:00", d: "Sopa de Legumes com Frango" }
        ]
    }
};

let user = { xp: 0, lvl: 1, water: 0 };

function startApp() {
    const name = document.getElementById('user-name').value;
    if(!name) return alert("Por favor, digite seu nome!");

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

function addXP(val) {
    user.xp += val;
    if(user.xp >= 500) { 
        user.lvl++; 
        user.xp = 0; 
        alert("LEVEL UP! Você está mais forte!"); 
    }
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
        document.getElementById('imc-status-text').innerText = imc < 25 ? "Peso Saudável" : "Acima do Peso";
        addXP(50);
    }
}

function renderMetas() {
    const metas = ["Bater Meta de Água", "Concluir Treino do Dia", "Seguir Protocolo Nutricional"];
    document.getElementById('metas-list').innerHTML = metas.map(m => `
        <div class="card-item" style="display:flex; justify-content:space-between; align-items:center">
            <span>${m}</span>
            <button onclick="addXP(100); this.disabled=true; this.innerText='FEITO'" class="btn-action" style="width:auto; padding: 5px 15px;">CONCLUIR</button>
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
            <small style="color:var(--primary); font-weight:800">${t.d}</small>
            <h3 style="margin:5px 0">${t.t}</h3>
            <button onclick="toggleWorkout(${i})" class="btn-expand">VER EXERCÍCIOS <i class="fas fa-chevron-down"></i></button>
            <div id="det-${i}" class="workout-details">
                ${t.ex.map(e => `
                    <div class="exercise-row">
                        <span>${e.n}</span>
                        <span>${e.s}</span>
                    </div>
                `).join('')}
                <button onclick="addXP(150); this.disabled=true; this.innerText='TREINO CONCLUÍDO'" class="btn-action" style="margin-top:15px; font-size:0.7rem">FINALIZAR TREINO +150 XP</button>
            </div>
        </div>
    `).join('');
}

function toggleWorkout(id) {
    document.getElementById(`det-${id}`).classList.toggle('active');
}

function renderDiet() {
    const goal = document.getElementById('user-goal').value;
    const plano = nexusDB.dietas[goal] || nexusDB.dietas.massa;
    document.getElementById('diet-list').innerHTML = plano.map(d => `
        <div class="card-item" style="display:flex; gap:20px; align-items:center">
            <b style="color:var(--primary); min-width:60px">${d.h}</b>
            <span style="font-size:0.9rem">${d.d}</span>
        </div>
    `).join('');
}

function renderMachines() {
    document.getElementById('machine-list').innerHTML = nexusDB.maquinas.map(m => `
        <div class="card glass">
            <span class="machine-badge">${m.f}</span>
            <h4 style="margin-bottom:8px">${m.n}</h4>
            <p style="font-size:0.75rem; color:#888; line-height:1.4">${m.d}</p>
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
