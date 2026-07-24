/**
 * Donnees du CV en ligne - DJETEWAOGA
 */
const cvData = {
    profile: {
          name: "Djetebwaoga Valery KABORE",
          title: "CEO & Entrepreneur",
          subTitle: "Fondateur International Business & Services",
          avatar: "profile.png",
          bio: "Entrepreneur visionnaire et dirigeant d'entreprise fort de plus de 15 ans d'experience. Specialise dans la direction generale, le management d'etablissements d'enseignement superieur, le developpement strategique, le marketing digital, la creation artistique et l'innovation.",
          email: "dvalerykabore@gmail.com",
          phone: "+226 75 55 15 55",
          location: "Ouagadougou, Burkina Faso",
          availability: "Disponible pour consulting, partenariats & projets",
          socials: {
                  github: "https://github.com",
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                  whatsapp: "https://wa.me/22675551555"
          },
          stats: [
            { label: "Annees d'experience", value: "15+" },
            { label: "Entreprises & Ecoles gerees", value: "3" },
            { label: "Projets & Creations", value: "500+" },
            { label: "Taux de satisfaction", value: "100%" }
                ]
    },
    about: {
          heading: "A Propos de Moi",
          description: "Decouvrez mon parcours, mes domaines d'expertise et ce qui anime ma passion au quotidien.",
          highlights: [
                  "Direction generale, strategie d'entreprise & developpement d'activites",
                  "Fondation, gestion & developpement d'ecoles superieures de commerce",
                  "Marketing digital, communication d'influence & acquisition de clients/etudiants",
                  "Production musicale, direction artistique & entrepreneuriat culturel"
                ]
    },
    experiences: [
      {
              role: "CEO & Fondateur",
              company: "International Business and Services - DJETEWAOGA",
              location: "Ouagadougou, Burkina Faso",
              period: "2016 - 2024",
              description: "Direction generale, gestion strategique, developpement commercial et supervision des activites du groupe.",
              achievements: [
                        "Strategie et developpement d'activites a l'international.",
                        "Gestion d'equipes pluridisciplinaires et conduite du changement."
                      ],
              techs: ["Management", "Strategie", "Developpement", "Leadership"]
      },
      {
              role: "Cofondateur & Directeur Marketing Digital",
              company: "Ecole Superieure de Technologie",
              location: "Ouagadougou, Burkina Faso",
              period: "2013 - 2015",
              description: "Cofondation et gestion d'une ecole superieure de commerce.",
              achievements: [
                        "Participation active a la creation, a la structuration administrative et pedagogique de l'etablissement.",
                        "Developpement et mise en place des strategies de marketing digital pour le recrutement d'etudiants et la notoriete."
                      ],
              techs: ["Gestion d'Etablissement", "Marketing Digital", "Management", "Strategie Commerciale"]
      },
      {
              role: "Manager General",
              company: "Ecole Superieure de Microfinance",
              location: "Ouagadougou, Burkina Faso",
              period: "2009 - 2013",
              description: "Direction operationnelle et developpement strategique d'une ecole superieure de commerce specialisee.",
              achievements: [
                        "Gestion quotidienne, recrutement et relations institutionnelles.",
                        "Coordination des programmes de formation et management d'equipe."
                      ],
              techs: ["Management", "Developpement Academique", "Operations", "Relations Publiques"]
      }
        ],
    education: [
      {
              degree: "Master en Intelligence Economique",
              school: "Universite ROBERT DE SORBON",
              location: "France",
              period: "2011 - 2012",
              description: "Specialisation en veille strategique, analyse economique, maitrise de l'information et aide a la decision."
      },
      {
              degree: "Formation en Trading & Marches Financiers",
              school: "TKL TRADING SCHOOL",
              location: "En ligne",
              period: "2015",
              description: "Analyse technique, psychologie des marches et gestion des risques financiers."
      },
      {
              degree: "Diplome de Technicien Superieur en Communication d'Entreprise",
              school: "IUT / Universite de Ouagadougou",
              location: "Burkina Faso",
              period: "2006 - 2008",

              description: "Communication, relations publiques, marketing et publicite."
      }
        ],
    skills: {
          categories: [
            { id: "all", name: "Toutes les competences" },
            { id: "management", name: "Entrepreneuriat & Management" },
            { id: "digital", name: "Marketing Digital & Tech" },
            { id: "arts", name: "Creation Artistique" }
                ],
          items: [
            { name: "Direction Generale & Strategie", level: 95, category: "management" },
            { name: "Management d'Etablissements d'Enseignement", level: 90, category: "management" },
            { name: "Gestion de Projets Complexes", level: 85, category: "management" },
            { name: "Marketing Digital & Acquisition", level: 85, category: "digital" },
            { name: "Developpement de Projets Web", level: 75, category: "digital" },
            { name: "Production Musicale & Artistique", level: 90, category: "arts" },
            { name: "Conception de Programmes Academiques", level: 80, category: "management" }
                ]
    },
    projects: [
      {
              title: "Creation & Gestion d'Ecoles Superieures",
              description: "Cofondation et developpement d'etablissements d'enseignement superieur (Microfinance, Technologie). Conception des programmes, recrutement et obtention des habilitations officielles.",
              metrics: "3 Ecoles Cofondees/Gerees",
              image: "school.png",
              tags: ["Education", "Management", "Strategie", "Operations"],
              demoUrl: "#",
              githubUrl: "#"
      },
      {
              title: "Production Musicale & Artistique",
              description: "Production d'oeuvres musicales, direction artistique de projets culturels et accompagnement d'artistes dans leur developpement de carriere.",
              metrics: "500+ Oeuvres & Projets",
              image: "music.png",
              tags: ["Musique", "Art", "Production", "Culture"],
              demoUrl: "#",
              githubUrl: "#"
      },
      {
              title: "Projets de Marketing Digital & Web",
              description: "Mise en place de campagnes d'acquisition d'etudiants complexes et developpement de plateformes web d'information pour booster la visibilite en ligne.",
              metrics: "10k+ Leads Generes",
              image: "marketing.png",
              tags: ["Marketing", "Web", "Acquisition", "Analytics"],
              demoUrl: "#",
              githubUrl: "#"
      }
        ],
    certifications: [
      { name: "Certification en Intelligence Economique", issuer: "Universite Robert de Sorbon", year: "2012" },
      { name: "TKL LFA (Financial Analyst Certification)", issuer: "TKL Trading School", year: "2015" }
        ],
    languages: [
      { name: "Francais", level: "Langue Maternelle / Courant" },
      { name: "Anglais", level: "Professionnel" }
        ]
};
