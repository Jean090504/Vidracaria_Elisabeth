// Seletores principais
const mobileBtn = document.getElementById('mobile-btn')
const mobileMenu = document.getElementById('mobile-menu')
const nav = document.getElementById('main-nav')

// Toggle Menu Mobile
mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    // Troca o ícone de barras para fechar 
    const icon = mobileBtn.querySelector('i')
    icon.classList.toggle('fa-bars-staggered')
    icon.classList.toggle('fa-xmark')
})

// Fechar menu mobile ao clicar em links
const mobileLinks = mobileMenu.querySelectorAll('a')
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden')
    })
})

// Efeito de Scroll no Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        nav.classList.add('bg-white', 'shadow-xl', 'py-2')
        nav.classList.remove('bg-white/80', 'py-4', 'border-transparent')
        nav.classList.add('border-blue-100')
    } else {
        nav.classList.remove('bg-white', 'shadow-xl', 'py-2', 'border-blue-100')
        nav.classList.add('bg-white/80', 'py-4', 'border-transparent')
    }
})

function abrirGPS() {
    const endereco = "R. San Salvador, 24 - Jardim Santa Rita, Itapevi - SP, 06660-200";
    const urlEndereco = encodeURIComponent(endereco);
    
    // URL Oficial e Limpa
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${urlEndereco}`;
    
    window.open(googleMapsUrl, '_blank');
}

// Logica simples para verificar se a página carregou
console.log("Vidraçaria Elisabeth - Site Ativo")

//Criar slides de forma móvel
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true, // Centraliza o slide ativo
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    breakpoints: {
        // No celular: 1.2 slides (mostra uma bordinha do próximo)
        320: {
            slidesPerView: 1.2,
            centeredSlides: true,
            spaceBetween: 10,
        },
        // No tablet: 2 slides
        768: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 20,
        },
        // No PC: 3 slides (equilíbrio perfeito)
        1024: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
        },
    },
})

const telInput = document.getElementById('tel-mask')

if(telInput) {
    telInput.addEventListener('input', (e) => {
        // Remove tudo que não é número
        let value = e.target.value.replace(/\D/g, "")
        // Adiciona parênteses
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
         // Adiciona o hífen
        value = value.replace(/(\d{5})(\d)/, "$1-$2")
        // Limita o tamanho
        e.target.value = value.substring(0, 15)
    })
}

