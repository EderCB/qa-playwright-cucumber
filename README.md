# 🧪 QA Automation Framework — Playwright + Cucumber

Framework de automatización E2E para **Sauce Demo** usando **Playwright + Cucumber (BDD)**, diseñado con **Page Object Model (POM)**, evidencias en fallos y reporte HTML.

---

## 🎯 Objetivo

Construir una suite de pruebas automatizadas para **https://www.saucedemo.com/** que cubra flujos críticos de usuario (login, carrito y checkout), aplicando buenas prácticas de diseño y mantenibilidad.

---

## ✨ Highlights

* ⚡ **E2E confiable** con Playwright (rápido y estable)
* 🧩 **BDD con Cucumber** (Gherkin claro y legible)
* 🏗️ **Page Object Model (POM)** para escalabilidad
* 📸 **Screenshots automáticos en fallos**
* 📊 **Reporte HTML** con evidencias

---

## 🧱 Estructura del proyecto

```
src/test/
  features/        # Escenarios Gherkin
  steps/           # Step Definitions
  pages/           # Page Objects (POM)
  hooks/           # Hooks (Before/After)
  utils/           # Reporte y utilidades

reports/
  screenshots/     # Evidencias en fallos
  cucumber-report.json
  cucumber-report.html
```

---

## 🚀 Quick Start

1. Clonar el repositorio:

```
git clone https://github.com/EderCB/qa-playwright-cucumber.git
cd qa-playwright-cucumber
```

2. Instalar dependencias:

```
npm install
```

3. Ejecutar tests:

```
npm run test
```

4. Generar reporte HTML:

```
npm run report
```

5. Abrir el reporte:

```
reports/cucumber-report.html
```

---
## 🧪 Scripts

- `npm run test` → Ejecuta los tests
- `npm run report` → Genera el reporte HTML
---

## 🧠 Estrategia de Automatización

### 🔹 Enfoque

* Pruebas **E2E orientadas a flujos de negocio**
* Cobertura de escenarios críticos:

  * Login
  * Agregar productos al carrito
  * Checkout
  * Validación del resumen

### 🔹 Patrón de diseño

**Page Object Model (POM)**:

* encapsula selectores y acciones por página
* reduce duplicación
* mejora mantenibilidad

### 🔹 BDD con Cucumber

* escenarios en Gherkin para legibilidad
* separación clara entre negocio (features) y automatización (steps)

### 🔹 Manejo de estado

* uso del contexto de Cucumber (`this`) para compartir:

  * `page`, `context`
  * `selectedProduct`

### 🔹 Hooks

* `BeforeAll`: inicialización
* `Before`: creación de contexto/página
* `After`: screenshots en fallos
* `AfterAll`: cierre de recursos

---

## 👤 Autor

**Eder Carrillo**
QA Automation Engineer