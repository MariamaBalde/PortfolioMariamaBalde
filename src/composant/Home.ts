export function Home() {
  return `
    <section id="home" class="bg-gradient-to-br from-secondary to-accent min-h-screen flex items-center pt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-light text-text-dark mb-6">
            Salut, je suis <span class="font-semibold text-primary">Mariama Baldé</span>
          </h1>
          <p class="text-xl md:text-2xl text-text-light mb-8 max-w-3xl mx-auto">
            Développeuse Web & Mobile
          </p>
          <p class="text-lg text-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
             Passionnée par la création d'applications web modernes et responsives. Motivée, curieuse et désireuse d'apprendre de nouvelles technologies pour relever des défis techniques et contribuer à des projets innovants.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" class="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg">
              Me contacter
            </a>
            <a href="#portfolio" class="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-full transition duration-300">
              Voir mes travaux
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}