/**
 *  * Donnees du CV en ligne - DJETEWAOGA
 *  */
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
    heading: "Leadership Entrepreneurial & Management Strategique",
    description: "Fort d'un solide parcours de chef d'entreprise, de cofondateur d'ecoles superieures et d'artiste passionne, je mets mon expertise en leadership, gestion d'organisations, marketing digital et creation artistique au service de projets d'excellence.",
    highlights: [
      "Direction generale, strategie d'entreprise & developpement d'activites",
      "Fondation, gestion & developpement d'ecoles superieures de commerce",
      "Management d'equipes pluridisciplinaires & leadership organisationnel",
      "Marketing digital, strategie d'acquisition & creation artistique (Musique)",
      "Conception & numerisation sur mesure"
    ]
  },
  skills: {
    categories: [
      { id: "all", name: "Toutes les competences" },
      { id: "management", name: "Entrepreneuriat & Management" },
      { id: "digital", name: "Marketing Digital & Tech" },
      { id: "art", name: "Creation Musicale & Arts" },
      { id: "academics", name: "Finance & Intelligence Eco" },
      { id: "embroidery", name: "Broderie & Numerisation" }
    ],
    items: [
      { name: "Direction & Gestion d'Entreprise (CEO)", level: 98, category: "management", icon: "briefcase" },
      { name: "Strategie d'Entreprise & Developpement", level: 96, category: "management", icon: "trending-up" },
      { name: "Gestion d'Ecoles Superieures de Commerce", level: 95, category: "management", icon: "award" },
      { name: "Management d'Equipes & Leadership", level: 94, category: "management", icon: "users" },

      { name: "Marketing Digital & Strategie Client", level: 94, category: "digital", icon: "share-2" },
      { name: "Conception de Sites Web & UI/UX", level: 90, category: "digital", icon: "layout" },
      { name: "Conception d'Applications Mobiles", level: 86, category: "digital", icon: "smartphone" },

      { name: "Ecriture de Chansons & Composition", level: 95, category: "art", icon: "music" },
      { name: "Interpretation Vocale & Chant", level: 92, category: "art", icon: "mic" },
      { name: "Realisation & Production d'Album Musical", level: 90, category: "art", icon: "disc" },

      { name: "Intelligence Economique & Veille Strategique", level: 92, category: "academics", icon: "search" },
      { name: "Finance, Comptabilite & Audit (BTS)", level: 90, category: "academics", icon: "bar-chart-2" },
      { name: "Trading & Marches Financiers (TKL)", level: 85, category: "academics", icon: "dollar-sign" },

      { name: "Logiciels PE DESIGN & WILCOM", level: 92, category: "embroidery", icon: "cpu" },
      { name: "Operation de Machines Industrielles de Broderie", level: 90, category: "embroidery", icon: "settings" }
    ]
  },
  experiences: [
    {
      role: "CEO & Fondateur",
      company: "International Business and Services - DJETEWAOGA",
      location: "Ouagadougou, Burkina Faso",
      period: "2016 - 2024",
      description: "Direction generale, gestion strategique, developpement commercial et supervision des operations.",
      achievements: [
        "Pilotage de la strategie globale, de la gestion financiere, commerciale et de la relation client.",
        "Management des equipes et conduite du developpement de l'entreprise.",
        "Supervision des operations de numerisation et broderie industrielle (PE DESIGN & WILCOM)."
      ],
      techs: ["Direction d'Entreprise", "Management", "Marketing Digital", "PE DESIGN", "WILCOM"]
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
        "Supervision de la gestion d'etablissement et encadrement des equipes pedagogiques et administratives.",
        "Conception et execution de campagnes de marketing digital pour le developpement de la structure."
      ],
      techs: ["Management", "Marketing Digital", "Microfinance", "Developpement Institutionnel"]
    }
  ],
  education: [
    {
      degree: "Master en Intelligence Economique",
      school: "Universite ROBERT DE SORBON",
      period: "2011 - 2012",
      description: "Specialisation en veille strategique, analyse economique, maitrise de l'information et aide a la decision."
    },
    {
      degree: "Formation en Trading & Marches Financiers",
      school: "TKL TRADING SCHOOL",
      period: "2015",
      description: "Analyse technique, psychologie des marches et gestion des risques financiers."
    },
    {
      degree: "Brevet de Technicien Superieur (BTS) en Finance et Comptabilite",
      school: "Ecole Superieure Privee Polytechnique",
      period: "2002 - 2005",
      description: "Bases solides en comptabilite generale et analytique, gestion financiere et controle de gestion."
    }
  ],
  projects: [
    {
      title: "Direction d'Entreprises & Projets d'Etablissements",
      category: "management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "Creation, structuration et direction generale d'entreprises innovantes et d'ecoles superieures de commerce.",
      metrics: "15+ Ans de Leadership",
      tags: ["Management", "Entrepreneuriat", "Strategie"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Realisation d'un Album Musical Original",
      category: "art",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
      description: "Creation artistique complete : ecriture des textes de chansons, composition musicale et interpretation vocale pour la realisation d'un album musical original.",
      metrics: "Creation & Production Artistique",
    demoUrl: "#",
    githubUrl: "#",
          tags: ["Album Musical", "Ecriture de Chansons", "Chant", "Composition"],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
 
},
                                                                                                    
{
  title: "Campagnes Marketing Digital & Acquisition",
    category: "marketing",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
        description: "Strategies marketing web globales ayant permis d'accroitre significativement la notoriete et les inscriptions dans l'enseignement superieur.",
          metrics: "+40% de croissance",
            tags: ["Marketing Digital", "Branding", "Acquisition"],
              demoUrl: "#",
                githubUrl: "#"
},
{
  title: "Catalogue de Broderie Industrielle & Numerisation",
    category: "design",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
        description: "Conception et numerisation de motifs sur mesure realises avec les logiciels specialises PE DESIGN & WILCOM.",
          metrics: "Haute Precision Textile",
            tags: ["PE DESIGN", "WILCOM", "Broderie"],
              demoUrl: "#",
                githubUrl: "#"
}
                             ],                                                                                                                                                                                                                                       ],
certifications: [
  { name: "Master en Intelligence Economique", issuer: "Universite ROBERT DE SORBON", year: "2012" },
  { name: "Certification en Trading & Analyse Financiere", issuer: "TKL TRADING SCHOOL", year: "2015" },
  { name: "BTS Finance & Comptabilite", issuer: "Ecole Superieure Privee Polytechnique", year: "2005" }
],
  languages: [
    { name: "Francais", level: "Langue maternelle / Maitrise parfaite" },
    { name: "Anglais", level: "Maitrise (Professionnel / Courant)" }
  ],
    passions: [
      { title: "Creation Musicale & Album", desc: "Auteur, compositeur et interprete vocal" },
      { title: "Philosophie", desc: "Reflexion et analyse philosophique" },
      { title: "Engagements Associatifs", desc: "Acteur engage dans la vie associative" }
    ]
                                                                                                                                                                                                                                                                                                                                        };
