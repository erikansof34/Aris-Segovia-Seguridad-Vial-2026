# Aris - Seguridad Vial 2026

Este proyecto contiene una herramienta de automatización para alternar entre entornos de desarrollo **PHP** y entornos estáticos **HTML**.

## Script de Alternancia (`toggle_mode.js`)

El script [toggle_mode.js](file:///c%3A/Users/braya/Desktop/Aris-Segovia-Seguridad-Vial-2026/toggle_mode.js) permite convertir dinámicamente los archivos del proyecto entre los formatos `.php` y `.html`, ajustando las referencias internas, bloques de código y navegación de forma automática.

### Requisitos

- **Node.js** instalado en el sistema.

### Cómo correr el script

Para cambiar el modo del proyecto, abre una terminal en la raíz del proyecto y ejecuta uno de los siguientes comandos:

#### 1. Cambiar a modo HTML (Estático)
Ideal para previsualizaciones rápidas o despliegues en servidores que no soportan PHP.
```bash
node toggle_mode.js html
```

#### 2. Cambiar a modo PHP (Dinámico)
Ideal para desarrollo con servidor local (XAMPP, Laragon, etc.) y funcionalidades dinámicas.
```bash
node toggle_mode.js php
```

---

### ¿Qué hace exactamente el script?

Cuando cambias de modo, el script procesa los archivos en la raíz y en las carpetas `module/leccion` y `module/evaluacion`, realizando lo siguiente:

- **Renombrado de archivos:** Cambia las extensiones de `.php` a `.html` (o viceversa).
- **Gestión de PHP:** 
    - En modo HTML, comenta los bloques `<?php ... ?>` iniciales.
    - En modo PHP, los vuelve a habilitar.
- **Navegación:**
    - Actualiza los `href` en los enlaces y `window.location.href` en JavaScript.
    - En PHP añade automáticamente los parámetros de sesión (ej: `?course_code=<?= $course_code; ?>`).
- **Inputs Dinámicos:**
    - En HTML, reemplaza los valores PHP de los inputs por "0" y guarda el código original en un atributo `data-php`.
    - En PHP, restaura el código original desde `data-php`.
- **Textos Dinámicos:** Alterna entre mostrar el contenido procesado por PHP o un placeholder estático para la versión HTML.

### Directorios procesados
- Raíz del proyecto (`.`)
- `module/leccion/`
- `module/evaluacion/`
- Subdirectorios que comiencen con `slider` dentro de los anteriores.

> **Nota:** El script ignora automáticamente las carpetas `plugins`, `assets` y el propio archivo `toggle_mode.js`.
