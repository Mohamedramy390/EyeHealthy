// Arabic content — managed via Pages CMS (src/content/ar/)
import arNav from './content/ar/nav.json';
import arHero from './content/ar/hero.json';
import arObjective from './content/ar/objective.json';
import arFeatures from './content/ar/features.json';
import arOrder from './content/ar/order.json';
import arFooter from './content/ar/footer.json';

// English content — managed via Pages CMS (src/content/en/)
import enNav from './content/en/nav.json';
import enHero from './content/en/hero.json';
import enObjective from './content/en/objective.json';
import enFeatures from './content/en/features.json';
import enOrder from './content/en/order.json';
import enFooter from './content/en/footer.json';

// Static content not yet in CMS (specs, comparison, useCases)
const arStatic = {
  specs: {
    titlePrefix: 'المواصفات الفنية ',
    titleSuffix: 'والاختبارات',
    subtitle: 'إثبات فعالية ضوء EyeHealthy في نطاق القراءة والمذاكرة الليلية.',
    tableTitle: 'مقارنة أنواع المصابيح',
    headers: { type: 'نوع المصباح', blue: 'الضوء الأزرق', reading: 'القراءة ليلاً' },
    types: { cool: 'ليد أبيض بارد', warm: 'ليد أبيض دافئ', eye: 'EyeHealthy' },
    values: { high: 'عالي', medium: 'متوسط', low: 'منخفض', poor: '❌ ضعيفة', fair: '⚠️ مقبولة', excellent: '✔️ ممتازة' },
    footer: 'الضوء الأخضر للقراءة الليلية المريحة.'
  },
  comparison: {
    titlePrefix: 'الفرق بين ',
    green: 'الأخضر',
    and: ' و ',
    blue: 'الأزرق',
    subtitle: 'تأثير عميق على العين، الدماغ، والمزاج بناءً على الخصائص الفيزيائية للضوء.',
    bluePanel: {
      title: 'الضوء الأزرق',
      items: [
        { title: 'خصائص فيزيائية', description: 'طول موجي قصير (450–495 نانومتر)، طاقة عالية.' },
        { title: 'التأثير على العين', description: 'يسبب إجهاداً ويزيد التشتت. قد يؤثر سلبًا على الشبكية مع الاستخدام المفرط.' },
        { title: 'التأثير على الدماغ والمزاج', description: 'ينشط الدماغ بقوة ويثبط الأرق (الميلاتونين). مفيد صباحاً ضار ليلاً.' }
      ]
    },
    greenPanel: {
      title: 'الضوء الأخضر',
      items: [
        { title: 'خصائص فيزيائية', description: 'طول موجي متوسط (495–570 نانومتر)، طاقة أقل للراحة المستدامة.' },
        { title: 'التأثير على العين', description: 'أكثر راحة، أوضح رؤية وأقل وهجاً. مثالي للعمل والقراءة لفترات طويلة.' },
        { title: 'التأثير على الدماغ والمزاج', description: 'يهدئ الجهاز العصبي، يساعد على الاسترخاء ولا يضر النوم. توازن نفسي مميز.' }
      ]
    }
  },
  useCases: {
    title: 'متى نستخدم كل نوع؟ 🕒',
    blue: { title: 'الأزرق ✅', items: ['فترة الصباح', 'للعمل السريع والتنبيه'] },
    green: { title: 'الأخضر ✅', items: ['للقراءة لفترات طويلة', 'للاسترخاء والهدوء', 'في الإضاءة المنزلية الهادئة'] }
  }
};

const enStatic = {
  specs: {
    titlePrefix: 'Technical Specifications ',
    titleSuffix: 'and Tests',
    subtitle: 'Proving EyeHealthy light effectiveness for night reading and studying.',
    tableTitle: 'Lamp Type Comparison',
    headers: { type: 'Lamp Type', blue: 'Blue Light', reading: 'Reading at Night' },
    types: { cool: 'Cool White LED', warm: 'Warm White LED', eye: 'EyeHealthy' },
    values: { high: 'High', medium: 'Medium', low: 'Low', poor: '❌ Poor', fair: '⚠️ Fair', excellent: '✔️ Excellent' },
    footer: 'Green light for comfortable night reading.'
  },
  comparison: {
    titlePrefix: 'Difference between ',
    green: 'Green',
    and: ' and ',
    blue: 'Blue',
    subtitle: 'Deep impact on the eye, brain, and mood based on the physical properties of light.',
    bluePanel: {
      title: 'Blue Light',
      items: [
        { title: 'Physical Properties', description: 'Short wavelength (450–495 nm), higher energy.' },
        { title: 'Effect on Eye', description: 'Causes strain and increases scattering. May negatively affect the retina with excessive exposure.' },
        { title: 'Effect on Brain and Mood', description: 'Strongly stimulates the brain and suppresses melatonin. Beneficial in the morning, harmful at night.' }
      ]
    },
    greenPanel: {
      title: 'Green Light',
      items: [
        { title: 'Physical Properties', description: 'Medium wavelength (495–570 nm), lower energy for sustainable comfort.' },
        { title: 'Effect on Eye', description: 'More comfortable, clearer vision, and less glare. Ideal for reading and working for long periods.' },
        { title: 'Effect on Brain and Mood', description: "Calms the nervous system, helps with relaxation, and doesn't affect sleep. Excellent psychological balance." }
      ]
    }
  },
  useCases: {
    title: 'When to use each type? 🕒',
    blue: { title: 'Blue ✅', items: ['Morning time', 'For fast work and alertness'] },
    green: { title: 'Green ✅', items: ['For long reading periods', 'For relaxation and peace', 'For quiet home lighting'] }
  }
};

export const translations = {
  ar: {
    nav: arNav,
    hero: arHero,
    objective: arObjective,
    features: arFeatures,
    order: arOrder,
    footer: arFooter,
    ...arStatic
  },
  en: {
    nav: enNav,
    hero: enHero,
    objective: enObjective,
    features: enFeatures,
    order: enOrder,
    footer: enFooter,
    ...enStatic
  }
};
