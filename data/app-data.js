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
    "image": "../images/parcours/pestiferes.jpg",
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
    "image": "../images/parcours/girodet_deluge.jpg",
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
    "image": "../images/parcours/liberte.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065872"
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
    "image": "../images/parcours/poussin_echo.jpg",
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
    "image": "../images/parcours/poussin_sabines.jpg",
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
    "image": "../images/parcours/poussin_bergers.jpg",
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
    "image": "../images/parcours/poussin_autoportrait.jpg",
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
    "image": "../images/parcours/poussin_saisons.jpg",
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
    "image": "../images/parcours/poussin_eliezer.jpg",
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
    "image": "../images/parcours/lorrain_ulysse.jpg",
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
    "image": "../images/parcours/valentin.jpg",
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
    "image": "../images/parcours/latour_tricheur.jpg",
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
    "image": "../images/parcours/latour_joseph.jpg",
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
    "image": "../images/parcours/lenain_tabagie.jpg",
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
    "image": "../images/parcours/lenain_famille_paysans.jpg",
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
    "image": "../images/parcours/hyre_laban.jpg",
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
    "image": "../images/parcours/lesueur_clio.jpg",
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
    "image": "../images/parcours/champaigne_cene.jpg",
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
    "image": "../images/parcours/pourbus_portrait.jpg",
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
    "image": "../images/parcours/pourbus_cene.jpg",
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
    "image": "../images/parcours/galerie_mdm.jpg",
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
    "image": "../images/parcours/charles1.jpg",
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
    "image": "../images/parcours/hals_luth.jpg",
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
    "image": "../images/parcours/hals_boh.jpg",
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
    "image": "../images/parcours/coup_de_soleil.jpg",
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
    "image": "../images/parcours/buveuse.jpg",
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
    "image": "../images/parcours/dentelliere.jpg",
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
    "image": "../images/parcours/sabines.jpg",
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
    "image": "../images/parcours/eylau.jpg",
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
    "image": "../images/parcours/officier.jpg",
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
    "image": "../images/parcours/radeau.jpg",
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
    "image": "../images/parcours/sardanapale.jpg",
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
    "image": "../images/parcours/homere.jpg",
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
    "image": "../images/parcours/daumier_republique.jpg",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-republique-10865"
  },
  {
    "id": "orsay-68",
    "musee_id": "orsay",
    "titre": "Labourage nivernais (Le Sombrage)",
    "artiste": "Rosa Bonheur",
    "dates": "1849",
    "emplacement_note": "Salle à confirmer",
    "image": "../images/parcours/rosa_bonheur.jpg",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/labourage-nivernais-68"
  },
  {
    "id": "orsay-342",
    "musee_id": "orsay",
    "titre": "Des glaneuses (Les Glaneuses)",
    "artiste": "Jean-François Millet",
    "dates": "1857",
    "emplacement_note": "Salle à confirmer",
    "image": "../images/parcours/millet_glaneuses.jpg",
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
    "image": "../images/parcours/millet_angelus.jpg",
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
    "image": "../images/parcours/courbet_atelier.jpg",
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
    "image": "../images/parcours/couture_romains.jpg",
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
    "image": "../images/parcours/cabanel_venus.jpg",
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
    "image": "../images/parcours/manet_dejeuner.jpg",
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
    "image": "../images/parcours/manet_olympia.jpg",
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
    "image": "../images/parcours/manet_zola.jpg",
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
    "image": "../images/parcours/morisot_berceau.jpg",
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
    "image": "../images/parcours/degas_classe.jpg",
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
    "image": "../images/parcours/degas_repetition.jpg",
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
    "image": "../images/parcours/caillebotte_raboteurs.jpg",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/raboteurs-de-parquets-105"
  },
  {
    "id": "orsay-497",
    "musee_id": "orsay",
    "titre": "Bal du moulin de la Galette",
    "artiste": "Auguste Renoir",
    "dates": "1876",
    "emplacement_note": "Salle à confirmer",
    "image": "../images/parcours/renoir_bal.jpg",
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
    "image": "../images/parcours/gerome_coqs.jpg",
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
    "image": "../images/parcours/bouguereau_dante.jpg",
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
    "image": "../images/parcours/bouguereau_venus.jpg",
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
    "image": "../images/parcours/seurat_cirque.jpg",
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
  },
  {
    "id": "cl010062584",
    "musee_id": "louvre",
    "titre": "Les Bulles de savon",
    "artiste": "Willem van Mieris",
    "dates": "vers 1710-1720",
    "salle": "Salle 839",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062584/0000601705_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062584"
  },
  {
    "id": "cl010062008",
    "musee_id": "louvre",
    "titre": "Habitations de « Labradores qui plantent le sucre » près de la rivière Paraíba (Brésil)",
    "artiste": "Frans Post",
    "dates": "vers 1650-1655",
    "salle": "Salle 838",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062008/0000136123_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062008"
  },
  {
    "id": "cl010062020",
    "musee_id": "louvre",
    "titre": "Autoportrait au chevalet et à l'appuie-main de peintre",
    "artiste": "Rembrandt (Rembrandt Harmensz. van Rijn)",
    "dates": "1660",
    "salle": "Salle 844",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/rembrandt_chevalet.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062020"
  },
  {
    "id": "cl010060453",
    "musee_id": "louvre",
    "titre": "Bethsabée au bain tenant la lettre du roi David",
    "artiste": "Rembrandt (Rembrandt Harmensz. van Rijn)",
    "dates": "1654",
    "salle": "Salle 844",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/bethsabee.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060453"
  },
  {
    "id": "cl010059143",
    "musee_id": "louvre",
    "titre": "Le Roi boit ou Repas de famille le jour de la fête des Rois",
    "artiste": "Jacob Jordaens",
    "dates": "vers 1638-1640",
    "salle": "Salle 848",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000059143/0000387876_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010059143"
  },
  {
    "id": "cl010063537",
    "musee_id": "louvre",
    "titre": "Portrait d'une noble génoise",
    "artiste": "Antoon van Dyck",
    "dates": "vers 1626-1627",
    "salle": "Salle 850",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/genoise.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010063537"
  },
  {
    "id": "cl010060850",
    "musee_id": "louvre",
    "titre": "La Kermesse (Les Plaisirs de la campagne)",
    "artiste": "Pierre Paul Rubens",
    "dates": "vers 1635-1638",
    "salle": "Salle 855",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/kermesse.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060850"
  },
  {
    "id": "cl010060847",
    "musee_id": "louvre",
    "titre": "Hercule et Omphale : Hercule filant la laine auprès d'Omphale",
    "artiste": "Pierre Paul Rubens",
    "dates": "vers 1606-1607",
    "salle": "Salle 802",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060847/0000748319_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060847"
  },
  {
    "id": "cl010065982",
    "musee_id": "louvre",
    "titre": "Les Ombres de Francesca da Rimini et de Paolo Malatesta apparaissent à Dante et à Virgile",
    "artiste": "Ary Scheffer",
    "dates": "1855",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/scheffer.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065982"
  },
  {
    "id": "cl010062510",
    "musee_id": "louvre",
    "titre": "Le Christ sur la croix. La Madeleine et la Vierge sont à ses pieds",
    "artiste": "Pierre-Paul Prud'hon",
    "dates": "1822",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/prudhon_christ.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062510"
  },
  {
    "id": "cl010062901",
    "musee_id": "louvre",
    "titre": "Bonaparte franchissant les Alpes",
    "artiste": "Paul Delaroche",
    "dates": "1848",
    "salle": "Salle 701",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/delaroche_alpes.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062901"
  },
  {
    "id": "cl010457022",
    "musee_id": "louvre",
    "titre": "L'Âme brisant les liens qui l'attachent à la terre",
    "artiste": "Pierre-Paul Prud'hon",
    "dates": "vers 1821-1823",
    "salle": "Salle 700",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/prudhon_ame.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010457022"
  },
  {
    "id": "cl010064491",
    "musee_id": "louvre",
    "titre": "La Justice et la Vengeance divine poursuivant le Crime",
    "artiste": "Pierre-Paul Prud'hon",
    "dates": "1808",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/prudhon_justice.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064491"
  },
  {
    "id": "cl010066293",
    "musee_id": "louvre",
    "titre": "Roger délivrant Angélique",
    "artiste": "Jean-Auguste-Dominique Ingres",
    "dates": "1819",
    "salle": "Salle 701",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/ingres_roger.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066293"
  },
  {
    "id": "cl010065566",
    "musee_id": "louvre",
    "titre": "Une odalisque, dite La Grande Odalisque",
    "artiste": "Jean-Auguste-Dominique Ingres",
    "dates": "1814",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/odalisque.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065566"
  },
  {
    "id": "cl010063624",
    "musee_id": "louvre",
    "titre": "Autoportrait",
    "artiste": "Jacques-Louis David",
    "dates": "1794",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/david_autoportrait.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010063624"
  },
  {
    "id": "cl010065425",
    "musee_id": "louvre",
    "titre": "Léonidas aux Thermopyles",
    "artiste": "Jacques-Louis David",
    "dates": "1814",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/leonidas.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065425"
  },
  {
    "id": "cl010065720",
    "musee_id": "louvre",
    "titre": "Le Sacre de Napoléon (Le Couronnement de l'empereur Napoléon Ier et de l'impératrice Joséphine dans la cathédrale Notre-Dame de Paris)",
    "artiste": "Jacques-Louis David",
    "dates": "1807",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/sacre.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065720"
  },
  {
    "id": "cl010062239",
    "musee_id": "louvre",
    "titre": "Le Serment des Horaces, entre les mains de leur père",
    "artiste": "Jacques-Louis David",
    "dates": "1784",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/horaces.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062239"
  },
  {
    "id": "cl010059773",
    "musee_id": "louvre",
    "titre": "Marat assassiné, le 13 juillet 1793",
    "artiste": "Jacques-Louis David (atelier de)",
    "dates": "1793-1794",
    "salle": "Salle 702",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "../images/parcours/marat.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010059773"
  },
  {
    "id": "cl010062788",
    "musee_id": "louvre",
    "titre": "Angélique et Médor",
    "artiste": "Toussaint Dubreuil (attribué à)",
    "dates": "1575-1600",
    "salle": "Salle 824",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/dubreuil.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062788"
  },
  {
    "id": "cl010062443",
    "musee_id": "louvre",
    "titre": "Paysage avec Orphée et Eurydice",
    "artiste": "Nicolas Poussin",
    "dates": "vers 1648",
    "salle": "Salle 825",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000062443/0000340369_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062443"
  },
  {
    "id": "cl010061018",
    "musee_id": "louvre",
    "titre": "Le Débarquement de Cléopâtre à Tarse",
    "artiste": "Claude Gellée, dit Le Lorrain",
    "dates": "vers 1642-1643",
    "salle": "Salle 826",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/lorrain_cleopatre.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010061018"
  },
  {
    "id": "cl010062002",
    "musee_id": "louvre",
    "titre": "La Présentation au Temple",
    "artiste": "Simon Vouet",
    "dates": "1641",
    "salle": "Salle 828",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/vouet_presentation.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062002"
  },
  {
    "id": "cl010060522",
    "musee_id": "louvre",
    "titre": "Portrait du cardinal de Richelieu",
    "artiste": "Philippe de Champaigne",
    "dates": "vers 1635-1640",
    "salle": "Salle 828",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/champaigne_richelieu.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060522"
  },
  {
    "id": "cl010066263",
    "musee_id": "louvre",
    "titre": "La Diseuse de bonne aventure",
    "artiste": "Nicolas Régnier",
    "dates": "vers 1626-1630",
    "salle": "Salle 829",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/regnier.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066263"
  },
  {
    "id": "cl010066185",
    "musee_id": "louvre",
    "titre": "Le Jeune Chanteur",
    "artiste": "Claude Vignon",
    "dates": "vers 1622-1623",
    "salle": "Salle 829",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/vignon.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066185"
  },
  {
    "id": "cl010061288",
    "musee_id": "louvre",
    "titre": "Portrait de jeune homme (dit Autoportrait)",
    "artiste": "Simon Vouet",
    "dates": "vers 1616-1618",
    "salle": "Salle 829",
    "aile": "Aile Richelieu",
    "niveau": "Niveau 2",
    "image": "../images/parcours/vouet_autoportrait.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010061288"
  },
  {
    "id": "cl010061650",
    "musee_id": "louvre",
    "titre": "La Prédication de saint Paul à Éphèse",
    "artiste": "Eustache Le Sueur",
    "dates": "1649",
    "salle": "Salle 908",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/lesueur_paul.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010061650"
  },
  {
    "id": "cl010060647",
    "musee_id": "louvre",
    "titre": "Melpomène, Érato et Polymnie",
    "artiste": "Eustache Le Sueur",
    "dates": "1652-1655",
    "salle": "Salle 911",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/lesueur_melpomene.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060647"
  },
  {
    "id": "cl010060622",
    "musee_id": "louvre",
    "titre": "Calliope",
    "artiste": "Eustache Le Sueur",
    "dates": "1652-1655",
    "salle": "Salle 911",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/lesueur_calliope.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060622"
  },
  {
    "id": "cl010065541",
    "musee_id": "louvre",
    "titre": "Le Dessert de gaufrettes",
    "artiste": "Lubin Baugin",
    "dates": "vers 1631",
    "salle": "Salle 911",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/baugin.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065541"
  },
  {
    "id": "cl010062422",
    "musee_id": "louvre",
    "titre": "L'Assomption de la Vierge",
    "artiste": "Nicolas Poussin",
    "dates": "vers 1649-1650",
    "salle": "Salle 911",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/poussin_assomption.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010062422"
  },
  {
    "id": "cl010065555",
    "musee_id": "louvre",
    "titre": "L'Adoration des bergers",
    "artiste": "Georges de La Tour",
    "dates": "vers 1644",
    "salle": "Salle 912",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065555/0000397527_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065555"
  },
  {
    "id": "cl010059485",
    "musee_id": "louvre",
    "titre": "La Famille heureuse (Retour du baptême)",
    "artiste": "Louis Le Nain",
    "dates": "1642",
    "salle": "Salle 912",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/lenain_famille_heureuse.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010059485"
  },
  {
    "id": "cl010060618",
    "musee_id": "louvre",
    "titre": "La Forge",
    "artiste": "Louis Le Nain",
    "dates": "vers 1640",
    "salle": "Salle 912",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/lenain_forge.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060618"
  },
  {
    "id": "cl010066434",
    "musee_id": "louvre",
    "titre": "La Charrette",
    "artiste": "Louis Le Nain",
    "dates": "1641",
    "salle": "Salle 912",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000066434/0000387667_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066434"
  },
  {
    "id": "cl010064707",
    "musee_id": "louvre",
    "titre": "Allégorie de la Victoire",
    "artiste": "Louis Le Nain (attribué à)",
    "dates": "vers 1635",
    "salle": "Salle 912",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064707/0000392367_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064707"
  },
  {
    "id": "cl010066957",
    "musee_id": "louvre",
    "titre": "Ex-voto de 1662 : la mère Catherine-Agnès Arnauld et la sœur Catherine de Sainte-Suzanne",
    "artiste": "Philippe de Champaigne",
    "dates": "1662",
    "salle": "Salle 913",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/champaigne_exvoto.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066957"
  },
  {
    "id": "cl010064799",
    "musee_id": "louvre",
    "titre": "Portrait d'homme",
    "artiste": "Philippe de Champaigne",
    "dates": "1650",
    "salle": "Salle 913",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/champaigne_homme.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064799"
  },
  {
    "id": "cl010064800",
    "musee_id": "louvre",
    "titre": "Portrait de deux hommes",
    "artiste": "Philippe de Champaigne (attribué à)",
    "dates": "1656",
    "salle": "Salle 913",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/champaigne_deux_hommes.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064800"
  },
  {
    "id": "cl010060519",
    "musee_id": "louvre",
    "titre": "Le Christ mort couché sur son linceul",
    "artiste": "Philippe de Champaigne",
    "dates": "vers 1650-1654",
    "salle": "Salle 913",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/champaigne_christ_mort.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060519"
  },
  {
    "id": "cl010060585",
    "musee_id": "louvre",
    "titre": "Entrée d'Alexandre dans Babylone (Le Triomphe d'Alexandre)",
    "artiste": "Charles Le Brun",
    "dates": "vers 1664-1665",
    "salle": "Salle 914",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/lebrun_alexandre.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060585"
  },
  {
    "id": "cl010060587",
    "musee_id": "louvre",
    "titre": "La Bataille d'Arbèles",
    "artiste": "Charles Le Brun",
    "dates": "vers 1668-1669",
    "salle": "Salle 914",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/lebrun_arbeles.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060587"
  },
  {
    "id": "cl010064319",
    "musee_id": "louvre",
    "titre": "Portrait de Robert Arnauld d'Andilly",
    "artiste": "Philippe de Champaigne",
    "dates": "1667",
    "salle": null,
    "aile": null,
    "niveau": null,
    "image": "../images/parcours/champaigne_arnauld.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064319",
    "emplacement_note": "Actuellement en dépôt au musée Carnavalet (non exposé au Louvre)"
  },
  {
    "id": "cl010064282",
    "musee_id": "louvre",
    "titre": "Intérieur hollandais, dit Les Pantoufles",
    "artiste": "Samuel van Hoogstraten",
    "dates": "vers 1655",
    "salle": "Salle 902",
    "aile": "Aile Sully",
    "niveau": "Niveau 2",
    "image": "../images/parcours/hoogstraten_pantoufles.jpg",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064282"
  },
  {
    "id": "cl010066733",
    "musee_id": "louvre",
    "titre": "Lady Macbeth somnambule",
    "artiste": "Johann Heinrich Füssli (Henry Fuseli)",
    "dates": "vers 1784",
    "salle": "Salle 713",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000066733/0000141056_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010066733"
  },
  {
    "id": "cl010065636",
    "musee_id": "louvre",
    "titre": "Portrait de Mr et Mrs John Julius Angerstein",
    "artiste": "Thomas Lawrence",
    "dates": "1791",
    "salle": "Salle 713",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065636/0000135873_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065636"
  },
  {
    "id": "cl010064781",
    "musee_id": "louvre",
    "titre": "Vue du lac de Nemi au soleil couchant",
    "artiste": "Joseph Wright of Derby",
    "dates": "vers 1790",
    "salle": "Salle 713",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064781/0000312648_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064781"
  },
  {
    "id": "cl010064912",
    "musee_id": "louvre",
    "titre": "Paysage avec une rivière et une baie dans le lointain",
    "artiste": "Joseph Mallord William Turner",
    "dates": "vers 1845",
    "salle": "Salle 713",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064912/0000312652_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064912"
  },
  {
    "id": "cl010064709",
    "musee_id": "louvre",
    "titre": "Le Petit Orateur (Portrait des enfants d'Ascoyghe Boucherett)",
    "artiste": "Thomas Lawrence",
    "dates": "vers 1799-1800",
    "salle": "Salle 713",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064709/0000312651_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064709"
  },
  {
    "id": "cl010065616",
    "musee_id": "louvre",
    "titre": "Vallon à Helmingham (Helmingham Dell)",
    "artiste": "John Constable",
    "dates": "1823",
    "salle": "Salle 713",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065616/0000312650_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065616"
  },
  {
    "id": "cl010063041",
    "musee_id": "louvre",
    "titre": "La Baie de Weymouth à l'approche de l'orage",
    "artiste": "John Constable",
    "dates": "1818-1819",
    "salle": "Salle 713",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000063041/0000318212_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010063041"
  },
  {
    "id": "cl010063027",
    "musee_id": "louvre",
    "titre": "Conversation dans un parc",
    "artiste": "Thomas Gainsborough",
    "dates": "1746-1748",
    "salle": null,
    "aile": null,
    "niveau": null,
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000063027/0001252750_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010063027",
    "emplacement_note": "Actuellement en dépôt au château de Versailles (non exposé au Louvre)"
  },
  {
    "id": "cl010067390",
    "musee_id": "louvre",
    "titre": "Le Pandémonium",
    "artiste": "John Martin",
    "dates": "1841",
    "salle": "Salle 713",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000067390/0000134383_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010067390"
  },
  {
    "id": "cl010065972",
    "musee_id": "louvre",
    "titre": "Portrait de Nancy Graham, dit aussi L'Innocence",
    "artiste": "Henry Raeburn",
    "dates": "vers 1810",
    "salle": "Salle 713",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000065972/0000135103_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010065972"
  },
  {
    "id": "cl010064316",
    "musee_id": "louvre",
    "titre": "Portrait de Mrs Isaac Cuthbert",
    "artiste": "Thomas Lawrence",
    "dates": "1816-1817",
    "salle": "Salle 714",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064316/0000405602_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064316"
  },
  {
    "id": "cl010064298",
    "musee_id": "louvre",
    "titre": "Madame Drouais, née Anne-Françoise Doré (1732-v. 1815), femme de l'artiste",
    "artiste": "François-Hubert Drouais",
    "dates": "vers 1758",
    "salle": "Salle 714",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064298/0000405604_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064298"
  },
  {
    "id": "cl010064297",
    "musee_id": "louvre",
    "titre": "Marie-Anne Mancini, duchesse de Bouillon (portrait présumé)",
    "artiste": "Nicolas de Largillière",
    "dates": "avant 1700",
    "salle": "Salle 714",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064297/0000405606_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064297"
  },
  {
    "id": "cl010064315",
    "musee_id": "louvre",
    "titre": "La Duchesse de Chaulnes, représentée en Hébé",
    "artiste": "Jean-Marc Nattier",
    "dates": "1744",
    "salle": "Salle 714",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064315/0000405610_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064315"
  },
  {
    "id": "cl010064299",
    "musee_id": "louvre",
    "titre": "Portrait d'un jeune artiste (Charles-Paul-Jérôme Bréa)",
    "artiste": "Jean-Honoré Fragonard",
    "dates": "vers 1769",
    "salle": "Salle 714",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064299/0000405605_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064299"
  },
  {
    "id": "cl010064303",
    "musee_id": "louvre",
    "titre": "La Mort de Didon, reine de Carthage",
    "artiste": "Pierre Paul Rubens",
    "dates": "vers 1635-1638",
    "salle": "Salle 714",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064303/0000559579_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064303"
  },
  {
    "id": "cl010059547",
    "musee_id": "louvre",
    "titre": "Le Pied-Bot",
    "artiste": "José de Ribera",
    "dates": "1642",
    "salle": "Salle 718",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000059547/0001179049_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010059547"
  },
  {
    "id": "cl010060879",
    "musee_id": "louvre",
    "titre": "Le Jeune Mendiant",
    "artiste": "Bartolomé Esteban Murillo",
    "dates": "vers 1647-1648",
    "salle": "Salle 718",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060879/0000135299_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060879"
  },
  {
    "id": "cl010063597",
    "musee_id": "louvre",
    "titre": "La Mise au tombeau",
    "artiste": "José de Ribera",
    "dates": "vers 1628-1630",
    "salle": "Salle 718",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000063597/0001343908_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010063597"
  },
  {
    "id": "cl010064947",
    "musee_id": "louvre",
    "titre": "Saint Bonaventure au concile de Lyon",
    "artiste": "Francisco de Zurbarán",
    "dates": "vers 1629",
    "salle": "Salle 718",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064947/0001178431_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064947"
  },
  {
    "id": "cl010060882",
    "musee_id": "louvre",
    "titre": "La Sainte Famille, dite La Vierge de Séville",
    "artiste": "Bartolomé Esteban Murillo",
    "dates": "vers 1665-1670",
    "salle": "Salle 718",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000060882/0001330789_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010060882"
  },
  {
    "id": "cl010064732",
    "musee_id": "louvre",
    "titre": "Le Christ en croix adoré par deux donateurs",
    "artiste": "Le Greco",
    "dates": "vers 1590",
    "salle": "Salle 718",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064732/0001026834_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064732"
  },
  {
    "id": "cl010064317",
    "musee_id": "louvre",
    "titre": "Portrait de la comtesse del Carpio, marquise de la Solana",
    "artiste": "Francisco de Goya",
    "dates": "vers 1794-1795",
    "salle": "Salle 714",
    "aile": "Aile Denon",
    "niveau": "Niveau 1",
    "image": "https://collections.louvre.fr/media/cache/small/0000000021/0000064317/0000559786_OG.JPG",
    "notice_url": "https://collections.louvre.fr/ark:/53355/cl010064317"
  },
  {
    "id": "orsay-10052",
    "musee_id": "orsay",
    "titre": "La Blanchisseuse",
    "artiste": "Honoré Daumier",
    "dates": "vers 1863",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 4",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-blanchisseuse-10052"
  },
  {
    "id": "orsay-21294",
    "musee_id": "orsay",
    "titre": "Un vanneur (Le Vanneur)",
    "artiste": "Jean-François Millet",
    "dates": "vers 1848",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 5",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/un-vanneur-21294",
    "image": "../images/parcours/millet_vanneur.jpg"
  },
  {
    "id": "orsay-272956",
    "musee_id": "orsay",
    "titre": "Autoportrait de l'artiste, dit « Le Désespéré »",
    "artiste": "Gustave Courbet",
    "dates": "vers 1844-1845",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 4",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/autoportrait-de-lartiste-dit-aussi-desespoir-ou-encore-le-desespere-272956",
    "image": "../images/parcours/courbet_autoportrait.jpg"
  },
  {
    "id": "orsay-926",
    "musee_id": "orsay",
    "titre": "La Source",
    "artiste": "Gustave Courbet",
    "dates": "1868",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 6",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-source-926",
    "image": "../images/parcours/courbet_source.jpg"
  },
  {
    "id": "orsay-974",
    "musee_id": "orsay",
    "titre": "Arrangement en gris et noir n°1 (Portrait de la mère de l'artiste)",
    "artiste": "James Abbott McNeill Whistler",
    "dates": "1871",
    "niveau": "Rez-de-chaussée",
    "salle": "Galerie Seine",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/arrangement-en-gris-et-noir-ndeg1-974",
    "image": "../images/parcours/whistler_mere.jpg"
  },
  {
    "id": "orsay-211",
    "musee_id": "orsay",
    "titre": "Un coin de table",
    "artiste": "Henri Fantin-Latour",
    "dates": "1872",
    "niveau": "Rez-de-chaussée",
    "salle": "Galerie Seine",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/coin-de-table-211",
    "image": "../images/parcours/fantin_coin_table.jpg"
  },
  {
    "id": "orsay-242",
    "musee_id": "orsay",
    "titre": "Intérieur de forêt",
    "artiste": "Théodore Rousseau",
    "dates": "1836-1837",
    "niveau": "Rez-de-chaussée",
    "salle": "Galerie Seine",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/interieur-de-foret-242",
    "image": "../images/parcours/rousseau_interieur_foret.jpg"
  },
  {
    "id": "orsay-10894",
    "musee_id": "orsay",
    "titre": "Le Braconnier",
    "artiste": "Narcisse Diaz de la Peña",
    "dates": "1869",
    "emplacement_note": "Salle à confirmer",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/le-braconnier-10894",
    "image": "../images/parcours/diaz_braconnier.jpg"
  },
  {
    "id": "orsay-30",
    "musee_id": "orsay",
    "titre": "Une avenue, forêt de l'Isle-Adam",
    "artiste": "Théodore Rousseau",
    "dates": "1849",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 4",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/une-avenue-foret-de-lisle-adam-30"
  },
  {
    "id": "orsay-153690",
    "musee_id": "orsay",
    "titre": "L'Égalité devant la mort",
    "artiste": "William Bouguereau",
    "dates": "1848",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 3",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/egalite-devant-la-mort-153690",
    "image": "../images/parcours/bouguereau_egalite.jpg"
  },
  {
    "id": "orsay-264",
    "musee_id": "orsay",
    "titre": "Antibes, la promenade à cheval",
    "artiste": "Ernest Meissonier",
    "dates": "1868",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 10",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/antibes-la-promenade-cheval-264"
  },
  {
    "id": "orsay-61",
    "musee_id": "orsay",
    "titre": "La Robe rose",
    "artiste": "Frédéric Bazille",
    "dates": "1864",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 18",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-robe-rose-61",
    "image": "../images/parcours/bazille_robe_rose.jpg"
  },
  {
    "id": "orsay-59",
    "musee_id": "orsay",
    "titre": "La Réunion de famille",
    "artiste": "Frédéric Bazille",
    "dates": "1867",
    "niveau": "Rez-de-chaussée",
    "salle": "Galerie Seine",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/reunion-de-famille-59",
    "image": "../images/parcours/bazille_reunion.jpg"
  },
  {
    "id": "orsay-788",
    "musee_id": "orsay",
    "titre": "Achille Emperaire",
    "artiste": "Paul Cézanne",
    "dates": "1867-1868",
    "niveau": "Rez-de-chaussée",
    "salle": "Salle 11",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/achille-emperaire-788",
    "image": "../images/parcours/cezanne_achille.jpg"
  },
  {
    "id": "orsay-1012",
    "musee_id": "orsay",
    "titre": "Le Pont du chemin de fer à Argenteuil",
    "artiste": "Claude Monet",
    "dates": "1873-1874",
    "niveau": "Niveau supérieur",
    "salle": "Salle 29",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/le-pont-du-chemin-de-fer-argenteuil-1012",
    "image": "../images/parcours/monet_argenteuil.jpg"
  },
  {
    "id": "orsay-1094",
    "musee_id": "orsay",
    "titre": "Étude, torse, effet de soleil",
    "artiste": "Auguste Renoir",
    "dates": "vers 1876",
    "niveau": "Niveau supérieur",
    "salle": "Salle 30",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/etude-1094",
    "image": "../images/parcours/renoir_torse.jpg"
  },
  {
    "id": "orsay-1096",
    "musee_id": "orsay",
    "titre": "La Balançoire",
    "artiste": "Auguste Renoir",
    "dates": "1876",
    "niveau": "Niveau supérieur",
    "salle": "Salle 30",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-balancoire-1096",
    "image": "../images/parcours/renoir_balancoire.jpg"
  },
  {
    "id": "orsay-1148",
    "musee_id": "orsay",
    "titre": "Le Champ de courses. Jockeys amateurs près d'une voiture",
    "artiste": "Edgar Degas",
    "dates": "1876-1887",
    "niveau": "Niveau supérieur",
    "salle": "Salle 31",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/le-champ-de-courses-jockeys-amateurs-pres-dune-voiture-1148",
    "image": "../images/parcours/degas_champ_course.jpg"
  },
  {
    "id": "orsay-961",
    "musee_id": "orsay",
    "titre": "Petite danseuse de quatorze ans",
    "artiste": "Edgar Degas",
    "dates": "vers 1881 (bronze du XXe siècle)",
    "niveau": "Niveau supérieur",
    "salle": "Salle 32",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/petite-danseuse-de-quatorze-ans-961",
    "image": "../images/parcours/degas_petite_danseuse.jpg"
  },
  {
    "id": "orsay-1296",
    "musee_id": "orsay",
    "titre": "Jeune fille au jardin",
    "artiste": "Mary Cassatt",
    "dates": "1880",
    "niveau": "Niveau supérieur",
    "salle": "Salle 33",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/jeune-fille-au-jardin-1296",
    "image": "../images/parcours/cassatt_jeune_fille.jpg"
  },
  {
    "id": "orsay-1286",
    "musee_id": "orsay",
    "titre": "La Cathédrale de Rouen. Le Portail vu de face, harmonie brune",
    "artiste": "Claude Monet",
    "dates": "1892",
    "niveau": "Niveau supérieur",
    "salle": "Salle 35",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-cathedrale-de-rouen-le-portail-vu-de-face-1286",
    "image": "../images/parcours/monet_cathedrale.jpg"
  },
  {
    "id": "orsay-1178",
    "musee_id": "orsay",
    "titre": "Meules, fin de l'été",
    "artiste": "Claude Monet",
    "dates": "1891",
    "niveau": "Niveau supérieur",
    "salle": "Salle 34",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/meules-fin-de-lete-1178",
    "image": "../images/parcours/monet_meules.jpg"
  },
  {
    "id": "orsay-1065",
    "musee_id": "orsay",
    "titre": "La Danse",
    "artiste": "William Bouguereau",
    "dates": "1856",
    "emplacement_note": "Salle à confirmer",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-danse-1065"
  },
  {
    "id": "orsay-2347",
    "musee_id": "orsay",
    "titre": "La Vérité",
    "artiste": "Paul Baudry",
    "dates": "vers 1879",
    "emplacement_note": "Salle à confirmer",
    "notice_url": "https://www.musee-orsay.fr/fr/oeuvres/la-verite-2347"
  }
];

window.PARCOURS = [
  {
    "musee_id": "orsay",
    "date_creation": "2026-11-12",
    "id": "orsay_1836-1872_realisme",
    "illustration": "orsay-342",
    "titre": "[Orsay] [Rez-de-chaussée] [1836-1872] Le réalisme : Daumier, Millet, Courbet",
    "cours_source": "Parcours personnel : le réalisme au musée d'Orsay",
    "fil_conducteur": "Le réalisme face au romantisme et au classicisme : le monde du travail et la politique chez Daumier, Millet et Rosa Bonheur, le paysage de Barbizon, puis Courbet, de l'Enterrement à Ornans à l'Atelier du peintre.",
    "duree_estimee": "1h",
    "etapes": [
      {
        "oeuvre_id": "orsay-10865",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le réalisme apparaît dans une période marquée par l'opposition entre romantisme et classicisme : il ouvre une voie nouvelle en évoquant la **réalité sans idéalisation** et en abordant des thématiques politiques et sociales.",
                "Honoré Daumier, fervent républicain, commence comme caricaturiste au journal La Caricature ; connu pour ses **lithographies**, il dessine pour Le Charivari jusqu'à la fin de sa vie.",
                "Le 24 février 1848, la République est proclamée : il faut une image officielle, et un concours s'ouvre le 14 mars pour « la figure peinte de la République ».",
                "Plus de 700 candidats se présentent, dont Daumier et Jean-Léon Gérôme, deux styles différents à la même période ; Daumier est retenu parmi les 20 finalistes : sa carrière de peintre commence avec cette toile.",
                "Le jury (Ingres, Delacroix, Delaroche) classe Daumier 11e, mais il n'y a **pas de lauréat** : la répression de juin, et une Seconde République qui se veut fraternelle, l'expliquent."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La figure est stable : elle tient fermement le **drapeau**, et la poitrine dénudée rappelle La Liberté guidant le peuple de Delacroix (1830).",
                "Regardez la femme au centre dominant les enfants à ses pieds : l'un lit, les livres rappellent l'instruction. L'esquisse mesure 70 cm de haut.",
                "En face, la République de Gérôme est néo-grecque : déesse figée, de face, rameau d'olivier, glaive baissé, arc-en-ciel et étoile dans un paysage apaisé."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Daumier propose une République généreuse, sur l'iconographie de la **charité** : une femme du peuple nourrit deux enfants tandis qu'un troisième lit à ses pieds.",
                "L'image est simple, populaire, réaliste : la République nourrit ses enfants et les instruit."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-10052",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Daumier revient au Salon une dizaine d'années plus tard, après l'accueil très mauvais de ses grandes toiles comme Femmes poursuivies par des satyres (1850) : ici, des dimensions beaucoup plus réduites (huile sur bois, 49 x 33,5 cm).",
                "On y retrouve son **modelé** et sa façon esquissée de représenter les figures, héritée de la sculpture.",
                "Pour Daumier, des œuvres comme La Blanchisseuse ou Rue Transnonain se veulent de dimension **universelle**."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Composition en **diagonale**, avec les marches que la femme gravit ; le lieu, une ville, ne peut pas être localisé.",
                "Observez les immeubles cernés et éclairés par une lumière blanche.",
                "En caricaturiste, Daumier va droit à l'essentiel : pas de détail dans la figure, ni dans le modelé de la sculpture classique, ni dans l'expression des émotions."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une blanchisseuse termine sa tâche : elle tient les draps sous son bras et porte son enfant d'une main.",
                "Elle est représentée pour sa qualité de **travailleuse**, en pleine tâche, et non comme individu."
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
                "Exposée au Salon de 1857, l'œuvre déclenche une **polémique** : certains critiques y voient une lutte sociale, les glaneuses incarnant le prolétariat rural et la misère des campagnes françaises.",
                "Millet est pourtant un peintre conservateur, non engagé politiquement : son œuvre est fataliste, l'homme est condamné à porter son fardeau et le travailleur ne peut échapper à sa condition.",
                "Elle est admirée pour sa simplicité et sa capacité à hisser le paysan à la hauteur de la grande histoire : Paul Mantz (1859) y voit la preuve que les rudes labeurs des champs ont « leur poésie et leur héroïsme »."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 83,5 x 110 cm : un grand format d'histoire pour un sujet « bas ». Regardez la composition en **frise**, le ciel couvrant un tiers du tableau.",
                "Trois femmes, trois positions qui se courbent vers le sol, absorbées dans leur tâche : se baisser, ramasser, se relever.",
                "Observez leurs têtes couvertes, sans visage, et leurs vêtements pauvres en bleu, blanc, rouge : dignes des valeurs de l'**emblème national**.",
                "À l'arrière-plan, le climat change : la récolte du blé et, au fond à droite, un garde à cheval qui surveille, comme l'instant fécond du Radeau de la Méduse."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le glanage est un travail réglementé : autorisé avant le coucher du soleil, pour ramasser les épis négligés dans les champs moissonnés.",
                "Anonymes, les paysannes représentent la classe des travailleurs : Millet en fait des figures classiques, une image universelle du **labeur**. Le glanage renvoie à une longue histoire (Poussin, L'Été, Ruth et Boaz).",
                "Chez Jules Breton (Le Rappel des glaneuses, 1859), la charge paysanne est plus pittoresque : un garde, la lune, le coucher du soleil, un aspect bucolique ; la misère y transparaît moins que chez Millet, où la dureté du labeur réside dans la forme même des corps."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-21294",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "La révolution de 1848 change la donne pour Millet : la question sociale passe au premier plan et l'**idéalisme** est mis de côté ; la Seconde République encourage un retour vers le peuple.",
                "Le jury étant supprimé en 1848, Millet envoie cette œuvre inédite de grande dimension.",
                "Le tableau est bien accueilli par la critique ; aucune lecture politique n'en est donnée, mais il est acheté par le **nouvel État républicain**.",
                "Il inspire certainement Courbet pour Les Casseurs de pierres."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Presque un portrait : un paysan en pied, dans un cadrage serré, absorbé dans sa tâche et qui ne pose pas.",
                "Observez la **palette très réduite**, comme chez Daumier : le rouge du mouchoir, la chemise blanche, le pantalon bleu.",
                "Millet monumentalise le travailleur, comme Géricault : non pas l'individu, mais sa **fonction**."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le vannage des grains de céréales sert à les nettoyer.",
                "Misère du labeur, mais aussi beauté dans le traitement du blé : regardez son ton doré, qui illumine la toile."
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
                "Il s'inspire de ces nouveaux héros pour représenter une France qui existe loin de Paris. Sa réputation ne cesse de croître : il devient le grand peintre républicain des années 1870, alors que Courbet, plus virulent, deviendra le communard qui suscite la méfiance."
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
      },
      {
        "oeuvre_id": "orsay-10894",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Les peintres de Barbizon pratiquent un art de paysage qui s'assume comme tel : la forêt de Fontainebleau est un lieu d'étude, et cette peinture de plein air sera une composante de l'impressionnisme.",
                "Rousseau passe l'hiver à Paris, l'été à Barbizon, et y rencontre le peintre espagnol Narcisse Diaz de la Peña, attiré par sa peinture."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Regardez le grand arbre qui domine la toile et le ciel chargé de nuages, qui occupe une large part du tableau."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Comme chez les peintres de Barbizon, un **sentiment dédié à la nature** : le paysage s'anime par lui-même, sans narration ni scène historique, ancré en France."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-242",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Théodore Rousseau (1812-1867) est surnommé « le grand refusé » : entre 1836 et 1848, ses paysages sont refusés au Salon.",
                "La situation change avec la Seconde République, quand l'intérêt pour le paysan, loin de la ville, s'éveille ; il est enfin reconnu à l'Exposition universelle de 1855.",
                "Il passe l'hiver à Paris, l'été à **Barbizon**, où il rencontre le peintre espagnol Narcisse Diaz de la Peña.",
                "Les peintres de Barbizon se débarrassent du biais historique pour faire du paysage à part entière ; l'invention du tube d'étain facilite la peinture en plein air.",
                "Il devient l'un des paysagistes les plus admirés du XIXe siècle, acheté dès les années 1860 par Paul Durand-Ruel."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Regardez le sous-bois sombre, ouvert sur une trouée de ciel et de lumière, où se glissent de petites silhouettes.",
                "Chez Rousseau, les effets de lumière, la palette restreinte et le « toit végétal » des arbres font du paysage un miroir de l'âme."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Rousseau renonce à la narration des paysages historiques pour montrer un **sentiment dédié à la nature** : l'éphémère, le fragile, ce qui passe."
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
                "C'est une **commande** passée à Rosa Bonheur (1822-1899) pour le musée de Lyon ; le tableau, dit aussi Le Sombrage, sera finalement conservé à Paris, au musée du Luxembourg, musée de l'art contemporain.",
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
        "oeuvre_id": "orsay-272956",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Avant ses grandes toiles réalistes, Courbet a été proche des romantiques et, au début de sa carrière, de Baudelaire.",
                "Autodidacte, il ne reconnaît aucune hiérarchie : pour lui **tout est bon à peindre**. Son maître, c'est la nature, humaine (il fait beaucoup d'autoportraits au début) et paysage (deux tiers de son œuvre).",
                "Sa carrière commence vers 1840 avec une douzaine d'autoportraits : il se met en scène en cherchant sa voie à son arrivée à Paris."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le réalisme n'est pas chez lui une intention : il fait ce qu'il a envie de faire. Il revendiquera plus tard le qualificatif de **Réaliste**, au risque d'en oublier ces débuts.",
                "Dans les autoportraits de cette période, comme L'Homme à la pipe (1849), il se montre en artiste de la bohème parisienne, dans une attitude savamment étudiée."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-926",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Pour Courbet, **tout est bon à peindre** : il ne reconnaît aucune hiérarchie et passe d'un genre à l'autre avec une grande liberté.",
                "Son maître, c'est la nature, humaine ou paysage ; sa peinture n'est pas une imitation de la nature mais une **invention**, nourrie par l'imagination et la mémoire."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un nu dans la nature : Courbet s'était déjà attaqué au genre du nu avec Les Baigneuses (1853), reprenant le thème classique de la baigneuse pour le rendre provocateur (pieds sales, corps éloigné du canon).",
                "Cherchez ce que ce nu garde ou refuse de l'idéalisation académique."
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
                "Le sujet, c'est la campagne, loin de Paris : Courbet le revendique.",
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
                "Le paysage est très plat, avec les falaises de craie du cimetière d'Ornans sous un ciel gris qui écrase les personnages.",
                "Technique subversive : silhouettes cernées de noir comme la caricature de Daumier, noirs lisses mais blancs en matière épaisse et rugueuse."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une assemblée austère et silencieuse, des anonymes qui ne nous regardent pas : un enterrement, événement universel, sans héros représenté.",
                "L'alignement des figures à la même hauteur est vu comme symbole d'**égalitarisme** : un sujet qui n'intéresse que Courbet devient tableau d'histoire.",
                "« L'enterrement du romantisme » : le trou, un idéalisme sans portée métaphysique. Mais Delacroix et Ingres sont toujours vivants.",
                "Le Christ n'est présent que de façon matérielle, par le crucifix, alors que chez Friedrich il est dans la nature ; on y voit peut-être une référence à deux républicains, héros de 1789, et un crâne, sorte de vanité, posé aux pieds des hommes."
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
                "Face à l'Exposition universelle, qui présente Ingres (Odalisque, Jeanne d'Arc, La Source, le Sphinx, La Baigneuse de Valpinçon), deux générations, deux mondes, s'affrontent ; l'exposition de Courbet est très peu visitée et son réalisme mal compris.",
                "Dans le prologue du catalogue il écrit : « Savoir pour pouvoir [...] faire de l'art vivant tel est mon but. »",
                "Il y a un pas entre Courbet et l'art officiel : on pense à L'Apothéose d'Homère d'Ingres ou au Siècle d'Auguste de Gérôme, célébrant Napoléon III.",
                "Son adhésion au réalisme, pendant un temps contre son gré, lui donne une visibilité dans le circuit de l'art."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 361 x 598 cm. Regardez la **frise** en trois parties : Courbet au centre, et deux groupes de part et d'autre.",
                "Courbet peint, certainement en autoportrait, un paysage d'Ornans sur une grande toile carrée inachevée sur le chevalet.",
                "Ce tableau ne correspond à aucun genre de la peinture académique, mais on les y retrouve tous : paysage, scène de genre (enfant habillé en paysan, chien), nu, modèle d'atelier aux vêtements posés au sol."
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
        "oeuvre_id": "orsay-974",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Whistler est parfois rattaché à l'impressionnisme et au symbolisme, mais il défend un art **autonome** : pour lui, le sujet n'a rien à voir avec l'harmonie des sons ou des couleurs.",
                "« De même que la musique est la poésie du son, de même la peinture est la poésie de la vue » (1878) : il appelle ses œuvres des **« arrangements »** et des **« harmonies »**.",
                "Ses audaces lui valent les attaques de Ruskin, auquel il intente un procès."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait de la mère de l'artiste, daté de 1871.",
                "Cherchez ce que ce portrait doit à l'idée d'« arrangement » chère à Whistler."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-211"
      }
    ]
  },
  {
    "musee_id": "orsay",
    "date_creation": "2026-11-12",
    "id": "orsay_1846-1879_academisme",
    "illustration": "orsay-98",
    "titre": "[Orsay] [Rez-de-chaussée] [1846-1879] L'académisme : Gérôme, Cabanel, Bouguereau",
    "cours_source": "Parcours personnel : l'académisme à Orsay",
    "fil_conducteur": "Le goût antique de Gérôme, le nu académique de Cabanel et de Bouguereau (Vénus, Dante et Virgile), puis Baudry, Meissonier et Couture : l'art du Salon et de l'Académie.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "orsay-328",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le Salon de 1787, dirigé par l'Académie royale, présente les artistes qui répondent aux critères de la peinture académique, les autres étant refusés : c'est un excellent moyen de se faire connaître et de vendre ses tableaux.",
                "L'Académie place au sommet la **peinture d'histoire**, puis le portrait, puis le paysage, la nature morte et la scène de genre.",
                "Après la suppression de l'Académie royale en 1793, l'institution prend en 1816 sa forme définitive d'**Académie des Beaux-Arts**, et l'École des Beaux-Arts est fondée la même année.",
                "Un concours annuel permet de remporter le **prix de Rome** : un séjour à la villa Médicis pour étudier les chefs-d'œuvre de la Renaissance et de l'Antiquité tout en se formant au grand genre. À leur retour en France, une brillante carrière les attend en général.",
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
        "oeuvre_id": "orsay-98",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Cabanel, formé à l'Académie des Beaux-Arts, obtient le **grand prix de Rome** en 1845, après deux échecs, puis est pensionnaire à la villa Médicis ; il a le même mécène que Courbet, Alfred Bruyas.",
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
        "oeuvre_id": "orsay-16649",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Bouguereau peint cette Naissance de Vénus en 1879, seize ans après celle de Cabanel (1863), acquise par Napoléon III.",
                "Il est professeur à l'académie Julian, fondée en 1869, et fait partie des figures tutélaires de l'académisme avec Cabanel et Baudry.",
                "Il s'inspire de la Naissance de Vénus de Botticelli et du Triomphe de Galatée de Raphaël, et rivalise avec Paul Baudry (La Fortune et le jeune enfant, 1857, non exposé) en soignant les personnages secondaires."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Vénus sort d'un coquillage ; regardez la façon dont les eaux et les airs la célèbrent, des vagues au ciel : nous sommes invités à contempler son corps.",
                "Bouguereau met l'accent sur les **personnages secondaires** qui entourent Vénus : observez leur rôle dans la composition d'ensemble.",
                "La peinture doit être « totalement finie jusqu'à son modelé » : cherchez l'absence de touche visible, qui rend la chair lisse et irréelle."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Selon la mythologie, Vénus naît de l'eau et est célébrée par les éléments : la scène est une allégorie de la beauté idéale.",
                "Cette Vénus est **séduisante et artificielle**, entre réel et illusionnisme, comme celle de Cabanel.",
                "Le nu mythologique, imposé par la tradition académique, offre une sensualité acceptable grâce à l'excuse du sujet antique."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-153690",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "En 1848, la Seconde République place la question sociale au premier plan et promeut l'idée d'**égalité**.",
                "Bouguereau, figure tutélaire de l'académisme avec Cabanel et Baudry, est héritier de l'ingrisme ; il incarne le grand genre, « le grand classique par excellence »."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "L'idée d'égalité promue par la Seconde République revêt ici une dimension **chrétienne** : l'égalité de tous devant la mort.",
                "Le tableau évoque les visions du poète anglais **William Blake**."
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
                "Peint en 1850, ce tableau marque un tournant surprenant dans une carrière habituellement tournée vers la peinture d'histoire ; Bouguereau veut se faire remarquer au Salon de 1851.",
                "Il est l'une des figures tutélaires de l'académisme, avec Cabanel et Baudry, héritiers de l'**ingrisme**, devenu synonyme d'académisme ; il enseigne à l'académie Julian, école privée payante.",
                "Il devient l'une des « coqueluches » des artistes américains, et incarne le grand genre, « le grand classique par excellence », tout en côtoyant Manet et les modernistes.",
                "Son héritage italien se lit dans le traitement du paysage (Titien)."
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
                "Dante, poète florentin, décrit dans L'Enfer sa descente en vie, guidé par Virgile : au huitième cercle des Enfers, ils assistent au combat de deux damnés ; on y découvre aussi une créature mi-chauve-souris, mi-hybride, planant au-dessus de la scène.",
                "Le combat acharné entre deux âmes est un prétexte pour explorer la **musculature masculine** : Bouguereau utilise les scènes de Dante pour représenter des poses exacerbées.",
                "La scène infernale devient une étude des postures violentes, plus qu'un récit littéraire."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1065",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Bouguereau doit sa renommée à La Danse, qui prouve qu'il sait **agencer des figures en mouvement**.",
                "L'œuvre est réalisée dans le cadre des arts décoratifs, pour l'hôtel particulier d'Anatole Bartholoni, rue de Verneuil."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La palette est vive et contrastée ; regardez comment les figures sont organisées en une composition en mouvement, à la fois harmonieuse et aérienne."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Ce qui retient surtout l'attention, c'est la représentation du **corps féminin** : Bouguereau s'attache au mouvement, à la fluidité et au dynamisme de la danse.",
                "À l'instar de Carpeaux et de sa Danse, qui orne la façade de l'Opéra Garnier."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-2347",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Paul Baudry est l'une des figures tutélaires de l'académisme avec Cabanel et Bouguereau, héritiers de l'**ingrisme** ; il rivalise avec Bouguereau.",
                "Il remporte le **grand prix de Rome** en 1850 avec Zénobie trouvée par des bergers sur les bords de l'Araxe, ce qui lui permet d'étudier cinq ans à la villa Médicis : on lit l'influence italienne, surtout dans le traitement du paysage.",
                "Il peint La Fortune et le jeune enfant (1857, d'après La Fontaine), puis 13 juillet 1793. Assassinat de Marat par Charlotte Corday (1860), hommage à David : même scène, même décor, vus sous un autre angle, centrés sur la meurtrière plutôt que sur le martyr.",
                "Il reçoit une commande pour le foyer de l'Opéra Garnier."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-264",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ernest Meissonier est un peintre d'histoire, spécialisé dans les scènes de bataille, qui renouvelle le genre comme Gérôme : l'Académie imposait des thèmes classiques ou bibliques, lui s'ancre dans une vérité historique et émotionnelle.",
                "Son format est réduit et loin du grand genre héroïque ; il pratique un réalisme sobre, aux détails minutieux et aux teintes brunes.",
                "L'épopée napoléonienne reste un sujet populaire sous Napoléon III, qui se sert de l'académisme pour les Expositions universelles de 1855 et 1867."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Antibes, la promenade à cheval, 1868 : le titre annonce une promenade à cheval à Antibes.",
                "Comparez avec sa Campagne de France, 1814 (1864) : dimensions réduites, souci du détail."
              ]
            }
          ]
        }
      },
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
      }
    ]
  },
  {
    "musee_id": "orsay",
    "date_creation": "2026-11-12",
    "id": "orsay_1849-1868_modernite-avant-impressionnisme",
    "illustration": "orsay-712",
    "titre": "[Orsay] [Rez-de-chaussée] [1849-1868] La modernité : Manet et les avant-impressionnistes",
    "cours_source": "Parcours personnel : la modernité et l'impressionnisme à Orsay (1/2)",
    "fil_conducteur": "La modernité selon Baudelaire : Manet et le scandale du Salon des refusés, Barbizon et le plein air, puis Bazille, Monet et Cézanne avant l'impressionnisme.",
    "duree_estimee": "45-60 min",
    "etapes": [
      {
        "oeuvre_id": "orsay-904",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Dans **Le Peintre de la vie moderne** (1863), Baudelaire demande de « tirer l'éternel du transitoire » : la modernité est le fugitif et le contingent, que le peintre n'a pas le droit de supprimer.",
                "En **1863**, le jury du Salon officiel est particulièrement sévère ; Napoléon III ouvre un **Salon des refusés** pour que le public soit juge, et celui-ci vient surtout se moquer, notamment de Manet.",
                "Manet, élève de Couture avant de rompre avec lui, se forme par la copie, notamment à la Galerie espagnole (Velázquez) ; il subit l'influence de **Courbet**, qui part du contemporain pour s'inscrire dans l'histoire.",
                "Deux sources formelles sont identifiées : Le Concert champêtre de Titien (alors attribué à Giorgione) et Le Jugement de Pâris de Marcantonio Raimondi."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toile de **207 x 265 cm**, grand format destiné à la peinture d'histoire ; titre original Le Bain, que Manet surnommait « la partie carrée ».",
                "**Aplats** et forts **empâtements** sont révolutionnaires ; notes nettes (le corps féminin) et zones floues (la mare, la barque) coexistent.",
                "Regardez la femme au fond, disproportionnée, le télescopage des plans et les ombres contradictoires : un critique juge que Manet aura du talent « le jour où il saura le dessin et la perspective ».",
                "Nu peint en atelier, paysage conçu comme un **décor de théâtre**, effet de collage : Manet assume la bi-dimensionnalité, rejette l'illusionnisme et affiche l'artificialité de la peinture. C'est délibéré, et Zola le défend."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Quatre personnages dans un sous-bois : Eugène Manet à demi couché, Ferdinand Leenhoff assis, une femme au fond qui trempe la main dans la mare, et Victorine Meurent.",
                "Le scandale tient au **sujet** : dans un format d'histoire, Manet montre la vie moderne, une femme **dévêtue** et non simplement nue, sans prétexte allégorique ni mythologique.",
                "Regardez le regard impudique et frondeur de Victorine, qui nous fixe franchement ; les citations de maîtres sont un travestissement de la grande peinture.",
                "Détails : un bouvreuil, une grenouille à gauche, une cascade argentée, une clairière et une barque à fond plat, à la grande mode du canotage."
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
                "Peinte en **1863**, Olympia provoque un nouveau coup d'éclat au **Salon officiel de 1865**, après le scandale du Déjeuner sur l'herbe.",
                "Elle est contemporaine de la Naissance de Vénus de Cabanel (1863), acquise par Napoléon III pour 20 000 francs : même thème de la femme dévêtue, traité sans l'habillage mythologique.",
                "Les références sont la Maja desnuda de Goya et la **Vénus d'Urbino** de Titien (1538)."
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
                "Le modèle est toujours Victorine Meurent, accompagnée de Laure, la servante noire, thème récurrent dans la peinture du XIXe siècle.",
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
                "Le portrait est peint en **1868**, pour remercier Zola d'avoir pris la défense de Manet et d'Olympia.",
                "Zola, aspirant écrivain, se fait connaître par la critique d'art ; il représentera la férocité des critiques dans L'Œuvre.",
                "Dès le Déjeuner sur l'herbe, il comprend que les partis pris de Manet sont **délibérés**, et il le défend."
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
                "Zola tient une **brochure bleue** : l'article qui lui est favorable, avec plume et encrier à portée de main.",
                "On y voit l'Histoire des Peintres de Charles Blanc, une reproduction d'Olympia et une gravure du Triomphe de Bacchus de Velázquez.",
                "Le décor comprend aussi des estampes et un **paravent japonais**."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-30",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Théodore Rousseau (1812-1867) est le chef de file de l'**école de Barbizon** : un art de paysage qui s'assume comme tel, débarrassé du prétexte historique ou mythologique.",
                "Le paysage reste un **genre mineur**, mais il a son concours de **prix de Rome** officiel dès **1817** ; la forêt de Fontainebleau sert de lieu d'étude, où l'on s'entraîne à exécuter de mémoire une essence d'arbre imposée par le jury.",
                "Longtemps refusé au Salon, Rousseau (le « grand refusé ») est reconnu à l'Exposition universelle de 1855 ; ses toiles plaisent et Durand-Ruel l'achète dès les années 1860.",
                "Corot, formé en Italie, en est la figure tutélaire : paysage étudié dans la nature et recomposé en atelier, feuillages floconneux.",
                "Parmi les autres peintres de Barbizon, Narcisse Diaz de la Peña (forêt de Fontainebleau) est attiré par la peinture de Rousseau."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **101 x 81,8 cm**, peinte en 1849 dans la forêt de l'Isle-Adam.",
                "Un paysage conçu pour lui-même, au service d'un sentiment de la nature, de l'éphémère et du fragile.",
                "L'invention du **tube d'étain** de peinture toute prête, plus besoin de broyer les pigments, est un pas de plus vers la peinture en **plein air**."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Cette peinture de plein air sera une composante essentielle de l'**impressionnisme** : le rapport au plein air évolue vers les effets d'atmosphère.",
                "Johan Jongkind et Eugène Boudin, célèbre pour ses scènes de loisirs contemporains dont les bains de mer, seront eux aussi des maîtres de Monet."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-61",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Frédéric Bazille (1841-1870) se forme dans l'atelier de **Charles Gleyre**, comme Renoir, Monet et Sisley : on parle des impressionnistes avant l'impressionnisme.",
                "Il « monte à Paris » pour étudier la médecine, qu'il abandonne, et sa carrière est très courte : il meurt au combat en 1870.",
                "Il ne peut donc exposer avec le groupe en 1874 et reste associé à l'impressionnisme sans l'avoir réellement connu, alors que cette toile de **1864** en possède déjà les caractères."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **148 x 110 cm**, peinte en **plein air** dans le Languedoc.",
                "La jeune femme n'est pas le thème principal : l'accent est mis sur le **paysage**, par le jeu des lumières et les contrastes de tonalités.",
                "Regardez la liberté de la touche et la teinte rosée, difficile à restituer en photographie ; on retrouve cette liberté chez Monet (La Grenouillère) et chez Berthe Morisot."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-59",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Bazille, formé chez Gleyre, est mort au combat en 1870 ; il pratique la peinture de plein air, comme dans La Robe rose (1864).",
                "Il est accepté au **Salon de 1868**, après avoir retouché la toile en atelier."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **152 x 230 cm**, peinte entre **1867 et 1868**.",
                "Regardez la part belle faite à la **lumière** et au **paysage**."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "C'est un **portrait collectif**.",
                "Le tableau est aussi un témoignage sur la **mode** et l'histoire du costume."
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
                "Vers 1865-1866, Monet est encore très imprégné par **Manet** : son Déjeuner sur l'herbe reprend le titre et le thème du scandale de 1863.",
                "La toile devait être envoyée au Salon, mais ne l'a finalement pas été ; Femmes au jardin (vers 1866), elle, a été **refusée au Salon**.",
                "Jongkind et Eugène Boudin comptent parmi ses influences en plein air ; Bazille, Renoir, Sisley et lui ont tous eu Charles Gleyre pour maître."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le Déjeuner sur l'herbe est un fragment de **248,7 x 218 cm**, de grand format vertical ; Femmes au jardin mesure 255 x 205 cm.",
                "Monet est fidèle à Manet dans la **touche** plutôt que dans le fond de son propos.",
                "Regardez le jeu d'ombres et de lumière avec la **tache de soleil**, qui se retrouve dans Femmes au jardin."
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
                "La toile a été **refusée au Salon**, où règne encore le système académique hérité d'Ingres."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Très grand format à l'huile (**255 x 205 cm**).",
                "Regardez le **jeu d'ombres et de lumière** et la tache de soleil, déjà au cœur du Déjeuner sur l'herbe.",
                "La peinture de plein air, nourrie par Barbizon, Corot, Boudin et Jongkind, est une composante essentielle de l'impressionnisme."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-788",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Cette toile appartient à la **première époque** de Cézanne, qui tranche avec sa manière ultérieure ; elle date de la fin des années 1860 (1867-1868).",
                "Cézanne qualifiait lui-même cette peinture de « couillarde » ; plus tard, en plein air auprès de Pissarro, sa palette s'adoucit et s'allège."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile verticale de **201 x 121 cm**.",
                "Regardez la matière : peinture très **empâtée**, chargée en pigment, épaisse, travaillée au **couteau**.",
                "Les couleurs sont salies, noircies, avec une forte saturation : on est loin de la palette claire de La Maison du pendu (1873)."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "musee_id": "orsay",
    "date_creation": "2026-11-12",
    "id": "orsay_1872-1892_impressionnisme",
    "illustration": "orsay-497",
    "titre": "[Orsay] [Niveau supérieur] [1872-1892] L'impressionnisme : Monet, Renoir, Degas",
    "cours_source": "Parcours personnel : la modernité et l'impressionnisme à Orsay (2/2)",
    "fil_conducteur": "Les expositions impressionnistes : touche visible, lumière et vie moderne chez Monet, Renoir, Degas, Cassatt, Morisot, Pissarro et Caillebotte, jusqu'aux séries de Monet (Cathédrales, Meules).",
    "duree_estimee": "1h15",
    "etapes": [
      {
        "oeuvre_id": "orsay-1012",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Les impressionnistes fondent en **1873** la Société anonyme des artistes peintres, sculpteurs, graveurs ; huit expositions suivent, de 1874 (chez Nadar) à 1886, quand marchands et soutiens les portent.",
                "Ils veulent représenter la **réalité contemporaine** (industrialisation, urbanisation, nouveaux loisirs), en plein air, avec une touche visible, des tons purs juxtaposés sans mélange sur la palette et des toiles laissées en réserve ; Zola, Duranty et Mallarmé les soutiennent.",
                "Le terme naît d'une critique de Louis Leroy dans Le Charivari (« puisque je suis impressionné, il doit y avoir de l'impression là-dedans »), à propos d'**Impression, soleil levant** (1872, vue depuis l'hôtel de l'Amirauté au Havre, Marmottan) ; Castagnary le reprend positivement : ils rendent la **sensation** produite par le paysage.",
                "Impression, soleil levant : une marine avec éléments contemporains (cheminées de bateaux), orangé vif, vert, violacé, rendant les épaisseurs atmosphériques et l'instant fugace."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toile de **54 x 71 cm**, peinte en **1873-1874** et présentée à la deuxième exposition, en 1876.",
                "L'**axe oblique** exalte la notion de **vitesse** et reflète la révolution de la mobilité : le réseau ferré passe de 3 000 km en 1861 à 42 600 km à son apogée (1930).",
                "Monet tente de restituer la lumière sur différentes surfaces : piliers, nuages, cheminée, eau.",
                "L'influence de **Turner**, que Monet a bien connu à Londres pendant la guerre franco-prussienne, se lit dans la vitesse et la pluie."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1094",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Renoir, né à Limoges, d'abord peintre sur porcelaine, expose quelques toiles au Salon officiel ; cette étude est présentée à la **deuxième exposition** du groupe (1876).",
                "La critique est féroce : « amas de chair en décomposition »."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **81 x 75 cm**, à la **touche dynamique visible**, qui crée une vibration optique.",
                "Regardez les **ombres colorées**, mise en application du principe des complémentaires de Delacroix : rosé des pommettes, chevelure, marbrures de bleu, jaune et vert sur le torse, pour rendre les ombres du feuillage."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1096",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peinte en **1876**, La Balançoire est présentée à la **troisième exposition** du groupe, en 1877, avec Le Bal du Moulin de la Galette.",
                "Les deux toiles ont été **acquises par Caillebotte**, mécène des impressionnistes."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile verticale de **92 x 73 cm**.",
                "Renoir y applique la même écriture que dans son Torse de 1876 : touche dynamique visible et ombres colorées."
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
                "Peint en **1876**, Le Bal du Moulin de la Galette est présenté à la **troisième exposition** en 1877, avec La Balançoire.",
                "Ces deux toiles ont été acquises par **Caillebotte**, mécène du groupe.",
                "Renoir, né à Limoges, d'abord peintre sur porcelaine, expose aussi au Salon officiel ; la critique est féroce envers ses envois."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Très grand format à l'huile (**131,5 x 176,5 cm**).",
                "Regardez la **touche dynamique et visible**, qui crée une vibration optique, et les **ombres colorées**, héritage du principe des complémentaires de Delacroix.",
                "Observez l'impression de **mouvement**, que l'on retrouve dans Danse à la ville et Danse à la campagne (1883)."
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
        "oeuvre_id": "orsay-1148",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Degas s'intéresse surtout aux scènes de **modernité** : théâtre, danse, mais aussi champs de courses.",
                "Cette toile, intitulée Le Champ de courses. Jockeys amateurs près d'une voiture, date d'entre 1876 et 1887 et n'a pas été présentée aux expositions du groupe."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile (**65,2 x 81,2 cm**).",
                "Regardez les personnages **hors champ**, qui manifestent le mouvement, et les différentes positions des jockeys et des chevaux.",
                "Le cadrage et les attitudes évoquent le mouvement : reflet des évolutions technologiques contemporaines, notamment la **chronophotographie** d'Eadweard Muybridge (Animal locomotion) et d'Étienne-Jules Marey."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-961",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "La Petite danseuse de 14 ans (1881) est la **seule sculpture** que Degas ait exposée de son vivant, à la sixième exposition du groupe.",
                "Le monde des corps de ballet est associé à la **prostitution** ; l'œuvre est présentée sous vitre et lue sous l'angle de la **physiognomonie**, qui lit dans le visage les traits de caractère et les vices."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "L'original, conservé à Washington (National Gallery of Art), mesure 98,9 cm : cire teintée sur armature métallique, cheveux humains, **tutu véritable** (coton et soie), corset de coton, ruban, chaussons de lin.",
                "Regardez ce parti **hyperréaliste**, qui mêle matériaux réels et modelage."
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
                "Degas s'intéresse surtout aux scènes de modernité, avec une manière de représenter le mouvement liée à la **chronophotographie** de Muybridge et Marey.",
                "Même thème que La Classe de danse (1873-1876), contemporaine de la construction de l'Opéra Garnier."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile (**65 x 81,5 cm**) montrant des danseuses dans des **postures différentes**.",
                "Regardez l'**orientation variée des corps** : la même danseuse est représentée à la manière de la chronophotographie, en plusieurs moments successifs.",
                "Observez le cadrage et les attitudes, qui suggèrent le mouvement plutôt qu'une pose arrêtée."
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
                "Degas s'intéresse surtout aux scènes de modernité : théâtre, danse et champs de courses ; le cadrage et les attitudes évoquent le mouvement, comme la chronophotographie de Muybridge et Marey."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Format vertical à l'huile (**85,5 x 75 cm**), structuré par les **lignes obliques** du parquet et les verticales des pilastres et du bâton du maître de ballet.",
                "Regardez les **tutus blancs vaporeux** : en dehors de cette grande structuration, ils animent la toile de leur légèreté."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Pas de corps canonique : Degas montre les **mouvements de travail** des danseuses, non une image idéalisée.",
                "Le monde des corps de ballet est associé à la prostitution (voir la Petite danseuse de 14 ans)."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1296",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Mary Cassatt (1844-1926) expose à la **dernière exposition** du groupe, en 1886, sur proposition de **Degas**.",
                "Elle jouera un rôle déterminant dans la **diffusion de l'impressionnisme aux États-Unis**."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **92,5 x 65 cm**, peinte en 1880-1882."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait de femme dans une **activité quotidienne féminine**, sujet de la vie contemporaine."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1132",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peint en 1872 et présenté à la **première exposition** du groupe en 1874, chez Nadar : Berthe Morisot compte parmi les artistes de la Société anonyme fondée en 1873.",
                "Morisot est l'élève, le modèle et la belle-sœur de **Manet**, mais elle développe une facture très personnelle et originale.",
                "Face à l'académisme hérité d'Ingres, ligne et touche lisse, les impressionnistes revendiquent la touche visible et des sujets de la réalité contemporaine."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de petit format (**56 x 46,5 cm**).",
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
                "Huile sur toile en largeur (**65,5 x 93,2 cm**), peinte en **plein air**, avec des **ombres colorées**.",
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
                "Peint en 1875 et présenté à la **deuxième exposition** du groupe en 1876 : Caillebotte y expose à partir de cette date, avec des scènes de la vie urbaine.",
                "Riche héritier, il deviendra un grand **mécène** qui a permis de conserver l'œuvre de ses compagnons de route ; il acquiert notamment La Balançoire et Le Bal du Moulin de la Galette de Renoir."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Grand format à l'huile (**102 x 147 cm**), situé dans une **architecture haussmannienne**.",
                "Regardez les lattes du parquet : elles **creusent des lignes de composition**.",
                "Observez la lumière qui vient sublimer les corps des travailleurs et les différentes textures du bois et des copeaux, avec des effets de transparence."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une scène de travail urbain contemporaine, loin de l'histoire et de la mythologie chères à l'académisme.",
                "Les **visages ne sont pas discernables** : c'est la **gestuelle** à plusieurs étapes qui est représentée."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1286",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Après 1886, Monet n'expose plus avec les impressionnistes ; à partir des années 1890, il représente **le même objet en série** : les Meules, puis les **Cathédrales de Rouen**, puis les Nymphéas.",
                "La série des Cathédrales compte une trentaine de toiles, peintes en **1892-1894**.",
                "Le système officiel s'efface alors au profit des grands marchands d'art."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les toiles reprennent le **portail et la tour Saint-Romain**, de format vertical (autour de 107 x 73,5 cm), sous des éclairages différents : effet du matin, soleil matinal, plein soleil.",
                "Regardez les **variations lumineuses** sur un même sujet : la lumière solaire est transformée en **matière picturale**.",
                "La couleur pure permet d'y percevoir la **gestation de l'abstraction** : Kandinsky retiendra de Monet ce travail sur la lumière et la couleur."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1178",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Monet n'expose plus avec les impressionnistes après 1886 ; à partir des années 1890, il représente le même objet en **série**, dont les **Meules** (25 tableaux, 1890-1891) sont la première.",
                "Cette obsession de la série se poursuit avec les Cathédrales de Rouen puis les Nymphéas, jusqu'à la fin de sa vie.",
                "Kandinsky, découvrant une meule de Monet à Moscou, ne la reconnaît pas d'abord : il y voit la puissance insoupçonnée de la palette, et l'**objet** perd à ses yeux son caractère indispensable."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les toiles de la série (autour de 60-66 x 100 cm) montrent la même meule à différents moments : fin d'été, fin de journée à l'automne, coucher du soleil avec effet de neige.",
                "La **couleur pure** permet d'y percevoir la **gestation de l'abstraction picturale** ; Monet ne cherche plus une transcription fidèle, mais la couleur et une certaine imprécision."
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
                "Présentée à la **troisième exposition** du groupe en 1877 : il existe au moins **12 versions** de la gare Saint-Lazare par Monet, qui habitait tout près.",
                "Le chemin de fer incarne la **révolution de la mobilité**."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de format moyen (**75 x 105 cm**), à la touche **plus fondue**, la peinture empâtée, quasi granuleuse.",
                "Regardez les **différentes épaisseurs de vapeur gazeuse**, rendues par la matière.",
                "Observez l'**ombre bleue** du réseau métallique de la charpente de la verrière.",
                "À l'arrière-plan, les **immeubles haussmanniens**."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "musee_id": "louvre",
    "date_creation": "2026-11-12",
    "id": "denon_1635-1845_peinture-anglaise-portraits-xviiie",
    "illustration": "cl010066733",
    "titre": "[Louvre] [Aile Denon] [1635-1845] Peinture anglaise et portraits du XVIIIe",
    "cours_source": "Parcours personnel : peinture anglaise (salle 713) et portraits (salle 714), aile Denon",
    "fil_conducteur": "Du romantisme anglais précoce (Füssli, Wright, Martin) au paysage (Turner, Constable) et au portrait britannique (Lawrence, Gainsborough, Raeburn), puis les portraits français du XVIIIe siècle (Drouais, Largillière, Nattier, Fragonard) et Rubens.",
    "duree_estimee": "1h",
    "etapes": [
      {
        "oeuvre_id": "cl010066733",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Füssli** (Fuseli), actif à Londres : son œuvre montre que le **romantisme anglais** existe **dès 1790**, bien avant Delacroix en France ; le romantisme n'est pas une case du XIXe siècle français.",
                "Caractères romantiques déjà présents : **mouvement fort**, couleurs intenses, immensité et extase.",
                "Il s'inscrit dans l'**esthétique du sublime**, revenue vers 1757 chez les Anglais : l'« horreur délicieuse » s'intéresse à l'obscurité, au chaos et à la peur."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Scène tirée de **Macbeth** de Shakespeare : Lady Macbeth, rongée par ses crimes, marche en dormant.",
                "Le sublime pose la question de **représenter l'invisible** (fantôme, tourment intérieur) : le tableau donne forme à une angoisse plutôt qu'à un événement."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065636",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**John Julius Angerstein** : banquier, **mécène**, protecteur d'artistes ; il lègue ses œuvres à la **National Gallery**.",
                "Il possédait des tableaux et des gravures de **Claude Lorrain** : les artistes anglais du début du XIXe siècle (Turner) ont ainsi pu les observer sans voyager.",
                "**Thomas Lawrence** s'inscrit dans la tradition du **portrait aristocratique anglais**, héritée de **Titien** et de **Van Dyck**."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait d'un **collectionneur** et homme d'affaires : il affirme la réussite sociale et le goût d'un amateur.",
                "En Angleterre, sans grande commande religieuse ni royale, l'art vit surtout des commandes de l'aristocratie et de la bourgeoisie."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064781",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Joseph Wright of Derby** (1734-1797), peintre anglais.",
                "Le **Grand Tour** pousse les Européens, notamment les Anglais, vers l'Italie, ses paysages et ses ruines.",
                "Le lac de Némi est un site proche de Rome, chargé d'Antiquité."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "*Le Lac de Némi* (1790) : paysage italien, vue d'un lac des environs de Rome, destiné à un public sensible à la poésie des lieux antiques.",
                "Œuvre à rapprocher des paysagistes anglais de la même génération."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064912",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**J.M.W. Turner** (1775-1851) : génie romantique anglais, il fait du **paysage une peinture d'histoire**, aux dimensions et à l'ambition des grands genres.",
                "Passionné par **Claude Lorrain**, il émule son modèle : chez Claude, le paysage sert de prétexte à une scène biblique ou mythologique ; chez Turner, c'est la **scène qui devient prétexte** pour représenter ciel, eau, lumière.",
                "Il lègue son œuvre à la nation à condition qu'elle soit exposée **près de Claude**.",
                "Dans ses dernières années, vers 1845, la **lumière envahit** toute la toile, sans structure de plans ni profondeur construite : les éléments naturels sont montrés « en train d'être créés »."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Héritage de la composition classique de Claude : perspective dirigée vers la lumière, ciel et eau occupant l'essentiel du tableau.",
                "Les formes se dissolvent dans un **tourbillon lumineux** de couleurs, loin des contours nets."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Paysage de rivière et de baie dans le lointain : le sujet est l'**atmosphère** et la lumière, pas une anecdote.",
                "Turner n'est pas pour autant le « père de l'impressionnisme » : sa quête reste **métaphysique**, tournée vers le divin, alors que les impressionnistes n'y cherchent pas de sentiment."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064709",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Thomas Lawrence** (1769-1830), portraitiste britannique très en vue.",
                "Le portrait anglais admire **Titien** et **Van Dyck** et reprend leur style."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "*Le Petit Orateur* (vers 1800) : portrait d'enfant, saisi dans l'attitude de celui qui prend la parole.",
                "Œuvre à comparer avec les autres portraits de Lawrence du parcours, plus officiels."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065616",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**John Constable** (1776-1837) : peintre de la **campagne anglaise** (« Englishness »), il ne voyage pas en Italie et reste attaché au paysage de son enfance dans le Suffolk.",
                "Pour lui, **la peinture est une science** : exploration des lois naturelles, d'où ses nombreuses études de **ciels** et de nuages.",
                "Il fait ses croquis à l'extérieur et compose en atelier."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Dans ses grandes toiles : entrée par **plans**, **pâte épaisse**, touches de blanc qui éclairent la toile, attention au détail des feuillages.",
                "Des dimensions parfois comparables à celles de la peinture d'histoire."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Sous-bois de **Helmingham** : une scène sans événement, une peinture d'histoire **de la nature**.",
                "Son art marque les paysagistes français, après le Salon de 1824."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010063041",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**John Constable** : peintre de la nature anglaise, convaincu que la peinture est une **exploration des lois naturelles** ; il s'intéresse aux **nuages**, là où Turner s'intéresse au soleil.",
                "Croquis sur le motif, puis composition finale en atelier.",
                "Les artistes anglais, et Constable en particulier, ont élargi la **peinture de paysage et de plein air**, ensuite poursuivie en France par Corot et l'école de Barbizon."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Dans ses paysages, jusqu'à **la moitié de la composition** est réservée au ciel et aux nuages.",
                "Matière épaisse et touches de blanc qui animent la lumière."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "*Baie de Weymouth* (1818-1819) : côte du sud de l'Angleterre, traitée comme un paysage de nature plutôt que comme une scène historique."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010067390",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**John Martin** (1789-1854), peintre britannique lié au **sublime** : Burke (1750) décrit la fascination de l'homme devant la nature puissante et terrifiante.",
                "Le XVIIIe siècle est fasciné par la **ruine** et la destruction, depuis la redécouverte de **Pompéi et d'Herculanum** ; Martin peint aussi *La Destruction de Pompéi et d'Herculanum* (1822).",
                "**Milton**, *Le Paradis perdu* (1667), décrit la **chute de Satan** et reste une référence majeure des Anglais."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "*Le Pandémonium* (1841) : la capitale de l'Enfer, bâtie par les anges déchus dans le poème de Milton.",
                "Le sublime recherche l'« horreur délicieuse » : on regarde le chaos sans danger, puisque « nous regardons une peinture »."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065972",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Henry Raeburn** (1756-1823), portraitiste écossais.",
                "Le portrait britannique prolonge l'héritage de **Titien** et de **Van Dyck**, dont **Reynolds** et **Gainsborough** reprennent le style : un portrait aristocratique soigné, où la pose dit le statut."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait d'un notable de la société britannique, peint par un artiste d'Écosse, à comparer avec Lawrence et Gainsborough pour la pose, le regard et le rapport entre figure et paysage."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064316",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Thomas Lawrence** : grand portraitiste britannique du début du XIXe siècle, héritier d'un portrait anglais nourri par **Titien** et **Van Dyck**.",
                "Cette tradition aristocratique passe par Reynolds et Gainsborough."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Dans cette tradition : pose en pied, partie fermée par des arbres ou une draperie, partie **ouverte sur le paysage**, regard et coude qui créent un **contact avec le spectateur**."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait de **Mrs Isaac Cuthbert**, dame de la société britannique."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064298",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**François-Hubert Drouais** (1727-1775) peint notamment **Madame de Pompadour à son métier à broder** (1763-1764).",
                "Le portrait français du XVIIIe siècle met en scène le **statut** du modèle : ses goûts, sa culture, son intimité."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Dans le portrait de Pompadour : décor de **bibliothèque rocaille**, volumes de l'*Encyclopédie*, trépied à la grecque, petit chien **Mimi** pour marquer la fidélité.",
                "Plus d'**affect** que d'intellect."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait de Madame Drouais ; attribution et identification à vérifier."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064297",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Nicolas de Largillière** (1656-1746) : portraitiste et aussi peintre d'histoire, resté célèbre pour ses **coloris chauds**.",
                "Son *Portrait de Charles Le Brun* (1686) valorise la **réussite sociale** du modèle ; son *Portrait de l'orfèvre Thomas Germain et de sa femme* (1736) montre l'activité du modèle."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Palette **colorée** et touches vives ; modèle mis en valeur par ses attributs et sa pose."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait de **Marie-Anne Mancini**, de la famille de Mazarin (identification à vérifier)."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064315",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Jean-Marc Nattier** (1685-1766), portraitiste de la cour de Louis XV.",
                "Le portrait français du XVIIIe siècle met en scène le statut et l'élégance du modèle."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait de la **duchesse de Chaulnes**, dame de l'aristocratie du XVIIIe siècle ; à comparer avec les portraits féminins de Largillière et de Drouais pour l'élégance et le statut du modèle."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064299",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Jean-Honoré Fragonard** (1732-1806) : son *Corésus se sacrifie pour sauver Callirhoé* (1765) devait « sauver la peinture française ».",
                "Ses autres tableaux sont marqués par la **fulgurance de la touche**, moins appréciée de la critique."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Touche **vive et rapide**, saisie du modèle sans longue mise au point."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait de **Charles-Paul-Jérôme de Bréa** (1769)."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064303",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Pierre Paul Rubens** (1577-1640) : séjour en Italie (1600-1608), grand admirateur du **Titien**.",
                "Le « cartographe de la couleur » : travail par **superposition de couches colorées**, à la vénitienne, avec des touches claires sur fond sombre et inversement.",
                "Son atelier d'Anvers diffuse son art dans toute l'Europe."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "**La Mort de Didon** (1635) : épisode de l'*Énéide* de Virgile ; Didon, reine de Carthage, met fin à ses jours après le départ d'Énée.",
                "Sujet très traité par les peintres d'histoire (Coypel) ; Turner, lui, préfère peindre Carthage en construction."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010063027",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Thomas Gainsborough** et **Reynolds** sont de grands admirateurs de **Titien** et de **Van Dyck**, dont ils reprennent le style.",
                "Van Dyck, peintre de Charles Ier, influence le **portrait aristocratique anglais** jusqu'au XIXe siècle ; Rigaud en France reprend les mêmes codes (colonnade, jeu de jambes, coude vers le spectateur).",
                "Datation (vers 1746) à prendre avec prudence."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Dans le même esprit que *M. et Mme William Hallet* : figures en pied, surprises **en mouvement**, en promenade dans la campagne.",
                "Partie fermée par les arbres, lignes verticales, et partie **ouverte sur une perspective**.",
                "**Touches épaisses**, comme chez Titien et Van Dyck."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait de personnages élégants dans un parc : sous prétexte de portrait, une scène de **conversation** en plein air."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "musee_id": "louvre",
    "date_creation": "2026-11-12",
    "id": "denon_1590-1795_peinture-espagnole",
    "illustration": "cl010059547",
    "titre": "[Louvre] [Aile Denon] [1590-1795] Peinture espagnole : Ribera, Zurbarán, Murillo, Greco et Goya",
    "cours_source": "Histoire générale de l'art 3 (XVIIe siècle), séance 10 « Ribera, Zurbarán, Murillo »",
    "fil_conducteur": "Le siècle d'or espagnol en salle 718 : le caravagisme de Ribera à Naples, la sobriété de Zurbarán, la douceur de Murillo et le Greco, puis le portrait de Goya.",
    "duree_estimee": "30-45 min",
    "etapes": [
      {
        "oeuvre_id": "cl010059547",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ribera (1591-1656), né près de Valence, s'installe à **Naples**, enclave espagnole : il y retrouve l'influence du **caravagisme**, découvert à Rome.",
                "Naples (vice-royaume espagnol) est une ville très riche et très pieuse, mais aussi très pauvre : on parle de « **peur et merveilles** » (famine 1624, Vésuve 1631, famine et révolte de Masaniello 1647, peste 1656).",
                "Commande d'un **marchand flamand** : la peinture flamande aime mendiants et gueux (Brueghel). C'est un **genre bas**, présent à Naples comme en Espagne, proche de la tradition **picaresque** (les picaros, antihéros opposés aux hidalgos).",
                "Le même thème se retrouve chez Murillo."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Héritage de **Caravage** : **cadrage très resserré** sur la figure, forte plasticité des formes par de **violents contrastes d'ombre et de lumière** sur le visage et les mains, type populaire naturaliste.",
                "L'arrière-plan relève plutôt du **Titien** (cf. Charles Quint à Mühlberg) : lumières chaudes contrastant avec de puissants bleu-gris.",
                "Nouveauté : le garçon est vu **en pied**, avec une **ligne d'horizon très basse** et un ciel très présent, ce qui le **monumentalise**, comme un grand homme politique."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le garçon tient une feuille portant une inscription latine, « donnez-moi l'aumône pour l'amour de Dieu » : l'**autorisation de mendier**, obligatoire à Naples.",
                "Titre « Pied-Bot » donné dès l'entrée au Louvre (XIXe s.), mais le garçon n'a pas de pied-bot : un chirurgien orthopédiste y a reconnu plutôt une **hémiplégie** (manque d'oxygène à la naissance).",
                "Bras paralysé dans le prolongement de la jambe, partie du visage paralysée : d'où son **rictus**."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060879",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Murillo** (1617/1618-1682), sévillan, orphelin et **autodidacte** : pas de grand mécène, pas de voyage à Rome, pas de contact avec les collections du Titien.",
                "Vie marquée par le malheur : il perd 6 de ses 11 enfants ; la peste de 1649 ravage la moitié de Séville ; soulèvement populaire en 1652 ; poids de l'Inquisition.",
                "Sa peinture est pourtant souriante, une forme de **résistance** : ce tableau est l'une des rares images tristes de sa série sur les **enfants des rues** de Séville (l'Enfant au chien et au panier sourit, lui).",
                "Ce genre plaisait aux marchands flamands installés à Séville, habitués au **genre bas** ; il s'inscrit aussi dans la tradition **picaresque** (Cervantes), comme le Pied-Bot de Ribera.",
                "Très célèbre au XIXe s. : en 1853, le tableau a suscité 80 demandes de copie au Louvre (Manet, Cézanne)."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Espace très strict : **verticales** de l'angle de la pièce et de la fenêtre, coupées d'horizontales ; le rai de lumière dessine un **carré qui enferme l'enfant**.",
                "À ces droites s'opposent des **courbes en réseau** : cruche, panier, pommes, crevettes au sol, ligne serpentine du corps de l'enfant.",
                "Cette opposition souligne la fracture entre un lieu hostile et l'enfant abandonné dans un angle.",
                "Fort contraste d'ombre et de lumière : arrière-plan presque noir, tache de lumière de la fenêtre comme un **spot** sur la misère."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Enfant seul, en train de s'épouiller, dans une pose recroquevillée.",
                "Pieds sales, désarroi, abandon : le **réalisme** de la misère."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010063597",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Ribera** (1591-1656), né près de Valence, découvre l'art de **Caravage** à Rome, puis s'installe à **Naples** (1616), enclave espagnole où Caravage avait lui aussi séjourné.",
                "À Naples, il côtoie les suiveurs du maître (Battistello, Artemisia Gentileschi) et bénéficie du mécénat d'une ville riche, pieuse, dominée par le vice-roi, le clergé et l'aristocratie.",
                "Une œuvre des années 1628-1630 appartient à sa période pleinement **caravagesque** ; l'influence colorée du Titien n'intervient que vers 1635."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Traits caravagesques à chercher : **cadrage resserré**, fond neutre, **contrastes d'ombre et de lumière** dramatisant la scène, éclairage oblique donnant du volume.",
                "**Naturalisme** : types populaires, sans beauté idéalisée, même dans un sujet religieux ; chez Ribera, un réalisme parfois poussé à l'excès."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064947",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Zurbarán** (1598-1664), originaire du sud-ouest de l'Espagne, est d'abord marqué par la **sculpture sur bois** réaliste.",
                "Il travaille surtout pour les **ordres religieux** : contrat de 1626 avec les dominicains de San Pablo (21 tableaux sur saint Dominique), puis les mercédaires de Séville (1628-1629).",
                "Contre-Réforme espagnole : valoriser les **saints intercesseurs**, souvent espagnols, et inspirer la ferveur du fidèle.",
                "Saint Bonaventure est un franciscain ; le concile de Lyon date de 1274."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Manière de Zurbarán : **sobriété**, fond neutre, cadrage resserré, **lumière qui découpe la matière** et multiplie les plis des étoffes.",
                "Il préfère la **retenue** à l'horreur ou au macabre, et anime la composition par des jeux d'oppositions (têtes penchées, gestes contrastés).",
                "Dans ses scènes à plusieurs figures (Adoration des mages), il **étage les plans** et appuie la composition sur des verticales et des triangles pour garder une lecture claire."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060882",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Murillo** (1617/1618-1682), sévillan, malgré les épreuves de son temps (peste de 1649, misère, Inquisition), propose une peinture **souriante et douce** : mères aimantes, familles réconciliées.",
                "Le thème de la **famille** revient sans cesse chez lui, en contraste avec la dureté d'un Zurbarán ou des martyrs des sculptures en bois.",
                "La peinture religieuse espagnole est surveillée : le traité de Pacheco (1649), inspecteur des peintures pour l'Inquisition de Séville, fixe ce qu'on peut peindre (la Vierge à 15 ans et demi).",
                "L'**Immaculée Conception**, contestée par les protestants, est réaffirmée dans la peinture espagnole."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Comparer avec ses **Deux trinités** : Marie regarde son enfant avec amour, Joseph regarde le spectateur avec douceur, composition **centrée sur un triangle** que dynamise la colombe du Saint-Esprit, d'après une gravure des frères Wierix.",
                "À observer ici : les regards, la tendresse des gestes, la **lisibilité** de la composition."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064732",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le **Greco** (1541-1614), d'origine crétoise, travaille en Espagne, sous le règne de **Philippe II** (1556-1598), à l'époque où l'Espagne se veut championne du catholicisme.",
                "La peinture y est très orientée vers la religion et la **Contre-Réforme** : compositions lisibles et didactiques, sous le contrôle de l'Inquisition.",
                "Ses œuvres tardives, comme l'Ouverture du cinquième sceau (1608-1614), sont citées parmi les précédents de l'**expressionnisme**."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064317",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Goya** (1746-1828) est l'héritier de la grande peinture espagnole du Siècle d'or : **Murillo** a beaucoup influencé les peintres du XVIIIe siècle comme lui.",
                "Ses *Majas au balcon* sont un hommage à la *Jeune fille et sa duègne* de Murillo, que Manet reprendra à son tour dans *Le Balcon*.",
                "Il est aussi rattaché à l'univers **préromantique**.",
                "Autre repère : sa *Maja desnuda* (1795-1800, Prado) rappelle la *Vénus d'Urbino* du Titien, alors que la peinture espagnole évite presque toujours le nu."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "musee_id": "louvre",
    "date_creation": "2026-11-10",
    "duree_estimee": "1h-1h15",
    "id": "richelieu_1575-1664_peinture-francaise-fontainebleau-poussin",
    "illustration": "cl010062528",
    "titre": "[Louvre] [Aile Richelieu] [1575-1664] Peinture française du XVIIe : de Fontainebleau à Poussin",
    "cours_source": "Parcours personnel : peinture française, aile Richelieu (1/3)",
    "fil_conducteur": "De la seconde école de Fontainebleau à l'école française voulue par Louis XIII : Poussin et son atticisme, le paysage historique de Claude Lorrain, puis Vouet, Champaigne, Régnier, Vignon et Valentin de Boulogne.",
    "etapes": [
      {
        "oeuvre_id": "cl010062788",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ouverture du parcours : l'art français a longtemps été **éclipsé par l'art italien** jusqu'au XVIe siècle.",
                "À Fontainebleau, la salle de bal est décorée par le Primatice ; la **première école de Fontainebleau**, œuvre d'Italiens, influence les artistes français.",
                "La **seconde école de Fontainebleau**, dont relève Dubreuil, déploie le style **maniériste**.",
                "À la mort d'Henri IV (1610), **Marie de Médicis**, régente, veut un art plus moderne, novateur, en rupture avec cette seconde école : elle fait venir Pourbus et Rubens.",
                "**Louis XIII** (1617) pense autrement que sa mère : il refuse de recruter des étrangers et veut promouvoir une **école française** de peinture, avec Simon Vouet, Philippe de Champaigne et Nicolas Poussin.",
                "**Louis XIV** (vers 1650) achève cette ambition : peintres, sculpteurs, architectes, paysagistes, ébénistes, orfèvres et tapissiers imposent le **style versaillais** à l'Europe, qui le copie ; Le Sueur, La Hyre et Le Brun s'inscrivent dans cet élan.",
                "Ce premier tableau sert de point de départ : il montre ce dont les artistes français vont s'émanciper."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le **maniérisme** se reconnaît à trois traits : des compositions peu lisibles, des corps aux formes redéfinies par le peintre, des corps en position instable, mal commode, intenable dans la réalité.",
                "À observer : les poses des figures et la difficulté à lire la scène d'un seul regard ; gardez-les en tête pour les comparer à la rigueur de Poussin."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Angélique et Médor : couple tiré de la littérature chevaleresque, illustré par Toussaint Dubreuil."
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
                "Poussin (1594-1665), né en Normandie mais installé en Italie, pose la question de la **nationalité de l'artiste** ; il fait pourtant carrière grâce à des mécènes français.",
                "Il reçoit ses commandes avec peu de contraintes : il est l'un des rares peintres à ne pas se voir imposer un programme trop détaillé.",
                "Il inspirera l'**atticisme parisien**.",
                "Poussin applique sa rigueur à un sujet de chaos : comment composer de façon parfaitement ordonnée une scène de violence pure ?",
                "La première version, vers 1635 (New York), donne une impression de chaos, en **frise**, dominée par Romulus ; celle du Louvre, vers 1637-1638, est beaucoup plus structurée.",
                "Ces principes, triangles emboîtés et accordéon, seront repris par les peintres français, de l'atticisme parisien à Le Brun."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Poussin cherche à **organiser le chaos** par une structure extrêmement rigoureuse.",
                "L'architecture empêche le regard de se perdre dans le lointain : la scène est fermée, il faut regarder devant. Ses fortes **verticales**, à l'arrière-plan, structurent la composition.",
                "Les quatre enlèvements sont structurés en **accordéon** (ou W) : allers-retours entre premier et second plan, qui se font écho en duos homme/femme.",
                "Le groupe de l'arrière-plan avec le cheval est le même, vu de face à gauche et de dos à droite.",
                "Gamme restreinte aux trois **couleurs primaires** pour la stabilité ; le **bleu** domine."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Tiré de Tite-Live et de Plutarque : Romulus fait enlever les femmes des Sabins, peuple voisin, pour peupler Rome."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062443",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Poussin, installé à Rome, développe ici le **paysage historisé**, genre où le paysage porte la narration.",
                "Le tableau s'inscrit dans la période de maturité du peintre, où il unit récit antique, nature et réflexion morale."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le **paysage historisé** : chaque élément contribue à la narration.",
                "Premier repère, les **éléments rouges** attirent d'abord le regard vers un personnage ; on hésite entre Apollon et Orphée.",
                "Les femmes voisines sont fascinées, comme happées : c'est donc **Orphée**, car quand il chante, la nature s'arrête. Cette partie du tableau est celle du calme et de la volupté.",
                "Le **personnage debout** fait la rupture entre les deux parties.",
                "De l'autre côté, un personnage féminin est attiré par l'arrivée du mal : un **serpent** va mordre Eurydice. Cette partie représente la destruction, le travail de l'homme.",
                "À observer : le contraste entre la partie paisible et celle de l'inquiétude, séparées par la figure debout."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Orphée, poète dont le chant arrête la nature, perd Eurydice, mordue par un serpent : récit tiré des Métamorphoses d'Ovide."
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
                "Cette étape ouvre les **quatre saisons**, peintes en 1660-1664 pour le duc de Richelieu : véritable **testament artistique** de Poussin, qui y affirme l'importance du **paysage historique**.",
                "Le cycle entremêle quatre saisons, quatre moments du jour, quatre âges de la vie et quatre récits de l'Ancien Testament.",
                "Un dialogue s'y installe entre fertilité et stérilité, destruction et naissance : dans la lignée de la pensée **néo-stoïcienne** de Poussin.",
                "Le cycle va de la création à la destruction : le Printemps (Paradis terrestre), l'Été (Ruth et Booz), l'Automne (la grappe de la Terre promise), l'Hiver (le Déluge).",
                "Cette réflexion sur le paysage mène à Claude Lorrain, pour qui la lumière structure tout."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les quatre tableaux suivent une **composition identique** : végétation formant de fortes verticales, figures principales au centre, **triangles emboîtés** entre premier plan et arrière-plan.",
                "Les **couleurs primaires** garantissent l'équilibre et la stabilité.",
                "Poussin déjoue les attentes : ni neige ni feuilles mortes.",
                "Il reprend la **ligne serpentine** et les triangles du Dominiquin, élève des Carrache.",
                "À observer : habituellement, ses figures sont parfaitement cernées, comme des bas-reliefs peints. Ici, la touche est **tremblée**, avec des empâtements, non voulus : une maladie lui fait trembler la main à la fin de sa vie.",
                "Le **serpent**, le Mal, ouvre le cycle avec Adam et Ève dans Le Printemps et le ferme dans Le Déluge."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le Printemps ou **Le Paradis terrestre** : Adam et Ève dans le jardin d'Éden, avant la faute, avec l'apparition de Dieu.",
                "Ève montre le fruit défendu à Adam ; la scène a lieu le matin, tout est lumière divine avant le péché.",
                "Les trois autres saisons : L'Été ou Ruth et Booz, L'Automne ou La Grappe de raisin rapportée de la Terre promise, L'Hiver ou Le Déluge."
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
                "Poussin, qui vit à Rome, se représente en **1650** pour son ami et mécène Paul Fréart de Chantelou.",
                "Composition à forte teneur **métaphorique et allégorique** : c'est grâce à la constante amitié de Chantelou que Poussin peut vivre de sa peinture.",
                "C'est le dernier de ses rares autoportraits et le plus intéressant.",
                "Ce tableau de réflexion sur la peinture prépare les Quatre Saisons, où il défend sa vision du paysage."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le buste, tout en noir (**austérité**), s'inscrit dans un **triangle**.",
                "Les tableaux empilés derrière lui, le chambranle et les moulures de la porte forment un réseau de **horizontales et de verticales** : cette vue d'atelier n'a rien d'accidentel.",
                "Fond neutre, couleurs sales, pour mettre en valeur les trois **couleurs primaires** des tableaux."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Trois niveaux de lecture. Discours **explicite** : au premier plan, le revers d'une toile porte, en italien, une dédicace, l'effigie de Poussin faite à Rome en 1650.",
                "Discours **implicite**, allégorique : une jeune femme au diadème orné d'un œil, allégorie de la peinture, est étreinte par deux mains, celles du mécène Chantelou.",
                "Discours **symbolique**, par les objets : la main sur le carnet de croquis porte une bague au diamant en pointe, symbole de **constance**.",
                "Sens : la constance de l'amitié de Chantelou permet à Poussin de vivre de son métier de peintre."
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
                "Poussin s'éloigne de l'influence vénitienne (Écho et Narcisse) pour un style qui lui ressemble : extrêmement rigoureux, structuré, organisé.",
                "Tableau important d'un point de vue pédagogique : il marque cette rupture.",
                "Influence **néo-platonicienne** du milieu romain de Poussin : le sujet a longtemps été difficile à comprendre.",
                "Comparez avec la première version, vers 1629 (Chatsworth), où les bergers se précipitaient vers le cénotaphe ; la composition du Louvre est plus rigoureuse."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La végétation obstrue l'arrière-plan et concentre le regard sur le **premier plan**.",
                "Le cénotaphe, disposé en biais, dynamise la scène.",
                "Les bergers suivent une **symétrie inversée** : un assis et un debout au premier plan, et de même à l'arrière-plan.",
                "La femme crée un **élan vertical** par les plis de son vêtement et le tronc qui prolonge sa silhouette ; elle fait repoussoir et conduit le regard vers les doigts du berger qui désignent le texte.",
                "**Stabilité** apportée par la couleur : gamme restreinte aux trois couleurs primaires ensemble, avec un dernier reste vénitien dans le costume de l'homme de gauche."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Des bergers se penchent sur un tombeau dans un paysage élégiaque : « Et in Arcadia ego ».",
                "**Arcadie** : lieu primitif et idyllique, peuplé de bergers vivant en harmonie avec la nature.",
                "Lecture néo-platonicienne : « Moi aussi, je réside en Arcadie » ; ce n'est pas le mort, mais **la mort** qui parle. Où qu'on soit, on reste soumis aux lois de l'existence."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062516",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Poussin est encore jeune, installé à Rome ; l'**influence du Titien** et de la peinture vénitienne est nette.",
                "Point de départ du parcours : Poussin va chercher une rigueur de plus en plus affirmée, héritée des **Carrache** par son maître le Dominiquin ; il est aussi marqué par les peintres flamands venus à Paris à la demande de Marie de Médicis (Pourbus).",
                "À observer : la tunique de Narcisse, aux **aplats de couleur** superposés, signe de jeunesse et d'influence vénitienne."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Deux récits complexes sont résumés avec une parfaite lisibilité.",
                "Au premier plan, le corps de Narcisse dessine une **horizontale** ; l'arbre central, une **verticale**.",
                "Les **diagonales** viennent du Cupidon, avec flamme et flèche, et des branches.",
                "Aplats de couleur de la tunique : héritage du Titien, que Poussin cite dans d'autres toiles de cette période."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Deux récits des **Métamorphoses** d'Ovide, imbriqués l'un dans l'autre.",
                "À l'arrière-plan, **Écho**, nymphe qui parle si fort que Zeus l'utilise pour masquer ses ébats avec des mortelles. Héra, découvrant la ruse, la punit : elle ne pourra plus que répéter le dernier mot de son interlocuteur. Amoureuse de Narcisse, elle ne peut le lui avouer.",
                "Au premier plan, **Narcisse** : Némésis, déesse de la vengeance, entend les plaintes de ses prétendants et le punit de son insensibilité ; il tombe amoureux de son reflet, dépérit et meurt au bord de l'eau.",
                "Écho, à force de le contempler, devient rocher."
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
                "Poussin le peint (1648) pour son ami le banquier **Jean Pointel**, pour se distraire et reposer son esprit : il puise dans la Genèse.",
                "Ce n'est pas une commande très contrainte, à la différence de séries faites pour d'autres amis comme Chantelou.",
                "La **ligne serpentine** vient du Dominiquin et des Carrache ; autre étape vers Claude Lorrain, qui reprend la structure par la lumière."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Tableau **fermé sur les côtés** par des éléments architecturaux, à gauche et à droite, qui dirigent le regard vers le centre ; l'ouverture sur le **ciel bleu** aère la composition.",
                "Au centre, les protagonistes principaux.",
                "Les jeunes femmes sont disposées **en frise**, comme les bas-reliefs antiques ; ligne serpentine, pas d'isocéphalie : le regard évolue naturellement dans la composition, aidé des cruches, jamais au même niveau.",
                "À observer : la jeune femme à la cruche sur la tête, qui regarde le spectateur, cite Raphaël (L'Incendie du Borgo).",
                "La chorégraphie des bras renvoie au groupe antique des **Niobides**."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Abraham veut marier son fils Isaac à une jeune femme de son pays d'origine et envoie son serviteur **Éliézer** choisir l'épouse.",
                "Éliézer demande l'aide de Dieu : la première jeune femme qui lui proposera à boire au puits sera l'épouse d'Isaac.",
                "Poussin choisit le moment clé : Éliézer offre un anneau d'or à **Rébecca**, qui accepte en posant la main sur sa poitrine, entourée de jeunes femmes qui puisent l'eau."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010061018",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Claude Gellée, dit le **Lorrain**, autre peintre qui séjourne à Rome et se forme à la tradition du **paysage historique** ; il connaît Poussin mais va plus loin que lui.",
                "Il influencera William Turner.",
                "Pour lui, le sujet n'est pas important : à peine lisible sans le titre. L'essentiel est la **lumière** et la façon dont elle modèle le paysage."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les éléments d'architecture forment les **coulisses d'un théâtre** : verticales fortes conduisant vers le point de fuite.",
                "Le **point de fuite** est le soleil : on ne peut pas regarder le soleil de face sans être ébloui, et pourtant Claude y parvient.",
                "La lumière structure toute la composition : grandes lignes droites au centre et **obliques** des barques.",
                "À observer : le soleil de face sur l'eau, et comment les barques guident l'œil vers lui."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le Débarquement de Cléopâtre à Tarse : la reine arrive par la mer, mais l'épisode passe au second plan derrière la lumière."
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
                "Claude Gellée, dit le Lorrain, autre Français installé à Rome, connaît Poussin ; héritier des Carrache et du paysage **historique**, il va plus loin que lui.",
                "Pour Claude, le sujet n'est pas l'essentiel ; l'important est la **lumière**, qui module et structure le paysage.",
                "Il va ici plus loin que dans le tableau précédent : le soleil, plein face sur l'eau, est cette fois **caché** par un bateau, et la lumière contourne la coque.",
                "Le Port avec l'embarquement de la reine de Saba (1648, National Gallery) montrait déjà le soleil au centre.",
                "Ce travail inspirera Turner (Le Dernier Voyage du Téméraire).",
                "Comme Poussin avec la ligne serpentine et le triangle, Claude reprend la structure de l'académie des Carrache, mais c'est la lumière qui assure la construction.",
                "Ces deux héritiers des Carrache ne cesseront d'essaimer, de Reynolds, David et Ingres à Cézanne, Picasso et Turner."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Mêmes éléments que dans l'œuvre précédente : architecture en **coulisses de théâtre** et verticalité forte, qui conduisent le regard vers le point de fuite.",
                "La lumière structure et assure les lignes directrices : deux obliques arrivent au **point de fuite**.",
                "Complexité supplémentaire : l'**ombre** de la coque crée l'axe central menant à la perspective."
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
      },
      {
        "oeuvre_id": "cl010062002",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Simon Vouet** (1590-1649), prince de l'Académie de Saint-Luc à Rome en 1624, est rappelé par Louis XIII en 1627 pour fonder une **école française** de peinture, en rupture avec la seconde école de Fontainebleau.",
                "Il abandonne alors le caravagisme pour une **manière claire** : couleurs lumineuses, « acides » (pigments mêlés de beaucoup de blanc).",
                "Tableau commandé par **Richelieu**, vers 1640-1641 : Vouet est à la fois peintre du cardinal et du roi.",
                "Son grand atelier forme Le Brun, Le Sueur et La Hyre ; lui-même sera pourtant tenu à l'écart de l'Académie de 1648."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les figures s'inscrivent dans un **triangle** ; les anges, qui matérialisent la présence divine au-dessus de l'Enfant, forment un second triangle qui complique la composition.",
                "Des **repoussoirs** de trois quarts dos, de part et d'autre, ramènent le regard vers le centre.",
                "Palette très étendue ; l'architecture du fond stabilise, mais reste peu lisible : temple circulaire, arc de triomphe et autre bâtiment s'enchevêtrent et l'œil s'y perd.",
                "Ses élèves, dont Le Brun, lui reprochaient une anatomie et une perspective peu solides : il recomposait ses perspectives à partir d'éléments d'estampes, comme un puzzle."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Épisode de l'Évangile de Luc : Marie et Joseph présentent l'Enfant Jésus au Temple, où le vieillard Siméon le reçoit."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060522",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Philippe de Champaigne** (1602-1674), né à Bruxelles et formé comme paysagiste et portraitiste, s'installe à Paris en 1621 ; il tient tête à Vouet et devient le portraitiste préféré et officiel de **Richelieu**.",
                "Louis XIII voulait des artistes français pour une **école française** ; Richelieu, bras droit du roi, utilise la peinture comme symbole de pouvoir, ce qui prépare le **style versaillais**.",
                "Le cardinal avait une telle confiance dans le réalisme de Champaigne qu'un triple portrait fut peint pour que le sculpteur Mochi, puis Le Bernin, en tirent un buste.",
                "Ce portrait est daté vers 1637."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Un homme d'Église est d'ordinaire représenté **assis**, un homme de pouvoir temporel **debout** : en choisissant la pose debout, Richelieu montre qu'il est d'abord un homme d'État.",
                "Dans la version du Louvre du portrait debout, Champaigne **épure** : plus de paysage, un simple rideau en fond, cadrage resserré, moins de plis, chapeau tenu plus naturellement.",
                "Le geste de la main qui soulève la chape signale le pouvoir ; dans la version plus ancienne, les nombreux plis cassés créaient du mouvement."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait officiel du cardinal-ministre, fondateur de l'Académie française et grand protecteur des artistes."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010066263",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Nicolas Régnier** (vers 1588-1667), d'origine flamande, est l'un des **caravagesques** français de Rome, avec Valentin de Boulogne, Vouet, Vignon et Tournier.",
                "Les caravagesques reprennent les règles du Caravage, popularisées par Manfredi : fond neutre, cadrage resserré à mi-corps, lumière venue de biais, costumes de fantaisie.",
                "Ils aiment aussi se **réapproprier** des compositions : la diseuse de bonne aventure vient du Caravage, où elle dérobe un anneau au jeune homme."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Fond sombre, cadrage resserré, lumière dirigée sur les visages."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Régnier reprend l'idée du **voleur volé** de Manfredi : on occupe le jeune aristocrate pendant qu'on lui fait les poches.",
                "Le voleur, qui vole la voleuse, regarde le spectateur droit dans les yeux, comme pour le mettre au défi de le dénoncer."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010066185",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Claude Vignon** (1593-1670) commence sa carrière en Italie, puis revient en France ; son style se détache alors du **caravagisme**.",
                "Ce Jeune Chanteur est typique de son caravagisme : cadrage à mi-corps, fond neutre, lumière de biais, costume de fantaisie (chapeau à plumes, fraise, manche rayée).",
                "Le thème du **concert** est très courant chez les caravagesques ; Vignon le décline avec une touche épaisse d'aplats superposés, sans dessin sous-jacent, qui crée le mouvement des plis du vêtement."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un jeune garçon chante, mais il est seul : la figure isolée dans un cadrage resserré dégage une impression de **mélancolie**."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010061288",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Simon Vouet** (1590-1649) mène une carrière brillante à Rome, où il est élu prince de l'Académie de Saint-Luc (1624), puis revient à Paris en 1627 à l'appel de Louis XIII et change de manière.",
                "À Rome, ses portraits relèvent du **caravagisme** : fond neutre, cadrage resserré autour de la figure, lumière venue d'en haut à gauche et partant de biais (comme dans le portrait de Giovanni Doria).",
                "À Paris, il adopte une **manière claire**, aux couleurs lumineuses.",
                "Le titre (« dit Autoportrait ») signale une identification traditionnelle, à prendre avec prudence."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait de jeune homme, traditionnellement identifié comme autoportrait du peintre : à observer, la pose, le regard et l'affirmation du statut de peintre."
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
                "Avec Régnier, Vignon et Vouet, il complète le groupe de Français marqués par le Caravage, qui clôt cette partie du parcours.",
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
                "Comparez avec le Concert de Honthorst, où l'on communique et où l'on entend presque le bruit : le Louvre décrit une atmosphère de gravité et de mystère."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "musee_id": "louvre",
    "date_creation": "2026-11-10",
    "duree_estimee": "1h",
    "id": "sully_1640-1655_atticisme-la-tour-le-nain",
    "illustration": "cl010066276",
    "titre": "[Louvre] [Aile Sully] [1640-1655] Atticisme, La Tour et les Le Nain",
    "cours_source": "Parcours personnel : peinture française, côté Sully (2/3)",
    "fil_conducteur": "L'atticisme parisien de Le Sueur, La Hyre et Poussin (salle 911), puis les nocturnes de La Tour et les scènes paysannes des Le Nain (salle 912).",
    "etapes": [
      {
        "oeuvre_id": "cl010061650",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Eustache Le Sueur** (1616-1655) est l'un des peintres de l'**atticisme parisien** : terme forgé au XXe siècle, par référence à la pureté de la langue attique, pour désigner vers 1649-1650 un style épuré, nourri de Poussin, de Raphaël et de la palette de Vouet.",
                "Il est membre fondateur de l'Académie de 1648 ; cette toile (1649) est peinte pour la corporation des orfèvres de Paris."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Construction très stricte, inspirée de Raphaël (la Mort d'Ananias) : deux triangles de figures surmontent une **pyramide** dont la base est le jeune garçon agenouillé et les livres.",
                "Geste de désignation fort ; escalier et figures au premier plan pour **étager les plans**.",
                "Fond obturé par l'architecture (le temple de Diane), comme chez Poussin, ce qui stabilise la composition.",
                "Les couleurs vives viennent de Vouet : une tunique bleue aux reflets roses, irréaliste mais lumineuse."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Saint Paul prêche à Éphèse devant une foule et les païens renoncent à leurs livres de magie, qu'ils brûlent."
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
                "Ce panneau vient du **cabinet des Muses** de l’hôtel Lambert, sur l’île Saint-Louis, que Le Sueur décore entre 1652 et 1655 pour Nicolas Lambert.",
                "Le programme est profondément féminin, car le cabinet se trouvait dans l’appartement de l’épouse de Nicolas Lambert.",
                "C’est l’exemple le plus abouti et le plus révélateur de l’art de Le Sueur.",
                "La composition vient de Poussin ; la palette rappelle Vouet."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Un bosquet ferme un côté et ses troncs verticaux stabilisent le groupe ; une partie ouverte donne sur une perspective qui aère la scène.",
                "Montagnes et figures forment des triangles, mais un **ovale** tracé par les bras, de la tête de Clio à la ceinture de Thalie, puis au masque, à la flûte, et de nouveau à Clio, fait circuler l’œil.",
                "Le rose côtoie le bleu : c’est la « manière claire » de Vouet."
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
        "oeuvre_id": "cl010060647",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Panneau du **cabinet des Muses** de l'hôtel Lambert, que Le Sueur décore entre 1652 et 1655 pour Nicolas Lambert, héritier de son frère Jean-Baptiste.",
                "L'hôtel (île Saint-Louis, 1639-1644) est dû à Le Vau, avec Le Brun et Le Nôtre : une première collaboration à trois qui annonce Vaux-le-Vicomte, puis Versailles.",
                "Le programme est **féminin**, car le cabinet se trouve dans l'appartement de l'épouse de Nicolas Lambert ; au plafond, Phaéton demande à Apollon, dieu des neuf Muses, de conduire son char."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Marque de l'**atticisme** : grande retenue des visages, y compris dans l'expression de la tragédie, palette claire héritée de Vouet.",
                "Dans la série, des arbres verticaux ferment la composition d'un côté tandis que l'autre s'ouvre sur une perspective ; les figures s'inscrivent dans un triangle, assoupli par des courbes qui font circuler le regard (ces principes sont hérités de Poussin)."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Trois Muses réunies : Melpomène (tragédie), Érato (poésie amoureuse) et Polymnie (chant sacré, éloquence).",
                "Comme Clio, Euterpe et Thalie, elles sont filles de Zeus et de Mnémosyne et relèvent du cortège d'Apollon."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060622",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Autre panneau du **cabinet des Muses** de l'hôtel Lambert (1652-1655) : Calliope y figure seule, comme Uranie et Terpsichore, tandis que d'autres Muses sont réunies en groupes.",
                "Décor à programme **féminin** : le cabinet se trouve dans l'appartement de l'épouse de Nicolas Lambert, qui a commandé le décor à Le Sueur et à François Perier ; Le Brun décore la galerie d'Hercule (1650-1660).",
                "**Atticisme parisien** : retenue des visages, composition d'une grande clarté, palette lumineuse de Vouet, paysages hérités de Poussin."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Calliope, muse de la poésie épique et de l'éloquence, la première des neuf Muses, filles de Zeus et de Mnémosyne.",
                "Au plafond du cabinet, Phaéton demande à Apollon, dieu des Muses, de conduire son char."
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
                "Le vrai sujet est d’abord le **paysage**, un paysage de fantaisie plus européen que proche-oriental."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065541",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Attribué à **Lubin Baugin**, installé à Paris dès 1624, à Saint-Germain-des-Prés : lieu protégé où des artistes flamands pouvaient exercer, mais seulement en **natures mortes**, pour ne pas concurrencer les peintres français.",
                "Baugin s'inspire de leurs œuvres ; il devient académicien en 1651, puis est démis en 1655 faute d'avoir assuré ses cours.",
                "Sobriété héritée des natures mortes flamandes et néerlandaises (à rapprocher d'Osias Beert) : fruits ou mets sur fond quasi neutre, appui dépouillé."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toute la virtuosité repose sur le **module du cercle** : cercles de la table, de l'assiette, des gaufrettes roulées, du verre, que viennent rompre des détails (pied du verre, col évasé de la bouteille, assiette en équilibre instable).",
                "Surfaces variées : lisse de l'assiette, quadrillage des gaufrettes, boules du verre, osier de la bouteille.",
                "La table en parallélépipède et le fond neutre et noir donnent une épure des formes ; les trois couleurs primaires (rouge du vin, bleu de la table, jaune de l'osier) renforcent la sobriété."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Dessert de gaufrettes : gaufrettes, verre de vin et bouteille disposés avec rigueur, où chaque élément paraît à sa place."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062422",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Nicolas Poussin** (1594-1665), né en Normandie, fait toute sa carrière à Rome (1624-1665, hors deux ans en France, 1640-1642) grâce à des mécènes français ; il peint ce qui lui plaît, rare liberté à l'époque.",
                "Élève du Dominiquin et d'Annibal Carrache, d'abord marqué par la peinture vénitienne du XVIe siècle, il s'en émancipe vers un style **extrêmement rigoureux**, où tout est pensé, structuré, organisé.",
                "Absent de l'Académie de 1648 mais omniprésent : ses tableaux y sont sans cesse cités et commentés ; il est la référence de l'**atticisme parisien** (La Hyre, Le Sueur) et des « **poussinistes** », partisans de la ligne.",
                "Ses figures sont nettement cernées, presque des bas-reliefs peints ; il aime surprendre le spectateur."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "L'Assomption de la Vierge : la Vierge est élevée au ciel après sa mort."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065555",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Georges de La Tour** (1593-1652), né à Lunéville dans le duché de Lorraine, tombe dans l'oubli : guerre avec la France (1631), invasion par les troupes de Richelieu (1633), peste, incendie de Lunéville en 1638 où brûle son atelier.",
                "Ses tableaux ressurgissent sans nom d'auteur ; il est redécouvert en 1934 par l'exposition des « peintres de la réalité ». Quand une composition fonctionne, il la décline en plusieurs **versions**.",
                "Son caravagisme se lit dans le fond neutre, le cadrage resserré et la source lumineuse de biais.",
                "Comme dans le Saint Joseph charpentier, la foi est montrée avec une grande **économie de moyens**, à l'opposé de la peinture de la Contre-Réforme et de ses nuées d'anges : une lumière simple, une scène silencieuse."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Des bergers adorent l'Enfant Jésus nouveau-né, en présence de Marie et de Joseph ; la scène est dépouillée, recueillie, sans geste théâtral."
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
        "oeuvre_id": "cl010066276",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le thème des tricheurs aux cartes a été popularisé par le Caravage ; il compte parmi les preuves de l’**influence caravagesque** sur Georges de La Tour.",
                "Georges de La Tour décline volontiers un tableau qui fonctionne en plusieurs versions ; celle-ci, avec l’as de carreau, a pour pendant le Tricheur à l’as de trèfle du Kimbell Art Museum.",
                "La version du Kimbell est plus aboutie : les aiguillettes, rubans qui rattachent la manche, y sont nouées (dénouées au Louvre), et la dupe est plus isolée, séparée du groupe par un espace plus creusé.",
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
        "oeuvre_id": "cl010059485",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Les frères **Le Nain** (Antoine, Louis, Mathieu), nés entre 1600 et 1610, ne signent que de leur nom de famille ; ils ont dû peindre à quatre ou six mains : la distinction des mains reste difficile (attribution à vérifier).",
                "Ils sont membres fondateurs de l'Académie de 1648, ce qui contredit l'idée d'artistes dénonçant la misère paysanne : leurs tableaux sont destinés à de riches collectionneurs, et le « **genre bas** » répond à un choix économique.",
                "Dans leurs intérieurs de famille, comme la Famille de paysans dans un intérieur (vers 1642), jugée leur chef-d'œuvre et peut-être peinte à trois, les personnages ne font rien, se regardent peu entre eux, et certains fixent le spectateur."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Composition en deux parties : environ les trois quarts pour le groupe autour de la table, et sur le côté des enfants près du feu, de dos ou de profil perdu, qui se dérobent au regard.",
                "Étagement des plans et quasi-isocéphalie ; trois adultes et trois enfants autour de la table.",
                "Gamme restreinte de bruns et de beiges, avec le bleu d'une jupe et le rouge du verre de vin en contrepoids."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une famille réunie dans un intérieur : figures calmes, groupées.",
                "Des détails démentent l'image de la misère : un verre rempli de vin, trop coûteux et fragile pour un intérieur paysan, ou un chien de manchon, animal de luxe."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060618",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Tableau des frères **Le Nain**, pour une clientèle de collectionneurs ; leurs mains sont difficiles à distinguer et la main exacte reste à préciser.",
                "Ils se tournent vers le « **genre bas** » parce que l'atelier de Vouet draine les commandes d'histoire à Paris ; ce genre existe dans toute l'Europe (Bruegel, Carrache, Callot, Murillo)."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Entrée dans la composition par deux **obliques** : l'enfant et l'homme à gauche, puis l'homme de droite en repoussoir.",
                "L'enclume crée une distance avec les protagonistes, qui nous regardent pourtant dans les yeux, comme si l'on interrompait leur conversation.",
                "Gamme monochrome de bruns et de beiges avec un rouge assourdi ; de pâles touches de bleu à l'endroit du feu donnent une **lumière froide**, caractéristique des Le Nain.",
                "Touche épaisse, à peine suggérée à grands coups de pinceau pour le feu et la hotte, en contraste avec les visages bien définis."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un maréchal-ferrant dans sa forge, avec d'autres personnages ; une scène de métier traitée sans anecdote, dans un silence mystérieux."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010066434",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Tableau des frères **Le Nain** : la signature porte seulement le nom de famille, d'où l'incertitude sur la main (Louis est généralement avancé).",
                "Antoine et Louis meurent de la peste en 1648 ; Mathieu cesse de peindre jusqu'à sa mort en 1677.",
                "Leurs scènes paysannes, destinées à de riches collectionneurs, ne dénoncent pas la misère de la France ; elles relèvent d'un choix **économique** vers le « genre bas ».",
                "Retenue caractéristique : visages peu expressifs, personnages qui ne font rien et ne communiquent pas, silence presque immobile."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Des paysans et leur charrette sur un chemin de campagne ; la scène est calme et sans action marquée."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064707",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Œuvre atypique des frères **Le Nain**, hors de leur répertoire paysan : à leur arrivée à Paris, ils commencent par la **peinture d'histoire**, comme le montre cette Allégorie de la victoire.",
                "Mais l'atelier de Simon Vouet, omniprésent, draine les commandes ; ils changent alors de stratégie et se tournent vers le « **genre bas** ».",
                "Ils fondent l'Académie royale de 1648 ; l'attribution à l'un des trois frères (Mathieu étant le plus souvent cité) reste à vérifier."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une allégorie de la Victoire, personnification classique du triomphe, loin des scènes paysannes silencieuses qui font la réputation des Le Nain."
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
                "On peut le rapprocher de la Réunion de buveurs de Nicolas Tournier (Le Mans) et il évoque les **tabagies** flamandes et néerlandaises, comme Les Fumeurs de Brouwer.",
                "Mais les Le Nain restent « à part » du caravagisme.",
                "Les trois frères ne signent pas de prénom ; l’attribution des mains, Louis ou Antoine pour celle-ci, reste une énigme.",
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
                "Considéré comme le chef-d’œuvre des frères Le Nain, sans doute peint à trois, tant la composition est aboutie.",
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
      }
    ]
  },
  {
    "musee_id": "louvre",
    "date_creation": "2026-11-10",
    "duree_estimee": "45-60 min",
    "id": "sully_1650-1670_champaigne-le-brun",
    "illustration": "cl010062076",
    "titre": "[Louvre] [Aile Sully] [1650-1670] Champaigne et Le Brun",
    "cours_source": "Parcours personnel : peinture française, côté Sully (3/3)",
    "fil_conducteur": "Philippe de Champaigne (Cène, ex-voto, portraits, Christ mort) puis Charles Le Brun et le style de Louis XIV.",
    "etapes": [
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
                "Composition très rigoureuse : les apôtres, presque à la même hauteur (quasi-isocéphalie), forment une ligne horizontale qui assoit la composition.",
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
      },
      {
        "oeuvre_id": "cl010066957",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Philippe de Champaigne**, né à Bruxelles et installé à Paris, devient le portraitiste attitré de Port-Royal, mouvement **janséniste** dont l'austérité marque son art.",
                "Peint en 1662, « au soir de sa vie » : œuvre très personnelle, non une commande, ce qui est rare ; elle résume son goût pour le portrait et pour l'art sacré.",
                "Sa fille, sœur Catherine de Sainte-Suzanne, paralysée, est guérie miraculeusement le 7 janvier 1662, alors que Champaigne vient de perdre sa femme et son fils. L'ex-voto est un remerciement à Dieu, avec un long texte latin en fond."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Au lieu de montrer la guérison (la religieuse marchant dans l'église), il choisit l'instant de **basculement** : sœur Catherine est encore alitée, mais un rai de lumière divine tombe sur ses jambes et sur les mains en prière de la mère Angélique Arnauld.",
                "La présence divine n'est pas matérialisée par des anges, mais par ce simple rai lumineux.",
                "Deux triangles rectangles, l'un pour la mère Angélique, l'autre pour sœur Catherine, qui en forme l'hypoténuse.",
                "Seule une partie de la cellule est montrée (chaise et croix tronquées) : « montrer moins pour en faire plus »."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Sœur Catherine, malade, veillée par la mère supérieure de Port-Royal : un tableau de dévotion d'une grande sobriété."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064799",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Philippe de Champaigne** est un très grand portraitiste, aux portraits **intimistes** : il fait ressortir les mouvements de l'âme et l'intériorité plus que la psychologie.",
                "Les messieurs de **Port-Royal**, mouvement janséniste, refusaient d'être représentés, y voyant orgueil et vanité ; Champaigne, seul jugé capable de rendre la complexité de leur position à travers les traits du visage, devient leur portraitiste attitré.",
                "Son Portrait d'homme de 1650, conservé au Louvre (ancien intitulé « Robert Arnauld d'Andilly »), est signé et daté : il illustre cet art ; l'identité du modèle de cette œuvre-ci reste à vérifier."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Fond neutre, costume noir : un portrait très **austère**, dont Champaigne casse la sévérité par un parapet en trompe-l'œil, hérité des peintres flamands (Van der Weyden, Memling).",
                "Le mouvement naît de contradictions : le buste bascule d'un côté, la tête se tourne de l'autre ; les yeux regardent à gauche alors que la main désigne à droite ; les plis du vêtement forment des chevrons."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait d'un homme sans attributs spectaculaires, saisi avec une psychologie sobre."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064319",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Philippe de Champaigne** (1602-1674) réalise ce portrait en 1667. **Robert Arnauld d'Andilly** est un courtisan, conseiller du roi, et joue un rôle important dans le mouvement **janséniste** : sa sœur est mère supérieure de Port-Royal (la mère Angélique Arnauld, que Champaigne montre dans son Ex-voto de 1662).",
                "Les messieurs de Port-Royal ne voulaient pas être représentés, y voyant orgueil et vanité ; Champaigne devient leur portraitiste attitré, seul capable de restituer la complexité de leur position à travers leur visage.",
                "On disait de lui qu'il avait « la fougue du jeune lion » malgré son grand âge."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toute l'**austérité** du jansénisme : fond neutre, costume sombre, vue à mi-corps au cadrage resserré (plus modeste qu'un portrait en pied).",
                "Contradictions qui animent le portrait : le buste et la tête ne vont pas dans le même sens, et le bras contredit le regard.",
                "La main très serrée autour de son brevet royal souligne l'homme de pouvoir et fait sentir sa **vigueur** politique."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Portrait d'un conseiller du roi proche de Port-Royal, présenté avec sobriété."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064800",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Philippe de Champaigne** (1602-1674), formé à Bruxelles, peint des portraits d'une grande sobriété : fond neutre, costume noir, cadrage resserré, qui concentrent le regard sur le visage.",
                "Il est le portraitiste attitré des messieurs de **Port-Royal**, janséniste : pour eux, se faire portraiturer relevait de l'orgueil, et il fallait toute la diplomatie du peintre pour y parvenir.",
                "Son art rejoint l'ordre et la retenue de l'**atticisme parisien** ; l'identité des modèles et la date de ce double portrait sont à vérifier."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Deux figures réunies dans un même cadre, devant un fond neutre, avec des vêtements sombres.",
                "Dans ses portraits, le mouvement vient de petites contradictions (tête et buste, geste et regard) et de plis obliques en chevron."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Deux hommes en buste, saisis dans un moment de calme et de gravité."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060519",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Œuvre de **Philippe de Champaigne**, proche de Port-Royal, mouvement **janséniste** dont l'austérité marque sa dernière période.",
                "Son goût pour des compositions très sobres vient de sa culture d'origine **flamande** ; la présence divine y est suggérée plutôt que mise en scène : ni nuée d'anges ni effet théâtral.",
                "Principe de l'artiste : « montrer moins pour en faire plus » ; sa Vanité (vers 1645-1650) rappelle, avec crâne, sablier et tulipe, que la mort est déjà en nous."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le corps, allongé en frise sur le linceul blanc, structure le tableau en une horizontale forte ; le fond est sombre et nu.",
                "Rien n'est dû au hasard chez Champaigne : dans sa Petite Cène, plis du fond noir, nappe et carrelage forment un réseau de lignes orthogonales qui stabilise la composition."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le Christ mort est étendu sur son linceul, présenté dans un silence méditatif, sans larmes ni personnages secondaires."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060585",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Charles Le Brun** (1619-1690), élève de Vouet, chef de file des fondateurs de l'Académie en 1648, devient en 1663 chancelier à vie et premier peintre du roi, directeur des Gobelins et grand ordonnateur de Versailles.",
                "La Famille de Darius aux pieds d'Alexandre (1660) inaugure l'identification de Louis XIV, qui vient de prendre le pouvoir, au héros antique ; elle fait écho à l'Alexandre de Racine (1665). Suit un cycle de quatre toiles d'Alexandre vers 1665, aux dimensions démesurées.",
                "Le roi abandonnera ensuite Alexandre pour Apollon, puis le soleil.",
                "Ces toiles, trop grandes pour Versailles, seront converties en **tapisseries**."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Entrée d'Alexandre dans Babylone (4,5 m sur 7) : rigueur héritée de **Poussin**, avec étagement des plans et trois frises, dont celle d'Alexandre et des garçons sur l'éléphant.",
                "Vue sur les jardins suspendus à l'arrière-plan ; l'architecture crée des verticales qui stabilisent."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Alexandre entre en triomphateur à Babylone, accueilli par la foule, sur un char, dans un cortège grandiose.",
                "Peinture allégorique du roi à travers le héros antique, non un compte rendu réaliste (à la différence de Van der Meulen)."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060587",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Toile du cycle d'Alexandre peint vers 1665 par **Charles Le Brun** pour Louis XIV : le conquérant antique sert de miroir au roi, qui vient de prendre le pouvoir personnel.",
                "Plus de 12 m de large ; trop grandes pour Versailles, ces toiles seront converties en tapisseries aux **Gobelins**, dont Le Brun est directeur.",
                "Référence italienne : la Bataille d'Arbèles de Pierre de Cortone (vers 1640), qui oppose vainqueur et vaincu autour d'un triangle."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Tumulte et confusion de la narration, que Le Brun **ordonne** comme Poussin dans l'Enlèvement des Sabines : disposition en accordéon, obliques et triangles imbriqués qui avancent vers le premier plan puis s'éloignent.",
                "Ensemble dans la pénombre, avec trois points lumineux : Alexandre, Darius et l'homme effrayé qui s'enfuit, reliés en triangle.",
                "Dominante de bruns et de rouges, relevée par le jaune et le bleu d'Alexandre, de Darius et du fuyard ; forte **expressivité** des figures, thème des conférences de Le Brun."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "La bataille d'Arbèles (331 av. J.-C.), où Alexandre bat le roi perse Darius."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "musee_id": "louvre",
    "date_creation": "2026-11-10",
    "id": "richelieu_1606-1640_pourbus-hals-rubens-van-dyck",
    "illustration": "cl010060839",
    "titre": "[Louvre] [Aile Richelieu] [1606-1640] Pourbus, Hals, Rubens, Van Dyck et Jordaens",
    "cours_source": "Parcours personnel : l'école du Nord, aile Richelieu (1/2) ; Histoire générale de l'art 3 (XVIIe siècle), séances 12 et 13",
    "fil_conducteur": "Des Provinces-Unies aux Flandres : le portrait vivant de Frans Hals, puis Rubens, Van Dyck et Jordaens à Anvers, jusqu'à Marie de Médicis et Pourbus à la cour de France.",
    "duree_estimee": "1h",
    "etapes": [
      {
        "oeuvre_id": "cl010060266",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Frans Hals est un maître du portrait, de l'expressivité et de la spontanéité ; il innove dans le genre des **tronies**.",
                "Le **tronié** est une étude de visage, souvent d'un inconnu, qui sert d'exercice pour travailler l'expressivité ou la lumière.",
                "Il travaille la lumière, le mouvement et la composition asymétrique.",
                "L'influence des **caravagesques d'Utrecht** se lit dans le cadrage à mi-corps, le fond neutre, l'éclairage latéral, le vêtement à rayures et le thème du musicien.",
                "Mais Hals désaxe sa figure, ce qui lui donne une approche propre."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Regardez la touche très épaisse des cheveux, qui donne un effet de mouvement.",
                "Cette manière inspirera les impressionnistes et des peintres comme Fragonard."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "La Bohémienne est un portrait d'expression plus que d'identité, étude de visage où la figure est désaxée."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064339",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Frans Hals est un maître du portrait, de l'expressivité et de la spontanéité ; il innove dans le genre des **tronies**.",
                "Le **tronié** est une étude de visage, souvent d'un inconnu, qui sert d'exercice pour travailler l'expressivité ou la lumière.",
                "Il travaille la lumière, le mouvement et la composition asymétrique.",
                "L'influence des **caravagesques d'Utrecht** se lit dans le cadrage à mi-corps, le fond neutre, l'éclairage latéral, le vêtement à rayures et le thème du musicien.",
                "Mais Hals désaxe sa figure, ce qui lui donne une approche propre."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La figure est désaxée : le corps et la tête ne regardent pas dans la même direction, ce qui crée du mouvement.",
                "Regardez la touche très épaisse des cheveux, qui donne un effet de mouvement.",
                "Cette manière inspirera les impressionnistes et des peintres de son époque, comme Fragonard."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un musicien en buste est un thème typique des tronies : l'important est l'expression plutôt que la ressemblance."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010059143",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Jacob Jordaens** (1593-1678), purement flamand, n'est jamais allé en Italie ; élève comme Rubens d'Adam van Noort, qui est aussi son beau-père, il est assistant de Rubens.",
                "Il aime le **mouvement** de Rubens et l'exagère ; il en reprend le goût pour ne laisser aucun espace libre entre les figures.",
                "Dans Le Roi boit, thème de l'Épiphanie (6 janvier), célébrée en famille dans les Flandres : celui qui trouve la fève du gâteau devient roi, désigne les postes de sa cour (échanson, valet, médecin), et tous crient « le roi boit ». Jordaens a peint plusieurs variantes de ce sujet.",
                "Contexte vers 1640-1645 : Anvers, étranglée par le blocus de l'Escaut, perd la moitié de sa population ; la censure espagnole étouffe la culture flamande et le français remplace peu à peu le flamand."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Une fête bruyante, sous le regard du roi ivre ; figures très expressives, véritables « trognes », goût assumé pour la fête et le prosaïsme (la mère qui nettoie son bambin rappelle le manneken-pis, l'homme qui vomit évoque la Kermesse de Rubens)."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le roi est le portrait de son beau-père : l'**allégorie du mauvais gouvernement**, qui se fourvoie dans des dépenses inutiles et des mœurs dissolues.",
                "Jordaens s'y est représenté en bas à gauche, en médecin de petite taille : il joue ainsi le fou du roi.",
                "L'inscription en flamand : « Où le rire est libre, il fait bon être invité ». Sous couvert d'ivresse, c'est une provocation et un message **politique**, affirmant le droit à la culture flamande.",
                "Cherchez l'humour à la manière du manneken-pis, de la même période : un rire flamand volontiers grivois."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010063537",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "**Van Dyck** est assistant de Rubens à 19 ans, collaborateur et non élève. Il arrive à Gênes en 1621 ; grâce aux recommandations de Rubens, il accède à l'aristocratie génoise et se fait connaître par ses **portraits d'aristocrates**.",
                "Il reprend les codes du grand portrait génois élaborés par Rubens, notamment dans la marquise Brigida Spinola-Doria : une femme représentée **debout**, pose réservée aux hommes de pouvoir (comme Richelieu debout et non assis).",
                "À Gênes, la constitution de la république assure aux femmes une indépendance civique et financière : « un paradis pour les femmes »."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Arrière-plan en deux parties : d'un côté colonnes et architecture, qui donnent un élan vertical, monumentalisent la dame et lui donnent de la présence ; de l'autre, ouverture sur un paysage qui aère la composition.",
                "La chaise forme une diagonale qui recentre le regard ; des draperies assouplissent la colonnade.",
                "Gamme chromatique restreinte héritée de Rubens : rouge, bleu, jaune, couleurs primaires ; grands aplats de rouge, touches superposées dans le paysage et la broderie, comme chez Rubens et Titien."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le but est de représenter la dame comme une **femme de pouvoir**, supérieure socialement au spectateur.",
                "Astuce à repérer : le buste est disproportionné par rapport aux jambes et la jupe est artificiellement longue, pour donner un corps allongé et de la superbe."
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
                "Van Dyck, le plus jeune assistant de Rubens à dix-neuf ans, s'installe à Londres en 1632 : il ne parvient pas à faire carrière à Anvers, où l'atelier énorme de Rubens draine toutes les commandes.",
                "Il épouse une jeune aristocrate anglaise, entre dans ce milieu et multiplie les portraits d'aristocrates anglais (plus de quatre cents au total).",
                "Il devient le grand portraitiste de Charles Ier et crée un modèle de portrait qui se répandra : il influencera Rigaud pour Louis XIV, puis le portrait anglais jusqu'au XIXe siècle, de Gainsborough à Reynolds.",
                "Van Dyck cite **Titien**, que Charles Ier admirait comme lui : il s'était fait remarquer du roi par un pastiche d'un tableau du Titien appartenant au souverain.",
                "Le coude avancé, effet de trompe-l'œil qui étage les plans, vient du Portrait de Gerolamo Barbarigo ; la jambe levée du cheval, de l'Adoration des mages."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La composition est **bipartite** : une partie fermée à droite, où l'arbre remplace les colonnes comme chez Rubens, et une partie ouverte à gauche sur un paysage.",
                "Dans le lointain, un petit bateau rappelle la puissance maritime du Royaume-Uni.",
                "Seul le monarque se détache sur le fond de la perspective : valets et cheval ont le bosquet derrière eux, ce qui isole la figure du roi.",
                "Seul le roi nous regarde ; le cheval incline la tête comme en révérence, les valets détournent le regard."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "On attendait un souverain à cheval, dans une bataille ou dans un grand palais ; ici, il est en plein air et à pied.",
                "Van Dyck le peint entre le gentleman farmer, gentilhomme campagnard, et le monarque : de manière décontractée, avec une pose pleine de morgue aristocratique."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060850",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Rubens (1577-1640), flamand des Pays-Bas du Sud, séjourne en Italie : influencé par Titien, il adopte le style vénitien (superposition de touches colorées contre le dessin) ; d'où l'opposition entre Rubénistes et Poussinistes.",
                "Il quitte la vie politique et son grand atelier d'Anvers, et rentre chez lui, à la campagne.",
                "Ayant échoué à obtenir un gouvernement qui représente les Pays-Bas du Sud, il renoue avec l'**âme flamande** et exalte cette culture combattue par les Espagnols.",
                "C'est une huile sur bois, alors qu'on avait abandonné ce support parce que la matière bougeait trop ; il a pourtant fait l'âge d'or de la peinture flamande de la Renaissance."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Regardez la disposition en **deux triangles** : une diagonale du bas gauche vers le haut droit sépare les figures à gauche de la nature morte à droite.",
                "Leur ligne commune longe le paysage, avec un angle droit à gauche et un autre à droite.",
                "Cela dynamise la scène : les protagonistes dérivent de la gauche vers la droite et du bas vers l'horizon du fond à droite, où s'ouvre un paysage flamand."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un tableau sur les jouissances campagnardes, avec un humour un peu grivois hérité de Bruegel et combattu par les Espagnols.",
                "À repérer : le chien qui boit dans le baquet d'eau sale, un homme qui culbute une femme, des vieillards qui se disputent une chope de bière, un homme tombé d'ivresse, un autre qui vomit."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060847",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Hercule, au terme des douze travaux, doit se laver de ses péchés (le meurtre de ses enfants) et reste à la merci d'Omphale.",
                "**Rubens**, installé à Anvers, ouvre en 1620 un grand atelier, qui comptera plus de cent élèves et assistants : il conçoit entièrement la composition, la répartition des couleurs, des figures et des masses, et fournit un dessin que ses collaborateurs exécutent avant qu'il ne retouche.",
                "Ses **collaborateurs spécialisés** : Brueghel pour les fleurs, Snyders pour les animaux (les aigles), Van Dyck comme assistant principal, et Jordaens. Les historiens de l'art réattribuent aujourd'hui ces parts (« Rubens et Snyders »).",
                "Admirateur du Titien, il est le « cartographe de la couleur » : des couches colorées superposées plutôt qu'un dessin cerné, ce qui l'oppose aux poussinistes."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un mythe de soumission : un héros viril obéit aux caprices d'une femme, en guise d'expiation de son crime.",
                "Omphale tourne en dérision sa virilité : il est incapable de tisser la laine.",
                "Observez qu'Omphale est surélevée, ce qui exprime l'ascendance du féminin sur le héros."
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
                "Commande de Marie de Médicis après la mort d'Henri IV, pour le palais du Luxembourg : **vingt-quatre tableaux** retraçant les moments importants de sa vie.",
                "Elle a demandé à Rubens de tout faire lui-même, et il y a mis quatre ans.",
                "La commande est délicate : son fils Louis XIII fera un coup d'État pour récupérer le pouvoir.",
                "Ce panneau, de 3,94 m sur 7,27 m, est le cœur du cycle, son **épicentre** : il énonce la bonne gouvernance de la reine."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Rubens excelle dans la **liaison organique des formes** : aucun espace libre entre les figures.",
                "Le panneau se divise en deux triangles, dont le plus grand contient Marie ; toutes les lignes convergent vers elle.",
                "Seule la reine adopte une attitude de repli, mains sur la poitrine, tête baissée : signe d'acceptation."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Rubens accompagne toujours la reine de **figures tutélaires allégoriques**, jamais seule.",
                "À gauche, l'apothéose d'Henri IV : le roi rejoint les dieux, soulevé par Jupiter (aigle) et Saturne (faucille).",
                "En bas, le serpent percé de flèches est **Ravaillac**, l'assassin.",
                "Repérez Hercule à son manteau et à la peau de lion, et Hermès.",
                "À droite, Marie endeuillée, en noir : la France, aux fleurs de lys, lui donne le pouvoir en lui remettant l'orbe.",
                "On lui conseille d'accepter la régence ; Minerve est à ses côtés, la Providence lui remet un gouvernail, et une déesse tenant une palme veille à ce qu'elle soit juste.",
                "Autres panneaux à rappeler : la Naissance de Marie, tenue par la ville de Florence, avec le fleuve Arno en bas ; l'Arrivée de la reine à Marseille, célèbre pour les gouttes d'eau sur la peau des figures du bas ; le Couronnement, où la reine triomphante tient une Victoire dans la main droite."
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
                "Pourbus est appelé en France par Marie de Médicis, qui ne veut plus du style maniériste, jugé obsolète : elle fait donc appel à des artistes flamands, comme lui ou Rubens.",
                "Il arrive à Paris quand Marie devient régente, Louis XIII étant enfant, après l'assassinat d'Henri IV en 1610 : c'est le moment du portrait.",
                "Marie s'y représente en **femme de pouvoir**, apte à diriger la France au nom de son fils."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Tout construit un **écrin** dont la reine est la perle.",
                "À l'arrière-plan, niche, pilastres, colonnes, baldaquin, marbre et grille forment un réseau de lignes droites, verticales et horizontales.",
                "En rupture, le corps de la reine se définit par des **courbes et des ovales** : tête, fraise, couronne, bras, silhouette entière jusqu'à la traîne.",
                "Perles du collier, des bracelets et du pourpoint, manches à crevés, répètent ces rondeurs.",
                "L'arrière-plan est dominé par le rouge (tentures, draperie), avec du noir et du blanc ; il contraste avec la robe noire semée de fleurs de lys, qui met la reine en valeur."
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
                "Peintre flamand de la rigueur, Pourbus fascinera Nicolas Poussin par sa construction, à l'opposé du maniérisme.",
                "Œuvre peinte pour le maître d'hôtel de Saint-Gilles : le dernier repas du Christ."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Composition classique et très rigoureuse : **isocéphalie** stricte, toutes les têtes presque au même niveau.",
                "Les verticales : bords de la tenture noire et fil central, qui tient la tenture ; le pli passe au milieu du Christ, se confond avec le pli de son vêtement, sépare le pain du vin et mène à son gros orteil, divisant le tableau en deux parties égales.",
                "Les horizontales : tenture, table, plis de la nappe, bancs, carrelage, grille. Le tout forme une grille de lignes qui structure l'ensemble.",
                "Le noir et blanc de l'arrière-plan, très sobre, met en valeur les tenues des disciples : rouge, jaune, bleu gris.",
                "Seule note singulière, le violet du Christ l'identifie fortement.",
                "Chaque visage est individualisé comme un portrait, très expressif : au Nord, on parle de **troniés**, visages expressifs mais non grimaçants."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le jaune est la couleur de la traîtrise, celle de Judas, dont la bourse, prix de sa trahison, est visible au premier plan, dans son dos, pour le spectateur."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "denon_1784-1855_peintures-francaises",
    "musee_id": "louvre",
    "illustration": "cl010065872",
    "titre": "[Louvre] [Aile Denon] [1784-1855] Peintures françaises : de David au romantisme",
    "date_creation": "2026-11-10",
    "cours_source": "Parcours personnel : peintures françaises, aile Denon",
    "fil_conducteur": "Le renouvellement de la peinture d'histoire entre néoclassicisme et romantisme : Géricault, Delacroix, Gros, Prud'hon et Ingres, puis les grandes toiles de David.",
    "duree_estimee": "1h30",
    "etapes": [
      {
        "oeuvre_id": "cl010065982",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ary Scheffer (1795-1858) est un peintre d'histoire de la génération romantique ; l'œuvre ouvre ce parcours de peintures françaises.",
                "Chez les romantiques, **Dante**, Shakespeare et Byron remplacent Ossian, goût de la génération précédente : la littérature justifie l'entrée du **sublime** et du drame dans la peinture d'histoire.",
                "Delacroix, avec la *Barque de Dante* (1822), avait déjà élevé un thème littéraire aux dimensions du **grand genre** ; les poètes damnés y symbolisent les artistes touchés par le « mal du siècle ».",
                "Paolo et Francesca fait partie des sujets de la peinture dite **troubadour**, dans la lignée d'Ingres."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Les ombres de Francesca da Rimini et de Paolo, amants damnés du chant V de l'*Enfer*, apparaissent à Dante et à Virgile.",
                "Le tableau annonce les enjeux des œuvres suivantes : littérature, sentiment et drame au cœur de la peinture d'histoire."
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
                "Paradoxe : Delacroix, déjà installé comme artiste (« trop âgé » pour être un jeune insurgé), montre la Révolution « d'une autre manière » que ses prédécesseurs, par une allégorie intemporelle plutôt qu'un épisode daté et localisé.",
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
        "oeuvre_id": "cl010062510",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Pierre-Paul Prud'hon (1758-1823) peint ce *Christ en croix* en 1822, à la fin de sa carrière, sous la Restauration.",
                "Dans ce parcours, il introduit un peintre à part, à côté de David et des romantiques : un thème religieux en peinture d'histoire."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le Christ est représenté sur la croix, sujet de peinture d'histoire religieuse.",
                "Il se lit avec les deux autres Prud'hon du parcours, l'*Âme brisant les liens* et la *Justice et la Vengeance divine*."
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
                "Exposé au Salon de 1819 sous le titre de **Scène de naufrage**, pour pouvoir entrer au Salon : Géricault ne critique pas ouvertement la Restauration. Le tableau dénonce le système politique qui a rendu possible cette hécatombe, sans attaque antimonarchiste ou libérale : la peinture d'histoire fait un **constat**.",
                "En juillet 1816, la frégate royale la Méduse, en route pour coloniser le Sénégal, s'échoue au large du cap Blanc. Un vaste radeau est construit avec les mâts : 150 hommes s'y entassent pendant dix jours, 20 sont emportés par la mer, les autres s'entretuent, avec cannibalisme.",
                "Deux survivants racontent l'histoire : Louis XVIII ne peut la nier. Géricault s'en empare pour susciter l'émotion, sous l'esthétique du **sublime**, « l'horreur délicieuse ».",
                "Il se documente auprès des survivants et d'infirmiers de l'hôpital Beaujon, voisins de son atelier, qui lui fournissent cadavres et membres.",
                "En 1819, le tableau ne laisse pas indifférent : attrait ou répulsion. Présenté en Angleterre, il y est très bien reçu ; Géricault s'y intéresse aux vaincus et aux oubliés (paralysés, vieillards pauvres).",
                "La lithographie et la gravure assurent une diffusion bien plus large, essentielle au romantisme."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **491 x 716 cm** : une lecture inspirée de David, avec frise antique, lisibilité et composition en trois parties, mais organisée en **pyramide** vers le haut, pour une survie qui ne mène pas à la gloire.",
                "Géricault a vu en Italie, en 1816, les sculptures de Michel-Ange : corps contorsionnés, **beauté dans la violence**. Les cadavres au premier plan rappellent l'étude de l'antique et du nu académique.",
                "Regardez au fond, à l'horizon, l'**Argus** minuscule qui va sauver les naufragés : horreur, mais « délicieuse ».",
                "Les dessins préparatoires (*Mutinerie*, *Scène de cannibalisme*) sont beaucoup plus peuplés.",
                "Comparez avec Friedrich, au même moment : *La Mer de glace* (1823-1824) montre la ruine et les débris de bois, mais l'homme a disparu, puisque le spectateur est sur le radeau. Deux visions opposées, toutes deux de la peinture d'histoire."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le tableau montre la **lutte pour la survie**, de la mort au premier plan à l'espoir lointain.",
                "Regardez le personnage pensif au voile rouge : il incarne le doute et le désarroi, déjà vus chez Gros : que s'est-il passé, l'a-t-il tué ? Violence, passion.",
                "Un personnage pourrait être un portrait de Delacroix, ami de Géricault.",
                "Ses « fragments » s'intéressent à l'homme dans ses **accidents**, pas à une vertu ni à un concept idéal : il observe aussi l'Angleterre et les scènes de genre de David Wilkie."
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
                "Première œuvre de Géricault, exposée au Salon de 1812 avec une bonne critique. Il se forme en copiant au Louvre, mais ne s'entend pas du tout avec Vivant Denon, qui le met à la porte : le rebelle.",
                "Il tente de **réformer la peinture d'histoire** à la suite de David et de ses élèves, en s'intéressant au revers de la Grande Armée : il est le peintre de la **défaite**, des vaincus, des mourants. L'anti-héros est son favori.",
                "Il s'inspire d'Antoine-Jean Gros mais se tient aux antipodes de la propagande napoléonienne.",
                "Pour Henri Zerner, le chasseur « n'appartient à aucune catégorie de peinture » : subjectivité du portrait, anonymat, spontanéité de la scène de genre et **format imposant du portrait équestre**.",
                "En France règne la **hiérarchie des genres** ; Géricault la subvertit en brouillant les genres de l'académie. Les peintres romantiques ne se disent pas romantiques : ils veulent être classiques, maîtres parmi les maîtres, et attaquent tous les genres pour faire un tableau d'histoire."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Format monumental, près de 3,5 m de haut. Le romantisme, c'est le **mouvement** de la scène suggéré par la touche : pas de fini néoclassique, une touche rapide.",
                "Regardez le paysage sombre, dangereux, presque apocalyptique, avec le feu : on ne sait pas ce qui s'y passe.",
                "L'anatomie du cheval peut être critiquée, mais les proportions sont en fait très bien calibrées."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Géricault représente son ami Alexandre Dieudonné, chasseur de la Garde impériale, homme de rang à la carrière lente sous la Révolution et l'Empire : non l'idéal, mais face à ses **accidents**. Il est sur son cheval en plein combat : « tombera, tombera pas ».",
                "Ce n'est pas la victoire mais la chute du sol : un portrait équestre d'anonyme, élevé au rang d'héros, et surtout une lutte désespérée pour la survie.",
                "Regardez son regard perdu, tandis qu'il tient les brides : les **fragments** d'individu, de violence et de souffrance sont le vrai sujet. Le drame personnel remplace l'héroïsme traditionnel et met en avant le déclin de la bravoure."
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
                "Immense toile (plus de cinq mètres de haut), exposée au Salon de 1804. Commande de l'État pour **réhabiliter la campagne d'Égypte** dans l'opinion publique.",
                "Gros, élève de David dont il reprendra l'atelier, devient la tête de l'entreprise qui transforme la peinture monumentale en **propagande officielle**. Après la Révolution, Vivant Denon organise le Salon et impose le retour à la grande peinture d'histoire : Gros l'emporte, avec une scène d'histoire contemporaine sans référence antique, très bien reçue.",
                "La campagne : Bonaparte, en Syrie, combat l'Empire ottoman et prend Jaffa en 1799. C'est un échec : environ 2 000 morts turcs, les survivants se réfugient dans la citadelle, visible au fond sous un drapeau français.",
                "La peste frappe environ 1 500 soldats français sur 13 000 ; Bonaparte est accusé de les avoir sacrifiés. Des survivants en parlent aux Anglais, qui diffusent l'affaire. Bonaparte ne peut pas nier : il revient sur l'importance de la campagne d'Égypte et de la diffusion de l'empire en Orient, et s'approprie l'opinion.",
                "Gros se suicide en 1835, ne parvenant pas à s'accommoder de la nouvelle peinture d'histoire romantique."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "**Bonaparte au centre**, dans une frise antique ; son geste vient de l'*Apollon du Belvédère*, avec un effet christique, celui du Christ soignant les malades.",
                "**Orientalisme** : de la campagne d'Égypte (1799) à la colonisation de l'Algérie, tout est nouveau, lumière, costumes, civilisation. L'Orient entre comme sujet de la peinture d'histoire.",
                "Regardez les mourants et les cadavres : on est accueilli par la mort. À droite, un médecin mourant, un autre soigne un malade : un hôpital de fortune construit par l'armée française.",
                "Le personnage en proie au doute, à gauche, peut venir de l'iconographie d'Ugolin chez Dante, qui s'offre à ses enfants enfermés avec lui à Pise. Le sang n'est pas représenté, mais les corps n'en sont pas moins cruels. On retrouvera ce personnage du doute dans le *Radeau de la Méduse*."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Gros traite un épisode peu glorieux de l'Empire mais en fait un **grand tableau d'histoire** : le méchant n'est pas Bonaparte, qui n'y pouvait rien, c'est la **peste**.",
                "Ces hommes sont morts pour l'effort de guerre et pour la patrie. Le thème, repris par Géricault et Delacroix, servira à montrer les horreurs de la guerre.",
                "Propagande, effets du sublime, morts : tout vise à favoriser le sentiment."
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
                "Dernier grand tableau de bataille de l'Empire par Gros, exécuté en 1808. **Commande de l'État**, passée par Vivant Denon, à l'issue d'un concours : Gros l'emporte en montrant les désastres et les souffrances de la vie humaine, 9 000 morts français à Eylau, par environ -20 °C.",
                "La presse s'empare du sujet malgré la censure, comme pour les Pestiférés : le 64e bulletin de la Grande Armée (février 1807) parle d'un « spectacle horrible » que « le devoir rendait nécessaire ».",
                "Un sacrifice collectif à la gloire d'un homme exceptionnel : l'empereur, comme César et Alexandre avant lui. Le **sujet moderne** prend le pas sur l'histoire antique, valorise l'effort de guerre, dans un format monumental.",
                "Gros se suicide en 1835, ne s'accommodant pas de la peinture romantique."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **521 x 734 cm**. Napoléon est au centre, tel une statue équestre sur son cheval lumineux, dans un geste à la fois christique et absolutiste.",
                "Regardez le paysage de neige, très loin de l'Orient, les morts, les blessés, sans doute amputés ou en train de l'être.",
                "Au centre, un soldat implore et remercie le chef d'être parmi eux ; un autre, en danger, allongé, est peut-être piétiné. Murat figure parmi les généraux.",
                "À l'arrière-plan, l'armée française et la ville d'Eylau dans le chaos et les fumées : un paysage brossé, pourtant loin de la subjectivité romantique."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Napoléon vient sur le champ de bataille, mais « il n'y pouvait rien » : il est déjà trop tard, ces hommes sont morts pour la patrie et le devoir.",
                "Chez David, c'est l'**unité d'action** ; ici, c'est le **fragment romantique** : on représente l'individu dans ses souffrances plus que l'*exemplum virtutis*, la valeur morale. Cette vision nouvelle de la peinture d'histoire sera admirée par Géricault et Delacroix."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062901",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Paul Delaroche, vers 1848, revient sur un épisode de 1800, le passage du Grand-Saint-Bernard par Bonaparte : un thème qui prolonge la **geste napoléonienne** des tableaux de Gros, bien après la propagande de l'Empire.",
                "Delaroche est le peintre du **juste milieu**, nom donné au régime de Louis-Philippe : il mêle **drame et retenue** dans l'expression des émotions et devient le portraitiste du roi.",
                "Il **humanise la peinture d'histoire** : plutôt que l'Antiquité ou la grande rhétorique, il choisit des épisodes historiques à fort potentiel émotionnel (*Mort d'Élisabeth*, 1827 ; *Supplice de Jane Grey*, 1833), avec une scène très lisible et un réalisme assez inédit.",
                "Ces compositions, bien accueillies du public, séduisent aussi les institutions ; Delaroche forme de nombreux élèves, dont Gérôme."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Bonaparte franchit les Alpes : la traversée du col est un grand sujet d'histoire contemporaine.",
                "Dans ce parcours, il propose une autre image de Napoléon, après celles de Gros et en regard du *Sacre* de David."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010457022",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Pierre-Paul Prud'hon peint en 1821 cette allégorie, vers la fin de sa carrière : l'œuvre se rattache à une peinture plus sensible et plus rêveuse que celle de David.",
                "Dans le parcours, elle prend place avant les œuvres d'Ingres."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "L'âme, figure féminine, brise les liens qui l'attachent à la terre : **allégorie** du détachement du monde matériel.",
                "Un sujet moral et spirituel, loin des scènes d'histoire militaire des tableaux voisins."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064491",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Prud'hon a conçu cette toile à partir de 1804 ; elle s'inscrit dans les années de l'Empire.",
                "Elle appartient à la veine allégorique de l'artiste."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "La Justice et la Vengeance divine poursuivent le **Crime** : une allégorie morale en peinture d'histoire.",
                "Placé après le *Christ en croix* et l'*Âme*, il complète l'ensemble des trois Prud'hon du parcours."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010066293",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ingres expose ce tableau en 1819. Élève de David, « le plus classique » de ses élèves, il devient le champion de la **ligne** contre la couleur de Delacroix : cette opposition se rejoue depuis David.",
                "Le sujet vient de la littérature, du *Roland furieux* (*Orlando furioso*) de l'Arioste : un thème de chevalerie et de merveilleux, plus romantique que les sujets antiques de David.",
                "Ingres enseigne à l'École des beaux-arts de 1830 à 1851 et forme une grande partie des artistes de la première moitié du siècle. L'**ingrisme** repose sur l'imitation de la nature et du beau, la connaissance des maîtres du passé et la **soumission de la couleur au dessin** ; il deviendra tardivement synonyme d'**académisme**.",
                "Ses nus, comme la *Baigneuse Valpinçon*, servent de référence à ses disciples, tel Flandrin."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Roger, monté sur l'hippogriffe, délivre Angélique, enchaînée à un rocher et menacée par un monstre marin.",
                "Angélique est entièrement nue : corps **idéalisé**, teint clair, pose à la fois pudique et exposée. Exemple type du dessin et de l'idéal féminin d'Ingres, par la **ligne** précise et élégante."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065566",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "La *Grande Odalisque* date de 1814 ; Ingres la peint pour Caroline Murat, reine de Naples, sœur de Napoléon.",
                "Elle illustre le goût de l'**Orient** imaginé, dans l'atelier d'un peintre de formation davidienne : l'orientalisme n'est pas réservé aux romantiques. Depuis la campagne d'Égypte jusqu'à la colonisation de l'Algérie, l'Orient s'impose comme nouveau sujet.",
                "Au Salon de 1819, ses proportions allongées sont critiquées.",
                "En 1855, l'Exposition universelle présente Ingres (dont l'*Odalisque*) face à Courbet, qui expose à part : deux générations, deux mondes qui s'affrontent.",
                "Les baigneuses d'Ingres, depuis la *Vénus*, et les odalisques de Delacroix forment deux versions du thème, avant que Courbet l'attaque de front."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une femme nue, de dos, allongée sur un divan, tourne la tête vers le spectateur.",
                "Le dos allongé et les contours précis et lisses reflètent le primat de la **ligne** défendu par Ingres, à l'opposé de la couleur de Delacroix : combat qui vient de David et traverse le romantisme."
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
                "Le Salon de 1827 oppose les deux écoles, ou plutôt la critique les fait s'affronter : une quarantaine d'individus d'Ingres face au Sardanapale de Delacroix.",
                "Hugo, dans la préface de *Cromwell*, distingue trois âges de la poésie : l'ode, l'épopée, le drame ; en 1827, on étudie le drame."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 386 x 512 cm. Le dessin est présent, avec l'importance de la forme : on dit que chez Delacroix il y a du dessin et chez Ingres de la couleur.",
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
        "oeuvre_id": "cl010064830",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Toile peinte entre 1800 et 1825, présentée aux Salons de 1806 et de 1814.",
                "Girodet, élève de David comme Gros, illustre à lui seul la **porosité des frontières stylistiques** du début du XIXe siècle : héritage néoclassique et sensibilité romantique naissante se mêlent. Les définitions des styles sont complexes.",
                "Cette hésitation, cet entre-deux, montre le romantisme se dégageant, encore retenu, du modèle néoclassique dominant."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toile de plus de quatre mètres de haut, sous un ciel d'orage zébré d'éclairs, dans un paysage rocheux balayé par la crue.",
                "Une véritable œuvre romantique : personnages dans des teintes sombres, couleurs **juxtaposées** plutôt que fondues, mouvement général porteur d'une tension dramatique.",
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
        "oeuvre_id": "cl010063624",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Jacques-Louis David (1748-1825) est mal parti : ambitieux et doué, il échoue quatre fois au concours de l'Académie royale pour le prix de Rome, et tente de se tuer.",
                "Il l'obtient enfin en **1774**, avec *Érasistrate découvrant la cause de la maladie d'Antiochus*.",
                "L'*Autoportrait* date de 1794 ; il ouvre la section consacrée à David, après les œuvres de ses élèves, Gros, Girodet et Ingres."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "David se représente lui-même, en pleine période révolutionnaire.",
                "Un portrait peint en 1794, après les grands tableaux de la Révolution."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065425",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "David peint *Léonidas aux Thermopyles* sur de longues années ; l'œuvre est achevée en 1814, à la fin de l'Empire.",
                "Elle appartient à la suite des grands sujets antiques de David, après les *Sabines* (1799) : l'héroïsme et le sacrifice pour la patrie, des valeurs qui parlent aux contemporains de la Révolution et de l'Empire.",
                "David reste fidèle au **beau idéal** de Winckelmann : **noble simplicité et calme grandeur**, passions contenues. Sa carrière traverse cinq régimes politiques sans rupture de style."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "David compose volontiers en **frise** de type antique, lisible, qui donne une **unité d'action**.",
                "Comme dans les *Sabines*, David vise un « grec pur » : guerriers nus, aux formes lisses comme des marbres, plutôt que musculeux. La critique juge cette nudité incohérente sur un champ de bataille ; pour lui, elle dit l'héroïsme."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Léonidas, roi de Sparte, et ses guerriers se préparent à défendre le défilé des Thermopyles contre les Perses.",
                "Un épisode d'**exemplum virtutis** : la valeur morale du sacrifice, au cœur de la peinture d'histoire de David."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010065720",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le *Sacre de Napoléon*, exposé au Salon de 1808, représente la cérémonie de 1804 à Notre-Dame.",
                "C'est la grande commande impériale de David, premier peintre de l'Empereur : un tableau de **propagande**, d'histoire contemporaine, de très grandes dimensions. Pour la propagande napoléonienne, l'essentiel est de **toucher l'opinion publique**.",
                "Dominique Vivant Denon, directeur du musée central, impose alors le retour à la grande peinture d'histoire, par concours ; les élèves de David (Gros) produisent des sujets d'histoire contemporaine qui remplacent l'histoire antique.",
                "Le sacre du 2 décembre 1804 marque aussi le **style Empire** : l'empereur affiche apparat et grandeur dans les résidences impériales et les arts décoratifs.",
                "Le tableau reste une référence : par la taille, Courbet l'a revendiquée pour l'*Enterrement à Ornans* ; Gérôme l'a prise pour mesure de sa *Réception des ambassadeurs du Siam* sous Napoléon III (plus de 80 portraits)."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Napoléon couronne l'impératrice Joséphine, sous les yeux du pape et d'une assemblée de dignitaires.",
                "L'histoire contemporaine prend la place de l'histoire antique dans la grande peinture."
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
        "oeuvre_id": "cl010062239",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le *Serment des Horaces* date de **1784** (exposé au Salon de 1785) : c'est l'œuvre qui fonde le **néoclassicisme** de David, bien avant la Révolution. Au même Salon figure l'*Autoportrait avec deux élèves* d'Adélaïde Labille-Guiard.",
                "David applique l'idée d'un art fondé sur le **beau idéal** : **noble simplicité et calme grandeur**, théorisés par Winckelmann vers 1760 ; émotions et passions sont contenues.",
                "Dans le parcours, il remonte aux origines de la carrière de David, après son *Sacre* et ses *Sabines*."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Une scène lue comme une **frise** de type antique, sans effet de profondeur, avec une composition en trois parties : la lisibilité assure l'**unité d'action**.",
                "Le spectateur regarde la scène sans en être acteur, très loin de la subjectivité des peintres allemands."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Trois frères, les Horaces, jurent à leur père de défendre Rome, tandis que les femmes de la famille s'effondrent à droite.",
                "Un sujet d'**exemplum virtutis** : l'héroïsme et les valeurs positives, devoir envers la patrie contre les liens du sang, thème central de la peinture d'histoire de David."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010059773",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "*Marat assassiné* (1793) est un tableau d'histoire contemporaine : David y représente l'ami et le député assassiné par Charlotte Corday.",
                "Il s'agit d'une représentation **dramatique et idéalisée** : David glorifie le **martyr révolutionnaire**. Marat entre au Panthéon, puis en sort vite : le culte des grands hommes naît sous la Révolution.",
                "Le tableau a laissé des traces : Delacroix, dans la *Grèce sur les ruines de Missolonghi*, place un bras de cadavre qui est peut-être un clin d'œil à ce tableau ; en 1860, Baudry reprend la scène (même décor, mêmes meubles, autre angle) en hommage à David, mais s'intéresse à **Charlotte Corday** plutôt qu'au martyr.",
                "Œuvre de la période révolutionnaire, elle clôt le parcours."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Marat est mort dans sa baignoire, une lettre à la main, la plume encore à portée.",
                "Le tableau fait du mort un martyr de la cause révolutionnaire plutôt qu'un simple fait divers."
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
        "oeuvre_id": "cl010062438",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Poussin (1594-1665), né en Normandie mais installé en Italie, pose la question de la **nationalité de l'artiste** ; il fait pourtant carrière grâce à des mécènes français.",
                "Il reçoit ses commandes avec peu de contraintes : il est l'un des rares peintres à ne pas se voir imposer un programme trop détaillé.",
                "Il inspirera l'**atticisme parisien**.",
                "Poussin applique sa rigueur à un sujet de chaos : comment composer de façon parfaitement ordonnée une scène de violence pure ?",
                "La première version, vers 1635 (New York), donne une impression de chaos, en **frise**, dominée par Romulus ; celle du Louvre, vers 1637-1638, est beaucoup plus structurée.",
                "Ces principes, triangles emboîtés et accordéon, seront repris par les peintres français, de l'atticisme parisien à Le Brun."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Poussin cherche à **organiser le chaos** par une structure extrêmement rigoureuse.",
                "L'architecture empêche le regard de se perdre dans le lointain : la scène est fermée, il faut regarder devant. Ses fortes **verticales**, à l'arrière-plan, structurent la composition.",
                "Les quatre enlèvements sont structurés en **accordéon** (ou W) : allers-retours entre premier et second plan, qui se font écho en duos homme/femme.",
                "Le groupe de l'arrière-plan avec le cheval est le même, vu de face à gauche et de dos à droite.",
                "Gamme restreinte aux trois **couleurs primaires** pour la stabilité ; le **bleu** domine."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Tiré de Tite-Live et de Plutarque : Romulus fait enlever les femmes des Sabins, peuple voisin, pour peupler Rome."
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
                "Cette étape ouvre les **quatre saisons**, peintes en 1660-1664 pour le duc de Richelieu : véritable **testament artistique** de Poussin, qui y affirme l'importance du **paysage historique**.",
                "Le cycle entremêle quatre saisons, quatre moments du jour, quatre âges de la vie et quatre récits de l'Ancien Testament.",
                "Un dialogue s'y installe entre fertilité et stérilité, destruction et naissance : dans la lignée de la pensée **néo-stoïcienne** de Poussin.",
                "Le cycle va de la création à la destruction : le Printemps (Paradis terrestre), l'Été (Ruth et Booz), l'Automne (la grappe de la Terre promise), l'Hiver (le Déluge).",
                "Cette réflexion sur le paysage mène à Claude Lorrain, pour qui la lumière structure tout."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Les quatre tableaux suivent une **composition identique** : végétation formant de fortes verticales, figures principales au centre, **triangles emboîtés** entre premier plan et arrière-plan.",
                "Les **couleurs primaires** garantissent l'équilibre et la stabilité.",
                "Poussin déjoue les attentes : ni neige ni feuilles mortes.",
                "Il reprend la **ligne serpentine** et les triangles du Dominiquin, élève des Carrache.",
                "À observer : habituellement, ses figures sont parfaitement cernées, comme des bas-reliefs peints. Ici, la touche est **tremblée**, avec des empâtements, non voulus : une maladie lui fait trembler la main à la fin de sa vie.",
                "Le **serpent**, le Mal, ouvre le cycle avec Adam et Ève dans Le Printemps et le ferme dans Le Déluge."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le Printemps ou **Le Paradis terrestre** : Adam et Ève dans le jardin d'Éden, avant la faute, avec l'apparition de Dieu.",
                "Ève montre le fruit défendu à Adam ; la scène a lieu le matin, tout est lumière divine avant le péché.",
                "Les trois autres saisons : L'Été ou Ruth et Booz, L'Automne ou La Grappe de raisin rapportée de la Terre promise, L'Hiver ou Le Déluge."
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
                "Poussin, qui vit à Rome, se représente en **1650** pour son ami et mécène Paul Fréart de Chantelou.",
                "Composition à forte teneur **métaphorique et allégorique** : c'est grâce à la constante amitié de Chantelou que Poussin peut vivre de sa peinture.",
                "C'est le dernier de ses rares autoportraits et le plus intéressant.",
                "Ce tableau de réflexion sur la peinture prépare les Quatre Saisons, où il défend sa vision du paysage."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le buste, tout en noir (**austérité**), s'inscrit dans un **triangle**.",
                "Les tableaux empilés derrière lui, le chambranle et les moulures de la porte forment un réseau de **horizontales et de verticales** : cette vue d'atelier n'a rien d'accidentel.",
                "Fond neutre, couleurs sales, pour mettre en valeur les trois **couleurs primaires** des tableaux."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Trois niveaux de lecture. Discours **explicite** : au premier plan, le revers d'une toile porte, en italien, une dédicace, l'effigie de Poussin faite à Rome en 1650.",
                "Discours **implicite**, allégorique : une jeune femme au diadème orné d'un œil, allégorie de la peinture, est étreinte par deux mains, celles du mécène Chantelou.",
                "Discours **symbolique**, par les objets : la main sur le carnet de croquis porte une bague au diamant en pointe, symbole de **constance**.",
                "Sens : la constance de l'amitié de Chantelou permet à Poussin de vivre de son métier de peintre."
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
                "Poussin s'éloigne de l'influence vénitienne (Écho et Narcisse) pour un style qui lui ressemble : extrêmement rigoureux, structuré, organisé.",
                "Tableau important d'un point de vue pédagogique : il marque cette rupture.",
                "Influence **néo-platonicienne** du milieu romain de Poussin : le sujet a longtemps été difficile à comprendre.",
                "Comparez avec la première version, vers 1629 (Chatsworth), où les bergers se précipitaient vers le cénotaphe ; la composition du Louvre est plus rigoureuse."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La végétation obstrue l'arrière-plan et concentre le regard sur le **premier plan**.",
                "Le cénotaphe, disposé en biais, dynamise la scène.",
                "Les bergers suivent une **symétrie inversée** : un assis et un debout au premier plan, et de même à l'arrière-plan.",
                "La femme crée un **élan vertical** par les plis de son vêtement et le tronc qui prolonge sa silhouette ; elle fait repoussoir et conduit le regard vers les doigts du berger qui désignent le texte.",
                "**Stabilité** apportée par la couleur : gamme restreinte aux trois couleurs primaires ensemble, avec un dernier reste vénitien dans le costume de l'homme de gauche."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Des bergers se penchent sur un tombeau dans un paysage élégiaque : « Et in Arcadia ego ».",
                "**Arcadie** : lieu primitif et idyllique, peuplé de bergers vivant en harmonie avec la nature.",
                "Lecture néo-platonicienne : « Moi aussi, je réside en Arcadie » ; ce n'est pas le mort, mais **la mort** qui parle. Où qu'on soit, on reste soumis aux lois de l'existence."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062516",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Poussin est encore jeune, installé à Rome ; l'**influence du Titien** et de la peinture vénitienne est nette.",
                "Point de départ du parcours : Poussin va chercher une rigueur de plus en plus affirmée, héritée des **Carrache** par son maître le Dominiquin ; il est aussi marqué par les peintres flamands venus à Paris à la demande de Marie de Médicis (Pourbus).",
                "À observer : la tunique de Narcisse, aux **aplats de couleur** superposés, signe de jeunesse et d'influence vénitienne."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Deux récits complexes sont résumés avec une parfaite lisibilité.",
                "Au premier plan, le corps de Narcisse dessine une **horizontale** ; l'arbre central, une **verticale**.",
                "Les **diagonales** viennent du Cupidon, avec flamme et flèche, et des branches.",
                "Aplats de couleur de la tunique : héritage du Titien, que Poussin cite dans d'autres toiles de cette période."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Deux récits des **Métamorphoses** d'Ovide, imbriqués l'un dans l'autre.",
                "À l'arrière-plan, **Écho**, nymphe qui parle si fort que Zeus l'utilise pour masquer ses ébats avec des mortelles. Héra, découvrant la ruse, la punit : elle ne pourra plus que répéter le dernier mot de son interlocuteur. Amoureuse de Narcisse, elle ne peut le lui avouer.",
                "Au premier plan, **Narcisse** : Némésis, déesse de la vengeance, entend les plaintes de ses prétendants et le punit de son insensibilité ; il tombe amoureux de son reflet, dépérit et meurt au bord de l'eau.",
                "Écho, à force de le contempler, devient rocher."
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
                "Poussin le peint (1648) pour son ami le banquier **Jean Pointel**, pour se distraire et reposer son esprit : il puise dans la Genèse.",
                "Ce n'est pas une commande très contrainte, à la différence de séries faites pour d'autres amis comme Chantelou.",
                "La **ligne serpentine** vient du Dominiquin et des Carrache ; autre étape vers Claude Lorrain, qui reprend la structure par la lumière."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Tableau **fermé sur les côtés** par des éléments architecturaux, à gauche et à droite, qui dirigent le regard vers le centre ; l'ouverture sur le **ciel bleu** aère la composition.",
                "Au centre, les protagonistes principaux.",
                "Les jeunes femmes sont disposées **en frise**, comme les bas-reliefs antiques ; ligne serpentine, pas d'isocéphalie : le regard évolue naturellement dans la composition, aidé des cruches, jamais au même niveau.",
                "À observer : la jeune femme à la cruche sur la tête, qui regarde le spectateur, cite Raphaël (L'Incendie du Borgo).",
                "La chorégraphie des bras renvoie au groupe antique des **Niobides**."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Abraham veut marier son fils Isaac à une jeune femme de son pays d'origine et envoie son serviteur **Éliézer** choisir l'épouse.",
                "Éliézer demande l'aide de Dieu : la première jeune femme qui lui proposera à boire au puits sera l'épouse d'Isaac.",
                "Poussin choisit le moment clé : Éliézer offre un anneau d'or à **Rébecca**, qui accepte en posant la main sur sa poitrine, entourée de jeunes femmes qui puisent l'eau."
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
                "Claude Gellée, dit le Lorrain, autre Français installé à Rome, connaît Poussin ; héritier des Carrache et du paysage **historique**, il va plus loin que lui.",
                "Pour Claude, le sujet n'est pas l'essentiel ; l'important est la **lumière**, qui module et structure le paysage.",
                "Il va ici plus loin que dans le tableau précédent : le soleil, plein face sur l'eau, est cette fois **caché** par un bateau, et la lumière contourne la coque.",
                "Le Port avec l'embarquement de la reine de Saba (1648, National Gallery) montrait déjà le soleil au centre.",
                "Ce travail inspirera Turner (Le Dernier Voyage du Téméraire).",
                "Comme Poussin avec la ligne serpentine et le triangle, Claude reprend la structure de l'académie des Carrache, mais c'est la lumière qui assure la construction.",
                "Ces deux héritiers des Carrache ne cesseront d'essaimer, de Reynolds, David et Ingres à Cézanne, Picasso et Turner."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Mêmes éléments que dans l'œuvre précédente : architecture en **coulisses de théâtre** et verticalité forte, qui conduisent le regard vers le point de fuite.",
                "La lumière structure et assure les lignes directrices : deux obliques arrivent au **point de fuite**.",
                "Complexité supplémentaire : l'**ombre** de la coque crée l'axe central menant à la perspective."
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
                "Avec Régnier, Vignon et Vouet, il complète le groupe de Français marqués par le Caravage, qui clôt cette partie du parcours.",
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
                "Comparez avec le Concert de Honthorst, où l'on communique et où l'on entend presque le bruit : le Louvre décrit une atmosphère de gravité et de mystère."
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
        "oeuvre_id": "cl010060624",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Ce panneau vient du **cabinet des Muses** de l’hôtel Lambert, sur l’île Saint-Louis, que Le Sueur décore entre 1652 et 1655 pour Nicolas Lambert.",
                "Le programme est profondément féminin, car le cabinet se trouvait dans l’appartement de l’épouse de Nicolas Lambert.",
                "C’est l’exemple le plus abouti et le plus révélateur de l’art de Le Sueur.",
                "La composition vient de Poussin ; la palette rappelle Vouet."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Un bosquet ferme un côté et ses troncs verticaux stabilisent le groupe ; une partie ouverte donne sur une perspective qui aère la scène.",
                "Montagnes et figures forment des triangles, mais un **ovale** tracé par les bras, de la tête de Clio à la ceinture de Thalie, puis au masque, à la flûte, et de nouveau à Clio, fait circuler l’œil.",
                "Le rose côtoie le bleu : c’est la « manière claire » de Vouet."
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
                "Le vrai sujet est d’abord le **paysage**, un paysage de fantaisie plus européen que proche-oriental."
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
        "oeuvre_id": "cl010066276",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le thème des tricheurs aux cartes a été popularisé par le Caravage ; il compte parmi les preuves de l’**influence caravagesque** sur Georges de La Tour.",
                "Georges de La Tour décline volontiers un tableau qui fonctionne en plusieurs versions ; celle-ci, avec l’as de carreau, a pour pendant le Tricheur à l’as de trèfle du Kimbell Art Museum.",
                "La version du Kimbell est plus aboutie : les aiguillettes, rubans qui rattachent la manche, y sont nouées (dénouées au Louvre), et la dupe est plus isolée, séparée du groupe par un espace plus creusé.",
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
        "oeuvre_id": "cl010065571",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Daté de 1643, ce tableau est caractéristique des débuts des frères Le Nain et montre l’influence des scènes caravagesques nocturnes, avec un clair-obscur marqué.",
                "On peut le rapprocher de la Réunion de buveurs de Nicolas Tournier (Le Mans) et il évoque les **tabagies** flamandes et néerlandaises, comme Les Fumeurs de Brouwer.",
                "Mais les Le Nain restent « à part » du caravagisme.",
                "Les trois frères ne signent pas de prénom ; l’attribution des mains, Louis ou Antoine pour celle-ci, reste une énigme.",
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
                "Considéré comme le chef-d’œuvre des frères Le Nain, sans doute peint à trois, tant la composition est aboutie.",
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
                "Composition très rigoureuse : les apôtres, presque à la même hauteur (quasi-isocéphalie), forment une ligne horizontale qui assoit la composition.",
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
        "oeuvre_id": "cl010062167",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Van Dyck, le plus jeune assistant de Rubens à dix-neuf ans, s'installe à Londres en 1632 : il ne parvient pas à faire carrière à Anvers, où l'atelier énorme de Rubens draine toutes les commandes.",
                "Il épouse une jeune aristocrate anglaise, entre dans ce milieu et multiplie les portraits d'aristocrates anglais (plus de quatre cents au total).",
                "Il devient le grand portraitiste de Charles Ier et crée un modèle de portrait qui se répandra : il influencera Rigaud pour Louis XIV, puis le portrait anglais jusqu'au XIXe siècle, de Gainsborough à Reynolds.",
                "Van Dyck cite **Titien**, que Charles Ier admirait comme lui : il s'était fait remarquer du roi par un pastiche d'un tableau du Titien appartenant au souverain.",
                "Le coude avancé, effet de trompe-l'œil qui étage les plans, vient du Portrait de Gerolamo Barbarigo ; la jambe levée du cheval, de l'Adoration des mages."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La composition est **bipartite** : une partie fermée à droite, où l'arbre remplace les colonnes comme chez Rubens, et une partie ouverte à gauche sur un paysage.",
                "Dans le lointain, un petit bateau rappelle la puissance maritime du Royaume-Uni.",
                "Seul le monarque se détache sur le fond de la perspective : valets et cheval ont le bosquet derrière eux, ce qui isole la figure du roi.",
                "Seul le roi nous regarde ; le cheval incline la tête comme en révérence, les valets détournent le regard."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "On attendait un souverain à cheval, dans une bataille ou dans un grand palais ; ici, il est en plein air et à pied.",
                "Van Dyck le peint entre le gentleman farmer, gentilhomme campagnard, et le monarque : de manière décontractée, avec une pose pleine de morgue aristocratique."
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
                "Commande de Marie de Médicis après la mort d'Henri IV, pour le palais du Luxembourg : **vingt-quatre tableaux** retraçant les moments importants de sa vie.",
                "Elle a demandé à Rubens de tout faire lui-même, et il y a mis quatre ans.",
                "La commande est délicate : son fils Louis XIII fera un coup d'État pour récupérer le pouvoir.",
                "Ce panneau, de 3,94 m sur 7,27 m, est le cœur du cycle, son **épicentre** : il énonce la bonne gouvernance de la reine."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Rubens excelle dans la **liaison organique des formes** : aucun espace libre entre les figures.",
                "Le panneau se divise en deux triangles, dont le plus grand contient Marie ; toutes les lignes convergent vers elle.",
                "Seule la reine adopte une attitude de repli, mains sur la poitrine, tête baissée : signe d'acceptation."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Rubens accompagne toujours la reine de **figures tutélaires allégoriques**, jamais seule.",
                "À gauche, l'apothéose d'Henri IV : le roi rejoint les dieux, soulevé par Jupiter (aigle) et Saturne (faucille).",
                "En bas, le serpent percé de flèches est **Ravaillac**, l'assassin.",
                "Repérez Hercule à son manteau et à la peau de lion, et Hermès.",
                "À droite, Marie endeuillée, en noir : la France, aux fleurs de lys, lui donne le pouvoir en lui remettant l'orbe.",
                "On lui conseille d'accepter la régence ; Minerve est à ses côtés, la Providence lui remet un gouvernail, et une déesse tenant une palme veille à ce qu'elle soit juste.",
                "Autres panneaux à rappeler : la Naissance de Marie, tenue par la ville de Florence, avec le fleuve Arno en bas ; l'Arrivée de la reine à Marseille, célèbre pour les gouttes d'eau sur la peau des figures du bas ; le Couronnement, où la reine triomphante tient une Victoire dans la main droite."
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
        "oeuvre_id": "cl010064946",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Pourbus est appelé en France par Marie de Médicis, qui ne veut plus du style maniériste, jugé obsolète : elle fait donc appel à des artistes flamands, comme lui ou Rubens.",
                "Il arrive à Paris quand Marie devient régente, Louis XIII étant enfant, après l'assassinat d'Henri IV en 1610 : c'est le moment du portrait.",
                "Marie s'y représente en **femme de pouvoir**, apte à diriger la France au nom de son fils."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Tout construit un **écrin** dont la reine est la perle.",
                "À l'arrière-plan, niche, pilastres, colonnes, baldaquin, marbre et grille forment un réseau de lignes droites, verticales et horizontales.",
                "En rupture, le corps de la reine se définit par des **courbes et des ovales** : tête, fraise, couronne, bras, silhouette entière jusqu'à la traîne.",
                "Perles du collier, des bracelets et du pourpoint, manches à crevés, répètent ces rondeurs.",
                "L'arrière-plan est dominé par le rouge (tentures, draperie), avec du noir et du blanc ; il contraste avec la robe noire semée de fleurs de lys, qui met la reine en valeur."
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
        "oeuvre_id": "cl010060875",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peintre flamand de la rigueur, Pourbus fascinera Nicolas Poussin par sa construction, à l'opposé du maniérisme.",
                "Œuvre peinte pour le maître d'hôtel de Saint-Gilles : le dernier repas du Christ."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Composition classique et très rigoureuse : **isocéphalie** stricte, toutes les têtes presque au même niveau.",
                "Les verticales : bords de la tenture noire et fil central, qui tient la tenture ; le pli passe au milieu du Christ, se confond avec le pli de son vêtement, sépare le pain du vin et mène à son gros orteil, divisant le tableau en deux parties égales.",
                "Les horizontales : tenture, table, plis de la nappe, bancs, carrelage, grille. Le tout forme une grille de lignes qui structure l'ensemble.",
                "Le noir et blanc de l'arrière-plan, très sobre, met en valeur les tenues des disciples : rouge, jaune, bleu gris.",
                "Seule note singulière, le violet du Christ l'identifie fortement.",
                "Chaque visage est individualisé comme un portrait, très expressif : au Nord, on parle de **troniés**, visages expressifs mais non grimaçants."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le jaune est la couleur de la traîtrise, celle de Judas, dont la bourse, prix de sa trahison, est visible au premier plan, dans son dos, pour le spectateur."
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "musee_id": "louvre",
    "date_creation": "2026-11-10",
    "id": "richelieu_1650-1720_vermeer-rembrandt-hollande",
    "illustration": "cl010064918",
    "titre": "[Louvre] [Aile Richelieu] [1650-1720] Vermeer, Rembrandt et la peinture hollandaise",
    "cours_source": "Parcours personnel : l'école du Nord, aile Richelieu (2/2) ; Histoire générale de l'art 3 (XVIIe siècle), séance 13",
    "fil_conducteur": "La peinture hollandaise du siècle d'or : scènes de genre et symbolique chez Vermeer, De Hooch et Mieris, paysage de Ruisdael et Post, autoportrait et Bethsabée de Rembrandt.",
    "duree_estimee": "1h",
    "etapes": [
      {
        "oeuvre_id": "cl010064918",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Vermeer (1632-1675) est un peintre de **genre** : aux Pays-Bas, il n'y a pas de hiérarchie des genres comme en France, où la peinture d'histoire domine.",
                "Le motif de la dentellière est récurrent dans la scène de genre néerlandaise : elle symbolise l'avant-dernière étape de la vie d'une femme, après les enfants et avant la mort.",
                "Vermeer était proche de Leeuwenhoek, l'inventeur du microscope : cette technologie optique (peut-être la chambre noire) a pu l'aider.",
                "Van Gogh admirait beaucoup ce tableau et en a parlé dans ses lettres."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Petit format et **cadrage extrêmement serré** : le spectateur plonge dans la scène.",
                "Regardez les éléments repoussoirs flous au premier plan (fils, métier, nécessaire de couture) : ils imitent le focus de l'œil humain et poussent le regard vers la figure.",
                "À l'arrière-plan, des « couleurs sales » font ressortir les couleurs primaires du premier plan, donc la figure.",
                "La lumière est très claire, à la différence de Rembrandt : école de Delft contre école d'Amsterdam/Hollande."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Exaltation de la **vertu** : une femme qui travaille, c'est un intérieur bien tenu, comme un pays clos bien gouverné.",
                "La concentration de la jeune femme est l'image de l'ordre domestique et moral."
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
        "oeuvre_id": "cl010063553",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peintre baroque du Siècle d'or, De Hooch (1629-1684) pratique la **scène de genre**.",
                "Le contexte calviniste interdit presque la représentation du Christ et des saints : pour montrer la voie d'une vie juste, ou ses dérives, on se tourne vers la scène de genre."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "L'**enchâssement des perspectives** joue avec la lumière à travers plusieurs pièces et accentue la profondeur, technique typique de la peinture néerlandaise.",
                "Regardez l'alignement de lignes verticales et horizontales : la chaise, les portes et le meuble de la dernière pièce."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une jeune femme de **« petite vertu »**, dont les indices se déchiffrent un à un :",
                "elle boit du vin, considéré comme « français », alors que les femmes respectables buvaient de la bière (l'eau n'était pas potable) ;",
                "elle est seule avec deux hommes, ce qui est « louche », d'autant que la femme plus âgée n'intervient pas ;",
                "sa jupe rouge est voyante, alors que les femmes respectables portaient des couleurs sobres ;",
                "le chien, symbole de fidélité conjugale, est endormi ;",
                "à l'arrière-plan, la statue de Mercure, messager de Jupiter, est associée à la séduction ;",
                "à droite, un tableau représente le Christ et la femme adultère."
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
                "Le paysage hollandais vise à montrer que le territoire néerlandais est un lieu où il fait bon vivre.",
                "Le **moulin** est un symbole nationaliste forgé par les peintres néerlandais : métaphore du travail de l'homme qui s'approprie la nature et tire la richesse de son territoire.",
                "Daté des années 1660 ou 1670, le tableau est acquis pour Louis XVI en 1784.",
                "Ces paysages sont souvent recomposés : image modifiée, mais belle, des Pays-Bas, fierté d'une nation."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le **ciel** occupe les deux tiers de la composition, ce qui donne une impression de quiétude et de perspective infinie.",
                "Cherchez le ciel immense, le moulin, puis l'effet de lumière qui a donné son titre au tableau.",
                "Les petites figures, dont des baigneurs, sont parfois attribuées à d'autres mains que celle de Ruisdael."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010064282",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Samuel van Hoogstraten est un **élève de Rembrandt** : il applique ici le goût hollandais pour les scènes d'intérieur à la manière d'un jeu de piste.",
                "Dans la peinture hollandaise, la propreté de la maison devient une **métaphore** : on nettoie son intérieur comme on nettoie son âme, et le balai est le symbole de la femme travailleuse qui tient bien sa maison.",
                "Une scène de genre montre d'ordinaire des personnages ; ici, il n'y a personne. On sait que le peintre avait d'abord placé un petit chien, qu'il a ensuite retiré."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La porte ouverte laisse voir un **intérieur néerlandais vide** du XVIIe siècle : l'**enchâssement des perspectives**, une porte qui s'ouvre sur un autre espace, est le même procédé que chez De Hooch.",
                "Un rai de lumière au centre s'explique par une porte d'entrée ouverte précipitamment.",
                "Regardez de près : le tableau se lit en détail, objet par objet, pour comprendre ce qui s'est passé."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Au premier plan, le **balai** est abandonné, appuyé contre le mur, alors qu'il symbolise d'ordinaire la femme travailleuse.",
                "Au milieu, des **pantoufles** d'intérieur sont laissées sans personne, non rangées.",
                "À l'arrière-plan, une **Bible** est retournée à la va-vite, sans marque-page, et la bougie est soufflée.",
                "Au fond, un tableau reprend une scène de Caspar Netscher : une femme que son père gronde parce qu'elle a passé la nuit dehors.",
                "Le peintre raconte donc qu'une femme a abandonné son travail et la lecture vertueuse de la Bible pour sortir à la hâte, peut-être rejoindre un homme."
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
      },
      {
        "oeuvre_id": "cl010062584",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Les Bulles de savon (1663) est une **vanité**, un memento mori : crânes, sabliers, bougies consumées, livres ou bulles de savon rappellent la précarité de l'existence et la futilité des richesses et du savoir.",
                "La bulle de savon renvoie à un adage d'Érasme : l'homme est aussi fragile qu'une bulle. Elle se trouvait déjà dans l'estampe Quis evadet ? de Goltzius (1594, « qui lui échappera ? ») et dans la Vanité de Jacob de Gheyn II (1603), au-dessus du crâne.",
                "Elle oppose l'**apparence** et l'être : la bulle n'a pas de réalité propre. Pour la pensée chrétienne, l'homme est une créature qui n'a pas son être en lui-même.",
                "Mieris s'écarte de l'iconographie funeste : l'enfant qui souffle des bulles évoque une **enfance** aussi fragile qu'une bulle, et qui passe vite.",
                "Ce motif fera florès : Chardin (1733-1734), puis Manet s'en inspireront."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Un jeune garçon fait des bulles de savon, avec un bouquet de fleurs : la scène est légère, mais le message reste celui de la brièveté de la vie.",
                "Observez la bulle fragile et la figure qui la souffle."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062008",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Au début du capitalisme, la Hollande possède beaucoup de colonies.",
                "Le paysage montre le **Brésil**, colonie alors très prospère.",
                "Aux Pays-Bas, le paysage cherche à montrer un territoire où il fait bon vivre ; ici, l'image de la prospérité s'étend jusqu'aux colonies.",
                "À rapprocher d'un tableau de Rembrandt représentant le fils d'un détenteur de colonie : la richesse coloniale nourrit aussi la commande.",
                "Regardez la prospérité du Brésil telle que la Hollande veut la voir."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010062020",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Rembrandt (1606-1679), peintre des Pays-Bas du Nord, explore les émotions humaines et maîtrise la lumière.",
                "Il produit énormément, mais connaîtra beaucoup de drames personnels.",
                "L'autoportrait est un moyen pratique et économique d'étudier à l'infini les expressions humaines.",
                "Le **fond neutre** renvoie au portrait de Castiglione de Raphaël : Rembrandt s'inspire de Raphaël et de Titien, que l'on appelle par leur prénom, d'où sa signature au prénom seul."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Regardez le traité du **clair-obscur**.",
                "La couleur est traitée par enduits dilués, sauf la chaîne en or, traitée par empâtements."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "La **chaîne en or** est un objet associé aux philosophes : elle pose la question de la place de l'artiste, alors membre de corporations et sans véritable statut ; on ne commence à lui en donner un qu'après la Renaissance.",
                "Rembrandt se représente d'abord en noble ; à 54 ans, il se montre en peintre, en train de peindre."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "cl010060453",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le **mythe** : le roi David voit Bethsabée se baigner et demande à avoir accès à elle.",
                "Elle vient de recevoir la lettre du roi David qui lui ordonne de le rejoindre.",
                "**Rembrandt** (1606-1669) n'est pas allé en Italie, mais il est très influencé par le **caravagisme néerlandais** (Honthorst) : d'où sa maîtrise des effets de lumière.",
                "Ce qui le fascine, ce sont les **émotions humaines**, toujours rendues avec une grande douceur ; il multiplie les autoportraits pour travailler les expressions.",
                "Il se réapproprie des sources variées (Renaissance, caravagesques, peintres italiens) pour en faire une œuvre très personnelle."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Bethsabée est d'ordinaire représentée en séductrice ; ici, pas du tout : elle apparaît comme une **victime** qui connaît son sort, ce qui renouvelle le sujet par l'émotion et l'intériorité.",
                "Regardez son attitude et la lettre qu'elle tient : tout le drame est dans ce qu'elle sait déjà."
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
        "oeuvre_id": "cl010064830",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Toile peinte entre 1800 et 1825, présentée aux Salons de 1806 et de 1814.",
                "Girodet, élève de David comme Gros, illustre à lui seul la **porosité des frontières stylistiques** du début du XIXe siècle : héritage néoclassique et sensibilité romantique naissante se mêlent. Les définitions des styles sont complexes.",
                "Cette hésitation, cet entre-deux, montre le romantisme se dégageant, encore retenu, du modèle néoclassique dominant."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toile de plus de quatre mètres de haut, sous un ciel d'orage zébré d'éclairs, dans un paysage rocheux balayé par la crue.",
                "Une véritable œuvre romantique : personnages dans des teintes sombres, couleurs **juxtaposées** plutôt que fondues, mouvement général porteur d'une tension dramatique.",
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
        "oeuvre_id": "cl010059199",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Exposé au Salon de 1819 sous le titre de **Scène de naufrage**, pour pouvoir entrer au Salon : Géricault ne critique pas ouvertement la Restauration. Le tableau dénonce le système politique qui a rendu possible cette hécatombe, sans attaque antimonarchiste ou libérale : la peinture d'histoire fait un **constat**.",
                "En juillet 1816, la frégate royale la Méduse, en route pour coloniser le Sénégal, s'échoue au large du cap Blanc. Un vaste radeau est construit avec les mâts : 150 hommes s'y entassent pendant dix jours, 20 sont emportés par la mer, les autres s'entretuent, avec cannibalisme.",
                "Deux survivants racontent l'histoire : Louis XVIII ne peut la nier. Géricault s'en empare pour susciter l'émotion, sous l'esthétique du **sublime**, « l'horreur délicieuse ».",
                "Il se documente auprès des survivants et d'infirmiers de l'hôpital Beaujon, voisins de son atelier, qui lui fournissent cadavres et membres.",
                "En 1819, le tableau ne laisse pas indifférent : attrait ou répulsion. Présenté en Angleterre, il y est très bien reçu ; Géricault s'y intéresse aux vaincus et aux oubliés (paralysés, vieillards pauvres).",
                "La lithographie et la gravure assurent une diffusion bien plus large, essentielle au romantisme."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **491 x 716 cm** : une lecture inspirée de David, avec frise antique, lisibilité et composition en trois parties, mais organisée en **pyramide** vers le haut, pour une survie qui ne mène pas à la gloire.",
                "Géricault a vu en Italie, en 1816, les sculptures de Michel-Ange : corps contorsionnés, **beauté dans la violence**. Les cadavres au premier plan rappellent l'étude de l'antique et du nu académique.",
                "Regardez au fond, à l'horizon, l'**Argus** minuscule qui va sauver les naufragés : horreur, mais « délicieuse ».",
                "Les dessins préparatoires (*Mutinerie*, *Scène de cannibalisme*) sont beaucoup plus peuplés.",
                "Comparez avec Friedrich, au même moment : *La Mer de glace* (1823-1824) montre la ruine et les débris de bois, mais l'homme a disparu, puisque le spectateur est sur le radeau. Deux visions opposées, toutes deux de la peinture d'histoire."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le tableau montre la **lutte pour la survie**, de la mort au premier plan à l'espoir lointain.",
                "Regardez le personnage pensif au voile rouge : il incarne le doute et le désarroi, déjà vus chez Gros : que s'est-il passé, l'a-t-il tué ? Violence, passion.",
                "Un personnage pourrait être un portrait de Delacroix, ami de Géricault.",
                "Ses « fragments » s'intéressent à l'homme dans ses **accidents**, pas à une vertu ni à un concept idéal : il observe aussi l'Angleterre et les scènes de genre de David Wilkie."
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
                "Première œuvre de Géricault, exposée au Salon de 1812 avec une bonne critique. Il se forme en copiant au Louvre, mais ne s'entend pas du tout avec Vivant Denon, qui le met à la porte : le rebelle.",
                "Il tente de **réformer la peinture d'histoire** à la suite de David et de ses élèves, en s'intéressant au revers de la Grande Armée : il est le peintre de la **défaite**, des vaincus, des mourants. L'anti-héros est son favori.",
                "Il s'inspire d'Antoine-Jean Gros mais se tient aux antipodes de la propagande napoléonienne.",
                "Pour Henri Zerner, le chasseur « n'appartient à aucune catégorie de peinture » : subjectivité du portrait, anonymat, spontanéité de la scène de genre et **format imposant du portrait équestre**.",
                "En France règne la **hiérarchie des genres** ; Géricault la subvertit en brouillant les genres de l'académie. Les peintres romantiques ne se disent pas romantiques : ils veulent être classiques, maîtres parmi les maîtres, et attaquent tous les genres pour faire un tableau d'histoire."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Format monumental, près de 3,5 m de haut. Le romantisme, c'est le **mouvement** de la scène suggéré par la touche : pas de fini néoclassique, une touche rapide.",
                "Regardez le paysage sombre, dangereux, presque apocalyptique, avec le feu : on ne sait pas ce qui s'y passe.",
                "L'anatomie du cheval peut être critiquée, mais les proportions sont en fait très bien calibrées."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Géricault représente son ami Alexandre Dieudonné, chasseur de la Garde impériale, homme de rang à la carrière lente sous la Révolution et l'Empire : non l'idéal, mais face à ses **accidents**. Il est sur son cheval en plein combat : « tombera, tombera pas ».",
                "Ce n'est pas la victoire mais la chute du sol : un portrait équestre d'anonyme, élevé au rang d'héros, et surtout une lutte désespérée pour la survie.",
                "Regardez son regard perdu, tandis qu'il tient les brides : les **fragments** d'individu, de violence et de souffrance sont le vrai sujet. Le drame personnel remplace l'héroïsme traditionnel et met en avant le déclin de la bravoure."
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
                "Immense toile (plus de cinq mètres de haut), exposée au Salon de 1804. Commande de l'État pour **réhabiliter la campagne d'Égypte** dans l'opinion publique.",
                "Gros, élève de David dont il reprendra l'atelier, devient la tête de l'entreprise qui transforme la peinture monumentale en **propagande officielle**. Après la Révolution, Vivant Denon organise le Salon et impose le retour à la grande peinture d'histoire : Gros l'emporte, avec une scène d'histoire contemporaine sans référence antique, très bien reçue.",
                "La campagne : Bonaparte, en Syrie, combat l'Empire ottoman et prend Jaffa en 1799. C'est un échec : environ 2 000 morts turcs, les survivants se réfugient dans la citadelle, visible au fond sous un drapeau français.",
                "La peste frappe environ 1 500 soldats français sur 13 000 ; Bonaparte est accusé de les avoir sacrifiés. Des survivants en parlent aux Anglais, qui diffusent l'affaire. Bonaparte ne peut pas nier : il revient sur l'importance de la campagne d'Égypte et de la diffusion de l'empire en Orient, et s'approprie l'opinion.",
                "Gros se suicide en 1835, ne parvenant pas à s'accommoder de la nouvelle peinture d'histoire romantique."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "**Bonaparte au centre**, dans une frise antique ; son geste vient de l'*Apollon du Belvédère*, avec un effet christique, celui du Christ soignant les malades.",
                "**Orientalisme** : de la campagne d'Égypte (1799) à la colonisation de l'Algérie, tout est nouveau, lumière, costumes, civilisation. L'Orient entre comme sujet de la peinture d'histoire.",
                "Regardez les mourants et les cadavres : on est accueilli par la mort. À droite, un médecin mourant, un autre soigne un malade : un hôpital de fortune construit par l'armée française.",
                "Le personnage en proie au doute, à gauche, peut venir de l'iconographie d'Ugolin chez Dante, qui s'offre à ses enfants enfermés avec lui à Pise. Le sang n'est pas représenté, mais les corps n'en sont pas moins cruels. On retrouvera ce personnage du doute dans le *Radeau de la Méduse*."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Gros traite un épisode peu glorieux de l'Empire mais en fait un **grand tableau d'histoire** : le méchant n'est pas Bonaparte, qui n'y pouvait rien, c'est la **peste**.",
                "Ces hommes sont morts pour l'effort de guerre et pour la patrie. Le thème, repris par Géricault et Delacroix, servira à montrer les horreurs de la guerre.",
                "Propagande, effets du sublime, morts : tout vise à favoriser le sentiment."
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
                "Dernier grand tableau de bataille de l'Empire par Gros, exécuté en 1808. **Commande de l'État**, passée par Vivant Denon, à l'issue d'un concours : Gros l'emporte en montrant les désastres et les souffrances de la vie humaine, 9 000 morts français à Eylau, par environ -20 °C.",
                "La presse s'empare du sujet malgré la censure, comme pour les Pestiférés : le 64e bulletin de la Grande Armée (février 1807) parle d'un « spectacle horrible » que « le devoir rendait nécessaire ».",
                "Un sacrifice collectif à la gloire d'un homme exceptionnel : l'empereur, comme César et Alexandre avant lui. Le **sujet moderne** prend le pas sur l'histoire antique, valorise l'effort de guerre, dans un format monumental.",
                "Gros se suicide en 1835, ne s'accommodant pas de la peinture romantique."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de **521 x 734 cm**. Napoléon est au centre, tel une statue équestre sur son cheval lumineux, dans un geste à la fois christique et absolutiste.",
                "Regardez le paysage de neige, très loin de l'Orient, les morts, les blessés, sans doute amputés ou en train de l'être.",
                "Au centre, un soldat implore et remercie le chef d'être parmi eux ; un autre, en danger, allongé, est peut-être piétiné. Murat figure parmi les généraux.",
                "À l'arrière-plan, l'armée française et la ville d'Eylau dans le chaos et les fumées : un paysage brossé, pourtant loin de la subjectivité romantique."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Napoléon vient sur le champ de bataille, mais « il n'y pouvait rien » : il est déjà trop tard, ces hommes sont morts pour la patrie et le devoir.",
                "Chez David, c'est l'**unité d'action** ; ici, c'est le **fragment romantique** : on représente l'individu dans ses souffrances plus que l'*exemplum virtutis*, la valeur morale. Cette vision nouvelle de la peinture d'histoire sera admirée par Géricault et Delacroix."
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
        "oeuvre_id": "cl010065872",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peinte à l'automne 1830 et exposée au Salon de 1831, elle commémore les **Trois Glorieuses** de juillet 1830.",
                "Paradoxe : Delacroix, déjà installé comme artiste (« trop âgé » pour être un jeune insurgé), montre la Révolution « d'une autre manière » que ses prédécesseurs, par une allégorie intemporelle plutôt qu'un épisode daté et localisé.",
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
                "Le Salon de 1827 oppose les deux écoles, ou plutôt la critique les fait s'affronter : une quarantaine d'individus d'Ingres face au Sardanapale de Delacroix.",
                "Hugo, dans la préface de *Cromwell*, distingue trois âges de la poésie : l'ode, l'épopée, le drame ; en 1827, on étudie le drame."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 386 x 512 cm. Le dessin est présent, avec l'importance de la forme : on dit que chez Delacroix il y a du dessin et chez Ingres de la couleur.",
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
                "Le réalisme apparaît dans une période marquée par l'opposition entre romantisme et classicisme : il ouvre une voie nouvelle en évoquant la **réalité sans idéalisation** et en abordant des thématiques politiques et sociales.",
                "Honoré Daumier, fervent républicain, commence comme caricaturiste au journal La Caricature ; connu pour ses **lithographies**, il dessine pour Le Charivari jusqu'à la fin de sa vie.",
                "Le 24 février 1848, la République est proclamée : il faut une image officielle, et un concours s'ouvre le 14 mars pour « la figure peinte de la République ».",
                "Plus de 700 candidats se présentent, dont Daumier et Jean-Léon Gérôme, deux styles différents à la même période ; Daumier est retenu parmi les 20 finalistes : sa carrière de peintre commence avec cette toile.",
                "Le jury (Ingres, Delacroix, Delaroche) classe Daumier 11e, mais il n'y a **pas de lauréat** : la répression de juin, et une Seconde République qui se veut fraternelle, l'expliquent."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "La figure est stable : elle tient fermement le **drapeau**, et la poitrine dénudée rappelle La Liberté guidant le peuple de Delacroix (1830).",
                "Regardez la femme au centre dominant les enfants à ses pieds : l'un lit, les livres rappellent l'instruction. L'esquisse mesure 70 cm de haut.",
                "En face, la République de Gérôme est néo-grecque : déesse figée, de face, rameau d'olivier, glaive baissé, arc-en-ciel et étoile dans un paysage apaisé."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Daumier propose une République généreuse, sur l'iconographie de la **charité** : une femme du peuple nourrit deux enfants tandis qu'un troisième lit à ses pieds.",
                "L'image est simple, populaire, réaliste : la République nourrit ses enfants et les instruit."
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
                "Exposée au Salon de 1857, l'œuvre déclenche une **polémique** : certains critiques y voient une lutte sociale, les glaneuses incarnant le prolétariat rural et la misère des campagnes françaises.",
                "Millet est pourtant un peintre conservateur, non engagé politiquement : son œuvre est fataliste, l'homme est condamné à porter son fardeau et le travailleur ne peut échapper à sa condition.",
                "Elle est admirée pour sa simplicité et sa capacité à hisser le paysan à la hauteur de la grande histoire : Paul Mantz (1859) y voit la preuve que les rudes labeurs des champs ont « leur poésie et leur héroïsme »."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 83,5 x 110 cm : un grand format d'histoire pour un sujet « bas ». Regardez la composition en **frise**, le ciel couvrant un tiers du tableau.",
                "Trois femmes, trois positions qui se courbent vers le sol, absorbées dans leur tâche : se baisser, ramasser, se relever.",
                "Observez leurs têtes couvertes, sans visage, et leurs vêtements pauvres en bleu, blanc, rouge : dignes des valeurs de l'**emblème national**.",
                "À l'arrière-plan, le climat change : la récolte du blé et, au fond à droite, un garde à cheval qui surveille, comme l'instant fécond du Radeau de la Méduse."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le glanage est un travail réglementé : autorisé avant le coucher du soleil, pour ramasser les épis négligés dans les champs moissonnés.",
                "Anonymes, les paysannes représentent la classe des travailleurs : Millet en fait des figures classiques, une image universelle du **labeur**. Le glanage renvoie à une longue histoire (Poussin, L'Été, Ruth et Boaz).",
                "Chez Jules Breton (Le Rappel des glaneuses, 1859), la charge paysanne est plus pittoresque : un garde, la lune, le coucher du soleil, un aspect bucolique ; la misère y transparaît moins que chez Millet, où la dureté du labeur réside dans la forme même des corps."
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
                "Il s'inspire de ces nouveaux héros pour représenter une France qui existe loin de Paris. Sa réputation ne cesse de croître : il devient le grand peintre républicain des années 1870, alors que Courbet, plus virulent, deviendra le communard qui suscite la méfiance."
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
      },
      {
        "oeuvre_id": "orsay-68",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "C'est une **commande** passée à Rosa Bonheur (1822-1899) pour le musée de Lyon ; le tableau, dit aussi Le Sombrage, sera finalement conservé à Paris, au musée du Luxembourg, musée de l'art contemporain.",
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
        "oeuvre_id": "orsay-924",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Le sujet, c'est la campagne, loin de Paris : Courbet le revendique.",
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
                "Le paysage est très plat, avec les falaises de craie du cimetière d'Ornans sous un ciel gris qui écrase les personnages.",
                "Technique subversive : silhouettes cernées de noir comme la caricature de Daumier, noirs lisses mais blancs en matière épaisse et rugueuse."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une assemblée austère et silencieuse, des anonymes qui ne nous regardent pas : un enterrement, événement universel, sans héros représenté.",
                "L'alignement des figures à la même hauteur est vu comme symbole d'**égalitarisme** : un sujet qui n'intéresse que Courbet devient tableau d'histoire.",
                "« L'enterrement du romantisme » : le trou, un idéalisme sans portée métaphysique. Mais Delacroix et Ingres sont toujours vivants.",
                "Le Christ n'est présent que de façon matérielle, par le crucifix, alors que chez Friedrich il est dans la nature ; on y voit peut-être une référence à deux républicains, héros de 1789, et un crâne, sorte de vanité, posé aux pieds des hommes."
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
                "Face à l'Exposition universelle, qui présente Ingres (Odalisque, Jeanne d'Arc, La Source, le Sphinx, La Baigneuse de Valpinçon), deux générations, deux mondes, s'affrontent ; l'exposition de Courbet est très peu visitée et son réalisme mal compris.",
                "Dans le prologue du catalogue il écrit : « Savoir pour pouvoir [...] faire de l'art vivant tel est mon but. »",
                "Il y a un pas entre Courbet et l'art officiel : on pense à L'Apothéose d'Homère d'Ingres ou au Siècle d'Auguste de Gérôme, célébrant Napoléon III.",
                "Son adhésion au réalisme, pendant un temps contre son gré, lui donne une visibilité dans le circuit de l'art."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de 361 x 598 cm. Regardez la **frise** en trois parties : Courbet au centre, et deux groupes de part et d'autre.",
                "Courbet peint, certainement en autoportrait, un paysage d'Ornans sur une grande toile carrée inachevée sur le chevalet.",
                "Ce tableau ne correspond à aucun genre de la peinture académique, mais on les y retrouve tous : paysage, scène de genre (enfant habillé en paysan, chien), nu, modèle d'atelier aux vêtements posés au sol."
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
        "oeuvre_id": "orsay-98",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Cabanel, formé à l'Académie des Beaux-Arts, obtient le **grand prix de Rome** en 1845, après deux échecs, puis est pensionnaire à la villa Médicis ; il a le même mécène que Courbet, Alfred Bruyas.",
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
        "oeuvre_id": "orsay-904",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Dans **Le Peintre de la vie moderne** (1863), Baudelaire demande de « tirer l'éternel du transitoire » : la modernité est le fugitif et le contingent, que le peintre n'a pas le droit de supprimer.",
                "En **1863**, le jury du Salon officiel est particulièrement sévère ; Napoléon III ouvre un **Salon des refusés** pour que le public soit juge, et celui-ci vient surtout se moquer, notamment de Manet.",
                "Manet, élève de Couture avant de rompre avec lui, se forme par la copie, notamment à la Galerie espagnole (Velázquez) ; il subit l'influence de **Courbet**, qui part du contemporain pour s'inscrire dans l'histoire.",
                "Deux sources formelles sont identifiées : Le Concert champêtre de Titien (alors attribué à Giorgione) et Le Jugement de Pâris de Marcantonio Raimondi."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Toile de **207 x 265 cm**, grand format destiné à la peinture d'histoire ; titre original Le Bain, que Manet surnommait « la partie carrée ».",
                "**Aplats** et forts **empâtements** sont révolutionnaires ; notes nettes (le corps féminin) et zones floues (la mare, la barque) coexistent.",
                "Regardez la femme au fond, disproportionnée, le télescopage des plans et les ombres contradictoires : un critique juge que Manet aura du talent « le jour où il saura le dessin et la perspective ».",
                "Nu peint en atelier, paysage conçu comme un **décor de théâtre**, effet de collage : Manet assume la bi-dimensionnalité, rejette l'illusionnisme et affiche l'artificialité de la peinture. C'est délibéré, et Zola le défend."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Quatre personnages dans un sous-bois : Eugène Manet à demi couché, Ferdinand Leenhoff assis, une femme au fond qui trempe la main dans la mare, et Victorine Meurent.",
                "Le scandale tient au **sujet** : dans un format d'histoire, Manet montre la vie moderne, une femme **dévêtue** et non simplement nue, sans prétexte allégorique ni mythologique.",
                "Regardez le regard impudique et frondeur de Victorine, qui nous fixe franchement ; les citations de maîtres sont un travestissement de la grande peinture.",
                "Détails : un bouvreuil, une grenouille à gauche, une cascade argentée, une clairière et une barque à fond plat, à la grande mode du canotage."
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
                "Peinte en **1863**, Olympia provoque un nouveau coup d'éclat au **Salon officiel de 1865**, après le scandale du Déjeuner sur l'herbe.",
                "Elle est contemporaine de la Naissance de Vénus de Cabanel (1863), acquise par Napoléon III pour 20 000 francs : même thème de la femme dévêtue, traité sans l'habillage mythologique.",
                "Les références sont la Maja desnuda de Goya et la **Vénus d'Urbino** de Titien (1538)."
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
                "Le modèle est toujours Victorine Meurent, accompagnée de Laure, la servante noire, thème récurrent dans la peinture du XIXe siècle.",
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
                "Le portrait est peint en **1868**, pour remercier Zola d'avoir pris la défense de Manet et d'Olympia.",
                "Zola, aspirant écrivain, se fait connaître par la critique d'art ; il représentera la férocité des critiques dans L'Œuvre.",
                "Dès le Déjeuner sur l'herbe, il comprend que les partis pris de Manet sont **délibérés**, et il le défend."
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
                "Zola tient une **brochure bleue** : l'article qui lui est favorable, avec plume et encrier à portée de main.",
                "On y voit l'Histoire des Peintres de Charles Blanc, une reproduction d'Olympia et une gravure du Triomphe de Bacchus de Velázquez.",
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
                "Vers 1865-1866, Monet est encore très imprégné par **Manet** : son Déjeuner sur l'herbe reprend le titre et le thème du scandale de 1863.",
                "La toile devait être envoyée au Salon, mais ne l'a finalement pas été ; Femmes au jardin (vers 1866), elle, a été **refusée au Salon**.",
                "Jongkind et Eugène Boudin comptent parmi ses influences en plein air ; Bazille, Renoir, Sisley et lui ont tous eu Charles Gleyre pour maître."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Le Déjeuner sur l'herbe est un fragment de **248,7 x 218 cm**, de grand format vertical ; Femmes au jardin mesure 255 x 205 cm.",
                "Monet est fidèle à Manet dans la **touche** plutôt que dans le fond de son propos.",
                "Regardez le jeu d'ombres et de lumière avec la **tache de soleil**, qui se retrouve dans Femmes au jardin."
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
        "oeuvre_id": "orsay-807",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Vers 1866, Monet est encore très imprégné par **Manet** : il lui est fidèle dans la touche plutôt que dans le fond, comme dans son Déjeuner sur l'herbe de 1865-1866.",
                "Comme Bazille, Renoir et Sisley, il a eu Charles Gleyre pour maître : on parle des « impressionnistes avant l'impressionnisme ».",
                "La toile a été **refusée au Salon**, où règne encore le système académique hérité d'Ingres."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Très grand format à l'huile (**255 x 205 cm**).",
                "Regardez le **jeu d'ombres et de lumière** et la tache de soleil, déjà au cœur du Déjeuner sur l'herbe.",
                "La peinture de plein air, nourrie par Barbizon, Corot, Boudin et Jongkind, est une composante essentielle de l'impressionnisme."
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
                "Peint en **1876**, Le Bal du Moulin de la Galette est présenté à la **troisième exposition** en 1877, avec La Balançoire.",
                "Ces deux toiles ont été acquises par **Caillebotte**, mécène du groupe.",
                "Renoir, né à Limoges, d'abord peintre sur porcelaine, expose aussi au Salon officiel ; la critique est féroce envers ses envois."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Très grand format à l'huile (**131,5 x 176,5 cm**).",
                "Regardez la **touche dynamique et visible**, qui crée une vibration optique, et les **ombres colorées**, héritage du principe des complémentaires de Delacroix.",
                "Observez l'impression de **mouvement**, que l'on retrouve dans Danse à la ville et Danse à la campagne (1883)."
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
        "oeuvre_id": "orsay-1154",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Présentée à la **première exposition** du groupe en 1874, chez Nadar : une critique de cette exposition, signée Louis Leroy, donne son nom à l'impressionnisme.",
                "Degas s'intéresse surtout aux scènes de modernité, avec une manière de représenter le mouvement liée à la **chronophotographie** de Muybridge et Marey.",
                "Même thème que La Classe de danse (1873-1876), contemporaine de la construction de l'Opéra Garnier."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile (**65 x 81,5 cm**) montrant des danseuses dans des **postures différentes**.",
                "Regardez l'**orientation variée des corps** : la même danseuse est représentée à la manière de la chronophotographie, en plusieurs moments successifs.",
                "Observez le cadrage et les attitudes, qui suggèrent le mouvement plutôt qu'une pose arrêtée."
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
                "Degas s'intéresse surtout aux scènes de modernité : théâtre, danse et champs de courses ; le cadrage et les attitudes évoquent le mouvement, comme la chronophotographie de Muybridge et Marey."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Format vertical à l'huile (**85,5 x 75 cm**), structuré par les **lignes obliques** du parquet et les verticales des pilastres et du bâton du maître de ballet.",
                "Regardez les **tutus blancs vaporeux** : en dehors de cette grande structuration, ils animent la toile de leur légèreté."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Pas de corps canonique : Degas montre les **mouvements de travail** des danseuses, non une image idéalisée.",
                "Le monde des corps de ballet est associé à la prostitution (voir la Petite danseuse de 14 ans)."
              ]
            }
          ]
        }
      },
      {
        "oeuvre_id": "orsay-1132",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Peint en 1872 et présenté à la **première exposition** du groupe en 1874, chez Nadar : Berthe Morisot compte parmi les artistes de la Société anonyme fondée en 1873.",
                "Morisot est l'élève, le modèle et la belle-sœur de **Manet**, mais elle développe une facture très personnelle et originale.",
                "Face à l'académisme hérité d'Ingres, ligne et touche lisse, les impressionnistes revendiquent la touche visible et des sujets de la réalité contemporaine."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de petit format (**56 x 46,5 cm**).",
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
                "Huile sur toile en largeur (**65,5 x 93,2 cm**), peinte en **plein air**, avec des **ombres colorées**.",
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
                "Peint en 1875 et présenté à la **deuxième exposition** du groupe en 1876 : Caillebotte y expose à partir de cette date, avec des scènes de la vie urbaine.",
                "Riche héritier, il deviendra un grand **mécène** qui a permis de conserver l'œuvre de ses compagnons de route ; il acquiert notamment La Balançoire et Le Bal du Moulin de la Galette de Renoir."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Grand format à l'huile (**102 x 147 cm**), situé dans une **architecture haussmannienne**.",
                "Regardez les lattes du parquet : elles **creusent des lignes de composition**.",
                "Observez la lumière qui vient sublimer les corps des travailleurs et les différentes textures du bois et des copeaux, avec des effets de transparence."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Une scène de travail urbain contemporaine, loin de l'histoire et de la mythologie chères à l'académisme.",
                "Les **visages ne sont pas discernables** : c'est la **gestuelle** à plusieurs étapes qui est représentée."
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
                "Présentée à la **troisième exposition** du groupe en 1877 : il existe au moins **12 versions** de la gare Saint-Lazare par Monet, qui habitait tout près.",
                "Le chemin de fer incarne la **révolution de la mobilité**."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Huile sur toile de format moyen (**75 x 105 cm**), à la touche **plus fondue**, la peinture empâtée, quasi granuleuse.",
                "Regardez les **différentes épaisseurs de vapeur gazeuse**, rendues par la matière.",
                "Observez l'**ombre bleue** du réseau métallique de la charpente de la verrière.",
                "À l'arrière-plan, les **immeubles haussmanniens**."
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
                "Le Salon de 1787, dirigé par l'Académie royale, présente les artistes qui répondent aux critères de la peinture académique, les autres étant refusés : c'est un excellent moyen de se faire connaître et de vendre ses tableaux.",
                "L'Académie place au sommet la **peinture d'histoire**, puis le portrait, puis le paysage, la nature morte et la scène de genre.",
                "Après la suppression de l'Académie royale en 1793, l'institution prend en 1816 sa forme définitive d'**Académie des Beaux-Arts**, et l'École des Beaux-Arts est fondée la même année.",
                "Un concours annuel permet de remporter le **prix de Rome** : un séjour à la villa Médicis pour étudier les chefs-d'œuvre de la Renaissance et de l'Antiquité tout en se formant au grand genre. À leur retour en France, une brillante carrière les attend en général.",
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
        "oeuvre_id": "orsay-16649",
        "note": {
          "sections": [
            {
              "titre": "Contexte",
              "points": [
                "Bouguereau peint cette Naissance de Vénus en 1879, seize ans après celle de Cabanel (1863), acquise par Napoléon III.",
                "Il est professeur à l'académie Julian, fondée en 1869, et fait partie des figures tutélaires de l'académisme avec Cabanel et Baudry.",
                "Il s'inspire de la Naissance de Vénus de Botticelli et du Triomphe de Galatée de Raphaël, et rivalise avec Paul Baudry (La Fortune et le jeune enfant, 1857, non exposé) en soignant les personnages secondaires."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Vénus sort d'un coquillage ; regardez la façon dont les eaux et les airs la célèbrent, des vagues au ciel : nous sommes invités à contempler son corps.",
                "Bouguereau met l'accent sur les **personnages secondaires** qui entourent Vénus : observez leur rôle dans la composition d'ensemble.",
                "La peinture doit être « totalement finie jusqu'à son modelé » : cherchez l'absence de touche visible, qui rend la chair lisse et irréelle."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Selon la mythologie, Vénus naît de l'eau et est célébrée par les éléments : la scène est une allégorie de la beauté idéale.",
                "Cette Vénus est **séduisante et artificielle**, entre réel et illusionnisme, comme celle de Cabanel.",
                "Le nu mythologique, imposé par la tradition académique, offre une sensualité acceptable grâce à l'excuse du sujet antique."
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
                "Peint en 1850, ce tableau marque un tournant surprenant dans une carrière habituellement tournée vers la peinture d'histoire ; Bouguereau veut se faire remarquer au Salon de 1851.",
                "Il est l'une des figures tutélaires de l'académisme, avec Cabanel et Baudry, héritiers de l'**ingrisme**, devenu synonyme d'académisme ; il enseigne à l'académie Julian, école privée payante.",
                "Il devient l'une des « coqueluches » des artistes américains, et incarne le grand genre, « le grand classique par excellence », tout en côtoyant Manet et les modernistes.",
                "Son héritage italien se lit dans le traitement du paysage (Titien)."
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
                "Dante, poète florentin, décrit dans L'Enfer sa descente en vie, guidé par Virgile : au huitième cercle des Enfers, ils assistent au combat de deux damnés ; on y découvre aussi une créature mi-chauve-souris, mi-hybride, planant au-dessus de la scène.",
                "Le combat acharné entre deux âmes est un prétexte pour explorer la **musculature masculine** : Bouguereau utilise les scènes de Dante pour représenter des poses exacerbées.",
                "La scène infernale devient une étude des postures violentes, plus qu'un récit littéraire."
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
                "Seurat (1859-1891), fils d'huissier, quitte l'École des Beaux-Arts pour poursuivre ses lectures scientifiques, notamment Charles Henry, et se forme chez **Puvis de Chavannes**.",
                "Il présente la Baignade à Asnières au Salon des Indépendants (1884) et **Un dimanche après-midi à la Grande Jatte**, manifeste du post-impressionnisme, à la dernière exposition impressionniste (1886) ; Signac théorise ensuite le mouvement.",
                "Il meurt en **1891**, l'année du Cirque, qui prolonge sa série d'attractions populaires de la vie moderne, avec parade et chahut.",
                "Seurat reproche aux impressionnistes la touche filante, pas assez fixée et gourmande en couleur."
              ]
            },
            {
              "titre": "Composition",
              "points": [
                "Recherche **néo-impressionniste** par touche **divisionniste** : de petits points de couleurs complémentaires, fondés sur la loi du **contraste simultané** de Chevreul ; le mélange des tons se fait dans l'œil du spectateur, non sur la toile.",
                "Symbiose de l'art et de la science, typique de la fin du XIXe siècle ; l'effet de planéité le rapproche de Puvis de Chavannes.",
                "La scène est scindée en deux, avec le public d'un côté et la piste de l'autre.",
                "La touche jaune de la **lumière électrique**, nouvelle à l'époque, renforce l'effet d'effervescence joyeuse.",
                "Composition réfléchie, aux figures figées et aux contours dessinés, à l'opposé des scènes prises sur le vif : le sens du monumental échappe à l'anecdote.",
                "Le cadre n'est pas de Seurat mais de son ami Paul Signac."
              ]
            },
            {
              "titre": "Sujet",
              "points": [
                "Le développement du cirque est concomitant de la peinture : Seurat y montre un loisir populaire de la vie moderne."
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
