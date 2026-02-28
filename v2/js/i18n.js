const translations = {
    tr: {
        // Navigation
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımızda",
        nav_services: "Hizmetlerimiz",
        nav_reports: "Market Raporları",
        nav_team: "Ekibimiz",
        nav_contact: "İletişim",

        // Hero
        hero_label: "1983'ten Beri Sektör Lideri",
        hero_heading: "Global Sulara <br> Hassasiyetle <br> Rehberlik Ediyoruz.",
        hero_scroll: "Keşfetmek için kaydır",

        // Text Reveal Section
        reveal_main: "Alpina sadece bir brokerlik firması değildir; <br> filonuzun yaşam döngüsüne sadık <br> <span class='highlight'>stratejik ortaklarınızız</span>.",

        // Services Horizontal
        services_label: "UZMANLIK",
        services_title: "Neler Yapıyoruz?",
        service_nb_title: "Yeni İnşa",
        service_nb_desc: "Tasarım aşamasından denize inişe kadar. Stratejik tersane yönetimi.",
        service_sh_title: "İkinci El",
        service_sh_desc: "Küresel erişim ve yerel bakış açısıyla varlık yönetimi.",
        service_sc_title: "Gemi Geri Dönüşüm",
        service_sc_desc: "Çevreye duyarlı ve sürdürülebilir söküm hizmetleri.",
        service_ch_title: "Kiralama & Proje",
        service_ch_desc: "Küresel talebi fleet arzı ile buluşturuyoruz.",

        // Advantage Section
        adv_label: "NEDEN ALPINA",
        adv_title: "Alpina Farkı",
        adv_1_t: "Köklü Geçmiş",
        adv_1_d: "1983'ten bugüne, küresel denizcilik sektöründe 40 yılı aşkın sarsılmaz güven ve tecrübe.",
        adv_2_t: "Küresel Ağ",
        adv_2_t: "Küresel Ağ",
        adv_2_d: "Avrupa, Asya ve Orta Doğu'daki stratejik varlığımızla her noktadayız.",
        adv_3_t: "Teknik Uzmanlık",
        adv_3_d: "Gemi inşa mühendisleri ve kaptanlardan oluşan kadromuzla tam teknik disiplin.",
        adv_4_t: "Pazar Zekası",
        adv_4_d: "Gelişmiş veri analizi ve gerçek zamanlı raporlarla en kritik yatırım kararlarınızı güçlendiriyoruz.",

        // Footer
        footer_cta: "Yelken Açmaya Hazır Mısınız?",
        footer_copy: "© 2026 Alpina Shipping. Yarın İçin Tasarlandı.",

        // Team Page
        team_label: "BİZ KİMİZ",
        team_title: "Vizyoner Ekibimiz",
        team_desc: "Denizcilik tutkusu ve mühendislik zekasını birleştiren uzman kadromuz.",
        team_giorgio_title: "Yönetici / Broker (Kaptan)",
        team_hakan_title: "Broker, Mühendis",
        team_ilknur_title: "Danışma / Muhasebe",
        team_kubra_title: "Broker",
        team_mehmet_title: "Broker, Mühendis",
        team_sermet_title: "Ulaşım",

        // Contact Page
        contact_title: "Bağlantı Kurun",
        contact_office_title: "İstanbul Ofisi",
        contact_form_placeholder_name: "Adınız Soyadınız",
        contact_form_placeholder_email: "E-posta Adresiniz",
        contact_form_placeholder_message: "Size nasıl yardımcı olabiliriz?",
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_reports: "Market Reports",
        nav_team: "Our Team",
        nav_contact: "Contact",

        // Hero
        hero_label: "Leading Experts Since 1983",
        hero_heading: "Navigating <br> Global Waters <br> with Precision.",
        hero_scroll: "Scroll to explore",

        // Text Reveal Section
        reveal_main: "Alpina is more than just a brokerage; <br> we are <span class='highlight'>strategic partners</span> committed <br> to the lifecycle of your fleet.",

        // Services Horizontal
        services_label: "EXPERTISE",
        services_title: "Our Expertise",
        service_nb_title: "New Building",
        service_nb_desc: "From sketch to sea. Strategic shipyard management.",
        service_sh_title: "Second Hand",
        service_sh_desc: "Asset management with global reach and local insight.",
        service_sc_title: "Scrap & Recycling",
        service_sc_desc: "Environmentally conscious decommissioning services.",
        service_ch_title: "Chartering",
        service_ch_desc: "Connecting global demand with fleet supply.",

        // Advantage Section
        adv_label: "WHY ALPINA",
        adv_title: "The Alpina Edge",
        adv_1_t: "Proven Legacy",
        adv_1_d: "Over 40 years of unwavering commitment to excellence since 1983.",
        adv_2_t: "Global Strategic Hubs",
        adv_2_d: "Strategic presence across Europe, Asia, and Middle East.",
        adv_3_t: "Expertise",
        adv_3_d: "Naval architects and marine engineers providing 360-degree support.",
        adv_4_t: "Market Intelligence",
        adv_4_d: "Sophisticated data analysis and real-time shipping reports empower your decisions.",

        // Footer
        footer_cta: "Ready to sail?",
        footer_copy: "© 2026 Alpina Shipping. Designed for Tomorrow.",

        // Team Page
        team_label: "WHO WE ARE",
        team_title: "Our Visionary Team",
        team_desc: "Expert staff combining maritime passion with engineering intelligence.",
        team_giorgio_title: "Manager / Broker (Captain)",
        team_hakan_title: "Broker, Engineer",
        team_ilknur_title: "Reception / Accounting",
        team_kubra_title: "Broker",
        team_mehmet_title: "Broker, Engineer",
        team_sermet_title: "Logistics",

        // Contact Page
        contact_title: "Get in Touch",
        contact_office_title: "Istanbul Office",
        contact_form_placeholder_name: "Your Name",
        contact_form_placeholder_email: "Email Address",
        contact_form_placeholder_message: "How can we help you?",
    }
};

function setLanguageV2(lang) {
    localStorage.setItem('alpina_lang_v2', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    const langBtn = document.getElementById('lang-text');
    if (langBtn) {
        langBtn.innerText = lang === 'tr' ? 'EN' : 'TR';
    }

    document.documentElement.lang = lang;

    // Trigger Re-animation for Hero Headings (Fixed Squashing Issue)
    if (window.reinitHeadingAnimation) {
        window.reinitHeadingAnimation();
    }
}

function toggleLanguage() {
    const current = localStorage.getItem('alpina_lang_v2') || 'tr';
    setLanguageV2(current === 'tr' ? 'en' : 'tr');
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('alpina_lang_v2') || 'tr';
    setLanguageV2(saved);
});
