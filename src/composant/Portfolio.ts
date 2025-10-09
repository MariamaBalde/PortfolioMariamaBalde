export function Portfolio() {
  return `
   <section id="portfolio" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-light text-text-dark mb-4">Mon Portfolio</h2>
        <div class="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p class="text-lg text-text-light max-w-2xl mx-auto">
          Une vitrine de mes projets récents et de mon travail
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <!-- Troisième projet -->
        <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
          <div class="relative overflow-hidden">
            <a href="https://tache21-e-learning-app-j7cx.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/images/Image collée (2).png" alt="Social Network" class="w-full h-48 object-cover group-hover:scale-110 transition duration-300">
              <div class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div class="text-white text-center">
                  <h3 class="font-semibold text-lg">E-learning Platform</h3>
                  <p class="text-sm">Educational platform</p>
                  <button class="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition duration-300">
                    Voir le projet
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-text-dark mb-2">E-learning Platform</h3>
            <p class="text-text-light text-sm mb-4">Educational platform</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">React js</span>
              <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Tailwind css</span>
              <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Firebase</span>
            </div>
          </div>
        </div>
      
      <!-- Premier projet -->
      <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
          <div class="relative overflow-hidden">
            <a href="https://github.com/MariamaBalde/Gestion-Apprenants-ODC.git" target="_blank" rel="noopener noreferrer">
              <img src="/images/GesAdminODC.png" alt="E-commerce Site" class="w-full h-48 object-cover group-hover:scale-110 transition duration-300">
              <div class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div class="text-white text-center">
                  <h3 class="font-semibold text-lg">E-learning Platform</h3>
                  <p class="text-sm">Educational platform</p>
                  <button class="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition duration-300">
                    Voir le projet
                  </button>     
                </div>
              </div>
            </a>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-text-dark mb-2">  Système de Gestion Administrative</h3>
            <p class="text-text-light text-sm mb-4">Administrative management system for Sonatel Academy

   </p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">HTML</span>
              <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">CSS</span>
              <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">PHP</span>
                            <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">MySQL</span>

            </div>
          </div>
        </div>
      
      <!-- Deuxième projet -->
        <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
          <div class="relative overflow-hidden">
            <a href="https://mariamabalde.github.io/Mini-Projet--Bootstrap/" target="_blank" rel="noopener noreferrer">
              <img src="/images/boutique en ligne.png" alt="E-learning Platform" class="w-full h-48 object-cover group-hover:scale-110 transition duration-300">
              <div class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div class="text-white text-center">
                  <h3 class="font-semibold text-lg">E-commerce Hijabs</h3>
                  <p class="text-sm">Online store platform</p>
                  <button class="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition duration-300">
                    Voir le projet
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-text-dark mb-2">E-commerce Hijabs</h3>
            <p class="text-text-light text-sm mb-4">Online store for hijab sales with modern UI/UX</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Bootstrap</span>
              
            </div>
          </div>
        </div>
      


      <!-- Quatrième projet -->
        <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
          <div class="relative overflow-hidden">
            <a href="https://mariamabalde.github.io/T-ches_validation_Javascript/" target="_blank" rel="noopener noreferrer">
              <img src="/images/project-ecommerce1.jpg" alt="Admin System" class="w-full h-48 object-cover group-hover:scale-110 transition duration-300">
              <div class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div class="text-white text-center">
                  <h3 class="font-semibold text-lg">Admin System</h3>
                  <p class="text-sm">Management platform</p>
                  <button class="mt-4 px-6 py-2 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition duration-300">
                    Voir le projet
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-text-dark mb-2">E-commerce Site</h3>
            <p class="text-text-light text-sm mb-4">Oonline store platforme</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">HTML</span>
              <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">CSS</span>
              <span class="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">JAVASCRIPT</span>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  </section>
  `;
}
