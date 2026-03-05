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
        nav.classList.add('bg-white', 'shadow-xl', 'py-2');
        nav.classList.remove('bg-white/80', 'py-4', 'border-transparent')
        nav.classList.add('border-blue-100')
    } else {
        nav.classList.remove('bg-white', 'shadow-xl', 'py-2', 'border-blue-100');
        nav.classList.add('bg-white/80', 'py-4', 'border-transparent')
    }
})

function abrirGPS() {
    // Endereço exato da Vidraçaria Elisabeth
    const endereco = "R. San Salvador, 24 - Jardim Santa Rita, Itapevi - SP, 06660-200";
    
    // Codifica o endereço para URL
    const urlEndereco = encodeURIComponent(endereco);
    
    // Tenta abrir na aplicação Maps (iOS/Android) ou no browser
    // Usamos o protocolo universal que o Google recomenda
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${urlEndereco}`;
    
    window.open(googleMapsUrl, '_blank');
}

// Logica simples para verificar se a página carregou
console.log("Vidraçaria Elisabeth - Site Ativo")

//Criar slides de forma móvel
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});