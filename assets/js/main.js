/* ============================================================
   KSS — Clã de DayZ
   ============================================================ */

/* ============================================================
   ⚠️ CONFIGURAÇÃO PRINCIPAL — EDITE AQUI ⚠️

   Troque o link abaixo pelo convite REAL do Discord do clã.
   Ex.: const DISCORD_INVITE = "https://discord.gg/abc123xyz";

   Todos os botões "Discord" do site são atualizados
   automaticamente a partir desta única linha.
   ============================================================ */
const DISCORD_INVITE = "https://discord.gg/SEU-CODIGO-AQUI";
/* ============================================================ */


// Aplica o link do Discord em todos os elementos marcados
document.querySelectorAll("[data-discord-link]").forEach((el) => {
  el.setAttribute("href", DISCORD_INVITE);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener noreferrer");
});


// ---------- Menu mobile ----------
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  // Fecha o menu ao clicar em qualquer link
  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// ---------- Cabeçalho com fundo ao rolar ----------
const header = document.getElementById("header");
const handleHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
};
handleHeader();
window.addEventListener("scroll", handleHeader, { passive: true });


// ---------- Animações de entrada (reveal) ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));


// ---------- Destaque do link ativo na navegação ----------
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => activeObserver.observe(section));


// ---------- Ano atual no rodapé ----------
const ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();
