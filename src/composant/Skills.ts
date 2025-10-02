export function Skills() {
  return `
    <section id="services" class="py-20 bg-light-gray">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-light text-text-dark mb-4">Mes compétences</h2>
        <div class="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p class="text-lg text-text-light max-w-2xl mx-auto">
          Technologies et outils que j'utilise pour donner vie aux idées
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-code text-primary text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-text-dark mb-4">Frontend</h3>
          <ul class="text-text-light space-y-2 text-sm">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Angular</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-server text-primary text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-text-dark mb-4">Backend</h3>
          <ul class="text-text-light space-y-2 text-sm">
            <li>Node.js, Express.js</li>
            <li>PHP, Laravel</li>
            <li>Programmation C</li>
            <li>APIs REST</li>
          </ul>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-database text-primary text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-text-dark mb-4">Bases de données</h3>
          <ul class="text-text-light space-y-2 text-sm">
            <li>SQL, PostgreSQL</li>
            <li>Prisma ORM</li>
            <li>Firebase, JSON Server</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-tools text-primary text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-text-dark mb-4">Outils & DevOps</h3>
          <ul class="text-text-light space-y-2 text-sm">
            <li>Git, GitHub, GitLab</li>
            <li>Docker, Vercel</li>
            <li>Figma, Canva</li>
            <li>Trello, UML</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  `;
}