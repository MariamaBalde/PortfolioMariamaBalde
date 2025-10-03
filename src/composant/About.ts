export function About() {
  return `
     <section id="about" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span class="text-primary font-medium">Mes détails</span>
      <h2 class="text-4xl font-light text-text-dark mt-2">À propos de moi</h2>
      <p class="text-lg text-text-light mt-4">
        Développeuse web passionnée avec une solide formation en développement full-stack. 
        Je combine créativité et expertise technique pour créer des solutions web innovantes. 
        Mon parcours diversifié, de la physique au développement web, m'apporte une approche 
        analytique unique dans la résolution de problèmes.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Image Column -->
      <div>
        <img src="/images/about.jpg" alt="À propos" class="w-full rounded-lg shadow-xl">
      </div>

      <!-- Content Column -->
      <div>
        <div class="bg-white rounded-xl">
          <!-- Navigation Pills -->
          <div class="mb-8">
            <ul class="flex flex-wrap justify-center lg:justify-between gap-4 border border-gray-200 rounded-full p-2">
              <li>
                <button class="tab-btn px-6 py-2 rounded-full bg-primary text-white" data-tab="skills">Compétences</button>
              </li>
              <li>
                <button class="tab-btn px-6 py-2 rounded-full text-text-dark hover:bg-primary/10" data-tab="experience">Expérience</button>
              </li>
              <li>
                <button class="tab-btn px-6 py-2 rounded-full text-text-dark hover:bg-primary/10" data-tab="education">Formation</button>
              </li>
            </ul>
          </div>

          <!-- Skills Content -->
          <div id="skills" class="tab-content space-y-6 block">
            <div>
              <h6 class="font-semibold text-text-dark mb-4">Langages</h6>
              <div class="flex flex-wrap gap-2">
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">HTML</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">CSS</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">JavaScript (ES6+)</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">TypeScript</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">PHP</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">C</span>
              </div>
            </div>

            <div>
              <h6 class="font-semibold text-text-dark mb-4">Frameworks & Libraries</h6>
              <div class="flex flex-wrap gap-2">
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">React.js</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Angular</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Node.js</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Express.js</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Laravel</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Bootstrap</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Vite</span>
              </div>
            </div>

            <div>
              <h6 class="font-semibold text-text-dark mb-4">Databases & ORM</h6>
              <div class="flex flex-wrap gap-2">
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">SQL</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">PostgreSQL</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Prisma</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Firebase</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">JSON Server</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">JSON Storage</span>
              </div>
            </div>

            <div>
              <h6 class="font-semibold text-text-dark mb-4">Outils & DevOps</h6>
              <div class="flex flex-wrap gap-2">
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">GitHub</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">GitLab</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Docker</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Vercel</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Render</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Figma</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Canva</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Trello</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">UML</span>
                <span class="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Zod</span>
              </div>
            </div>
          </div>

          <!-- Experience Content -->
          <div id="experience" class="tab-content space-y-6 hidden">
            <!-- Sonatel Academy -->
            <div class="border-l-2 border-primary pl-4 mb-8">
              <h4 class="font-semibold text-text-dark text-lg">Développeuse Fullstack Web/Mobile – Sonatel Academy (Orange Digital Center)</h4>
              <p class="text-text-light text-sm mb-4">Janv. 2025 – Aujourd'hui | Dakar, Sénégal</p>
              
              <div class="space-y-6">
                <!-- Projet Gestion Administrative -->
                <div>
                  <h5 class="font-medium text-text-dark">Projet Gestion Administrative</h5>
                  <p class="text-text-light mb-2">Développement d'un système complet de gestion des apprenants.</p>
                  <p class="text-text-light mb-1">Rôle : Développeuse Backend et Intégration Frontend</p>
                  <p class="text-text-light mb-2">Technologies : PHP, HTML, CSS, MySQL</p>
                  <a href="https://github.com/lien-vers-projet" class="text-primary hover:underline">Lien GitHub : Gestion-Apprenants-ODC</a>
                </div>

                <!-- Application Woyofal -->
                <div>
                  <h5 class="font-medium text-text-dark">Application Woyofal (Microservice)</h5>
                  <p class="text-text-light mb-2">Conception d'un service de paiement digital simulé.</p>
                  <p class="text-text-light mb-1">Rôle : Développeuse Fullstack</p>
                  <p class="text-text-light mb-2">Technologies : Node.js, Express.js, PostgreSQL, API REST</p>
                  <a href="https://github.com/lien-vers-projet" class="text-primary hover:underline">Lien GitHub : Application Woyofal</a>
                </div>

                <!-- Clone WhatsApp -->
                <div>
                  <h5 class="font-medium text-text-dark">Clone WhatsApp (Réseau Social)</h5>
                  <p class="text-text-light mb-2">Développement d'une messagerie en temps réel.</p>
                  <p class="text-text-light mb-1">Rôle : Développeuse Frontend</p>
                  <p class="text-text-light mb-2">Technologies : JavaScript ES6+, Tailwind CSS</p>
                  <a href="https://github.com/lien-vers-projet" class="text-primary hover:underline">Lien GitHub : Whatsapp Project</a>
                </div>

                <!-- Application de Gestion de Cargaisons -->
                <div>
                  <h5 class="font-medium text-text-dark">Application de Gestion de Cargaisons</h5>
                  <p class="text-text-light mb-2">Suivi logistique des colis et cargaisons.</p>
                  <p class="text-text-light mb-1">Rôle : Développeuse Fullstack</p>
                  <p class="text-text-light mb-2">Technologies : PHP, MySQL, Bootstrap</p>
                  <a href="https://github.com/lien-vers-projet" class="text-primary hover:underline">Lien GitHub : Gestion Cargaison</a>
                </div>
              </div>
            </div>

            <!-- Bakeli School -->
            <div class="border-l-2 border-primary pl-4 mb-8">
              <h4 class="font-semibold text-text-dark text-lg">Développeuse Frontend Web – Bakeli School of Technology</h4>
              <p class="text-text-light text-sm mb-4">2023 – 2024 | Dakar, Sénégal</p>
              
              <div class="space-y-6">
                <!-- Portfolio Personnel -->
                <div>
                  <h5 class="font-medium text-text-dark">Portfolio Personnel</h5>
                  <p class="text-text-light mb-2">Conception et développement d'un site personnel responsive.</p>
                  <p class="text-text-light mb-1">Rôle : Développeuse Frontend</p>
                  <p class="text-text-light mb-2">Technologies : React.js, Tailwind CSS, Vite</p>
                  <a href="https://github.com/lien-vers-projet" class="text-primary hover:underline">Lien GitHub : Portfolio</a>
                </div>

                <!-- Site E-commerce -->
                <div>
                  <h5 class="font-medium text-text-dark">Site E-commerce (Hijabs Shop)</h5>
                  <p class="text-text-light mb-2">Développement d'une boutique en ligne.</p>
                  <p class="text-text-light mb-1">Rôle : Développeuse Frontend</p>
                  <p class="text-text-light mb-2">Technologies : HTML, CSS, Bootstrap</p>
                  <a href="https://demo-link" class="text-primary hover:underline">Lien Démo : Hijabs Soh</a>
                </div>
              </div>
            </div>

            <!-- SarayaTech -->
            <div class="border-l-2 border-primary pl-4">
              <h4 class="font-semibold text-text-dark text-lg">SarayaTech Sénégal</h4>
              <p class="text-text-light text-sm mb-4">2021 – 2022 | Dakar, Sénégal</p>
              
              <div>
                <h5 class="font-medium text-text-dark">Application E-learning</h5>
                <p class="text-text-light mb-2">Création d'une plateforme de cours en ligne avec gestion des utilisateurs.</p>
                <p class="text-text-light mb-1">Rôle : Développeuse Fullstack</p>
                <p class="text-text-light mb-2">Technologies : React.js, Node.js, Firebase</p>
                <a href="https://github.com/lien-vers-projet" class="text-primary hover:underline">Lien GitHub : E-learning App</a>
              </div>
            </div>
          </div>

          <!-- Education Content -->
          <div id="education" class="tab-content space-y-6 hidden">
            <div class="border-l-2 border-primary pl-4">
              <h4 class="font-semibold text-text-dark">Orange Digital Center</h4>
              <p class="text-text-light text-sm">Formation Développement Web/Mobile Full-Stack (2025)</p>
            </div>
            
            <div class="border-l-2 border-primary pl-4">
              <h4 class="font-semibold text-text-dark">FreeCodeCamp</h4>
              <p class="text-text-light text-sm">Certification HTML & CSS, JavaScript</p>
            </div>
            
            <div class="border-l-2 border-primary pl-4">
              <h4 class="font-semibold text-text-dark">Bakeli School of Technology</h4>
              <p class="text-text-light text-sm">Formation Développement Frontend (2023 - 2024)</p>
            </div>
            
            <div class="border-l-2 border-primary pl-4">
              <h4 class="font-semibold text-text-dark">SarayaTech Sénégal</h4>
              <p class="text-text-light text-sm">Formation Développement Web (2021 - 2022)</p>
            </div>
            
            <div class="border-l-2 border-primary pl-4">
              <h4 class="font-semibold text-text-dark">UIDT</h4>
              <p class="text-text-light text-sm">Licence en Physique (2017 - 2020)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
}

// Ajoutez également la fonction de gestion des onglets
export function initAboutTabs() {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tab-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;  // Changement ici
        const tabId = target.dataset.tab;
        if (tabId) showTab(tabId);
      });
    });

    showTab('skills');
  });
}

function showTab(tabId: string) {
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.add('hidden');
  });
  
  document.getElementById(tabId)?.classList.remove('hidden');
  
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    const button = btn as HTMLElement;  // Ajout de cette ligne
    if (button.dataset.tab === tabId) {
      button.classList.add('bg-primary', 'text-white');
      button.classList.remove('text-text-dark', 'hover:bg-primary/10');
    } else {
      button.classList.remove('bg-primary', 'text-white');
      button.classList.add('text-text-dark', 'hover:bg-primary/10');
    }
  });
}