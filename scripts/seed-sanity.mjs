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
      title: "Main Landing Page (Bilingual)",
      hero: {
        kicker: {
          es: "Málaga · Costa del Sol",
          en: "Málaga · Costa del Sol",
        },
        title: {
          es: "Recupera tu espacio con equipos de deshumidificación industriales",
          en: "Get your space back with industrial dehumidification",
        },
        subtitle: {
          es: "Respuesta rápida en Málaga capital y Costa del Sol. Monitorización de humedad, extracción del agua y secado controlado para evitar moho y daños estructurales.",
          en: "Fast response in Málaga city and Costa del Sol. Moisture monitoring, water removal, and controlled drying to prevent mould and structural damage.",
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
          { es: "24–48 h en zona", en: "24–48 h in-area" },
          { es: "Sin compromiso", en: "No obligation" },
          { es: "Presupuesto claro", en: "Clear pricing" },
        ],
        heroImage: {
          _type: "image",
          asset: { _type: "reference", _ref: heroAssetId },
          alt: "Técnico usando equipo acústico Sewerin Aquaphon para localizar fugas en obra",
        },
      },
      servicesSection: {
        heading: {
          es: "La solución: respuesta profesional y medible",
          en: "The solution: professional, measurable drying",
        },
        intro: {
          es: "Trabajamos con dos líneas de servicio complementarias: contener el daño al inicio y secar con control técnico hasta estabilizar la vivienda o el local.",
          en: "We combine two complementary tracks: stop damage early, then dry with technical control until readings stabilise.",
        },
        emergencyCardTitle: {
          es: "Intervención urgente",
          en: "Emergency response",
        },
        emergencyCardBody: {
          es: "Extracción y contención para cortar la humedad y proteger carpintería, aislamientos y zonas sensibles.",
          en: "Extraction and containment to cut moisture pathways and protect joinery, insulation, and finishes.",
        },
        emergencyCardImage: {
          _type: "image",
          asset: { _type: "reference", _ref: emergencyAssetId },
        },
        dryingCardTitle: {
          es: "Deshumidificación industrial",
          en: "Industrial dehumidification",
        },
        dryingCardBody: {
          es: "Equipos de alto rendimiento, distribución del aire y monitorización para un secado documentable.",
          en: "High‑performance equipment, airflow planning, and moisture logging for accountable drying.",
        },
        dryingCardImage: {
          _type: "image",
          asset: { _type: "reference", _ref: dryingAssetId },
        },
      },
      whenNeededSection: {
        heading: {
          es: "El problema no es solo el agua visible",
          en: "The problem is not only what you can see",
        },
        intro: {
          es: "Tras una filtración, rotura de tubería o lluvia intensa, la humedad se acumula en paramentos, suelos y huecos técnicos. Sin un secado medido, aparecen olores, moho y riesgos para la estructura y la salubridad.",
          en: "After a leak, burst pipe, or heavy rain, moisture hides in walls, floors, and voids. Without measured drying, odours, mould, and structural risks follow.",
        },
        items: [
          {
            title: { es: "Humedad acumulada en estructuras", en: "Hidden moisture in structures" },
            description: { es: "La humedad residual sigue migrating aunque la superficie parezca seca.", en: "Residual moisture keeps moving even when surfaces look dry." },
          },
          {
            title: { es: "Riesgo de moho y condensación", en: "Risk of mould and condensation" },
            description: { es: "Moho y condensación suelen manifestarse con retraso, cuando ya hay daño acumulado.", en: "Mould and condensation often appear late, after damage has stacked up." },
          },
          {
            title: { es: "Condiciones del clima costero", en: "Coastal humidity challenges" },
            description: { es: "En la costa, la salinidad y el clima pueden alargar el tiempo de secado sin el equipo adecuado.", en: "On the coast, salt air and climate can extend drying time without the right equipment." },
          },
        ],
      },
      whyCriticalSection: {
        heading: {
          es: "Por qué el secado técnico es crítico",
          en: "Why technical drying is critical",
        },
        intro: {
          es: "El agua atrapada en paramentos y aislamientos destruye los materiales de dentro hacia afuera:",
          en: "Trapped water inside walls and insulation degrades building elements from within:",
        },
        points: [
          { es: "El moho puede comenzar a proliferar en 24–48 horas", en: "Mould can begin developing within 24–48 hours" },
          { es: "Deterioro de yeso, madera y cartón-yeso", en: "Damage to plaster, timber, and plasterboard" },
          { es: "Corrosión en instalaciones eléctricas e insulación", en: "Risk to electrical systems and insulation" },
          { es: "Olores persistentes a humedad y bacterias", en: "Persistent damp odours and indoor air risks" },
          { es: "Aumento drástico del coste de rehabilitación", en: "Higher risk of expensive structural repairs" },
        ],
        warningNote: {
          es: "Sin secado profesional, la humedad queda retenida en las capas internas destruyendo la edificación.",
          en: "Without professional dehumidification, moisture stays locked inside structures.",
        },
      },
      howWeWorkSection: {
        heading: {
          es: "Cómo trabajamos",
          en: "How we work",
        },
        intro: {
          es: "Un proceso claro desde el primer contacto hasta el retirado del equipo.",
          en: "A clear path from first contact to equipment removal.",
        },
        features: [
          { es: "Contacto y priorización inmediata", en: "Contact and immediate triage" },
          { es: "Visita de diagnóstico y plan de secado", en: "Survey and targeted drying plan" },
          { es: "Instalación de deshumidificadores y contención", en: "Set-up and containment" },
          { es: "Monitorización de lecturas de humedad", en: "Data monitoring and adjustments" },
          { es: "Cierre, informe y retirada de maquinaria", en: "Handover and equipment removal" },
        ],
        equipmentNote: {
          es: "Selección de maquinaria ajustada al volumen, grado de saturación y tipo de paramentos.",
          en: "Equipment selection tailored to room volume, saturation levels, and substrate types.",
        },
      },
      whyBeneficialSection: {
        heading: {
          es: "Por qué trabajar con nosotros",
          en: "Why work with us",
        },
        benefits: [
          { es: "Experiencia local en edificaciones de la provincia", en: "Local experience with provincial building types" },
          { es: "Enfoque medible basado en lecturas reales", en: "Evidence-led approach grounded in moisture data" },
          { es: "Comunicación directa сon un único interlocutor", en: "Direct communication with a single contact" },
        ],
      },
      resultSection: {
        heading: {
          es: "Resultado garantizado",
          en: "Guaranteed outcome",
        },
        text: {
          es: "Inmueble completamente secado hasta niveles de humedad seguros, listo para habitar o rehabilitar.",
          en: "Space fully dried to safe humidity thresholds, ready for rebuild or re-occupation.",
        },
      },
      teamSection: {
        oleksandrPhoto: {
          _type: "image",
          asset: { _type: "reference", _ref: trust6Id },
          alt: "Oleksandr - Técnico especialista en secado",
          caption: {
            es: "Oleksandr — Técnico con detector acústico Sewerin Aquaphon",
            en: "Oleksandr — Technician with Sewerin Aquaphon detector",
          },
        },
        gallery: [
          { _type: "image", _key: "img1", asset: { _type: "reference", _ref: trust1Id }, alt: "Cámara Laserliner", title: { es: "Inspección Laserliner", en: "Laserliner Inspection" } },
          { _type: "image", _key: "img2", asset: { _type: "reference", _ref: trust2Id }, alt: "Tuberías expuestas", title: { es: "Tuberías en cavidad", en: "Wall cavity plumbing" } },
          { _type: "image", _key: "img3", asset: { _type: "reference", _ref: trust3Id }, alt: "Pared con humedad", title: { es: "Daños por humedad", en: "Moisture damage" } },
          { _type: "image", _key: "img4", asset: { _type: "reference", _ref: trust4Id }, alt: "Ducha en obra", title: { es: "Fontanería expuesta", en: "Shower plumbing" } },
          { _type: "image", _key: "img5", asset: { _type: "reference", _ref: trust5Id }, alt: "Cámara FLIR", title: { es: "Termografía FLIR", en: "FLIR thermal survey" } },
          { _type: "image", _key: "img6", asset: { _type: "reference", _ref: trust6Id }, alt: "Técnico en escalera", title: { es: "Oleksandr en obra", en: "Oleksandr on site" } },
        ],
      },
      contactSection: {
        heading: {
          es: "Cuéntanos tu caso",
          en: "Tell us what happened",
        },
        intro: {
          es: "Deja tus datos y describimos el siguiente paso (sin compromiso). Respondemos en horario laboral.",
          en: "We capture context, urgency, and risks (power, active leaks).",
        },
        phone: "+34 600 111 222",
        whatsapp: "34600111222",
        email: "info@homesavior.es",
      },
    };

    console.log("Deleting old document versions if present...");
    try { await client.delete("drafts.landingPage"); } catch (e) {}
    try { await client.delete("landingPage"); } catch (e) {}

    console.log("Creating fresh bilingual published document...");
    await client.createOrReplace(doc);
    console.log("Fresh bilingual document published successfully!");
  } catch (err) {
    console.error("Error seeding Sanity bilingual document:", err);
  }
}

run();
