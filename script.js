const nexusDB = {
    maquinas: {
        peito: ["Supino Vertical", "Pec Deck", "Crossover", "Press Inclinado", "Fly Máquina", "Dips Articulado"],
        costas: ["Puxada Alta", "Remada Baixa", "Remada Unilateral", "Pulldown Corda", "Cavalinho Máquina", "Gravitron"],
        perna: ["Leg Press 45", "Extensora", "Flexora", "Adutora", "Abdutora", "Panturrilha Máquina"],
        braço: ["Rosca Scott", "Rosca Polia", "Bíceps Unilateral", "Rosca Martelo Polia", "Bíceps Máquina", "Rosca Inversa"],
        triceps: ["Tríceps Pulley", "Tríceps Corda", "Tríceps Máquina", "Francês Polia", "Tríceps Testa Polia", "Coice Cabo"],
        abdomen: ["Crunch Máquina", "Abdominal Polia", "Elevação de Pernas", "Rotação de Tronco", "Prancha Banco", "Infra Articulado"]
    },
    dietas: {
        low_massa: ["Ovos e Aveia", "Frango e Arroz", "Batata e Carne Moída", "Omelete e Banana"],
        high_massa: ["Whey e Blueberries", "Filé Mignon e Aspargos", "Salmão e Quinoa", "Iogurte Grego e Nuts"],
        low_emagrecer: ["Claras de Ovos", "Frango e Salada", "Frutas Vermelhas", "Sopa de Legumes"],
        high_emagrecer: ["Abacate e Ovos", "Tilápia e Brócolis", "Suco Verde", "Camarão Grelhado"]
    }
};

let user = { history: [] };

function startApp() {
    const name = document.getElementById('user-name').value;
    const goal = document.getElementById('user-goal').value;
    const budget = document.getElementById('user-budget').value;

    if(!name) return alert("Por favor, digite seu nome para continuar.");

    user = { name, goal, budget, history: [] };
    
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    document.getElementById('display-name').innerText = name;
    document.getElementById('budget-info').innerText = budget === 'high' ? 'PLANO PREMIUM' : 'PLANO ECONÔMICO';

    loadMachines('peito');
    loadDiet();
}

function showSection(id) {
    document.querySelectorAll('.page-content').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

function saveStats() {
    const w = parseFloat(document.getElementById('weight').value);
    const h = parseFloat(document.getElementById('height').value);

    if(w > 0 && h > 0) {
        const imc = (w / ((h/100) * (h/100))).toFixed(1);
        const data = new Date().toLocaleDateString();
        user.history.unshift({ data, w, h, imc });
        
        document.getElementById('imc-val').innerText = imc;
        renderHistory();
    }
}

function renderHistory() {
    const body = document.getElementById('history-body');
    body.innerHTML = user.history.map(h => `<tr><td>${h.data}</td><td>${h.w}kg</td><td>${h.h}cm</td><td>${h.imc}</td></tr>`).join('');
}

function loadMachines(muscle) {
    const grid = document.getElementById('machine-grid');
    grid.innerHTML = nexusDB.maquinas[muscle].map(m => `
        <div class="glass-card">
            <h4>${m}</h4>
            <p style="color: #888; font-size: 0.8rem;">Foco: ${muscle.toUpperCase()}</p>
        </div>
    `).join('');
}

function loadDiet() {
    const key = `${user.budget}_${user.goal}`;
    document.getElementById('diet-list').innerHTML = nexusDB.dietas[key].map(d => `
        <div class="glass-card">
            <h4 style="color: var(--primary)">Refeição Sugerida</h4>
            <p>${d}</p>
        </div>
    `).join('');
}

function logout() { location.reload(); }