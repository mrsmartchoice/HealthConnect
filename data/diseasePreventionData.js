// data/diseasePreventionData.js
const diseasePreventionTips = [
    {
        id: 1,
        title: "Prevent Flu",
        description: "Wash your hands regularly, avoid close contact with sick individuals, and get vaccinated.",
        category: "Preventable Disease"
    },
    {
        id: 2,
        title: "COVID-19 Vaccination",
        description: "Stay up-to-date with COVID-19 vaccinations to reduce risk and spread of severe illness.",
        category: "Vaccination Reminder"
    },
    {
        id: 3,
        title: "Prevent Malaria",
        description: "Sleep under insecticide-treated nets, use mosquito repellents.",
        category: "Vector-Borne Disease"
    },
    {
        id: 4,
        title: "Prevent Tuberculosis (TB)",
        description: "Get vaccinated with the BCG vaccine, maintain good hygiene, and avoid close contact with infected.",
        category: "Airborne Disease"
    },
    {
        id: 5,
        title: "Prevent Cholera",
        description: "Drink clean water, wash your hands frequently, and ensure proper food hygiene.",
        category: "Waterborne Disease"
    },
    {
        id: 6,
        title: "Prevent Hepatitis B",
        description: "Get vaccinated, avoid sharing needles, and practice safe sexual behaviors.",
        category: "Viral Infection"
    },
    {
        id: 7,
        title: "Prevent HIV/AIDS",
        description: "Use condoms during sexual activity, avoid sharing needles, and get regular health checkups.",
        category: "Sexually Transmitted Disease"
    },
    {
        id: 8,
        title: "Prevent Diabetes",
        description: "Maintain a healthy diet, engage in regular physical activity, and monitor your blood sugar levels.",
        category: "Chronic Disease"
    },
    {
        id: 9,
        title: "Prevent Hypertension",
        description: "Limit salt intake, exercise regularly, and avoid excessive alcohol consumption.",
        category: "Chronic Disease"
    },
    {
        id: 10,
        title: "Prevent Obesity",
        description: "Adopt a balanced diet, stay physically active, and monitor your body weight regularly.",
        category: "Lifestyle Disease"
    },
    {
        id: 11,
        title: "Prevent Dengue Fever",
        description: "Use mosquito repellents, wear protective clothing, and eliminate mosquito breeding grounds.",
        category: "Vector-Borne Disease"
    },
    {
        id: 12,
        title: "Prevent Typhoid",
        description: "Consume only clean water and hygienically prepared food.",
        category: "Waterborne Disease"
    },
    {
        id: 13,
        title: "Prevent Measles",
        description: "Ensure vaccination with the MMR vaccine (Measles, Mumps, and Rubella).",
        category: "Vaccine-Preventable Disease"
    },
    {
        id: 14,
        title: "Prevent Pneumonia",
        description: "Get vaccinated, maintain good hygiene, and avoid smoking.",
        category: "Respiratory Infection"
    },
    {
        id: 15,
        title: "Prevent Cervical Cancer",
        description: "Get the HPV vaccine and schedule regular Pap smear tests.",
        category: "Cancer Prevention"
    },
    {
        id: 16,
        title: "Prevent Stroke",
        description: "Maintain a healthy lifestyle, manage blood pressure, and avoid smoking.",
        category: "Chronic Disease"
    },
    {
        id: 17,
        title: "Prevent Kidney Stones",
        description: "Stay hydrated, reduce salt intake, and avoid excessive protein consumption.",
        category: "Dietary Prevention"
    },
    {
        id: 18,
        title: "Prevent Skin Cancer",
        description: "Use sunscreen, wear protective clothing, and avoid prolonged sun exposure.",
        category: "Cancer Prevention"
    },
    {
        id: 19,
        title: "Prevent Asthma",
        description: "Avoid allergens, reduce exposure to smoke, and manage respiratory infections promptly.",
        category: "Respiratory Disease"
    },
    {
        id: 20,
        title: "Prevent Rabies",
        description: "Vaccinate pets, avoid contact with wild animals, and seek medical care after bites.",
        category: "Zoonotic Disease"
    },
    {
        id: 21,
        title: "Prevent Food Poisoning",
        description: "Store food properly, avoid raw or undercooked foods, and practice good hand hygiene.",
        category: "Foodborne Disease"
    },
    {
        id: 22,
        title: "Prevent Anemia",
        description: "Eat iron-rich foods like spinach, red meat, and fortified cereals.",
        category: "Nutritional Deficiency"
    },
    {
        id: 23,
        title: "Prevent Vision Loss",
        description: "Wear protective eyewear, eat vitamin-rich foods, and schedule regular eye exams.",
        category: "Eye Health"
    },
    {
        id: 24,
        title: "Prevent Osteoporosis",
        description: "Consume calcium-rich foods, engage in weight-bearing exercises, and avoid smoking.",
        category: "Bone Health"
    },
    {
        id: 25,
        title: "Prevent Ear Infections",
        description: "Avoid inserting objects into ears and manage colds or respiratory infections promptly.",
        category: "Ear Health"
    },
    {
        id: 26,
        title: "Prevent Seasonal Flu",
        description: "Get vaccinated annually and avoid close contact with infected individuals.",
        category: "Vaccine-Preventable Disease"
    },
    {
        id: 27,
        title: "Prevent High Cholesterol",
        description: "Limit saturated fats, exercise regularly, and avoid smoking.",
        category: "Heart Health"
    },
    {
        id: 28,
        title: "Prevent Tooth Decay",
        description: "Brush twice daily, floss, and avoid excessive sugar consumption.",
        category: "Oral Health"
    },
    {
        id: 29,
        title: "Prevent Rickets",
        description: "Ensure adequate vitamin D intake through diet and sunlight exposure.",
        category: "Nutritional Deficiency"
    },
    {
        id: 30,
        title: "Prevent Alcohol Dependency",
        description: "Avoid excessive alcohol consumption and seek support if needed.",
        category: "Lifestyle Prevention"
    },
    {
        id: 31,
        title: "Prevent Lassa Fever",
        description: "Keep your environment clean, store food in rodent-proof containers, and avoid contact with rats or their droppings.",
        category: "Zoonotic Disease"
    },
    {
        id: 32,
        title: "Prevent Yellow Fever",
        description: "Get vaccinated and use mosquito repellents to prevent bites from infected mosquitoes.",
        category: "Vector-Borne Disease"
    },
    {
        id: 33,
        title: "Prevent River Blindness (Onchocerciasis)",
        description: "Avoid blackfly-infested areas and participate in mass drug administration programs.",
        category: "Parasitic Disease"
    },
    {
        id: 34,
        title: "Prevent Leprosy",
        description: "Seek early medical treatment and avoid close contact with untreated infected individuals.",
        category: "Chronic Infection"
    },
    {
        id: 35,
        title: "Prevent Guinea Worm Disease",
        description: "Drink clean, filtered water and avoid contact with contaminated water sources.",
        category: "Waterborne Disease"
    },
    {
        id: 36,
        title: "Prevent Meningitis",
        description: "Get vaccinated, especially during the dry season, and avoid overcrowded areas.",
        category: "Bacterial Infection"
    },
    {
        id: 37,
        title: "Prevent Ebola Virus Disease",
        description: "Avoid contact with infected individuals, wear protective gear, and practice good hygiene.",
        category: "Viral Disease"
    },
    {
        id: 38,
        title: "Prevent Schistosomiasis (Bilharzia)",
        description: "Avoid swimming or wading in freshwater that may be contaminated with schistosome parasites.",
        category: "Parasitic Disease"
    },
    {
        id: 39,
        title: "Prevent Hepatitis E",
        description: "Drink clean water, maintain good sanitation, and practice proper hand hygiene.",
        category: "Viral Infection"
    },
    {
        id: 40,
        title: "Prevent Polio",
        description: "Ensure children receive all doses of the polio vaccine during immunization campaigns.",
        category: "Vaccine-Preventable Disease"
    },
    {
        id: 41,
        title: "Prevent Tetanus",
        description: "Get vaccinated and properly clean and care for wounds to avoid infection.",
        category: "Vaccine-Preventable Disease"
    },
    {
        id: 42,
        title: "Prevent Sickle Cell Crises",
        description: "Stay hydrated, avoid stress, and manage pain crises under medical supervision.",
        category: "Genetic Disorder"
    },
    {
        id: 43,
        title: "Prevent Typhus Fever",
        description: "Avoid contact with lice and maintain good personal hygiene.",
        category: "Vector-Borne Disease"
    },
    {
        id: 44,
        title: "Prevent Fungal Infections",
        description: "Keep skin dry, wear breathable clothing, and avoid walking barefoot in damp areas.",
        category: "Skin Infection"
    },
    {
        id: 45,
        title: "Prevent Snakebites",
        description: "Wear protective boots in snake-prone areas and avoid tall grasses.",
        category: "Environmental Hazard"
    },
    {
        id: 46,
        title: "Prevent Anthrax",
        description: "Avoid contact with infected animals and consume only properly cooked meat.",
        category: "Zoonotic Disease"
    },
    {
        id: 47,
        title: "Prevent Zika Virus",
        description: "Use mosquito repellents, wear long clothing, and avoid traveling to Zika-affected regions.",
        category: "Vector-Borne Disease"
    },
    {
        id: 48,
        title: "Prevent Hookworm Infection",
        description: "Avoid walking barefoot, use proper sanitation facilities, and deworm regularly.",
        category: "Parasitic Infection"
    },
    {
        id: 49,
        title: "Prevent Influenza",
        description: "Get vaccinated annually and practice good respiratory hygiene.",
        category: "Respiratory Infection"
    },
    {
        id: 50,
        title: "Prevent Soil-Transmitted Helminths",
        description: "Wash hands thoroughly, avoid eating raw vegetables, and deworm regularly.",
        category: "Parasitic Disease"
    },
    {
        id: 51,
        title: "Prevent Rotavirus",
        description: "Ensure children are vaccinated and maintain good hand hygiene, especially during food preparation.",
        category: "Vaccine-Preventable Disease"
    },
    {
        id: 52,
        title: "Prevent Trypanosomiasis (Sleeping Sickness)",
        description: "Avoid tsetse fly bites by wearing protective clothing and staying in fly-proof accommodations.",
        category: "Vector-Borne Disease"
    },
    {
        id: 53,
        title: "Prevent Plague",
        description: "Avoid contact with rodents and fleas in endemic areas and maintain good sanitation.",
        category: "Bacterial Infection"
    },
    {
        id: 54,
        title: "Prevent Rhesus Disease",
        description: "Ensure expectant mothers receive proper antenatal care and Rh immunoglobulin when needed.",
        category: "Maternal Health"
    },
    {
        id: 55,
        title: "Prevent Leishmaniasis",
        description: "Use bed nets treated with insecticide and avoid sandfly-prone areas at night.",
        category: "Vector-Borne Disease"
    },
    {
        id: 56,
        title: "Prevent Pneumococcal Disease",
        description: "Get vaccinated and avoid exposure to individuals with respiratory infections.",
        category: "Vaccine-Preventable Disease"
    },
    {
        id: 57,
        title: "Prevent Rift Valley Fever",
        description: "Avoid contact with infected livestock and use protective clothing.",
        category: "Zoonotic Disease"
    },
    {
        id: 58,
        title: "Prevent Chronic Liver Disease",
        description: "Avoid excessive alcohol intake, get vaccinated against hepatitis, and avoid unregulated medications.",
        category: "Chronic Disease"
    },
    {
        id: 59,
        title: "Prevent Rickets",
        description: "Ensure children have adequate sunlight exposure and a diet rich in vitamin D and calcium.",
        category: "Nutritional Deficiency"
    },
    {
        id: 60,
        title: "Prevent Heatstroke",
        description: "Stay hydrated, avoid excessive heat exposure.",
        category: "Environmental Hazard"
    },
    {
        id: 61,
        title: "Prevent Marburg Virus",
        description: "Avoid caves or mines inhabited by fruit bats and practice good hygiene in outbreak areas.",
        category: "Viral Infection"
    },
    {
        id: 62,
        title: "Prevent Helminthiasis",
        description: "Maintain good personal hygiene, deworm regularly, and avoid contaminated food or water.",
        category: "Parasitic Disease"
    }
];

export default diseasePreventionTips;