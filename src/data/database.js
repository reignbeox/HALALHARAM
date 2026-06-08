// ==========================================
// THE FIQH DIRECTORY (Split for easy editing)
// ==========================================

export const HALAL_DATA = [
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
    sources: [{ title: "Fatwa on Cultivated Meat", author: "MUI Singapore", link: "https://www.muis.gov.sg/Media/Media-Releases/2024/Fatwa-on-Lab-Grown-Meat" }],
    differingOpinions: "If cells are extracted from a living animal without slaughter, it is considered Maytah (carrion) and Haram.", isNew: true
  },
  {
    id: 'h4', topic: "AI Ethics & Development", category: "Tech, AI, Ethics, Tech, Income", status: "Halal", consensusLevel: "High",
    coreReasoning: "Permissible and encouraged when AI systems preserve human dignity, ensure justice (Adl), avoid harm, and align with Maqasid al-Shariah (Objectives of Islamic Law) and global guidelines.",
    schoolsOfThought: [{ school: "Contemporary Fiqh", ruling: "Permitted with ethical conditions" }],
    sources: [{ title: "AI Ethics in Islamic Contents", author: "M. Jaber Thalgi", link: "https://www.researchgate.net/publication/390995255_AI_Ethics_in_Islamic_Contents_Applications_Per_UNESCO_Recommendations" }], 
    differingOpinions: "AI systems built on biased data, that cause societal harm, or violate human privacy are strictly prohibited.", isNew: true
  },
  {
    id: 'h5', topic: "Equity Investing", category: "Finance", status: "Halal", consensusLevel: "High",
    coreReasoning: "Permissible if the company’s core business is Halal and it passes financial screening ratios (debt levels).",
    schoolsOfThought: [{ school: "AAOIFI", ruling: "Permitted with screening" }],
    sources: [{ title: "Shariah Screening Criteria", author: "AAOIFI Standards", link: "https://aaoifi.com/shariaa-standards/?lang=en" }], differingOpinions: null, isNew: false
  },
  {
    id: 'h6', topic: "Microbial Rennet", category: "Ingredients", status: "Halal", consensusLevel: "High",
    coreReasoning: "Common in cheese; a halal alternative to animal rennet as it is derived from mold/fungi.",
    schoolsOfThought: [{ school: "Consensus", ruling: "Permitted" }],
    sources: [{ title: "Cheese Ingredients Guide", author: "Halal Food Authority", link: "https://halalfoodauthority.com/cheese-rennet/" }], differingOpinions: null, isNew: false
  },
  {
    id: 'h7', topic: "Vinegar", category: "Food, Chemistry", status: "Halal", consensusLevel: "High",
    coreReasoning: "Permissible even if transformed from wine due to the principle of Istihalah (complete chemical transformation).",
    schoolsOfThought: [{ school: "Consensus", ruling: "Permitted" }],
    sources: [{ title: "Hadith on Vinegar", author: "Sahih Muslim", link: "https://sunnah.com/muslim:2052a" }], differingOpinions: null, isNew: false
  },
  {
    id: 'h8', topic: "Locusts", category: "Food, Insects", status: "Halal", consensusLevel: "High",
    coreReasoning: "The only insect explicitly permitted for consumption in Sahih Hadith without requiring slaughter.",
    schoolsOfThought: [{ school: "Consensus", ruling: "Permitted" }],
    sources: [{ title: "Hadith on Two Dead Things", author: "Sunan Ibn Majah", link: "https://sunnah.com/ibnmajah:3218" }], differingOpinions: null, isNew: false
  },
  {
    id: 'h9', topic: "Vanilla Extract", category: "Food, Science", status: "Halal", consensusLevel: "Moderate",
    coreReasoning: "Permissible if the alcohol is used merely as a carrier/solvent and is heavily diluted, rendering it non-intoxicating.",
    schoolsOfThought: [{ school: "IFANCA", ruling: "Permitted (< 0.1% rule)" }],
    sources: [{ title: "Rulings on Trace Alcohol", author: "IFANCA", link: "https://ifanca.org/resources/fatwas/" }], differingOpinions: "Some scholars maintain a zero-tolerance policy on any added alcohol.", isNew: false
  },
  {
    id: 'h10', topic: "Organic Produce", category: "Ethics, Tayyib", status: "Halal", consensusLevel: "High",
    coreReasoning: "Highly encouraged as it aligns with the Quranic concept of Tayyib (Pure, wholesome, and ethical).",
    schoolsOfThought: [{ school: "Consensus", ruling: "Mustahabb (Recommended)" }],
    sources: [{ title: "Quran 2:168", author: "Halalan Tayyiban", link: "https://quran.com/2/168" }], differingOpinions: null, isNew: false
  },
  {
    id: 'h15', topic: "Metaverse Interactions & Commerce", category: "Tech, Ethics", status: "Halal", consensusLevel: "High",
    coreReasoning: "Permissible as a tool for education, business, and social interaction, provided it mirrors real-world Shariah ethics (modesty, honesty).",
    schoolsOfThought: [{ school: "Contemporary Scholars", ruling: "Permitted with ethical safeguards" }],
    sources: [{ title: "Halal Market Trends 2026", author: "Halal Practitioner", link: "https://halalpractitioner.com/halal-market-trends-2026/" }], 
    differingOpinions: "Prohibited if the environment promotes 'Haram' activities like virtual gambling, prohibited avatars, or neglect of real-world religious duties.", isNew: true
  },
  {
    id: 'h16', 
    topic: "Spiritual Healing (Ruqyah)", 
    category: "Lifestyle, Spirituality", 
    status: "Halal", 
    consensusLevel: "Absolute",
    coreReasoning: "Using the recitation of the Quran and authentic prophetic supplications for mental, physical, or spiritual relief is explicitly permitted and encouraged.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Permitted (If using pure text)" }],
    sources: [{ title: "Hadith on Ruqyah", author: "Sahih Muslim 2200", link: "https://sunnah.com/muslim:2200" }],
    differingOpinions: "It is strictly conditional: it must use only the words of Allah or His Prophet, must be in a known language, and the user must believe that the healing comes entirely from Allah, not the words or the person reciting.", 
    isNew: true
  },
];

export const MAKRUH_DATA = [
  {
    id: 'm1', topic: "Smoking/Vaping", category: "Health, Lifestyle", status: "Makruh", consensusLevel: "Disputed",
    coreReasoning: "Many contemporary scholars now rule it 'Haram' due to definitive health harm, while classical views initially deemed it 'Makruh'.",
    schoolsOfThought: [{ school: "Modern Councils", ruling: "Haram" }, { school: "Traditional", ruling: "Makruh (Severely Disliked)" }],
    sources: [{ title: "Fatwa on Tobacco", author: "Dar al-Ifta al-Misriyyah", link: "https://www.dar-alifta.org/en/fatwa/details/6007/smoking" }], differingOpinions: "Increasing consensus is moving towards Haram due to medical evidence of self-harm.", isNew: false
  },
  {
    id: 'm2', topic: "Cryptocurrency", category: "Finance, Tech", status: "Disputed", consensusLevel: "Low",
    coreReasoning: "Disputed; concerns over Gharar (extreme uncertainty) vs. its utility as a decentralized ledger/currency.",
    schoolsOfThought: [{ school: "State Councils (Egypt, Turkey)", ruling: "Haram" }, { school: "Independent Finance Muftis", ruling: "Permitted (Case-by-case)" }],
    sources: [{ title: "Bitcoin Fatwa", author: "Mufti Faraz Adam", link: "https://amanahadvisors.com/shariah-analysis-of-bitcoin/" }], differingOpinions: "Some see it as purely speculative gambling, others as valid digital property (Mal).", isNew: false
  },
  {
    id: 'm3', topic: "NFTs", category: "Finance, Art", status: "Disputed", consensusLevel: "Low",
    coreReasoning: "Depends entirely on the underlying asset. If the art is Halal and it provides utility, it may be permissible. If used for wash-trading/gambling, it is Haram.",
    schoolsOfThought: [{ school: "Contemporary Scholars", ruling: "Neutral (Depends on Use Case)" }],
    sources: [{ title: "NFT Shariah Compliance", author: "Islamic Finance Guru", link: "https://www.islamicfinanceguru.com/articles/are-nfts-halal-or-haram" }], differingOpinions: null, isNew: true
  },
  {
    id: 'm4', topic: "Non-Zabihah Meat", category: "Dietary", status: "Makruh", consensusLevel: "Disputed",
    coreReasoning: "Some scholars allow meat slaughtered by 'People of the Book' (Ahlul Kitab) in Western countries, but many strictly forbid it unless the Islamic Zabihah method is verified.",
    schoolsOfThought: [{ school: "Minority View", ruling: "Permitted (Ahlul Kitab)" }, { school: "Majority View", ruling: "Haram/Makruh without verification" }],
    sources: [{ title: "Quran 5:5 Context", author: "Tafsir Ibn Kathir", link: "https://quran.com/5:5/tafsirs/en-tafisr-ibn-kathir" }], differingOpinions: "The debate centers on whether modern secular slaughterhouses qualify as 'People of the Book'.", isNew: false
  },
{
    id: 'm5', 
    topic: "Non-Fish Seafood (Shrimp, Crab, Lobster)", 
    category: "Food, Dietary", 
    status: "Disputed / Makruh", 
    consensusLevel: "Moderate",
    coreReasoning: "While the Quran permits 'game of the sea,' scholars differ on whether this applies to all creatures or specifically to 'fish' (Samak).",
    schoolsOfThought: [
      { school: "Shafi'i, Maliki, Hanbali", ruling: "Halal" }, 
      { school: "Hanafi", ruling: "Makruh Tahrimi (Prohibitively Disliked)" }
    ],
    sources: [{ title: "Al-Hidayah (Hanafi Manual)", author: "Burhan al-Din al-Marghinani" }],
    differingOpinions: "This is a major point of divergence. Hanafis argue that only fish-shaped creatures are permissible. Because the Hanafi school represents nearly 1/3 of the global Muslim population, the status is categorized as Disputed/Makruh for safety.", 
    isNew: false
  },
  {
    id: 'm6', topic: "Professional Gaming", category: "Lifestyle, Finance", status: "Makruh", consensusLevel: "Moderate",
    coreReasoning: "Permissible unless it involves loot boxes (gambling), explicit content, or leads to the neglect of obligatory prayers and duties.",
    schoolsOfThought: [{ school: "Contemporary Scholars", ruling: "Permitted with strict conditions" }],
    sources: [{ title: "Fatwa on Esports", author: "IslamQA", link: "https://islamqa.info/en/answers/2898/electronic-games" }], differingOpinions: "Many view it as Makruh due to time-wasting (Laghw), even if no explicit Haram is present.", isNew: true
  },
  {
    id: 'm7', topic: "Cosmetic Surgery", category: "Medical, Ethics", status: "Makruh", consensusLevel: "Moderate",
    coreReasoning: "Permissible for reconstructive purposes (accidents/defects). Strictly Haram for pure vanity (altering Allah's creation).",
    schoolsOfThought: [{ school: "Consensus", ruling: "Conditional (Intention-based)" }],
    sources: [{ title: "Rulings on Beautification", author: "Dar al-Ifta", link: "https://www.dar-alifta.org/en/fatwa/details/5993/cosmetic-surgery" }], differingOpinions: null, isNew: false
  },
  {
    id: 'm8', topic: "Snail Mucin", category: "Beauty", status: "Disputed", consensusLevel: "Low",
    coreReasoning: "Disputed based on whether the snail's secretion is considered 'pure' (Tahir) or 'filth' (Najis), and whether insects/mollusks can be utilized externally.",
    schoolsOfThought: [{ school: "Maliki", ruling: "Generally Permitted" }, { school: "Hanafi/Shafi'i", ruling: "Disputed/Disliked" }],
    sources: [{ title: "Halal Cosmetics Standard", author: "SeekersGuidance", link: "https://seekersguidance.org/answers/shafii-fiqh/is-snail-mucin-halal/" }], differingOpinions: "Topical use is less strictly regulated than consumption, leading to diverse opinions.", isNew: true
  },
  {
    id: 'm9', topic: "Buying on Credit", category: "Finance", status: "Makruh", consensusLevel: "High",
    coreReasoning: "Permissible if absolutely no interest is paid (e.g., paying statement in full), but 'Disliked' (Makruh) culturally and textually due to the burden and danger of accumulating debt.",
    schoolsOfThought: [{ school: "Consensus", ruling: "Permitted (If 0% interest)" }],
    sources: [{ title: "Hadith on Debt", author: "Sahih Bukhari", link: "https://sunnah.com/bukhari:2397" }], differingOpinions: null, isNew: false
  },
  {
    id: 'm10', topic: "Raw Garlic/Onion", category: "Social", status: "Makruh", consensusLevel: "High",
    coreReasoning: "Disliked (Makruh) to consume raw before going to the Masjid, out of respect for the angels and other worshippers.",
    schoolsOfThought: [{ school: "Consensus", ruling: "Makruh (Before congregational prayer)" }],
    sources: [{ title: "Prophetic Tradition", author: "Sahih Muslim", link: "https://sunnah.com/muslim:564a" }], differingOpinions: null, isNew: false
  },
  {
    id: 'm11', topic: "Social Media Influencing", category: "Tech, Income, Ethics", status: "Makruh", consensusLevel: "Moderate",
    coreReasoning: "Permissible if the content is educational/wholesome. However, it is often deemed Makruh due to the high risk of 'Riya' (showing off), vanity, and potential exposure of 'Awrah' or private family life for profit.",
    schoolsOfThought: [{ school: "Contemporary Scholars", ruling: "Permitted with strict ethical bounds" }],
    sources: [{ title: "Digital Ethics in Islam", author: "Dr. Yasir Qadhi", link: "https://www.youtube.com/watch?v=5vA_qPZpWbE" }], 
    differingOpinions: "Strictly Haram if it involves promoting prohibited products or deceptive 'lifestyle' marketing.", isNew: true
  },
  {
    id: 'm13', topic: "Hair Transplants", category: "Medical, Beauty", status: "Halal", consensusLevel: "High",
    coreReasoning: "Considered a 'restoration of a defect' rather than 'changing the creation.' This distinguishes it from hair extensions (which are generally prohibited).",
    schoolsOfThought: [{ school: "Consensus", ruling: "Permitted" }],
    sources: [{ title: "Ruling on Hair Transplants", author: "IslamQA", link: "https://islamqa.info/en/answers/103339/is-hair-transplant-halal" }], 
    differingOpinions: "Some maintain caution if the procedure is purely for excessive vanity beyond normal aging, but the majority see it as a medical remedy for hair loss.", isNew: false
  },
  {
    id: 'm14', topic: "Using AI for Creative Work", category: "Tech, Ethics", status: "Disputed", consensusLevel: "Low",
    coreReasoning: "Concerns arise regarding intellectual property (stealing from human artists) and the 'creation of life-like images' (Taswir).",
    schoolsOfThought: [{ school: "Modernist View", ruling: "Permitted (Utility focus)" }, { school: "Traditionalist View", ruling: "Makruh/Haram (Animate beings)" }],
    sources: [{ title: "AI and Islamic Law", author: "Yaheen Institute", link: "https://yaqeeninstitute.org/read/paper/the-ethics-of-artificial-intelligence-an-islamic-perspective" }], 
    differingOpinions: "Universally accepted for non-animate subjects (landscapes, patterns) and scientific utility.", isNew: true
  },
  {
    id: 'm15', topic: "Buying 'Followers' or 'Likes'", category: "Tech, Social", status: "Makruh", consensusLevel: "High",
    coreReasoning: "Considered a form of 'Ghisht' (deception). It presents a false reality to the public and potential business partners.",
    schoolsOfThought: [{ school: "Consensus", ruling: "Makruh / Haram (Deceptive)" }],
    sources: [{ title: "Deception in Trade", author: "Sahih Muslim 102", link: "https://sunnah.com/muslim:102" }], 
    differingOpinions: "If used for technical testing in a closed environment it is fine, but as a public metric, it is viewed as a breach of Islamic honesty.", isNew: true
  },
  {
    id: 'm16', topic: "Animal Gelatin", category: "Food, Medicine, Ingredients", status: "Disputed", consensusLevel: "Moderate",
    coreReasoning: "Haram if from swine or non-Zabihah animals. Scholars debate 'Istihalah' (chemical transformation)—whether the process turns it into a new, pure substance.",
    schoolsOfThought: [{ school: "Strict View", ruling: "Prohibited unless Zabihah" }, { school: "Istihalah View", ruling: "Permitted if fully transformed" }],
    sources: [{ title: "Gelatin Pantry Guide 2026", author: "Halal-Savvy RD", link: "https://halalmui.org/en/halal-skincare-trends-the-importance-of-checking-ingredients-and-processing/" }], 
    differingOpinions: "Mainstream certifiers (MUI, JAKIM) generally avoid non-Zabihah gelatin to stay on the side of caution.", isNew: false
  },
  {
    id: 'm17', 
    topic: "Botox and Dermal Fillers", 
    category: "Beauty, Medical, Cosmetics", 
    status: "Disputed / Conditional", 
    consensusLevel: "Moderate",
    coreReasoning: "Permissible if used medically (migraines, muscle spasms) or to slow/reverse premature aging and tissue defects, because temporary cosmetic injections do not permanently alter Allah's creation (Taghyir).",
    schoolsOfThought: [
      { school: "Contemporary Majority", ruling: "Permissible with conditions" },
      { school: "Traditionalist View", ruling: "Makruh / Prohibited if for dramatic alteration" }
    ],
    sources: [{ title: "Rulings on Cosmetic Injections", author: "Dar al-Ifta al-Misriyyah", link: "https://www.dar-alifta.org/en/fatwa/details/6261/botox-injections" }],
    differingOpinions: "Strictly prohibited (Haram) if the intention is extreme, unnatural vanity (e.g., changing facial structure to match viral social media trends or exaggerating features beyond normal human proportions). The ingredients must also be sourced from pure (Tahir) compounds.", 
    isNew: true
  },
  {
    id: 'm18', 
    topic: "Animal Rennet in Cheese", 
    category: "Food, Ingredients, Dietary", 
    status: "Disputed", 
    consensusLevel: "Moderate",
    coreReasoning: "The permissibility hinges on whether enzymes extracted from the stomach of a non-Zabiha animal carry the impurity of 'carrion' (Maytah). If from a pig, it is universally prohibited.",
    schoolsOfThought: [
      { school: "Hanafi / Ja'fari", ruling: "Permitted (Halal)" }, 
      { school: "Shafi'i / Maliki / Hanbali", ruling: "Prohibited (Haram) if non-Zabiha" }
    ],
    sources: [{ title: "Is Rennet Halal?", author: "Halal Code Check Guide", link: "https://halalcodecheck.com/blog/is-rennet-halal/" }],
    differingOpinions: "Imam Abu Hanifa ruled that rennet itself does not contain flowing blood ('life') and therefore cannot 'die' or become impure when the animal dies. The other three schools argue it becomes contaminated by the stomach's moisture. Note: The shortcut for consumers is to look for 'Microbial Rennet' (Mikrobielles Lab) or 'Suitable for Vegetarians' labels, which are universally Halal.", 
    isNew: true
  },
  {
    id: 'm19', 
    topic: "Polygyny Restrictions in Marriage Contracts (Nikah)", 
    category: "Social, Legal, Marriage", 
    status: "Valid / Conditional", 
    consensusLevel: "Moderate",
    coreReasoning: "A marriage contract is based on mutually agreed conditions. The Prophet (pbuh) said: 'The conditions most deserving to be fulfilled are those by which you make marital relations lawful.' If a husband agrees not to take another wife, he must honor it.",
    schoolsOfThought: [
      { school: "Hanbali / Modern Family Laws", ruling: "Stipulation is fully binding; gives wife right to divorce if broken" }, 
      { school: "Hanafi / Shafi'i / Maliki", ruling: "The stipulation is invalid/void, but the core marriage remains valid" }
    ],
    sources: [{ title: "Hadith on Marriage Conditions", author: "Sahih Bukhari 5151", link: "https://sunnah.com/bukhari:5151" }],
    differingOpinions: "This is a major practical split. In the Hanbali school (and modern family codes in countries like Jordan, Morocco, and Egypt), breaking this condition gives the wife the immediate right to a no-fault judicial divorce with full financial dues. The Hanafi school traditionally argues you cannot stipulate away a general right granted by God, though they allow a workaround where the husband grants the wife the automatic right to divorce herself (Tafwid al-Talaq) if he marries again.", 
    isNew: true
  },
];

export const HARAM_DATA = [
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
    sources: [{ title: "Hadith on Trade", author: "Sunan an-Nasa'i", link: "https://sunnah.com/nasai:4613" }], differingOpinions: null, isNew: false
  },
  {
    id: 'hr6', topic: "Cochineal (E120)", category: "Ingredients, Beauty", status: "Haram", consensusLevel: "High",
    coreReasoning: "Red dye made from crushed bugs. Forbidden for consumption in the majority of traditional schools.",
    schoolsOfThought: [{ school: "Hanafi/Shafi'i", ruling: "Haram" }, { school: "Maliki", ruling: "Permitted" }],
    sources: [{ title: "Ingredient Guide", author: "SANHA", link: "https://www.sanha.org.za/a/index.php/2014-04-18-09-51-17/faqs/1874-q-are-products-containing-carmine-halal" }], differingOpinions: "Maliki school permits it, but standard Halal certifiers generally reject it.", isNew: false
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
    sources: [{ title: "Hadith on Fortune Tellers", author: "Sahih Muslim", link: "https://sunnah.com/muslim:2230" }], differingOpinions: null, isNew: false
  },
  {
    id: 'hr9', topic: "Carnivorous Animals", category: "Food", status: "Haram", consensusLevel: "Absolute",
    coreReasoning: "Animals with fangs (lions, wolves) or birds with talons (eagles, hawks) are strictly prohibited for consumption.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Haram" }],
    sources: [{ title: "Hadith on Dietary Laws", author: "Sahih Bukhari", link: "https://sunnah.com/bukhari/72/77" }], differingOpinions: null, isNew: false
  },
{
    id: 'hr10', 
    topic: "Commercial Insurance", 
    category: "Finance", 
    status: "Haram", 
    consensusLevel: "High",
    coreReasoning: "Standard commercial insurance is prohibited by major bodies due to elements of Riba (interest), Gharar (excessive uncertainty/risk), and Maysir (gambling-like structures).",
    schoolsOfThought: [{ school: "IFA (OIC) & Majority", ruling: "Haram (Commercial/Conventional)" }],
    sources: [{ title: "Resolution on Insurance", author: "Islamic Fiqh Academy", link: "https://iifa-aifi.org/en/1769.html" }], 
    differingOpinions: "Takaful (cooperative insurance) is the Halal alternative. Note: Conventional insurance is permitted under the principle of 'Darurah' (necessity) ONLY when legally mandated by the state, such as mandatory third-party auto or health insurance.", 
    isNew: false
  },
  {
    id: 'hr11', topic: "Non-Consensual AI Media (Deepfakes)", category: "Tech, Ethics", status: "Haram", consensusLevel: "Absolute",
    coreReasoning: "Creating or sharing intimate or deceptive images of others without consent is a grave violation of dignity (Karamah), privacy, and truth. It falls under slander (Ghibah) and spreading obscenity.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Haram" }],
    sources: [{ title: "Deepfakes and Consent: 2026 Legal & Shariah Overview", author: "Queen Mary University / Islamic Ethics Board", link: "https://www.qmul.ac.uk/lac/our-legal-blog/2026-blogs/items/deepfakes-and-consent-the-law-finally-catches-up-.html" }], 
    differingOpinions: null, isNew: true
  },
  {
    id: 'hr12', topic: "Predatory High-Frequency Trading (HFT)", category: "Finance, Tech", status: "Haram", consensusLevel: "High",
    coreReasoning: "Prohibited when it involves 'front-running' orders, creating artificial market volatility, or using 'Dark Pools' to gain an unfair information advantage over the general public, violating the principle of fair trade.",
    schoolsOfThought: [{ school: "Contemporary Finance Scholars", ruling: "Haram (if predatory)" }],
    sources: [{ title: "HFT and Dark Pools in Islamic Law", author: "Carter-Ruck 2026 Analysis", link: "https://www.carter-ruck.com/blog/high-frequency-trading-and-dark-pools/" }], 
    differingOpinions: "Basic algorithmic trading for efficiency is permitted; the status becomes Haram only when the 'unlawful means' of market manipulation are employed.", isNew: true
  },
  {
    id: 'hr13', topic: "Deceptive Dropshipping", category: "Finance, Commerce", status: "Haram", consensusLevel: "Moderate",
    coreReasoning: "Strictly prohibited if the seller hides the fact that they do not own the stock, provides misleading delivery times, or sells 'low-quality' items as premium, violating the Prophetic command: 'Do not sell what you do not possess.'",
    schoolsOfThought: [{ school: "Majority of Scholars", ruling: "Haram (without transparency)" }],
    sources: [{ title: "Is Dropshipping Halal or Haram?", author: "AppScenic Ethics Guide 2026", link: "https://appscenic.com/blog/is-dropshipping-haram/" }], 
    differingOpinions: "Can be rendered Halal (Permitted) if the contract is structured as a 'Salami' or 'Agency' (Wakalah) agreement where the customer knows the seller is a middleman.", isNew: false
  },
  {
    id: 'hr14', topic: "Changing Creation (Extreme Aesthetics)", category: "Medical, Beauty", status: "Haram", consensusLevel: "High",
    coreReasoning: "Permanent procedures done solely for vanity—such as changing nose shape for fashion, lip fillers to match trends, or 'fox eye' lifts—are considered an impermissible alteration of Allah's design.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Haram (for vanity)" }],
    sources: [{ title: "Halal Skincare & Aesthetics Trends 2026", author: "MUI Singapore", link: "https://halalmui.org/en/halal-skincare-trends-the-importance-of-checking-ingredients-and-processing/" }], 
    differingOpinions: "Strictly permitted (Halal) for reconstructive surgery following accidents, burns, or congenital defects to restore 'normal' function or appearance.", isNew: false
  },
  {
    id: 'hr15', topic: "Intoxication-based VR/Gaming", category: "Tech, Lifestyle", status: "Haram", consensusLevel: "High",
    coreReasoning: "Virtual environments or games designed to simulate the experience of 'getting high,' virtual alcohol consumption, or explicit 'Haram' behavior are prohibited as they desensitize the heart to sin (Iman).",
    schoolsOfThought: [{ school: "Contemporary Scholars", ruling: "Haram" }],
    sources: [{ title: "What is Halal Browsing?", author: "Kahf Browser 2026 Guide", link: "https://kahfbrowser.com/a-muslims-guide-to-safe-internet/" }], 
    differingOpinions: null, isNew: true
  },
  {
    id: 'hr16', 
    topic: "Anabolic Steroids / Performance-Enhancing Drugs (PEDs)", 
    category: "Health, Lifestyle, Sports", 
    status: "Haram", 
    consensusLevel: "High",
    coreReasoning: "Prohibited due to the definitive, severe physical and psychological self-harm they cause, alongside the elements of fraud/cheating in sports. The Quran states: 'And make not your own hands contribute to your destruction' (2:195).",
    schoolsOfThought: [{ school: "Contemporary Consensus", ruling: "Haram (for non-medical enhancement)" }],
    sources: [{ title: "Ruling on PEDs in Sports", author: "Jordan Iftaa Council (Fatwa 3649)", link: "https://www.aliftaa.jo/research-fatwa-english/3649/What-is-the-ruling-of-sharia-on-taking-PEDS-in-sports" }], 
    differingOpinions: "Universally permitted (Halal) under the principle of 'Darurah' (necessity) if legally prescribed by a licensed physician to treat a legitimate medical condition (e.g., hormone deficiencies, severe muscle wasting, or autoimmune therapy).", 
    isNew: true
  },
  {
    id: 'hr17', 
    topic: "Wearing Gold (For Men)", 
    category: "Lifestyle, Fashion", 
    status: "Haram", 
    consensusLevel: "Absolute",
    coreReasoning: "Explicitly forbidden for males by Prophetic decree to prevent excessive vanity, arrogance, and material extravagance. The prohibition applies to jewelry, watches, rings, and clothing woven with gold.",
    schoolsOfThought: [
      { school: "Absolute Consensus", ruling: "Haram for Men / Halal for Women" }
    ],
    sources: [{ title: "Hadith on Gold and Silk", author: "Sunan an-Nasa'i 5144", link: "https://sunnah.com/nasai:5144" }],
    differingOpinions: "White gold is also prohibited if it is made by alloying real yellow gold with other metals. However, alternative premium metals like Platinum, Titanium, and Stainless Steel are completely permissible for men. Dental or medical gold use is permitted if no viable alternative exists.", 
    isNew: false
  },
  {
    id: 'hr18', 
    topic: "Superstitious Exorcisms & Folk Magic", 
    category: "Lifestyle, Spirituality", 
    status: "Haram", 
    consensusLevel: "Absolute",
    coreReasoning: "Practices involving physical abuse, summoning entities, writing talismans/amulets with hidden symbols, or charging money for magical 'cleansings' are strictly forbidden and fall under Shirk (associating partners with Allah).",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Strictly Prohibited" }],
    sources: [{ title: "Hadith on Spells and Amulets", author: "Sunan Abi Dawud 3883", link: "https://sunnah.com/abudawud:3883" }],
    differingOpinions: "Mainstream Islamic scholarship mandates that physical and neurological symptoms (like seizures, psychosis, or delirium) must be treated by medical and psychiatric professionals first. Relying on supernatural folk-healers while ignoring medical science is heavily censured.", 
    isNew: true
  },
];

// Note: Ensure you update your main DATABASE export variable to combine these if you separated them!
// export const DATABASE = [...HALAL_DATA, ...MAKRUH_DATA, ...HARAM_DATA];

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
    differingOpinions: "None, unless the saliva is mixed with external blood or food particles, in which case swallowing it deliberately breaks the fast."
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
    differingOpinions: "The Maliki school holds that the fast itself is technically invalidated and must be made up, even if there is no sin."
  },
  { 
    id: 'r4', topic: "Vomiting Unintentionally", status: "DOES NOT BREAK", consensusLevel: "Absolute", category: "Medical/Illness",
    coreReasoning: "Sudden, uncontrollable vomiting does not break the fast. Intentional vomiting, however, does break it.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Hadith on Vomiting", author: "Sunan Abi Dawud" }],
    differingOpinions: null
  },
  { 
    id: 'r5', topic: "Medical Injections (Non-Nutritional)", status: "DOES NOT BREAK", consensusLevel: "High", category: "Medical",
    coreReasoning: "Vaccines, anesthetics, insulin, or penicillin that do not provide nutrition are permitted as they do not enter open body cavities like food.",
    schoolsOfThought: [{ school: "Contemporary Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Medical Rulings on Fasting", author: "Islamic Fiqh Academy" }],
    differingOpinions: "Only nutritional drips (glucose/saline) are prohibited."
  },
  { 
    id: 'r6', topic: "IV Drips / Nutritional Injections", status: "BREAKS FAST", consensusLevel: "High", category: "Medical",
    coreReasoning: "Receiving vitamins, saline, or sustenance intravenously directly nourishes the body, defeating the purpose of the fast.",
    schoolsOfThought: [{ school: "Contemporary Consensus", ruling: "Breaks Fast" }],
    sources: [{ title: "Fatwa on IV Drips", author: "Dar al-Ifta" }],
    differingOpinions: null
  },
  { 
    id: 'r7', topic: "Smoking / Vaping", status: "BREAKS FAST", consensusLevel: "Absolute", category: "Lifestyle",
    coreReasoning: "Inhaling smoke or vapor introduces physical particulate matter directly into the body cavity.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Breaks Fast" }],
    sources: [{ title: "Fasting & Smoking", author: "AMJA" }],
    differingOpinions: null
  },
  { 
    id: 'r8', topic: "Using Asthma Inhalers", status: "DISPUTED", consensusLevel: "Low", category: "Medical",
    coreReasoning: "Difference depends on mechanics: some view it as gas opening lungs (Valid), others argue liquid particles reach the stomach (Breaks).",
    schoolsOfThought: [{ school: "Modern Majority", ruling: "Does Not Break" }, { school: "Traditional View", ruling: "Breaks Fast" }],
    sources: [{ title: "Asthma & Fasting", author: "IslamQA" }],
    differingOpinions: "Permissiveness often equates the particles to residual water left in the mouth after Wudu."
  },
  { 
    id: 'r9', topic: "Brushing Teeth (Toothpaste)", status: "MAKRUH", consensusLevel: "Moderate", category: "Hygiene",
    coreReasoning: "Permissible if nothing is swallowed, but disliked (Makruh) due to the risk of accidental intake.",
    schoolsOfThought: [{ school: "Majority", ruling: "Makruh (Disliked)" }],
    sources: [{ title: "Use of Miswak & Paste", author: "SeekersGuidance" }],
    differingOpinions: "Recommended to use plain Miswak during fasting and save paste for night hours."
  },
  { 
    id: 'r10', topic: "Blood Withdrawal (Tests/Donation/Hijama)", status: "DISPUTED", consensusLevel: "Moderate", category: "Medical",
    coreReasoning: "The exit of blood generally does not break the fast. However, it is disliked if it induces severe weakness.",
    schoolsOfThought: [{ school: "Majority", ruling: "Does Not Break" }, { school: "Hanbali", ruling: "Cupping (Hijama) Breaks Fast" }],
    sources: [{ title: "Hadith on Cupper and Cupped", author: "Sunan an-Nasa'i" }],
    differingOpinions: "The Hanbali school strictly considers cupping a fast-breaker based on specific narrations."
  },
  { 
    id: 'r11', topic: "Using Eye/Ear Drops", status: "DOES NOT BREAK", consensusLevel: "High", category: "Medical",
    coreReasoning: "The eye and ear are not considered open pathways to the stomach. Negligible taste in the throat is ignored.",
    schoolsOfThought: [{ school: "Majority", ruling: "Does Not Break" }],
    sources: [{ title: "Fatawa al-Lajnah ad-Daimah", author: "Saudi Council" }],
    differingOpinions: "Older Maliki/Hanafi texts were more cautious if taste was felt, but modern medicine clarifies anatomy."
  },
  { 
    id: 'r12', topic: "Nasal Drops/Sprays", status: "BREAKS FAST", consensusLevel: "Moderate", category: "Medical",
    coreReasoning: "The nose is a direct pathway to the throat and stomach. Prophet (pbuh) warned against thorough sniffing during Wudu while fasting.",
    schoolsOfThought: [{ school: "Majority Consensus", ruling: "Breaks Fast" }],
    sources: [{ title: "Bulugh al-Maram", author: "Ibn Hajar" }],
    differingOpinions: "Only permissible if it is strictly a dry spray that does not reach the throat, though this is rare."
  },
  { 
    id: 'r13', topic: "Applying Perfume / Oud", status: "DOES NOT BREAK", consensusLevel: "Absolute", category: "Personal Care",
    coreReasoning: "Smelling scents does not introduce a physical body into the stomach. Avoid inhaling heavy incense smoke directly.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Rulings on Fasting", author: "Ibn Uthaymeen" }],
    differingOpinions: null
  },
  { 
    id: 'r14', topic: "Rinsing Mouth / Wudu", status: "DOES NOT BREAK", consensusLevel: "Absolute", category: "Hygiene",
    coreReasoning: "Rinsing is required for Wudu. Accidental swallowing is pardoned as intent was missing. Excessive gurgling is discouraged.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Al-Muwatta", author: "Imam Malik" }],
    differingOpinions: "The Maliki school holds that even accidental intake during Wudu requires a makeup (Qada)."
  },
  { 
    id: 'r15', topic: "Applying Makeup / Skin Cream", status: "DOES NOT BREAK", consensusLevel: "High", category: "Personal Care",
    coreReasoning: "Absorption through pores (including nicotine patches) does not enter via an open cavity to the stomach.",
    schoolsOfThought: [{ school: "Contemporary Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Modern Fiqh Issues", author: "Wahbah al-Zuhayli" }],
    differingOpinions: null
  },
  { 
    id: 'r16', topic: "Bleeding Gums", status: "DOES NOT BREAK", consensusLevel: "High", category: "Natural Actions",
    coreReasoning: "Spontaneous bleeding is pardoned. Deliberately swallowing the blood invalidates the fast.",
    schoolsOfThought: [{ school: "Majority Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Fatawa Islamiyyah", author: "Ibn Baz" }],
    differingOpinions: "If blood overwhelms the saliva, it must be spat out."
  },
  { 
    id: 'r17', topic: "Tasting Food (Cooking)", status: "MAKRUH", consensusLevel: "Moderate", category: "Dietary",
    coreReasoning: "Permissible to check seasoning with the tongue if nothing is swallowed. Disliked without reason.",
    schoolsOfThought: [{ school: "Majority", ruling: "Permissible with Caution" }],
    sources: [{ title: "Tafsir of Ibn Abbas", author: "Ibn Abbas" }],
    differingOpinions: null
  },
  { 
    id: 'r18', topic: "Using Oxygen Tanks", status: "DOES NOT BREAK", consensusLevel: "High", category: "Medical",
    coreReasoning: "Pure oxygen is air and contains no nutritional particles or liquids.",
    schoolsOfThought: [{ school: "Contemporary Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Permanent Committee Ifta", author: "General Secretariat" }],
    differingOpinions: null
  },
  { 
    id: 'r19', topic: "Swimming / Bathing", status: "DOES NOT BREAK", consensusLevel: "High", category: "Hygiene",
    coreReasoning: "Submerging the body is permissible. Fast only breaks if water enters via mouth/nose and reaches the stomach.",
    schoolsOfThought: [{ school: "Majority Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Sunan al-Kubra", author: "Al-Bayhaqi" }],
    differingOpinions: "Diving without equipment is discouraged due to risk of intake."
  },
  { 
    id: 'r20', topic: "Endoscopy (Stomach)", status: "DISPUTED", consensusLevel: "Low", category: "Medical",
    coreReasoning: "Entry of an object without nutritional fluids is debated. Some say any object breaks it; others say only nutrition matters.",
    schoolsOfThought: [{ school: "Classical Schools", ruling: "Breaks Fast" }, { school: "Contemporary View", ruling: "Does Not Break" }],
    sources: [{ title: "Journal of Islamic Fiqh Academy", author: "IFA-OIC" }],
    differingOpinions: null
  },
  { 
    id: 'r21', topic: "Dental Fillings / Extraction", status: "DOES NOT BREAK", consensusLevel: "High", category: "Medical",
    coreReasoning: "Teeth treatment is permissible as long as blood and dental materials are not swallowed.",
    schoolsOfThought: [{ school: "Contemporary Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Fatawa on Medical Issues", author: "Ibn Baz" }],
    differingOpinions: null
  },
  { 
    id: 'r22', topic: "Inhaling Dust / Smoke", status: "DOES NOT BREAK", consensusLevel: "Absolute", category: "Accidental",
    coreReasoning: "Unavoidable airborne particles (flour, dust, smoke) entering the throat are pardoned.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Al-Jami' li Ahkam al-Quran", author: "Al-Qurtubi" }],
    differingOpinions: null
  },
  { 
    id: 'r23', topic: "Suppositories / Enemas", status: "DISPUTED", consensusLevel: "Low", category: "Medical",
    coreReasoning: "Modernists argue only the digestive tract (mouth/nose) matters; traditionalists view any lower cavity entry as a breaker.",
    schoolsOfThought: [{ school: "Traditional Schools", ruling: "Breaks Fast" }, { school: "Modernists", ruling: "Does Not Break" }],
    sources: [{ title: "Majmu’ al-Fatawa", author: "Ibn Taymiyyah" }],
    differingOpinions: null
  },
  { 
    id: 'r24', topic: "Applying Henna / Hair Dye", status: "DOES NOT BREAK", consensusLevel: "Absolute", category: "Personal Care",
    coreReasoning: "External applications are not eating or drinking and do not enter the stomach.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Fatawa", author: "Al-Albani" }],
    differingOpinions: null
  },
  { 
    id: 'r25', topic: "Using Mouthwash", status: "MAKRUH", consensusLevel: "Moderate", category: "Hygiene",
    coreReasoning: "Permissible if not swallowed, but extremely high risk makes it disliked.",
    schoolsOfThought: [{ school: "Majority", ruling: "Makruh (Disliked)" }],
    sources: [{ title: "Contemporary Fatawa", author: "Taqi Usmani" }],
    differingOpinions: null
  },
  { 
    id: 'r26', topic: "Wet Dreams (Nocturnal Emission)", status: "DOES NOT BREAK", consensusLevel: "Absolute", category: "Natural Actions",
    coreReasoning: "Since the act is involuntary and occurs during sleep, the fast remains valid.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Does Not Break" }],
    sources: [{ title: "Sahih Muslim 1103", author: "Imam Muslim" }],
    differingOpinions: null
  },
  { 
    id: 'r27', topic: "Nitroglycerin Tablets (Heart)", status: "BREAKS FAST", consensusLevel: "Moderate", category: "Medical",
    coreReasoning: "Sublingual tablets dissolve and residue is inevitably swallowed into the throat.",
    schoolsOfThought: [{ school: "Modern Majority", ruling: "Breaks Fast" }],
    sources: [{ title: "Fiqh of Fasting", author: "Qaradawi" }],
    differingOpinions: null
  },
  { 
    id: 'r28', topic: "General Rule: Necessity (Darurah)", status: "CORE PRINCIPLE", consensusLevel: "Absolute", category: "Medical",
    coreReasoning: "Islam prioritizes life. If medication is needed for health, it is obligatory to break the fast and makeup later.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Health takes precedence" }],
    sources: [{ title: "Quran 2:185", author: "Surah Al-Baqarah" }],
    differingOpinions: null
  },
  { 
    id: 'r29', topic: "Sexual Intercourse", status: "BREAKS FAST", consensusLevel: "Absolute", category: "Legal/Social",
    coreReasoning: "Invalidates fast immediately and carries the penalty of Kaffarah (expiation).",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Breaks Fast + Kaffarah" }],
    sources: [{ title: "Quran 2:187", author: "Surah Al-Baqarah" }],
    differingOpinions: "Expiation is fasting 60 consecutive days or feeding 60 needy people."
  },
  { 
    id: 'r30', topic: "Intentional Vomiting", status: "BREAKS FAST", consensusLevel: "High", category: "Medical/Illness",
    coreReasoning: "Deliberately inducing vomiting nullifies the fast.",
    schoolsOfThought: [{ school: "Majority Consensus", ruling: "Breaks Fast" }],
    sources: [{ title: "Hadith", author: "Sunan al-Tirmidhi" }],
    differingOpinions: null
  },
  { 
    id: 'r31', topic: "Menstruation / Postpartum Bleeding", status: "BREAKS FAST", consensusLevel: "Absolute", category: "Biological",
    coreReasoning: "Onset of bleeding immediately invalidates fast; it is forbidden to continue. Makeup is required.",
    schoolsOfThought: [{ school: "Absolute Consensus", ruling: "Breaks Fast (Makeup Required)" }],
    sources: [{ title: "Sahih Bukhari 304", author: "Imam Bukhari" }],
    differingOpinions: "Missed fasts must be made up; missed prayers are pardoned."
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
      topic: "Hitting Wives",
      claim: '"The Quran allows hitting wives (4:34)."',
      context: 'Context: Modern scholarship and Prophetic Hadith clarify this as a "symbolic tap" with a miswak (toothbrush) that leaves no mark, used only as a last resort.',
      elaboration: "The verse outlines a step-by-step process for severe marital rebellion (Nushuz). The Prophet Muhammad explicitly restricted the final step to a symbolic tap that 'leaves no mark' (Darban Ghayra Mubarrih). According to the authoritative commentary of Ibn Abbas, the Prophet’s companion, this is understood as being done with a miswak (a small twig used as a toothbrush) to convey a psychological message rather than physical pain. The Prophet Muhammad never struck a woman in his life and stated: 'The best of you are those who are best to their wives.'",
      sources: [
        { title: "Quran 4:34", author: "Surah An-Nisa", link: "https://quran.com/4/34" },
      ],
      contemporaryScholars: [
        {
          name: "Dr. Yasir Qadhi",
          opinion: "The Prophet never hit a woman, and his restriction of the 'tap' to a miswak effectively makes it a symbolic gesture of frustration rather than a physical assault.",
          source: { title: "Explanation of Surah An-Nisa", link: "https://www.youtube.com/results?search_query=yasir+qadhi+hitting+wives" }
        },
        {
        name: "Sheikh Assim Al-Hakeem",
        opinion: "This final resort is a sentimental reprimand, not a physical one, meant to open a spouse's eyes to the severity of their actions. Following the Prophet's restriction, it must be done with a miswak twig, avoiding the face and leaving no mark, bone fracture, or blood.",
        source: { title: "Counseling on Surah An-Nisa", author: "Sheikh Assim Al-Hakeem", link: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID" }
        },
        {
        name: "Dr. Zakir Naik",
        opinion: "The Arabic word 'Dharaba' means beat her lightly as a last resort and ultimatum. It is a symbolic beating—in today’s age, like using a handkerchief—which surely will not hurt, must not be on the face, and must not leave a mark.",
        source: { title: "Response to Allegations on Wife Beating", author: "Dr. Zakir Naik", link: "https://www.youtube.com/shorts/w_hm6adoTxM"}
        },
        {
        name: "Mohammed Hijab",
        opinion: "The verse is not telling a man how to 'beat up' his wife, but rather providing a framework to de-escalate potential conflict. Because men are biologically more prone to aggressive behavior, these three steps act as a 'cap' or refinement of that default position. It serves as a physical recourse for extreme situations—such as self-defense or protecting a child—where even modern norms recognize the necessity of intervention.",
        source: { title: "The 'Wife Beating' verse explained", author: "Mohammed Hijab", link: "https://www.youtube.com/watch?v=6DcF4F4US8Q" }
        },
        {
        name: "Dr. Jamal Badawi",
        opinion: "The tap with a miswak is a symbolic gesture aimed at psychological correction during a breakdown in the marital relationship. It is legally restricted to be painless and leave no mark, serving as a 'last resort' warning before the relationship is terminated.",
        source: { title: "Gender Equity in Islam", author: "Dr. Jamal Badawi", link: "https://www.islamland.com/uploads/books/The-Status-of-Women-in-Islam-Jamal-Badawi-_eng.pdf" }
        }

      ]
  },
  {
      topic: "Aisha's Age",
      claim: '"The Prophet Muhammad married Aisha when she was 6 and consummated at 9."',
      context: "Context: While the primary Hadith narrations mention these ages, contemporary and classical scholars analyze this through historical context, social norms of the 7th century, and alternative chronological calculations.",
      elaboration: "Primary narrations in Sahih Bukhari and Muslim state Aisha was married at 6 and the marriage was consummated at 9. Scholars emphasize three main points: First, 7th-century biological maturity was the standard for adulthood across cultures. Second, Aisha is recorded as being a highly intelligent, proactive leader and a primary source of Islamic law, suggesting she was considered a mature individual by her society. Third, some modern researchers argue for a higher age based on the age of her sister Asma and the timeline of the Hijrah, though the age of 9 remains the most widely cited in traditional texts.",
      sources: [
        { title: "Sahih al-Bukhari 5134", author: "Imam Bukhari", link: "https://sunnah.com/bukhari:5134" },
        { title: "Sahih Muslim 1422", author: "Imam Muslim", link: "https://sunnah.com/muslim:1422" }
      ],
      contemporaryScholars: [
        {
          name: "Sheikh Assim Al-Hakeem",
          opinion: "We do not apologize for the texts. At that time, in that environment, girls matured much faster than in the modern West. It was a normal, legal marriage at the time, and Aisha was exceptionally happy and intellectually developed, eventually becoming one of the greatest scholars of Islam.",
          source: { title: "Counseling on Surah An-Nisa", author: "Sheikh Assim Al-Hakeem" }
        },
        {
          name: "Dr. Omar Suleiman",
          opinion: "The marriage of Aisha must be understood within the socio-historical framework of the time where maturity was the marker for adulthood, not a modern chronological number. Aisha's own narrations depict a marriage of deep intellectual companionship and love, and her later role as a premiere jurist proves she was a fully developed and empowered individual.",
          source: { title: "Aisha: The Mother of the Believers", author: "Dr. Omar Suleiman", link: "https://www.youtube.com/watch?v=5gDTh-6X9vo" }
        },
        {
          name: "Dr. Jamal Badawi",
          opinion: "In the 7th century, the 'age of majority' was determined by physical and mental maturity, not a specific number. Aisha was already engaged to someone else before the Prophet, showing she was already considered eligible for marriage by her society's standards.",
          source: { title: "The Status of Women in Islam", author: "Dr. Jamal Badawi", link: "https://www.islamland.com/uploads/books/The-Status-of-Women-in-Islam-Jamal-Badawi-_eng.pdf" }
        },
        {
          name: "Dr. Zakir Naik",
          opinion: "Marriage at that time was based on puberty and maturity. History shows no contemporary critics—not even the enemies of the Prophet—objected to the age, because it was the absolute global norm 1400 years ago. One cannot judge 7th-century morality by 21st-century socially constructed age limits.",
          source: { title: "Response to Allegations on Wife Beating", author: "Dr. Zakir Naik" }
        }
      ]
    },
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
  }
];