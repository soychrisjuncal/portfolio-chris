import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projects = {
  personal: [
    {
      id: 1,
      title: "Convertidor de Imagenes",
      url: "https://soychrisjuncal.github.io/convertidor-imagenes/"
    },
    {
      id: 2,
      title: "Generador de turnos",
      url: "https://soychrisjuncal.github.io/generador_turnosOptica/"
    },
    {
      id: 3,
      title: "Final Copa America 2021",
      url: "https://soychrisjuncal.github.io/finalcopa/finalCopa.html"
    },
    {
      id: 4,
      title: "Mudanzas MoodAR",
      url: "https://soychrisjuncal.github.io/coderhouse-javascript/"
    }
  ],
  wordpress: [
    {
      id: 5,
      title: "Agencia UnBote",
      url: "https://www.unbote.com/"
    },
    {
      id: 6,
      title: "Thodo",
      url: "https://www.thodo.com.ar/"
    },
    {
      id: 7,
      title: "Hotel Patios San Telmo",
      url: "https://patiosdesantelmo.com.ar/"
    },
    {
      id: 8,
      title: "Penta Consulting",
      url: "https://pentaconsulting.com.ar/"
    }
  ],
  freelance: [
    {
      id: 9,
      title: "SPR Direcciones",
      url: "https://sprdirecciones.com.ar/"
    },
    {
      id: 10,
      title: "Grupo Siroc",
      url: "https://gruposiroc.com/"
    }
  ],
  inversorGlobal: [
    {
      id: 11,
      title: "Simulador Plus Nocturno",
      url: "https://landingspub.inversorglobal.com/simulador-plusnocturno-4241.php"
    },
    {
      id: 12,
      title: "Bajo la Lupa",
      url: "https://bajolalupa.co/"
    },
    {
      id: 13,
      title: "Inversor Global",
      url: "https://inversorglobal.com/?l=ar"
    }
  ]
};

const captureScreenshots = async () => {
  const projectsDir = path.join(__dirname, '..', 'public', 'projects');
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
    console.log('✅ Carpeta public/projects creada');
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  
  const allProjects = Object.values(projects).flat();
  let successCount = 0;
  let errorCount = 0;
  
  console.log(`\n🚀 Iniciando captura de ${allProjects.length} proyectos...\n`);
  
  for (const project of allProjects) {
    try {
      console.log(`📸 Capturando: ${project.title}`);
      
      await page.goto(project.url, { 
        waitUntil: 'networkidle2', 
        timeout: 15000 
      });
      
      // Esperar 2 segundos para que cargue bien
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const filename = `${project.id}-${project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.jpg`;
      const filepath = path.join(projectsDir, filename);
      
      await page.screenshot({ 
        path: filepath, 
        type: 'jpeg', 
        quality: 85,
        fullPage: false
      });
      
      console.log(`✅ Guardado: projects/${filename}\n`);
      successCount++;
      
    } catch (error) {
      console.log(`❌ Error en ${project.title}: ${error.message}\n`);
      errorCount++;
    }
  }
  
  await browser.close();
  
  console.log('\n═══════════════════════════════════');
  console.log('🎉 ¡Proceso completado!');
  console.log(`✅ Exitosos: ${successCount}`);
  console.log(`❌ Errores: ${errorCount}`);
  console.log('═══════════════════════════════════\n');
};

captureScreenshots().catch(console.error);