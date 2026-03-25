// ==========================================
// THE FIQH DIRECTORY (Split for easy editing)
// ==========================================

const HALAL_DATA = [
  {
    id: 'h1', topic: "All Seafood", category: "Food, Dietary", status: "Halal", consensusLevel: "High",
    coreReasoning: '"Lawful to you is the game of the sea" (5:96).',
    schoolsOfThought: [{ school: "Majority", ruling: "Permitted" }, { school: "Hanafi", ruling: "Restricted to fish-types only" }],
    sources: [{ title: "Quran 5:96", author: "Surah Al-Ma'idah", link: "https://quran.com/5/96" }],
    differingOpinions: "Hanafi school historically restricts seafood to fish, viewing crustaceans as Makruh.", isNew: false
  },
  {
    id: 'h2', topic: "Zabihah Poultry/Beef", category: "Food, Meat", status: "Halal", consensusLevel: "High",
    coreReasoning: "Must be slaughtered by a Muslim or Ahlul Kitab according to Islamic rites.",
    schoolsOfThought: [{ school: "Consensus", ruling: "Permitted" }],
    sources: [{ title: "Quran 5:5", author: "Surah Al-Ma'idah", link: "https://quran.com/5/5" }], differingOpinions: null, isNew: false
  },
  {
    id: 'h3', topic: "Lab-Grown Meat", category: "Tech, Future Food", status: "Halal", consensusLevel: "Moderate",
    coreReasoning: "Halal if the original cells are from a Halal-slaughtered animal and no impure growth mediums (like fetal bovine serum) are used.",
    schoolsOfThought: [{ school: "MUI & JAKIM", ruling: "Permitted with conditions" }],
    sources: [{ title: "Fatwa on Cultivated Meat", author: "MUI Singapore" }],
    differingOpinions: "If cells are extracted from a living animal without slaughter, it is considered Maytah (carrion) and Haram.", isNew: true
  },
  {
    id: 'h4', topic: "AI-Assisted Income", category: "Finance, AI", status: "Halal", consensusLevel: "High",
    coreReasoning: "Permissible as long as the work generated or assisted is ethical and halal in nature.",
    schoolsOfThought: [{ school: "Contemporary Fiqh", ruling: "Permitted" }],
    sources: [{ title: "Ethics of AI Income", author: "Islamic Finance Guru" }], differingOpinions: null, isNew: true
  },
  {
    id: 'h5', topic: "Equity Investing", category: "Finance", status: "Halal", consensusLevel: "High",
    coreReasoning: "Permissible if the company’s core business is Halal and it passes financial screening ratios (debt levels).",
    schoolsOfThought: [{ school: "AAOIFI", ruling: "Permitted with screening" }],
    sources: [{ title: "Shariah Screening Criteria", author: "AAOIFI Standards" }], differingOpinions: null, isNew: false
  },
  {
    id: 'h6', topic: "Microbial Rennet", category: "Ingredients", status: "Halal", consensusLevel: "High",
    coreReasoning: "Common in cheese; a halal alternative to animal rennet as it is derived from mold/fungi.",
    schoolsOfThought: [{ school: "Consensus", ruling: "Permitted" }],
    sources: [{ title: "Cheese Ingredients Guide", author: "Halal Food Authority" }], differingOpinions: null, isNew: false
  },
  {
    id: 'h7', topic: "Vinegar", category: "Food, Chemistry", status: "Halal", consensusLevel: "High",
    coreReasoning: "Permissible even if transformed from wine due to the principle of Istihalah (complete chemical transformation).",
    schoolsOfThought: [{ school: "Consensus", ruling: "Permitted" }],
    sources: [{ title: "Hadith on Vinegar", author: "Sahih Muslim" }], differingOpinions: null, isNew: false
  },
  {
    id: 'h8', topic: "Locusts", category: "Food, Insects", status: "Halal", consensusLevel: "High",
    coreReasoning: "The only insect explicitly permitted for consumption in Sahih Hadith without requiring slaughter.",
    schoolsOfThought: [{ school: "Consensus", ruling: "Permitted" }],
    sources: [{ title: "Hadith on Two Dead Things", author: "Sunan Ibn Majah" }], differingOpinions: null, isNew: false
  },
  {
    id: 'h9', topic: "Vanilla Extract", category: "Food, Science", status: "Halal", consensusLevel: "Moderate",
    coreReasoning: "Permissible if the alcohol is used merely as a carrier/solvent and is heavily diluted, rendering it non-intoxicating.",
    schoolsOfThought: [{ school: "IFANCA", ruling: "Permitted (< 0.1% rule)" }],
    sources: [{ title: "Rulings on Trace Alcohol", author: "IFANCA" }], differingOpinions: "Some scholars maintain a zero-tolerance policy on any added alcohol.", isNew: false
  },
  {
    id: 'h10', topic: "Organic Produce", category: "Ethics, Tayyib", status: "Halal", consensusLevel: "High",
    coreReasoning: "Highly encouraged as it aligns with the Quranic concept of Tayyib (Pure, wholesome, and ethical).",
    schoolsOfThought: [{ school: "Consensus", ruling: "Mustahabb (Recommended)" }],
    sources: [{ title: "Quran 2:168", author: "Halalan Tayyiban", link: "https://quran.com/2/168" }], differingOpinions: null, isNew: false
  }
];

const MAKRUH_DATA = [
  {
    id: 'm1', topic: "Smoking/Vaping", category: "Health, Lifestyle", status: "Makruh", consensusLevel: "Disputed",
    coreReasoning: "Many contemporary scholars now rule it 'Haram' due to definitive health harm, while classical views initially deemed it 'Makruh'.",
    schoolsOfThought: [{ school: "Modern Councils", ruling: "Haram" }, { school: "Traditional", ruling: "Makruh (Severely Disliked)" }],
    sources: [{ title: "Fatwa on Tobacco", author: "Al-Azhar Fatwa Council" }], differingOpinions: "Increasing consensus is moving towards Haram due to medical evidence of self-harm.", isNew: false
  },
  {
    id: 'm2', topic: "Cryptocurrency", category: "Finance, Tech", status: "Disputed", consensusLevel: "Low",
    coreReasoning: "Disputed; concerns over Gharar (extreme uncertainty) vs. its utility as a decentralized ledger/currency.",
    schoolsOfThought: [{ school: "State Councils (Egypt, Turkey)", ruling: "Haram" }, { school: "Independent Finance Muftis", ruling: "Permitted (Case-by-case)" }],
    sources: [{ title: "Bitcoin Fatwa", author: "Mufti Faraz Adam" }], differingOpinions: "Some see it as purely speculative gambling, others as valid digital property (Mal).", isNew: false
  },
  {
    id: 'm3', topic: "NFTs", category: "Finance, Art", status: "Disputed", consensusLevel: "Low",
    coreReasoning: "Depends entirely on the underlying asset. If the art is Halal and it provides utility, it may be permissible. If used for wash-trading/gambling, it is Haram.",
    schoolsOfThought: [{ school: "Contemporary Scholars", ruling: "Neutral (Depends on Use Case)" }],
    sources: [{ title: "NFT Shariah Compliance", author: "Islamic Finance Guru" }], differingOpinions: null, isNew: true
  },
  {
    id: 'm4', topic: "Non-Zabihah Meat", category: "Dietary", status: "Makruh", consensusLevel: "Disputed",
    coreReasoning: "Some scholars allow meat slaughtered by 'People of the Book' (Ahlul Kitab) in Western countries, but many strictly forbid it unless the Islamic Zabihah method is verified.",
    schoolsOfThought: [{ school: "Minority View", ruling: "Permitted (Ahlul Kitab)" }, { school: "Majority View", ruling: "Haram/Makruh without verification" }],
    sources: [{ title: "Quran 5:5 Context", author: "Tafsir Ibn Kathir", link: "https://quran.com/5/5" }], differingOpinions: "The debate centers on whether modern secular slaughterhouses qualify as 'People of the Book'.", isNew: false
  },
  {
    id: 'm5', topic: "Shellfish (Shrimp/Crab)", category: "Food, Madhhab", status: "Makruh", consensusLevel: "Moderate",
    coreReasoning: "Halal for the majority of Muslims, but considered Makruh (disliked) or Haram in the Hanafi school of thought.",
    schoolsOfThought: [{ school: "Shafi'i, Maliki, Hanbali", ruling: "Halal" }, { school: "Hanafi", ruling: "Makruh Tahrimi" }],
    sources: [{ title: "Fiqh of Seafood", author: "SeekersGuidance" }], differingOpinions: "Hanafis restrict permissible seafood strictly to anatomy resembling standard fish.", isNew: false
  },
  {
    id: 'm6', topic: "Professional Gaming", category: "Lifestyle, Finance", status: "Makruh", consensusLevel: "Moderate",
    coreReasoning: "Permissible unless it involves loot boxes (gambling), explicit content, or leads to the neglect of obligatory prayers and duties.",
    schoolsOfThought: [{ school: "Contemporary Scholars", ruling: "Permitted with strict conditions" }],
    sources: [{ title: "Fatwa on Esports", author: "IslamQA" }], differingOpinions: "Many view it as Makruh due to time-wasting (Laghw), even if no explicit Haram is present.", isNew: true
  },
  {
    id: 'm7', topic: "Cosmetic Surgery", category: "Medical, Ethics", status: "Makruh", consensusLevel: "Moderate",
    coreReasoning: "Permissible for reconstructive purposes (accidents/defects). Strictly Haram for pure vanity (altering Allah's creation).",
    schoolsOfThought: [{ school: "Consensus", ruling: "Conditional (Intention-based)" }],
    sources: [{ title: "Rulings on Beautification", author: "Dar al-Ifta" }], differingOpinions: null, isNew: false
  },
  {
    id: 'm8', topic: "Snail Mucin", category: "Beauty", status: "Disputed", consensusLevel: "Low",
    coreReasoning: "Disputed based on whether the snail's secretion is considered 'pure' (Tahir) or 'filth' (Najis), and whether insects/mollusks can be utilized externally.",
    schoolsOfThought: [{ school: "Maliki", ruling: "Generally Permitted" }, { school: "Hanafi/Shafi'i", ruling: "Disputed/Disliked" }],
    sources: [{ title: "Halal Cosmetics Standard", author: "SGS Halal" }], differingOpinions: "Topical use is less strictly regulated than consumption, leading to diverse opinions.", isNew: true
  },
  {
    id: 'm9', topic: "Buying on Credit", category: "Finance", status: "Makruh", consensusLevel: "High",
    coreReasoning: "Permissible if absolutely no interest is paid (e.g., paying statement in full), but 'Disliked' (Makruh) culturally and textually due to the burden and danger of accumulating debt.",
    schoolsOfThought: [{ school: "Consensus", ruling: "Permitted (If 0% interest)" }],
    sources: [{ title: "Hadith on Debt", author: "Sahih Bukhari" }], differingOpinions: null, isNew: false
  },
  {
    id: 'm10', topic: "Raw Garlic/Onion", category: "Social", status: "Makruh", consensusLevel: "High",
    coreReasoning: "Disliked (Makruh) to consume raw before going to the Masjid, out of respect for the angels and other worshippers.",
    schoolsOfThought: [{ school: "Consensus", ruling: "Makruh (Before congregational prayer)" }],
    sources: [{ title: "Prophetic Tradition", author: "Sahih Muslim" }], differingOpinions: null, isNew: false
  }
];

const HARAM_DATA = [
  {
    id: 'hr1', topic: "Riba (Interest)", category: "Finance", status: "Haram", consensusLevel: "Absolute",
    coreReasoning: "Explicitly forbidden in the Quran. Includes paying or receiving interest in mortgages, loans, and savings accounts.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Haram" }],
    sources: [{ title: "Quran 2:275", author: "Surah Al-Baqarah", link: "https://quran.com/2/275" }], differingOpinions: null, isNew: false
  },
  {
    id: 'hr2', topic: "Pork/Lard/Gelatin", category: "Food, Ingredients", status: "Haram", consensusLevel: "Absolute",
    coreReasoning: "Explicitly forbidden. Includes all derivatives hidden in candy, marshmallows, and makeup.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Haram" }],
    sources: [{ title: "Quran 5:3", author: "Surah Al-Ma'idah", link: "https://quran.com/5/3" }], differingOpinions: null, isNew: false
  },
  {
    id: 'hr3', topic: "Alcohol/Intoxicants", category: "Lifestyle, Food", status: "Haram", consensusLevel: "Absolute",
    coreReasoning: "'The mother of all evils.' Includes drinking, selling, and cooking with wine/alcohol (as it doesn't entirely cook off).",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Haram" }],
    sources: [{ title: "Quran 5:90", author: "Surah Al-Ma'idah", link: "https://quran.com/5/90" }], differingOpinions: null, isNew: false
  },
  {
    id: 'hr4', topic: "Gambling/Lottery", category: "Finance, Lifestyle", status: "Haram", consensusLevel: "Absolute",
    coreReasoning: "Maisir (games of chance for wealth) is forbidden. This modernly includes casino games, sports betting, and 'Loot Boxes' in video games.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Haram" }],
    sources: [{ title: "Quran 5:90", author: "Surah Al-Ma'idah", link: "https://quran.com/5/90" }], differingOpinions: null, isNew: false
  },
  {
    id: 'hr5', topic: "Short Selling", category: "Finance", status: "Haram", consensusLevel: "High",
    coreReasoning: "Selling what you do not currently own is explicitly forbidden in Islamic finance protocols.",
    schoolsOfThought: [{ school: "AAOIFI Consensus", ruling: "Haram" }],
    sources: [{ title: "Hadith on Trade", author: "Sunan an-Nasa'i" }], differingOpinions: null, isNew: false
  },
  {
    id: 'hr6', topic: "Cochineal (E120)", category: "Ingredients, Beauty", status: "Haram", consensusLevel: "High",
    coreReasoning: "Red dye made from crushed bugs. Forbidden for consumption in the majority of traditional schools.",
    schoolsOfThought: [{ school: "Hanafi/Shafi'i", ruling: "Haram" }, { school: "Maliki", ruling: "Permitted" }],
    sources: [{ title: "Ingredient Guide", author: "SANHA" }], differingOpinions: "Maliki school permits it, but standard Halal certifiers generally reject it.", isNew: false
  },
  {
    id: 'hr7', topic: "Carrion (Dead Meat)", category: "Food", status: "Haram", consensusLevel: "Absolute",
    coreReasoning: "Animals that died of natural causes, trauma, or improper slaughter methods.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Haram" }],
    sources: [{ title: "Quran 5:3", author: "Surah Al-Ma'idah", link: "https://quran.com/5/3" }], differingOpinions: null, isNew: false
  },
  {
    id: 'hr8', topic: "Foresight/Astrology", category: "Lifestyle, Spirituality", status: "Haram", consensusLevel: "Absolute",
    coreReasoning: "Seeking knowledge of the unseen through horoscopes, tarot, or stars is strictly forbidden and approaches Shirk.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Haram" }],
    sources: [{ title: "Hadith on Fortune Tellers", author: "Sahih Muslim" }], differingOpinions: null, isNew: false
  },
  {
    id: 'hr9', topic: "Carnivorous Animals", category: "Food", status: "Haram", consensusLevel: "Absolute",
    coreReasoning: "Animals with fangs (lions, wolves) or birds with talons (eagles, hawks) are strictly prohibited for consumption.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Haram" }],
    sources: [{ title: "Hadith on Dietary Laws", author: "Sahih Bukhari" }], differingOpinions: null, isNew: false
  },
  {
    id: 'hr10', topic: "Usury-based Insurance", category: "Finance", status: "Haram", consensusLevel: "High",
    coreReasoning: "Standard commercial insurance is often seen as containing Gharar (uncertainty) and Riba. Takaful (cooperative insurance) is the Halal alternative.",
    schoolsOfThought: [{ school: "IFA (OIC)", ruling: "Haram (Commercial)" }],
    sources: [{ title: "Resolution on Insurance", author: "Islamic Fiqh Academy" }], differingOpinions: "Permitted ONLY when legally mandated by the state (e.g., auto insurance).", isNew: false
  }
];

// Combines the arrays seamlessly for the UI Directory
export const DATABASE = [...HALAL_DATA, ...MAKRUH_DATA, ...HARAM_DATA];


// ==========================================
// OTHER SECTIONS
// ==========================================

export const RAMADAN_DATABASE = [
  { 
    id: 'r1', topic: "Swallowing Saliva", status: "DOES NOT BREAK", consensusLevel: "Absolute", category: "Natural Actions",
    coreReasoning: "Natural swallowing of one's own saliva is unavoidable and perfectly permissible. It does not constitute eating or drinking.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Fiqh of Fasting", author: "Al-Mughni" }],
    differingOpinions: "None, unless the saliva is mixed with external blood (e.g., from gums) or leftover food particles, in which case swallowing it deliberately breaks the fast."
  },
  { 
    id: 'r2', topic: "Intentional Eating/Drinking", status: "BREAKS FAST", consensusLevel: "Absolute", category: "Dietary",
    coreReasoning: "Deliberately consuming any food or water invalidates the fast immediately, requiring makeup (Qada) and potentially expiation (Kaffarah).",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Breaks Fast" }],
    sources: [{ title: "Quran 2:187", author: "Surah Al-Baqarah", link: "https://quran.com/2/187" }],
    differingOpinions: null
  },
  { 
    id: 'r3', topic: "Eating Forgetfully", status: "DOES NOT BREAK", consensusLevel: "High", category: "Accidental",
    coreReasoning: "If someone genuinely forgets they are fasting and eats, their fast remains valid as it is considered a provision from Allah. They must stop immediately upon remembering.",
    schoolsOfThought: [{ school: "Majority (Hanafi, Shafi'i, Hanbali)", ruling: "Does Not Break" }, { school: "Maliki", ruling: "Breaks (Requires Makeup)" }],
    sources: [{ title: "Hadith on Forgetful Eating", author: "Sahih Bukhari" }],
    differingOpinions: "The Maliki school holds that while there is no sin in forgetful eating, the fast itself is technically invalidated and must be made up later."
  },
  { 
    id: 'r4', topic: "Vomiting Unintentionally", status: "DOES NOT BREAK", consensusLevel: "Absolute", category: "Medical/Illness",
    coreReasoning: "Sudden, uncontrollable vomiting does not break the fast. Intentional vomiting (inducing it), however, does break it.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Hadith on Vomiting", author: "Sunan Abi Dawud" }],
    differingOpinions: null
  },
  { 
    id: 'r5', topic: "Taking Injections (Non-Nutritional)", status: "DOES NOT BREAK", consensusLevel: "High", category: "Medical",
    coreReasoning: "Vaccines, anesthetics, or medical injections (like penicillin) that do not provide nutrition or hydration are permitted as they do not enter the open body cavities in the manner of food.",
    schoolsOfThought: [{ school: "Contemporary Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Medical Rulings on Fasting", author: "Islamic Fiqh Academy" }],
    differingOpinions: null
  },
  { 
    id: 'r6', topic: "IV Drips / Nutritional Injections", status: "BREAKS FAST", consensusLevel: "High", category: "Medical",
    coreReasoning: "Receiving vitamins, saline, or sustenance intravenously defeats the purpose of the fast as it directly nourishes the body.",
    schoolsOfThought: [{ school: "Contemporary Consensus", ruling: "Breaks Fast" }],
    sources: [{ title: "Fatwa on IV Drips", author: "Dar al-Ifta" }],
    differingOpinions: null
  },
  { 
    id: 'r7', topic: "Smoking / Vaping", status: "BREAKS FAST", consensusLevel: "Absolute", category: "Lifestyle",
    coreReasoning: "Inhaling smoke or vapor intentionally introduces physical substances (particulate matter) directly into the body cavity, satisfying a physical urge.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Breaks Fast" }],
    sources: [{ title: "Fasting & Smoking", author: "AMJA" }],
    differingOpinions: null
  },
  { 
    id: 'r8', topic: "Using Asthma Inhalers", status: "DISPUTED", consensusLevel: "Low", category: "Medical",
    coreReasoning: "Scholars differ based on the mechanics. Some view it as compressed air/medicine that opens the lungs (Does Not Break), while others argue liquid/powder particles inevitably enter the stomach (Breaks).",
    schoolsOfThought: [{ school: "Many Modern Scholars", ruling: "Does Not Break" }, { school: "Traditional Cautious View", ruling: "Breaks Fast" }],
    sources: [{ title: "Asthma & Fasting", author: "IslamQA" }],
    differingOpinions: "Those who permit it equate the microscopic particles to the residual water left in the mouth after Wudu (ablution), which is unavoidable and pardoned."
  },
  { 
    id: 'r9', topic: "Brushing Teeth (Toothpaste)", status: "MAKRUH", consensusLevel: "Moderate", category: "Hygiene",
    coreReasoning: "Technically permissible if nothing is swallowed, but highly disliked (Makruh) due to the strong flavor and severe risk of accidentally swallowing the paste.",
    schoolsOfThought: [{ school: "Majority", ruling: "Makruh (Disliked)" }],
    sources: [{ title: "Use of Miswak & Paste", author: "SeekersGuidance" }],
    differingOpinions: "It is universally recommended to use a plain Miswak during fasting hours and save toothpaste for before Fajr or after Maghrib."
  },
  { 
    id: 'r10', topic: "Blood Testing / Cupping (Hijama)", status: "DISPUTED", consensusLevel: "Moderate", category: "Medical",
    coreReasoning: "Extracting a small amount of blood for tests is generally fine. Cupping is disputed; it is historically disliked because it severely weakens the fasting person.",
    schoolsOfThought: [{ school: "Hanbali", ruling: "Breaks Fast" }, { school: "Majority (Hanafi/Shafi'i/Maliki)", ruling: "Makruh (Does Not Break)" }],
    sources: [{ title: "Hadith on Cupper and Cupped", author: "Sunan an-Nasa'i" }],
    differingOpinions: "The Hanbali school strictly considers cupping a fast-breaker based on specific Hadith, whereas the majority interpret those Hadith as a warning about the weakness it induces rather than an outright invalidation."
  },
];

export const MARRIAGE_DATA = {
  husband: [
    { 
      title: "Financial Maintenance (Nafaqah)", 
      desc: "Full responsibility for housing, food, clothing, and medical care, regardless of the wife's personal wealth.",
      elaboration: "Nafaqah covers all essential living costs. Even if the wife is wealthier or earns a higher salary, the primary financial obligation remains strictly on the husband. She is not Islamically required to spend a single cent on household expenses unless she chooses to out of charity (Sadaqah).",
      sources: [{ title: "Fiqh al-Sunnah", author: "Sayyid Sabiq" }]
    },
    { 
      title: "Kind Treatment (Ma’ruf)", 
      desc: "The Quranic obligation to live with them in kindness (4:19).",
      elaboration: "Ma'ruf encompasses respect, gentleness, and avoiding harm. The Prophet (PBUH) stated, 'The best of you are those who are best to their wives.' This includes emotional validation, helping with household chores, and addressing grievances with patience.",
      sources: [
        { title: "Quran 4:19", author: "Surah An-Nisa", link: "https://quran.com/4/19" },
        { title: "Riyad as-Salihin", author: "Imam Nawawi" }
      ]
    },
    { 
      title: "Protection & Leadership", 
      desc: "Providing emotional and physical safety for the household.",
      elaboration: "Qiwamah (leadership) is not dictatorship, but a degree of responsibility. It involves defending the family's honor, ensuring physical security, and shielding them from external harm. The leader is accountable to Allah for the well-being of the flock.",
      sources: [{ title: "Reliance of the Traveller", author: "Ahmad ibn Naqib al-Misri" }]
    },
    { 
      title: "Mahr (Dowry)", 
      desc: "The mandatory gift given to the bride at the start of the marriage, which is her property alone.",
      elaboration: "The Mahr is a mandatory pre-requisite for marriage. It is a gift strictly for the bride, not her family, signifying the husband's commitment. It can be money, property, or even a service. It acts as her absolute private property.",
      sources: [{ title: "Al-Hidayah", author: "Al-Marghinani" }]
    }
  ],
  wife: [
    { 
      title: "Guardianship of the Home", 
      desc: "Protecting the husband's property and the sanctity of the household in his absence.",
      elaboration: "While the husband is out, the wife is the 'shepherd' of the home. This means she maintains the sanctity of the private space, protects his wealth from waste, and nurtures the household environment.",
      sources: [{ title: "Sahih Bukhari", author: "Imam Bukhari" }]
    },
    { 
      title: "Emotional Support", 
      desc: "Contributing to the 'Sakinah' (tranquility) mentioned in Surah Ar-Rum (30:21).",
      elaboration: "Sakinah translates to a profound sense of tranquility and peace. The Quran describes spouses as 'garments' for one another (2:187), implying protection, closeness, and comfort. Classical scholars emphasize that providing emotional availability and a peaceful home environment is a religiously mandated duty.",
      sources: [
        { title: "Quran 30:21", author: "Surah Ar-Rum", link: "https://quran.com/30/21" },
        { title: "Tafsir Ibn Kathir", author: "Ibn Kathir" }
      ]
    },
    { 
      title: "Consultation", 
      desc: "Working with the husband to manage family affairs.",
      elaboration: "Islamic marriages function on Shura (mutual consultation). While the husband has final executive responsibility (Qiwamah), enforcing decisions dictatorially without considering the wife's counsel contradicts the Prophetic model.",
      sources: [{ title: "Tafsir Al-Qurtubi", author: "Al-Qurtubi" }]
    }
  ],
  shared: [
    { 
      title: "Inheritance", 
      desc: "Fixed shares defined in the Quran.",
      elaboration: "Spouses have guaranteed, fixed inheritance shares from each other that cannot be written out of a will. A husband inherits 1/2 or 1/4 of his wife's estate, while a wife inherits 1/4 or 1/8 of his, depending on whether they have children.",
      sources: [{ title: "Quran 4:12", author: "Surah An-Nisa", link: "https://quran.com/4/12" }]
    },
    { 
      title: "Kindness & Intimacy", 
      desc: "The right to a fulfilling and respectful relationship.",
      elaboration: "Both partners have a recognized right to sexual fulfillment and intimacy, framed not just as a physical need but as an act of worship and bonding that protects both spouses from sin.",
      sources: [{ title: "Islamic Jurisprudence", author: "Imam Al-Ghazali" }]
    },
    { 
      title: "Privacy", 
      desc: "Protecting each other’s secrets and flaws.",
      elaboration: "Exposing marital secrets, intimate details, or complaining about a spouse's private flaws to friends or social media is strictly forbidden (Haram) for both partners, destroying the 'garment' of protection.",
      sources: [{ title: "Al-Adab Al-Mufrad", author: "Imam Bukhari" }]
    }
  ]
};

export const CONTROVERSIES_DATA = [
  {
    topic: "Inheritance Laws",
    claim: '"Women get half of what men get."',
    context: 'In 80% of Islamic inheritance scenarios, women get equal to or more than men. The "half" rule only applies when the man has the legal obligation to spend his share on the woman.',
    elaboration: 'The Islamic inheritance system is based on financial responsibility, not gender. When a brother and sister inherit from their parents, the brother receives twice as much because he is legally obligated to spend his wealth on the women of his family (wife, daughters, mother). The sister has no such obligation; her wealth is entirely hers to keep or invest.',
    sources: [{ title: "The Philosophy of Islamic Inheritance", author: "Dr. Hatem al-Haj" }],
    contemporaryScholars: [
      {
        name: "Dr. Jonathan Brown",
        opinion: "Highlights that the inheritance laws function within a macro-economic system of mandatory male financial responsibility (Nafaqah). Stripping the system of its parts creates the illusion of inequality.",
        source: { title: "Misquoting Muhammad", link: "https://www.drjonathanbrown.com/" }
      },
      {
        name: "Dr. Omar Suleiman",
        opinion: "The underlying philosophy of Islam’s inheritance is not to reward gender, but to distribute capital based on the strict financial burdens placed upon individuals in a family unit.",
        source: { title: "Lecture on Divine Justice", link: "https://yaqeeninstitute.org/" }
      }
    ]
  },
  {
    topic: "The 'Sword' Verse",
    claim: '"The Quran tells Muslims to kill non-believers."',
    context: 'Context: This was revealed during a specific state of war after a treaty was broken. Verse 9:6 immediately commands providing asylum to any enemy who seeks it.',
    elaboration: 'Surah At-Tawbah (Chapter 9) was revealed in a specific historical context where an enemy coalition had repeatedly broken peace treaties and killed Muslims. The "Sword Verse" (9:5) was a military command against active combatants. Verse 9:6 immediately commands providing asylum and escort to any enemy who seeks peace, proving it is not a blanket command.',
    sources: [
      { title: "Quran 9:5-6", author: "Surah At-Tawbah", link: "https://quran.com/9/5-6" },
      { title: "War and Peace in Islam", author: "Dr. Mustafa Abu Sway" }
    ],
    contemporaryScholars: [
      {
        name: "Dr. Yasir Qadhi",
        opinion: "Surah At-Tawbah is the culmination of a 20-year conflict with the Quraysh. Taking verse 9:5 out of its historical timeline fundamentally breaks the rules of Quranic exegesis (Tafsir).",
        source: { title: "Seerah Series: The Conquest of Makkah", link: "https://www.youtube.com/user/YasirQadhi" }
      }
    ]
  },
  {
    topic: "Scientific Accuracy",
    claim: '"Does the Quran say the sun sets in a muddy spring?"',
    context: 'Context: Surah Al-Kahf describes the perspective of Dhul-Qarnayn (how it appeared to his eyes at the horizon), not a geographical fact.',
    elaboration: "The Quran uses phenomenological language—describing things as they appear to the human eye. When Dhul-Qarnayn reached the westernmost point of his journey, he 'found the sun setting in a murky spring' (18:86). Classical scholars explicitly stated centuries ago that this meant it *appeared* to set in the ocean from his perspective on the shoreline, not that the sun physically entered a body of water.",
    sources: [
      { title: "Quran 18:86", author: "Surah Al-Kahf", link: "https://quran.com/18/86" },
      { title: "Tafsir Al-Razi", author: "Fakhr al-Din al-Razi" }
    ],
    contemporaryScholars: [] 
  },
  {
    topic: "Gender Roles",
    claim: '"The Quran allows hitting wives (4:34)."',
    context: 'Context: Modern scholarship and Prophetic Hadith clarify this as a "symbolic tap" with a miswak (toothbrush) that leaves no mark, used only as a last resort.',
    elaboration: "The verse outlines a step-by-step process for severe marital rebellion (Nushuz). If taken literally as 'strike', the Prophet Muhammad explicitly restricted it to a symbolic tap that 'leaves no mark' (using a miswak) solely to convey the severity of the breaking point. The Prophet strongly condemned hitting women and never struck a woman in his life.",
    sources: [
      { title: "Quran 4:34", author: "Surah An-Nisa", link: "https://quran.com/4/34" },
      { title: "Women in Islamic Law", author: "Dr. Jamal Badawi" }
    ],
    contemporaryScholars: [] 
  }
];