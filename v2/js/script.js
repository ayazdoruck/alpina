// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // 0. ADVANCED LIQUID OCEAN BACKGROUND
    initLiquidOcean();

    // 1. CINEMATIC LOADER LOGIC
    const loader = document.getElementById('loader');
    const loaderText = document.querySelector('.loader-text');
    const loaderLine = document.querySelector('.loader-line');

    if (loader && loaderText && loaderLine) {
        const originalText = loaderText.innerText;
        loaderText.innerHTML = `<span>${originalText}</span>`;
        const textSpan = loaderText.querySelector('span');

        gsap.set(textSpan, { y: '100%', opacity: 0 });

        const tl = gsap.timeline();
        tl.to(textSpan, {
            y: '0%',
            opacity: 1,
            duration: 0.8, // Snappier reveal
            ease: "power4.out",
            delay: 0.1
        });

        tl.to(loaderLine, {
            width: '100%',
            duration: 1,
            ease: "expo.inOut"
        }, "-=0.4");

        window.addEventListener('load', () => {
            // Out Animation
            tl.to(textSpan, {
                y: '-100%',
                opacity: 0,
                duration: 0.6,
                ease: "power4.in",
                delay: 0.1 // Shortened delay
            });

            tl.to(loaderLine, {
                width: '0%',
                duration: 0.5,
                ease: "expo.inOut"
            }, "-=0.3");

            tl.to(loader, {
                yPercent: -100,
                duration: 0.8, // Faster slide out
                ease: "expo.inOut",
                onStart: () => {
                    // Start content animations while loader is still sliding up
                    initAnimations();
                },
                onComplete: () => {
                    loader.style.display = 'none';
                }
            }, "-=0.2");
        });
    } else {
        initAnimations();
    }

    // EXPORT REINIT FUNCTION FOR i18n
    window.reinitHeadingAnimation = () => {
        const heroHeading = document.querySelector('.hero-heading');
        if (heroHeading) {
            heroHeading.classList.remove('is-split');
            heroHeading.style.opacity = '0';
            initHeroHeadingAnimation();
        }
    };

    function initHeroHeadingAnimation() {
        const heroHeading = document.querySelector('.hero-heading');
        if (heroHeading && !heroHeading.classList.contains('is-split')) {
            const text = heroHeading.innerText;
            const words = text.split(/\s+/);

            heroHeading.innerHTML = words.map(word =>
                `<span class="word-span" style="display:inline-block; overflow:hidden; vertical-align:top; margin-right: 0.25em; padding-bottom: 0.05em;">
                    <span style="display:inline-block">${word}</span>
                </span>`
            ).join(' ');

            gsap.fromTo(heroHeading.querySelectorAll('.word-span span'),
                { y: '100%', opacity: 0 },
                {
                    y: '0%',
                    opacity: 1,
                    duration: 0.8, // Snappier heading reveal
                    stagger: 0.04,
                    ease: 'power4.out',
                    delay: 0.05
                }
            );

            heroHeading.classList.add('is-split');
            gsap.to(heroHeading, { opacity: 1, duration: 0.3 });
        }
    }

    function initLiquidOcean() {
        if (document.getElementById('bg-ocean-container')) return;

        const container = document.createElement('div');
        container.id = 'bg-ocean-container';
        container.innerHTML = `
            <canvas id="bg-ocean-canvas"></canvas>
            <div class="bg-logo-watermark">
                <img src="../images/logo_mini.png" alt="Alpina">
            </div>
        `;
        document.body.prepend(container);

        const canvas = document.getElementById('bg-ocean-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, waves = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            waves = [
                { y: height * 0.9, length: 0.005, amplitude: 50, speed: 0.02, color: 'rgba(0, 212, 255, 0.03)' },
                { y: height * 0.85, length: 0.003, amplitude: 70, speed: 0.015, color: 'rgba(0, 212, 255, 0.02)' },
                { y: height * 0.7, length: 0.002, amplitude: 100, speed: 0.008, color: 'rgba(0, 212, 255, 0.01)' }
            ];
        }

        window.addEventListener('resize', resize);
        resize();

        let count = 0;
        function animate() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#010c17';
            ctx.fillRect(0, 0, width, height);
            waves.forEach(wave => {
                ctx.beginPath(); ctx.moveTo(0, height); ctx.lineTo(0, wave.y);
                for (let i = 0; i < width; i++) {
                    const y = wave.y + Math.sin(i * wave.length + count * wave.speed) * wave.amplitude + Math.cos(i * 0.001 + count * 0.01) * 20;
                    ctx.lineTo(i, y);
                }
                ctx.lineTo(width, height); ctx.fillStyle = wave.color; ctx.fill();
            });
            count += 1;
            requestAnimationFrame(animate);
        }
        animate();

        gsap.set(".bg-logo-watermark", { xPercent: -50, yPercent: -50 });
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            gsap.to(".bg-logo-watermark", {
                y: -(scroll * 0.1),
                opacity: 0.05 + (scroll * 0.00005),
                duration: 0.8,
                ease: "power1.out",
                overwrite: true
            });
        });
        gsap.to(".bg-logo-watermark img", { y: 30, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }

    function initAnimations() {
        const header = document.querySelector('.header-v2');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 80) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
            });
        }

        initHeroHeadingAnimation();

        gsap.to('.hero-bg-parallax', {
            yPercent: 20, ease: "none",
            scrollTrigger: { trigger: ".hero-v2", start: "top top", end: "bottom top", scrub: true }
        });

        gsap.utils.toArray('.fade-up').forEach(item => {
            gsap.from(item, {
                opacity: 0, y: 100, duration: 0.8, // Faster fade up
                scrollTrigger: { trigger: item, start: "top 95%", toggleActions: "play none none reverse" }
            });
        });

        if (document.body.classList.contains('services-page-v2')) {
            const slides = gsap.utils.toArray('.service-slide-v2');
            slides.forEach((slide) => {
                const bg = slide.querySelector('.slide-bg');
                const content = slide.querySelector('.slide-content');
                if (bg) gsap.fromTo(bg, { yPercent: -15 }, { yPercent: 15, ease: "none", scrollTrigger: { trigger: slide, start: "top bottom", end: "bottom top", scrub: true } });
                if (content) gsap.from(content, { opacity: 0, y: 50, duration: 0.8, scrollTrigger: { trigger: slide, start: "top 70%", toggleActions: "play none none reverse" } });
            });
        }

        const links = document.querySelectorAll('.nav-links a');
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.style.opacity = '1';
                link.style.color = 'var(--accent-v2)';
            }
        });
    }
});
