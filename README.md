# Prospect WTF Agency

Sistema de presupuestos web para clientes WTF Agency.

## 🏗️ Estructura

```
prospect-wtf-agency/
├── shared/          # Assets compartidos
│   ├── wtf-branding.css
│   └── logo.png
├── cliente-nombre/  # Cada cliente = carpeta separada
│   ├── index.html
│   ├── style.css
│   └── assets/
└── railway.json     # Config deployment
```

## 🌐 URLs

- Base: prospect.wtf-agency.com
- Cliente: prospect.wtf-agency.com/cliente-nombre/

## 🚀 Workflow

1. **Emergent.sh** → Generar sitio cliente
2. **Download** → Extraer a carpeta `/cliente/`
3. **Customize** → Aplicar branding WTF
4. **Deploy** → Git push → Railway auto-deploy
5. **Share** → Enviar link al cliente

## 📝 Template Emergent.sh

```
"Create a clean proposal presentation website for [CLIENT NAME]. 
Include:
- Header with WTF Agency branding
- Project overview section  
- Pricing table (3 tiers)
- Timeline/deliverables list
- Contact section
- Modern, professional design
- No forms or interactions needed
- Export as static HTML/CSS"
```