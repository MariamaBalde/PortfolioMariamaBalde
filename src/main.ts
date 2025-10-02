import './style.css'
import { Navbar } from './composant/Navbar'
import { Home } from './composant/Home'
import { About, initAboutTabs } from './composant/About'
import { Skills } from './composant/Skills'
import { Portfolio } from './composant/Portfolio'
import { Contact } from './composant/Contact'
import { Footer } from './composant/Footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Navbar()}
  ${Home()}
  ${About()}
  ${Skills()}
  ${Portfolio()}
  ${Contact()}
  ${Footer()}
`

// Initialiser les fonctionnalités des onglets de la section About
initAboutTabs();
