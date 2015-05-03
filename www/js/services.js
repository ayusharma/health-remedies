angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Hypertension',
    lastText: 'Hypertension (HTN or HT), also known as high blood pressure or arterial hypertension, is a chronic medical condition in which the blood     pressure in the arteries is elevated. Blood pressure is expressed by two measurements, systolic and diastolic, which depend on whether the heart muscle is       contracted (systole), or relaxed prior to the next contraction (diastole). This equals the maximum and minimum pressure, respectively. Normal blood pressure at rest    is within the range of 100–140 mmHg systolic (top reading) and 60–90 mmHg diastolic (bottom reading). Hypertension is present if it is persistently at or above         140/90 millimetres mercury (mmHg) for adults; different criteria apply to children',
    face: 'http://sulemandawakhana.com/Dawakhana-Hakeem-Suleman-English/images/treatment%20for%20hypertension%20symptoms%20can%20be%20natural%20or%20herbal.jpg'
  }, {
    id: 1,
    name: 'Diabetes mellitus',
    lastText: 'Diabetes mellitus (DM), commonly referred to as diabetes, is a group of metabolic diseases in which there are high blood sugar levels       over a prolonged period.Symptoms of high blood sugar include frequent urination, increased thirst, and increased hunger. If left untreated, diabetes can cause many     complications.Acute complications include diabetic ketoacidosis and nonketotic hyperosmolar coma.Serious long-term complications include cardiovascular disease,        stroke, kidney failure, foot ulcers and damage to the eyes. Diabetes is due to either the pancreas not producing enough insulin or the cells of the body not          responding properly to the insulin produced.',
    face: 'http://www.medicinapreventiva.com.ve/articulos/imagenes/diabetes_lupa.jpg'
  }, {
    id: 2,
    name: 'Anaemia',
    lastText: 'Anemia or anaemia (/əˈniːmiə/; also spelled anæmia) is usually defined as a decrease in the amount of red blood cells (RBCs) or    hemoglobin in the blood.It can also be defined as a lowered ability of the blood to carry oxygen.[3] When anemia comes on slowly the symptoms are often vague and    may include: feeling tired, weakness, shortness of breath or a poor ability to exercise. Anemia that comes on quickly often has greater symptoms which may include:    confusion, feeling like one is going to pass out, and increased thirst. There needs to be significant anemia before a person becomes noticeably pale. There may be    additional symptoms depending on the underlying cause',
    face: 'http://completewellbeing.com/static/img/articles/2008/06/managing-anaemia.jpg'
  }, {
    id: 3,
    name: 'tubercluosis',
    lastText: 'Tuberculosis, MTB, or TB (short for tubercle bacillus), in the past also called phthisis, phthisis pulmonalis, or consumption, is a widespread, and in many cases fatal, infectious disease caused by various strains of mycobacteria, usually Mycobacterium tuberculosis. Tuberculosis typically attacks the lungs, but can also affect other parts of the body. It is spread through the air when people who have an active TB infection cough, sneeze, or otherwise transmit respiratory fluids through the air.Most infections do not have symptoms, known as latent tuberculosis. About one in ten latent infections eventually progresses to active disease which, if left untreated, kills more than 50% of those so infected.',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'malaria',
    lastText: 'Malaria is a mosquito-borne infectious disease of humans and other animals caused by parasitic protozoans (a group of single-celled microorganism) belonging to the genus Plasmodium.Malaria causes symptoms that typically include fever, fatigue, vomiting and headaches. In severe cases it can cause yellow skin, seizures, coma or death.The disease is transmitted by the biting of mosquitos, and the symptoms usually begin ten to fifteen days after being bitten. In those who have not been appropriately treated disease may recur months later.In those who have recently survived an infection, re-infection typically causes milder symptoms. This partial resistance disappears over months to years if there is no ongoing exposure to malaria',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 5,
    name: 'dengue',
    lastText: 'Dengue fever (UK /ˈdɛŋɡeɪ/ or US /ˈdɛŋɡiː/), also known as breakbone fever, is a mosquito-borne tropical disease caused by the dengue virus. Symptoms include fever, headache, muscle and joint pains, and a characteristic skin rash that is similar to measles. In a small proportion of cases the disease develops into the life-threatening dengue hemorrhagic fever, resulting in bleeding, low levels of blood platelets and blood plasma leakage, or into dengue shock syndrome, where dangerously low blood pressure occurs.',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 6,
    name: 'swine flu',
    lastText: 'Swine influenza, also called pig influenza, swine flu, hog flu and pig flu, is an infection caused by any one of several types of swine influenza viruses. Swine influenza virus (SIV) or swine-origin influenza virus (S-OIV) is any strain of the influenza family of viruses that is endemic in pigs. As of 2009, the known SIV strains include influenza C and the subtypes of influenza A known as H1N1, H1N2, H2N1, H3N1, H3N2, and H2N3.Swine influenza virus is common throughout pig populations worldwide. Transmission of the virus from pigs to humans is not common and does not always lead to human flu, often resulting only in the production of antibodies in the blood. If transmission does cause human flu, it is called zoonotic swine flu. People with regular exposure to pigs are at increased risk of swine flu infection.',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 7,
    name: 'hepatitis',
    lastText: 'Hepatitis (plural: hepatitides) is a medical condition defined by the inflammation of the liver and characterized by the presence of inflammatory cells in the tissue of the organ. Hepatitis may occur with limited or no symptoms, but often leads to jaundice (a yellow discoloration of the skin, mucous membrane, and conjunctiva), poor appetite and malaise. Hepatitis is acute when it lasts less than six months and chronic when it persists longer. The condition can be self-limiting (healing on its own) or can progress to fibrosis (scarring) and cirrhosis.',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 8,
    name: 'typhoid',
    lastText: 'Typhoid fever, also known simply as typhoid, is a symptomatic bacterial infection due to Salmonella Typhi. Symptoms may vary from mild to severe and usually begin six to thirty days after exposure.Often there is a gradual onset of a high fever over several days. Weakness, abdominal pain, constipation, and headaches also commonly occur.Diarrhea and vomiting are uncommon. Some people develop a skin rash with rose colored spots. In severe cases there may be confusion. Without treatment symptoms may last weeks or months. Other people may carry the bacteria without being affected; however, are still able to spread the disease to others. Typhoid fever is a type of enteric fever along with paratyphoid fever',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 9,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
