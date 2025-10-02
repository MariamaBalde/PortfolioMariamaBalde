export function Contact() {
  return `
     <section id="contact" class="py-20 bg-light-gray">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-light text-text-dark mb-4">Me contacter</h2>
        <div class="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p class="text-lg text-text-light max-w-2xl mx-auto">
          Je suis toujours ouverte à discuter de nouvelles opportunités et de projets intéressants
        </p>
      </div>
      <div class="grid lg:grid-cols-2 gap-16">
        <div>
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <h3 class="text-2xl font-semibold text-text-dark mb-6">Connectons-nous</h3>
            <div class="space-y-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-phone text-primary"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-text-dark">Téléphone</h4>
                  <a href="tel:+221774047668" class="text-text-light hover:text-primary transition duration-300">+221 77 404 76 68</a>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-text-dark">Email</h4>
                  <a href="mailto:foulah18@gmail.com" class="text-text-light hover:text-primary transition duration-300">foulah18@gmail.com</a>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-text-dark">Localisation</h4>
                  <p class="text-text-light">Sicap Karack, Dakar, Sénégal</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <i class="fab fa-github text-primary"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-text-dark">GitHub</h4>
                  <a href="https://github.com/MariamaBalde" class="text-text-light hover:text-primary transition duration-300">github.com/MariamaBalde</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <h3 class="text-2xl font-semibold text-text-dark mb-6">Envoyer un message</h3>
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <input type="text" placeholder="Votre nom" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                </div>
                <div>
                  <input type="email" placeholder="Votre email" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                </div>
              </div>
              <div>
                <textarea rows="5" placeholder="Votre message" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"></textarea>
              </div>
              <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}