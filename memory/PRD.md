# PRD: WTF Agency x Barugel - Propuesta de Transformación Digital

## Fecha de Creación: Enero 2026

---

## 1. Problema y Contexto

**Cliente:** Barugel - Arquitectura y Tendencias
- **Industria:** Materiales de construcción, azulejos, grifería, iluminación
- **Heritage:** 90 años en el mercado argentino
- **Posición:** Líder tradicional buscando transformación digital
- **Instagram:** 97,000 seguidores (base sólida pero suboptimizada)
- **Website:** Desactualizado, sin e-commerce, pobre experiencia móvil

**Agencia:** WTF Agency (Brief Destroyers)

---

## 2. Requisitos del Usuario

### Funcionales
- [x] Landing page de propuesta profesional
- [x] Sección Hero con logos de ambas empresas
- [x] Diagnóstico de situación actual con indicadores interactivos
- [x] Panorama competitivo con comparativa visual
- [x] Timeline de solución en 3 fases
- [x] Estructura de inversión con pricing transparente
- [x] Dashboard de resultados proyectados con métricas animadas
- [x] Footer institucional

### No Funcionales
- [x] Estética italiana moderna y premium
- [x] Máxima interactividad (scroll animations, hover effects)
- [x] Todo el contenido en español
- [x] Sin formularios de contacto
- [x] Sin botón de WhatsApp
- [x] Sin descarga PDF
- [x] Mobile responsive

---

## 3. Arquitectura Técnica

### Stack
- **Frontend:** React 18 + Tailwind CSS + Framer Motion
- **Backend:** FastAPI (minimal - solo health check)
- **Hosting:** Kubernetes container

### Componentes Principales
1. `Navigation` - Navegación fija con glass effect on scroll
2. `HeroSection` - Hero parallax con logos y CTA
3. `DiagnosisSection` - Cards interactivas de diagnóstico
4. `CompetitiveLandscape` - Comparativa de competidores
5. `SolutionSection` - Timeline vertical con 3 fases
6. `InvestmentSection` - Pricing card + comparativas
7. `ResultsSection` - Dashboard con counters animados
8. `Footer` - Cierre institucional

### Design System
- **Tipografía:** Playfair Display (headings), Manrope (body), JetBrains Mono (labels)
- **Colores:** Primary #1A1A1A, Secondary #E65100, Background #FFFFFF
- **Spacing:** Generous (p-8 to p-24)
- **Border Radius:** Sharp (0px) para estética arquitectónica

---

## 4. Lo Implementado

### Enero 2026
- [x] Estructura completa de la landing page
- [x] Hero con badge de 90 años + 30 días
- [x] Sección diagnóstico con 6 cards + 3 métricas
- [x] Panorama competitivo con 4 competidores + 3 gaps de mercado
- [x] Timeline de solución con 3 fases completas
- [x] Estructura de inversión ($12,500/mes)
- [x] Dashboard de resultados con contadores animados
- [x] Footer institucional
- [x] Animaciones Framer Motion (scroll reveal, parallax, counters)
- [x] Responsive mobile design
- [x] Logo WTF Agency integrado

---

## 5. Backlog / Mejoras Futuras

### P0 (Completado)
- [x] MVP Landing page completa

### P1 (Próximas)
- [ ] Agregar logo oficial de Barugel si el cliente lo proporciona
- [ ] Animaciones de entrada más elaboradas
- [ ] Sección de casos de éxito de WTF Agency

### P2 (Futuras)
- [ ] Versión PDF exportable para presentaciones offline
- [ ] Multi-idioma (español/inglés)
- [ ] Analytics tracking de scroll depth

---

## 6. URLs y Recursos

- **Preview:** https://barugel-transform.preview.emergentagent.com
- **Logo WTF:** https://customer-assets.emergentagent.com/job_barugel-transform/artifacts/uie5u4fs_logo-wtf.png
- **Logo WTF Negro:** https://customer-assets.emergentagent.com/job_barugel-transform/artifacts/wsbw9ziw_logo-wtf-negro.png

---

## 7. Notas de Testing

- Test report: `/app/test_reports/iteration_1.json`
- Frontend: 100% passed
- Todas las secciones verificadas
- Responsive mobile verificado
