"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "MangaVolumes",
      [
        {
          mangaId: 1,
          title: "tome 1",
          image: "https://assets.bubblebd.com/img/tdckqru8wj/jdoy5h3wmk.jpg",
          description:
            "Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un géant, n’a qu'un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des titans, et les annihiler jusqu'au dernier…",
          releaseDate: new Date("2013-06-26"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 2",
          image: "https://assets.bubblebd.com/img/vondlyyeus/a0xmptpql5.jpg",
          description:
            "La riposte du genre humain est en marche ! Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un titan, n’a qu’un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des titans, et les annihiler jusqu’au dernier…",
          releaseDate: new Date("2013-06-26"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 3",
          image: "https://assets.bubblebd.com/img/c2h0tqbslf/v5ahdrqpcj.jpg",
          description:
            "Les troupes sont sidérées par la découverte du singulier pouvoir d’Eren qui peut se transformer en Titan ! Mais l’heure n’est pas à la stupeur : une brèche est ouverte dans le mur, et les Titans affluent, menaçant de repousser l’humanité… Malgré les craintes, une stratégie de riposte est mise en place, et c’est Eren qui se trouve au centre !",
          releaseDate: new Date("2023-09-04"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 4",
          image: "https://assets.bubblebd.com/img/sbnprtzu0r/56ax9nk7w9.jpg",
          description:
            "Eren se trouve au cœur d’une opération militaire inédite : métamorphosé en Titan, il est chargé de colmater la brèche ouverte dans le mur Rose à l’aide d’un gigantesque morceau de roche. Alors que la survie de l’Humanité dépend de la réussite de ce plan audacieux, Eren perd pied et devient totalement incontrôlable. Les adjurations d’Armin ne semblent pas le ramener à lui...",
          releaseDate: new Date("2013-02-30"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 5",
          image: "https://assets.bubblebd.com/img/cxizkouuga/dt8ztaci74.jpg",
          description:
            "La transformation d'Eren en Titan a permis de refouler l'invasion du district de Trost. Mais lorsqu'il reprend ses esprits, c'est pour être interrogé par le major Erwin Smith, du bataillon d'exploration. Bien décidé à aller explorer la maison Jäger, dans le district de Shiganshina, le major va devoir convaincre ses pairs de laisser la vie sauve à Eren...",
          releaseDate: new Date("2014-01-03"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 6",
          image: "https://assets.bubblebd.com/img/cm5ggjer13/dcg26fb1sp.jpg",
          description:
            "Le bataillon d'exploration a entrepris un exercice à l'extérieur des murs auquel participe bien évidemment Eren, mais aussi Armin et Mikasa. Tout semble bien se passer, jusqu'à ce qu'un Titan femelle fasse irruption et menace de dévaster toute la formation...",
          releaseDate: new Date("2014-03-05"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 7",
          image: "https://assets.bubblebd.com/img/gaxmdj3fkk/kdp38kvh5c.jpg",
          description:
            "Décidé à inspecter de fond en comble la maison de la famille d'Eren, en quête d'indices permettant d'élucider le mystère des Titans, le bataillon d'exploration entreprend une incursion à l'extérieur du Mur. Les troupes se font alors surprendre par un Titan de type féminin particulièrement dangereux, et manifestement doué d'intelligence. Au prix de lourds sacrifices dans ses rangs, le major Erwin parvient à neutraliser le spécimen. Il ne reste plus qu'à identifier l'individu qui se trouve à l'intérieur.",
          releaseDate: new Date("2014-04-30"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 8",
          image: "https://assets.bubblebd.com/img/6vzbyfivuo/n1uekbi3em.jpg",
          description:
            "L'opération menée hors des murs s'est soldée par la perte de nombreux soldats. Eren lui-même n'a pu être sauvé in extremis que par l'intervention de Mikasa et de Livaï, et le titan féminin n'a finalement pas pu être capturé. Ce cuisant échec risque d'avoir de fâcheuses conséquences non seulement pour Eren qui doit désormais être remis aux brigades spéciales, mais aussi pour le bataillon d'exploration et ses responsables qui sont, eux aussi, convoqués.",
          releaseDate: new Date("2014-07-02"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 9",
          image: "https://assets.bubblebd.com/img/8sjuplmjp8/3b01hcnrf7.jpg",
          description:
            "Eren et ses compagnons ont enfin réussi à capturer le Titan féminin, mais ils font, au cours de cette opération, une découverte effarante... Ils sont encore abasourdis lorsque leur parvient l'alerte : le mur Rose a cédé !",
          releaseDate: new Date("2014-08-03"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 10",
          image: "https://assets.bubblebd.com/img/ttwwqa64cz/rnt5j6m23c.jpg",
          description:
            "Partis inspecter le mur Rose afin de localiser la brèche à l'origine de la nouvelle intrusion, les membres de la 104e Brigade pensent avoir trouvé un abri sûr dans les ruines de la forteresse d'Utgard et s'apprêtent à prendre un peu de repos pour la nuit. Malheureusement, les Titans, pourtant censés être inactifs après le coucher du soleil, n'ont pas l'intention de leur laisser le moindre répit !",
          releaseDate: new Date("2014-10-29"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 11",
          image: "https://assets.bubblebd.com/img/kdjutpcak6/pj46fbif5m.jpg",
          description:
            "Une meute de Titans soudainement apparue aux abords du mur Rose fait des ravages. Heureusement, l'intervention d'Ymir et l'arrivée de renforts permettent de la décimer. Les nouvelles recrues issues de la 104e brigade d'entraînement sont de nouveau réunies. L'accalmie est cependant de très courte durée, car c'est maintenant au tour du Titan colossal et du Titan cuirassé de frapper !",
          releaseDate: new Date("2015-01-07"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 12",
          image: "https://assets.bubblebd.com/img/uoi7uwpej5/5rkg7sozvs.jpg",
          description:
            "Après que leur identité a éclaté au grand jour, le Titan colossal et le Cuirassé enlèvent Eren et Ymir. Tandis que le Bataillon d'exploration se prépare à partir à leur secours, entre les deux captifs, la solidarité se lézarde...",
          releaseDate: new Date("2015-03-04"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 13",
          image: "https://assets.bubblebd.com/img/0fofojztzf/yyrby1oaiv.jpg",
          description:
            "L'intervention du Bataillon d'exploration a permis d'arracher Eren des griffes de Reiner et Bertolt, mais Ymir, elle, a décidé de changer de camp. Le tribut humain à payer pour cette mission de sauvetage est extrêmement lourd...",
          releaseDate: new Date("2015-05-06"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 14",
          image: "https://assets.bubblebd.com/img/n5g1rvpyu9/zg800bk9kt.jpg",
          description:
            "Le Roi a donné l'ordre aux Brigades spéciales de capturer Eren et Christa. De son côté, le Bataillon d'exploration prépare une opération d'envergure : renverser le trône !",
          releaseDate: new Date("2015-07-01"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 15",
          image: "https://assets.bubblebd.com/img/m09mo83xuc/ul4h3wiz6s.jpg",
          description:
            "Désormais certains que la famille Reiss est bien l’authentique lignée royale, les membres du Bataillon d’exploration s’apprêtent à supplanter le Roi, mais une unité spéciale des Brigades centrales déjoue leur projet en ravissant Historia et Eren !",
          releaseDate: new Date("2015-09-09"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 16",
          image: "https://assets.bubblebd.com/img/sirvckhsfu/1cva3schy0.jpg",
          description:
            "Le Bataillon d'exploration est parvenu à déjouer la machination orchestrée contre lui par les Brigades centrales et à renverser le gouvernement. À présent, il ne reste plus qu'à mettre Historia sur le trône. De son côté l'équipe de Livaï a réussi à localiser Eren et Historia mais les délivrer ne sera sans doute pas une mince affaire...",
          releaseDate: new Date("2015-11-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 17",
          image: "https://assets.bubblebd.com/img/tfmazkf5dd/sv0es54unc.jpg",
          description:
            "Le pouvoir ancestral des Reiss leur permettait de régner sur l'Humanité, jusqu'à ce que Grisha, le père d'Eren, le leur arrache pour le confier à son fils. Fermement décidé à récupérer son bien, Rhodes ordonne à Historia de tuer Eren, mais celle-ci choisit de désobéir, par fidélité envers ses propres convictions. Fou furieux, Rhodes se métamorphose alors en un gigantesque Titan dévastateur !",
          releaseDate: new Date("2016-01-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 18",
          image: "https://assets.bubblebd.com/img/md7pfnnzli/ev4innskdx.jpg",
          description:
            "Après avoir renversé le régime et fait le ménage dans le gouvernement, le Bataillon d'exploration lance enfin l'opération de reconquête du mur Maria. Fort de la capacité de durcissement d'Eren et d'un minerai luminescent permettant les déplacements de nuit, ses chances de réussite semblent bonnes. Mais Reiner, Bertolt et le Titan bestial sont prêts à les recevoir !",
          releaseDate: new Date("2016-04-06"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 19",
          image: "https://assets.bubblebd.com/img/nvabedxl16/7vx51dascv.jpg",
          description:
            "Le bataillon d'exploration arrive au mur Maria pour reboucher, grâce à la faculté de durcissement d'Eren, la partie détruite cinq ans plus tôt par les titans. L'opération réussit, mais alors qu'ils s'apprêtent à passer à la phase suivante, l'ennemi surgit et bloque leur seule voie de repli. Une bataille décisive s'engage à présent !",
          releaseDate: new Date("2016-08-24"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 20",
          image: "https://assets.bubblebd.com/img/5w5nvrcmjd/rd6h7yefyz.jpg",
          description:
            "Bien décidé à découvrir le secret sommeillant dans le sous-sol de la maison Jäger, le Bataillon d'exploration doit avant tout reprendre le mur Maria, et livre pour cela une lutte acharnée contre Reiner, Bertolt et le Titan bestial. Eren et les siens parviendront-ils à vaincre cet infernal trio pour enfin accéder à de nouvelles révélations ?!",
          releaseDate: new Date("2016-10-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 21",
          image: "https://assets.bubblebd.com/img/05gi40hkjo/c55myoj2fj.jpg",
          description:
            "Erwin et Armin se sont sacrifiés pour permettre à leurs camarades de vaincre Reiner, Bertolt et le Titan bestial. À présent, quelle nouvelle découverte attend les survivants ?",
          releaseDate: new Date("2017-04-07"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 22",
          image: "https://assets.bubblebd.com/img/qnqunl1oac/68ipjpxnfb.jpg",
          description:
            "Capturé suite à la dénonciation de son fils, Grisha est torturé puis condamné à la déportation sur l'île du Paradis. Curieuse surprise de découvrir qu'il connaît les officiers qui s'apprêtent à le supplicier...",
          releaseDate: new Date("2017-10-21"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 23",
          image: "https://assets.bubblebd.com/img/nkfpfhkggc/njkbkj4k2x.jpg",
          description:
            "Alors qu'en traversant la mer Eren pensait être libre il se retrouve face au confit qui oppose les armées de Mahr et d'Eldia. Les Eldiens sont mis à l'épreuve pour hériter des pouvoirs des titans primordiaux.",
          releaseDate: new Date("2017-11-29"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 24",
          image: "https://assets.bubblebd.com/img/zktam6suty/nmvnxsh7vf.jpg",
          description:
            "Sur le point d'être à nouveau envoyé sur l'île du Paradis, Reiner se remémore les événements survenus des années plus tôt, lors de son premier départ.",
          releaseDate: new Date("2018-04-04"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 25",
          image: "https://assets.bubblebd.com/img/uihfch7m3t/4rl4nsshqm.jpg",
          description:
            "Tandis que Reiner, à sa grande stupéfaction, retrouve Eren dans un sous-sol, le chef du clan Teyber s'apprête à monter sur scène pour y faire certaines révélations qui laisseront l'assistance médusée.",
          releaseDate: new Date("2018-08-22"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 26",
          image: "https://assets.bubblebd.com/img/bgx9twjbxf/c21p7wbv8b.jpg",
          description:
            "Les Mahr ont réuni des personnalités du monde entier afin d'affirmer sur la scène internationale la dangerosité de l'île du Paradis. C'est ce moment que choisit Eren pour jaillir et commettre des ravages aussi bien dans la population que dans les rangs de la haute administration militaire. Il engage aussitôt le combat face au Titan marteau d'armes. Rejoint par ses alliés, la mêlée devient générale !",
          releaseDate: new Date("2018-12-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 27",
          image: "https://assets.bubblebd.com/img/apfknkgpx1/mulc0welio.jpg",
          description:
            "Le but d'Eren en infiltrant Revelio était de ramener Sieg, descendant de la lignée royale, sur l'île du Paradis. Les insulaires sont maintenant en mesure de déclencher le Grand Terrassement, mais en contrepartie, ils ont enclenché le compte à rebours vers une guerre totale...",
          releaseDate: new Date("2019-04-03"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 28",
          image: "https://assets.bubblebd.com/img/yi09mmnbes/vrqhc3fsik.jpg",
          description:
            "Théoriquement, l'arrivée de Sieg dote l'Île du Paradis de la puissance du Grand Terrassement, mais l'armée est méfiante : peut-on vraiment être sûr qu'Eren n'est pas manipulé par son demi-frère ? Pour parer à tout risque, les transfuges mahr sont emprisonnés. Cependant, une partie des troupes et de la population est très insatisfaite de la situation. Alors que la grogne monte, Eren passe à l'action.",
          releaseDate: new Date("2019-09-03"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 29",
          image: "https://assets.bubblebd.com/img/m2gtixjq0s/tn2mdih7l1.jpg",
          description:
            "Déterminés à déclencher le Grand Terrassement, les pro-Jäger passent à l'action. Après avoir neutralisé l'ensemble de l'État-major, ils partent rejoindre Sieg, dont Livaï s'apprête à découvrir les véritables intentions...",
          releaseDate: new Date("2019-02-13"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 30",
          image: "https://assets.bubblebd.com/img/x3qwnccyse/1jzk91pw3o.jpg",
          description:
            "Sieg compte sur Eren et le pouvoir du Titan originel  pour mener à bien son projet d'éradication douce du  peuple eldien, mais l'irruption soudaine de l'armée mahr bouleverse la donne. Les deux demi-frères  parviendront-ils à entrer en contact ?!",
          releaseDate: new Date("2020-05-27"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 31",
          image: "https://assets.bubblebd.com/img/yril5sfe92/ri76tomciv.jpg",
          description:
            "Sieg compte sur Eren pour mener à bien le plan d’éradication douce des Eldiens. Mais après qu’ils sont entrés en contact, Eren lui révèle que sa véritable intention est de déclencher le Grand Terrassement pour dévaster le monde entier. Prenant le dessus, il s’empare du pouvoir d’Ymir, la grande ancêtre, et une armée de Titans colossaux se met en marche...",
          releaseDate: new Date("2020-08-19"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 32",
          image: "https://assets.bubblebd.com/img/qdmc5w1myn/x4z9zdnd75.jpg",
          description:
            "L'humanité est terrorisée par les titans et s'enferme derrière les murs fortifiés des villes, leur seul espoir de survie. Les garnisons de soldats sur leurs chevaux, de leur équipement de manoeuvre tridimensionnelle et de leurs épées sont peu de chose face aux Titans mais le bataillon d'exploration prend sous son aile Eren, un jeune soldat qui se révèle être un atout pour l'armée mais aussi une menace potentielle. La guerre entre Titans et Humain n'est pas encore finie et depuis qu'Eren est détenteur du pouvoir Originel, les choses se compliquent dans les deux camps sur l'île du Paradis.",
          releaseDate: new Date("2020-03-25"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 33",
          image: "https://assets.bubblebd.com/img/bqan9ts7dh/84xoqo31yj.jpg",
          description:
            "Mikasa, Armin et leur groupe sont en route pour Odiha où ils espèrent trouver un aéronef pour rattraper Eren par la voie des airs. Mais en contrepartie, ils ne peuvent plus espérer sauver Revelio, où vivent les familles d'Annie, Reiner et les autres....",
          releaseDate: new Date("2021-04-07"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 1,
          title: "tome 34",
          image: "https://assets.bubblebd.com/img/acxaafskwm/r3fuhs66mm.jpg",
          description:
            "N’épargnant que l’île du Paradis, le Grand Terrassement poursuit son avancée, écrasant impitoyablement toute vie sur son passage, mais Armin, Mikasa et leurs compagnons savent quelle est la cible d’Eren. Ils le rattrapent enfin, et ne reculeront devant aucun sacrifice pour l’arrêter...",
          releaseDate: new Date("2021-05-21"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 1",
          image: "https://assets.bubblebd.com/img/2yydykgigv/4rihgxolas.jpg",
          description:
            "Twilight, le plus grand espion du monde, doit pour sa nouvelle mission créer une famille de toutes pièces afin de pouvoir s'introduire dans la plus prestigieuse école de l'aristocratie. Totalement dépourvu d'expérience familiale, il va adopter une petite fille en ignorant qu'elle est télépathe, et s'associer à une jeune femme timide, sans se douter qu'elle est une redoutable tueuse à gages. Ce trio atypique va devoir composer pour passer inaperçu, tout en découvrant les vraies valeurs d'une famille unie et aimante.",
          releaseDate: new Date("2020-09-10"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 2",
          image: "https://assets.bubblebd.com/img/pjpdkslusz/fvzapnj9r1.jpg",
          description:
            "L'espion Twilight, accompagné d'Anya et de Yor, tente d'approcher le chef du parti Nation Unifiée. Sa mission consiste à faire admettre Anya à Eden, prestigieuse école qui réunit les enfants de l'élite d'Ostania, puis de la faire figurer parmi les meilleurs élèves.",
          releaseDate: new Date("2020-10-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 3",
          image: "https://assets.bubblebd.com/img/rp67w9uequ/rl2ag0g4b5.jpg",
          description:
            "L’intégration d’Anya dans la prestigieuse académie d’Eden poursuit son cours, et avec elle la mission pour la paix de Twilight. Mais un nouveau challenge se dresse sur la route de la jeune famille en la personne de Yur, le frère de Yor qui travaille en secret pour les services de contre-espionnage du pays ! Les faux semblants et les mensonges s’accumulent autour de la famille Folger… est la dernière série à succès qui cartonne au Japon, où on suit le aventures de Twilight, un espion obligé de simuler une parfaite vie de famille avec une femme et une fille de circonstance pour mener à bien sa mission..",
          releaseDate: new Date("2021-02-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 4",
          image: "https://assets.bubblebd.com/img/ecdk49yphx/acdwslh0ep.jpg",
          description:
            "Les conspirateurs comptent employer des chiens pour arriver à leurs fins, une curieuse coïncidence alors que la famille Forger souhaite adopter un canidé pour récompenser Anya d'avoir décroché sa première étoile à l'école Eden.",
          releaseDate: new Date("2021-05-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 5",
          image: "https://assets.bubblebd.com/img/aie6mupddy/gzriap181a.jpg",
          description:
            "Après avoir déjoué en deux temps trois mouvements un complot terroriste (rien que ça), la (fausse) famille Forger accueille un nouveau membre dont le nom est Bond, le chien Bond. Sous son abondante pilosité canine se cachent un amour infini pour Anya et, plus discret, un don de prescience. Alors que l'opération « Strix » semble enfin sur les rails, les examens qu’Anya doit passer dans le cadre de sa scolarité pourraient à nouveau mettre en péril la délicate mission de Loid Forger, alias Twilight, le meilleur espion du monde…",
          releaseDate: new Date("2021-08-19"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 6",
          image: "https://assets.bubblebd.com/img/n4skoplite/d84w6bb384.jpg",
          description:
            "Tout va se jouer lors d'un tournoi de tennis clandestin, dont l'issue pourrait bien remettre en cause la position de Yor au sein de la famille Forger. En effet, Noctuna s'est juré de prendre la place de fausse épouse de Twilight dans le cadre de l'opération Strix",
          releaseDate: new Date("2021-11-10"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 7",
          image: "https://assets.bubblebd.com/img/ioxeyfjbsi/s6alwu9olv.jpg",
          description:
            "Twilight, vrai espion et faux père de famille, a enfin réussi à entrer en contact avec Donovan Desmond, sa cible sur l'opération « Strix ». Mais l'homme politique demeure insaisissable. Anya demeure peut-être finalement la meilleure carte à jouer pour mener à bien la mission de son « père ».",
          releaseDate: new Date("2022-02-10"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 8",
          image: "https://assets.bubblebd.com/img/kfeew81brk/db1ejwq0pg.jpg",
          description:
            "Sauvez le monde avec l'élite des agents (très) spéciaux : la famille Forger ! Une comédie d'espionnage pétillante ! Gagnants d'une croisière à bord d'un paquebot de luxe, Loid et Anya embarquent sur le Princess Lorelei en même temps que Yor, chargée d'une mission ultra-dangereuse. Sous couvert de son travail à la mairie, la jeune femme doit en effet assurer la protection de l'épouse d'un mafieux assassiné...",
          releaseDate: new Date("2022-06-01"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 9",
          image: "https://assets.bubblebd.com/img/2vv344mgqh/64wq52yk3q.jpg",
          description:
            "En pleine mer, le paquebot Princesse Lorelei est le théâtre d'un affrontement sanglant entre Yor et les tueurs envoyés aux trousses de la femme qu'elle doit protéger. Loin de se la couler douce, Loid et Anya se retrouvent eux aussi pris dans la tourmente.",
          releaseDate: new Date("2022-09-01"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 10",
          image: "https://assets.bubblebd.com/img/uhg3nw4zr5/e4gb4y3rz4.jpg",
          description:
            "Loid, Yor et Anya se rapproche de plus en plus, et devient une vraie famille, mais notre espion est encore en mission. Le passé de notre espion va être enfin dévoilé dans ce tome, entre la guerre, et la perte de ses proches, un passé douloureux. Yor va faire aussi une rencontre inattendue.",
          releaseDate: new Date("2022-12-01"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 2,
          title: "tome 11",
          image: "https://assets.bubblebd.com/img/ecdk49yphx/acdwslh0ep.jpg",
          description:
            "La rencontre entre Yor et Mélinda Desmond, l'épouse de la cible de Loid/Twilight, semble marquer un tournant dans la mission que l'espion doit accomplir, comme pour la fausse famille Forger. Anya espère en effet devancer Yor à la course à l'invitation chez les Desmond.",
          releaseDate: new Date("2023-10-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 3,
          title: "tome 105",
          image: "https://assets.bubblebd.com/img/bvkidu3kqh/0zlechycxu.jpg",
          description:
            "Luffy a rejoint le groupe des quatre Empereurs ! Dans un monde bouleversé par l’avènement d’une nouvelle ère, l’équipage de Chapeau de paille quitte le pays des Wa et entame une nouvelle étape de son périple. Quelles péripéties peuvent bien l’attendre ?! Les aventures de Luffy à la poursuite du One Piece continuent !",
          releaseDate: new Date("2023-10-01"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 3,
          title: "tome 106",
          image: "https://assets.bubblebd.com/img/r4vjda1y2e/0i84syv5bf.jpg",
          description:
            "Parvenu sur l’île futuriste d’Egg Head, l’équipage de Chapeau de paille découvre le laboratoire du docteur Végapunk ainsi qu’une multitude de technologies inconnues qui stimulent le goût de Luffy pour l’exploration ! Mais voilà que le CP-0 fait irruption dans le but de supprimer le génial inventeur ! Les aventures de Luffy à la poursuite du One Piece continuent !",
          releaseDate: new Date("2023-12-06"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 4,
          title: "tome 26",
          image: "https://assets.bubblebd.com/img/hstb6n8h40/pxsf4a11o3.jpg",
          description:
            "Des milliers d'années après la pétrification de l'espace humaine, Senku atteint enfin l'espace, comme son père le souhaitait avant lui ! Le plan de vol jusqu'à la Lune ne se déroule pas comme prévu et lui réserve quelques surprises ! Qui est véritablement Why-man ?! Quel sera le destin de l'humanité ?! Un final en fanfare pour cette incroyable épopée scientifique, à l'envergure absolument inouïe! ",
          releaseDate: new Date("2023-10-18"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 5,
          title: "tome 13",
          image: "https://assets.bubblebd.com/img/ch2ol3pcps/jfcan2nao5.jpg",
          description:
            "enji meurt d'envie de révéler au monde entier qu'il est Chainsaw Man, espérant ainsi faire monter sa cote auprès des filles. Mais pour une raison inconnue, le mystérieux Yoshida tente de l'en dissuader... De son côté, Asa rend visite à Yûko, sa nouvelle amie.",
          releaseDate: new Date("2023-07-05"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 6,
          title: "tome 21",
          image: "https://assets.bubblebd.com/img/0b37cvz8k3/4ks3o99cq7.jpg",
          description:
            "Engloutir les ténèbres pour mieux les combattre !Les affrontements violents font rage dans l'arène de Sendai... Après Megumi et Yuji à Tokyo, c'est à Yuta, l'exorciste le plus brillant de sa génération, d'entrer en scène ! Le voilà aux prises avec trois ennemis aux pouvoirs des plus dévastateurs... De son côté, Kinji rencontre un certain Charles Bernard, un jeune mangaka désabusé qui le supplie de se battre contre lui afin de lui redonner l'inspiration... Il n'en fallait pas plus pour que l'élève de terminale ne déploie son redoutable territoire ! Monstres assoiffés de sang, combats épiques et magie surpuissante : découvrez la nouvelle bombe dark fantasy ! Au cœur d'une lutte millénaire entre exorcistes et démons, comment garder son humanité alors même que le mal se tapit au plus profond de soi ?",
          releaseDate: new Date("2023-10-05"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 7,
          title: "tome 1",
          image: "https://assets.bubblebd.com/img/5txrohx62h/q93ytf3p5f.jpg",
          description:
            "Le mensonge est une arme pour se défendre dans le monde du show-biz. Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Ai Hoshino, une chanteuse au succès grandissant dont il est un fan absolu. Ces deux-là vont peut-être se rencontrer dans des circonstances peu favorables, mais cet évènement changera leur vie à jamais !",
          releaseDate: new Date("2022-01-13"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 7,
          title: "tome 2",
          image: "https://assets.bubblebd.com/img/cjlib9azrx/pkfp044ea5.jpg",
          description:
            "Dans le monde du spectacle, le mensonge est une arme !Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Aï Hoshino, une chanteuse au succès grandissant dont il est un fan absolu. Ces deux-là vont se rencontrer dans des circonstances exceptionnelles, ce qui changera leur vie à jamais !",
          releaseDate: new Date("2021-01-13"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 7,
          title: "tome 3",
          image: "https://assets.bubblebd.com/img/e40w5u7qzw/7x11uqwfyr.jpg",
          description:
            "Les jumeaux poursuivent leurs études dans un lycée artistique. Entourée de jeunes artistes ayant tous déjà un pied dans le milieu, Ruby est impatiente d’enfin démarrer sa carrière de chanteuse de girls band. Aqua, lui, rencontre un producteur sur le tournage d’une série. Ce dernier lui propose de participer à une émission de téléréalité de rencontre. Il en viendra à se demander ce qu’est la « réalité » selon le monde du spectacle...",
          releaseDate: new Date("2022-05-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 7,
          title: "tome 4",
          image: "https://assets.bubblebd.com/img/pgoq2ov2pl/dt79yr7wbl.jpg",
          description:
            "Dans le monde du spectacle, le mensonge est une arme !Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Aï Hoshino, une chanteuse au succès grandissant dont il est un fan absolu. Ces deux-là vont se rencontrer dans des circonstances exceptionnelles, ce qui changera leur vie à jamais !",
          releaseDate: new Date("2022-09-22"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 7,
          title: "tome 5",
          image: "https://assets.bubblebd.com/img/mn9ceafbik/g6qgggy0th.jpg",
          description:
            "Dans le monde du spectacle, le mensonge est une arme !Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Aï Hoshino, une chanteuse au succès grandissant dont il est un fan absolu. Ces deux-là vont se rencontrer dans des circonstances exceptionnelles, ce qui changera leur vie à jamais !",
          releaseDate: new Date("2022-11-10"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 7,
          title: "tome 6",
          image: "https://assets.bubblebd.com/img/cfm4dhp9tu/y4wo7bidb3.jpg",
          description:
            "Dans le monde du spectacle, le mensonge est une arme !Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Aï Hoshino, une chanteuse au succès grandissant dont il est un fan absolu. Ces deux-là vont se rencontrer dans des circonstances exceptionnelles, ce qui changera leur vie à jamais !",
          releaseDate: new Date("2023-02-09"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 7,
          title: "tome 7",
          image: "https://assets.bubblebd.com/img/n7zp7ls4bh/3y9db7397t.jpg",
          description:
            "Dans le monde du spectacle, le mensonge est une arme !Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Aï Hoshino, une chanteuse au succès grandissant dont il est un fan absolu. Ces deux-là vont se rencontrer dans des circonstances exceptionnelles, ce qui changera leur vie à jamais !",
          releaseDate: new Date("2023-05-11"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 7,
          title: "tome 8",
          image: "https://assets.bubblebd.com/img/llpbhr7ppv/bmzeeie9ef.jpg",
          description:
            "Dans le monde du spectacle, le mensonge est une arme !Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Aï Hoshino, une chanteuse au succès grandissant dont il est un fan absolu. Ces deux-là vont se rencontrer dans des circonstances exceptionnelles, ce qui changera leur vie à jamais !",
          releaseDate: new Date("2023-08-07"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 7,
          title: "tome 9",
          image: "https://assets.bubblebd.com/img/5yg6dyi6fs/d2cdcvzxlp.jpg",
          description:
            "Dans le monde du spectacle, le mensonge est une arme !Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Aï Hoshino, une chanteuse au succès grandissant dont il est un fan absolu. Ces deux-là vont se rencontrer dans des circonstances exceptionnelles, ce qui changera leur vie à jamais !",
          releaseDate: new Date("2023-11-09"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 1",
          image: "https://assets.bubblebd.com/img/w3wcpblgzc/l6pn426c7o.jpg",
          description:
            "Au pied de la ville d’Orse s’étend l’abysse, une faille gigantesque à la profondeur inconnue habitée par d’étranges créatures et emplie d’antiques reliques. Depuis des années, ce gouffre attire de nombreux aventuriers séduits par l’aura de mystère qui l’entoure. On les appelle « les caverniers ». C’est ici que vit Rico, une jeune orpheline obsédée par l’Abysse et désirant marcher dans les traces de sa mère. Un jour, lors de ses prospections, elle découvre le corps inanimé d’un jeune garçon. Elle n’imagine alors pas à quel point cette découverte va changer sa vie et accélérer son destin.",
          releaseDate: new Date("2018-05-18"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 2",
          image: "https://assets.bubblebd.com/img/iczpx0cg1a/9rrpdvb4k1.jpg",
          description:
            "Au pied de la ville d'Orse s'étend l'Abysse, une faille gigantesque à la profondeur inconnue habitée par d'étranges créatures et emplie d'antiques reliques. Depuis des années, ce gouffre attire de nombreux aventuriers séduits par l'aura de mystère qui l'entoure et qui se font appeler les caverniers . C'est ici que vit Rico, une jeune orpheline obsédée par l'Abysse et désirant marcher dans les traces de sa mère qui y a disparu.",
          releaseDate: new Date("2018-07-06"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 3",
          image: "https://assets.bubblebd.com/img/1hs53uddzx/h0ou7xm70o.jpg",
          description:
            "Suite à la destruction du village d'Ilblu, Rico, Legu et Nanachi poursuivent leur aventure toujours plus loin dans les profondeurs de l'abysse.",
          releaseDate: new Date("2019-09-21"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 4",
          image: "https://assets.bubblebd.com/img/hhbfxlvzzh/jrjns8wusa.jpg",
          description:
            "Suite à la destruction du village d'Ilblu, Rico, Legu et Nanachi poursuivent leur aventure toujours plus loin dans les profondeurs de l'abysse.",
          releaseDate: new Date("2019-01-18"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 5",
          image: "https://assets.bubblebd.com/img/wfjpt2ztc4/yoco0comjh.jpg",
          description:
            "Suite à la destruction du village d'Ilblu, Rico, Legu et Nanachi poursuivent leur aventure toujours plus loin dans les profondeurs de l'abysse.",
          releaseDate: new Date("2019-04-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 6",
          image: "https://assets.bubblebd.com/img/iccmlrnqfi/9pkyzyzx0p.jpg",
          description:
            "Suite à la destruction du village d'Ilblu, Rico, Legu et Nanachi poursuivent leur aventure toujours plus loin dans les profondeurs de l'abysse.",
          releaseDate: new Date("2019-07-05"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 7",
          image: "https://assets.bubblebd.com/img/zpcuvsopkg/ppus5jyd4k.jpg",
          description:
            "En suivant la piste de Prushka, Rico, Légu et Nanachi sont parvenus à Ilbru, le village des ombres. Il s’y échange des choses et des non-choses, et si on est prêt à y mettre le prix, tous les voeux peuvent y être exaucés. Un ragoût suspicieux a amené nos trois amis à se séparer, et lorsque Rico sort finalement de l’auberge pour retrouver Légu et Nanachi, ce dernier est déjà dans une situation qui semble irréversible...",
          releaseDate: new Date("2019-10-25"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 8",
          image: "https://assets.bubblebd.com/img/ov1vluhht1/0io1n55nux.jpg",
          description:
            "Suite à la destruction du village d'Ilblu, Rico, Legu et Nanachi poursuivent leur aventure toujours plus loin dans les profondeurs de l'abysse.",
          releaseDate: new Date("2020-02-28"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 9",
          image: "https://assets.bubblebd.com/img/7mjpe9kcmb/anuhojqrc7.jpg",
          description:
            "Suite à la destruction du village d'Ilblu, Rico, Legu et Nanachi poursuivent leur aventure toujours plus loin dans les profondeurs de l'abysse.",
          releaseDate: new Date("2021-02-26"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 10",
          image: "https://assets.bubblebd.com/img/4kbgv0cvxe/c8ib4fajpm.jpg",
          description:
            "Suite à la destruction du village d'Ilblu, Rico, Legu et Nanachi poursuivent leur aventure toujours plus loin dans les profondeurs de l'abysse.",
          releaseDate: new Date("2022-10-28"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 8,
          title: "tome 11",
          image: "https://assets.bubblebd.com/img/9uc2n04alc/b4283173ik.jpg",
          description:
            "Suite à la destruction du village d'Ilblu, Rico, Legu et Nanachi poursuivent leur aventure toujours plus loin dans les profondeurs de l'abysse.",
          releaseDate: new Date("2023-09-29"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 9,
          title: "tome 17",
          image: "https://assets.bubblebd.com/img/xuujymw4kn/1anzdkxfwy.jpg",
          description:
            "Le combat contre Innocent Zero bat son pleins, malheureusement, ils ce trouvent tous en difficultés. Que va t'il ce passer par la suite, et pourront ils vaincre de dernier ennemis?",
          releaseDate: new Date("2023-11-08"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 10,
          title: "tome 1",
          image: "https://assets.bubblebd.com/img/y6tz3emcuc/je9dvdmy3j.jpg",
          description:
            "Yoon bum, un jeune homme frêle et effacé, tombe sous le charme de Sangwoo, un camarade d’école très populaire. Quelques années plus tard, après avoir fait leur service militaire dans la même promo, Yoon bum n’arrive plus à restreindre ses sentiments et s’introduit chez lui dans l’espoir de rasséréner son amour obsessionnel. Seulement, il ne se doutait pas que Sangwoo cachait un tel secret. Secret qu’il aurait mieux fait de ne jamais découvrir...",
          releaseDate: new Date("2020-11-27"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 10,
          title: "tome 2",
          image: "https://assets.bubblebd.com/img/lsmtlpfkwj/5k2r1hs5fd.jpg",
          description:
            "Yoon bum, un jeune homme frêle et effacé, tombe sous le charme de Sangwoo, un camarade d’école très populaire. Quelques années plus tard, après avoir fait leur service militaire dans la même promo, Yoon bum n’arrive plus à restreindre ses sentiments et s’introduit chez lui dans l’espoir de rasséréner son amour obsessionnel. Seulement, il ne se doutait pas que Sangwoo cachait un tel secret. Secret qu’il aurait mieux fait de ne jamais découvrir...",
          releaseDate: new Date("2021-04-16"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 10,
          title: "tome 3",
          image: "https://assets.bubblebd.com/img/uafjazrsax/2fxh6ul322.jpg",
          description:
            "Yoon bum, un jeune homme frêle et effacé, tombe sous le charme de Sangwoo, un camarade d’école très populaire. Quelques années plus tard, après avoir fait leur service militaire dans la même promo, Yoon bum n’arrive plus à restreindre ses sentiments et s’introduit chez lui dans l’espoir de rasséréner son amour obsessionnel. Seulement, il ne se doutait pas que Sangwoo cachait un tel secret. Secret qu’il aurait mieux fait de ne jamais découvrir...",
          releaseDate: new Date("2021-10-15"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 10,
          title: "tome 4",
          image: "https://assets.bubblebd.com/img/uclvd5ftw0/3gbh2kglo5.jpg",
          description:
            "Yoon bum, un jeune homme frêle et effacé, tombe sous le charme de Sangwoo, un camarade d’école très populaire. Quelques années plus tard, après avoir fait leur service militaire dans la même promo, Yoon bum n’arrive plus à restreindre ses sentiments et s’introduit chez lui dans l’espoir de rasséréner son amour obsessionnel. Seulement, il ne se doutait pas que Sangwoo cachait un tel secret. Secret qu’il aurait mieux fait de ne jamais découvrir...",
          releaseDate: new Date("2022-05-15"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 10,
          title: "tome 5",
          image: "https://assets.bubblebd.com/img/ye6g497kft/6p3qm4mzn6.jpg",
          description:
            "Yoon bum, un jeune homme frêle et effacé, tombe sous le charme de Sangwoo, un camarade d’école très populaire. Quelques années plus tard, après avoir fait leur service militaire dans la même promo, Yoon bum n’arrive plus à restreindre ses sentiments et s’introduit chez lui dans l’espoir de rasséréner son amour obsessionnel. Seulement, il ne se doutait pas que Sangwoo cachait un tel secret. Secret qu’il aurait mieux fait de ne jamais découvrir...",
          releaseDate: new Date("2023-06-09"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 10,
          title: "tome 6",
          image: "https://assets.bubblebd.com/img/z6b9f0m2vr/pbvvzi6uag.jpg",
          description:
            "Yoon bum, un jeune homme frêle et effacé, tombe sous le charme de Sangwoo, un camarade d’école très populaire. Quelques années plus tard, après avoir fait leur service militaire dans la même promo, Yoon bum n’arrive plus à restreindre ses sentiments et s’introduit chez lui dans l’espoir de rasséréner son amour obsessionnel. Seulement, il ne se doutait pas que Sangwoo cachait un tel secret. Secret qu’il aurait mieux fait de ne jamais découvrir...",
          releaseDate: new Date("2023-09-29"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 11,
          title: "tome 1",
          image: "https://assets.bubblebd.com/img/2lutqq09ab/xhjp66mbvo.jpg",
          description:
            "Dans un univers imaginaire, trois collégiennes, Hikaru, Umi et Fû sont confrontées aux forces du mal qui ont envahi un monde parallèle. Arrachées à leur vie quotidienne de Tokyo, elles deviennent des héroïnes combattant pour le défendre, des Magic Knight. Ensemble, les trois amies vont apprendre les valeurs de l'amitié et du courage. Un scénario fantastique et drôle doublé d'un style graphique particulier caractérise ce grand succès d'heroic-fantasy teinté d'orientalisme.",
          releaseDate: new Date("2020-11-18"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 11,
          title: "tome 2",
          image: "https://assets.bubblebd.com/img/l6u0kmmb7q/smx9j324sa.jpg",
          description:
            "Dans un univers imaginaire, trois collégiennes, Hikaru, Umi et Fû sont confrontées aux forces du mal qui ont envahi un monde parallèle. Arrachées à leur vie quotidienne de Tokyo, elles deviennent des héroïnes combattant pour le défendre, des Magic Knight. Ensemble, les trois amies vont apprendre les valeurs de l'amitié et du courage. Un scénario fantastique et drôle doublé d'un style graphique particulier caractérise ce grand succès d'heroic-fantasy teinté d'orientalisme.",
          releaseDate: new Date("2021-02-17"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 11,
          title: "tome 3",
          image: "https://assets.bubblebd.com/img/qm9sfudngt/hyaleea78o.jpg",
          description:
            "Dans un univers imaginaire, trois collégiennes, Hikaru, Umi et Fû sont confrontées aux forces du mal qui ont envahi un monde parallèle. Arrachées à leur vie quotidienne de Tokyo, elles deviennent des héroïnes combattant pour le défendre, des Magic Knight. Ensemble, les trois amies vont apprendre les valeurs de l'amitié et du courage. Un scénario fantastique et drôle doublé d'un style graphique particulier caractérise ce grand succès d'heroic-fantasy teinté d'orientalisme.",
          releaseDate: new Date("2021-04-21"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 11,
          title: "tome 4",
          image: "https://assets.bubblebd.com/img/xp7srrm05d/8em8van544.jpg",
          description:
            "Dans un univers imaginaire, trois collégiennes, Hikaru, Umi et Fû sont confrontées aux forces du mal qui ont envahi un monde parallèle. Arrachées à leur vie quotidienne de Tokyo, elles deviennent des héroïnes combattant pour le défendre, des Magic Knight. Ensemble, les trois amies vont apprendre les valeurs de l'amitié et du courage. Un scénario fantastique et drôle doublé d'un style graphique particulier caractérise ce grand succès d'heroic-fantasy teinté d'orientalisme.",
          releaseDate: new Date("2021-06-23"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 11,
          title: "tome 5",
          image: "https://assets.bubblebd.com/img/krpjvikmr7/2xbzazho80.jpg",
          description:
            "Dans un univers imaginaire, trois collégiennes, Hikaru, Umi et Fû sont confrontées aux forces du mal qui ont envahi un monde parallèle. Arrachées à leur vie quotidienne de Tokyo, elles deviennent des héroïnes combattant pour le défendre, des Magic Knight. Ensemble, les trois amies vont apprendre les valeurs de l'amitié et du courage. Un scénario fantastique et drôle doublé d'un style graphique particulier caractérise ce grand succès d'heroic-fantasy teinté d'orientalisme.",
          releaseDate: new Date("2021-09-15"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 11,
          title: "tome 6",
          image: "https://assets.bubblebd.com/img/0ljgayyjh2/ohxmzmft8o.jpg",
          description:
            "Dans un univers imaginaire, trois collégiennes, Hikaru, Umi et Fû sont confrontées aux forces du mal qui ont envahi un monde parallèle. Arrachées à leur vie quotidienne de Tokyo, elles deviennent des héroïnes combattant pour le défendre, des Magic Knight. Ensemble, les trois amies vont apprendre les valeurs de l'amitié et du courage. Un scénario fantastique et drôle doublé d'un style graphique particulier caractérise ce grand succès d'heroic-fantasy teinté d'orientalisme.",
          releaseDate: new Date("2021-11-24"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 12,
          title: "tome 28",
          image: "https://assets.bubblebd.com/img/x9bhct58i7/p5uggov8bh.jpg",
          description:
            "Saitama est un jeune homme si puissant qu'il est capable d'éliminer ses adversaires d'un seul coup de poing. On le surnomme One-Punch Man. Il est si fort, que l'euphorie du succès cède place à l'ennui : les victoires ont perdu de leur saveur. Qui pourra lui offrir un véritable combat ?",
          releaseDate: new Date("2023-11-09"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 13,
          title: "tome 37",
          image: "https://assets.bubblebd.com/img/g44yw7id45/fw7jhuhpzk.jpg",
          description:
            "Le piège est en place ! Le stratagème des héros a fonctionné, et leurs ennemis sont maintenant éparpillés dans différentes zones de combat, où des adversaires à leur mesure les attendent. Tandis que Shoto tente d'arrêter son frère, l'équipe d'Endeavor et Hawks affronte le terrible All for One...Mais les choses se corsent lorsque Deku, qui devait assister Best Jeanist et Mirko contre Tomura Shigaraki, est attiré par Himiko dans le mauvais portail !Retrouvez les super-héros du manga phénomène My Hero Academia !",
          releaseDate: new Date("2023-11-02"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 14,
          title: "tome 1",
          image: "https://assets.bubblebd.com/img/tr08gnsinb/lseh0qlimz.jpg",
          description:
            "Shoko Nishimiya est sourde depuis la naissance. Même équipée d'un appareil auditif, elle peine à saisir les conversations, à comprendre ce qui se passe autour d'elle. Effrayé par ce handicap, son père a fini par l'abandonner, laissant sa mère l'élever seule. Quand Shoko est transférée dans une nouvelle école, elle fait de son mieux pour dépasser ce handicap, mais malgré ses efforts pour s'intégrer dans ce nouvel environnement, rien n'y fait : les persécutions se multiplient, menées par Shoya Ishida, le leader de la classe.",
          releaseDate: new Date("2015-01-22"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 14,
          title: "tome 2",
          image: "https://assets.bubblebd.com/img/o0ihtcyqon/yuizorcg5q.jpg",
          description:
            "Pour Shoya, devenu le nouveau souffre-douleur de sa classe, rien ne change après le départ de Shoko. Pire, le jeune garçon se rend compte qu’elle faisait preuve de gentillesse à son égard et se sent d’autant plus coupable ! Mis à l’écart pendant toute sa scolarité, il ne parvient plus à se lier aux autres. Il se coupe du monde et finit par perdre toute envie de vivre. Mais l’adolescent n’a jamais oublié la jeune sourde. Il prend donc la résolution de la retrouver pour lui présenter ses excuses avant de mettre fin à ses jours…",
          releaseDate: new Date("2015-03-12"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 14,
          title: "tome 3",
          image: "https://assets.bubblebd.com/img/3zimdbziut/sc8wq11b1z.jpg",
          description:
            "Jusqu'au jour où la brimade de trop provoque une plainte de la famille de Shoko, ainsi que l'intervention du directeur de l'école. Ce jour-là, tout bascule pour Shoya : ses camarades, qui jusqu'ici ne manquaient pas eux non plus une occasion de tourmenter la jeune fille, vont se retourner contre lui et le désigner comme seul responsable... ",
          releaseDate: new Date("2015-05-15"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 14,
          title: "tome 4",
          image: "https://assets.bubblebd.com/img/0grsjc7uix/4b7vxqysqm.jpg",
          description:
            "Shoko Nishimiya est sourde depuis la naissance. Même équipée d'un appareil auditif, elle peine à saisir les conversations, à comprendre ce qui se passe autour d'elle. Effrayé par ce handicap, son père a fini par l'abandonner, laissant sa mère l'élever seule. Quand Shoko est transférée dans une nouvelle école, elle fait de son mieux pour dépasser ce handicap, mais malgré ses efforts pour s'intégrer dans ce nouvel environnement, rien n'y fait : les persécutions se multiplient, menées par Shoya Ishida, le leader de la classe.",
          releaseDate: new Date("2015-07-02"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 14,
          title: "tome 5",
          image: "https://assets.bubblebd.com/img/9zy7jbskjd/wq0335h22q.jpg",
          description:
            "Pour Shoya, devenu le nouveau souffre-douleur de sa classe, rien ne change après le départ de Shoko. Pire, le jeune garçon se rend compte qu'elle faisait preuve de gentillesse à son égard et se sent d'autant plus coupable ! Mis à l'écart pendant toute sa scolarité, il ne parvient plus à se lier aux autres. Il se coupe du monde et finit par perdre toute envie de vivre. Mais l'adolescent n'a jamais oublié la jeune sourde. Il prend donc la résolution de la retrouver pour lui présenter ses excuses avant de mettre fin à ses jours.",
          releaseDate: new Date("2015-10-08"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 14,
          title: "tome 6",
          image: "https://assets.bubblebd.com/img/hp7m8bzczv/m90vf68p1m.jpg",
          description:
            "Pour Shoya, devenu le nouveau souffre-douleur de sa classe, rien ne change après le départ de Shoko. Pire, le jeune garçon se rend compte qu'elle faisait preuve de gentillesse à son égard et se sent d'autant plus coupable ! Mis à l'écart pendant toute sa scolarité, il ne parvient plus à se lier aux autres. Il se coupe du monde et finit par perdre toute envie de vivre. Mais l'adolescent n'a jamais oublié la jeune sourde. Il prend donc la résolution de la retrouver pour lui présenter ses excuses avant de mettre fin à ses jours.",
          releaseDate: new Date("2016-01-14"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 14,
          title: "tome 7",
          image: "https://assets.bubblebd.com/img/6etgrsuuwy/cjw0zobn99.jpg",
          description:
            "Shoya se retrouve embarqué dans une sortie au parc d'attractions, qu'il commence à apprécier malgré la présence de Miki et de Naoka. Mais les choses dérapent lorsqu'il reconnaît Kazuki, son ancien ami d'enfance, à l'un des stands. Quelques jours plus tard, un triste événement vient frapper les Nishimiya : le décès de la grand-mère de Shoko, véritable pilier de la famille. Alors que tout le monde tente de remonter le moral à Yuzuru, celle-ci décide d'aider sa soeur à faire sa déclaration. De son côté, Shoya accepte de participer au tournage du film de Tomohiro. à condition que la jeune malentendante fasse partie de l'aventure !",
          releaseDate: new Date("2016-04-28"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 15,
          title: "tome 1",
          image: "https://assets.bubblebd.com/img/gbyn8l41vc/z31d2v4rvc.jpg",
          description:
            "Bien que toujours en proie aux souvenirs de son passé et rongé par le remord des violences qu'il faisait subir à son ex petit ami Yumi, Kannosuke Hayashida a finalement accepté les sentiments amoureux de son collègue de travail Ayuma Shuuna avec qui il avait débuté une relation uniquement basée sur le sexe. C'est alors que Ayuma est transféré à Osaka pour une mission de deux ans. Commence ainsi une relation longue distance entre les deux hommes.",
          releaseDate: new Date("2021-02-26"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 15,
          title: "tome 2",
          image: "https://assets.bubblebd.com/img/9jhe3ffyye/efl0za1kq7.jpg",
          description:
            "Bien que toujours en proie aux souvenirs de son passé et rongé par le remord des violences qu'il faisait subir à son ex petit ami Yumi, Kannosuke Hayashida a finalement accepté les sentiments amoureux de son collègue de travail Ayuma Shuuna avec qui il avait débuté une relation uniquement basée sur le sexe. C'est alors que Ayuma est transféré à Osaka pour une mission de deux ans. Commence ainsi une relation longue distance entre les deux hommes.",
          releaseDate: new Date("2021-06-25"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 16,
          title: "tome 1",
          image: "https://assets.bubblebd.com/img/hrp0ddazly/406cxu5tvx.jpg",
          description:
            "Les grands affrontements dans le monde des ninjas appartiennent désormais au passé. Le village de Konoha est entré dans une ère de paix. Boruto, le fils du 7e Hokage, vit mal d'être dans l'ombre de son imminent paternel. Il ne se doute pas qu'une nouvelle menace plane sur eux... La légende de la nouvelle génération commence maintenant !",
          releaseDate: new Date("2017-03-03"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 16,
          title: "tome 18",
          image: "https://assets.bubblebd.com/img/tfby2dpqbw/f5mzp6c9dx.jpg",
          description:
            "Après un combat intense et violent avec Code, Boruto ressuscite miraculeusement. Au village de Konoha, les dispositions à prendre pour la suite sont au coeur du sujet... C'est alors que Code en personne apparaît devant Shikamaru et Amado ! Shikamaru va-t-il mettre à exécution un plan secret...?! Le village est de nouveau sous tension !",
          releaseDate: new Date("2023-11-24"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 17,
          title: "tome 1",
          image: "https://assets.bubblebd.com/img/23pmskd62j/dyuvyrxh9y.jpg",
          description:
            "À 26 ans, Takemichi a le sentiment d'avoir déjà raté sa vie. Vivotant de petits boulots ingrats tout juste bons à payer le loyer d'un studio miteux, il se lamente sur le désert de sa vie amoureuse lorsqu'il apprend la mort de Hinata, la seule petite amie qu'il ait eue... La jeune fille et son frère ont été les victimes collatérales d'un règlement de comptes entre les membres d'un gigantesque gang, le Tokyo Manji-kai. Encore sous le choc, Takemichi est à son tour victime d'un accident qui le ramène inexplicablement 12 ans en arrière, lorsqu'il était au collège et se donnait des airs de mauvais garçon. Et si c'était pour lui l'occasion de sauver Hinata ?",
          releaseDate: new Date("2019-04-17"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 17,
          title: "tome 27",
          image: "https://assets.bubblebd.com/img/til8etuanr/tiow84g7xf.jpg",
          description:
            "La guerre est déclarée entre le Toman et le Tenjiku, et le combat s’annonce fratricide à tous les égards. Mais alors que Takemichi se prépare à l’affrontement, la fourberie de Tetta Kisaki s’illustre par une nouvelle tragédie qui frappe de plein fouet le Tokyo Manjikai, laissant hagard le clan entier. Cet événement serait-il à l’origine de la descente aux enfers de Mikey ?",
          releaseDate: new Date("2023-11-08"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 17,
          title: "tome 28",
          image: "https://assets.bubblebd.com/img/6igvzf4j3v/jq3quhyayt.jpg",
          description:
            "La guerre est déclarée entre le Toman et le Tenjiku, et le combat s’annonce fratricide à tous les égards. Mais alors que Takemichi se prépare à l’affrontement, la fourberie de Tetta Kisaki s’illustre par une nouvelle tragédie qui frappe de plein fouet le Tokyo Manjikai, laissant hagard le clan entier. Cet événement serait-il à l’origine de la descente aux enfers de Mikey ?",
          releaseDate: new Date("2023-01-17"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mangaId: 18,
          title: "tome 35",
          image: "https://assets.bubblebd.com/img/bmo56d4gf3/m6c00g0cs6.jpg",
          description:
            "Yuno et Langris affrontent Zenon, le dernier membre de la Triade Sombre. Grâce à leur travail d'équipe, ils parviennent à le mettre en difficulté, mais ce dernier se relève plus fort que jamais. La situation semble alors désespérée... jusqu'à l'arrivée d'un renfort inattendu ! Tandis que le passé de Zenon et le secret de Yuno refont surface, le combat acharné entre ces deux adversaires que tout oppose atteint son paroxysme !",
          releaseDate: new Date("2023-12-06"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("MangaVolumes", null, {});
  },
};
