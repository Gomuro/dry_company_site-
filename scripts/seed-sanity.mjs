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
      title: "Головна сторінка лендінгу",
      hero: {
        kicker: "Андалусія · Коста-дель-Соль",
        title: "Професійне осушення приміщень",
        subtitle:
          "Після затоплень, протікань або прихованих витоків води важливо не лише усунути причину, а й повністю видалити вологу з конструкцій. Ми виконуємо професійне осушення приміщень із використанням спеціалізованого обладнання яке застосовується у сфері аварійного відновлення по всій Європі. Працюємо по всій Андалусії, де теплий клімат значно підвищує ризики швидкого розвитку плісняви та руйнування матеріалів після намокання.",
        primaryCta: "Замовити консультацію",
        secondaryCta: "Переглянути послуги",
        badges: ["24–48 год виїзд", "Без зобов'язань", "Прозорий розрахунок"],
        heroImage: {
          _type: "image",
          asset: { _type: "reference", _ref: heroAssetId },
          alt: "Професійне обладнання для локалізації витоків вологи",
        },
      },
      servicesSection: {
        heading: "Послуги та технології осушення",
        intro: "Поєднуємо аварійне видалення вологи з контрольованим сушінням матеріалів.",
        emergencyCardTitle: "Аварійне усунення витоків",
        emergencyCardBody: "Негайне вилучення вологи, консервація та захист внутрішніх покриттів і матеріалів.",
        emergencyCardImage: {
          _type: "image",
          asset: { _type: "reference", _ref: emergencyAssetId },
        },
        dryingCardTitle: "Професійне осушення приміщень",
        dryingCardBody: "Обладнання високої потужності, розрахунок повітряного потоку та фіксація вологості на кожному етапі.",
        dryingCardImage: {
          _type: "image",
          asset: { _type: "reference", _ref: dryingAssetId },
        },
      },
      whenNeededSection: {
        heading: "Коли потрібне осушення",
        intro: "Основні випадки, коли потрібно негайно видалити вологу з конструкцій:",
        items: [
          { title: "Після затоплення або прориву труби", description: "Аварійне висушування покриттів та стін" },
          { title: "Після прихованого витоку води", description: "Глибинне видалення вологи з конструкцій" },
          { title: "Після пожежогасіння (заливання водою)", description: "Повне просушування приміщення" },
          { title: "Після ремонту з великою кількістю вологи", description: "Прискорення висихання штукатурки та стяжки" },
          { title: "При постійній сирості у стінах або підлозі", description: "Усунення сирості та стабілізація вологості" },
          { title: "Якщо з’явився запах вологи або плісняви", description: "Запобігання розвитку грибка та бактерій" },
        ],
      },
      whyCriticalSection: {
        heading: "Чому осушення критично важливе",
        intro: "Вода, яка залишилась у стінах, підлозі або утеплювачі, не зникає сама. У кліматі південної Іспанії це особливо критично:",
        points: [
          "Пліснява може почати розвиватись уже за 24–48 годин",
          "Руйнуються штукатурка, дерево, гіпсокартон",
          "Псуються електричні системи та ізоляція",
          "З’являються стійкі запахи вологи",
          "Зростає ризик дорогого капітального ремонту",
        ],
        warningNote: "Без професійного осушення волога «закривається» всередині конструкцій і поступово руйнує будівлю зсередини.",
      },
      howWeWorkSection: {
        heading: "Як ми працюємо",
        intro: "Ми застосовуємо професійні осушувачі, вентилятори та системи контролю вологості, які дозволяють:",
        features: [
          "Видалити вологу з повітря та матеріалів",
          "Прискорити природне висихання у кілька разів",
          "Контролювати рівень вологості на кожному етапі",
          "Запобігти утворенню плісняви",
        ],
        equipmentNote: "Обладнання підбирається індивідуально залежно від площі, рівня затоплення та типу конструкцій.",
      },
      whyBeneficialSection: {
        heading: "Чому це вигідно",
        benefits: [
          "Зменшує ризик дорогого ремонту в майбутньому",
          "Захищає конструкції будівлі",
          "Запобігає появі плісняви та грибка",
          "Скорочує час відновлення приміщення",
          "Дозволяє точно контролювати процес сушіння",
        ],
      },
      resultSection: {
        heading: "Результат",
        text: "Приміщення повністю висушене до безпечного рівня вологості, без прихованої вологи в стінах та підлогах, готове до подальшого ремонту або використання.",
      },
      teamSection: {
        oleksandrPhoto: {
          _type: "image",
          asset: { _type: "reference", _ref: trust6Id },
          alt: "Олександр Боштега — спеціаліст із виявлення та усунення витоків",
          caption: "Олександр — оператор спеціалізованого обладнання на об'єкті",
        },
        gallery: [
          { _type: "image", _key: "img1", asset: { _type: "reference", _ref: trust1Id }, alt: "Інспекційна камера", title: "Контроль труб" },
          { _type: "image", _key: "img2", asset: { _type: "reference", _ref: trust2Id }, alt: "Відкриті комунікації", title: "Обстеження конструкцій" },
          { _type: "image", _key: "img3", asset: { _type: "reference", _ref: trust3Id }, alt: "Пошкодження вологою", title: "Оцінка збитків" },
          { _type: "image", _key: "img4", asset: { _type: "reference", _ref: trust4Id }, alt: "Роботи у санвузлі", title: "Локалізація аварії" },
          { _type: "image", _key: "img5", asset: { _type: "reference", _ref: trust5Id }, alt: "Тепловізійний аналіз", title: "Тепловізор FLIR" },
          { _type: "image", _key: "img6", asset: { _type: "reference", _ref: trust6Id }, alt: "Акустична діагностика", title: "Олександр на об'єкті" },
        ],
      },
      contactSection: {
        heading: "Зв'яжіться з нами",
        intro: "Залиште свої дані або опишіть ситуацію — ми запропонуємо найкраще рішення без зобов'язань.",
        phone: "+34 600 111 222",
        whatsapp: "34600111222",
        email: "info@homesavior.es",
      },
    };

    console.log("Creating/updating Sanity published document...");
    await client.createOrReplace(doc);
    console.log("Document updated & published successfully!");
  } catch (err) {
    console.error("Error seeding Sanity:", err);
  }
}

run();
