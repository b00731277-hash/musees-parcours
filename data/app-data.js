// Base de données de l'application "Parcours de visite".
// Régénérée par Claude à chaque nouveau cours traité — voir SPEC.md et PLAN.md
// pour le fonctionnement et README.md pour le schéma détaillé.

// Registre des musées supportés (SPEC.md §14). Une œuvre/un parcours référence
// une de ces entrées via `musee_id`.
window.MUSEES = [
  {
    "id": "louvre",
    "nom": "Musée du Louvre",
    "actif": true,
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Louvre%20Museum%20Wikimedia%20Commons.jpg?width=800"
  },
  {
    "id": "orsay",
    "nom": "Musée d'Orsay",
    "actif": true,
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Front%20view%20of%20the%20Mus%C3%A9e%20d%27Orsay.jpg?width=800"
  },
  {
    "id": "pompidou",
    "nom": "Centre Pompidou",
    "actif": false,
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Centre%20Georges%20Pompidou%20en%202016.jpg?width=800",
    "note": "Fermé au public depuis le 22 septembre 2025, jusqu'en 2030 (travaux). Ne pas générer de parcours tant qu'il est fermé."
  }
];

window.OEUVRES = [
  {
    "id": "cl010062570",
    "musee_id": "louvre",
    "titre": "Bonaparte visitant les pestiférés de Jaffa (11 mars 1799)",
    "artiste": "Antoine-Jean Gros",
    "dates": "1804",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062570/0000800444_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062570"
  },
  {
    "id": "cl010064830",
    "musee_id": "louvre",
    "titre": "Scène de déluge",
    "artiste": "Anne-Louis Girodet de Roucy-Trioson",
    "dates": "1800-1825 (Salons de 1806 et 1814)",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064830/0000136183_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064830"
  },
  {
    "id": "cl010065870",
    "musee_id": "louvre",
    "titre": "Scènes des massacres de Scio. Familles grecques attendant la mort ou l'esclavage",
    "artiste": "Eugène Delacroix",
    "dates": "1824",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065870/0000974321_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065870"
  },
  {
    "id": "cl010065872",
    "musee_id": "louvre",
    "titre": "Le 28 juillet 1830. La Liberté guidant le peuple",
    "artiste": "Eugène Delacroix",
    "dates": "1830",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065872/0001264365_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065872"
  },
  {
    "id": "cl010277627",
    "musee_id": "louvre",
    "titre": "Vénus de Milo",
    "artiste": "Anonyme (art grec hellénistique)",
    "dates": "vers 150-125 av. J.-C.",
    "salle": "Salle 345",
    "aile": "Aile Sully",
    "niveau": "Niveau 0",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000277627/0000625031_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010277627"
  },
  {
    "id": "cl010062516",
    "musee_id": "louvre",
    "titre": "Écho et Narcisse",
    "artiste": "Nicolas Poussin",
    "dates": "vers 1629",
    "salle": "Salle 825",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062516/0000136358_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062516"
  },
  {
    "id": "cl010062438",
    "musee_id": "louvre",
    "titre": "L'Enlèvement des Sabines",
    "artiste": "Nicolas Poussin",
    "dates": "vers 1637-1638",
    "salle": "Salle 825",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062438/0000344203_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062438"
  },
  {
    "id": "cl010062528",
    "musee_id": "louvre",
    "titre": "Les Bergers d'Arcadie (Et in Arcadia ego)",
    "artiste": "Nicolas Poussin",
    "dates": "vers 1638-1640",
    "salle": "Salle 825",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062528/0000136064_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062528"
  },
  {
    "id": "cl010065384",
    "musee_id": "louvre",
    "titre": "Autoportrait",
    "artiste": "Nicolas Poussin",
    "dates": "1650",
    "salle": "Salle 825",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065384/0001096384_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065384"
  },
  {
    "id": "cl010062521",
    "musee_id": "louvre",
    "titre": "Le Printemps ou Le Paradis terrestre",
    "artiste": "Nicolas Poussin",
    "dates": "1660-1664",
    "salle": "Salle 825",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062521/0000136076_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062521"
  },
  {
    "id": "cl010062436",
    "musee_id": "louvre",
    "titre": "Éliézer et Rébecca",
    "artiste": "Nicolas Poussin",
    "dates": "1648",
    "salle": "Salle 826",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062436/0000136360_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062436"
  },
  {
    "id": "cl010061024",
    "musee_id": "louvre",
    "titre": "Ulysse remet Chryséis à son père",
    "artiste": "Claude Gellée, dit Le Lorrain",
    "dates": "vers 1644",
    "salle": "Salle 826",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000061024/0000134994_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010061024"
  },
  {
    "id": "cl010066832",
    "musee_id": "louvre",
    "titre": "L'Apparition de la Vierge à saint Luc et à sainte Catherine",
    "artiste": "Annibal Carrache",
    "dates": "1592",
    "salle": "Salle 712",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000066832/0000133498_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066832"
  },
  {
    "id": "cl010062329",
    "musee_id": "louvre",
    "titre": "La Diseuse de bonne aventure",
    "artiste": "Le Caravage",
    "dates": "vers 1595-1598",
    "salle": "Salle 712",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062329/0000787097_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062329"
  },
  {
    "id": "cl010062304",
    "musee_id": "louvre",
    "titre": "La Mort de la Vierge",
    "artiste": "Le Caravage",
    "dates": "vers 1601-1606",
    "salle": "Salle 712",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062304/0000787096_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062304"
  },
  {
    "id": "cl010065021",
    "musee_id": "louvre",
    "titre": "Le Triomphe de David",
    "artiste": "Bartolomeo Manfredi",
    "dates": "vers 1615",
    "salle": "Salle 712",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065021/0000142401_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065021"
  },
  {
    "id": "cl010066335",
    "musee_id": "louvre",
    "titre": "David tenant la tête de Goliath",
    "artiste": "Guido Reni",
    "dates": "vers 1604-1606",
    "emplacement_note": "Salle à confirmer",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000066335/0000142400_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066335"
  },
  {
    "id": "cl010061972",
    "musee_id": "louvre",
    "titre": "Le Concert au bas-relief",
    "artiste": "Valentin de Boulogne",
    "dates": "vers 1624-1626",
    "salle": "Salle 830",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000061972/0000137158_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010061972"
  },
  {
    "id": "cl010063103",
    "musee_id": "louvre",
    "titre": "Giovan Carlo Doria",
    "artiste": "Simon Vouet",
    "dates": "1621",
    "salle": "Salle 829",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000063103/0000715778_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010063103"
  },
  {
    "id": "cl010061999",
    "musee_id": "louvre",
    "titre": "Allégorie de la Foi et du Mépris des richesses",
    "artiste": "Simon Vouet",
    "dates": "vers 1638-1640",
    "emplacement_note": "Salle à confirmer",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000061999/0000136367_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010061999"
  },
  {
    "id": "cl010066276",
    "musee_id": "louvre",
    "titre": "Le Tricheur à l'as de carreau",
    "artiste": "Georges de La Tour",
    "dates": "vers 1636-1640",
    "salle": "Salle 912",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000066276/0000403278_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066276"
  },
  {
    "id": "cl010063817",
    "musee_id": "louvre",
    "titre": "Saint Joseph charpentier",
    "artiste": "Georges de La Tour",
    "dates": "vers 1642-1644",
    "salle": "Salle 912",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000063817/0000208932_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010063817"
  },
  {
    "id": "cl010065571",
    "musee_id": "louvre",
    "titre": "La Tabagie",
    "artiste": "Louis Le Nain",
    "dates": "1643",
    "salle": "Salle 912",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065571/0000684363_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065571"
  },
  {
    "id": "cl010066866",
    "musee_id": "louvre",
    "titre": "Famille de paysans dans un intérieur",
    "artiste": "Louis Le Nain",
    "dates": "vers 1642",
    "salle": "Salle 912",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000066866/0000134998_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066866"
  },
  {
    "id": "cl010060683",
    "musee_id": "louvre",
    "titre": "Laban cherchant ses idoles dans les bagages de Jacob",
    "artiste": "Laurent de La Hyre",
    "dates": "1647",
    "salle": "Salle 911",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060683/0000391017_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060683"
  },
  {
    "id": "cl010060624",
    "musee_id": "louvre",
    "titre": "Clio, Euterpe et Thalie",
    "artiste": "Eustache Le Sueur",
    "dates": "1652-1655",
    "salle": "Salle 911",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060624/0000355318_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060624"
  },
  {
    "id": "cl010066309",
    "musee_id": "louvre",
    "titre": "Réunion d'amis",
    "artiste": "Eustache Le Sueur",
    "dates": "vers 1640",
    "emplacement_note": "Salle à confirmer",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000066309/0000208933_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066309"
  },
  {
    "id": "cl010062076",
    "musee_id": "louvre",
    "titre": "La Cène, dite La Petite Cène",
    "artiste": "Philippe de Champaigne",
    "dates": "vers 1651-1652",
    "salle": "Salle 913",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062076/0000136464_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062076"
  },
  {
    "id": "cl010064767",
    "musee_id": "louvre",
    "titre": "Le Baptême du Christ",
    "artiste": "Cornelis van Haarlem",
    "dates": "1588",
    "salle": "Salle 806",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064767/0000738652_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064767"
  },
  {
    "id": "cl010064946",
    "musee_id": "louvre",
    "titre": "Marie de Médicis, reine de France, régente de 1610 à 1614",
    "artiste": "Frans Pourbus le Jeune",
    "dates": "1610",
    "salle": "Salle 803",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064946/0000142384_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064946"
  },
  {
    "id": "cl010060875",
    "musee_id": "louvre",
    "titre": "La Sainte Cène",
    "artiste": "Frans Pourbus le Jeune",
    "dates": "1618",
    "salle": "Salle 803",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060875/0000134611_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060875"
  },
  {
    "id": "cl010060820",
    "musee_id": "louvre",
    "titre": "Le Débarquement de la reine à Marseille, le 3 novembre 1600",
    "artiste": "Pierre Paul Rubens",
    "dates": "1622-1625",
    "salle": "Salle 801",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060820/0000377646_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060820"
  },
  {
    "id": "cl010060839",
    "musee_id": "louvre",
    "titre": "L'Apothéose de Henri IV et la proclamation de la régence de la reine, le 14 mai 1610",
    "artiste": "Pierre Paul Rubens",
    "dates": "1622-1625",
    "salle": "Salle 801",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060839/0000394491_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060839"
  },
  {
    "id": "cl010060825",
    "musee_id": "louvre",
    "titre": "Les Parques filant le destin de la reine Marie de Médicis sous la protection de Jupiter et de Junon",
    "artiste": "Pierre Paul Rubens",
    "dates": "1622-1625",
    "salle": "Salle 801",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060825/0000388699_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060825"
  },
  {
    "id": "cl010062150",
    "musee_id": "louvre",
    "titre": "Jésus chassant les marchands du Temple",
    "artiste": "Jacob Jordaens",
    "dates": "vers 1645-1650",
    "salle": "Salle 800",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062150/0001179030_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062150"
  },
  {
    "id": "cl010062167",
    "musee_id": "louvre",
    "titre": "Portrait de Charles Ier, roi d'Angleterre, à la chasse",
    "artiste": "Antoon van Dyck",
    "dates": "vers 1635",
    "salle": "Salle 853",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062167/0001314706_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062167"
  },
  {
    "id": "cl010064339",
    "musee_id": "louvre",
    "titre": "Le Bouffon au luth",
    "artiste": "Frans Hals",
    "dates": "vers 1623-1624",
    "salle": "Salle 846",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064339/0000868050_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064339"
  },
  {
    "id": "cl010060266",
    "musee_id": "louvre",
    "titre": "La Bohémienne",
    "artiste": "Frans Hals",
    "dates": "vers 1626",
    "salle": "Salle 846",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060266/0001221757_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060266"
  },
  {
    "id": "cl010060805",
    "musee_id": "louvre",
    "titre": "Le Coup de soleil",
    "artiste": "Jacob van Ruisdael",
    "dates": "vers 1660-1670",
    "salle": "Salle 837",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060805/0000356086_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060805"
  },
  {
    "id": "cl010063553",
    "musee_id": "louvre",
    "titre": "La Buveuse",
    "artiste": "Pieter de Hooch",
    "dates": "vers 1652-1661",
    "salle": "Salle 837",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000063553/0000134992_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010063553"
  },
  {
    "id": "cl010064918",
    "musee_id": "louvre",
    "titre": "La Dentellière",
    "artiste": "Johannes Vermeer",
    "dates": "vers 1669-1670",
    "salle": "Salle 837",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064918/0000134402_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064918"
  },
  {
    "id": "cl010064324",
    "musee_id": "louvre",
    "titre": "L'Astronome",
    "artiste": "Johannes Vermeer",
    "dates": "1668 et 1673",
    "salle": "Salle 837",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064324/0000405625_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064324"
  },
  {
    "id": "cl010059161",
    "musee_id": "louvre",
    "titre": "Le Cheval pie",
    "artiste": "Paulus Potter",
    "dates": "1653",
    "salle": "Salle 851",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000059161/0000601721_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010059161"
  }
];

window.PARCOURS = [
  {
    "id": "denon_1804-1830_romantisme-contre-neoclassicisme",
    "musee_id": "louvre",
    "titre": "[Louvre] [Aile Denon] [1804-1830] Romantisme contre néoclassicisme",
    "date_creation": "2026-09-24",
    "cours_source": "Introduction générale — Anne-Sophie Godot, École du Louvre, 1er septembre 2025",
    "fil_conducteur": "La naissance du romantisme français face au néoclassicisme (1804-1830), de Gros à Delacroix, avec la Vénus de Milo comme écho antique à cette tension entre référence et rupture.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "cl010064830",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Toile peinte entre 1800 et 1825, présentée aux Salons de 1806 et de 1814.",
                "Girodet, élève de David comme Gros, illustre à lui seul la **porosité des frontières stylistiques** du début du XIXe siècle : héritage néoclassique et sensibilité romantique naissante se mêlent.",
                "Selon le cours, « les choses et définitions des styles sont complexes ».",
                "Cette hésitation, cet entre-deux, en fait un point de départ pertinent : elle montre le romantisme se dégageant, encore retenu, du modèle néoclassique dominant, avant les œuvres pleinement romantiques."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toile de plus de quatre mètres de haut, sous un ciel d'orage zébré d'éclairs, dans un paysage rocheux balayé par la crue.",
                "Selon le cours, c'est « une véritable œuvre romantique » : personnages dans des teintes sombres, couleurs **juxtaposées** plutôt que fondues, mouvement général porteur d'une tension dramatique.",
                "À observer : le personnage central garde les caractères du **néoclassicisme**, avec une pose maîtrisée, une anatomie idéalisée et un calme presque sculptural au milieu du chaos."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Des personnages agrippés à un arbre face à la crue : une scène de déluge."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062570",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Immense toile (plus de cinq mètres de haut) peinte en 1804, l'année du Sacre de Napoléon.",
                "Gros est l'élève de David qui reprend son atelier quand celui-ci part en Belgique ; il poursuit la « geste napoléonienne » en peinture, un art directement au service du pouvoir.",
                "Peintre académique et **peintre d'histoire** de formation, il glisse ici vers une tonalité romantique et orientale.",
                "Le tableau illustre l'idée que règne, politique et style artistique avancent ensemble (« cf. David sous 5 régimes différents ») : le pouvoir consulaire puis impérial se construit une image dans un langage pictural en transition entre deux esthétiques."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les couleurs, l'architecture de la cour de mosquée et le « bruissement romantique » de certaines figures annoncent déjà **Delacroix**.",
                "À observer : la **frise à l'antique** à l'arrière-plan rappelle que Gros reste redevable du vocabulaire néoclassique de son maître."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Bonaparte, encore Premier consul, visite l'hôpital militaire de Jaffa pendant la campagne de Syrie.",
                "Il touche de la main la tumeur pestilentielle d'un malade, tandis qu'un médecin tente de l'en empêcher et qu'un officier se bouche le nez."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065870",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Présentée au Salon de 1824, toile de plus de quatre mètres de haut.",
                "Delacroix est pleinement romantique, mais rattaché à une « filière orientaliste » tournée vers la Méditerranée : son inspiration et sa charge dramatique viennent d'un « ailleurs » géographique et culturel.",
                "L'œuvre s'inscrit dans l'**internationalisation des regards artistiques** au XIXe siècle, alors que les expositions universelles mettent en contact des cultures visuelles éloignées.",
                "Face au Bonaparte de Gros, vingt ans plus tôt, elle mesure le chemin parcouru entre un romantisme timide, contenu par l'héritage néoclassique, et une peinture pleinement assumée dans son engagement dramatique et politique."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Des familles grecques attendent la mort ou l'esclavage lors des massacres de la guerre d'indépendance grecque, sur l'île de Scio.",
                "Un sujet d'actualité politique, traité avec une intensité émotionnelle et chromatique typiquement **romantique**."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065872",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peinte à l'automne 1830 et exposée au Salon de 1831, elle commémore les **Trois Glorieuses** de juillet 1830.",
                "Paradoxe selon le cours : Delacroix, déjà installé comme artiste (« trop âgé » pour être un jeune insurgé), montre la Révolution « d'une autre manière » que ses prédécesseurs, par une allégorie intemporelle plutôt qu'un épisode daté et localisé.",
                "L'image est devenue LA représentation de la Révolution dans l'imaginaire collectif, « trop rarement associée » à son contexte, le début de la monarchie de Juillet, plutôt qu'à 1789.",
                "Sa persistance se voit dans la reprise par Martin Argyroglo pour son œuvre Nation, en une de L'Obs le 14 janvier 2015.",
                "Une œuvre née d'un moment politique précis peut se détacher de son contexte et devenir une **image collective** réactivée à chaque crise, comme le sera la Vénus de Milo."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une femme du peuple coiffée du **bonnet phrygien**, incarnation de la Liberté, mène un groupe hétéroclite par-dessus une barricade.",
                "Elle tient le drapeau tricolore dans une main et un fusil à baïonnette dans l'autre."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010277627",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Statue hellénistique (vers 150-125 av. J.-C.) retrouvée en avril 1820 sur l'île de Milo, incomplète : il manque le bras gauche, une grande partie du bras droit et le pied gauche.",
                "Sa découverte est quasi contemporaine du Bonaparte de Gros et de la Scène de déluge de Girodet.",
                "Cas d'école de la manière dont une même référence antique est utilisée de façons opposées : au XIXe siècle, les sculpteurs s'appuient sur elle pour retrouver « la force de l'antique », avec révérence envers le modèle grec.",
                "Au XXe siècle, les artistes la **détournent** : la Vénus de Milo aux tiroirs de Salvador Dalí (Art Institute de Chicago), la version d'Arman (1992, rue Jacques Callot), l'Eroded Venus de Daniel Arsham (2000).",
                "Formule du cours : « dans un cas référence et dans le second bouleversement ».",
                "En clôture, elle invite au recul : le XIXe siècle romantique et néoclassique n'a cessé de dialoguer avec l'**Antiquité**, tantôt en s'y référant, tantôt en s'en émancipant, dialogue que le XXe siècle poursuit par la rupture."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "richelieu_1629-1664_poussin-lorrain-heritage-carrache",
    "musee_id": "louvre",
    "titre": "[Louvre] [Aile Richelieu] [1629-1664] Poussin et Le Lorrain : l'héritage des Carrache",
    "date_creation": "2026-11-03",
    "cours_source": "Histoire générale de l'art 3 (XVIIe siècle), séance 4 « La tentation de l'Italie » (Aude Prigot, 30/09/2024) et diaporama du cours",
    "fil_conducteur": "Poussin et Claude Lorrain, installés à Rome, sont les héritiers de l'académie des Carrache : triangles emboîtés, ligne serpentine, couleurs primaires et lumière organisent leurs compositions. Du jeune Poussin encore vénitien au Lorrain qui structure le paysage par la lumière, le parcours suit la façon dont ces Français ont fait passer cet héritage romain à la peinture française.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "cl010062516",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Poussin, encore jeune et installé à Rome, est sous l'influence de **Venise** : le cours y voit la preuve qu'il part du Titien avant de s'en émanciper.",
                "Point de départ du parcours : Poussin va chercher une rigueur de plus en plus affirmée, héritée de l'académie des **Carrache** par son maître le Dominiquin."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Deux récits complexes sont résumés avec une parfaite lisibilité : le corps allongé de Narcisse dessine une **horizontale**, l'arbre une **verticale** centrale, qui donnent la stabilité.",
                "Le mouvement vient d'un système d'**obliques** de part et d'autre de l'arbre : branches, position de la nymphe, flamme et flèche de Cupidon.",
                "À observer : la tunique de Narcisse, dont les **aplats de couleur** superposés viennent directement du Titien.",
                "Ces aplats rappellent la Bacchanale du Titien, que Poussin cite dans d'autres toiles de cette période."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le tableau juxtapose deux récits des **Métamorphoses** d'Ovide.",
                "À l'arrière-plan, la nymphe Écho, condamnée par Héra à ne répéter que les derniers mots entendus, aime Narcisse sans pouvoir le lui dire.",
                "Au premier plan, Narcisse, puni par Némésis pour avoir repoussé ses prétendantes, s'éprend de son reflet dans l'eau et dépérit.",
                "Écho, à force de le contempler, devient rocher, d'où l'écho des falaises.",
                "Un petit Cupidon au centre porte une flamme."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062438",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Poussin applique sa rigueur à un sujet de chaos. Le cours pose la question : comment composer de façon parfaitement ordonnée une scène de violence pure, donc la réalité inverse ?",
                "La première version, vers 1635 (New York), donne une impression de chaos, en **frise**, dominée par Romulus.",
                "La version du Louvre, vers 1637-1638, est beaucoup plus structurée que celle de New York.",
                "Ces principes, triangles emboîtés et accordéon, seront repris par les peintres français, de l'atticisme parisien à Le Brun ; on les retrouve, plus apaisés, dans Les Bergers d'Arcadie."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Des architectures à l'arrière-plan bouchent la perspective et ramènent le regard sur le premier plan, avec un seul **point de fuite** pour que la scène ne soit pas oppressante.",
                "Les verticales fortes des architectures stabilisent l'ensemble de la scène.",
                "L'apparent désordre des enlèvements suit une disposition en **W** ou en **accordéon** : le regard va de Romulus au couple du premier plan, repart en oblique vers l'arrière-plan, revient, et ainsi de suite.",
                "Les groupes se répondent : couples en fuite, femmes portées par des hommes, cavalier vu de face puis de dos.",
                "Poussin se limite aux trois **couleurs primaires**, bleu, jaune et rouge : une gamme restreinte assure la stabilité, alors que trop de couleurs donnent une impression de mouvement. Le bleu domine."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Tiré de Tite-Live et de Plutarque, le tableau raconte comment Romulus, pour peupler Rome, fait enlever les femmes des Sabins, un peuple ennemi."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062528",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le cours juge ce tableau important d'un point de vue pédagogique : Poussin y passe de l'influence vénitienne à un style qui lui est propre.",
                "La pensée **néo-platonicienne** du milieu romain de Poussin est si exigeante qu'on a mis du temps à comprendre le sujet.",
                "Comparez avec la première version, vers 1629 (Chatsworth), où les bergers se précipitaient vers le cénotaphe."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La végétation ferme l'arrière-plan et oblige à se concentrer sur le premier plan ; le tombeau placé de biais crée la perspective.",
                "Les groupes s'ordonnent en **symétries inversées** : un homme debout à gauche, une femme debout à droite, un berger agenouillé de chaque côté.",
                "La femme fait **repoussoir** et notre regard est conduit aux doigts du berger qui désignent le texte.",
                "Poussin n'utilise que les trois **couleurs primaires**, bleu, rouge et jaune, pour la stabilité, avec un dernier reste vénitien dans le costume de l'homme de gauche.",
                "Cette lisibilité cherchée se retrouve, plus personnelle, dans son autoportrait."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Des bergers se penchent sur un tombeau dans un paysage élégiaque, où se lit l'inscription « Et in Arcadia ego », « Moi aussi j'ai vécu en Arcadie ».",
                "L'**Arcadie**, royaume fictif de félicité absolue, était d'abord comprise comme le regret d'un paradis perdu par le défunt.",
                "Le cours précise qu'en réalité c'est la mort elle-même qui dit résider en Arcadie : où qu'on vive, on reste soumis aux lois de l'existence."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065384",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Poussin, qui vit à Rome, se représente en 1650 pour son ami et mécène Paul Fréart de Chantelou.",
                "Le cours distingue cet autoportrait des autres : il porte tout un discours **allégorique**.",
                "Ce tableau de réflexion sur la peinture prépare les Quatre Saisons, où il défend sa vision du paysage."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le buste, tout en noir, s'inscrit dans un **triangle**.",
                "Derrière lui, des tableaux empilés contre un mur et le chambranle de la porte forment un réseau de verticales et d'horizontales qui structure la composition ; cette vue d'atelier n'a rien d'accidentel.",
                "Le fond gris et brun, couleurs neutres, met en valeur les trois **couleurs primaires**, rouge, jaune et bleu, apparaissant sur les tableaux."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Au premier plan, le revers d'une toile porte, en italien, une dédicace : l'effigie de Poussin faite à Rome en 1650.",
                "Dans l'un des tableaux, une jeune femme au diadème orné d'un œil, allégorie de la peinture savante, est étreinte par deux mains, sans doute celles du mécène : grâce à l'amitié de Chantelou, la peinture de Poussin vit.",
                "Niveau symbolique : la main appuyée sur un carnet de croquis porte une bague au diamant en pointe, pyramide, symbole de **constance**.",
                "Cela fait trois références à sa gratitude : explicite, allégorique, symbolique."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062521",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le Printemps appartient aux quatre saisons de Poussin, peintes entre 1660 et 1664 pour le duc de Richelieu, entreprise majeure de la fin de sa vie et véritable **testament**.",
                "Le cours y voit un plaidoyer : le paysage n'étant pas un genre noble dans la hiérarchie des genres, Poussin défend qu'il a toute son importance.",
                "Chaque saison renvoie à un récit de l'Ancien Testament, à un moment du jour et à un âge de la vie, dans la lignée **néo-stoïcienne**.",
                "Cette réflexion sur le paysage mène à Claude Lorrain, pour qui la lumière structure tout."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les quatre tableaux ont la même composition : végétation formant de fortes verticales, figures principales au centre, **triangles emboîtés** du premier plan à l'arrière-plan comme dans L'Enlèvement des Sabines.",
                "Comme dans Les Sabines, les **couleurs primaires** assurent l'équilibre.",
                "Poussin y reprend la **ligne serpentine** et les triangles du Dominiquin, élève des Carrache.",
                "Poussin aime aussi surprendre : ni feuilles mortes en automne, ni neige en hiver.",
                "La touche est plus tremblée, due à la maladie qui lui fait trembler la main, non à un choix."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le paysage est ici le **paradis terrestre** : Adam et Ève dans le jardin d'Éden, avant leur faute, avec Dieu qui apparaît.",
                "Ève montre le fruit défendu à Adam ; la scène se passe le matin et tout est lumière divine avant le péché, la lumière devenant lointaine après.",
                "Un dialogue s'instaure entre fertilité et stérilité, destruction et naissance."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062436",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Poussin peint ce tableau en 1648 pour son ami le banquier Jean Pointel, à la différence de la série des Sacrements faite pour un autre ami, Chantelou : le cours dit qu'il le peint pour reposer son esprit.",
                "Cette **ligne serpentine**, Poussin la tient du Dominiquin et des Carrache, autre étape vers Claude Lorrain, qui reprend la structure par la lumière."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Composition très structurée : des architectures ferment l'arrière-plan à gauche et à droite, comme des **coulisses de théâtre**, et ouvrent une perspective au centre ; le couple est isolé par un ovale.",
                "Les jeunes femmes, en frise comme les bas-reliefs antiques, forment une ligne serpentine, ondulation chorégraphiée des corps et des bras, qui guide le regard.",
                "Les cruches, tantôt en haut, tantôt en bas, jamais au même niveau, font circuler le regard.",
                "À observer : la jeune femme à la cruche sur la tête, qui regarde le spectateur, cite Raphaël (L'Incendie du Borgo).",
                "La chorégraphie des bras renvoie au groupe antique des **Niobides**."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le sujet vient de la **Genèse** : Abraham envoie son serviteur Éliézer chercher une épouse pour son fils Isaac, et Dieu désigne celle qui proposera la première à boire au puits.",
                "Poussin choisit le moment clé : au centre, Éliézer offre un anneau d'or à Rébecca, qui accepte en posant la main sur sa poitrine.",
                "Autour d'eux, des jeunes femmes viennent puiser l'eau."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010061024",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Claude Gellée, dit le Lorrain, autre Français installé à Rome, connaît Poussin ; héritier des Carrache et de la tradition du paysage **historique** ou héroïque, il va plus loin que lui.",
                "Pour Claude, le sujet n'est pas l'essentiel, au point qu'on ne le devine pas sans lire le titre ; l'important est la **lumière**, qui module et structure le paysage.",
                "Le cours rapproche cette étude de lumière du Port avec l'embarquement de la reine de Saba (1648, National Gallery), où le soleil est déjà au centre ; ici il va encore plus loin.",
                "Ce travail inspirera Turner (Le Dernier Voyage du Téméraire).",
                "Comme Poussin avec la ligne serpentine et le triangle, Claude reprend la structure de l'académie des Carrache, mais c'est la lumière qui assure la construction.",
                "Ces deux héritiers des Carrache ne cesseront d'essaimer, de Reynolds, David et Ingres à Cézanne, Picasso et Turner."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Dans un port, des éléments d'architecture forment comme des **coulisses de théâtre** : verticales fortes qui conduisent le regard vers le point de fuite, où se trouve le soleil.",
                "Claude réussit à placer le soleil de face sans éblouir, et le cache même derrière un bateau : la lumière contourne la coque.",
                "L'ombre de la coque crée l'axe central menant à la perspective, tandis que la lumière dessine les deux lignes obliques qui arrivent au **point de fuite**."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le tableau, daté de 1644, montre Ulysse remettant Chryséis à son père."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "denon_1592-1640_caravage-caravagisme",
    "musee_id": "louvre",
    "titre": "[Louvre] [Aile Denon] [1592-1640] Du Caravage au caravagisme",
    "date_creation": "2026-11-03",
    "cours_source": "Histoire générale de l'art 3 (XVIIe siècle), séance 1 « Les révolutions silencieuses » (Aude Prigot, 09/09/2024), séances 4 et 5 et diaporama du cours",
    "fil_conducteur": "De la réforme des Carrache, qui rend les images lisibles et stables, à la « méthode » caravagesque du Caravage, fondée sur le cadrage à mi-corps, le fond neutre et la lumière oblique, le parcours suit la diffusion de cette manière chez Manfredi, Reni et les Français de Rome, Valentin de Boulogne et Vouet, jusqu’à la rupture de Vouet avec le caravagisme.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "cl010066832",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Grand retable cintré, haut d'environ quatre mètres et assez étroit, qui sert de **manifeste** à la réforme des Carrache, rejetant les compositions saturées et illisibles du maniérisme.",
                "Commande très encadrée : un contrat précisait tout ce qui devait figurer, pour la chapelle des notaires de la cathédrale de Reggio Emilia (commande de 1589, tableau achevé en 1592).",
                "Cette clarté est exactement celle que réclame la **Contre-Réforme** ; le Caravage va réformer autrement, par le cadrage et la lumière."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Malgré le grand nombre de personnages, le cours insiste sur la **lisibilité** : la composition est stable, bâtie sur des lignes droites.",
                "Un premier triangle longe les corps de sainte Catherine et de saint Luc, un second, pointe en haut, englobe la Vierge et l'Enfant, d'où un losange.",
                "Pour éviter l'ennui d'une trop grande stabilité, un **ovale**, peut-être un 8, enserre la scène et guide le regard de saint Luc à Jésus puis à sainte Catherine.",
                "Au centre, une échappée sur le paysage aère l'espace, à l'inverse de la saturation d'un Rosso.",
                "Références explicites à la Renaissance : le **sfumato** du Corrège nimbe le visage de sainte Catherine.",
                "La pose de saint Luc, torse en torsion par rapport aux jambes et genoux décalés, vient des Ignudi de Michel-Ange.",
                "Le drapé rouge de la Vierge doit ses plis à une couche de blanc transparent posée sur le rouge."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Saint Luc, patron des notaires, que son bœuf permet d'identifier, et sainte Catherine, patronne des clercs de notaires, font face à la Vierge et à l'Enfant.",
                "La Vierge et l'Enfant apparaissent dans les nuées avec les quatre évangélistes et une nuée d'anges ; les nuages marquent la frontière entre le monde terrestre et le monde céleste."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062329",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le sujet est très réaliste : de telles scènes de lecture de la main se jouaient dans les rues de Rome.",
                "Le tableau a été offert à Louis XIV en 1665 par le prince Camillo Pamphili.",
                "Le Caravage y pose ce que ses imitateurs reprendront : mi-corps, fond neutre, lumière oblique."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Composition simple en apparence, mais d'une grande efficacité de **mise en scène**, qui fait la signature du Caravage.",
                "Il reprend le **cadrage narratif** des portraits du nord de l'Italie, à mi-corps, comme dans le Granvelle de Titien : les personnages sont proches de nous, on pourrait faire partie du groupe.",
                "Le fond est neutre, rien ne détourne le regard ; une lumière oblique, en diagonale, donne la tridimensionnalité et évite l'effet de figures plaquées sur le mur.",
                "Observez la gémellité des protagonistes : le turban de la jeune femme et le chapeau du jeune homme dessinent deux cercles qui se répondent.",
                "Le chapeau du jeune homme, rejeté en arrière, ne pourrait pas tenir : c'est un effet voulu.",
                "Les bras repliés forment une parenthèse qui referme la scène ; un ovale, du pommeau de l'épée à la main, au coude, au turban, puis au plumet, enserre les deux figures."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une jeune femme lit l'avenir dans la main d'un jeune homme et, ce faisant, lui retire un anneau d'or du doigt : c'est le nœud du récit.",
                "L'anneau a disparu lors d'une restauration du XIXe siècle.",
                "La lumière sert le récit : la femme, symbole de duplicité, reste dans l'ombre, tandis que le visage du jeune homme, symbole de naïveté, est en pleine lumière."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062304",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Toile monumentale, de plus de trois mètres et demi de haut, grand tableau d'autel du Caravage.",
                "Laerzio Cherubini commande le tableau en 1601 pour l'église Santa Maria della Scala, à Rome, au Trastevere ; terminé à la fin de 1605 ou au début de 1606, il est refusé par le clergé de l'église.",
                "Il passe chez le duc de Mantoue, Ferdinand Gonzague, en 1607, puis chez Charles Ier d'Angleterre, avant le banquier Everhard Jabach, qui le vend à Louis XIV en 1671.",
                "Ayant tué un homme en 1606, le Caravage quitte Rome et perd tout contrôle sur ses imitateurs ; les caravagesques reprendront surtout les formules, comme le montre Manfredi dans la salle."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les principes posés pour le Caravage servent de grille de lecture : un caractère naturel, jugé parfois trop trivial par les contemporains.",
                "Le goût de la **mise en scène** sous une apparente sobriété.",
                "Surtout, un **clair-obscur** de plus en plus violent au fil de la carrière, mis au service du récit."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065021",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Manfredi (1582-1622) est le continuateur du Caravage, et ce tableau illustre le **caravagisme**.",
                "Le Caravage ne voulait pas d'imitateurs : il n'avait pas d'atelier et n'a laissé ni méthode ni écrits.",
                "Manfredi a eu l'idée de la « manfrediana methodus », un art de peindre comme le Caravage, résumé par « le Caravage pour les nuls ».",
                "La méthode retient les thèmes préférés du maître : joueurs de cartes, diseuses de bonne aventure, concerts, David contre Goliath ; ici, David avec la tête de Goliath.",
                "Le cours demande de comparer avec le Caravage : la transmission n'a pas été directe et la méthode laisse passer des erreurs."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La méthode retient le cadrage à mi-corps, le fond neutre, la source lumineuse oblique censée créer le volume et un clair-obscur très accentué.",
                "Tous les principes extérieurs sont présents, mais la lumière ne sert plus le récit : elle arrive en oblique et noie une partie du visage de David dans l'ombre.",
                "Chez le Caravage, la lumière soulignait le geste de dégoût et le bras avancé ; ici elle ne sert qu'à copier le maître, distinguant ou noyant des parties du corps sans importance pour le récit."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le regard de David est perdu, et la tête de Goliath, repoussante chez le Caravage dès 1600, est ici un visage presque endormi à la chevelure sympathique.",
                "Le tout est élégant et posé : on ressent une marche triomphale là où le Caravage faisait ressentir le dégoût d'avoir commis un acte horrible, même pour le bien de la communauté.",
                "Le titre même, Triomphe de David, dit ce déplacement : « La force du récit se dilue »."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010066335",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Guido Reni (1575-1642), élève de l'atelier des Carrache, les suit à Rome pour rejoindre le chantier Farnèse, puis s'approprie l'art du Caravage.",
                "Le cours en fait « un bon exemple de séduction » du caravagisme chez les élèves des Carrache : le tableau est une synthèse entre la peinture des Carrache et les postulats du Caravage.",
                "L'inspiration de l'**Antique** est une infidélité au Caravage, qui refusait de s'en inspirer ; l'antique reviendra, tout autrement, chez les Français caravagesques de Rome, comme Valentin de Boulogne."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La pose du David, très structurée, reste **carrachesque**.",
                "Une ligne serpentine guide le regard : la plume, la tête, le profil, le cou, le bras, la peau de bête, la jambe, le genou, le pied.",
                "Cette courbe contrebalance les lignes droites de la composition, la colonne brisée d'un côté et le piédestal de l'autre, deux ensembles de droites interrompus par la courbe.",
                "Le dessin du corps s'inspire de l'Antique : le cours reconnaît le Satyre jouant de la flûte, avec la jambe pliée par-dessus l'autre."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le sentiment d'horreur est bien là, avec la marque de la fronde, très visible sur le front de Goliath, héritage du Caravage."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010061972",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Valentin de Boulogne (1591-1632) arrive à Rome en 1611 et y reste jusqu'à sa mort ; il fréquente Simon Vouet et d'autres Français caravagesques, comme Vignon, Régnier et Tournier.",
                "Le tableau reprend l'iconographie du Caravage, selon des règles popularisées par Manfredi : thème du concert, manches rayées, chapeaux à plumes posés trop en arrière de façon à dessiner un cercle.",
                "Nicolas Tournier, élève de Valentin, reprendra la stèle et le buveur de dos.",
                "Le bas-relief, qui représente les noces de Pélée et de Thétis, est une référence à l'**Antique** que le Caravage détestait."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Cadrage resserré, fond neutre, lumière en biais et violents contrastes d'ombre et de lumière, comme chez le Caravage.",
                "Composition très rigoureuse : le dessus de la stèle trace une horizontale, son arête une verticale qui coupe en deux le garçon vu de dos.",
                "Elle repose sur un système d'échos : l'homme qui verse à boire à gauche répond au garçon qui boit à la bouteille, et les deux musiciens sont en position inversée."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Sept personnages, buveurs, chanteurs et musiciens, sont réunis autour d'un bas-relief antique.",
                "Le tableau est silencieux : les personnages ne se regardent pas, chacun est concentré sur son activité ; le petit garçon, seul à pouvoir nous regarder, a le regard perdu.",
                "La comparaison avec le Concert de Honthorst, où l'on communique et où l'on entend presque le bruit, fait ressortir ce contraste ; le Louvre décrit une atmosphère de gravité et de mystère."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010063103",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Portrait de Giovan Carlo Doria, amateur d'art génois, qui montre le caravagisme chez Simon Vouet (1590-1649) pendant sa période romaine, avant son retour en France.",
                "Peint en 1621 à Gênes pour la famille Doria, durant un séjour de Vouet dans la villa du commanditaire, à Sampierdarena.",
                "Vouet explique dans une lettre à Cassiano dal Pozzo qu'il avait refusé jusque-là de faire des portraits, mais que les attentions des frères Doria l'ont empêché de dire non.",
                "Le modèle a longtemps été confondu avec son frère Marcantonio.",
                "Vouet brille alors à Rome, avant que Louis XIII ne l'appelle à Paris en 1627 ; ce retour marque une rupture, il abandonne ce caravagisme, comme le montre l'Allégorie de la Foi au bout du parcours."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Caractéristiques du Caravage : un fond neutre, un cadrage resserré autour de la figure, une source lumineuse venant d'en haut à gauche et partant de biais vers la droite.",
                "L'isolement de la figure, sans attribut qui égaye la composition, donne l'austérité que le cours trouve chez les caravagesques français, comme dans le Jeune chanteur de Vignon ou le Soldat de Tournier.",
                "Le Louvre souligne que c'est l'un des portraits les plus impressionnants de la période italienne de Vouet par ses dimensions monumentales."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010061999",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Cette allégorie conclut le parcours, car elle montre la rupture de Simon Vouet avec le caravagisme.",
                "Arrivé à Paris en 1627 à l'appel de Louis XIII, il rompt avec son style caravagesque et développe une **manière claire**.",
                "Le tableau a été peint vers 1638-1640 pour le château neuf de Saint-Germain-en-Laye."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La palette est lumineuse, avec des couleurs « acides », c'est-à-dire très mélangées de blanc : l'inverse du caravagisme.",
                "Le mouvement domine : une ligne de courbes et de contre-courbes parcourt le tableau, du livre au sol au drapé, aux genoux de la Foi, à son bras, à son épaule et à sa tête.",
                "Pour éviter que l'œil ne dérive, des lignes droites, les colonnes à l'arrière-plan, rétablissent un équilibre.",
                "Autre ressort du mouvement : la liaison organique des formes. Aucun vide entre les éléments, une figure en cache une autre, la Foi enveloppant les deux amours."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le sujet suit l'**Iconologia** de Cesare Ripa ; la pierre et le livre près du pied de la Foi sont ses attributs chez Ripa.",
                "La Foi est couronnée de lauriers parce que le céleste triomphe toujours du terrestre.",
                "Deux amours l'entourent : l'Amour terrestre lui présente des richesses, l'Amour céleste l'invite à regarder vers le ciel ; elle tourne le dos aux richesses et fait triompher le céleste."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "sully_1630-1655_xviie-francais-silence-ordre",
    "musee_id": "louvre",
    "titre": "[Louvre] [Aile Sully] [1630-1655] Le XVIIe français : silence et ordre",
    "date_creation": "2026-11-03",
    "cours_source": "Histoire générale de l'art 3 (XVIIe siècle), séances 5 et 6 « La peinture française au XVIIe siècle » (Laurent Nabias, 07/10/2024) et diaporama du cours",
    "fil_conducteur": "Ce parcours suit la peinture française du XVIIe siècle entre caravagisme silencieux (La Tour, Le Nain) et atticisme parisien (La Hyre, Le Sueur, Champaigne), où la retenue des visages, l'ordre des compositions et une couleur claire héritée de Vouet remplacent les effets violents du clair-obscur.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "cl010066276",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le thème des tricheurs aux cartes a été popularisé par le Caravage ; le cours range ce tableau parmi les preuves de l’**influence caravagesque** sur Georges de La Tour.",
                "Georges de La Tour a l’habitude de décliner un tableau qui fonctionne en plusieurs versions ; celle-ci, avec l’as de carreau, a pour pendant le Tricheur à l’as de trèfle du Kimbell Art Museum.",
                "Le cours juge la version du Kimbell plus aboutie : les aiguillettes, rubans qui rattachent la manche, y sont nouées (dénouées au Louvre), et la dupe est plus isolée, séparée du groupe par un espace plus creusé.",
                "Cette géométrie silencieuse, sans geste théâtral, ouvre le parcours du silence et de l’ordre ; le Saint Joseph charpentier la pousse vers la gravité religieuse."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Fond neutre, cadrage resserré à mi-corps et lumière venue de biais caractérisent l’héritage caravagesque.",
                "Les costumes de fantaisie, dont les manches rayées, guident le regard.",
                "Les aiguillettes nouées de la version du Kimbell créent des lignes verticales stabilisantes qui divisent la scène en deux.",
                "Observez les couleurs : une tonalité neutre rompue par un vert, et un jaune décliné vers l’orangé.",
                "La Tour travaille encore un « module » géométrique : têtes, ruban et chapeaux à plumes se répondent en **cercles et ovales**, tandis que la table, un parallélépipède, rompt avec ces rondeurs."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le dupé, à droite, ne voit pas ce qui se passe, alors que nous, au premier plan, voyons la tricherie.",
                "Les trois autres personnages sont complices : la servante donne des indices à sa maîtresse."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010063817",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Georges de La Tour (1593-1652), longtemps oublié, est redécouvert en 1934 par l’exposition des « peintres de la réalité » ; il se tourne ici vers la foi.",
                "Représentation de la foi à l’**économie de moyens**, à l’opposé de la grande peinture de la Contre-Réforme et de ses nuées d’anges.",
                "Après ce silence sacré vient un silence profane, celui des frères Le Nain, qui peignent eux aussi des figures qui ne font presque rien."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toute la scène est nimbée d’obscurité, mais la lumière dessine des formes géométriques très claires qui stabilisent la composition.",
                "La verticale du bras de Joseph est reprise par sa jambe avancée ; la jambe referme un côté, le dos de l’enfant ferme l’autre.",
                "Un axe vertical est formé par le foret et la bougie.",
                "La solive, placée perpendiculairement, creuse la perspective et donne un repère au sol alors que le fond est noyé dans la pénombre.",
                "Des outils et des copeaux animent discrètement le premier plan."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Joseph, dans son atelier de charpentier, perce une solive posée au sol, tandis qu’un enfant assis près de lui l’éclaire avec une bougie qu’il tient entre ses mains.",
                "Une simple bougie n’éclairerait jamais autant : c’est le visage de l’enfant, le **Christ**, qui illumine la scène et tire l’humanité des ténèbres.",
                "D’où l’inversion des attentes : « c’est l’enfant qui protège le père »."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065571",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Daté de 1643, ce tableau est caractéristique des débuts des frères Le Nain et montre l’influence des scènes caravagesques nocturnes, avec un clair-obscur marqué.",
                "Le cours le rapproche de la Réunion de buveurs de Nicolas Tournier (Le Mans) et évoque les **tabagies** flamandes et néerlandaises, comme Les Fumeurs de Brouwer.",
                "Mais les Le Nain restent « à part » du caravagisme.",
                "Les trois frères ne signent pas de prénom ; l’attribution des mains, Louis ou Antoine pour celle-ci selon le cours, reste une énigme.",
                "Cette retenue, ce silence, relie La Tabagie à la Famille de paysans."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les figures sont alignées en **quasi-isocéphalie** derrière une table qui structure la composition, avec une alternance de poses : un homme de face, un homme de dos.",
                "Deux figures repoussoirs nous font entrer dans le tableau par des obliques.",
                "La composition se divise en deux : trois quarts pour le groupe attablé, le reste pour une figure en retrait près du feu, qui tourne le dos au spectateur et se dérobe, ce qui ajoute une atmosphère mystérieuse."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Les visages sont peu expressifs, d’une grande retenue ; certaines figures nous regardent, ce qui est rare au XVIIe siècle et rend l’œuvre déroutante.",
                "Les personnages ne communiquent pas entre eux : autour d’une table mais sans partie de cartes comme chez La Tour, ils « ne font rien », sans aucune activité."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010066866",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le cours le considère comme le chef-d’œuvre des frères Le Nain, sans doute peint à trois, tant la composition est aboutie.",
                "Ces tableaux ne dénoncent pas la misère paysanne : ils sont destinés à de riches collectionneurs.",
                "Les frères se sont tournés vers le « **genre bas** » pour des raisons économiques, face à l’atelier de Vouet qui accaparait les commandes d’histoire.",
                "Des détails ne sont pas réalistes : un verre en verre rempli de vin coûte trop cher pour un paysan, et le petit chien est un chien de manchon, animal inutile pour une famille pauvre."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le thème emblématique de la famille de paysans autour d’une table est divisé en deux : trois quarts pour le groupe attablé, et sur le côté des enfants près du feu.",
                "Ces enfants tournent le dos ou se montrent de profil perdu, se dérobant au regard du spectateur.",
                "Les têtes sont presque à la même hauteur (quasi-isocéphalie), mais l’**étagement des plans**, avec la femme avancée, l’enfant derrière, la fillette plus loin, crée une dynamique.",
                "La gamme est monochromatique et restreinte, des bruns et des beiges, avec le bleu de la jupe de la jeune femme et, en contrepoids, le rouge du verre de vin."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Autour de la table, trois adultes et trois enfants : un équilibre des générations.",
                "Comme dans La Tabagie, les personnages ne font rien, n’interagissent pas, et les adultes nous regardent droit dans les yeux."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060683",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Atticisme parisien** : terme forgé au XXe siècle par Bernard Dorival et Jacques Thuillier pour une famille de peintres qui, vers 1649-1650, épurent le style français, comme les rhéteurs grecs épuraient leur langue.",
                "La construction est typique de La Hyre et héritée de Poussin.",
                "Cette science du paysage et ce goût d’ordre se prolongent dans le cabinet des Muses de Le Sueur."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Des triangles imbriqués, l’un à l’arrière-plan, l’autre au premier plan, structurent la scène.",
                "Une **ligne serpentine** que l’œil suit de la gauche au premier plan jusqu’à droite, vers les moutons qui s’enfoncent ; les verticales du temple structurent et stabilisent la composition.",
                "Les figures, groupées en triangle, sont disposées en courbes et contre-courbes.",
                "Couleurs de l’atticisme : des associations improbables, comme un vert près d’un marron et d’un violet.",
                "Les mêmes rouges et bleus se répètent au premier plan et au loin, de plus en plus pâles (rouge devenu rose puis blanc), ce qui crée la profondeur par un phénomène optique."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le sujet, simple, vient de la Genèse : Jacob quitte son beau-père Laban avec ses femmes et son troupeau ; Laban le poursuit car ses idoles ont disparu.",
                "Laban soupçonne Jacob, mais c’est en réalité Rachel, sa fille, qui les a dérobées et qui est assise dessus.",
                "Le cours insiste : le vrai sujet est d’abord le **paysage**, un paysage de fantaisie plus européen que proche-oriental."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060624",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ce panneau vient du cabinet des Muses de l’hôtel Lambert, sur l’île Saint-Louis, que Le Sueur décore entre 1652 et 1655 pour Nicolas Lambert.",
                "Le programme est profondément féminin, car le cabinet se trouvait dans l’appartement de l’épouse de Nicolas Lambert.",
                "Selon le cours, ce panneau est l’exemple le plus abouti et le plus révélateur de l’art de Le Sueur.",
                "La composition vient de Poussin ; la palette rappelle Vouet.",
                "Le Sueur avait aussi peint, plus jeune, une Réunion d’amis."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Un bosquet ferme un côté et ses troncs verticaux stabilisent le groupe, le plus large prolongeant le corps de Clio ; une partie ouverte donne sur une perspective qui aère la scène.",
                "Montagnes et figures forment des triangles, mais un **ovale** tracé par les bras, de la tête de Clio à la ceinture de Thalie, puis au masque, à la flûte, et de nouveau à Clio, fait circuler l’œil.",
                "Dans la palette, le rose côtoie le bleu : c’est la « manière claire » de Vouet."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Au plafond du cabinet, Phaéton demande à Apollon, dieu des neuf Muses, de conduire son char.",
                "Clio, Euterpe et Thalie sont filles de Zeus et de Mnémosyne, déesse de la mémoire.",
                "À gauche, Clio, muse de l’histoire, se reconnaît à la trompette de la renommée et au livre ; Euterpe, muse de la poésie lyrique, à sa flûte ; Thalie, muse de la comédie, assise à leurs pieds, au masque.",
                "Les visages sont d’une grande retenue : même le masque censé sourire reste neutre, comme chez les Le Nain."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010066309",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Selon le cours, ce tableau appartient aux débuts caravagesques de Le Sueur, revenu d’un séjour à Rome.",
                "Il a été peint pour Anne de Chambré, qui voulait garder la mémoire de ses amis de jeunesse ; Le Sueur, ami de Chambré, s’y représente lui-même.",
                "Daté de 1640 environ, il a été pris à tort pour une œuvre de Simon Vouet avant d’être rendu à Le Sueur en 1924.",
                "Comme dans les parties de cartes et de concert caravagesques, des hommes sont réunis autour d’une table à angle, héritage de Valentin de Boulogne.",
                "Ce goût pour la clarté mènera à l’**atticisme parisien**."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "L’arête de la table fournit une ligne verticale, la table elle-même une horizontale.",
                "L’homme du premier plan, qui se tourne vers nous, et son drapeau repoussoir dirigent le regard vers le centre.",
                "Le chien, le vêtement d’un homme et les cordes du luth forment une grande **oblique** qui apporte de la rigueur.",
                "La palette est beaucoup plus claire que celle de Caravage, avec des couleurs « acides », très mêlées de blanc : un rose orangé, un vert très clair, un bleu."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Chaque convive incarne une occupation de la haute société masculine : le chien renvoie à la chasse, Le Sueur lui-même au dessin et à la peinture, le joueur de luth à la musique.",
                "L’homme couronné de laurier, qui rappelle Apollon, évoque la littérature ; celui au compas la géométrie ; l’homme en armure l’art de la guerre."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062076",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Cette Cène de 1651-1652 est appelée « petite » pour la distinguer de la grande Cène de Champaigne.",
                "Elle doit beaucoup à Frans Pourbus, peintre flamand venu à Paris à la demande de Marie de Médicis, dont la Sainte Cène est au Louvre.",
                "Ordre, retenue et couleurs contenues : la même leçon que l’atticisme parisien de La Hyre et de Le Sueur, sous une forme plus austère."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le cours y voit une composition très rigoureuse : les apôtres, presque à la même hauteur (quasi-isocéphalie), forment une ligne horizontale qui assoit la composition.",
                "Un réseau de lignes horizontales et verticales la stabilise : corde de la tenture noire, nez du Christ, pli central de son vêtement, assiette, pli de la table, gros orteil.",
                "Les plis de la tenture, de la nappe et le sol de carreaux répondent à cet ordre : « rien n’est dû au hasard ».",
                "Pour éviter une frontalité austère, deux figures **repoussoirs**, comme des parenthèses, forment une boucle et nous font entrer droit sur le Christ.",
                "Le disciple de dos à droite, son coude, son doigt, puis le bras de l’homme en bleu nous conduisent vers le Christ.",
                "La gamme chromatique est très resserrée : vert, rouge, jaune répétés, avec seulement le violet du Christ comme rupture qui souligne sa présence."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "À gauche, Judas se reconnaît à sa bourse et à son vêtement jaune, couleur de la trahison.",
                "Son bras pointé vers nous est relayé par un disciple en vert."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "richelieu_1588-1650_manierisme-rubens",
    "musee_id": "louvre",
    "titre": "[Louvre] [Aile Richelieu] [1588-1650] Du maniérisme à Rubens",
    "date_creation": "2026-11-03",
    "cours_source": "Histoire générale de l'art 3 (XVIIe siècle), séance 12 « Les cartographes de la couleur » (Laurent Nabias, 02/12/2024) et diaporama du cours",
    "fil_conducteur": "Des Pays-Bas du sud : du maniérisme finissant de Cornelis van Haarlem au portrait de pouvoir de Pourbus, puis à la couleur et au mouvement de Rubens, dont le cycle de Marie de Médicis sert de pivot, jusqu'à ses héritiers Jordaens et Van Dyck.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "cl010064767",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Daté de 1588, il ouvre le parcours comme l'état finissant du **maniérisme** dans les Pays-Bas du sud : « un parfait exemple de ce que le maniérisme fait de pire ».",
                "Huile sur toile d'environ 1,70 m sur 2,06 m, entrée au musée par un don de la Société des Amis du Louvre en 1983.",
                "C'est le plus ancien, le plus maniériste et le plus grand des Baptêmes du Christ de Cornelis aujourd'hui connus.",
                "C'est le point de départ que les peintres vont rejeter : comme en Italie, les peintres flamands rompent avec ce style à la fin du XVIe et au début du XVIIe siècle.",
                "Le portrait de Marie de Médicis par Pourbus, qui suit, en offre la réponse la plus nette, par sa rigueur et sa lisibilité."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le récit devient illisible : le premier plan est saturé de figures, obturé par un homme vu de dos qui cache la scène principale et nous interdit d'y accéder du regard.",
                "Les personnages secondaires se tiennent au premier plan, en pleine lumière, tandis que les personnages principaux du baptême sont rejetés à l'arrière-plan, dans l'ombre, **contre toute logique narrative**.",
                "Les corps aux proportions redéfinies par le peintre et les postures peu naturelles, parfois jugées impossibles, relèvent du même goût maniériste pour les représentations au sens caché."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064946",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Portrait de 1610 (le cours le date de l'année de l'assassinat d'Henri IV) : Marie de Médicis est devenue régente au nom de son fils Louis XIII encore enfant.",
                "Elle veut prouver, par ce portrait, qu'elle est apte à diriger la France.",
                "Pourbus, peintre flamand appelé à Paris par la reine parce qu'elle ne veut plus d'un maniérisme jugé obsolète, répond à cette attente.",
                "Le cours rattache l'œuvre à l'appel que Marie de Médicis lance à des artistes étrangers : Pourbus d'abord, puis Rubens, dont la galerie vient plus loin."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Pourbus construit un **« écrin »** destiné à contenir le corps de la reine, dont elle serait la perle ou le bijou.",
                "Regardez d'abord l'arrière-plan : niche, pilastres, colonnes, baldaquin et grille composent un réseau de lignes verticales et horizontales, le marbre et le baldaquin soulignant les horizontales.",
                "Contre cette « boîte » de lignes droites, le corps de la reine se définit par des **courbes et des ovales** : tête, fraise, couronne, bras autour du corps.",
                "Les ovales se poursuivent dans tout le corps, jusqu'à la traîne et à la robe.",
                "Les perles du collier, des bracelets et du pourpoint, ainsi que les manches à crevés, répètent ces rondeurs.",
                "L'arrière-plan est dominé par le rouge des tentures, avec du noir et du blanc.",
                "Ce rouge contraste avec la robe noire semée de fleurs de lys, qui met le corps de la reine en valeur."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060875",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Œuvre de 1618, peinte pour le maître d'hôtel de Saint-Gilles selon le cours, qui prolonge le portrait de la reine.",
                "C'est une peinture flamande de la **rigueur**, à l'opposé du maniérisme, que le cours dit avoir fasciné Nicolas Poussin."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La composition est classique : les figures obéissent à une **isocéphalie** stricte, toutes les têtes se tenant presque au même niveau.",
                "Une grille de lignes droites structure l'ensemble. Verticales : bords de la tenture noire tendue et pli central, qui passe au milieu du Christ et descend jusqu'à son gros orteil.",
                "Ce pli se confond avec celui du vêtement du Christ, sépare le pain du vin et divise le tableau en deux parties égales.",
                "Les horizontales sont celles de la tenture, de la table, des plis de la nappe, des bancs, du carrelage et de la grille.",
                "L'arrière-plan en noir et blanc, très sobre, met en valeur les tenues des disciples, où reviennent le rouge, le jaune et le bleu gris.",
                "Chaque visage est individualisé, comme autant de portraits très différents et expressifs : au Nord, on parle de **tronié** pour ce visage très expressif sans être grimaçant.",
                "Le fil se poursuit avec Rubens, autre maître flamand de la composition, qui y ajoute la couleur et le mouvement."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le jaune, couleur de la traîtrise, est celui de Judas, dont la bourse, prix de sa trahison, est visible au premier plan, dans son dos.",
                "Seule note chromatique singulière, le violet du Christ l'identifie fortement."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060820",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ce tableau appartient à la **Galerie Médicis**, grand cycle profane que Rubens réalise à partir de 1622 pour Marie de Médicis.",
                "Selon le cours, un peintre flamand du XVIIe siècle doit, pour un parcours parfait, avoir peint de grands cycles religieux, comme dans les églises d'Anvers, mais aussi un grand cycle profane.",
                "Rubens attendait une commande de Charles Ier, qui n'est pas venue ; il accepte donc, faute de mieux, ce cycle de vingt-quatre toiles destiné au château du Luxembourg et exposé aujourd'hui au Louvre.",
                "Les toiles du cycle ont été peintes de 1622 à 1625 ; celle-ci mesure 3,94 m sur 2,95 m.",
                "La commande est délicate : Marie veut prouver qu'elle a été une bonne régente.",
                "Louis XIII a pourtant dû mener un coup d'État contre elle en 1617, qui l'a exilée à Blois, jusqu'à son retour à Paris en 1621."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Cherchez le jeu de couleurs qui court sur l'ensemble des panneaux : un bleu gris, un jaune doré et un rouge."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Par diplomatie, Rubens ne montre jamais la reine seule, mais toujours accompagnée de figures tutélaires, mythologiques ou allégoriques, chargées de la guider et de la conseiller.",
                "Le Débarquement à Marseille la montre jeune mariée promise à Henri IV, accueillie par la France : le principe d'accompagnement ininterrompu y est déjà à l'œuvre.",
                "Le cycle débute avec les doubles portraits de ses parents et sa naissance, puis suit les étapes de sa vie."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060839",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Avec ses 3,94 m sur 7,27 m, ce panneau est le cœur de la galerie, son **épicentre**.",
                "Il énonce la raison d'être du cycle : la bonne gouvernance de Marie de Médicis, dont le destin était de diriger la France."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Pour tenir deux histoires dans une toile immense, Rubens la divise en **deux triangles**, dont le plus grand contient Marie.",
                "Toutes les lignes, des figures de la Victoire à la France, à la Providence et aux nobles, convergent vers la reine.",
                "Marie est seule à adopter une attitude de repli, mains sur la poitrine et tête baissée, signe d'acceptation.",
                "Notez la **« liaison organique des formes »** propre à Rubens : aucune rupture entre les figures, qui se superposent sans espace libre, jusqu'à des chiens placés pour combler les vides."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "À gauche, l'apothéose d'Henri IV : le roi rejoint l'assemblée des dieux en haut du tableau, soulevé par Jupiter, reconnaissable à son aigle, et par Saturne, dieu du temps, à sa faucille.",
                "Au bas du tableau, un serpent percé de flèches symbolise le mal qui a tenté de neutraliser le souverain : Ravaillac, son assassin. Sa bonne gouvernance va continuer grâce à sa veuve.",
                "À droite, la France, identifiable aux fleurs de lys de sa jupe, s'agenouille pour remettre à Marie l'orbe du pouvoir.",
                "Minerve, la sagesse, reconnaissable au bouclier orné de la tête de Gorgone, conseille Marie à sa droite ; la Providence divine lui remet un gouvernail.",
                "En bas à droite, des nobles français la supplient d'accepter."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060825",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ce panneau reprend les caractéristiques du panneau précédent dans un format très étroit : 3,94 m de haut pour 1,55 m de large.",
                "Le cours le présente comme une manifestation de la couleur et du mouvement de Rubens, avant de passer à son disciple le plus exagéré, Jordaens."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Comment déployer un récit dans un tel couloir ? La disposition des Parques pourrait donner l'impression de barreaux d'échelle ; Rubens crée donc un **mouvement de balancier** en alternant les poses.",
                "Une Parque est assise en bas, au premier plan, genoux de profil vers la droite ; une autre, à droite, est vue de dos, un peu tournée, jambes du côté gauche.",
                "Une troisième, à gauche, est de face, genoux orientés à droite ; Jupiter, en haut, est assis de profil, jambes à gauche, en opposition à la première Parque.",
                "Junon s'ajoute à ce jeu d'oppositions : on dirait un automate en mouvement.",
                "Suivez le fil de la vie de Marie : il part du pied de la Parque du premier plan et remonte le long de sa jambe et de ses bras.",
                "Il passe ensuite par la Parque de gauche, la jambe de Jupiter, le bras de Junon, puis la tête de Jupiter.",
                "Cette **ligne serpentine** guide le regard du bas vers le haut et de la droite vers la gauche.",
                "Les couleurs dominantes, bleu gris, jaune doré et rouge, variations des trois primaires, relient ce panneau aux autres du cycle."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062150",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Jacob Jordaens est le troisième grand peintre flamand de la période : un Flamand « pur », qui n'est jamais allé en Italie.",
                "Élève, comme Rubens, d'Adam van Noort, qui fut aussi son beau-père, il devient ensuite assistant de Rubens.",
                "Il aime le mouvement comme son maître mais l'**exagère** encore ; il retrouve aussi son goût pour l'absence d'espace libre, les figures se cachant les unes les autres.",
                "Cette toile date de vers 1645-1650 ; elle illustre un épisode de l'Évangile de Jean."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le tumulte est pourtant structuré : les figures s'étagent en quatre plans, en **structure pyramidale**, comme des marches d'escalier, des hommes penchés aux balcons jusqu'aux figures qui basculent vers le spectateur.",
                "L'amplitude des gestes est croissante ; à l'arrière-plan, les verticales de l'architecture apportent de la stabilité, et une ouverture offre une échappée au regard.",
                "L'espace est saturé : le Christ cache le bœuf. Une gamme restreinte de rouge, bleu gris et jaune doré, couleurs de Rubens et de Van Dyck, ramène l'harmonie."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "La toile illustre l'épisode de l'Évangile de Jean : le Christ, armé d'un fouet, chasse du Temple les marchands qui souillent un lieu sacré par leur négoce.",
                "Il se tient à droite, en tunique rouge et vêtement bleu gris, calme et monumental, presque statique, au milieu d'une mêlée de chaos.",
                "Au premier plan, un homme tombe, les pieds en l'air, tourné vers nous, un autre bascule sur le côté, des moutons tentent de s'échapper, un chien saute.",
                "La femme à la corbeille de fruits rappelle un modèle de Raphaël, déjà repris par Rubens dans la Descente de croix d'Anvers."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062167",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Van Dyck, le plus jeune assistant de Rubens à dix-neuf ans, formé à Gênes, s'installe à Londres en 1632 parce qu'il ne parvient pas à faire carrière à Anvers dans l'ombre de l'atelier de Rubens.",
                "Il devient le portraitiste de Charles Ier et de plus de quatre cents aristocrates anglais ; cette toile d'environ 1635 est le fruit de sa période anglaise.",
                "Van Dyck cite **Titien**, que Charles Ier admirait comme lui : le coude avancé vers le spectateur vient du Portrait de Gerolamo Barbarigo, qui étage les plans.",
                "La pose du cheval, sabot levé, vient de l'Adoration des mages de Titien.",
                "Ce modèle influencera Rigaud pour Louis XIV, puis le portrait anglais jusqu'au XIXe siècle, de Gainsborough à Reynolds."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La composition est **bipartite** : une partie fermée à droite, où l'arbre remplace les colonnes des portraits de Rubens, et une partie ouverte à gauche sur un paysage.",
                "Dans le plan intermédiaire se trouvent le cheval, deux valets et le roi, mais seul le monarque se détache sur le fond de la perspective, valets et cheval ayant le bosquet derrière eux."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le tableau invente un portrait de souverain en rupture avec les codes : ni à cheval, ni dans un palais, mais en plein air.",
                "Charles Ier, descendu de cheval, est représenté en **« gentleman farmer »**, gentilhomme campagnard et monarque à la fois.",
                "Des indices rappellent sa dignité : à gauche, un petit bateau dans le paysage évoque la puissance maritime de l'Angleterre.",
                "Seul le roi nous regarde : le cheval incline la tête comme en révérence, les valets détournent le regard."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "richelieu_1620-1670_lumieres-du-nord",
    "musee_id": "louvre",
    "titre": "[Louvre] [Aile Richelieu] [1620-1670] Lumières du Nord : Hals, Ruisdael, De Hooch, Vermeer",
    "date_creation": "2026-11-03",
    "cours_source": "Histoire générale de l'art 3 (XVIIe siècle), séance 13 « Lumières du Nord » (Laurent Nabias, 09/12/2024), notes du 09/12 et du 16/12/2024 et diaporama du cours",
    "fil_conducteur": "Du rire et de la touche libre de Hals aux intérieurs silencieux de De Hooch et Vermeer, le Siècle d'or hollandais fait de la lumière, de la morale des scènes de genre et du paysage (Ruisdael, Potter) l'image d'une jeune nation fière de son territoire et de ses vertus.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "cl010064339",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Frans Hals ouvre le parcours : le costume rayé, le thème de la musique, le cadrage à mi-corps, le fond neutre et l'éclairage latéral venu du haut à gauche relèvent du répertoire des **caravagesques d'Utrecht**.",
                "Hals peint directement sur la toile, sans dessin sous-jacent, ce qui est typique de l'Europe du Nord.",
                "Cette **touche libre** influencera bien plus tard Fragonard, puis les impressionnistes et Manet ; elle est le point de départ du fil du parcours, avant que les peintres de Delft ne passent à des scènes silencieuses.",
                "À côté, La Bohémienne reprend la même recette avec un sujet plus audacieux."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Hals « désaxe » la figure : le corps bascule d'un côté tandis que la tête se tourne à l'opposé.",
                "Le regard trace une **oblique** que suivent le bonnet déséquilibré, le sourire et les rayures du vêtement ; elle s'oppose aux lignes de l'instrument et de ses cordes, ce qui dynamise toute la composition.",
                "Approchez-vous pour voir les touches très épaisses et très larges : mèches de cheveux sur le visage, bonnet et plis du vêtement donnent une impression de mouvement et de vie."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un musicien en buste, un chapeau sur la tête, est un « tronié » (« trogne », « tronche » en français) : une tête d'étude, le plus souvent celle d'un inconnu.",
                "Le **tronié** permet au peintre de travailler les expressions, la lumière et sa propre manière de peindre, sans obligation de ressemblance."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060266",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "La Bohémienne reprend les procédés du Bouffon au luth, avec un sujet plus audacieux : le cours y voit la représentation d'une prostituée.",
                "C'est un **tronié**, visage d'étude qui sert à exercer l'expression, ici porté à la frontière de la scène de genre.",
                "Le modèle a une postérité : Hogarth s'en inspirera pour sa Marchande de crevettes vers 1740, et Fragonard pour le portrait de l'abbé de Saint-Non, au Louvre également."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Comme chez le joueur de luth, le corps bascule d'un côté et la tête de l'autre ; le jeu des regards crée une **ligne oblique** que renforce le sourire.",
                "Les cheveux jouent sur le visage pour l'animer.",
                "Différence nette : l'arrière-plan est davantage travaillé, et la trouée bleue qui rompt le brun du fond dynamise la composition.",
                "Sur la manche, observez un travail de **couleur pure**, mené très rapidement, pour obtenir des figures très vivantes et très expressives."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Les indices de la prostitution sont précis : Hals a élargi volontairement le corsage de la jeune femme.",
                "Ses cheveux sont apparents, alors que les femmes respectables portaient toujours un petit bonnet ou un petit chapeau pour se couvrir la chevelure."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060805",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Pour le cours du 16 décembre, le paysage hollandais est un « paisible jardin fertile » : un territoire où il fait bon vivre, que l'on s'approprie par la peinture, en pleine guerre mais sans la montrer.",
                "Le **moulin à vent** est un élément nouveau que les peintres néerlandais font devenir « un véritable symbole nationaliste » : métaphore du travail de l'homme qui tire la richesse de son territoire, à l'époque de la création des polders.",
                "Le tableau est daté des années 1660, ou 1670 selon les spécialistes, la grande maturité de l'artiste ; il fut acquis pour Louis XVI en 1784.",
                "Le cours cite un autre Ruisdael, Le Moulin de Wijk, au Rijksmuseum, pour rappeler que ces paysages sont souvent recomposés : un paysage qui n'existe pas tel quel, image modifiée mais belle des Pays-Bas, fierté d'une nation."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les horizons sont abaissés et le **ciel** occupe plus de la moitié, voire les deux tiers de la toile, ce qui donne une grande impression de quiétude.",
                "Cherchez le ciel immense et le moulin, puis l'effet de lumière qui a donné son titre au tableau.",
                "Effet de lumière exceptionnel et ampleur panoramique, qui dépassent la simple exigence topographique.",
                "Le titre, très heureusement trouvé, remonte au tout début du XIXe siècle ; les petites figures, dont des baigneurs, sont parfois attribuées à d'autres mains que celle de Ruisdael."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010063553",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "La **scène de genre**, qui représente la vie quotidienne, est très répandue aux Pays-Bas, pays à majorité protestante où l'on se méfie de l'image du Christ et des saints.",
                "Pour montrer la vie vertueuse, on fait des tableaux qui font l'apologie des vertus ou dénoncent les vices.",
                "Le cours rattache cette lumière naturelle très travaillée à l'influence de Fabritius, et rappelle que voir à travers une porte ou une fenêtre ouverte est très connu dans la théorie de l'art néerlandaise.",
                "Le cours rapproche cette scène du Soldat et la jeune fille souriant de Vermeer, qui reprendra l'idée en la resserrant."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "De Hooch aligne trois pièces par un jeu d'**enchâssement des perspectives** : une première en pleine lumière, une seconde dans la pénombre, une troisième à nouveau éclairée.",
                "Le tout est rythmé par des horizontales et des verticales : chaise, chambranles de portes, meuble du fond."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "La Buveuse, que le cours date de 1658, représente un vice, la **luxure**, et chaque détail doit se déchiffrer.",
                "Une jeune femme boit du vin en compagnie de deux hommes, alors que les Néerlandaises respectables boivent de la bière ; sa jupe rouge est très voyante, quand les femmes respectables s'habillent de couleurs sobres.",
                "La vieille femme à l'arrière-plan, qui ne participe pas à l'action, est une entremetteuse.",
                "Le petit chien endormi, symbole de la fidélité conjugale, est endormi ; au fond figure Mercure, messager de Jupiter quand il voulait séduire les nymphes, et à droite un tableau du Christ et de la femme adultère.",
                "L'homme au grand chapeau, dans l'ombre, est le plus à blâmer, alors que la femme est dans la lumière."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064918",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Un motif très fréquent de la scène de genre néerlandaise, que l'on trouve aussi chez Caspar Netscher, montre la dentellière en pied ; Vermeer la montre à mi-corps.",
                "Le cours la relie au Houwelick, best-seller de 1625 à Amsterdam, manuel qui enseigne aux femmes à faire durer leur mariage en gérant leur maison, et où la dentellière est l'avant-dernière étape de la vie d'une femme.",
                "Le cours écarte la **chambre noire**, jamais retrouvée dans l'inventaire de Vermeer, au profit de sa proximité avec Leeuwenhoek, inventeur du microscope : ces perles de couleur pure rendraient l'optique de la lentille."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le tableau est minuscule, de la taille d'un cahier petit format (23,9 x 20,5 cm), et pourtant la jeune femme occupe presque les trois quarts de la composition : c'est « l'idée clé » de Vermeer, **resserrer le cadrage**.",
                "Vermeer nous rapproche de la figure, puis nous repousse en plaçant au premier plan le métier à tisser, la table et le nécessaire de couture.",
                "Ces éléments, qui devraient être nets car proches, sont flous (les fils paraissent liquides) ; le détail se précise vers la jeune femme, et notre oeil, qui déteste le flou, l'ignore et va la chercher.",
                "La lumière sculpte les doigts et la paupière par alternance de taches claires et foncées.",
                "Le fond de « couleurs sales » (beige, café au lait, blanc cassé) fait ressortir les trois couleurs vives, le jaune, le bleu et le rouge."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "La dentellière symbolise la femme qui travaille avec concentration à bien tenir son intérieur, comme les gouvernants doivent bien tenir les Pays-Bas."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064324",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "L'Astronome est daté de 1668 et de 1673. Sa composition est rattachée à la gravure Faust de Rembrandt (1650-1652), qui l'a influencée : même motif du savant face à la lumière.",
                "L'ensemble est un pendant approximatif du Géographe de Francfort.",
                "Proposé à la cour de Louis XVI avec Le Géographe, le tableau est refusé par le responsable des acquisitions, qui le trouve « trop moche ».",
                "Il faut attendre le XIXe siècle et Thoré-Bürger pour que Vermeer, tombé dans l'oubli, retrouve le succès."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un savant au travail est tourné vers la lumière filtrée par les vitraux : pour le cours, la recherche scientifique ne va pas sans la lumière de Dieu.",
                "On reconnaît un globe céleste de Hondius (1600), un manuel d'astronomie de Metius (1621) ouvert sur le chapitre des étoiles, un compas et un astrolabe du XVIe siècle.",
                "Au fond, le tableau Moïse sauvé des eaux fait allusion à la **Providence divine**, en contrepoint de l'activité du savant.",
                "Le modèle a parfois été identifié, sans preuve, à Leeuwenhoek, que le cours cite comme proche de Vermeer et inventeur du microscope."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010059161",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Après les intérieurs de Delft, Paulus Potter fait sortir le regard dans la **peinture animalière**, que le cours du 16 décembre rattache à la fierté nationale.",
                "Les vaches, très représentées, sont les symboles de la prospérité économique du pays ; Potter est aussi l'auteur de portraits de chevaux, dont Le Cheval pie de 1653.",
                "Selon le cours, Potter s'inspire des portraits équestres de Van Dyck, Charles Ier à cheval, et de Titien, Charles Quint à la bataille de Mühlberg, mais il les dépouille du cavalier.",
                "Le cours note enfin l'influence sur Stubbs et sur Rosa Bonheur."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le tableau est un petit panneau de bois, à peine plus de 30 cm de haut.",
                "Une **ombre portée** accentue la présence de l'animal, la ligne d'horizon est abaissée et un arbre ferme l'horizon en dirigeant le regard.",
                "Le cheval vu de dos et en biais crée une impression de dynamisme, comme la vache de dos dans le troupeau du Vacher de Kassel."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un véritable **portrait de cheval**, sans cavalier : un étalon moucheté, de type espagnol avec du sang arabe ou berbère.",
                "En contrebas à droite, un cerf buvant et deux biches ; ce cheval revient dans un autre tableau de 1649.",
                "Il s'agit sans doute autant de représenter une race que de fixer l'image d'un cheval à la demande de son propriétaire."
              ]
            }
          ]
        }
      }
    ]
  }
];
