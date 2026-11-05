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
    "actif": true,
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Centre%20Georges%20Pompidou%20en%202016.jpg?width=800"
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
  },
  {
    "id": "cl010066604",
    "musee_id": "louvre",
    "titre": "Psyché et l'Amour",
    "artiste": "François Gérard",
    "dates": "1798",
    "salle": "Salle 934",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000066604/0001343915_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066604"
  },
  {
    "id": "cl010064831",
    "musee_id": "louvre",
    "titre": "Endymion. Effet de lune (Le Sommeil d'Endymion)",
    "artiste": "Anne-Louis Girodet",
    "dates": "1791",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064831/0000367563_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064831"
  },
  {
    "id": "cl010065426",
    "musee_id": "louvre",
    "titre": "Les Sabines (L'Intervention des Sabines)",
    "artiste": "Jacques-Louis David",
    "dates": "1799",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065426/0001319152_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065426"
  },
  {
    "id": "cl010066486",
    "musee_id": "louvre",
    "titre": "Napoléon sur le champ de bataille d'Eylau (9 février 1807)",
    "artiste": "Antoine-Jean Gros",
    "dates": "1808",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000066486/0000772145_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066486"
  },
  {
    "id": "cl010059198",
    "musee_id": "louvre",
    "titre": "Officier de chasseurs à cheval de la Garde impériale, chargeant",
    "artiste": "Théodore Géricault",
    "dates": "1812",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000059198/0000772153_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010059198"
  },
  {
    "id": "cl010059199",
    "musee_id": "louvre",
    "titre": "Le Radeau de la Méduse",
    "artiste": "Théodore Géricault",
    "dates": "1818-1819",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000059199/0000560597_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010059199"
  },
  {
    "id": "cl010065871",
    "musee_id": "louvre",
    "titre": "Dante et Virgile aux enfers (La Barque de Dante)",
    "artiste": "Eugène Delacroix",
    "dates": "1822",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065871/0000752968_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065871"
  },
  {
    "id": "cl010065757",
    "musee_id": "louvre",
    "titre": "La Mort de Sardanapale",
    "artiste": "Eugène Delacroix",
    "dates": "1827",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065757/0001224148_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065757"
  },
  {
    "id": "cl010065869",
    "musee_id": "louvre",
    "titre": "Femmes d'Alger dans leur appartement",
    "artiste": "Eugène Delacroix",
    "dates": "1834",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065869/0001113206_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065869"
  },
  {
    "id": "cl010066297",
    "musee_id": "louvre",
    "titre": "La Mort d'Élisabeth, reine d'Angleterre",
    "artiste": "Paul Delaroche",
    "dates": "1828",
    "salle": "Salle 701",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000066297/0000353383_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066297"
  },
  {
    "id": "cl010065748",
    "musee_id": "louvre",
    "titre": "L'Apothéose d'Homère (Homère déifié)",
    "artiste": "Jean-Auguste-Dominique Ingres",
    "dates": "1827",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065748/0000134319_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065748"
  },
  {
    "id": "cl010061562",
    "musee_id": "louvre",
    "titre": "L'Étude et le Génie dévoilent l'antique Égypte à la Grèce",
    "artiste": "François-Édouard Picot",
    "dates": "1827",
    "salle": "Salle 644",
    "aile": "Aile Sully",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000061562/0001356550_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010061562"
  },
  {
    "id": "cl010101256",
    "musee_id": "louvre",
    "titre": "Lit de Madame Récamier",
    "artiste": "Jacob Frères",
    "dates": "vers 1799",
    "salle": "Salle 556",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000101256/0000238959_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010101256"
  },
  {
    "id": "cl010101291",
    "musee_id": "louvre",
    "titre": "Guéridon du salon de Madame Récamier",
    "artiste": "Jacob Frères",
    "dates": "vers 1799",
    "salle": "Salle 557",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000101291/0000247640_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010101291"
  },
  {
    "id": "cl010103631",
    "musee_id": "louvre",
    "titre": "Athénienne de Napoléon Ier",
    "artiste": "Martin-Guillaume Biennais, d'après Charles Percier",
    "dates": "1801-1804",
    "salle": "Salle 555",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000103631/0000248224_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010103631"
  },
  {
    "id": "cl010098917",
    "musee_id": "louvre",
    "titre": "Cabaret égyptien de Napoléon Ier",
    "artiste": "Manufacture de Sèvres",
    "dates": "1810",
    "salle": "Salle 555",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000098917/0000236240_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010098917"
  },
  {
    "id": "cl010111605",
    "musee_id": "louvre",
    "titre": "Service à thé de Napoléon Ier et de Marie-Louise",
    "artiste": "Martin-Guillaume Biennais",
    "dates": "1809-1810",
    "salle": "Salle 555",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000111605/0000239822_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010111605"
  },
  {
    "id": "cl010117332",
    "musee_id": "louvre",
    "titre": "Fauteuil du trône de Napoléon Ier aux Tuileries",
    "artiste": "Jacob-Desmalter",
    "dates": "1804",
    "salle": "Salle 552",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000117332/0000241040_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010117332"
  },
  {
    "id": "cl010117913",
    "musee_id": "louvre",
    "titre": "Console",
    "artiste": "Pierre-Philippe Thomire",
    "dates": "avant 1807",
    "salle": "Salle 552",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000117913/0000247181_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010117913"
  },
  {
    "id": "cl010100833",
    "musee_id": "louvre",
    "titre": "Serre-bijoux de l'impératrice (Grand écrin)",
    "artiste": "Jacob-Desmalter",
    "dates": "1809",
    "salle": "Salle 553",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000100833/0000243791_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010100833"
  },
  {
    "id": "orsay-656",
    "musee_id": "orsay",
    "titre": "François Pierre Guillaume Guizot (buste de charge)",
    "artiste": "Honoré Daumier",
    "dates": "1833",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 4",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/francois-pierre-guillaume-guizot-656"
  },
  {
    "id": "orsay-10865",
    "musee_id": "orsay",
    "titre": "La République",
    "artiste": "Honoré Daumier",
    "dates": "1848",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 4",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Daumier%20R%C3%A9publique.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-republique-10865"
  },
  {
    "id": "orsay-68",
    "musee_id": "orsay",
    "titre": "Labourage nivernais (Le Sombrage)",
    "artiste": "Rosa Bonheur",
    "dates": "1849",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rosa%20Bonheur%20-%20Ploughing%20in%20Nevers%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/labourage-nivernais-68"
  },
  {
    "id": "orsay-342",
    "musee_id": "orsay",
    "titre": "Des glaneuses (Les Glaneuses)",
    "artiste": "Jean-François Millet",
    "dates": "1857",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Fran%C3%A7ois%20Millet%20-%20Des%20glaneuses.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/des-glaneuses-342"
  },
  {
    "id": "orsay-345",
    "musee_id": "orsay",
    "titre": "L'Angélus",
    "artiste": "Jean-François Millet",
    "dates": "1857-1859",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 5",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/JEAN-FRAN%C3%87OIS%20MILLET%20-%20El%20%C3%81ngelus%20%28Museo%20de%20Orsay%2C%201857-1859.%20%C3%93leo%20sobre%20lienzo%2C%2055.5%20x%2066%20cm%29.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/langelus-345"
  },
  {
    "id": "orsay-924",
    "musee_id": "orsay",
    "titre": "Un enterrement à Ornans",
    "artiste": "Gustave Courbet",
    "dates": "1849-1850",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 7",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gustave%20Courbet%20-%20A%20Burial%20at%20Ornans%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/un-enterrement-ornans-924"
  },
  {
    "id": "orsay-927",
    "musee_id": "orsay",
    "titre": "L'Atelier du peintre",
    "artiste": "Gustave Courbet",
    "dates": "1854-1855",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 7",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Courbet%20LAtelier%20du%20peintre.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/latelier-du-peintre-927"
  },
  {
    "id": "orsay-195",
    "musee_id": "orsay",
    "titre": "Les Hauteurs du Jean-de-Paris",
    "artiste": "Narcisse Diaz de la Peña",
    "dates": "1867",
    "niveau": "Rez-de-chaussée",
    "salle": "Galerie Seine",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/les-hauteurs-du-jean-de-paris-195"
  },
  {
    "id": "orsay-9493",
    "musee_id": "orsay",
    "titre": "Romains de la décadence",
    "artiste": "Thomas Couture",
    "dates": "1847",
    "niveau": "Rez-de-chaussée",
    "salle": "Allée centrale des sculptures",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Thomas%20Couture%20-%20Les%20Romains%20de%20la%20d%C3%A9cadence%20-%20Mus%C3%A9e%20d%27Orsay.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/romains-de-la-decadence-9493"
  },
  {
    "id": "orsay-98",
    "musee_id": "orsay",
    "titre": "Naissance de Vénus",
    "artiste": "Alexandre Cabanel",
    "dates": "1863",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 3",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Alexandre%20Cabanel%20-%20The%20Birth%20of%20Venus%20-%20Google%20Art%20Project%202.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/naissance-de-venus-98"
  },
  {
    "id": "orsay-904",
    "musee_id": "orsay",
    "titre": "Le Déjeuner sur l'herbe",
    "artiste": "Édouard Manet",
    "dates": "1863",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 18",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Edouard%20Manet%20-%20Luncheon%20on%20the%20Grass%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/le-dejeuner-sur-lherbe-904"
  },
  {
    "id": "orsay-712",
    "musee_id": "orsay",
    "titre": "Olympia",
    "artiste": "Édouard Manet",
    "dates": "1863",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 14",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Edouard%20Manet%20-%20Olympia%20-%20Google%20Art%20Project%203.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/olympia-712"
  },
  {
    "id": "orsay-713",
    "musee_id": "orsay",
    "titre": "Émile Zola",
    "artiste": "Édouard Manet",
    "dates": "1868",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 14",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89douard%20Manet%20-%20Emile%20Zola.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/emile-zola-713"
  },
  {
    "id": "orsay-25651",
    "musee_id": "orsay",
    "titre": "Le Déjeuner sur l'herbe (fragment central)",
    "artiste": "Claude Monet",
    "dates": "1865-1866",
    "niveau": "Niveau supérieur",
    "salle": "Salle 29",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Claude%20Monet%20-%20Le%20D%C3%A9jeuner%20sur%20l%27herbe%2C%20partie%20centrale.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/le-dejeuner-sur-lherbe-25651"
  },
  {
    "id": "orsay-1132",
    "musee_id": "orsay",
    "titre": "Le Berceau",
    "artiste": "Berthe Morisot",
    "dates": "1872",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 10",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Berthe%20Morisot%20-%20Le%20berceau.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/le-berceau-1132"
  },
  {
    "id": "orsay-807",
    "musee_id": "orsay",
    "titre": "Femmes au jardin",
    "artiste": "Claude Monet",
    "dates": "vers 1866",
    "niveau": "Niveau supérieur",
    "salle": "Salle 29",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Claude%20Monet%20024.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/femmes-au-jardin-807"
  },
  {
    "id": "orsay-1151",
    "musee_id": "orsay",
    "titre": "La Classe de danse",
    "artiste": "Edgar Degas",
    "dates": "1873-1876",
    "niveau": "Niveau supérieur",
    "salle": "Salle 31",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Edgar%20Degas%20-%20The%20Ballet%20Class%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-classe-de-danse-1151"
  },
  {
    "id": "orsay-1154",
    "musee_id": "orsay",
    "titre": "Répétition d'un ballet sur la scène",
    "artiste": "Edgar Degas",
    "dates": "1874",
    "niveau": "Niveau supérieur",
    "salle": "Salle 32",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Edgar%20Degas%20-%20Ballet%20Rehearsal%20on%20Stage%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/repetition-dun-ballet-sur-la-scene-1154"
  },
  {
    "id": "orsay-368",
    "musee_id": "orsay",
    "titre": "Gelée blanche",
    "artiste": "Camille Pissarro",
    "dates": "1873",
    "niveau": "Niveau supérieur",
    "salle": "Salle 32",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Camille%20Pissarro%20-%20Gel%C3%A9e%20blanche%2C%20ancienne%20route%20d%C2%B4Ennery%2C%20Pontoise%20-%201873.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/gelee-blanche-368"
  },
  {
    "id": "orsay-105",
    "musee_id": "orsay",
    "titre": "Raboteurs de parquets",
    "artiste": "Gustave Caillebotte",
    "dates": "1875",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gustave%20Caillebotte%20-%20The%20Floor%20Planers%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/raboteurs-de-parquets-105"
  },
  {
    "id": "orsay-497",
    "musee_id": "orsay",
    "titre": "Bal du moulin de la Galette",
    "artiste": "Auguste Renoir",
    "dates": "1876",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Renoir%2C%20Pierre-Auguste%20-%20Dance%20at%20Le%20Moulin%20de%20la%20Galette%2C%201876.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/bal-du-moulin-de-la-galette-497"
  },
  {
    "id": "orsay-10897",
    "musee_id": "orsay",
    "titre": "La Gare Saint-Lazare",
    "artiste": "Claude Monet",
    "dates": "1877",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Gare%20Saint-Lazare%20-%20Claude%20Monet.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-gare-saint-lazare-10897"
  },
  {
    "id": "orsay-328",
    "musee_id": "orsay",
    "titre": "Jeunes Grecs faisant battre des coqs",
    "artiste": "Jean-Léon Gérôme",
    "dates": "1846",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 2",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-L%C3%A9on%20G%C3%A9r%C3%B4me%20-%20Young%20Greeks%20Attending%20a%20Cock%20Fight%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/jeunes-grecs-faisant-battre-des-coqs-328"
  },
  {
    "id": "orsay-153692",
    "musee_id": "orsay",
    "titre": "Dante et Virgile",
    "artiste": "William Bouguereau",
    "dates": "1850",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 3",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/William%20Bouguereau%20-%20Dante%20and%20Virgile%20-%20Google%20Art%20Project%202.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/dante-et-virgile-153692"
  },
  {
    "id": "orsay-16649",
    "musee_id": "orsay",
    "titre": "Naissance de Vénus",
    "artiste": "William Bouguereau",
    "dates": "1879",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 3",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/William-Adolphe%20Bouguereau%20%281825-1905%29%20-%20The%20Birth%20of%20Venus%20%281879%29.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/naissance-de-venus-16649"
  },
  {
    "id": "orsay-246",
    "musee_id": "orsay",
    "titre": "Campagne de France, 1814",
    "artiste": "Ernest Meissonier",
    "dates": "1864",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Louis-Ernest%20Meissonier-Campagne%20de%20France.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/campagne-de-france-1814-246"
  },
  {
    "id": "orsay-1704",
    "musee_id": "orsay",
    "titre": "La Danse (groupe en pierre)",
    "artiste": "Jean-Baptiste Carpeaux",
    "dates": "1869",
    "niveau": "Rez-de-chaussée",
    "salle": "Allée centrale des sculptures",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Danse%20Carpeaux.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-danse-1704"
  },
  {
    "id": "orsay-783",
    "musee_id": "orsay",
    "titre": "La Roue de la Fortune",
    "artiste": "Edward Burne-Jones",
    "dates": "1875-1883",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Edward%20Burne-Jones%20-%20The%20Wheel%20of%20Fortune%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-roue-de-la-fortune-783"
  },
  {
    "id": "orsay-1070",
    "musee_id": "orsay",
    "titre": "Jason",
    "artiste": "Gustave Moreau",
    "dates": "1865",
    "niveau": "Niveau médian",
    "salle": "Salle 59",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Moreau%20-%20Jason%20et%20M%C3%A9d%C3%A9e.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/jason-1070"
  },
  {
    "id": "orsay-1091",
    "musee_id": "orsay",
    "titre": "Orphée",
    "artiste": "Gustave Moreau",
    "dates": "1865",
    "niveau": "Niveau médian",
    "salle": "Salle 59",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Gustave%20Moreau%20-%20Orpheus%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/orphee-1091"
  },
  {
    "id": "orsay-443",
    "musee_id": "orsay",
    "titre": "Jeunes filles au bord de la mer",
    "artiste": "Pierre Puvis de Chavannes",
    "dates": "1879",
    "niveau": "Niveau médian",
    "salle": "Salle 59",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pierre%20Puvis%20de%20Chavannes%20-%20Young%20Girls%20by%20the%20Seaside%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/jeunes-filles-au-bord-de-la-mer-443"
  },
  {
    "id": "orsay-140626",
    "musee_id": "orsay",
    "titre": "Futur (Une jeune femme anglaise)",
    "artiste": "Fernand Khnopff",
    "dates": "1898",
    "emplacement_note": "Salle à confirmer",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/futur-140626"
  },
  {
    "id": "orsay-20838",
    "musee_id": "orsay",
    "titre": "Sommeil de Caliban",
    "artiste": "Odilon Redon",
    "dates": "1895-1900",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sommeil%20de%20Caliban%2C%20par%20Odilon%20Redon.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/sommeil-de-caliban-20838"
  },
  {
    "id": "orsay-148888",
    "musee_id": "orsay",
    "titre": "Bouclier avec le visage de Méduse",
    "artiste": "Arnold Böcklin",
    "dates": "1897",
    "emplacement_note": "Salle à confirmer",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/bouclier-avec-le-visage-de-meduse-148888"
  },
  {
    "id": "orsay-25573",
    "musee_id": "orsay",
    "titre": "Cassandre",
    "artiste": "Max Klinger",
    "dates": "vers 1893",
    "emplacement_note": "Salle à confirmer",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/cassandre-25573"
  },
  {
    "id": "orsay-797",
    "musee_id": "orsay",
    "titre": "Pont de Maincy",
    "artiste": "Paul Cézanne",
    "dates": "vers 1879",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pont%20de%20Maincy%2C%20par%20Paul%20C%C3%A9zanne.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/pont-de-maincy-797"
  },
  {
    "id": "orsay-746",
    "musee_id": "orsay",
    "titre": "La Chambre de Van Gogh à Arles",
    "artiste": "Vincent van Gogh",
    "dates": "1889",
    "niveau": "Niveau supérieur",
    "salle": "Salle 36",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Chambre%20%C3%A0%20Arles%2C%20by%20Vincent%20van%20Gogh%2C%20from%20C2RMF.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-chambre-de-van-gogh-arles-746"
  },
  {
    "id": "orsay-542",
    "musee_id": "orsay",
    "titre": "Le Cirque",
    "artiste": "Georges Seurat",
    "dates": "1891",
    "niveau": "Niveau supérieur",
    "salle": "Salle 38",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Georges%20Seurat%20-%20The%20Circus%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/le-cirque-542"
  },
  {
    "id": "orsay-3024",
    "musee_id": "orsay",
    "titre": "L'Air du soir",
    "artiste": "Henri-Edmond Cross",
    "dates": "vers 1893",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Henri-Edmond%20Cross%20-%20The%20Evening%20Air%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/lair-du-soir-3024"
  },
  {
    "id": "orsay-203574",
    "musee_id": "orsay",
    "titre": "Le Pardon (Bretonnes dans la prairie)",
    "artiste": "Émile Bernard",
    "dates": "1888",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89mile%20Bernard%20-%20The%20Pardon%20%28Le%20Pardon%29%201888.jpeg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/le-pardon-203574"
  },
  {
    "id": "orsay-291",
    "musee_id": "orsay",
    "titre": "Arearea",
    "artiste": "Paul Gauguin",
    "dates": "1892",
    "emplacement_note": "Salle à confirmer",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Paul%20Gauguin%20-%20Arearea%20-%20Google%20Art%20Project.jpg?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/arearea-291"
  },
  {
    "id": "orsay-8028",
    "musee_id": "orsay",
    "titre": "Le Talisman, Paysage au Bois d'Amour",
    "artiste": "Paul Sérusier",
    "dates": "1888",
    "niveau": "Niveau supérieur",
    "salle": "Galerie Françoise Cachin",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Serusier%20-%20the%20talisman.JPG?width=600",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/le-talisman-paysage-au-bois-damour-8028"
  },
  {
    "id": "orsay-8022",
    "musee_id": "orsay",
    "titre": "Femmes au jardin (quatre panneaux)",
    "artiste": "Pierre Bonnard",
    "dates": "1891",
    "niveau": "Niveau médian",
    "salle": "Salle 72",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/femmes-au-jardin-femme-assise-au-chat-8022"
  }
];

window.PARCOURS = [
  {
    "id": "denon_1804-1830_romantisme-contre-neoclassicisme",
    "musee_id": "louvre",
    "illustration": "cl010065872",
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
    "illustration": "cl010062528",
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
    "illustration": "cl010062304",
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
    "illustration": "cl010060624",
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
    "illustration": "cl010060825",
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
    "illustration": "cl010063553",
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
  },
  {
    "id": "denon_1791-1819_neoclassicisme-gericault",
    "musee_id": "louvre",
    "illustration": "cl010059199",
    "titre": "[Louvre] [Aile Denon] [1791-1819] Du néoclassicisme à Géricault",
    "date_creation": "2026-11-05",
    "cours_source": "Histoire générale de l'art 4 (XIXe siècle), cours 5 « Couleur, passion et politique : le romantisme en France » (Cybill Whalley, 29/09/2025)",
    "fil_conducteur": "La peinture d'histoire néoclassique est peu à peu gagnée par le sentiment, le mystère et l'actualité : de Gérard et Girodet à David, puis Gros et Géricault, l'idéal laisse place à l'individu, au drame et à l'histoire contemporaine.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "cl010066604",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Gérard, élève de David depuis 1786, sera portraitiste officiel du Consulat, de l'Empire puis de la Restauration. Ici, il allie **sentimentalisme** et représentation néoclassique.",
                "Le tableau, daté de 1798, est de **format historique** : il traite un sujet mythologique à grande échelle, selon la hiérarchie des genres.",
                "L'œuvre témoigne de l'évolution du néoclassicisme vers l'expression de la **sensualité**, qui n'a pas reçu un accueil unanime : beaucoup furent troublés par ce nouveau style."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **186 x 222 cm**. Psyché hérite de la sculpture antique, mais avec des formes un peu plus charnelles.",
                "Regardez le paysage à l'arrière-plan : il est hérité de la Renaissance, du voyage en Italie et des maîtres italiens.",
                "Regardez le geste de Psyché : mains sous la poitrine, bras croisé sur le buste nu, regard un peu perdu."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Psyché, personnification de l'**âme humaine**, est troublée par le premier baiser de Cupidon, l'Amour.",
                "Son expression est surprise et troublée : c'est « l'entrée du sentiment dans la peinture néoclassique »."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064831",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Girodet est l'un des peintres les plus **intellectuels** de l'entourage de David. Prix de Rome, il se familiarise à Rome avec les antiques et les maîtres de la Renaissance.",
                "Il puise ses sujets dans la mythologie antique, la Bible et la littérature d'Ossian. Le tableau, présenté au Salon de 1793, rencontre un grand succès.",
                "Il s'inspire d'un **bas-relief de sarcophage antique** : la lune y symbolise la mort et Séléné, descendue de son char, veut séduire le plus beau berger, Endymion, endormi par Hypnos."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **198 x 261 cm**. Le néoclassicisme s'allie à l'**immatérialité** : Girodet ne montre pas Séléné, seulement les effets de la lune.",
                "Regardez la lumière lunaire qui baigne le corps du berger : c'est elle, et non la déesse, qui est représentée.",
                "À gauche, Zéphir, le vent de l'Ouest, correspond à la déesse de la brise du bas-relief et guide la lumière vers Endymion."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le jeune berger, le plus beau de tous, est endormi : c'est le sommeil éternel du mythe, éclairé par la lune.",
                "Contrairement à l'imagerie de David, Girodet s'intéresse à l'**immatériel**, au mystère et à la présence du sensible, au lieu de la raison."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065426",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ce n'est pas une commande : David peint dans son atelier du Louvre et décide d'exposer. Il fait payer l'entrée pendant cinq ans, pour environ **50 000 visiteurs**.",
                "En 1799, il prône la **réconciliation des Français** entre révolutionnaires et contre-révolutionnaires, après le traumatisme de la Terreur. Il sert la propagande napoléonienne en touchant l'opinion publique.",
                "David avait installé un miroir pour que le spectateur soit placé au centre de la scène.",
                "La ligne contre la couleur sera un combat, « l'histoire sans fin » qui revient avec les romantiques entre Ingres et Delacroix."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile gigantesque de **385 x 522 cm** : une frise académique sans effet de profondeur, héritée de la sculpture.",
                "Le paysage occupe un tiers de la composition : la colline du Capitole à Rome, dans un style simple et pur.",
                "Regardez les guerriers nus, au corps lisse comme du marbre : la critique jugeait cela incohérent, David y voit héroïsme et forme épurée."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le tableau montre non l'enlèvement des Sabines, comme chez Poussin, mais **l'épisode d'après** : les Sabins tentent de reprendre leurs filles aux Romains.",
                "Au centre, **Hersilie** interrompt le combat entre son mari Romulus, au bouclier orné d'une louve, et son père Tatius, roi des Sabins.",
                "Pour la première fois, David met les femmes au premier plan et au centre de l'épisode historique, avec une iconographie de la charité.",
                "Regardez la femme en rouge, bras levés, bouche ouverte : incarnation de la **Terreur** contenue devant l'innocence et la paix d'Hersilie."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010066486",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Dernier grand tableau de bataille de l'Empire par Gros, élève de David dont il reprend l'atelier. C'est une **commande de l'État**, passée par Vivant Denon, à l'issue d'un concours.",
                "Gros l'emporte parce qu'il montre les désastres et les souffrances de la vie humaine : 9 000 morts français à Eylau, par environ -20 °C.",
                "La presse s'empare du sujet malgré la censure : le bulletin de la Grande Armée parle d'un « spectacle horrible » que « le devoir rendait nécessaire ».",
                "Le sujet moderne prend le pas sur l'histoire antique et valorise l'effort de guerre. À la chute de l'Empire, Gros se suicide en 1835, ne s'accommodant pas de la peinture romantique."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **521 x 734 cm**. Napoléon est au centre, tel une statue équestre, sur son cheval lumineux, dans un geste à la fois christique et absolutiste.",
                "Regardez le paysage de neige, les armes, les morts et les blessés, sans doute amputés ou en train de l'être.",
                "À l'arrière-plan, l'armée française et la ville d'Eylau dans le chaos et les fumées : un paysage brossé qui fait son entrée dans la grande peinture d'histoire."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Napoléon vient sur le champ de bataille, mais « il n'y pouvait rien » : il est déjà trop tard, ces hommes sont morts pour la patrie et le devoir.",
                "Au centre, un soldat implore et remercie le chef ; un autre, allongé, est peut-être piétiné. Murat figure parmi les généraux.",
                "C'est le **fragment romantique** : on représente l'individu dans ses souffrances plus que la valeur morale, ce que Géricault et Delacroix admireront.",
                "Pour les Pestiférés de Jaffa, voir le premier parcours."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010059198",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Première œuvre de Géricault, exposée au Salon de 1812 avec une bonne critique. Formé en copiant au Louvre, il ne s'entend pas avec Vivant Denon.",
                "Géricault réforme la peinture d'histoire en s'intéressant au **revers de la Grande Armée** : peintre de la défaite et des vaincus, inspiré de Gros mais aux antipodes de la propagande.",
                "Pour Henri Zerner, le chasseur « n'appartient à aucune catégorie de peinture » : il combine portrait, anonymat, scène de genre et **format du portrait équestre**."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **349 x 296 cm**. Le romantisme, c'est le mouvement de la scène suggéré par la **touche** : pas de fini néoclassique, une touche rapide.",
                "Regardez le paysage sombre, dangereux, presque apocalyptique, avec le feu : on ne sait pas ce qui s'y passe.",
                "L'anatomie du cheval peut être critiquée, mais sur 2,96 m les proportions sont en fait très bien calibrées."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Géricault représente son ami Alexandre Dieudonné, chasseur de la Garde impériale, homme de rang à la carrière lente, en plein combat : « tombera, tombera pas ».",
                "Ce n'est pas la victoire mais la chute : un portrait équestre d'un anonyme, **anti-héros**, dans une lutte désespérée pour la survie.",
                "Regardez son regard perdu, tandis qu'il tient les brides de son cheval : le drame personnel remplace l'héroïsme traditionnel."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010059199",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Exposé au Salon de 1819 sous le titre de **Scène de naufrage**, pour ne pas critiquer ouvertement la Restauration : le tableau fait un constat, sans attaque antimonarchiste ou libérale.",
                "En juillet 1816, la frégate royale la Méduse, en route pour coloniser le Sénégal, s'échoue. Sur le radeau, 150 hommes s'entassent dix jours : 20 sont emportés, les autres s'entretuent, avec cannibalisme.",
                "Deux survivants racontent l'histoire, Louis XVIII ne peut la nier. Géricault se documente, travaille d'après des cadavres et fragments fournis par des infirmiers de l'hôpital Beaujon.",
                "Présenté en Angleterre, le tableau y est très bien reçu. À Paris, en 1819, il suscite attrait ou répulsion."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **491 x 716 cm** : une frise à la David, lisible, mais en **pyramide** vers le haut, symbole d'une survie qui ne mène pas à la gloire.",
                "Esthétique du sublime, « l'horreur délicieuse » : corps contorsionnés hérités de Michel-Ange, vu en Italie en 1816, et beauté dans la violence.",
                "Regardez les cadavres au premier plan, puis l'Argus minuscule à l'horizon : l'espoir est tout au fond.",
                "Les dessins préparatoires, la Mutinerie ou la Scène de cannibalisme, sont beaucoup plus peuplés."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le tableau montre la lutte pour la survie. Regardez le personnage pensif au voile rouge : il incarne le doute, déjà vu chez Gros, et la violence.",
                "Un personnage pourrait être un portrait de Delacroix, ami de Géricault.",
                "Les « fragments » s'intéressent à l'homme et à ses accidents, pas à une vertu ou à un concept idéal."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "denon_1822-1834_delacroix-ingres-salon-1827",
    "musee_id": "louvre",
    "illustration": "cl010065757",
    "titre": "[Louvre] [Aile Denon] [1822-1834] Delacroix, Ingres et le Salon de 1827",
    "date_creation": "2026-11-05",
    "cours_source": "Histoire générale de l'art 4 (XIXe siècle), cours 5 « Couleur, passion et politique : le romantisme en France » (Cybill Whalley, 29/09/2025)",
    "fil_conducteur": "Le Salon de 1827 et ses alentours : dessin d'Ingres et couleur de Delacroix s'affrontent, entre orientalisme, histoire et « juste milieu » de Delaroche.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "cl010065871",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Delacroix, inconnu de la critique et du public, est reconnu très jeune dès **1822** avec ce tableau : il veut réussir vite, obtenir une médaille et devenir « maître parmi les maîtres ».",
                "Il a rencontré Géricault dans l'atelier de Guérin, à la fois néoclassique et ouvert à la nouvelle peinture ; la mort de Géricault, en 1824, lui laisse la voie libre.",
                "Œuvre conçue pour le Salon, achetée par l'État : le comte de Forbin, directeur du Louvre et successeur de Denon, l'acquiert pour la Direction des Musées royaux.",
                "Les poètes unis dans les souffrances de l'enfer figurent les artistes touchés par le « mal du XIXe siècle », sous la Restauration qui « va serrer la vis » jusqu'en 1830.",
                "Dante, Shakespeare ou Byron justifient l'entrée du **sublime** et des épisodes dramatiques ; Delacroix leur préfère Ossian, laissé aux générations précédentes."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 189 x 241,5 cm : un thème littéraire élevé aux dimensions de la peinture d'histoire, le « grand genre ».",
                "Composition centrée sur les deux poètes, monumentalisés par leurs **drapés** ; regardez Virgile au centre et Dante sur la barque.",
                "Ciel sombre, paysage obscur : l'atmosphère dit d'emblée « vous êtes aux enfers ». Observez les corps des damnés, éclairés contre l'obscurité.",
                "Le traitement rappelle la scène de déluge de Girodet (1806), où l'on ne distingue plus nettement le néoclassique du romantique."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Scène de la Divine Comédie : sur le **Styx**, Virgile et Dante sont conduits par Phlégias, tandis que les damnés s'accrochent à la barque.",
                "Les échecs des régimes politiques successifs se liraient à travers Dante et Virgile aux enfers : le tableau mêle thème littéraire et critique de l'histoire."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065757",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Présenté au **Salon de 1827**, ouvert en 1827 et fermé en 1828, dit « romantique » : plus de 40 % des tableaux relèvent de la nouvelle peinture, devenue officielle.",
                "Le sujet est tiré de *Sardanapalus* de Lord Byron (1821-1822, traduit en France) : un roi assyrien assiégé qui préfère se suicider plutôt que capituler.",
                "Gros le qualifie de « massacre numéro deux » après Scio : il ne comprend pas la nouvelle génération.",
                "Delacroix ne trouve pas d'acheteur : il garde la toile dix-huit ans dans ses ateliers ; le Louvre l'acquiert en 1921."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 392 x 496 cm. Delacroix mélange peinture d'histoire, scène de genre et peinture baroque.",
                "Regardez la **diagonale rouge** du drap qui coule : elle structure la scène, avec une frise en mouvement, le cheval et la femme violentée.",
                "Le bas de la toile fonctionne en frise, avec un cadrage moderne ; la tête d'éléphant et les objets situent la scène en Orient, selon la passion de Delacroix pour les décors.",
                "Le roi, au sommet, est lumineux dans son vêtement sur le drap rouge, à l'inverse du chaos des corps."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Sardanapale ordonne la mort de son harem et de sa maîtresse Myrrha avant de périr sur le bûcher ; une femme se pend au-dessus.",
                "Le roi incarne la « noble simplicité, calme grandeur » de David : suicide, mais tout va bien, il reste calme tandis que femmes et soldats sont violentés.",
                "Le romantisme ne fait pas table rase mais une **subversion** : une critique de la peinture d'histoire par l'histoire elle-même, rendue lisible au spectateur.",
                "Dans la partie inférieure, le groupe des esclaves s'entre-tue avant d'aller sur le bûcher."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065869",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Delacroix voyage au Maroc en 1832, avec le comte de Mornay, ambassadeur de Louis-Philippe : il est invité dans les hautes sphères.",
                "Il ne fait pas poser les femmes du harem : ses carnets de croquis rapportés du voyage serviront jusqu'à la fin de sa carrière.",
                "L'**orientalisme** est une esthétique occidentale liée au romantisme, qui introduit un nouveau thème dans la peinture d'histoire, comme Gros dès 1801.",
                "Delacroix reviendra aux thèmes orientaux jusqu'à sa mort en 1863 ; Saïd rappelle que l'Orient de la peinture est fantasmé par l'Occident."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 180 x 229 cm, au grand format digne d'une peinture historique.",
                "La composition reste **en frise**, héritage de la peinture d'histoire académique, avec des poses lascives loin de Vénus et d'Hersilie.",
                "Regardez le costume, les touches, les babouches et le décor : le peintre s'y attarde, avec un nouveau ciel, de nouvelles couleurs et une nouvelle lumière."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Nouveaux sujets, nouvelle histoire : des femmes dans l'intimité d'un intérieur, scène contemporaine plutôt que mythe ou histoire antique.",
                "Pour Delacroix, l'antique devient une « antiquité vivante » : l'apprentissage classique sert le nouveau thème de l'Orient."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010066297",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Delaroche est le peintre du **juste milieu**, qui deviendra le portraitiste de Louis-Philippe : il mêle drame et retenue dans les émotions.",
                "Le tableau, exposé au Salon de 1827-1828, prolonge l'anglomanie ; le livret renvoie à l'histoire d'Angleterre de David Hume.",
                "Acheté par la Liste civile en 1828 pour 6 000 francs, il est envoyé au musée du Luxembourg ; la nouvelle peinture entre ainsi au musée grâce à Forbin.",
                "Le « juste milieu » désigne aussi Louis-Philippe : se tenir également éloigné des excès du pouvoir populaire et des abus du pouvoir royal."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 422 x 343 cm. Tout est placé pour la **lisibilité** : chez Ossian les personnages étaient difficiles à identifier, ici tout est clair.",
                "La reine, loin du portrait, se perd dans les draps : on la reconnaît à son manteau d'hermine et à un pied qui dépasse.",
                "Regardez les ministres dans l'obscurité et le blason d'Angleterre au fond du tableau."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "La reine Élisabeth rend l'âme en 1603 : l'essentiel se joue du côté des femmes, « royaume de l'émotion », qui prient ou détournent le regard.",
                "Le futur Jacques Ier, reconnaissable à son symbole de chevalerie, reçoit la bague royale ; ses ministres, dans l'ombre, penseront le gouvernement.",
                "Le tableau offre une autre version de l'histoire, centrée sur la mort du héros."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065748",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ingres a fait une grande carrière en Italie, avec deux maîtres, **Raphaël** et Masaccio ; la composition s'inspire du Parnasse de Raphaël.",
                "Commandée pour un plafond du musée Charles X, au Louvre, l'œuvre est exposée au Salon de 1827 ; Baudelaire la juge « un beau tableau qui plafonne mal ».",
                "Le Salon de 1827 oppose les deux écoles, ou plutôt la critique les fait s'affronter : une quarantaine d'individus d'Ingres face au Sardanapale.",
                "Hugo, dans la préface de *Cromwell*, distingue trois âges de la poésie : l'ode, l'épopée, le drame ; en 1827, on étudie le drame."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 386 x 512 cm. Le dessin est présent, avec l'importance de la forme  : on dit que chez Delacroix il y a du dessin et chez Ingres de la couleur.",
                "Regardez Homère assis devant un temple, couronné par la **Victoire**, et l'Iliade et l'Odyssée à ses pieds.",
                "Repérez Virgile à la collerette blanche tenant la main d'Apelle en bleu, Eschyle au rouleau ouvert, Dante en rouge à gauche, Shakespeare et Poussin en bas.",
                "À droite, Pindare avec son instrument, Phidias, Périclès, Platon, le roi Alexandre au casque doré, et Molière en bas."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Tous les artistes antiques et modernes descendent d'Homère, ici divinisé : ils lui doivent tout.",
                "Ces personnages n'ont pas posé : Ingres s'est inspiré de portraits existants."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010061562",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Plafond de la quatrième salle du musée Charles X, actuelle salle 644, commandé à Picot en 1826 et terminé pour l'inauguration du musée en décembre 1827.",
                "Tableau présenté parmi les œuvres du Salon de 1827 : l'Égypte y est fantasmée, car peu d'artistes vont réellement en Égypte.",
                "Edward Saïd, dans *L'Orientalisme*, explique que l'Orient du XIXe siècle est fantasmé par l'Occident ; la Grèce passe ici le flambeau à l'**égyptomanie**."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Plafond monumental d'environ 5,7 x 6,8 m, entouré de voussures aux motifs égyptiens mêlés à des guirlandes.",
                "Regardez l'Étude ailée et le Génie qui tient le flambeau, tournés vers la Grèce.",
                "Repérez la chouette aux pieds d'Athéna, et les clichés égyptiens comme le crocodile."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "L'Étude et le Génie présentent l'Égypte à la Grèce : la Grèce, symbolisée par Athéna, la sagesse, accueille l'Égypte.",
                "Une Égypte érotique et fantasmée, antiquité vivante : l'Orient imaginé par l'Occident."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "richelieu_1799-1810_directoire-empire",
    "musee_id": "louvre",
    "illustration": "cl010101256",
    "titre": "[Louvre] [Aile Richelieu] [1799-1810] Du Directoire à l'Empire : le style de Percier et Jacob",
    "date_creation": "2026-11-05",
    "cours_source": "Histoire générale de l'art 4 (XIXe siècle), cours 2 « Le néoclassicisme en France et en Europe. Les styles Empire » (Aurélie Erlich, 08/09/2025)",
    "fil_conducteur": "Du dépouillé du Directoire, avec le lit et le salon de Madame Récamier, à la magnificence impériale des Tuileries, le parcours suit le vocabulaire antique puis égyptien, porté par le trio Percier, Fontaine et Jacob et par l'orfèvre Biennais.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "cl010101256",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Commande de la toute fin du **Directoire**, vers 1799, pour l'hôtel particulier de Juliette Récamier, rue du Mont-Blanc à Paris, où elle tient de nombreux salons.",
                "Le dessin est de l'architecte décorateur **Berthault**, élève de Percier et Fontaine, qui accorde un soin particulier à la chambre, dont le lit est l'une des pièces maîtresses.",
                "Réalisé par les ébénistes **Jacob Frères**. Un meuble conçu pour un décor perd une part de son histoire une fois sorti du lieu pour lequel il a été commandé.",
                "Il annonce déjà le style Empire : sobriété des lignes, choix de l'acajou, bronzes tirés d'un vocabulaire antique nourri par les fouilles de Pompéi et d'Herculanum.",
                "On pouvait alors recevoir dans sa chambre, d'où la qualité du mobilier."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Lit entièrement en **acajou**, très géométrique : une majorité de lignes droites, retour à la rigueur adoucie par la courbe de la traverse et les légers enroulements des chevets.",
                "Conçu parallèle au mur, il a deux chevets de hauteurs égales, posés sur une sorte de socle aux angles, avec un léger ressaut des extrémités qui donne du volume.",
                "À observer : la marqueterie d'acajou très simple, où le veinage du bois crée relief et profondeur, et le contraste entre bronze doré et bronze patiné à l'antique, qui apporte une polychromie."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Aux extrémités, des femmes en bronze doré vêtues de péplums, coiffées d'un croissant de lune et tenant des torches allumées : elles symbolisent la **nuit**.",
                "Au pied de chaque chevet, des **cygnes** en bronze doré quasiment en ronde bosse, symbole de l'Antiquité qui sera repris sous l'Empire.",
                "Des fleurs de **pavot**, symbole du sommeil, complètent ce programme ornemental lié à la fonction du meuble.",
                "Le tore de lauriers, les palmettes et les rosaces de la partie inférieure viennent directement du répertoire antique."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010101291",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le guéridon appartient au salon de Madame Récamier (guéridon, chaise longue, paire de bergères, fauteuils, chaises, tabourets), œuvre des **Jacob Frères** vers 1798.",
                "La famille Jacob traverse l'Ancien Régime, le Directoire, le Consulat et l'Empire en changeant de nom : Jacob, Jacob Frères, Jacob-Desmalter, c'est la même famille.",
                "Sans corporations, les ébénistes peuvent enfin réaliser chaises et lits en bois plaqué, ce que l'Ancien Régime réservait aux menuisiers, qui n'avaient pas le droit de plaquer.",
                "Le guéridon a appartenu à Juliette Récamier puis à sa nièce Amélie Lenormant ; il entre au Louvre en 1994 par un don."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Plateau en marbre brèche violette dans un encadrement de **citronnier** avec filets, pastilles et rosaces d'étain ; ceinture en bronze guilloché.",
                "Fût triangulaire évasé en acajou, orné d'une rosace en bronze doré, sur trois pieds incurvés terminés par des griffes. Hauteur 74,7 cm, diamètre 75,5 cm.",
                "Le salon se distingue par une grande sobriété : pas de bronze doré, mais l'acajou, le citronnier et l'amarante, précieux pour leur **polychromie**, avec un placage très simple."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Inspiration néoclassique tirée du mobilier dessiné sur les **vases étrusques** : pieds balustres à pattes de lion, pieds étrusques dits en dents de sabre, tabourets à pieds en X, sièges curules.",
                "Les sièges du salon reprennent des draps de laine à galons noirs, imaginés d'après les vases étrusques, et des supports d'accotoirs en sphinges patinées sombres comme des bronzes vieillis.",
                "Madame Récamier est peinte par David dans ce décor, en tenue et coiffure à l'antique : on sort du faste Louis XVI pour une recherche plus archéologique."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010103631",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Une athénienne est un **lavabo** : le nom vient d'un tableau de Vien, « La Vertueuse Athénienne », où une femme grecque fait une offrande sur un trépied.",
                "Réalisée entre 1800 et 1804 pour orner la chambre de Napoléon aux Tuileries, sur une forme donnée par **Charles Percier**.",
                "**Biennais**, à l'origine orfèvre, peut la réaliser car les corporations rigides n'existent plus.",
                "Napoléon l'apprécia tant qu'il l'emporta en exil à **Sainte-Hélène**.",
                "On ne parle d'athénienne que pour les exemplaires très luxueux : on sent le passage aux Tuileries, plus luxueux qu'à la Malmaison."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Petit trépied inspiré des trépieds antiques que l'on voit sur les vases, à socle tripartite aux lignes un peu courbes pour atténuer la rigueur visuelle.",
                "À observer : les pieds en pattes de lion en bronze doré sur une loupe qui donne un effet moucheté, légèrement incurvés et reliés au centre par une entretoise.",
                "Au sommet, l'aiguière destinée à conserver l'eau, et les cygnes aux ailes éployées en ronde bosse qui soutiennent la vasque, le tout en **bronze doré ciselé**."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un dé à chaque extrémité de l'entretoise porte un petit **aigle**, emblème impérial.",
                "Les **dauphins**, qui symbolisent l'eau, relient l'entretoise aux pieds ; avec les cygnes, les entrelacs et les petites palmettes ciselées, ils installent l'univers aquatique propre à un lavabo."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010098917",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ce service à café de 36 pièces, livré en 1810 au palais des Tuileries par la manufacture de **Sèvres**, est le quatrième cabaret égyptien réalisé, l'empereur en ayant fait faire plusieurs.",
                "Les cabarets sont des services à déjeuner : à l'époque on déjeune vers 8 h, et Napoléon prend un déjeuner plus copieux vers 9 h 30 ou 10 h.",
                "Ces objets prennent une place importante dans la vie sociale et protocolaire, avec de nouvelles boissons réservées à la très haute société : café, chocolat, thé.",
                "Le décor puise dans le « Voyage dans la basse et haute Égypte » de **Vivant Denon**, qui accompagnait Napoléon dans l'expédition militaire, aussi « artistique » que technique."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Service à café en porcelaine aux polychromies, à l'intérieur doré : un travail de dorure extraordinaire.",
                "Les formes ne sont pas du tout égyptiennes : seuls les **décors** le sont, comme pour le cabaret de Joséphine.",
                "À observer : la variété des pièces, car les tasses à thé, à café et à chocolat avaient chacune une forme selon leur usage."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Les soucoupes portent les portraits de personnages locaux, bédouins, cheikhs, strictement copiés des dessins de Denon, et les grandes vues égyptiennes viennent de ses planches.",
                "Les **hiéroglyphes** mêlés au décor n'en sont pas : c'est de la copie qui n'a aucun sens, car leur compréhension n'existait pas encore.",
                "Même après Champollion, les artistes peinent à mettre en scène les hiéroglyphes : connaître leur sens ne donne pas la maîtrise de leur grammaire."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010111605",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Service en vermeil livré en 1810 par **Biennais**, l'orfèvre favori de Napoléon, à l'occasion du mariage de l'empereur avec Marie-Louise.",
                "Il devait remplacer auprès de Marie-Louise le service de Joséphine.",
                "Les modèles sont dus à Charles Percier et Fontaine, sur des dessins préparatoires aujourd'hui conservés aux Arts décoratifs de Paris.",
                "Il complétait le service à café en porcelaine de Sèvres aux vues d'Égypte ; ses pièces sont aujourd'hui partagées entre le Louvre et le musée d'Édimbourg."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "L'ensemble comprend notamment un grand samovar, des théières et un petit passe-thé très élégant, dont le col est en bec de cygne.",
                "Le travail se fait en **bas-relief** et en vermeil, dans la virtuosité de l'orfèvre, pour le luxe de la table impériale.",
                "À observer : le grand samovar et les théières, pièces maîtresses de l'ensemble livré avec ses deux coffres."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Décor d'**abeilles**, de cygnes et de petites rosaces à l'antique : l'abeille, non romaine, renvoie aux abeilles mérovingiennes et place Napoléon dans la lignée des rois.",
                "Le passe-thé associe Amphitrite et des chevaux marins, un répertoire antique et aquatique."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010117332",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Fauteuil du trône livré en 1804 par **Jacob-Desmalter** pour la salle du Trône des Tuileries, aménagée pour le sacre du 2 décembre 1804.",
                "Percier et Fontaine conçoivent le décor : grande innovation dans l'agencement héraldique, avec le **N** entouré d'une couronne de laurier et des palmettes.",
                "Depuis le sacre, l'empereur doit afficher aux yeux de l'Europe sa puissance : les arts décoratifs deviennent, comme la peinture et la sculpture, des objets de **propagande**.",
                "Le blocus continental, à partir de 1806, interdit l'acajou : on utilise alors des bois indigènes, orme, frêne, noyer, érable, tilleul."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Dossier beaucoup plus droit, rigueur orthogonale, meuble lourd et massif aux piètements imposants, de plus en plus **architecturé**.",
                "Bois de plus en plus dorés, pour donner l'illusion de meubles en or ; on joue moins sur le placage dans les commandes officielles.",
                "Les couleurs, jaune d'or, vert, cramoisi, violet, pourpre, sont complexes à obtenir et portent une symbolique royale.",
                "À observer : le dossier à tore de laurier sculpté et doré, et les tissus couverts de fil d'or, où l'Empire ne laisse pas un centimètre carré libre."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "L'iconographie reprend le décor guerrier de la Rome républicaine : Napoléon se voit en nouveau César.",
                "Sphinx, renommées, lions, aigles, dauphins, étoiles, palmettes, lyres, et le **N** lauré, initiale de Napoléon.",
                "Les **abeilles**, qui ne sont pas romaines, renvoient aux abeilles mérovingiennes et rattachent Napoléon à la lignée des rois.",
                "On trouve aussi les colliers de la **Légion d'honneur**, apparue à cette période."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010117913",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Console de Thomire datée d'avant 1807, représentative des meubles sculpturaux et massifs du style Empire.",
                "Elle illustre la dernière évolution du style Empire : des meubles beaucoup plus sculpturaux, massifs et assez rigides, où un faste doit s'imposer.",
                "Achetée par le Garde-Meuble en 1812, elle passe par l'Élysée puis le château de Compiègne et rejoint le Louvre en 1957."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Meuble en **racine d'if** rehaussé de bronzes dorés et patinés, avec un beau marbre bleu turquin.",
                "Le plateau, d'environ 1,79 m de long, repose sur deux chimères ailées, un contraste de matériaux entre bois, bronze et marbre.",
                "À observer : la frise de guirlandes et de candélabres, et les griffons affrontés de part et d'autre d'une lyre aux extrémités."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Deux **chimères ailées** en bronze patiné, rehaussées de dorure, supportent la console : un bestiaire antique cher à Percier et Fontaine.",
                "Griffons et lyre complètent ce vocabulaire antique, dans la lignée du bestiaire (cygne, lion, griffon, sphinx) imposé par Percier et Fontaine."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010100833",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Livré en **1809** à l'impératrice Joséphine, peu avant son divorce, il appartient ensuite à Marie-Louise.",
                "La forme est fournie par **Charles Percier** et la réalisation revient à Jacob-Desmalter.",
                "Les intérieurs cachent de petits tiroirs destinés aux parures, sécurisés par un **secret** : un mécanisme que seule connaît l'impératrice, et que l'on changea entre Joséphine et Marie-Louise."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Meuble très architectural, presque un petit **arc de triomphe**, qui s'ouvre par trois vantaux, avec colonnes.",
                "Entièrement en bois d'if moucheté et amarante, et non en acajou, avec incrustations d'amarante, de nacre et de bronze doré.",
                "À observer : la finesse des bronzes dorés et des incrustations de nacre, l'une des plus belles orfèvreries du mobilier."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Décor de bronze doré avec de petits putti et des trophées d'armes.",
                "Les petits **papillons** sont les symboles de l'âme féminine, qui souvent varie et volte."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "orsay_1833-1867_peuple-terre",
    "musee_id": "orsay",
    "illustration": "orsay-345",
    "titre": "[Orsay] [Rez-de-chaussée] [1833-1867] Le peuple et la terre",
    "date_creation": "2026-11-05",
    "cours_source": "Histoire générale de l'art 4 (XIXe siècle), cours 6 « Les réalismes au milieu du siècle » (Cybill Whalley, 06/10/2025)",
    "fil_conducteur": "Entre la Seconde République et le Second Empire, le monde paysan et populaire entre dans la peinture d'histoire : grands formats pour sujets « bas » chez Daumier, Rosa Bonheur, Millet et Courbet, avant que le paysage de Barbizon ne s'impose à son tour.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "orsay-656",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Entre 1832 et 1835, à la demande de son ami Charles Philippon, Daumier exécute les **bustes de charge** : 36 au total, tous conservés à Orsay.",
                "Daumier est un fervent républicain : dès la révolution de 1830, il choisit sa vocation de caricaturiste, dans le journal satirique de Philippon, La Caricature.",
                "Louis-Philippe se voulait dans un « juste milieu également éloigné des excès du pouvoir populaire et des abus du pouvoir royal » : ne pas choisir lui vaut d'être tourné en ridicule.",
                "Ces bustes symbolisent l'**opposition à la monarchie de Juillet** ; Guizot, ministre du régime, sera renvoyé en 1848."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Modèle en **terre crue colorée**, de petite taille (22,5 x 17,5 x 15,4 cm) : regardez ce portrait-charge de petite échelle, presque un objet à tenir.",
                "Ces bustes sont peints à l'huile : observez la couleur appliquée sur la terre, qui accentue le caractère de caricature en volume.",
                "Ici la caricature passe de la lithographie, son média habituel, à la sculpture : Daumier garde son sens de l'essentiel et du trait appuyé."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le sujet est le ministre **Guizot**, figure du pouvoir de la monarchie de Juillet, traité en charge satirique plutôt qu'en portrait officiel.",
                "Les amis et l'entourage professionnel de Daumier figurent aussi parmi les bustes, tel Philippon lui-même, qui a commandé la série."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-10865",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le 24 février 1848, la République est proclamée : il faut une image officielle, et un concours s'ouvre le 14 mars pour « la figure peinte de la République ».",
                "Plus de 700 candidats se présentent, dont Daumier et Jean-Léon Gérôme, deux styles différents à la même période ; Daumier est retenu parmi les 20 finalistes.",
                "Le jury (Ingres, Delacroix, Delaroche) classe Daumier 11e, mais il n'y a **pas de lauréat** : la répression de juin, et une Seconde République qui se veut fraternelle, l'expliquent.",
                "Cette toile marque le début de sa carrière de peintre ; l'esquisse mesure 70 cm de haut."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La figure est stable : elle tient fermement le **drapeau**, et la poitrine dénudée rappelle La Liberté guidant le peuple de Delacroix (1830).",
                "Regardez la femme au centre dominant les enfants à ses pieds : l'un lit, les livres rappellent l'instruction.",
                "En face, la République de Gérôme est néo-grecque : déesse figée, de face, rameau d'olivier, glaive baissé, arc-en-ciel et étoile dans un paysage apaisé."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Daumier propose une République généreuse : « La République nourrit ses enfants et les instruit », sur l'iconographie de la **charité**.",
                "C'est une femme du peuple qui nourrit deux enfants, fusion de la charité avec une image simple, populaire et réaliste."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-68",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "C'est une **commande** passée à Rosa Bonheur (1822-1899) pour le musée de Lyon ; le tableau sera finalement conservé à Paris, au musée du Luxembourg, musée de l'art contemporain.",
                "Exécuté entre 1848 et 1849, il paraît au lendemain de la révolution : le travail des champs devient sujet d'importance, dans un monde paysan marqué par un contraste social.",
                "Elle commence sa carrière en 1841 et se consacre à la peinture de genre, mais dans un **format de peinture d'histoire**."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le format est grand (133 x 206 cm) : regardez comme les attelages s'étirent en largeur, comme dans une frise.",
                "La **frise** héritée des sarcophages antiques est remplacée par des animaux : les bœufs du pays nivernais."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Les héros deviennent les animaux, dans une représentation du labourage au début de l'automne.",
                "Le tableau lie peinture d'histoire, peinture de genre et peinture animalière, et montre une reconnaissance de la **province** et de ses traditions agricoles.",
                "Le réalisme revendique une réalité brute et contemporaine, non édulcorée, mais il y a toujours composition et travail d'atelier."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-342",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Millet est loin d'être inconnu en 1857 : il se fait connaître dès la Seconde République avec une œuvre sociale, représentant les gestes des paysans.",
                "Exposée au salon de 1857, l'œuvre déclenche une **polémique** : certains critiques y voient une lutte sociale, les glaneuses incarnant le prolétariat rural.",
                "Paul Mantz écrit en 1859 que Millet a « rompu avec les vulgarités d'un réalisme mesquin » : les labeurs des champs ont « leur poésie et leur héroïsme ».",
                "Millet est un peintre conservateur, non engagé politiquement : son œuvre est fataliste, l'homme est condamné à porter son fardeau."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 83,5 x 110 cm : un grand format d'histoire pour un sujet « bas ». Regardez la composition en **frise**, le ciel couvrant un tiers du tableau.",
                "Trois femmes, trois positions : se baisser, ramasser, se relever. Observez leurs têtes couvertes, sans visage, aux vêtements de bure en bleu, blanc, rouge.",
                "À l'arrière-plan, le climat change : la récolte du blé et, au fond à droite, un garde à cheval, comme l'instant fécond du Radeau de la Méduse."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le glanage est un travail réglementé : autorisé avant le coucher du soleil, pour ramasser les épis négligés dans les champs moissonnés.",
                "Anonymes, les paysannes sont définies par leur seule tâche : Millet en fait des figures classiques, une image universelle du **labeur**.",
                "Face aux Glaneuses de Jules Breton, plus pittoresques et bucoliques, la dureté du travail se lit dans la forme même des corps chez Millet."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-345",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le tableau est peint à la demande d'un **collectionneur américain** ; Millet l'achève deux ans plus tard, en 1859.",
                "Inspiré d'un souvenir d'enfance, ce paysan modèle n'est pas peint pour la Seconde République mais pour le **Second Empire** ; Millet est un peintre conservateur.",
                "Millet contribue dans les années 1850-1860 à la disparition des sujets classiques et bibliques : avec les paysans, l'histoire continue, sans rompre avec la tradition.",
                "Sa réputation ne cesse de croître : il devient le grand peintre républicain des années 1870, alors que Courbet, plus virulent, sera le communard."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 55,5 x 66 cm. Composition classique en **frise** : regardez le couple planté dans la terre, monumentalisé comme des sculptures d'académie.",
                "La femme est plus éclairée, son recueillement plus prononcé ; l'homme est tourné sur son chapeau, sans visage net.",
                "Observez les outils posés sur le sol (fourche, panier, brouette) et, au fond, l'église de Chailly."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un couple de paysans interrompt la récolte de pommes de terre quand la cloche sonne l'**Angélus** : ils s'arrêtent pour prier.",
                "Ce n'est pas une personne en particulier mais une fonction, un paysan : ce moment d'arrêt, universel, a fait de l'œuvre une icône."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-924",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Courbet est autodidacte et refuse la hiérarchie des académies : son maître, c'est la nature, humaine ou paysage. Il revendique le qualificatif de **Réaliste**.",
                "Il retourne à Ornans en 1849, fuyant les milieux intellectuels parisiens : il revendique une peinture d'histoire contemporaine tirée de ses racines.",
                "La médaille obtenue au salon de 1849 pour L'Après-dînée à Ornans le dispense du jury et lui permet d'exposer cette toile.",
                "Depuis 1848, le salon n'est plus organisé au Louvre : les artistes n'exposent plus près de leurs maîtres."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 315 x 668 cm : un format qui revendique Le Sacre de Napoléon, réservé aux grands événements de la nation.",
                "Regardez la **frise** en trois parties : les officiants, les hommes, les femmes. Nous sommes accueillis par un trou, le cercueil sur le côté.",
                "Le paysage est très plat, avec les falaises de craie sous un ciel gris qui écrase les personnages ; le crucifix est présent seulement de façon matérielle.",
                "Technique subversive : silhouettes cernées de noir comme la caricature de Daumier, noirs lisses mais blancs en matière épaisse et rugueuse."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une assemblée austère et silencieuse, des anonymes qui ne nous regardent pas : un enterrement, événement universel, sans héros représenté.",
                "L'alignement des figures à la même hauteur est vu comme symbole d'**égalitarisme** : un sujet qui n'intéresse que Courbet devient tableau d'histoire.",
                "« L'enterrement du romantisme » : le trou, un idéalisme sans portée métaphysique. Mais Delacroix et Ingres sont toujours vivants.",
                "Le cours y voit aussi, peut-être, une référence à deux républicains héros de 1789, et un crâne en vanité aux pieds des hommes."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-927",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "En 1855, le jury refuse l'œuvre : vexé, Courbet organise sa propre exposition en marge de l'**Exposition universelle**, dans son pavillon de l'avenue Montaigne.",
                "Face à Ingres à l'Exposition universelle, deux générations s'affrontent ; l'exposition de Courbet est très peu visitée et son réalisme mal compris.",
                "Dans le prologue du catalogue il écrit : « Savoir pour pouvoir [...] faire de l'art vivant tel est mon but. »",
                "Il y a un pas entre Courbet et l'art officiel : on pense à L'Apothéose d'Homère d'Ingres ou au Siècle d'Auguste de Gérôme, célébrant Napoléon III."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 361 x 598 cm. Regardez la **frise** en trois parties : Courbet au centre, et deux groupes de part et d'autre.",
                "Courbet peint, certainement en autoportrait, un paysage d'Ornans sur une grande toile carrée inachevée sur le chevalet.",
                "Observez la réunion des genres : paysage, scène de genre (enfant habillé en paysan, chien), nu, modèle d'atelier aux vêtements posés au sol."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le titre complet est « allégorie réelle déterminant une phase de sept années de ma vie artistique » : c'est son histoire qu'il raconte.",
                "À droite les « gentils » : Baudelaire avec un livre, Champfleury assis, Théophile Gautier en rouge, un couple de mécènes dont Alfred Bruyas.",
                "À gauche les « méchants », le monde trivial : le nu académique, la vanité, le bourgeois, peut-être Napoléon III en chasseur.",
                "Courbet critique ainsi l'académie, Napoléon III et la bourgeoisie, et fait entrer l'allégorie dans le **réalisme** en format gigantesque."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-195",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Narcisse Diaz de la Peña est un Espagnol, attiré par les peintures de **Théodore Rousseau** et de Barbizon ; Rousseau passe l'hiver à Paris et l'été à Barbizon.",
                "Cette peinture de plein air sera une composante de l'impressionnisme : la forêt de Fontainebleau est un lieu d'étude pour les paysagistes.",
                "Pour la critique, le paysage est la modernité : les Goncourt écrivent dès 1855 que « le paysage est la victoire de l'art moderne ».",
                "Les peintres de Barbizon expriment un **sentiment dédié à la nature**, loin du pittoresque italien, qui annonce l'impressionnisme."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 84 x 106 cm, grande dimension pour un paysage ; le tableau date de 1867.",
                "Un sous-bois : regardez la lumière sur le sol, qui résonne sur les feuilles, et le **ciel**, qui occupe la moitié de la toile.",
                "Cherchez dans le ciel un orage, quelque chose qui vient éclairer la nature : c'est là que se passe l'événement."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le sujet est la forêt de Fontainebleau, un paysage ancré en France : ni pays italien ni hollandais.",
                "Il n'y a pas de narration ni de scène historique : le paysage s'anime par lui-même, comme transposition de l'expression subjective de l'artiste."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "orsay_1847-1868_manet-scandale-1863",
    "musee_id": "orsay",
    "illustration": "orsay-712",
    "titre": "[Orsay] [Rez-de-chaussée] [1847-1868] Manet et le scandale de 1863",
    "date_creation": "2026-11-05",
    "cours_source": "Histoire générale de l'art 4 (XIXe siècle), cours 11 « Les académismes » (Cybill Whalley, 17/11/2025) et cours 12 « Modernité et impressionnismes » (Léa Blanchard, 24/11/2025)",
    "fil_conducteur": "En 1863, le Salon des refusés révèle Manet, qui défie l'académisme de Couture et de Cabanel en repensant le nu et en imposant le sujet moderne, jusqu'au scandale de l'Olympia au Salon de 1865. Monet reprend ensuite le Déjeuner sur l'herbe à sa façon.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "orsay-9493",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peint en **1847**, le tableau est un succès et vaut une médaille à Couture, présenté comme un peintre profondément classique.",
                "Thomas Couture est le maître de Manet, qui rompra avec lui : on retrouve très lointainement ses **empâtements** aux couleurs vives dans la peinture moderne.",
                "La « débauche » de l'empire romain vise la **Monarchie de Juillet** (1830-1848), critique qui s'étend ensuite au Second Empire.",
                "En 1856, Couture reçoit la commande du Baptême du Prince impérial, restée inachevée ; il se retire ensuite dans sa ville natale pour travailler pour le marché américain."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La composition reprend les **Noces de Cana** de Véronèse et **L'École d'Athènes** de Raphaël, avec une frise en trois parties.",
                "Les corps sont peints avec une précision académique, rappelant les modèles de la Renaissance, mais disposés pour créer une impression de désordre et de chaos.",
                "Regardez l'opposition entre le premier plan frivole et sensuel, et l'arrière-plan grave et silencieux, dans une atmosphère de luxe : drapés, colonnes antiques, accessoires de banquet."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une grande fête romaine : hommes et femmes, nus ou à demi vêtus, s'abandonnent à l'ivresse ; au premier plan, certains sont affalés, endormis ou épuisés, d'autres dansent ou boivent encore.",
                "Les postures **lascives** sont très éloignées de l'héroïsme de l'Antiquité.",
                "À l'arrière-plan, deux **philosophes** observent, semblant juger ou condamner la scène ; Couture lui-même figurerait à l'extrême gauche."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-98",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Cabanel, formé à l'Académie des Beaux-Arts, obtient le **grand prix de Rome** après deux échecs, puis est pensionnaire à la villa Médicis ; il a le même mécène que Courbet, Alfred Bruyas.",
                "Peinte en **1863**, l'œuvre est contemporaine du Déjeuner sur l'herbe de Manet et acquise par Napoléon III pour la somme colossale de **20 000 francs**.",
                "Cabanel devient ensuite professeur à l'École des Beaux-Arts ; avec Bouguereau et Baudry, il compte parmi les figures tutélaires d'un **ingrisme** devenu synonyme d'académisme."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toile de **130 x 225 cm** : un « tableau simple mais complètement artificiel », composition très efficace divisée en deux.",
                "Regardez la partition : en bas la mer, l'écume et les vagues ; au-dessus le ciel et les angelots qui célèbrent la naissance de Vénus.",
                "Vénus a de longs cheveux roux et aucune pilosité : elle est surtout **irréelle**, ce qui la place entre l'idéal et le réel."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Vénus sort des eaux, des cupidons au-dessus d'elle, dans une position d'abandon, et nous regarde ; sa proportion et sa chevelure en font la beauté par excellence.",
                "Cabanel s'éloigne des nus mythologiques d'Ingres : sa Vénus très **sensuelle** rappelle les peintures rococo du XVIIIe siècle.",
                "Le nu reste idéalisé et couvert par la mythologie : c'est tout ce que refuse le nu de Manet, peint la même année."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-904",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "En **1863**, le jury officiel du Salon est très sévère ; Napoléon III ouvre un **Salon des refusés** pour que le public soit juge, et celui-ci vient surtout se moquer, notamment de Manet.",
                "Manet, élève de Couture avant de rompre avec lui, se forme par la copie, notamment à la Galerie espagnole (Velázquez) ; il subit l'influence de **Courbet**.",
                "Deux sources formelles sont identifiées : Le Concert champêtre de Titien (alors attribué à Giorgione) et Le Jugement de Pâris de Marcantonio Raimondi, d'après Raphaël."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toile de **207 x 265 cm**, grand format destiné à la peinture d'histoire ; le titre original est Le Bain, et Manet la surnommait « la partie carrée ».",
                "Aplats et forts empâtements sont révolutionnaires ; notes nettes (le corps féminin) et zones floues (la mare, la barque) coexistent.",
                "Regardez la femme au fond, disproportionnée, le télescopage des plans et les ombres contradictoires : un critique juge que Manet aura du talent « le jour où il saura le dessin et la perspective ».",
                "Nu peint en atelier, paysage conçu comme un **décor de théâtre**, effet de collage : Manet assume la bi-dimensionnalité, rejette l'illusionnisme et affiche l'artificialité de la peinture. C'est délibéré, et Zola le défend."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Quatre personnages dans un sous-bois : Eugène Manet à demi couché, Ferdinand Leenhoff assis, une femme au fond qui trempe la main dans la mare, et Victorine Meurent.",
                "Le scandale tient au **sujet** : dans un format d'histoire, Manet montre la vie moderne, une femme dévêtue et non simplement nue, sans prétexte allégorique ni mythologique.",
                "Regardez le regard impudique et frondeur de Victorine : elle nous regarde franchement. Les citations de maîtres sont un travestissement de la grande peinture.",
                "Détails : un bouvreuil, une grenouille à gauche, une cascade argentée, une barque à fond plat à la grande mode du canotage."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-712",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Olympia est peinte en **1863** et provoque un nouveau coup d'éclat au **Salon de 1865**, deux ans après le scandale du Déjeuner sur l'herbe.",
                "Elle est contemporaine de la Naissance de Vénus de Cabanel, acquise par Napoléon III pour 20 000 francs, et reprend comme elle le thème de la femme dévêtue.",
                "Les références sont la Maja desnuda de Goya (1795-1800) et la **Vénus d'Urbino** de Titien (1538)."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toile de **130,5 x 191 cm** à la composition **frontale**, dans un intérieur bourgeois contemporain.",
                "Regardez le corps au caractère **non idéalisé**, la main posée sur l'intimité, le bouquet cadeau d'un admirateur ou client, et le chat, symbole de luxure."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le modèle est toujours Victorine Meurent, accompagnée de Laure, la servante noire, thème récurrent de la peinture du XIXe siècle.",
                "Tout plaide pour la **prostituée**, et non pour la déesse ; le thème annonce la Nana de Zola, après L'Œuvre.",
                "Zola prend la défense de la toile : pour un aspirant écrivain, la critique d'art est un moyen de se faire connaître."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-713",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le portrait est peint en **1868**, pour remercier Zola d'avoir pris la défense de Manet et de l'Olympia.",
                "Zola, aspirant écrivain, se fait connaître par la critique d'art ; il représentera la férocité des critiques dans L'Œuvre.",
                "Dès le Déjeuner sur l'herbe, Zola ne s'y trompe pas : il comprend que les partis pris de Manet sont délibérés, et il le défend."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toile de **146 x 114 cm**, au format vertical d'un portrait en pied.",
                "Regardez les coups de pinceau, qui viennent modeler la structure du pantalon."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Zola tient une **brochure bleue** : l'article qui lui est favorable, plume et encrier à portée de main.",
                "On y voit l'Histoire des Peintres de Charles Blanc, une reproduction de l'Olympia et une gravure du Triomphe de Bacchus de Velázquez.",
                "Le décor comprend aussi des estampes et un **paravent japonais**."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-25651",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Monet, vers 1860, est encore très imprégné par Manet : cette reprise du Déjeuner sur l'herbe date de **1865-1866**.",
                "La toile devait être envoyée au Salon, mais ne l'a finalement pas été ; de même, Femmes au jardin (1866) a été refusée au Salon.",
                "Jongkind et Eugène Boudin, célèbre pour ses scènes de loisirs contemporains dont les bains de mer, comptent parmi ses influences en plein air.",
                "Monet fait partie des impressionnistes d'avant l'impressionnisme, tout comme Bazille, Renoir et Sisley, tous élèves de Charles Gleyre."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le fragment mesure **248,7 x 218 cm**, de grand format vertical.",
                "Monet reste fidèle à Manet dans la **touche** plutôt que dans le fond de son propos.",
                "Regardez le jeu d'ombres et de lumière, avec la **tache de soleil**, comme dans Femmes au jardin (1866)."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "orsay_1866-1877_impressionnisme-vie-moderne",
    "musee_id": "orsay",
    "illustration": "orsay-1151",
    "titre": "[Orsay] [Niveau supérieur] [1866-1877] Impressionnisme et vie moderne",
    "date_creation": "2026-11-05",
    "cours_source": "Histoire générale de l'art 4 (XIXe siècle), cours 12 « Modernité et impressionnismes » (Léa Blanchard, 24/11/2025)",
    "fil_conducteur": "De Baudelaire et sa formule « tirer l'éternel du transitoire » aux impressionnistes : plein air, touche visible, lumière, Paris haussmannien, loisirs et vie moderne, de 1866 aux expositions de 1874 à 1877.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "orsay-1132",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "En 1863, dans Le Peintre de la vie moderne, Baudelaire demande de « tirer l'éternel du transitoire » : le fugitif et le contingent sont la moitié de l'art.",
                "Présenté à la **première exposition** du groupe en 1874, chez Nadar : Berthe Morisot compte parmi les artistes de la Société anonyme fondée en 1873.",
                "Morisot est l'élève, le modèle et la belle-sœur de **Manet**, mais elle développe une facture très personnelle et originale.",
                "Face à l'académisme hérité d'Ingres, ligne et touche lisse, les impressionnistes revendiquent la touche visible et des sujets de la réalité contemporaine."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de petit format (H. 56 ; L. 46,5 cm).",
                "Regardez les **courbes** et les formes douces : elles donnent à la toile un aspect moelleux, loin de la ligne ferme de la tradition académique.",
                "Sentez l'atmosphère « enveloppante, ouatée et intime » qui se dégage de l'ensemble."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "L'expression est **intériorisée** : les figures semblent absorbées dans leur intimité, ce qui exclut le regardeur de l'œuvre."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-807",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Vers 1866, Monet est encore très imprégné par **Manet** : il lui est fidèle dans la touche plutôt que dans le fond, comme dans son Déjeuner sur l'herbe de 1865-1866.",
                "Comme Bazille, Renoir et Sisley, il a eu Charles Gleyre pour maître : on parle des « impressionnistes avant l'impressionnisme ».",
                "La toile a été **refusée au Salon**, où règne encore le système académique hérité d'Ingres.",
                "Manet, formé chez Couture, influencé par Courbet, a montré en 1863 qu'un sujet de vie moderne peut occuper un grand format : cette ambition se lit ici."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Très grand format à l'huile (H. 255 ; L. 205 cm), peint avec la fidélité à la touche de Manet.",
                "Regardez le **jeu d'ombres et de lumière** et la tache de soleil, déjà au cœur du Déjeuner sur l'herbe de Monet.",
                "La peinture de plein air est une composante essentielle de l'impressionnisme, nourrie par Barbizon, Corot, Boudin et Jongkind, autres influences pour Monet."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1151",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Réalisée entre 1873 et 1876, l'œuvre est contemporaine de la construction de l'**Opéra Garnier**.",
                "Degas s'intéresse surtout aux scènes de modernité : théâtre, danse et champs de courses.",
                "Il est lié à l'évolution technologique de son temps : le cadrage et les attitudes évoquent le mouvement, comme la chronophotographie de Muybridge et Marey."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Format vertical à l'huile (H. 85,5 ; L. 75 cm), structuré par les **lignes obliques** du parquet et les verticales des pilastres et du bâton du maître de ballet.",
                "Regardez les **tutus blancs vaporeux** : en dehors de cette grande structuration, ils animent la toile de leur légèreté."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Pas de corps canonique : Degas montre les **mouvements de travail** des danseuses, non une image idéalisée.",
                "Le monde des corps de ballet est associé à la prostitution ; sa Petite danseuse de 14 ans, exposée en 1882, fut lue sous l'angle de la physiognomonie."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1154",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Présentée à la **première exposition** du groupe en 1874, chez Nadar : une critique de cette exposition, signée Louis Leroy, donne son nom à l'impressionnisme.",
                "Degas s'intéresse surtout aux scènes de modernité, avec une manière de représenter le mouvement liée à la chronophotographie de Muybridge et Marey.",
                "Même thème que La Classe de danse (1873-1876), peinte à peu près en même temps, tableau contemporain de la construction de l'Opéra Garnier.",
                "Les impressionnistes scandalisent les critiques académiques : le moyen ne doit pas prendre le dessus sur l'objet représenté."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile (H. 65 ; L. 81,5 cm) montrant des danseuses dans des **postures différentes**.",
                "Regardez l'**orientation variée des corps** : la même danseuse est représentée à la manière de la chronophotographie, en plusieurs moments successifs.",
                "Observez le cadrage et les attitudes, qui suggèrent le mouvement plutôt qu'une pose arrêtée."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-368",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peinte en 1873 et présentée à la **première exposition** du groupe en 1874, cette toile est de Camille Pissarro (1830-1903).",
                "Pissarro est un grand admirateur de **Corot** et un compagnon de plein air de Cézanne.",
                "Le critique Louis Leroy la ridiculise : « gratture de palette posée uniformément sur une toile sale ».",
                "Les détracteurs jugent les œuvres impressionnistes inachevées : touche visible, empâtements, toile laissée en réserve."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile en largeur (H. 65,5 ; L. 93,2 cm), peinte en **plein air**, avec des **ombres colorées**.",
                "Regardez la matière : l'œuvre est peinte au **couteau**, d'où ces surfaces épaisses et grattées qui ont tant choqué.",
                "Observez la lumière évoquant un **soleil rasant**, le froid et l'humidité de l'hiver.",
                "La touche visible et la juxtaposition de tons purs relèvent d'un choix de facture, non d'une maladresse : c'est la défense de Zola, Duranty et Mallarmé."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-105",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peint en 1875 et présenté à la **deuxième exposition** du groupe en 1876 : Caillebotte y expose à partir de cette date.",
                "Riche héritier, Caillebotte deviendra un grand **mécène** qui a permis de conserver l'œuvre de ses compagnons de route.",
                "Il expose des scènes de la vie urbaine, dans l'esprit d'une modernité faite de sujets contemporains."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Grand format à l'huile (H. 102 ; L. 147 cm), situé dans une **architecture haussmannienne**.",
                "Regardez les lattes du parquet : elles **creusent des lignes de composition**.",
                "Observez la lumière qui vient sublimer les corps des travailleurs et les différentes textures du bois et des copeaux, avec des effets de transparence."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une scène de travail urbain contemporaine, loin de l'histoire et de la mythologie chères à l'académisme.",
                "Les **visages ne sont pas discernables** : c'est la gestuelle à plusieurs étapes qui est représentée."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-497",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peint en 1876 et présenté à la **troisième exposition** en 1877, avec La Balançoire.",
                "Ces deux toiles ont été acquises par **Caillebotte**, mécène du groupe.",
                "Renoir, né à Limoges, d'abord peintre sur porcelaine, expose aussi au Salon officiel.",
                "La critique est féroce envers ses envois : son Torse est jugé « amas de chair en décomposition ».",
                "Dans son Torse, il applique déjà la touche dynamique et les ombres colorées, qui préparent l'écriture du Bal."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Très grand format à l'huile (H. 131,5 ; L. 176,5 cm).",
                "Regardez la **touche dynamique et visible**, qui crée une vibration optique, et les **ombres colorées**, héritage du principe des complémentaires de Delacroix.",
                "Observez l'impression de mouvement, que l'on retrouve dans Danse à la ville et Danse à la campagne."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "**Plusieurs scènes simultanées** : discussions, couples dansant ; un loisir de la vie moderne, ancré dans la réalité contemporaine."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-10897",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Présentée à la **troisième exposition** du groupe en 1877 : il existe au moins 12 versions de la gare Saint-Lazare par Monet.",
                "Monet habitait tout près de la gare ; le chemin de fer incarne la **révolution de la mobilité**.",
                "Dans Impression, soleil levant (1874), Monet saisit déjà un instant fugace et des épaisseurs atmosphériques, avec des éléments contemporains.",
                "Son Pont de chemin de fer à Argenteuil (1873-1874) cherche à restituer la lumière sur différentes surfaces ; l'influence de Turner, connu à Londres, y est sensible."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de format moyen (H. 75 ; L. 105 cm), à la touche **plus fondue**, la peinture empâtée, quasi granuleuse.",
                "Regardez les **différentes épaisseurs de vapeur gazeuse**, rendues par la matière.",
                "Observez l'**ombre bleue** du réseau métallique de la charpente de la verrière.",
                "À l'arrière-plan, les **immeubles haussmanniens** ancrent la gare dans le Paris moderne."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "orsay_1846-1869_art-officiel-academisme",
    "musee_id": "orsay",
    "illustration": "orsay-1704",
    "titre": "[Orsay] [Rez-de-chaussée] [1846-1869] L'art officiel : académisme et sculpture de Carpeaux",
    "date_creation": "2026-11-05",
    "cours_source": "Histoire générale de l'art 4 (XIXe siècle), cours 11 « Les académismes » (Cybill Whalley, 17/11/2025) et cours 16 « La manie des statues » (Margaux Wymbs, 05/01/2026)",
    "fil_conducteur": "L'art officiel du Second Empire : le nu et l'histoire chez Gérôme, Bouguereau et Meissonier, puis la sculpture de Carpeaux, de l'Académie à la commande publique.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "orsay-328",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peint en 1846, ce tableau marque le succès précoce de Gérôme, qui obtient une médaille de troisième classe au Salon de 1847.",
                "Gérôme, élève de Paul Delaroche, incarne le **néo-grec**, réinterprétation du néo-classicisme qui émerge vers le milieu du XIXe siècle.",
                "Il rompt avec les sujets historiques solennels et héroïques pour un style « plus léger, plus intime et plus coloré ».",
                "Il s'inspire des fresques de la maison des Vettii à Pompéi, qui montraient des scènes de la vie quotidienne : l'Antique, mais dans un style modifié.",
                "Il s'éloignera ensuite du néo-grec de ses débuts, avec des peintures d'histoire de commande favorables au Second Empire."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le tableau fusionne la rigueur du dessin académique avec une sensibilité nouvelle pour la couleur : regardez comment la couleur adoucit le dessin.",
                "Les corps nus sont idéalisés selon la tradition grecque, mais la scène est traitée avec un **réalisme de détails**.",
                "Observez les postures et la représentation des corps nus, héritées de l'Antique : elles rappellent l'influence du décor grec dans l'iconographie."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Gérôme ne montre ni héros ni batailles : il choisit la **vie quotidienne** de jeunes Grecs qui font s'affronter des coqs.",
                "Le tableau est donc une scène intime plutôt qu'un récit héroïque : le nu y relève de l'idéal grec, non d'un épisode d'histoire."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-153692",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peint en 1850, ce tableau marque un tournant surprenant dans une carrière habituellement tournée vers la peinture d'histoire.",
                "Bouguereau est l'une des figures tutélaires de l'académisme, avec Cabanel et Baudry, héritiers de l'**ingrisme**, devenu synonyme d'académisme.",
                "Il enseigne à l'académie Julian, école privée payante, et devient l'une des « coqueluches » des artistes américains.",
                "Il incarne le grand genre, « le grand classique par excellence », et côtoie dans son siècle Manet et les modernistes."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Tout y est : détails anatomiques, puissance des lignes, jeu subtil du **clair-obscur** ; regardez comment la lumière sculpte les corps dans l'obscurité.",
                "Observez les muscles tordus, les poses extrêmes et presque théâtrales, ainsi que la tête penchée et la mâchoire grande ouverte.",
                "La scène plonge dans l'obscurité des Enfers, ce qui accentue le contraste entre les corps éclairés et le fond sombre."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Dante et Virgile descendent aux Enfers : on y découvre les damnés et une créature mi-chauve-souris, mi-hybride, planant au-dessus de la scène.",
                "Le combat acharné entre deux âmes est un prétexte pour explorer la **musculature masculine** : Bouguereau utilise les scènes de Dante pour représenter des poses exacerbées.",
                "La scène infernale devient une étude des postures violentes, plus qu'un récit littéraire."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-16649",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Bouguereau peint cette Naissance de Vénus en 1879, seize ans après celle de Cabanel (1863), acquise par Napoléon III.",
                "Il est professeur à l'académie Julian, fondée en 1869, et fait partie des figures tutélaires de l'académisme avec Cabanel et Baudry.",
                "Son héritage italien se lit dans le traitement du paysage (Titien), et il rivalise ici avec Paul Baudry et ses personnages secondaires.",
                "Le sujet mythologique s'éloigne des nus d'Ingres : nous sommes « entre l'idéal et le réel », qui fait son entrée dans la seconde moitié du siècle."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Vénus sort d'un coquillage ; regardez la façon dont les eaux et les airs la célèbrent, des vagues au ciel.",
                "Bouguereau met l'accent sur les **personnages secondaires** qui entourent Vénus : observez leur rôle dans la composition d'ensemble.",
                "La peinture doit être « totalement finie jusqu'à son modelé » : cherchez l'absence de touche visible, qui rend la chair lisse et irréelle."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Selon la mythologie, Vénus naît de l'eau et est célébrée par les éléments : la scène est une allégorie de la beauté idéale.",
                "Cette Vénus est **séduisante et artificielle**, entre réel et illusionnisme, comme la Vénus de Cabanel, « simple mais complètement artificielle ».",
                "Le nu mythologique, imposé par la tradition académique, offre une sensualité acceptable grâce à l'excuse du sujet antique."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-246",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peint en 1864, ce tableau montre que l'épopée napoléonienne reste un sujet populaire sous Napoléon III.",
                "Meissonier est un peintre d'histoire spécialisé dans les scènes de bataille, qui offre ici une interprétation originale du sujet.",
                "Le sujet évoque la désastreuse campagne de Russie de 1812, qui conduit à la fin de l'Empire en 1814-1815.",
                "Le cours pose la question « Classicismes ? » : l'Académie imposait des thèmes classiques ou bibliques, mais Meissonier renouvelle le genre, comme Gérôme.",
                "Napoléon III instrumentalise l'académisme pour diffuser l'image de la France lors des Expositions universelles de 1855 et 1867."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "C'est une peinture d'histoire de **dimension réduite**, loin du grand genre : l'épisode est choisi pour son humanité plus que pour sa grandeur.",
                "Regardez les teintes brunes, le ciel chargé et la plaine boueuse, loin des fastes triomphaux habituels.",
                "Observez les détails minutieux : attitudes, expressions, fatigue palpable, pour un réalisme « sobre, presque intime »."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Napoléon Ier, isolé et rongé par le doute, avance dans la neige et la boue, suivi de ses maréchaux et de ses grognards qui forment une seconde ligne.",
                "Napoléon apparaît **vulnérable et humain**, loin de l'idéalisation glorieuse : pas de pathos ni de cadavres, mais l'inquiétude des troupes.",
                "C'est la retraite après la bataille de Laon, avec l'état-major derrière l'empereur : Ney, Berthier, Flahaut, Drouot."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1704",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Groupe en pierre d'Échaillon de 1869, commandé pour la façade de l'Opéra de Charles Garnier, conçu comme « œuvre d'art total ».",
                "Garnier, tout juste rentré de Rome, a emporté le concours de 1860 ; Carpeaux est son « pendant en sculpture ».",
                "Carpeaux, élève de Rude, rejoint la villa Médicis en 1856 et renoue avec le romantisme : « c'est dans la rue que nous devons appliquer notre art et non au Vatican ».",
                "La Danse suscite un **scandale** à l'inauguration à cause de la nudité jugée trop réaliste ; on fait appel à un remplaçant, mais on laisse finalement l'œuvre en place.",
                "L'original a été transféré à Orsay en 1964 pour le protéger de la pollution ; la façade porte une copie de Paul Belmondo."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Carpeaux se concentre, à la suite de Michel-Ange, sur les effets de **mouvement et de vitalité** : regardez la ronde qui tourbillonne autour du génie central.",
                "Ses influences sont variées : le Saint Michel de Raphaël, les sourires choquants pour l'époque, et Rubens pour la peau « quasi palpitante » des bacchantes.",
                "Ce syncrétisme de références donne un « dynamisme et une fougue uniques » ; observez les chairs vivantes plutôt que marmoréennes.",
                "La sculpture gagne en autonomie par rapport à l'architecture : elle ne reste plus un simple décor de façade."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "La danse n'est pas qu'allégorique : elle est un « véritable effet », une sculpture plus vivante et émotionnelle, dans le cadre des traditions.",
                "Bouguereau traite aussi la danse pour l'hôtel particulier d'Anatole Bartholoni, rue de Verneuil, avec la même attention au mouvement."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "orsay_1865-1900_symbolisme",
    "musee_id": "orsay",
    "illustration": "orsay-1070",
    "titre": "[Orsay] [Niveau médian] [1865-1900] Le symbolisme : de Burne-Jones aux visions",
    "date_creation": "2026-11-05",
    "cours_source": "Histoire générale de l'art 4 (XIXe siècle), cours 14 « De Burne-Jones à Klimt » (Léa Blanchard, 01/12/2025)",
    "fil_conducteur": "Face à la modernité industrielle, ces artistes choisissent l'esthétisme et la spiritualité : des préraphaélites à Moreau et Puvis, puis aux symbolistes, qui explorent la femme fatale, le rêve et le regard.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "orsay-783",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Burne-Jones, élève de Rossetti, appartient au courant préraphaélite : un **aestheticism movement** actif de 1860 à 1900, qui promeut la beauté absolue, sans connotation religieuse, morale ou politique.",
                "L'art pour l'art offre une échappatoire à la laideur et au matérialisme du monde industrialisé ; Gautier écrivait déjà « tout ce qui est utile est laid ».",
                "Né en 1848 autour de trois étudiants, le groupe s'inspire des débuts de la Renaissance, avant la mort de Raphaël, et des guildes médiévales.",
                "Burne-Jones puise dans la légende, la Bible et l'iconographie médiévale, comme dans ses cycles de Saint Georges ou de La Belle au bois dormant."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Peinture à l'huile sur toile, très verticale : 200 cm de haut pour 100 cm de large, soit un format deux fois plus haut que large.",
                "Regardez les corps : leurs poses musclées évoquent les ignudi de la chapelle Sixtine et les esclaves de Michel-Ange du Louvre."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "La **Fortune** est figurée comme une roue sur laquelle les hommes sont enchaînés, tantôt portés aux nues, tantôt rejetés au fond.",
                "Le sujet, commencé en 1875 et achevé en 1883, extrait l'œuvre de sa contemporanéité : le tableau est médiévalisant et nourri de Michel-Ange."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1070",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Moreau est un peintre de l'antiquité et de l'histoire sainte, dont les thèmes mêlent mythe et goût pour l'**ésotérisme**.",
                "Il est emblématique du substrat culturel de la fin-de-siècle : juxtaposition d'obscénité et de sensualité, et goût pour les œuvres codées."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur bois de 204 cm de haut sur 115,5 cm de large, au format vertical très allongé.",
                "Moreau privilégie des attitudes hiératiques, une composition rigide, des paysages vertigineux et des détails décoratifs.",
                "Regardez la profusion d'éléments disparates : bélier, sphinge, griffons, divinités indoues Ganesh et Parvati, queue de colombe rappelant Noé et le déluge."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Pélias exige que **Jason** conquière la toison d'or avec les autres argonautes, dont Thésée et Héraclès, et il sera aidé par Médée.",
                "Jason porte une kuné ; derrière lui, un caducée rappelle Asclépios, dont la fille est la déesse Iaso : un jeu de mot sur le nom du héros.",
                "Médée tient un bouclier protecteur, porte des colchiques et un serpent rappelant Ève ; Jason devra semer les dents d'un dragon.",
                "Il doit échapper aux oiseaux de l'île d'Arès, notamment un jaseur boréal, autre jeu de mot ; l'aigle du Caucase renvoie à une image prométhéenne."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1091",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le tableau, de 1865 comme Jason, s'inspire des Métamorphoses d'Ovide.",
                "Moreau privilégie les thèmes de l'antiquité et de l'histoire sainte, mêlés à un goût pour l'ésotérisme ; ses attitudes sont hiératiques.",
                "Moreau y mêle les influences d'Ingres pour les figures expressives, de Delacroix pour la palette chatoyante et de Léonard pour le sfumato."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur bois de 154 cm de haut sur 99,5 cm de large, de format vertical.",
                "Regardez la palette chatoyante et les figures expressives, puis les tortues, qui rappellent la lyre d'Orphée."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Eurydice descend aux enfers, et Orphée joue de son instrument pour charmer Cerbère et Hadès.",
                "Moreau choisit pourtant un autre moment : les ménades jalouses découpent Orphée, et les muses le reconstituent pour en faire la constellation de la **Lyre**.",
                "La figure féminine est-elle une ménade ou une muse ? La question reste ouverte ; la décollation est déjà un thème très populaire."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-443",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Puvis de Chavannes illustre la veine de la **méditation**, de l'introspection et du rêve, au cœur du symbolisme et du refus du rationalisme.",
                "Il reprend les œuvres antiques pour retrouver un éternel idyllique, avec la mer pour refuge.",
                "Le même modèle est repris à trois reprises dans la composition."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 205,4 cm de haut sur 156 cm de large, de format quasi carré.",
                "Les tonalités sont ternes, la palette un peu brune, les touches en aplat, le rendu mat, mais le dessin reste net.",
                "Regardez les figures : elles semblent juxtaposées, sans communiquer entre elles, et la figure de face ne regarde pas le regardeur."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le sentiment dominant est méditatif, dans un monde sans contemporanéité.",
                "Osbert reprendra cette thématique en 1908, mais avec un lien entre les figures et une gamme chromatique plus chatoyante."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-140626",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le sculpteur belge Khnopff travaille dans un moment particulièrement riche de la Belgique, en peinture comme en sculpture.",
                "Khnopff peint aussi I lock my door upon myself (1891), d'après un poème de Christina Rossetti ; Hypnos apparaît dans Une aile bleue et dans un masque en plâtre de 1897.",
                "Hypnos, fils de Nyx et frère de Thanatos, associé au pavot, inspire sa tête sculptée de 1897 : l'œuvre date de l'année suivante."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Marbre pigmenté, laiton et fil de cuivre ; l'œuvre mesure 45,5 cm de haut, 28 de large et 20 de profondeur.",
                "L'esthétique est antique, avec une **polychromie** et une couronne métallique : regardez-la, auréole ou renvoi au modèle païen.",
                "Les yeux sont clos, un motif récurrent chez Khnopff, comme dans Des caresses de 1896."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le titre évoque une inquiétude vis-à-vis de l'**avenir**.",
                "Étrangeté et état de conscience intermédiaire servent à évoquer un personnage en pleine **vision**."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-20838",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Redon, dans la lignée des figures aux yeux clos, travaille la frontière entre rêve, sommeil et conscience, au cœur de l'introspection symboliste.",
                "Jean Delville reprend Les yeux clos de Redon (1890) : ambiguïté de genre et incertitude face au sujet, entre rêve, mort ou sommeil.",
                "Le thème vient de La Tempête : Caliban, esclave du duc de Milan, est l'enfant d'une sorcière."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 48,2 cm de haut sur 38,5 cm de large, de petit format vertical.",
                "La palette chromatique est riche et vive ; regardez les **grattages** par endroits."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Caliban est un personnage difforme ; les personnages ailés évoquent peut-être Ariel.",
                "Le nom de Caliban a donné lieu à des spéculations : Kélibia, ville de Tunisie, ou anagramme de « cannibale » chez Pigafetta et Montaigne.",
                "Il pourrait aussi venir du mot rom « kaliban », la noirceur : sauvagerie, étrangeté, altérité, contraire de la raison."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-148888",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Les thèmes de la vision et du regard sont très féconds chez les symbolistes, en lien avec la **femme fatale**.",
                "Von Stuck, dans sa Tête de Méduse de 1892, montre la Méduse prise au piège de son propre regard.",
                "Les symbolistes puisent dans les sources mythologiques et bibliques pour exacerber des typologies féminines marquées, rapport au subconscient et aux pulsions.",
                "Böcklin reprend ce thème en s'inspirant du Caravage."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Papier mâché peint, de 61 cm de diamètre : un objet circulaire, en forme de bouclier.",
                "Regardez le visage de Méduse sur sa surface bombée, puis comparez-le avec la Méduse du Caravage de 1597-1598."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Persée, associé au bouclier d'Athéna, s'en sert pour affronter la **Méduse**.",
                "Le Caravage, que Böcklin prend pour modèle, avait déjà peint une Méduse en 1597-1598 : ce thème traverse l'histoire de l'art."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-25573",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Klinger (1857-1920) reprend le thème du regard avec ce buste de 1893, dans la veine symboliste des figures de la vision.",
                "Cette période est celle d'une Europe inquiète, où le rejet du rationalisme pousse les artistes vers l'introspection, le rêve et la spiritualité.",
                "Cassandre est la princesse troyenne de l'Iliade d'Homère."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le buste est en bronze, avec des **yeux** en cornaline incrustée ; il mesure 58,5 cm de haut, 30 de large et 36,5 de profondeur.",
                "Regardez les yeux incrustés d'une autre matière que le bronze : ils concentrent toute l'intensité du buste."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le buste exprime l'horreur de Cassandre contemplant l'avenir de Troie.",
                "Von Stuck, dans sa Méduse de 1892, avait déjà montré une figure prise au piège de son propre regard : le regard est un thème central.",
                "Le regard est celui de la **vision** : voir l'avenir, comme chez Khnopff, mais ici dans l'effroi."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "orsay_1879-1893_post-impressionnisme-nabis",
    "musee_id": "orsay",
    "illustration": "orsay-746",
    "titre": "[Orsay] [Niveau supérieur] [1879-1893] Post-impressionnisme et Nabis",
    "date_creation": "2026-11-05",
    "cours_source": "Histoire générale de l'art 4 (XIXe siècle), cours 17 « Aux sources du XXe siècle » (Margaux Wymbs, 12/01/2026)",
    "fil_conducteur": "Du Pont de Maincy de Cézanne aux Femmes au jardin de Bonnard, le post-impressionnisme (1885-1900) est une période plus qu'un courant : géométrie cézannienne, science néo-impressionniste, synthétisme de Pont-Aven puis décor nabi. Toutes ces recherches préparent le socle de la couleur subjective des avant-gardes du XXe siècle.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "orsay-797",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le tableau de **1879** marque le détachement de Cézanne de l'impressionnisme, après ses années auprès de Pissarro à Pontoise et à Auvers-sur-Oise, où sa palette s'était éclaircie.",
                "Cézanne est avec Van Gogh l'une des deux individualités qui fondent la période post-impressionniste, sans l'avoir souhaité ; sa postérité sera immense chez les cubistes, dont Braque."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Ses paysages sont « immobiles, intemporels » : la **géométrie** et les formes priment sur la sensation fugitive.",
                "Le côté très construit s'oppose aux touches rapides de Monet : Cézanne ne recherche pas l'effet de miroitement propre aux impressionnistes.",
                "Regardez comment l'arche du pont, les arbres et les masses de feuillage sont traités en volumes simplifiés plutôt qu'en vibrations de lumière.",
                "Plus tard, il écrira qu'il faut « traiter la nature par le cylindre, la sphère, le cône » : cette recherche de formes pures se prépare ici."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-746",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Van Gogh rejoint Arles pour y fonder une école d'artistes ; Gauguin l'y rejoint, mais ils se disputent, et c'est là qu'il se coupe l'oreille. La toile naît de son séjour à la **Maison jaune**.",
                "Sa lettre à Théo, son frère et soutien financier et moral, précise l'intention : « la vue du tableau doit reposer la tête ou du moins l'imagination »."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La couleur est très claire, en tons vifs et francs, **sans ombre** ; la touche, longue, devient peu à peu plus hachée.",
                "Héritage des estampes japonaises : les motifs sont cloisonnés par un **cerne**, et la perspective naît de la superposition des motifs plutôt que d'un tracé géométrique.",
                "Regardez comment les aplats colorés prennent toute leur importance, au service d'une expressivité qui fait l'originalité de Van Gogh.",
                "Le jeu des couleurs complémentaires donne vivacité et luminosité ; cette couleur subjective ouvre la voie aux fauves et à l'expressionnisme."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-542",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Seurat meurt en **1891**, l'année du Cirque, qui prolonge sa série d'attractions populaires de la vie moderne, avec parade et chahut.",
                "Seurat, formé à la science (lectures de Charles Henry), refuse la touche filante des impressionnistes et lui préfère de petits points de couleurs complémentaires, fondés sur le contraste simultané de Chevreul.",
                "Le cadre de la toile n'est pas de Seurat mais de son ami Paul Signac : regardez-le comme un prolongement de la recherche divisionniste."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "C'est une recherche **néo-impressionniste** par touche divisionniste : le mélange des tons se fait dans l'œil du spectateur, non sur la toile.",
                "La scène est scindée en deux, avec le public d'un côté et la piste de l'autre ; regardez comment l'espace se partage.",
                "La touche jaune de la **lumière électrique**, nouvelle à l'époque, renforce l'effet d'effervescence joyeuse.",
                "Comme dans ses grandes toiles, la composition réfléchie, aux figures figées et aux contours dessinés, s'oppose à la scène prise sur le vif."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le développement du cirque est concomitant de la peinture : Seurat y montre un loisir populaire de la vie moderne, avec parade et chahut."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-3024",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Cross, proche de Seurat et Signac, peint L'Air du soir vers **1893** ; la toile a appartenu à Signac.",
                "Signac y invite un jeune artiste, Matisse, qui réalise Luxe, Calme et Volupté, où l'on retrouve le personnage se séchant les cheveux : le **fauvisme** se base sur ces artistes.",
                "La question qui hante les artistes est de retrouver une certaine harmonie face à l'accélération du positivisme."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La technique est néo-impressionniste : une touche divisionniste qui mise sur le contraste des couleurs complémentaires.",
                "Regardez comment la scène, presque antique, associe modernité de la facture et classicisme de la composition, en quête d'harmonie face à l'accélération du positivisme."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le tableau offre une **Arcadie**, presque une scène antique, dans une Méditerranée classique et éternelle ; on y retrouve le personnage qui se sèche les cheveux, repris ensuite par Matisse."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-203574",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Bernard et Gauguin développent le **synthétisme** à Pont-Aven : ils écartent l'ambition réaliste des impressionnistes pour la construction mentale subjective de l'œuvre.",
                "Bernard, né à Lille, a étudié à l'Académie Cormon où il rencontre Lautrec ; influencé par Cézanne et les estampes japonaises, il rompt avec Gauguin en 1891, quand il se sent dépassé."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le tableau est un « **manifeste du synthétisme** » : cernes et aplats de couleur, sans recherche de réalisme.",
                "Audace du cadrage et **perspective rabattue** : regardez comment le sol est unifié sur l'ensemble du fond.",
                "La profondeur n'est perceptible que par le changement des dimensions des personnages."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le sujet breton représente, dans l'image collective de l'époque, une culture disparue du reste de la France : la « Bretagne primitive ».",
                "C'est une défense de la peinture subjective, qui relève d'une dimension symboliste, éloignée de toute recherche du réalisme."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-291",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Gauguin, enfance au Pérou, ancien agent de change et peintre du dimanche, vit de son art à 35 ans ; il séjourne à Tahiti de **1891 à 1893** pour échapper à la civilisation.",
                "Il y recherche le « primitif », vecteur de renouvellement artistique, et un goût du mystique qui influencera nabis, fauves et expressionnistes.",
                "Il y réalise de nombreux tableaux, qu'il expose chez Durand-Ruel."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Regardez le **pouvoir émotionnel de la couleur** : l'usage subjectif des formes et des couleurs rompt avec la règle de la vraisemblance, comme dans La Vision après le sermon.",
                "Le premier plan montre deux femmes réelles, tandis que le second plan fait apparaître un motif maori."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le tableau ne montre pas une scène réelle mais la recréation d'un **Tahiti rêvé**, écho de la recherche d'une Arcadie.",
                "Cette recréation répond à la déception que lui cause la colonisation : procès de la rationalisation du monde et recherche d'un réenchantement, entre mythologie et coutumes ancestrales.",
                "Un paysage luxuriant et une spiritualité dominent le quotidien des habitants : il y a du physique et du métaphysique chez Gauguin."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-8028",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Sérusier séjourne à Pont-Aven en **1888**, où il rencontre Gauguin ; le tableau est peint sous sa direction, et Gauguin lui enseigne l'usage des couleurs pures, notamment le rouge.",
                "Sérusier, élève de l'académie Julian, proche de Maurice Denis et de la théosophie, garde le tableau inachevé comme preuve du discours d'un maître.",
                "Montré aux Nabis, il devient pour eux un **talisman**."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Regardez le motif rendu en couleurs choisies subjectivement, plutôt qu'en couleurs d'observation.",
                "Regardez la structure : un chemin transversal et une rangée de hêtres organisent le paysage, dont la rivière et le moulin se devinent à peine.",
                "Cette nouvelle dimension de la nature exprimée à partir de la subjectivité fonde l'esthétique du synthétisme, que Maurice Denis appelle néo-traditionalisme."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le paysage de Bois d'Amour réunit un bois, un chemin transversal, une rangée de hêtres, une rivière et un moulin, vus à travers la couleur pure."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-8022",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Bonnard, Nabi « moderne », débute au Salon en **1891** avec ces quatre panneaux ; Marthe est son modèle préféré.",
                "La démarche décorative est influencée par William Morris et les Arts & Crafts, avec une rupture de la hiérarchie entre les arts : mobilier, paravent, papiers peints, tapisserie, céramique.",
                "Les panneaux seront séparés : « c'est trop tableau pour un paravent ». Les Nabis décloisonnent les pratiques, de l'affiche (Bonnard, France-Champagne) à la Revue blanche dirigée par Fénéon."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La technique est la **détrempe à la colle sur toile**, qui produit un effet de planéité.",
                "Formats verticaux à l'instar des **kakemonos** : Bonnard, surnommé « le Japonard », écho de la vogue japonisante des années 1890.",
                "Regardez comment le cerne enserre des couleurs en aplat, avec perspectives rabattues et audaces de cadrage."
              ]
            }
          ]
        }
      }
    ]
  }
];
