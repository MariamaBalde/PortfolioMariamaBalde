export function Navbar() {
  return `
    <nav class="bg-white shadow-sm fixed w-full z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex-shrink-0">
            <a href="#" class="text-2xl font-bold text-primary">Mariama Baldé</a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#home" class="text-text-dark hover:text-primary px-3 py-2 text-sm font-medium transition duration-300">Accueil</a>
              <a href="#about" class="text-text-dark hover:text-primary px-3 py-2 text-sm font-medium transition duration-300">À propos</a>
              <a href="#services" class="text-text-dark hover:text-primary px-3 py-2 text-sm font-medium transition duration-300">Compétences</a>
              <a href="#portfolio" class="text-text-dark hover:text-primary px-3 py-2 text-sm font-medium transition duration-300">Portfolio</a>
              <a href="#contact" class="text-text-dark hover:text-primary px-3 py-2 text-sm font-medium transition duration-300">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;
}