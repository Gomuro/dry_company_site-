import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

const client = createClient({
  projectId: "7pbe7nrp",
  dataset: "production",
  token: "skrqcrXOqcGsMj40WpQjKpklcag141utdUjEoBky47OLbVGSM22bMlnFHkDNCcbLrQs9mXV6R7bT2sk34y1zaZ22Ec6D0azSgiLXWnl4XCrEThGSBPjcrgVbEh0wkjoL4NpgeEBis2J9czBbAcWSCLfpSqCTWNorcnBrkBTNJsULVNEHUXvp",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function uploadImage(filePath, filename) {
  console.log(`Uploading ${filename}...`);
  const buffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload("image", buffer, { filename });
  console.log(`Uploaded ${filename} -> ${asset._id}`);
  return asset._id;
}

async function run() {
  try {
    const siteImgDir = path.resolve("public/images/site");

    const heroAssetId = await uploadImage(path.join(siteImgDir, "hero.jpg"), "hero.jpg");
    const emergencyAssetId = await uploadImage(path.join(siteImgDir, "service-emergency.jpg"), "service-emergency.jpg");
    const dryingAssetId = await uploadImage(path.join(siteImgDir, "service-drying.jpg"), "service-drying.jpg");
    const trust1Id = await uploadImage(path.join(siteImgDir, "trust-01.jpg"), "trust-01.jpg");
    const trust2Id = await uploadImage(path.join(siteImgDir, "trust-02.jpg"), "trust-02.jpg");
    const trust3Id = await uploadImage(path.join(siteImgDir, "trust-03.jpg"), "trust-03.jpg");
    const trust4Id = await uploadImage(path.join(siteImgDir, "trust-04.jpg"), "trust-04.jpg");
    const trust5Id = await uploadImage(path.join(siteImgDir, "trust-05.jpg"), "trust-05.jpg");
    const trust6Id = await uploadImage(path.join(siteImgDir, "trust-06.jpg"), "trust-06.jpg");

    const doc = {
      _id: "landingPage",
      _type: "landingPage",
      title: "Main Landing Page (Elena Copy)",
      hero: {
        kicker: {
          es: "Andalucía · Costa del Sol",
          en: "Andalusia · Costa del Sol",
        },
        title: {
          es: "Deshumidificación profesional de inmuebles",
          en: "Professional space dehumidification",
        },
        subtitle: {
          es: "Tras inundaciones, filtraciones o fugas ocultas, es vital eliminar por completo la humedad de las estructuras. Realizamos deshumidificación profesional con equipos especializados usados en recuperación de emergencias en toda Europa. Trabajamos en toda Andalucía, donde el clima cálido acelera la aparición de moho y el deterioro de materiales.",
          en: "After flooding, leaks, or hidden water seepage, it is essential to fully extract moisture from structural elements. We provide professional dehumidification using specialized emergency recovery equipment used across Europe. We operate throughout Andalusia, where the warm climate increases the risk of rapid mould growth and material decay.",
        },
        primaryCta: {
          es: "Pedir asesoramiento",
          en: "Request guidance",
        },
        secondaryCta: {
          es: "Ver soluciones",
          en: "See solutions",
        },
        badges: [
          { _key: "b1", es: "24–48 h atención", en: "24–48 h response" },
          { _key: "b2", es: "Sin compromiso", en: "No obligation" },
          { _key: "b3", es: "Presupuesto claro", en: "Clear pricing" },
        ],
        heroImage: {
          _type: "image",
          asset: { _type: "reference", _ref: heroAssetId },
          alt: "Deshumidificación profesional de inmuebles en Andalucía",
        },
      },
      servicesSection: {
        heading: {
          es: "Servicios y tecnología de secado",
          en: "Services & dehumidification technology",
        },
        intro: {
          es: "Combinamos la extracción urgente de agua con el secado técnico controlado de estructuras y paramentos.",
          en: "We combine emergency water extraction with controlled technical drying of building structures.",
        },
        emergencyCardTitle: {
          es: "Intervención urgente",
          en: "Emergency response",
        },
        emergencyCardBody: {
          es: "Extracción y contención inmediata para cortar la humedad y proteger carpintería, aislamientos y revestimientos.",
          en: "Immediate extraction and containment to cut moisture pathways and protect joinery, insulation, and finishes.",
        },
        emergencyCardImage: {
          _type: "image",
          asset: { _type: "reference", _ref: emergencyAssetId },
        },
        dryingCardTitle: {
          es: "Deshumidificación profesional",
          en: "Professional dehumidification",
        },
        dryingCardBody: {
          es: "Maquinaria de alta capacidad, flujo de aire estratégico y registro continuo de niveles de humedad.",
          en: "High-capacity equipment, strategic airflow management, and continuous moisture logging.",
        },
        dryingCardImage: {
          _type: "image",
          asset: { _type: "reference", _ref: dryingAssetId },
        },
      },
      whenNeededSection: {
        heading: {
          es: "Cuándo se requiere deshumidificación",
          en: "When dehumidification is needed",
        },
        intro: {
          es: "Casos principales en los que es imprescindible eliminar la humedad retenida en paramentos y suelos:",
          en: "Key situations where moisture must be urgently extracted from structural elements:",
        },
        items: [
          {
            _key: "item1",
            title: { es: "Tras inundación o rotura de tubería", en: "After flooding or burst pipes" },
            description: { es: "Secado de emergencia de paramentos, suelos y recrecidos.", en: "Emergency drying of floors, walls, and subfloors." },
          },
          {
            _key: "item2",
            title: { es: "Tras una fuga de agua oculta", en: "After hidden water leaks" },
            description: { es: "Extracción profunda de humedad en capas internas y aislamientos.", en: "Deep moisture extraction from internal layers and insulation." },
          },
          {
            _key: "item3",
            title: { es: "Tras extinción de incendios", en: "After firefighting water damage" },
            description: { es: "Secado completo tras anegamiento por agua de extinción.", en: "Thorough drying after extensive water suppression." },
          },
          {
            _key: "item4",
            title: { es: "Tras obras con alta humedad residual", en: "After renovations with high moisture" },
            description: { es: "Aceleración del secado en yesos, morteros y soleras.", en: "Accelerated drying for plasters, screeds, and mortars." },
          },
          {
            _key: "item5",
            title: { es: "Ante humedad constante en paredes o suelos", en: "Constant dampness in walls or floors" },
            description: { es: "Eliminación de la humedad estructural y estabilización.", en: "Elimination of structural dampness and stabilization." },
          },
          {
            _key: "item6",
            title: { es: "Si aparece olor a humedad o moho", en: "Appearance of damp odours or mould" },
            description: { es: "Prevención inmediata de la proliferación de esporas de moho.", en: "Immediate containment of mould spore proliferation." },
          },
        ],
      },
      whyCriticalSection: {
        heading: {
          es: "Por qué la deshumidificación es crítica",
          en: "Why dehumidification is critical",
        },
        intro: {
          es: "El agua atrapada en paredes, suelos o aislamientos no desaparece sola. En el clima del sur de España es crítico:",
          en: "Water trapped inside walls, floors, or insulation does not vanish on its own. In southern Spain, this is critical:",
        },
        points: [
          { _key: "pt1", es: "El moho puede comenzar a proliferar en solo 24–48 horas", en: "Mould can begin developing within 24–48 hours" },
          { _key: "pt2", es: "Se deterioran el yeso, la madera y el cartón-yeso", en: "Plaster, timber, and drywall deteriorate rapidly" },
          { _key: "pt3", es: "Se dañan los sistemas eléctricos y el aislamiento", en: "Electrical systems and insulation suffer damage" },
          { _key: "pt4", es: "Aparecen olores persistentes a humedad", en: "Persistent damp odours develop" },
          { _key: "pt5", es: "Aumenta el riesgo de reformas de alto coste", en: "Increased risk of costly major renovations" },
        ],
        warningNote: {
          es: "Sin un secado profesional, la humedad queda retenida dentro de los paramentos y destruye el edificio desde el interior.",
          en: "Without professional dehumidification, moisture stays locked inside structures and destroys the building from within.",
        },
      },
      howWeWorkSection: {
        heading: {
          es: "Cómo trabajamos",
          en: "How we work",
        },
        intro: {
          es: "Empleamos deshumidificadores profesionales, ventiladores y sistemas de control que permiten:",
          en: "We deploy industrial dehumidifiers, air movers, and moisture monitoring systems to:",
        },
        features: [
          { _key: "f1", es: "Extraer la humedad del aire y de los materiales", en: "Extract moisture from ambient air and building materials" },
          { _key: "f2", es: "Acelerar el secado natural varias veces", en: "Accelerate natural drying times by several factors" },
          { _key: "f3", es: "Controlar el nivel de humedad en cada fase del proceso", en: "Monitor moisture content at every phase of the process" },
          { _key: "f4", es: "Prevenir eficazmente la formación de moho", en: "Effectively prevent mould and fungal formation" },
        ],
        equipmentNote: {
          es: "La maquinaria se selecciona a medida según la superficie, nivel de anegamiento y tipo de construcción.",
          en: "Equipment is tailored specifically to affected area size, flood severity, and substrate construction.",
        },
      },
      whyBeneficialSection: {
        heading: {
          es: "Por qué es beneficioso",
          en: "Why it is beneficial",
        },
        benefits: [
          { _key: "ben1", es: "Reduce el riesgo de reparaciones costosas en el futuro", en: "Reduces the risk of expensive future repairs" },
          { _key: "ben2", es: "Protege las estructuras y elementos del edificio", en: "Protects building structural elements and materials" },
          { _key: "ben3", es: "Previene la aparición de moho y bacterias", en: "Prevents mould, fungus, and bacterial growth" },
          { _key: "ben4", es: "Reduce el tiempo de rehabilitación del inmueble", en: "Shortens overall property recovery timeline" },
          { _key: "ben5", es: "Permite controlar con precisión el proceso de secado", en: "Provides precise, documentable control of drying" },
        ],
      },
      resultSection: {
        heading: {
          es: "Resultado final",
          en: "Final result",
        },
        text: {
          es: "El inmueble queda totalmente secado hasta un nivel de humedad seguro, sin humedad oculta en paredes ni suelos, listo para reformas o uso inmediato.",
          en: "The property is thoroughly dried to safe moisture levels, free of hidden dampness in walls or floors, ready for renovation or immediate use.",
        },
      },
      teamSection: {
        oleksandrPhoto: {
          _type: "image",
          asset: { _type: "reference", _ref: trust6Id },
          alt: "Oleksandr — Técnico con detector acústico Sewerin Aquaphon",
          caption: {
            es: "Oleksandr — Técnico especialista en detección y secado",
            en: "Oleksandr — Dehumidification & leak survey specialist",
          },
        },
        gallery: [
          { _type: "image", _key: "img1", asset: { _type: "reference", _ref: trust1Id }, alt: "Cámara Laserliner", title: { es: "Inspección de tuberías", en: "Pipe inspection" } },
          { _type: "image", _key: "img2", asset: { _type: "reference", _ref: trust2Id }, alt: "Tuberías en cavidad", title: { es: "Verificación de cavidades", en: "Cavity moisture survey" } },
          { _type: "image", _key: "img3", asset: { _type: "reference", _ref: trust3Id }, alt: "Pared con humedad", title: { es: "Evaluación de daños", en: "Damage assessment" } },
          { _type: "image", _key: "img4", asset: { _type: "reference", _ref: trust4Id }, alt: "Fontanería en obra", title: { es: "Localización de fugas", en: "Leak localization" } },
          { _type: "image", _key: "img5", asset: { _type: "reference", _ref: trust5Id }, alt: "Cámara FLIR", title: { es: "Termografía de humedad", en: "FLIR thermal survey" } },
          { _type: "image", _key: "img6", asset: { _type: "reference", _ref: trust6Id }, alt: "Oleksandr en escalera", title: { es: "Oleksandr en intervención", en: "Oleksandr on site" } },
        ],
      },
      contactSection: {
        heading: {
          es: "Cuéntanos tu caso",
          en: "Tell us what happened",
        },
        intro: {
          es: "Deja tus datos y te guiaremos sobre el siguiente paso sin compromiso.",
          en: "Leave your details and we will guide you on the next steps with no obligation.",
        },
        phone: "+34 600 111 222",
        whatsapp: "34600111222",
        email: "info@homesavior.es",
      },
    };

    console.log("Deleting old document versions if present...");
    try { await client.delete("drafts.landingPage"); } catch (e) {}
    try { await client.delete("landingPage"); } catch (e) {}

    console.log("Creating fresh bilingual published document with unique keys...");
    await client.createOrReplace(doc);
    console.log("Fresh document with unique keys published successfully!");
  } catch (err) {
    console.error("Error seeding Sanity bilingual document:", err);
  }
}

run();
