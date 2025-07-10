import './input.css';
import './google-analytics.js';

// SCRIPT PARA INJETAR SEO
function injectSeoData() {
    fetch('/seo.json')
        .then(response => response.json())
        .then(data => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.innerHTML = JSON.stringify(data);
            document.head.appendChild(script);
            console.log('Dados de SEO injetados com sucesso.');
        })
        .catch(error => console.error('Erro ao carregar dados de SEO:', error));
}

// SCRIPT PARA MENU MOBILE
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// SCRIPT PARA HEADER STICKY
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-md');
    } else {
        header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-md');
    }
});

// SCRIPT PARA ANIMAÇÃO DA AUTOMAÇÃO (HERO)
document.addEventListener('DOMContentLoaded', () => {
    injectSeoData();

    const statusEl = document.getElementById('automation-status');
    const stepsGridEl = document.getElementById('automation-steps-grid');
    const progressTextEl = document.getElementById('progress-text');
    const progressBarEl = document.getElementById('progress-bar');

    const steps = [
        { title: 'Receber', subtitle: 'Lead capturado', statusText: 'Capturando lead...' },
        { title: 'Processar', subtitle: 'Dados limpos', statusText: 'Processando dados...' },
        { title: 'Validar', subtitle: 'Dados aprovados', statusText: 'Validando informações...' },
        { title: 'Registrar', subtitle: 'Dados salvos', statusText: 'Registrando no sistema...' },
        { title: 'CRM', subtitle: 'Criando contato', statusText: 'Criando contato no CRM...' },
        { title: 'Contatar', subtitle: 'Enviar um Whatsapp', statusText: 'Enviando mensagem...' }
    ];

    let currentStepIndex = 0;
    let animationInterval;

    function renderInitialSteps() {
        if (!stepsGridEl) return;
        stepsGridEl.innerHTML = '';
        steps.forEach((step, index) => {
            const iconPending = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
            const stepEl = document.createElement('div');
            stepEl.className = 'automation-step flex flex-col items-center p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60 transition-all duration-300';
            stepEl.dataset.index = index;
            stepEl.innerHTML = `
                <div class="icon-container bg-gray-100 p-2 rounded-full">${iconPending}</div>
                <p class="font-semibold text-sm mt-2 text-gray-800">${step.title}</p>
                <p class="text-xs text-gray-500 text-center">${step.subtitle}</p>
            `;
            stepsGridEl.appendChild(stepEl);
        });
    }

    function updateAnimationStep() {
        if (!statusEl) return;
        if (currentStepIndex >= steps.length) {
            clearInterval(animationInterval);
            setTimeout(() => {
                currentStepIndex = 0;
                startAnimation();
            }, 2500);
            return;
        }
        const stepData = steps[currentStepIndex];
        statusEl.textContent = stepData.statusText;
        progressTextEl.textContent = `${currentStepIndex + 1}/6`;
        progressBarEl.style.width = `${((currentStepIndex + 1) / 6) * 100}%`;
        const iconCompleted = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><path d="M20 6 9 17l-5-5"/></svg>`;
        const iconInProgress = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 animate-spin" style="animation-duration: 2s;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`;
        const iconPending = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
        document.querySelectorAll('.automation-step').forEach(stepEl => {
            const index = parseInt(stepEl.dataset.index);
            const iconContainer = stepEl.querySelector('.icon-container');
            stepEl.classList.remove('completed', 'in-progress', 'leads-to-progress', 'bg-green-50', 'border-green-200', 'bg-indigo-50', 'border-indigo-200', 'ring-2', 'ring-indigo-500', 'opacity-100', 'bg-gray-50', 'border-gray-200', 'opacity-60');
            iconContainer.classList.remove('bg-green-100', 'bg-indigo-100', 'bg-gray-100');
            if (index < currentStepIndex) {
                stepEl.classList.add('completed', 'bg-green-50', 'border-green-200', 'opacity-100');
                iconContainer.classList.add('bg-green-100');
                iconContainer.innerHTML = iconCompleted;
            } else if (index === currentStepIndex) {
                stepEl.classList.add('in-progress', 'bg-indigo-50', 'border-indigo-200', 'ring-2', 'ring-indigo-500', 'opacity-100');
                iconContainer.classList.add('bg-indigo-100');
                iconContainer.innerHTML = iconInProgress;
                if (index > 0) {
                    const prevStep = document.querySelector(`.automation-step[data-index="${index - 1}"]`);
                    if(prevStep) prevStep.classList.add('leads-to-progress');
                }
            } else {
                stepEl.classList.add('bg-gray-50', 'border-gray-200', 'opacity-60');
                iconContainer.classList.add('bg-gray-100');
                iconContainer.innerHTML = iconPending;
            }
        });
        currentStepIndex++;
    }

    function startAnimation() {
        if (!stepsGridEl) return;
        renderInitialSteps();
        currentStepIndex = 0;
        updateAnimationStep();
        animationInterval = setInterval(updateAnimationStep, 2000);
    }
    
    startAnimation();
});

// SCRIPT PARA ANIMAÇÃO DE SCROLL (REVEAL)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1
});

const revealableElements = document.querySelectorAll('.revealable');
revealableElements.forEach((el) => {
    observer.observe(el);
});
