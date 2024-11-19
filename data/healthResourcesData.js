const healthResources = [
    {
        name: "Usman Dan Fodio University Teaching Hospital",
        address: "Garba Nadama Road, Sokoto, Sokoto State",
        phone: ["0703 650 5608", "060-239605-10", "060-230254060-232546"],
        description: "UDUTH offers medical training & services on surgery, neurosurgery, obstetrics, gynaecology, paediatrics, ophthalmology, dental, maxillofacial, anaesthesia, radiology, physiotherapy, pharmacy, radiotherapy, psychiatry, pathology & orthopaedic"
      },
      {
        name: "Divine Clinic",
        address: "Opposite As-Villa Fantastic Studio, Angwan-Rogo, Sokoto State",
        phone: ["0803 604 3991"],
        description: "Divine Clinic is a private health facility with particular emphasis on women and reproductive health."
      },
      {
        name: "Hamdala Medical Centre",
        address: "Emir Yahaya Road, Sokoto, Sokoto State Nigeria",
        phone: ["08033934526"],
        description: "Hamdala Medical Centre specializes in medical research, diagnosis and general treatment services."
      },
      {
        name: "Karaye Hospital",
        address: "Emir Yahaya Road, Sokoto, Sokoto State",
        phone: ["08051337865", "08066024503"],
        description: "Karaye Hospital offers medical services on diagnosis, research, and treatment."
      },
      {
        name: "Khadijat Dental Clinic",
        address: "No 7 Dan Kano Plaza Arkilla, Nasarawa Area, Sokoto",
        phone: ["0810 737 8637", "0701 076 0119"],
        description: "Khadijat Dental Clinic provides adequate and affordable dental services to maintain good oral health."
      },
      {
        name: "Murtala Muhammed Specialist Hospital",
        address: "131, Sultan Abubakar Road, Sokoto, Sokoto State Nigeria",
        phone: ["0807 179 2222"],
        description: "Murtala Muhammed Specialist Hospital provides medical services on paediatrics, obstetrics, gynaecology, and surgery."
      },
      {
        name: "Sahel Specialist Hospital",
        address: "65, Ahmadu Bello Way, Sokoto, Sokoto State Nigeria",
        phone: ["08035776501", "07066696025"],
        description: "Sahel Specialist Hospital offers paediatric, radiotherapy, psychiatry, pathology, orthopaedic, and surgical care services."
      },
      {
        name: "Saraki Specialist Hospital",
        address: "Ali Akilu Road, Sokoto, Sokoto State Nigeria",
        phone: ["08166830907"],
        description: "Saraki Specialist Hospital provides medical services in diagnosis, treatment, and general healthcare."
      },
      {
        name: "Sokoto Clinic Limited",
        address: "46, Abdullahi Fodio Road, Sokoto",
        phone: ["0701 076 0119", "060-231012"],
        description: "Sokoto Clinic Limited is a professional healthcare center offering sound medical services in Sokoto State."
      },
      {
        name: "Federal Neuro-Psychiatric Hospital, Sokoto",
        address: "Kware, Sokoto State, Nigeria",
        phone: [],
        description: "A hospital for mental medical issues and the mentally challenged, known as one of the apex centers for Psychiatry in Nigeria."
      },
      {
        name: "City Hospital",
        address: "15 Airport Road, Sokoto, Sokoto State",
        phone: ["07032234567", "08076543210"],
        description: "City Hospital provides high-quality general medical services including emergency care and outpatient consultations."
      },
      {
        name: "Shehu Specialist Clinic",
        address: "35 Waziri Abbas Road, Sokoto State",
        phone: ["08121234567"],
        description: "Specializes in the treatment of chronic illnesses, diagnostic services, and wellness checks."
      },
      {
        name: "Sunshine Maternity and Childcare Clinic",
        address: "23 Gawon Nama Road, Sokoto",
        phone: ["08021234567"],
        description: "Provides comprehensive maternal and child healthcare services including prenatal care and immunizations."
      },
      {
        name: "Prime Care Hospital",
        address: "Plot 12, Eastern Bypass, Sokoto State",
        phone: ["07061234567"],
        description: "Focuses on internal medicine, surgery, and diagnostic laboratory services."
      },
      {
        name: "Golden Age Geriatric Clinic",
        address: "14 Ahmadu Bello Way, Sokoto",
        phone: ["08181234567"],
        description: "Specializes in healthcare for elderly patients, including management of age-related conditions."
      },
      {
        name: "Hope Fertility Center",
        address: "Plot 8 Sultan Bello Street, Sokoto",
        phone: ["08033234567"],
        description: "Offers fertility treatments and reproductive health services for couples."
      },
      {
        name: "Harmony Eye Clinic",
        address: "22 Sultan Road, Sokoto",
        phone: ["07041234567"],
        description: "Provides eye care services, including cataract surgery, glasses prescription, and treatment of glaucoma."
      },
      {
        name: "Unity Orthopedic Hospital",
        address: "41 Kasarawa Road, Sokoto",
        phone: ["08162234567"],
        description: "Specializes in orthopedic surgery, physiotherapy, and musculoskeletal care."
      },
      {
        name: "LifeLine Emergency Center",
        address: "10 Gidan Dare Road, Sokoto",
        phone: ["07022234567"],
        description: "Provides emergency medical services 24/7 with modern equipment and trained staff."
      },
      {
        name: "Faith Clinic and Diagnostic Center",
        address: "19 Kalambaina Road, Sokoto",
        phone: ["08173234567"],
        description: "Offers a range of diagnostic tests and general healthcare services."
      },
      {
        name: "Zamfara Road Health Post",
        address: "3 Zamfara Road, Sokoto",
        phone: ["08055234567"],
        description: "A government-run clinic providing affordable basic medical services to the community."
      },
      {
        name: "Wellness Check Hospital",
        address: "8 Birnin Kebbi Road, Sokoto",
        phone: ["07011234567"],
        description: "Focuses on preventive healthcare, health education, and wellness programs."
      },
      {
        name: "Elite Heart Center",
        address: "Plot 5 Waziri Abbas Road, Sokoto",
        phone: ["08091234567"],
        description: "Specializes in cardiology services, including diagnosis and treatment of heart diseases."
      },
      {
        name: "Safe Motherhood Clinic",
        address: "47 Shehu Shagari Way, Sokoto",
        phone: ["08193234567"],
        description: "Provides safe delivery services, prenatal, and postnatal care for mothers and newborns."
      },
      {
        name: "Bliss Dental Hospital",
        address: "29 Kasarawa Road, Sokoto",
        phone: ["07083234567"],
        description: "Offers advanced dental treatments, cosmetic dentistry, and oral surgeries."
      },
      {
        name: "Sheikh Abubakar Medical Center",
        address: "6 Waziri Abbas Road, Sokoto",
        phone: ["08033234567"],
        description: "Provides comprehensive medical services with an emphasis on patient-centered care."
      },
      {
        name: "Pediatric Care Clinic",
        address: "12 Emir Yahaya Road, Sokoto",
        phone: ["07073234567"],
        description: "Specializes in pediatric care, immunizations, and treatment of childhood illnesses."
      },
      {
        name: "Radiance Diagnostic Hospital",
        address: "16 Sultan Bello Road, Sokoto",
        phone: ["08103234567"],
        description: "Focuses on advanced diagnostic services, including imaging and laboratory tests."
      },
      {
        name: "Grace Community Health Center",
        address: "4 Gidan Dare Road, Sokoto",
        phone: ["07053234567"],
        description: "A community-based clinic offering affordable healthcare to underserved populations."
      }
];


export default healthResources;
