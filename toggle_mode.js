const fs = require('fs');
const path = require('path');

/**
 * Script de Alternancia PHP/HTML - Seguridad Vial 2026
 * Optimizado para estructura distribuida
 */

const mode = process.argv[2]; // 'html' or 'php'

if (!mode || (mode !== 'html' && mode !== 'php')) {
    console.error('Uso: node toggle_mode.js [html|php]');
    process.exit(1);
}

// Configuración de directorios a procesar
const targetDirs = [
    '.',
    'module/leccion',
    'module/evaluacion'
];

// Función para buscar archivos .html o .php recursivamente en los directorios objetivo
function findFiles(dir, allFiles = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Solo entrar en subdirectorios si son relevantes (ej: slider*)
            if (file.startsWith('slider') || dir === '.') {
                findFiles(filePath, allFiles);
            }
        } else {
            if (file.endsWith('.html') || file.endsWith('.php')) {
                // Evitar procesar este mismo script o archivos de plugins
                if (file !== 'toggle_mode.js' && !filePath.includes('plugins') && !filePath.includes('assets')) {
                    allFiles.push(filePath);
                }
            }
        }
    });

    return allFiles;
}

console.log(`Iniciando conversión a modo: ${mode.toUpperCase()}...\n`);

const filesToProcess = [];
targetDirs.forEach(dir => {
    const absoluteDir = path.join(__dirname, dir);
    if (fs.existsSync(absoluteDir)) {
        findFiles(absoluteDir, filesToProcess);
    }
});

// Eliminar duplicados si los hay
const uniqueFiles = [...new Set(filesToProcess)];

uniqueFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    const dirName = path.dirname(filePath);
    const ext = path.extname(filePath);
    const baseName = path.basename(filePath, ext);

    if (mode === 'html') {
        // --- CONVERTIR A HTML ---

        // 1. Bloque PHP inicial (comentar)
        content = content.replace(/^(<\?php[\s\S]*?\?>)/g, '<!-- $1 -->');

        // 2. Navegación en href (index.php?course_code=... -> index.html)
        content = content.replace(/href="(.*?)\.(?:php|html)\?course_code=<\?=\s*\$course_code;\s*\?>"/g, 'href="$1.html"');
        content = content.replace(/href='(.*?)\.(?:php|html)\?course_code=<\?=\s*\$course_code;\s*\?>'/g, "href='$1.html'");
        
        // 3. Navegación window.location.href en JS
        content = content.replace(/window\.location\.href\s*=\s*"(.*?)\.(?:php|html)\?course_code=<\?=\s*\$course_code;\s*\?>";/g, 'window.location.href = "$1.html";');
        content = content.replace(/window\.location\.href\s*=\s*'(.*?)\.(?:php|html)\?course_code=<\?=\s*\$course_code;\s*\?>';/g, "window.location.href = '$1.html';");

        // 3.1 Limpiar typos como login..html o logout.html que deberían ser estáticos en modo HTML
        content = content.replace(/href="(.*?)\.(?:php|html)"/g, (match, p1) => {
            if (p1.endsWith('.')) p1 = p1.slice(0, -1); // Corregir login..html
            return `href="${p1}.html"`;
        });

        // 4. Variables dinámicas en inputs (value="<?= $var ?>")
        // <input id='course_code' value="<?= $course_code;?>" hidden> -> <input id='course_code' value="0" data-php="<?= $course_code;?>" hidden>
        content = content.replace(/(<input.*?value=)"(<\?=\s*.*?\?>)"(.*?>)/g, '$1"0" data-php="$2"$3');

        // 5. Textos dinámicos (Hola <?= $fullname ?> -> Hola Nombre Usuario)
        // Busca patrones como: <!-- <h1>Hola! <b><?= $fullname; ?></b></h1> --> \n <h1>Hola! <b>Nombre user</b></h1>
        // Y los mantiene/asegura que el HTML esté activo
        content = content.replace(/<!--\s*(<.*?>\s*<\?=\s*.*?\?>\s*<\/.*?>)\s*-->\s*(<.*?>.*?<\/.*?>)/g, '<!-- $1 -->\n$2');
        
        // Caso específico de quiz.html (Progreso)
        content = content.replace(/<!--\s*(<strong><\?=\s*.*?\?>%<\/span><\/strong>)\s*-->/g, '<!-- $1 -->');

    } else {
        // --- CONVERTIR A PHP ---

        // 1. Bloque PHP inicial (descomentar)
        content = content.replace(/^<!--\s*(<\?php[\s\S]*?\?>)\s*-->/g, '$1');

        // 2. Navegación en href (index.html -> index.php?course_code=<?= $course_code; ?>)
        // Solo si no es un link externo y no es login/logout
        content = content.replace(/href="(?!http|https|#|.*?login|.*?logout)(.*?)\.html"/g, 'href="$1.php?course_code=<?= $course_code; ?>"');
        content = content.replace(/href='(?!http|https|#|.*?login|.*?logout)(.*?)\.html'/g, "href='$1.php?course_code=<?= $course_code; ?>'");

        // 3. Navegación window.location.href en JS
        content = content.replace(/window\.location\.href\s*=\s*"(?!.*?login|.*?logout)(.*?)\.html";/g, 'window.location.href = "$1.php?course_code=<?= $course_code; ?>";');
        content = content.replace(/window\.location\.href\s*=\s*'(?!.*?login|.*?logout)(.*?)\.html';/g, "window.location.href = '$1.php?course_code=<?= $course_code; ?>';");

        // 3.1 Restaurar login.php y logout.php (sin parámetros de curso)
        content = content.replace(/href="(.*?\/(?:login|logout))\.html"/g, 'href="$1.php"');
        content = content.replace(/href='(.*?\/(?:login|logout))\.html'/g, "href='$1.php'");
        content = content.replace(/window\.location\.href\s*=\s*"(.*?\/(?:login|logout))\.html";/g, 'window.location.href = "$1.php";');
        content = content.replace(/window\.location\.href\s*=\s*'(.*?\/(?:login|logout))\.html';/g, "window.location.href = '$1.php';");

        // 4. Restaurar variables dinámicas en inputs
        content = content.replace(/(<input.*?value=)"0" data-php="(<\?=\s*.*?\?>)"(.*?>)/g, '$1"$2"$3');

        // 5. Restaurar textos dinámicos (PHP activo, HTML estático comentado)
        // Busca: <!-- (<.*?>\s*<\?=\s*.*?\?>\s*<\/.*?>) --> \n (<.*?>.*?<\/.*?>)
        // Convierte a: $1 \n <!-- $2 -->
        content = content.replace(/<!--\s*(<.*?>\s*<\?=\s*.*?\?>\s*<\/.*?>)\s*-->\s*(<.*?>.*?<\/.*?>)/g, '$1\n<!-- $2 -->');
    }

    const targetPath = path.join(dirName, baseName + '.' + mode);

    // Escribir el nuevo contenido
    fs.writeFileSync(filePath, content);

    // Renombrar si la extensión cambió
    if (filePath !== targetPath) {
        if (fs.existsSync(targetPath)) {
            fs.unlinkSync(targetPath); // Eliminar el destino si ya existe para evitar errores de rename
        }
        fs.renameSync(filePath, targetPath);
        console.log(`[OK] ${path.relative(__dirname, filePath)} -> ${path.basename(targetPath)}`);
    } else {
        console.log(`[ACTUALIZADO] ${path.relative(__dirname, filePath)}`);
    }
});

console.log(`\nProceso completado. Todos los archivos están ahora en modo ${mode.toUpperCase()}.`);
