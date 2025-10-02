export function Footer() {
  return `
   <footer class=" bg-white text-black py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h3 class="text-2xl font-semibold mb-4">Mariama Baldé</h3>
        <p class="text-text-light mb-8 max-w-md mx-auto">
          Développeuse web passionnée créant des expériences numériques modernes et élégantes
        </p>
        <div class="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/MariamaBalde" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition duration-300">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mariama-bald%C3%A9-dev-web/" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition duration-300">
            <i class="fab fa-linkedin"></i>
          </a>
         
          <a href="mailto:foulah18@gmail.com" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition duration-300">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
        <div class="border-t border-white/10 pt-8">
          <p class="text-text-light text-sm">
            © 2025 Mariama Baldé. Tous droits réservés. MBB
          </p>
        </div>
      </div>
    </div>
  </footer>
  `;
}