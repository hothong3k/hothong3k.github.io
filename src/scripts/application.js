import '../css/style.css'

// ─── Sticky header shadow on scroll ───────────────────────────
const header = document.getElementById('site-header')
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10)
})

// ─── Active nav link via IntersectionObserver ─────────────────
const sections  = document.querySelectorAll('section[id]')
const navLinks  = document.querySelectorAll('.nav-link[data-section]')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.dataset.section === entry.target.id
        )
      })
    }
  })
}, { threshold: 0.4 })

sections.forEach(s => observer.observe(s))