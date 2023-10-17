"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Mangas",
      [
        {
          id: 1,
          title: "L'Attaque des Titans",
          image: "https://assets.bubblebd.com/img/tdckqru8wj/jdoy5h3wmk.jpg",
          description:
            "Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un géant, n’a qu'un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des titans, et les annihiler jusqu'au dernier…",
          author: "Hajime Isayama",
          theme:
            "Action, Dark fantasy, Fiction apocalyptique et post-apocalyptique, Drame, Shōnen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "Spy x Family",
          image: "https://assets.bubblebd.com/img/2yydykgigv/4rihgxolas.jpg",
          description:
            "Twilight, le plus grand espion du monde, doit pour sa nouvelle mission créer une famille de toutes pièces afin de pouvoir s'introduire dans la plus prestigieuse école de l'aristocratie. Totalement dépourvu d'expérience familiale, il va adopter une petite fille en ignorant qu'elle est télépathe, et s'associer à une jeune femme timide, sans se douter qu'elle est une redoutable tueuse à gages. Ce trio atypique va devoir composer pour passer inaperçu, tout en découvrant les vraies valeurs d'une famille unie et aimante.",
          author: "Tatsuya Endō",
          theme: "Action, Comédie, Récit d'espionnage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "One piece",
          image: "https://assets.bubblebd.com/img/1qwhalypq3/gp50abb1pk.jpg",
          description:
            "Nous sommes à l'ère des pirates. Luffy, un garçon espiègle, rêve de devenir le roi des pirates en trouvant le One Piece, un fabuleux trésor. Par mégarde, Luffy a avalé un jour un fruit démoniaque qui l'a transformé en homme caoutchouc. Depuis, il est capable de contorsionner son corps élastique dans tous les sens, mais il a perdu la faculté de nager.Avec l'aide de ses précieux amis, dont le fidèle Shanks, il va devoir affronter de redoutables pirates dans des aventures toujours plus rocambolesques. Récemment adapté en dessin animé pour la télévision, One Piece remporte un beau succès au Japon. La sortie de ce manga en France permet à Eiichiro Oda de faire montre de tout son talent de graphiste et de narrateur.",
          author: "Eiichirō Oda",
          theme: "Récit d'aventure, Science fantasy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "Dr Stone",
          image: "https://assets.bubblebd.com/img/nvot5elb7i/qopvxdch0v.jpg",
          description:
            "Taiju, un lycéen comme les autres, raconte à son meilleur ami Senku, un génie des sciences, qu'il est sur le point de révéler ses sentiments à Yuzuriha, une fille dont il est secrètement amoureux depuis quelques années. Alors que le jeune homme s'apprête à lui déclarer sa flamme, une lumière brillante apparaît dans le ciel et transforme toute l'humanité en statues de pierres. Lorsque Taiju réussit finalement à se libérer grâce à l'emplacement où l'avait mis son meilleur ami Senku, il se retrouve face à un monde complètement différent où la nature a repris ses droits. Mais il n'est pas le seul à s'être réveillé. Son ami Senku, qui l'a précédé dans son éveil, lui annonce que 3 700 ans se sont écoulés depuis le mystérieux événement, la pétrification. Ensemble ils devront allier les compétences scientifiques exceptionnelles de l'un et les aptitudes physiques de l'autre pour sauver les 7 milliards d'êtres humains encore pétrifiés et découvrir l'origine de cette catastrophe.",
          author: "Riichirō Inagaki",
          theme: "Post-apocalyptique, survivalisme, voyage dans le temps",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "Chansaw Man",
          image: "https://assets.bubblebd.com/img/rswbtflobj/pgtkkr3waw.jpg",
          description:
            "Au Japon, dans un univers proche du nôtre, hommes et démons se côtoient. La plupart des créatures sèment la terreur partout où elles passent et il est fréquent de faire appel aux Devil Hunters, des humains, chargés de les éliminer. Denji est un jeune adolescent qui exerce cette activité à l'aide de Pochita, un démon proche d'un chien avec une tronçonneuse en guise de truffe, avec lequel il a passé un pacte pour rembourser les dettes de son père. Ce dernier crût bon d'échapper à ses usuriers en se suicidant, mais les yakuzas exigèrent que son fils leur verse la somme que son paternel leur devait. Dès lors, Denji effectue divers petits boulots et traque les démons en espérant un jour, vivre une vie tranquille loin de ses créanciers.",
          author: "Tatsuki Fujimoto",
          theme: "Action, Comédie horrifique, Dark fantasy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "Jujutsu Kaisen",
          image: "https://assets.bubblebd.com/img/cg3ug9njsz/mqo1i6nx4r.jpg",
          description:
            "À 16 ans, Yuta Okkotsu est un garçon un peu particulier. L’adolescent est en effet hanté par un fléau, un esprit extrêmement dangereux qui n’hésite pas à s’en prendre à tous ceux qui voudraient faire du mal à son hôte ! Et pour cause… la créature en question n’est autre que le fantôme de son amie d’enfance, Rika, décédée dans d’horribles circonstances. Dans ces conditions, difficile pour le lycéen de mener une vie normale ! Après un énième accident causé dans son établissement, Yuta est récupéré par un certain Satoru Gojo, professeur à l’école d’exorcisme de Tokyo, qui décide de lui apprendre à maîtriser l’énergie occulte… Ce volume est une préquelle à la série créée par Gege Akutami. L'occasion d'en découvrir plus sur l'école d'exorcisme de Tokyo et sur l'un des exorcistes les plus doués de sa génération... Yuka Okkotsu !",
          author: "Gege Akutami",
          theme: "Récit d'aventure, Dark fantasy, Fiction surnaturelle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          title: "Oshi No Ko",
          image: "https://assets.bubblebd.com/img/5txrohx62h/q93ytf3p5f.jpg",
          description:
            "Le Gynécologue Gorô Amamiya est chargé d'aider à faire naître les enfants d'Aï Hoshino, une idole et chanteuse qu'il admire, mais à l'insu du grand public. Cependant, la nuit de l'accouchement d'Aï, Gorô est tué par un fan d'Aï et se réincarne en Aquamarine Hoshino, le fils d'Aï, conservant ses souvenirs de sa vie antérieure. À son insu, la jumelle fraternelle d'Aqua, Ruby Hoshino, est également la réincarnation d'un des patients de Gorô qui était également fan d'Aï. Quatre ans plus tard, Aï est tué par le même fan. Cependant, Aqua en déduit que le meurtrier est peut-être son père et décide d'infiltrer l'industrie du divertissement en tant qu'acteur pour le retrouver et le tuer.",
          author: "Aka Akasaka",
          theme: "Drame, psychologie, mystère, surnaturel, tranche de vie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          title: "Made In Abyss",
          image: "https://assets.bubblebd.com/img/w3wcpblgzc/l6pn426c7o.jpg",
          description:
            "Au pied de la ville d’Orse s’étend l’abysse, une faille gigantesque à la profondeur inconnue habitée par d’étranges créatures et emplie d’antiques reliques. Depuis des années, ce gouffre attire de nombreux aventuriers séduits par l’aura de mystère qui l’entoure. On les appelle « les caverniers ». C’est ici que vit Rico, une jeune orpheline obsédée par l’Abysse et désirant marcher dans les traces de sa mère. Un jour, lors de ses prospections, elle découvre le corps inanimé d’un jeune garçon. Elle n’imagine alors pas à quel point cette découverte va changer sa vie et accélérer son destin.",
          author: "Akihito Tsukushi",
          theme: "Récit d'aventure, Dark fantasy, Science-fiction",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          title: "Mashle",
          image: "https://m.media-amazon.com/images/I/81V5MMQLKHL._SL1500_.jpg",
          description:
            "Élevé au fin fond de la forêt, Mash Burnedead partage ses journées entre séances de musculation et dégustation de choux à la crème. Mais un jour, un agent de police découvre son secret. Il est né sans pouvoirs magiques, ce qui est puni de mort ! Pour survivre, il a devoir postuler à Easton, une prestigieuse académie de magie et en devenir le meilleur élève.",
          author: "Hajime Kômoto",
          theme: "Arts martiaux, combats, magie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          title: "Killing stalking",
          image: "https://assets.bubblebd.com/img/y6tz3emcuc/je9dvdmy3j.jpg",
          description:
            "Yoon bum, un jeune homme frêle et effacé, tombe sous le charme de Sangwoo, un camarade d’école très populaire. Quelques années plus tard, après avoir fait leur service militaire dans la même promo, Yoon bum n’arrive plus à restreindre ses sentiments et s’introduit chez lui dans l’espoir de rasséréner son amour obsessionnel. Seulement, il ne se doutait pas que Sangwoo cachait un tel secret. Secret qu’il aurait mieux fait de ne jamais découvrir...",
          author: "Taifu Comics",
          theme: "Drame, Horreur, Horreur psychologique",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          title: "Magic Knight Rayearth",
          image: "https://assets.bubblebd.com/img/2lutqq09ab/xhjp66mbvo.jpg",
          description:
            "Dans un univers imaginaire, trois collégiennes, Hikaru, Umi et Fû sont confrontées aux forces du mal qui ont envahi un monde parallèle. Arrachées à leur vie quotidienne de Tokyo, elles deviennent des héroïnes combattant pour le défendre, des Magic Knight. Ensemble, les trois amies vont apprendre les valeurs de l'amitié et du courage. Un scénario fantastique et drôle doublé d'un style graphique particulier caractérise ce grand succès d'heroic-fantasy teinté d'orientalisme.",
          author: "Clamp",
          theme: "Aventure, Fantastique",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("MangaVolume", null, {});
  },
};
