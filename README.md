# 🎖️ KSS — Site do Clã de DayZ

Site estático de **recrutamento e apresentação** do clã **KSS** (DayZ — PVP & PVE).
Feito em HTML + CSS + JavaScript puro, sem dependências: é só subir no GitHub e ativar o GitHub Pages.

---

## 📁 Estrutura

```
kss-site/
├── index.html              ← Todo o conteúdo do site
├── assets/
│   ├── css/
│   │   └── style.css       ← Visual (tema militar/apocalíptico)
│   ├── js/
│   │   └── main.js         ← ⚠️ O convite do Discord fica aqui!
│   └── img/
│       ├── logo.jpeg       ← Patch oficial do clã
│       ├── hero-bg.jpg     ← Fundo da página inicial
│       └── gallery-*.jpg   ← Imagens da galeria
├── .gitignore
└── README.md
```

---

## ⚙️ Configuração essencial

### 1. Definir o convite do Discord (obrigatório!)

Abra **`assets/js/main.js`** e troque a primeira constante:

```js
const DISCORD_INVITE = "https://discord.gg/SEU-CODIGO-AQUI";
```

pelo convite real do servidor, ex.: `"https://discord.gg/kssbrasil"`.
Todos os botões de Discord do site atualizam automaticamente. ✅

> 💡 Dica: crie o convite como **"Nunca expira"** nas configurações do canal.

### 2. Editar textos

No `index.html`, procure pelos comentários **`<!-- ============ EDITAR: ... ============ -->`**.
Eles marcam os trechos de conteúdo editável:

- História do clã (seção Sobre)
- Requisitos e etapas do recrutamento
- Regras do clã
- Legendas da galeria

### 3. Galeria

Substitua/adicione imagens em `assets/img/` e atualize os `<img src="...">` na seção `#galeria`
do `index.html`. Prints reais do clã ficam muito melhores que os placeholders!

---

## 🚀 Publicando no GitHub (GitHub Pages)

### Passo 1 — Subir o código

```bash
cd kss-site

git init
git add .
git commit -m "Site oficial do clã KSS"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

### Passo 2 — Ativar o GitHub Pages

1. No repositório do GitHub, vá em **Settings → Pages**
2. Em **Source**, selecione **Deploy from a branch**
3. Em **Branch**, escolha **main** e a pasta **/ (root)** → **Save**
4. Aguarde 1-2 minutos. O site ficará no ar em:

```
https://SEU-USUARIO.github.io/NOME-DO-REPO/
```

> Toda vez que você der `git push` com alterações, o site atualiza sozinho.

---

## 🎨 Personalização rápida

| Quero mudar... | Onde |
|---|---|
| Cores do tema | Variáveis `:root` no topo de `assets/css/style.css` |
| Imagem de fundo do início | `assets/img/hero-bg.jpg` (substitua o arquivo) |
| Logo/patch | `assets/img/logo.jpeg` (substitua o arquivo) |
| Seções | `index.html` (copie um bloco `<section>` existente) |

---

## ✌️ Créditos

Feito por sobreviventes, para sobreviventes.
**DayZ** é marca registrada da Bohemia Interactive — este é um site de fãs, sem afiliação oficial.

**KSS — Sobreviver sozinho é possível. Sobreviver junto é KSS.**
