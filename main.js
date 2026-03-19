// Seletores principais
const mobileBtn = document.getElementById('mobile-btn')
const mobileMenu = document.getElementById('mobile-menu')
const nav = document.getElementById('main-nav')

// --- 1. FUNÇÃO PARA ABRIR/FECHAR MENU MOBILE (Faltava o Evento de Clique) ---
if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede fechar ao clicar no próprio botão
        mobileMenu.classList.toggle('hidden');
        
        const icon = mobileBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars-staggered');
            icon.classList.toggle('fa-xmark');
        }
    });
}

// Função auxiliar para fechar o menu mobile
function closeMobileMenu() {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars-staggered');
            icon.classList.remove('fa-xmark');
        }
    }
}

// Fechar menu mobile ao clicar em links
const mobileLinks = mobileMenu?.querySelectorAll('a')
mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Fechar ao clicar fora do menu
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
});

// --- 2. LÓGICA DE SCROLL ---
function handleScroll() {
    if (window.scrollY > 50) {
        nav.classList.add('bg-white', 'shadow-2xl', 'py-2');
        nav.classList.remove('bg-white/80', 'py-4', 'border-transparent');
        nav.classList.add('border-slate-100');
        closeMobileMenu();
    } else {
        nav.classList.remove('bg-white', 'shadow-2xl', 'py-2', 'border-slate-100');
        nav.classList.add('bg-white/80', 'py-4', 'border-transparent');
    }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

// --- 3. FUNCIONALIDADE GPS ---
function abrirGPS() {
    const endereco = "R. San Salvador, 24 - Jardim Santa Rita, Itapevi - SP, 06660-200";
    const urlEndereco = encodeURIComponent(endereco);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${urlEndereco}`;
    window.open(googleMapsUrl, '_blank');
}

// --- 4. SWIPER (SERVIÇOS) ---
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
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
        320: { slidesPerView: 1.1, spaceBetween: 10 },
        768: { slidesPerView: 2, centeredSlides: false },
        1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 30 },
    },
});

// --- 5. MÁSCARA DE TELEFONE ---
const telInput = document.getElementById('tel-mask')
if(telInput) {
    telInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, "")
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
        value = value.replace(/(\d{5})(\d)/, "$1-$2")
        e.target.value = value.substring(0, 15)
    })
}

// --- ASSINATURA NO CONSOLE ---
const assinaturaVidracaria = `
██╗   ██╗██╗██████╗ ██████╗  █████╗  ██████╗ █████╗ ██████╗ ██╗ █████╗ 
 ██║   ██║██║██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗██║██╔══██╗
 ██║   ██║██║██║  ██║██████╔╝███████║██║     ███████║██████╔╝██║███████║
 ╚██╗ ██╔╝██║██║  ██║██╔══██╗██╔══██║██║     ██╔══██║██╔══██╗██║██╔══██║
  ╚████╔╝ ██║██████╔╝██║  ██║██║  ██║╚██████╗██║  ██║██║  ██║██║██║  ██║
   ╚═══╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
   
 ███████╗██╗     ██╗███████╗ █████╗ ██████╗ ███████╗████████╗██╗  ██╗
 ██╔════╝██║     ██║██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██║  ██║
 █████╗  ██║     ██║███████╗███████║██████╔╝█████╗     ██║   ███████║
 ██╔══╝  ██║     ██║╚════██║██╔══██║██╔══██╗██╔══╝     ██║   ██╔══██║
 ███████╗███████╗██║███████║██║  ██║██████╔╝███████╗   ██║   ██║  ██║
 ╚══════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝
`;

console.log("%c" + assinaturaVidracaria, "color: #1e3a8a; font-weight: bold;");
console.log("%c🚀 Sistema desenvolvido por Jean Costa | https://www.linkedin.com/in/jeancostadev", "color: #2563eb; font-size: 12px;");