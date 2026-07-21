/**
 * Donnees du CV en ligne - Modifiable facilement
 */
const cvData = {
      profile: {
                name: "DJETEBWAOGA",
                title: "Developpeur Full-Stack & Lead Technique",
                subTitle: "Specialiste Applications Web & Mobiles de Grande Echelle",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
                bio: "Passionne par l'architecture logicielle, les interfaces utilisateur immersives et le developpement de solutions web performantes. J'accompagne les entreprises and startups dans la concretisation de leurs projets digitaux ambitieux.",
                email: "DJETEBWAOGA@example.com",
                phone: "+226 70 00 00 00",
                location: "Ouagadougou, Burkina Faso",
                availability: "Disponible pour projets & consulting",
                socials: {
                              github: "https://github.com",
                              linkedin: "https://linkedin.com",
                              twitter: "https://twitter.com",
                              whatsapp: "https://wa.me/22670000000"
                },
                stats: [
                  { label: "Annees d'experience", value: "6+" },
                  { label: "Projets livres", value: "35+" },
                  { label: "Clients satisfaits", value: "20+" },
                  { label: "Taux de satisfaction", value: "99%" }
                          ]
      },
      about: {
                heading: "Concepteur d'Experiences Numeriques d'Exception",
                description: "Fort de plus de 6 ans d'experience dans l'ecosysteme numerique, je maitrise l'ensemble de la chaine de valeur du developpement logiciel : de la conception UX/UI a l'architecture Backend distribuee, en passant par le deploiement cloud et l'optimisation des performances.",
                highlights: [
                              "Architecture Web & API RESTful / GraphQL",
                              "Developpement Mobile Cross-Platform (React Native / Flutter)",
                              "Optimisation UX/UI & Design Systems sur mesure",
                              "DevOps, CI/CD & Deploiement Cloud (Docker, AWS, Vercel)",
                              "Lead Technique & Mentorat d'equipes agiles"
                          ]
      },
      skills: {
                categories: [
                  { id: "all", name: "Toutes les competences" },
                  { id: "frontend", name: "Frontend & UI" },
                  { id: "backend", name: "Backend & API" },
                  { id: "mobile", name: "Mobile & Cloud" },
                  { id: "tools", name: "Methodes & Outils" }
                          ],
                items: [
                  { name: "HTML5 / CSS3 / JavaScript (ES6+)", level: 95, category: "frontend", icon: "code" },
                  { name: "React.js / Next.js", level: 92, category: "frontend", icon: "atom" },
                  { name: "TypeScript", level: 88, category: "frontend", icon: "file-code" },
                  { name: "Vue.js / Nuxt", level: 85, category: "frontend", icon: "layout" },
                  { name: "Tailwind CSS & Vanilla CSS Modern", level: 95, category: "frontend", icon: "palette" },

                  { name: "Node.js / Express / NestJS", level: 90, category: "backend", icon: "server" },
                  { name: "Python / Django / FastAPI", level: 84, category: "backend", icon: "terminal" },
                  { name: "PostgreSQL / MongoDB / MySQL", level: 88, category: "backend", icon: "database" },
                  { name: "REST API & GraphQL", level: 92, category: "backend", icon: "cpu" },

                  { name: "React Native / Mobile App", level: 86, category: "mobile", icon: "smartphone" },
                  { name: "Docker & Containerisation", level: 82, category: "mobile", icon: "box" },
                  { name: "CI/CD (GitHub Actions, Vercel)", level: 85, category: "mobile", icon: "git-branch" },
                  { name: "AWS & Cloud Infrastructure", level: 78, category: "mobile", icon: "cloud" },

                  { name: "Git / GitHub / GitLab", level: 94, category: "tools", icon: "git-merge" },
                  { name: "Methodologie Agile / Scrum", level: 90, category: "tools", icon: "users" },
                  { name: "UI/UX Design (Figma, Adobe XD)", level: 85, category: "tools", icon: "figma" },
                  { name: "Tests Unitaires & E2E (Jest, Cypress)", level: 80, category: "tools", icon: "check-circle" }
                          ]
      },
      experiences: [
        {
                      role: "Lead Developpeur Full-Stack & Architecte Web",
                      company: "DjetPro Tech Solution",
                      location: "Ouagadougou",
                      period: "2023 - Present",
                      description: "Direction de l'equipe technique pour le developpement de solutions SaaS metiers et de plateformes d'entreprise a haut trafic.",
                      achievements: [
                                        "Conception et deploiement de la plateforme de gestion logistique DjetLivraison (+50k operations/mois).",
                                        "Mise en place d'un Design System d'entreprise reutilisable reduisant le temps de dev frontend de 40%.",
                                        "Encadrement et mentorat d'une equipe de 6 developpeurs juniors et mediums."
                                    ],
                      techs: ["React", "Node.js", "PostgreSQL", "Docker", "TailwindCSS"]
        },
        {
                      role: "Developpeur Senior Web & Mobile",
                      company: "InnovTech Digital Agency",
                      location: "En ligne / Hybride",
                      period: "2021 - 2023",
                      description: "Developpement d'applications web complexes et mobiles pour divers clients grands comptes et startups.",
                      achievements: [
                                        "Creation d'une application E-commerce avec paiement mobile money integre (Orange Money, Moov Money).",
                                        "Refonte complete de l'application cliente d'une banque partenaire avec amelioration des temps de reponse de 60%."
                                    ],
                      techs: ["Next.js", "TypeScript", "React Native", "Express", "MongoDB"]
        },
        {
                      role: "Developpeur Front-End UI/UX",
                      company: "AfriWeb Studio",
                      location: "Ouagadougou",
                      period: "2019 - 2021",
                      description: "Integration d'interfaces web reactives, modernes et animees selon les meilleures pratiques SEO et d'accessibilite.",
                      achievements: [
                                        "Developpement de plus de 20 sites web vitrines et catalogues d'entreprise.",
                                        "Optimisation du score Google Lighthouse de 65/100 a 98/100 sur l'ensemble des sites clients."
                                    ],
                      techs: ["HTML5", "CSS3", "JavaScript", "Vue.js", "WordPress REST API"]
        }
            ],
      education: [
        {
                      degree: "Master en Genie Logiciel & Systemes d'Information",
                      school: "Institut Superieur de Technologie",
                      period: "2018 - 2020",
                      description: "Specialisation en architecture logicielle distribuee, securite informatique et gestion de projets agiles."
        },
        {
                      degree: "Licence en Informatique de Gestion",
                      school: "Universite de Ouagadougou",
                      period: "2015 - 2018",
                      description: "Bases solides en algorithmique, structures de donnees, bases de donnees relationnelles et reseaux."
        }
            ],
      projects: [
        {
                      title: "DjetPro Landing Page",
                      category: "web",
                      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                      description: "Landing page professionnelle haut de gamme pour l'entreprise Djetpro avec animations interactives et mode sombre.",
                      metrics: "Score Performance 99%",
                      tags: ["HTML5", "Vanilla CSS", "JavaScript"],
                      demoUrl: "#",
                      githubUrl: "#"
        },
        {
                      title: "DjetLivraison Platform",
                      category: "app",
                      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
                      description: "Systeme complet de suivi de colis et livraisons en temps reel avec geolocalisation et alertes SMS.",
                      metrics: "+50,000 livraisons gerees",
                      tags: ["React", "Node.js", "WebSockets", "Maps API"],
                      demoUrl: "#",
                      githubUrl: "#"
        },
        {
                      title: "AfriMarket E-Commerce",
                      category: "web",
                      image: "https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&q=80&w=800",
                      description: "Plateforme e-commerce multi-vendeurs avec integration du paiement mobile et gestion de stock en temps reel.",
                      metrics: "12,000+ Utilisateurs Actifs",
                      tags: ["Next.js", "Stripe", "Mobile Money", "PostgreSQL"],
                      demoUrl: "#",
                      githubUrl: "#"
        },
        {
                      title: "HealthTrack Mobile App",
                      category: "mobile",
                      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
                      description: "Application mobile de suivi de sante personnelle, rappel de rendez-vous medicaux et carnets de soins digitalises.",
                      metrics: "4.8/5 sur les stores",
                      tags: ["React Native", "Expo", "Firebase"],
                      demoUrl: "#",
                      githubUrl: "#"
        }
            ],
      certifications: [
        { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
        { name: "Meta Front-End Developer Professional Certificate", issuer: "Meta / Coursera", year: "2022" },
        { name: "Scrum Master Certified (SMC)", issuer: "Scrum Alliance", year: "2021" }
            ],
      languages: [
        { name: "Francais", level: "Langue maternelle / Courant" },
        { name: "Anglais", level: "Professionnel technique (B2/C1)" }
            ]
};
