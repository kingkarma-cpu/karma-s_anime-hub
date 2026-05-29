console.log("Anime HUB JS loaded");
// ================= DATA (UNCHANGED) =================
const animeData = [
  
  {
    name: "Attack on Titan",
    image: "images/aot.jpg",
    desc: "Humans fight giant titanswhile trying to find the true meaning of freedom.",
    watch: "https://animepahe.pw/anime/0c874b49-74db-8561-d507-6e300e0ef4e4"
  },
  {
    name: "One Piece",
    image: "images/onepiece.jpg",
    desc: "A young pirate, Monkey D. Luffy, sets out on a legendary journey to find the ultimate treasure—the One Piece—and become the King of the Pirates. Along the way, he builds a powerful crew and takes on dangerous enemies across the seas ",
    watch: "https://animepahe.pw/anime/15a36fc8-73b9-8c2e-ee5f-fb1bcd4fcdc6",
    trailer: "https://www.youtube.com/embed/YnczpEoeaDM"
  },
  {
    name: "Jujutsu Kaisen",
    image: "images/jjk.jpg",
    desc: "After swallowing a cursed object, Yuji Itadori is thrown into a world of deadly curses and sorcerers. Fighting alongside powerful allies, he risks everything to destroy evil spirits and protect humanity.",
    watch: "https://animepahe.pw/anime/0b4dd3af-a4d8-64f5-284a-d2dbc4456abc"
  },
  {
    name: "Demon Slayer",
    image: "images/demonslayer.jpg",
    desc: "The story follows Tanjiro Kamado, a kind-hearted and hardworking boy who lives peacefully with his family in the mountains. His life is shattered when he returns home one day to find his entire family slaughtered by demons—leaving only his younger sister Nezuko Kamado alive… but transformed into a demon herself and he is dragged into the war between humans and demons for the sake of his sister.",
    watch: "https://animepahe.pw/anime/0d642a53-3610-ed30-1b9d-ca5ee8a92a0f"
  },
  {
    name: "Sakamoto Days",
    image: "images/sakamoto.jfif",
    desc: "",
    watch: "https://animepahe.pw/anime/6fe3d38c-8a4f-46a4-884a-9df0bf90ef2a"
  },
  {
    name: "Black Clover",
    image: "images/blackclover.jfif",
    desc: "Black clover is a story about a boy born without magical pwers in a world where everything is made of magic, Asta has to overcomwe adversity in order to achieve his dream of becoming wizard king",
    watch: "https://animepahe.pw/anime/38183e8f-6e96-6cc3-a84d-0d35327f7b24"
  },
  
  
];

const action = [
  {
    name: "Attack on Titan",
    image: "images/aot.jpg",
    desc: "Humans fight giant titans while uncovering dark secrets about their world.",
    watch: "https://animepahe.pw/anime/0c874b49-74db-8561-d507-6e300e0ef4e4"
  },
  {
    name: "Naruto",
    image: "images/naruto.jpg",
    desc: "**Naruto** follows **Naruto Uzumaki**, a loud and determined young ninja who dreams of becoming the Hokage—the leader of his village. Feared and ignored because he carries the powerful Nine-Tailed Fox, **Kurama**, Naruto grows up lonely but never gives up on earning respect. Alongside teammates like **Sasuke Uchiha** and **Sakura Haruno**, and under the guidance of **Kakashi Hatake**, he takes on missions, faces strong enemies, and grows stronger.The story mixes action with deep themes of friendship, perseverance, and overcoming hatred, making *Naruto* one of the most impactful anime series ever.",
    watch: "https://animepahe.pw/anime/831e69da-dca9-372a-ab2d-374d2c091375"
  },
  {
    name: "Jujutsu Kaisen",
    image: "images/jjk.jpg",
    desc: "A boy enters a dangerous world of curses and sorcerers.",
    watch: "https://animepahe.pw/anime/7c3c31da-3672-eacd-eadf-5354aa234ae6"
  },
    {
    name: "Chainsaw Man",
    image: "images/csman.jfif",
    desc: "A boy bound to a devil gains chainsaw powers and enters a violent world of devil hunters, survival, and twisted desires.",
    watch: "https://animepahe.pw/anime/2ace5b79-4d59-08a8-5964-33589bbd1d45"
  },
  {
    name: "Solo Leveling",
    image: "images/solo.jfif",
    desc: "A weak hunter becomes humanity’s strongest after gaining a mysterious system that allows him to level up endlessly.",
    watch: "https://animepahe.pw/anime/a57b14d1-d0bd-e092-0276-d4d20f7ea28d"
  },
  {
  name: "Fire Force",
  image: "images/fireforc.jfif",
  desc: "Special fire soldiers called Fire Force fight spontaneous human combustion cases while uncovering a dark truth behind the phenomenon.",
  watch: "https://animepahe.pw/anime/02b6081d-c0f5-d2f4-3627-426a908558be"
  },
  {
    name: "Vinland Saga",
    image: "images/vinland.jfif",
    desc: "A Viking warrior’s journey from revenge to redemption in a brutal world of war and survival.",
    watch: "https://animepahe.pw/anime/5cd009f5-096f-f826-1534-355bf85b4f43"
  },
  {
    name: "Hell’s Paradise",
    image: "images/hellsparadise.jfif",
    desc: "Criminals fight terrifying immortal creatures on a mysterious island while searching for the elixir of life.",
    watch: "https://animepahe.pw/anime/9fed4b96-95c5-c8d9-fb32-433af367c61a"
  },
  {
    name: "Tokyo Revengers",
    image: "images/trevengers.jfif",
    desc: "A man travels back in time to stop tragedies and rise through violent delinquent gangs.",
    watch: "https://animepahe.pw/anime/a8e93d2c-a648-b7dd-eba0-c8f0e4b06926"
  },
  {
  name: "Code Geass",
  image: "images/codegeass.jfif",
  desc: "A genius exiled prince gains the power of absolute command and starts a rebellion against a powerful empire while hiding his identity as Zero.",
  watch: "https://animepahe.pw/anime/4658da79-4017-a8f4-c58d-5f56bfa1722b"
},
  {
    name: "Bleach: Thousand-Year Blood War",
    image: "images/TYBW.jfif",
    desc: "Soul Reapers face a deadly war against the Quincy empire threatening all worlds.",
    wacth: "https://animepahe.pw/anime/258961a4-6de1-2c3e-c1e0-0e623e884e63"
  },
  {
    name: "Mob Psycho 100",
    image: "images/mob.jfif",
    desc: "A powerful psychic tries to live normally while hiding emotions that could destroy everything.",
    watch:"https://animepahe.pw/anime/422e6f98-ff7d-42ef-66be-62b9950cdb0b"
  },
  {
    name: "Dragon Ball Super",
    image: "images/dsuper.jpg",
    desc: "Goku and friends face gods, universes, and powerful enemies beyond imagination.",
    watch: "https://animepahe.pw/anime/33684e91-3675-5dbf-d479-828df0ba4085"
  },
  {
    name: "Black Clover",
    image: "images/blackclover.jfif",
    desc: "A magicless boy aims to become the Wizard King through hard work and rival battles.",
    watch: "https://animepahe.pw/anime/6365dbe0-5a27-4369-b166-07a734cd6299"
  },
  {
    name: "Akudama Drive",
    image: "images/akdrive.jfif",
    desc: "Criminals known as Akudama are forced into a deadly mission in a futuristic cyberpunk city.",
    watch: "https://animepahe.pw/anime/11398112-e073-1851-093d-47c86ec38a77"
  },
  {
    name: "Parasyte: The Maxim",
    image: "images/parasyte.jfif",
    desc: "A boy shares his body with a parasite and fights other human-devouring creatures.",
    watch:"https://animepahe.pw/anime/47783687-78ae-d604-a4d8-67d2b2a877f9"
  },
  {
    name: "God of High School",
    image: "images/gohs.jfif",
    desc: "A martial arts tournament hides supernatural powers and divine battles.",
    watch: "https://animepahe.pw/anime/59dff1ee-2271-3762-1c83-cf4cd2b8402f"
  },
  {
    name: "Akame ga Kill!",
    image: "images/akame.jfif",
    desc: "An assassin group fights a corrupt empire using deadly unique weapons.",
    watch: "https://animepahe.pw/anime/fc14c84b-e618-b9e5-749d-7aa081ad7eec"
  },
  {
    name: "Noragami",
    image: "images/noragami.jfif",
    desc: "A forgotten god struggles to gain followers while fighting evil spirits.",
    watch: "https://animepahe.pw/anime/d0458879-f74d-a36c-d1b0-8282f42710e8"
  },
  {
    name: "Fate/Zero",
    image: "images/fatezero.jfif",
    desc: "Mages summon legendary heroes to fight in a deadly war for the Holy Grail.",
    watch: "https://animepahe.pw/anime/7bda66c9-97b1-acae-5e1f-592d045a9b69"
  },
  {
    name: "Chainsaw Man: Reze Arc",
    image: "images/csmreze.jpg",
    desc: "A lesser-known continuation exploring darker missions and unstable devil contracts.",
    watch: "https://animepahe.pw/anime/03da0c1d-0728-5e9b-14da-7b983246bd20",
    hidden: true
  }
];

const adventure = [
  {
    name: "One Piece",
    image: "images/onepiece.jpg",
    desc: "A young pirate, Monkey D. Luffy, sets out on a legendary journey to find the ultimate treasure—the One Piece—and become the King of the Pirates. Along the way, he builds a powerful crew and takes on dangerous enemies across the seas ",
    watch: "https://animepahe.pw/anime/617955fb-74aa-d72e-427e-fa393549ab45",
    trailer: "https://www.youtube.com/embed/YnczpEoeaDM"
  },
  {
    name: "Made in Abyss",
    image: "images/madeinabyss.jfif",
    desc: "A journey into a mysterious and dangerous abyss.",
    watch: "https://animepahe.pw/anime/7671fd9b-9e2e-3bc6-1898-2d3d793ca056"
  },
    {
    name: "Hunter x Hunter",
    image: "images/hh.jfif",
    desc: "A boy sets out to become a Hunter while searching for his father, facing deadly trials and powerful enemies along the way.",
    watch: "https://animepahe.pw/anime/a65f0d63-8932-0e80-dc70-bd11266ec8b4"
  },
  {
    name: "Attack on Titan",
    image: "images/aot.jpg",
    desc: "Humanity fights giant Titans while uncovering dark truths about their world and its history.",
    watch: "https://animepahe.pw/anime/ced4d991-e216-d861-00b7-47412f87c142"
  },
  {
    name: "Fullmetal Alchemist: Brotherhood",
    image: "images/fmab.jfif",
    desc: "Two brothers use forbidden alchemy in search of the Philosopher’s Stone to restore their bodies after a failed ritual.",
    watch: "https://animepahe.pw/anime/faefb621-9523-02a9-7374-e2ddac737623"
  },
  {
    name: "Vinland Saga",
    image: "images/vinland.jfif",
    desc: "A Viking warrior travels through war and revenge, eventually questioning the meaning of strength and peace.",
    watch: "https://animepahe.pw/anime/5cd009f5-096f-f826-1534-355bf85b4f43"
  },
  {
    name: "Dr. Stone",
    image: "images/drstone.jfif",
    desc: "A genius boy uses science to rebuild civilization after humanity is mysteriously turned to stone.",
    watch: "https://animepahe.pw/anime/01a18fed-ab33-ccf0-d63e-6a53608593e5"
  },
  {
    name: "Magi: The Labyrinth of Magic",
    image: "images/magi.jpg",
    desc: "A boy explores mysterious dungeons filled with magic, kings, and powerful ancient forces.",
    watch: "https://animepahe.pw/anime/a0c511a5-e671-32b0-7d07-a6adf9357057"
  },
  {
    name: "The Seven Deadly Sins",
    image: "images/sevendeadlysins.jpg",
    desc: "A group of legendary knights reunites to save a kingdom from corruption and war."
  },
  {
    name: "Dororo",
    image: "images/dororo.jfif",
    desc: "A boy born without body parts due to a demon pact travels to reclaim his stolen body parts."
  },
  {
    name: "Goblin Slayer",
    image: "images/goblinslayer.jpg",
    desc: "A warrior dedicates his life to hunting goblins after a tragic childhood event."
  },
  {
    name: "Ranking of Kings",
    image: "images/rofkings.jfif",
    desc: "A deaf and weak prince overcomes betrayal and challenges to prove his worth as a king."
  },
  {
    name: "Black Clover",
    image: "images/blackclover.jpg",
    desc: "A boy without magic aims to become the Wizard King through determination and rivalry."
  },
  {
    name: "Fairy Tail",
    image: "images/ftail.jfif",
    desc: "A mage guild embarks on magical adventures filled with friendship, battles, and ancient threats."
  },
  {
    name: "Tower of God",
    image: "images/tog.jfif",
    desc: "A boy climbs a mysterious tower where each floor holds deadly trials and hidden truths."
  },
  {
    name: "God of High School",
    image: "images/goh.jpg",
    desc: "A martial arts tournament hides supernatural powers and divine battles."
  },
  {
    name: "Nausicaä of the Valley of the Wind",
    image: "images/nausica.jfif",
    desc: "A princess fights to protect her world from toxic nature and war-driven destruction."
  },
  {
    name: "Castlevania",
    image: "images/castlevania.jfif",
    desc: "A vampire hunter fights Dracula’s army in a dark medieval fantasy world."
  },
  {
    name: "Fate/Zero",
    image: "images/fatezero.jfif",
    desc: "Mages summon legendary heroes to fight in a deadly war for the Holy Grail."
  },
  {
    name: "Spice and Wolf",
    image: "images/spice.jfif",
    desc: "A traveling merchant journeys with a wolf deity through trade, adventure, and danger."
  }
];

const recent = [
  {
    name: "One Piece",
    image: "images/onepiece.jpg",
    desc: "A young pirate, Monkey D. Luffy, sets out on a legendary journey to find the ultimate treasure—the One Piece—and become the King of the Pirates. Along the way, he builds a powerful crew and takes on dangerous enemies across the seas ",
    watch: "https://animepahe.pw/anime/617955fb-74aa-d72e-427e-fa393549ab45",
    trailer: "https://www.youtube.com/embed/YnczpEoeaDM"
  },
  {
    name: "Witch Hat Atelier",
    image: "images/witchat.jfif",
    desc: "Witch hat Atelier follows a girl who dreams of becoming a witch. After discovering the hidden truth behind magic and accidentally turning her mom into stone, she becomes an apprentice witch and sets out to master magic while uncovering dangerous secrets",
    watch: "https://animepahe.pw/anime/4dd7ef34-ef7f-9bef-7397-7bf3da186d81"
  },
  {
  name: "JoJo's Bizarre Adventure Steel Ball Run",
  image: "images/steelballrun.jpg",
  desc: "Johnny Joestar joins a cross-country horse race across America, competing against dangerous opponents while uncovering a mysterious power tied to the Spin and ancient relics."
  },
{
  name: "Black Clover",
  image: "images/blackclover.jfif",
  desc: "Asta continues his journey to become the Wizard King, pushing beyond his limits as new threats emerge that challenge the entire Clover Kingdom."
},
{
  name: "Dandadan",
  image: "images/dandadan.jfif",
  desc: "Two students dive into a chaotic world of aliens and spirits, battling supernatural threats with unpredictable powers and fast-paced action."
},
{
  name: "Frieren",
  image: "images/frieren.jfif",
  desc: "An elf mage reflects on the passage of time as she journeys through a world shaped by past heroes, forming new bonds while understanding human emotions."
},
{
  name: "Sakamoto Days",
  image: "images/sakamoto.jfif",
  desc: "A retired legendary assassin now living a peaceful life is forced back into action as enemies from his past resurface, leading to intense and stylish fights."
},
{
  name: "Blue Lock",
  image: "images/block.jfif",
  desc: "Japan’s most talented strikers compete in a brutal training program designed to create the ultimate ego-driven forward capable of dominating world football."
},
{
  name: "Mushoku Tensei",
  image: "images/mushoku.jpg",
  desc: "After being reincarnated into a magical world, a man seeks redemption by living a meaningful life while mastering powerful magic and facing emotional struggles."
},
{
  name: "Re:Zero",
  image: "images/rezero.jfif",
  desc: "Subaru continues to suffer through endless death loops as he struggles to protect his friends and change a cruel fate in a dangerous fantasy world."
},
{
  name: "Classroom of the Elite",
  image: "images/cote.jfif",
  desc: "Students are ranked and manipulated in a ruthless academic system, where intelligence, deception, and strategy determine survival and success."
},
{
  name: "That Time I Got Reincarnated as a Slime",
  image: "images/slime.jpg",
  desc: "Rimuru Tempest expands his growing nation while dealing with political conflicts, powerful enemies, and the responsibilities of leadership."
}
];

const sports = [
  {
    name: "BlueLock",
    image: "images/block.jfif",
    desc: ""
  },
  {
  name: "Haikyuu!!",
  image: "images/haikyuu.jpg",
  desc: "A determined short volleyball player joins his high school team and pushes beyond his limits to compete against top-tier rivals."
},
{
  name: "Kuroko no Basket",
  image: "images/kuroko.jpg",
  desc: "A seemingly invisible player with unmatched passing skills helps his team dominate basketball games against powerful opponents."
},
{
  name: "Ao Ashi",
  image: "images/aoashi.jpg",
  desc: "A talented but raw soccer player joins a youth academy and learns the true depth of teamwork, strategy, and discipline."
},
{
  name: "Captain Tsubasa",
  image: "images/tsubasa.jpg",
  desc: "A young soccer prodigy dreams of becoming the best in the world, facing intense matches and legendary rivals."
},
{
  name: "Free!",
  image: "images/free.jpg",
  desc: "A group of swimmers reconnect through competition and friendship, pushing themselves emotionally and physically."
},
{
  name: "Run with the Wind",
  image: "images/runwind.jpg",
  desc: "A group of college students train together to compete in a long-distance relay marathon despite their differences."
},
{
  name: "Yowamushi Pedal",
  image: "images/pedal.jpg",
  desc: "An anime-loving cyclist unexpectedly joins a competitive racing team and discovers his hidden talent."
},
{
  name: "Slam Dunk",
  image: "images/slamdunk.jpg",
  desc: "A delinquent joins the basketball team to impress a girl but ends up discovering a real passion for the sport."
},
{
  name: "Eyeshield 21",
  image: "images/eyeshield.jpg",
  desc: "A timid boy becomes a secret weapon in American football, using his speed to dominate the field."
},
{
  name: "Prince of Tennis",
  image: "images/tennis.jpg",
  desc: "A tennis prodigy enters a competitive school and faces powerful opponents with unique playing styles."
},
{
  name: "SK8 the Infinity",
  image: "images/sk8.jpg",
  desc: "Underground skateboard races push competitors to their limits in dangerous and thrilling downhill battles."
},
{
  name: "Hajime no Ippo",
  image: "images/ippo.jpg",
  desc: "A bullied boy discovers boxing and transforms into a powerful fighter through intense training and determination."
},
{
  name: "Major",
  image: "images/major.jpg",
  desc: "A boy grows from childhood to professional baseball, facing hardships and chasing his dream of greatness."
},
{
  name: "Ping Pong The Animation",
  image: "images/pingpong.jpg",
  desc: "Two friends with different personalities pursue table tennis greatness in a unique and emotional journey."
},
{
  name: "Re-Main",
  image: "images/remain.jpg",
  desc: "A former water polo star loses his memory and must relearn both the sport and his identity."
},
{
  name: "Bakuten!!",
  image: "images/bakuten.jpg",
  desc: "A boy joins a rhythmic gymnastics team and discovers the beauty and difficulty of the sport.",
  hidden: true
},
{
  name: "Tsurune",
  image: "images/tsurune.jpg",
  desc: "A group of archers work to overcome personal struggles while mastering the art of kyudo.",
  hidden: true
},
{
  name: "Dance Dance Danseur",
  image: "images/danseur.jpg",
  desc: "A boy secretly passionate about ballet challenges stereotypes and pursues his dream despite pressure.",
  hidden: true
},
{
  name: "Stars Align",
  image: "images/starsalign.jpg",
  desc: "A struggling soft tennis team improves through teamwork while dealing with deep personal issues.",
  hidden: true
},
{
  name: "Salaryman’s Club",
  image: "images/salaryman.jpg",
  desc: "Working adults balance corporate life and competitive badminton, blending sports with everyday struggles.",
  hidden: true
}
];

const romance = [
  {
    name: "Fragrant Flower",
    image: "images/flower.jpg",
    desc: "A quiet and kind-hearted boy from a rough school forms an unexpected bond with a refined girl from a prestigious academy, leading to a gentle and emotional story about love, acceptance, and breaking stereotypes."
  },
  {
    name: "Quintessial Quintupulets",
    image: "images/quint.jfif",
    desc: ""
 },
  {
    name: "Blue Box",
    image: "images/bbox.jfif",
    desc: "",
    watch: "",
    trailer: ""
  },
  {
    name: "My Dress-up Darling",
    image: "images/ddarling.jfif",
    desc: "",
    watch: ""
  },
  {
    name: "Darling In The Franxx",
    image: "images/franxx.jfif",
    desc: "",
    watch:""
  },
  {
    name: "Nisekoi",
    image: "images/nisekoi.jfif",
    desc: "",
    watch: ""
  },
  {
    name: "Rosario + Vampire",
    image: "images/rosario.jpg",
    desc: "",
    watch: ""
  },
    {
    name: "Your Lie in April",
    image: "images/april.jfif",
    desc: "A piano prodigy who lost his passion for music meets a violinist who helps him rediscover emotion, love, and pain through music."
  },
  {
    name: "Toradora!",
    image: "images/toradora!.jfif",
    desc: "Two students help each other pursue their crushes but slowly develop unexpected feelings for one another."
  },
  {
    name: "Kaguya-sama: Love is War",
    image: "images/kaguya.jpg",
    desc: "Two genius students refuse to confess love first, turning romance into a clever psychological battle."
  },
  {
    name: "Horimiya",
    image: "images/horimiya.jpg",
    desc: "Two students with hidden sides of their personalities discover a soft and genuine relationship."
  },
  {
    name: "Golden Time",
    image: "images/goldentime.jpg",
    desc: "A college romance story filled with memory loss, emotional growth, and complicated relationships."
  },
  {
    name: "Clannad After Story",
    image: "images/clannad.jpg",
    desc: "A deeply emotional continuation of love, family struggles, and adulthood challenges."
  },
  {
    name: "A Silent Voice",
    image: "images/silentvoice.jfif",
    desc: "A boy seeks redemption by reconnecting with a deaf girl he once bullied in school."
  },
  {
    name: "Plastic Memories",
    image: "images/plasticmemories.jpg",
    desc: "A human falls in love with an android with a limited lifespan, creating a bittersweet romance."
  },
  {
    name: "Fruits Basket",
    image: "images/fruitsbasket.jpg",
    desc: "A girl becomes involved with a cursed family where members transform into zodiac animals."
  },
  {
    name: "Lovely★Complex",
    image: "images/lovelycomplex.jpg",
    desc: "A tall girl and a short boy struggle with insecurities while slowly falling in love."
  },
  {
    name: "Tonikawa",
    image: "images/tonikawa.jpg",
    desc: "A boy meets a mysterious girl and immediately marries her, starting a sweet married life."
  },
  {
    name: "Nana",
    image: "images/nana.jpg",
    desc: "Two girls with the same name meet in Tokyo and experience love, heartbreak, and ambition."
  },
  {
    name: "Ao Haru Ride",
    image: "images/aoharu.jfif",
    desc: "A girl reconnects with her first love, but both have changed in unexpected ways."
  },
  {
    name: "Masamune-kun’s Revenge",
    image: "images/masamune.jpg",
    desc: "A boy seeks revenge on a girl who once rejected him, but romance complicates his plan."
  },
  {
    name: "My Little Monster",
    image: "images/mylittlemonster.jfif",
    desc: "A quiet girl and a chaotic boy form an unusual but sincere relationship."
  },
  {
    name: "Wotakoi",
    image: "images/wotakoi.jpg",
    desc: "Adult otaku friends navigate romance, work life, and relationships in a funny and relatable way."
  },
  {
    name: "Scum’s Wish",
    image: "images/scumswish.jpg",
    desc: "A dark romance story exploring unfulfilled love, emotional pain, and complicated relationships."
  },
  {
    name: "The Angel Next Door Spoils Me Rotten",
    image: "images/angelnextdoor.jpg",
    desc: "A quiet boy’s life changes when his beautiful neighbor starts taking care of him daily."
  }
];

const ecchi = [
  {
   name: "Food Wars",
   image: "images/fwars.jfif",
   desc: "",
   watch: ""
  },
  {
    name: "Prison School",
    image: "images/pschool.jfif",
    desc: "",
    watch:""
  },
  {
    name: "Highschool Of The Dead",
    image: "images/hotd.jfif",
    desc: "",
    watch:""
  },
  {
    name: "The Testament Of New Sister Devil",
    image: "images/sisdev.jfif",
    desc: "",
    watch:""
  },
  {
    name: "To Love Ru",
    image: "images/ru.jfif",
    desc: "",
    watch: ""
  },
  {
    name: "Keijo",
    image: "images/keijo.jfif",
    desc: "",
    watch: "watch.html?id=keijo",
    episodes:
    ["https://streamtape.com/v/xormjDMGM8fkOGo/AnimePahe_Keijo_-_01_BD_720p_Retail.mp4",
      "https://streamtape.com/v/xormjDMGM8fkOGo/AnimePahe_Keijo_-_01_BD_720p_Retail.mp4"

    ]
  },
    {
    name: "Shimoneta",
    image: "images/shimoneta.jpg",
    desc: "In a strict society where dirty jokes are banned, a rebel group fights against censorship using chaos and comedy."
  },
  {
    name: "No Game No Life (Fan Service elements)",
    image: "images/ngnl.jpg",
    desc: "Two genius siblings dominate a world ruled by games, with playful fan-service and fantasy adventure elements."
  },
  {
    name: "Rosario + Vampire",
    image: "images/rosario.jpg",
    desc: "A human accidentally enrolls in a monster school and gets involved with supernatural girls and chaos."
  },
  {
    name: "High School DxD",
    image: "images/dxd.jpg",
    desc: "A boy is revived as a devil and becomes surrounded by powerful supernatural girls in constant battles."
  },
  {
    name: "Trinity Seven",
    image: "images/trinityseven.jpg",
    desc: "A boy joins a magic school filled with powerful female mages while uncovering mysteries about his past."
  },
  {
    name: "Monster Musume",
    image: "images/monster.jpg",
    desc: "A human lives with monster girls under government supervision, leading to chaotic daily life."
  },
  {
    name: "To Love Ru Darkness",
    image: "images/toraburu.jpg",
    desc: "A boy becomes surrounded by alien girls and supernatural chaos in everyday life."
  },
  {
    name: "Sekirei",
    image: "images/sekirei.jpg",
    desc: "A boy becomes involved in a battle between powerful girls known as Sekirei fighting for survival."
  },
  {
    name: "Dakara Boku wa, H ga Dekinai",
    image: "images/hagah.jpg",
    desc: "A boy forms a contract with a powerful grim reaper girl in a supernatural romantic battle story."
  },
  {
    name: "Heaven’s Lost Property",
    image: "images/angeloids.jpg",
    desc: "A boy discovers angelic beings called Angeloids who bring chaos and strange situations into his life."
  },
  {
    name: "Yamada-kun and the Seven Witches",
    image: "images/yamada.jpg",
    desc: "A boy discovers he can swap bodies with girls through kisses, leading to mystery and comedy."
  },
  {
    name: "Masou Gakuen HxH",
    image: "images/hxh.jpg",
    desc: "A boy joins a school where girls fight monsters using special energy-based abilities."
  },
  {
    name: "Brynhildr in the Darkness",
    image: "images/brynhildr.jpg",
    desc: "A dark sci-fi story involving escaped girls with supernatural powers and hidden secrets."
  },
  {
    name: "Is This a Zombie?",
    image: "images/zombie.jpg",
    desc: "A boy resurrected as a zombie gets involved with magical girls and chaotic supernatural battles."
  },
  {
    name: "Kiss x Sis",
    image: "images/kissxsis.jpg",
    desc: "A boy’s daily life becomes complicated due to his overly affectionate twin stepsisters."
  },
  {
    name: "Eromanga Sensei",
    image: "images/eromanga.jpg",
    desc: "A light novelist discovers his shut-in illustrator is actually his step-sister."
  },
  {
    name: "Peter Grill and the Philosopher’s Time",
    image: "images/petergrill.jpg",
    desc: "A strong warrior becomes surrounded by overly persistent women after becoming the strongest fighter."
  },
  {
    name: "Why the Hell are You Here, Teacher!?",
    image: "images/teacher.jpg",
    desc: "A student repeatedly ends up in awkward situations with his strict and attractive teacher."
  }
];

const mystery = [
  {
    name: "Apothecary Diaries",
    image: "images/apothecary.jfif",
    desc: "",
    watch: ""
  },
  {
    name: "Death Note",
    image: "images/deathnote.jfif",
    desc: "",
    watch: ""
  },
  {
    name: "Promised Neverland",
    image: "images/promised.jfif",
    desc: "",
    watch: ""
  },
    {
    name: "Monster",
    image: "images/monster2.jpg",
    desc: "A brilliant surgeon saves a boy who later becomes a dangerous serial killer, forcing him into a moral chase across Europe."
  },
  {
    name: "Erased",
    image: "images/erased.jfif",
    desc: "A man travels back in time to his childhood to prevent a series of kidnappings and uncover the truth behind them."
  },
  {
    name: "Parasyte: The Maxim",
    image: "images/parasyte.jfif",
    desc: "A high school student shares his body with a parasite and must fight other deadly creatures hiding among humans."
  },
  {
    name: "Tokyo Ghoul",
    image: "images/tghoul.jfif",
    desc: "A student becomes half-ghoul and struggles between human life and monstrous instincts."
  },
  {
    name: "Another",
    image: "images/another.jpg",
    desc: "A cursed classroom hides a deadly secret where students die one by one in mysterious accidents."
  },
  {
    name: "Psycho-Pass",
    image: "images/psychopass.jpg",
    desc: "In a future society, crime is predicted before it happens, but justice becomes morally complicated."
  },
  {
    name: "Steins;Gate",
    image: "images/steinsgate.jpg",
    desc: "A group of friends accidentally discovers time travel and faces dangerous consequences across timelines."
  },
  {
    name: "The Girl Who Leapt Through Time",
    image: "images/timeleap.jpg",
    desc: "A girl gains the ability to travel through time but learns every change comes with consequences."
  },
  {
    name: "Summertime Rendering",
    image: "images/summertime.jpg",
    desc: "A man returns to his island hometown and discovers a deadly time loop involving mysterious doppelgängers."
  },
  {
    name: "Shinsekai Yori",
    image: "images/shinsekai.jpg",
    desc: "Children in a future society uncover dark truths about their peaceful but controlled world."
  },
  {
    name: "Hyouka",
    image: "images/hyouka.jfif",
    desc: "A boy joins a school club and solves small mysteries that slowly reveal deeper emotional truths."
  },
  {
    name: "The Perfect Insider",
    image: "images/perfectinsider.jpg",
    desc: "A genius programmer and professor become involved in a locked-room murder mystery."
  },
  {
    name: "Bungo Stray Dogs",
    image: "images/bungou.jpg",
    desc: "Detectives with supernatural abilities solve strange cases involving criminal organizations."
  },
  {
    name: "Deadman Wonderland",
    image: "images/deadman.jpg",
    desc: "A boy is sent to a deadly prison where inmates are forced into brutal survival games."
  },
  {
    name: "Odd Taxi",
    image: "images/oddtaxi.jpg",
    desc: "A quiet taxi driver becomes involved in a strange disappearance case involving unusual passengers."
  },
  {
    name: "Monster Musume no Oishasan",
    image: "images/monsterdoctor.jpg",
    desc: "A doctor in a monster-filled world treats strange patients while uncovering hidden medical mysteries."
  },
  {
    name: "The Tatami Galaxy",
    image: "images/tatami.jpg",
    desc: "A college student relives different life choices across parallel timelines in search of happiness."
  },
  {
    name: "Subete ga F ni Naru",
    image: "images/ftothepower.jpg",
    desc: "A genius programmer and professor investigate a locked-room murder with impossible clues."
  }
];

const comedy = [
  {
    name: "Grand Blue Dreaming",
    image: "images/gbdreaming.jfif",
    desc: "",
    watch: ""
  },
  {
  name: "Gintama",
  image: "images/gintama.jpg",
  desc: "A lazy samurai takes on random jobs in a world ruled by aliens, constantly breaking the fourth wall and turning even serious arcs into chaotic comedy."
},
{
  name: "Konosuba",
  image: "images/konosuba.jpg",
  desc: "A gamer is reincarnated into a fantasy world with a useless goddess and a dysfunctional team, leading to hilarious failures instead of heroic victories."
},
{
  name: "The Disastrous Life of Saiki K",
  image: "images/saik.jfif",
  desc: "A psychic tries to live quietly, but his strange classmates constantly drag him into ridiculous situations he can’t escape from."
},
{
  name: "Nichijou",
  image: "images/nichijou.jpg",
  desc: "A normal school life becomes wildly exaggerated, turning everyday moments into insane, over-the-top comedy scenes."
},
{
  name: "Asobi Asobase",
  image: "images/asobi.jpg",
  desc: "Three girls play simple games, but their personalities make every activity spiral into chaotic and unpredictable madness."
},
{
  name: "Daily Lives of High School Boys",
  image: "images/dailyboys.jpg",
  desc: "A group of boys experience school life through weird conversations, imagination, and completely unnecessary drama."
},
{
  name: "Kaguya-sama Love is War",
  image: "images/kaguya.jpg",
  desc: "Two elite students refuse to confess their love first, turning romance into a battle of pride and psychological warfare."
},
{
  name: "Mashle",
  image: "images/mashle.jpg",
  desc: "In a magic world, a boy with zero magic uses brute strength to overcome everything while acting completely serious."
},
{
  name: "Welcome to Demon School Iruma-kun",
  image: "images/iruma.jpg",
  desc: "A human boy attends demon school and accidentally becomes popular, despite constantly trying to avoid attention."
},
{
  name: "Seitokai Yakuindomo",
  image: "images/seitokai.jpg",
  desc: "A student joins a council where every discussion turns into nonstop inappropriate jokes and awkward comedy."
},
{
  name: "Sket Dance",
  image: "images/sket.jpg",
  desc: "A school club helps students, but most requests turn into strange, emotional, and hilarious situations."
},
{
  name: "Baka to Test",
  image: "images/bakatotest.jpg",
  desc: "Students summon avatars based on grades and battle each other with ridiculous and dumb strategies."
},
{
  name: "Chio’s School Road",
  image: "images/chio.jpg",
  desc: "A girl’s walk to school becomes a survival challenge filled with bizarre obstacles and over-the-top reactions."
},
{
  name: "Detroit Metal City",
  image: "images/dmc.jpg",
  desc: "A soft, shy guy secretly becomes the lead singer of an insane death metal band, creating constant identity chaos."
},
{
  name: "Aharen-san wa Hakarenai",
  image: "images/aharen.jpg",
  desc: "A quiet girl who doesn’t understand personal space forms a strange bond with a boy who overthinks everything."
},
{
  name: "Tonari no Seki-kun",
  image: "images/seki.jpg",
  desc: "A student spends class time building elaborate desk games while the girl next to him gets distracted watching."
},
{
  name: "Golden Boy",
  image: "images/goldenboy.jpg",
  desc: "A wandering student takes random jobs, learning life lessons in the most embarrassing and hilarious ways."
},
{
  name: "Cromartie High School",
  image: "images/cromartie.jpg",
  desc: "A school full of delinquents, robots, and absurd characters where logic barely exists and randomness rules."
},
{
  name: "Hinamatsuri",
  image: "images/hinamatsuri.jpg",
  desc: "A yakuza suddenly has to take care of a psychic girl, leading to both emotional and completely ridiculous moments."
},
{
  name: "Zombieland Saga",
  image: "images/zombie.jpg",
  desc: "Dead girls are revived as zombies to become idols, creating a bizarre mix of music, chaos, and comedy."
}
]

// ================= FANTASY =================
const fantasy = [
  {
    name: "Made in Abyss",
    image: "images/abyss.jpg",
    desc: "A mysterious giant pit called the Abyss holds ancient relics and deadly secrets.",
    hidden: true
  },
  {
    name: "Sword Art Online",
    image: "images/sao.jpg",
    desc: "Players are trapped inside a VR game where death in-game means death in real life.",
    hidden: true
  },
  {
    name: "Mushoku Tensei",
    image: "images/mushoku.jpg",
    desc: "A reborn man tries to live a better life in a magical world."
  },
    {
    name: "Re:Zero",
    image: "images/rezero.jpg",
    desc: "A boy is trapped in another world where he returns from death each time he dies, slowly uncovering painful truths.",
    hidden: true
  },
  {
    name: "No Game No Life",
    image: "images/ngnl.jpg",
    desc: "Two genius siblings are transported to a world where everything is decided through games.",
    hidden: true
  },
  {
    name: "The Rising of the Shield Hero",
    image: "images/shieldhero.jpg",
    desc: "A hero is falsely accused and must rise from betrayal to become strong in a hostile world.",
    hidden: true
  },
  {
    name: "That Time I Got Reincarnated as a Slime",
    image: "images/slime.jpg",
    desc: "A man is reborn as a slime and builds a powerful monster nation.",
    hidden: true
  },
  {
    name: "Overlord",
    image: "images/overlord.jpg",
    desc: "A player becomes trapped in a game world as an unstoppable undead ruler.",
    hidden: true
  },
  {
    name: "Fairy Tail",
    image: "images/fairytail.jpg",
    desc: "A guild of mages takes on magical quests filled with friendship and powerful battles.",
    hidden: true
  },
  {
    name: "Magi: The Labyrinth of Magic",
    image: "images/magi.jpg",
    desc: "A boy explores magical dungeons filled with treasure, danger, and destiny.",
    hidden: true
  },
  {
    name: "Black Clover",
    image: "images/blackclover.jpg",
    desc: "A boy born without magic trains to become the Wizard King.",
    hidden: true
  },
  {
    name: "The Ancient Magus’ Bride",
    image: "images/magusbride.jpg",
    desc: "A girl enters a mysterious magical world after being sold to a powerful sorcerer.",
    hidden: true
  },
  {
    name: "Witch Hat Atelier",
    image: "images/witchhat.jpg",
    desc: "A girl discovers hidden magical secrets in a beautifully mysterious world of witches.",
    hidden: true
  },

  {
    name: "Frieren: Beyond Journey’s End",
    image: "images/frieren.jpg",
    desc: "An elf mage reflects on life, loss, and memories after the hero’s journey ends.",
  },
  {
    name: "Made in Abyss: Dawn of the Deep Soul",
    image: "images/abyss2.jpg",
    desc: "Deeper layers of the Abyss reveal horrifying truths and emotional struggles.",
  },
  {
    name: "Spice and Wolf",
    image: "images/spicewolf.jpg",
    desc: "A traveling merchant journeys with a wolf goddess through medieval trade routes.",
  },
  {
    name: "DanMachi",
    image: "images/danmachi.jpg",
    desc: "A young adventurer explores dangerous dungeons while seeking strength and recognition.",
  },
  {
    name: "Log Horizon",
    image: "images/loghorizon.jpg",
    desc: "Players trapped in a game must rebuild society and survive in a fantasy world.",
  },
  {
    name: "Grimgar of Fantasy and Ash",
    image: "images/grimgar.jpg",
    desc: "Strangers wake up in a strange world and must survive as low-level adventurers.",
  },
  {
    name: "The Faraway Paladin",
    image: "images/paladin.jpg",
    desc: "A boy raised by undead guardians learns the meaning of life and heroism.",
  },
  {
    name: "Somali and the Forest Spirit",
    image: "images/somali.jpg",
    desc: "A human child travels with a robot through a world ruled by magical creatures.",
  },
  {
    name: "Elaina’s Journey",
    image: "images/elaina.jpg",
    desc: "A wandering witch travels across magical lands experiencing different stories and people.",
  },
  {
    name: "The Executioner and Her Way of Life",
    image: "images/executioner.jpg",
    desc: "A priestess becomes involved in a hidden world where ‘isekai travelers’ are eliminated.",
  }
];

// ================= ISEKAI =================
const isekai = [
  {
    name: "Re:Zero",
    image: "images/rezero.jpg",
    desc: "A boy gets trapped in another world with the ability to return after death."
  },
  {
    name: "No Game No Life",
    image: "images/ngnl.jpg",
    desc: "Two genius siblings are transported into a world where everything is decided by games."
  },
  {
    name: "That Time I Got Reincarnated as a Slime",
    image: "images/slime.jpg",
    desc: "A man is reborn as a slime and builds a powerful monster kingdom."
  },
    {
    name: "The Rising of the Shield Hero",
    image: "images/shieldhero.jpg",
    desc: "A summoned hero is betrayed and must rise from nothing in a hostile world."
  },
  {
    name: "Konosuba",
    image: "images/konosuba.jpg",
    desc: "A boy is sent to a fantasy world with a useless goddess and chaotic adventures."
  },
  {
    name: "Overlord",
    image: "images/overlord.jpg",
    desc: "A player becomes trapped as an undead ruler in a game world that has become reality."
  },
  {
    name: "Mushoku Tensei",
    image: "images/mushoku.jpg",
    desc: "A man is reincarnated into a magical world and tries to live a better life."
  },
  {
    name: "The Devil is a Part-Timer",
    image: "images/devilparttimer.jpg",
    desc: "A demon lord is transported to Earth and starts working in a fast-food restaurant.",
    hidden: true
  },
  {
    name: "Cautious Hero",
    image: "images/cautioushero.jpg",
    desc: "A hero is extremely overpowered but prepares for everything excessively.",
    hidden: true
  },
  {
    name: "Arifureta",
    image: "images/arifureta.jpg",
    desc: "A bullied student is betrayed in another world and becomes a ruthless fighter.",
    hidden: true
  },
  {
    name: "Wise Man’s Grandchild",
    image: "images/wisegrandchild.jpg",
    desc: "A man reincarnated in a magical world becomes absurdly overpowered.",
    hidden: true
  },
  {
    name: "Death March to the Parallel World",
    image: "images/deathmarch.jpg",
    desc: "A programmer wakes up in a fantasy world and becomes extremely powerful.",
    hidden: true
  },
  {
    name: "Isekai Cheat Magician",
    image: "images/cheatmagician.jpg",
    desc: "Two students are transported to another world and gain overwhelming magic powers.",
    hidden: true
  },

  {
    name: "Tsukimichi Moonlit Fantasy",
    image: "images/tsukimichi.jpg",
    desc: "A rejected hero is sent to another world and builds his own powerful path.",
  },
  {
    name: "The Faraway Paladin",
    image: "images/paladin.jpg",
    desc: "A boy raised by undead learns what it means to live and become a hero.",
  },
  {
    name: "Log Horizon",
    image: "images/loghorizon.jpg",
    desc: "Players trapped in a game must rebuild society and survive strategically.",
  },
  {
    name: "Grimgar of Fantasy and Ash",
    image: "images/grimgar.jpg",
    desc: "Strangers awaken in a deadly world with no memories and must survive together.",
  },
  {
    name: "Saga of Tanya the Evil",
    image: "images/tanya.jpg",
    desc: "A ruthless salaryman is reincarnated as a magical child soldier in war.",
  },
  {
    name: "Reincarnated as a Sword",
    image: "images/sword.jpg",
    desc: "A man is reborn as a sword and helps a young beast girl become strong.",
  },
  {
    name: "In Another World With My Smartphone",
    image: "images/smartphone.jpg",
    desc: "A boy is reincarnated into a fantasy world with his smartphone intact.",
  },
  {
    name: "Kemono Michi",
    image: "images/kemonomichi.jpg",
    desc: "A wrestler is summoned to another world and refuses to fight monsters.",
  },
  {
    name: "Handyman Saitou in Another World",
    image: "images/handyman.jpg",
    desc: "An ordinary handyman becomes surprisingly useful in a fantasy party.",
  },
  {
    name: "So I’m a Spider, So What?",
    image: "images/spider.jpg",
    desc: "A girl is reincarnated as a spider monster and struggles to survive in a dungeon.",
  }
];

// ================= SLICE OF LIFE =================
const sliceOfLife = [
  {
    name: "Clannad",
    image: "images/clannad.jpg",
    desc: "A touching story about family, friendship, and emotional growth."
  },
  {
    name: "Barakamon",
    image: "images/barakamon.jpg",
    desc: "A calligrapher finds peace in a rural village."
  },
  {
    name: "Hyouka",
    image: "images/hyouka.jpg",
    desc: "A boy solves small mysteries in school life."
  },
    {
    name: "Wotakoi: Love is Hard for Otaku",
    image: "images/wotakoi.jpg",
    desc: "A romantic comedy following adult coworkers who are secretly otaku. As they navigate office life, friendships, and relationships, they struggle to balance their geeky hobbies with normal social expectations, leading to funny and heartwarming moments."
  },
  {
    name: "Love, Chunibyo & Other Delusions",
    image: "images/chunibyo.jpg",
    desc: "A boy who once had embarrassing delusions in middle school meets a girl still living in her fantasy world. Their unusual relationship explores growing up, accepting past mistakes, and finding comfort in someone who understands your weird side."
  },
  {
    name: "Saekano: How to Raise a Boring Girlfriend",
    image: "images/saekano.jpg",
    desc: "A high school student gathers talented girls to create a visual novel game. As development continues, romantic tension grows between the team members, mixing creativity, jealousy, and school life drama."
  },
  {
    name: "Tsuki ga Kirei",
    image: "images/tsukigakirei.jpg",
    desc: "A soft and realistic portrayal of first love between two shy middle school students. The story captures the awkwardness of texting, misunderstandings, and emotional growth as they slowly build a meaningful relationship."
  },
  {
    name: "Anohana: The Flower We Saw That Day",
    image: "images/anohana.jpg",
    desc: "A group of childhood friends drift apart after a tragic accident, but the appearance of their deceased friend’s spirit forces them to confront guilt, pain, and unresolved emotions during their school years."
  },
  {
    name: "Orange",
    image: "images/orange.jpg",
    desc: "A high school girl receives letters from her future self warning her to prevent a tragedy involving a new transfer student. The story blends romance, regret, and emotional school life decisions."
  },
  {
    name: "Chihayafuru",
    image: "images/chihayafuru.jpg",
    desc: "A passionate girl forms a school club centered around competitive karuta, a traditional Japanese card game. The series follows friendship, rivalry, and dedication as students chase national-level success."
  },
  {
    name: "Yamada-kun and the Seven Witches",
    image: "images/yamada.jpg",
    desc: "A troublemaking student discovers he can switch bodies with a top student after a kiss. As more witches are revealed, school life turns into a mystery-filled adventure with comedy and supernatural twists."
  },
  {
    name: "Gekkan Shoujo Nozaki-kun",
    image: "images/nozaki.jpg",
    desc: "A girl confesses to her crush but ends up becoming his manga assistant instead. The series humorously explores school life, misunderstandings, and creative chaos in manga production."
  },
  {
    name: "Nichijou",
    image: "images/nichijou.jpg",
    desc: "A surreal comedy showing the daily lives of high school girls, a robot, and a talking cat. Ordinary school moments turn into absurd and unpredictable situations."
  },
  {
    name: "The Melancholy of Haruhi Suzumiya",
    image: "images/haruhi.jpg",
    desc: "A high school club led by a girl unknowingly capable of altering reality explores strange phenomena. The story mixes school life with science fiction and mystery elements."
  },
  {
    name: "Alya Sometimes Hides Her Feelings in Russian",
    image: "images/alya.jpg",
    desc: "A cool and elegant girl secretly expresses her feelings in Russian, believing no one understands her. However, her classmate actually understands every word, leading to comedic and romantic misunderstandings."
  },
  {
    name: "My Little Monster",
    image: "images/mylittlemonster.jpg",
    desc: "A strict top student’s life changes when she meets a violent but kind-hearted boy. Their unpredictable relationship grows through awkward school interactions and emotional development."
  },
  {
    name: "Tonari no Kaibutsu-kun",
    image: "images/kaibutsu.jpg",
    desc: "A studious girl becomes involved with a delinquent boy who rarely attends school. Their unusual friendship slowly develops into a chaotic but heartfelt romance."
  },
  {
    name: "Ao Haru Ride",
    image: "images/aoharuride.jpg",
    desc: "A girl reunites with her first love in high school, only to find he has changed. The story explores emotional distance, misunderstandings, and rediscovering feelings."
  },
  {
    name: "Fruits Basket",
    image: "images/fruitsbasket.jpg",
    desc: "A kind girl becomes involved with a cursed family transforming into animals of the zodiac. School life blends with emotional healing, trauma, and deep character development."
  },
  {
    name: "My Clueless First Friend",
    image: "images/cluelessfriend.jpg",
    desc: "A lonely girl who is constantly bullied in school meets a cheerful boy who treats her kindly. Their friendship slowly changes her school life and confidence."
  },
  {
    name: "School Rumble",
    image: "images/schoolrumble.jpg",
    desc: "A chaotic school comedy filled with misunderstandings, love triangles, and over-the-top student antics that make everyday school life unpredictable and funny."
  },
  {
    name: "Lucky Star",
    image: "images/luckystar.jpg",
    desc: "A slice-of-life comedy focusing on four high school girls discussing daily life, anime, games, and random topics in a relaxed and humorous way."
  },
  {
    name: "Daily Lives of High School Boys",
    image: "images/dailyboys.jpg",
    desc: "A comedic look at teenage boys exaggerating everyday school life situations, friendships, and imagination-driven chaos."
  }
];

// ================= SCHOOL LIFE =================
const schoolLife = [
  {
    name: "Horimiya",
    image: "images/horimiya.jpg",
    desc: "Two students with hidden personalities form a deep bond."
  },
  {
    name: "Classroom of the Elite",
    image: "images/cote.jfif",
    desc: "A competitive school where students are ranked and manipulated."
  },
  {
    name: "Assassination Classroom",
    image: "images/asclass.jfif",
    desc: "Students are tasked with killing their alien teacher before graduation."
  },
    {
    name: "My Hero Academia",
    image: "images/mha.jfif",
    desc: "Students train at a hero academy to master their powers and become professional heroes."
  },
  {
    name: "Blue Box",
    image: "images/bbox.jfif",
    desc: "A sports-loving boy and a basketball girl share a quiet school romance and personal growth."
  },
  {
    name: "The Dangers in My Heart",
    image: "images/dangers.jfif",
    desc: "A loner boy slowly develops feelings for a cheerful classmate in a touching school romance."
  },
  {
    name: "Komi Can’t Communicate",
    image: "images/komi.jfif",
    desc: "A girl with extreme social anxiety tries to make 100 friends at school."
  },
  {
    name: "Kaguya-sama: Love is War",
    image: "images/kaguya.jpg",
    desc: "Two genius students try to make each other confess love first in a psychological romantic battle."
  },
  {
    name: "Toradora",
    image: "images/toradora.jpg",
    desc: "Two misunderstood students help each other with love problems but develop feelings along the way."
  },
  {
    name: "Your Lie in April",
    image: "images/april.jfif",
    desc: "A piano prodigy rediscovers music and emotion after meeting a free-spirited violinist."
  },
  {
    name: "Golden Time",
    image: "images/goldentime.jpg",
    desc: "A college student struggles with memory loss and complicated romance."
  },
  {
    name: "ReLIFE",
    image: "images/relife.jfif",
    desc: "A man gets a second chance at high school life through a mysterious experiment."
  },
  {
    name: "Anohana",
    image: "images/anohana.jpg",
    desc: "A group of childhood friends reconnect after a tragic loss and emotional separation."
  },

  {
    name: "Oregairu",
    image: "images/oregairu.jpg",
    desc: "A cynical student is forced into helping others and slowly learns about relationships.",
    hidden: true
  },
  {
    name: "Erased",
    image: "images/erased.jpg",
    desc: "A man travels back in time to prevent a childhood tragedy linked to his classmates.",
    hidden: true
  },
  {
    name: "Charlotte",
    image: "images/charlotte.jpg",
    desc: "Students with supernatural abilities attend a school while hiding dangerous secrets.",
    hidden: true
  },
  {
    name: "Angel Beats",
    image: "images/angelbeats.jpg",
    desc: "Students in the afterlife school battle against fate while uncovering past regrets.",
    hidden: true
  },
  {
    name: "A Silent Voice",
    image: "images/silentvoice.jpg",
    desc: "A boy tries to make amends with a deaf girl he once bullied in school.",
    hidden: true
  },
  {
    name: "March Comes in Like a Lion",
    image: "images/marchlion.jpg",
    desc: "A young professional shogi player struggles with loneliness and emotional healing.",
    hidden: true
  },
  {
    name: "Hyouka",
    image: "images/hyouka.jpg",
    desc: "A quiet student is pulled into solving small mysteries at school.",
    hidden: true
  },
  {
    name: "Sakurasou no Pet Girl",
    image: "images/sakurasou.jpg",
    desc: "A dorm full of eccentric students navigate creativity, talent, and young love.",
    hidden: true
  },
  {
    name: "Blend S",
    image: "images/blends.jpg",
    desc: "A girl works at a café where staff act out exaggerated personalities for customers.",
    hidden: true
  },
  {
    name: "Sket Dance",
    image: "images/sketdance.jpg",
    desc: "A school club helps solve student problems, both serious and ridiculous.",
    hidden: true
  }
];


console.log("Anime HUB JS loaded");

// ================= GLOBAL LIST =================
const allAnime = [
  ...animeData,
  ...recent,
  ...action,
  ...romance,
  ...adventure,
  ...sports,
  ...ecchi,
  ...mystery,
  ...comedy,
  ...fantasy,
  ...isekai,
  ...sliceOfLife,
  ...schoolLife
];

// ================= CREATE CARD =================
function createCard(anime) {
  return `
    <div class="anime-card" onclick="goToAnime('${anime.name.replace(/'/g, "\\'")}')">

      <div class="poster-wrapper">
        <img src="${anime.image}" alt="${anime.name}">

        <div class="overlay">
          <h3>${anime.name}</h3>
        </div>
      </div>

    </div>
  `;
}

// ================= DISPLAY =================
function displayAnime(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = list.map(createCard).join("");
}

// ================= PAGE LOAD =================
document.addEventListener("DOMContentLoaded", () => {

  displayAnime(recent, "recent");
  displayAnime(action, "action");
  displayAnime(romance, "romance");
  displayAnime(adventure, "adventure");
  displayAnime(sports, "sports");
  displayAnime(ecchi, "ecchi");
  displayAnime(mystery, "mystery");
  displayAnime(comedy, "comedy");
  displayAnime(fantasy, "fantasy");
  displayAnime(isekai, "isekai");
  displayAnime(sliceOfLife, "sliceOfLife");
  displayAnime(schoolLife, "schoolLife");

  setupSearch();
  setupGenreFilter();
  setupModal();
  loadContinueWatching(allAnime);
});

// ================= NAVIGATION =================
function goToAnime(name) {
  let watched = JSON.parse(localStorage.getItem("continueWatching")) || [];

  if (!watched.includes(name)) {
    watched.unshift(name);
  }

  localStorage.setItem("continueWatching", JSON.stringify(watched));

  localStorage.setItem("selectedAnime", name);
  window.location.href = "anime.html";
}

// ================= CONTINUE WATCHING =================
function loadContinueWatching(animeList) {
  const container = document.getElementById("continueWatching");
  if (!container) return;

  let watched = JSON.parse(localStorage.getItem("continueWatching")) || [];

  container.innerHTML = "";

  watched.forEach(name => {
    const anime = animeList.find(a => a.name === name);
    if (anime) container.innerHTML += createCard(anime);
  });
}

// ================= SEARCH =================
function setupSearch() {
  const searchBar = document.getElementById("searchBar");
  if (!searchBar) return;

  searchBar.addEventListener("input", () => {
    const value = searchBar.value.toLowerCase().trim();

    document.querySelectorAll(".anime-card").forEach(card => {
      const name = card.innerText.toLowerCase();
      card.style.display = name.includes(value) ? "block" : "none";
    });
  });
}

// ================= GENRE FILTER =================
function setupGenreFilter() {
  const genreFilter = document.getElementById("genreFilter");
  if (!genreFilter) return;

  genreFilter.addEventListener("change", () => {
    const selected = genreFilter.value.toLowerCase();

    document.querySelectorAll(".anime-section").forEach(section => {
      const title = section.querySelector("h2").textContent.toLowerCase();

      section.style.display =
        selected === "all" || title.includes(selected)
          ? "block"
          : "none";
    });
  });
}

// ================= TRAILER MODAL =================
function openTrailer(anime) {
  if (!anime || !anime.trailer) return;

  const modal = document.getElementById("trailerModal");
  const player = document.getElementById("modalPlayer");

  if (!modal || !player) return;

  let url = anime.trailer;

  if (url.includes("youtu.be")) {
    url = url.replace("https://youtu.be/", "https://www.youtube.com/embed/");
  }

  if (url.includes("watch?v=")) {
    url = url.replace("watch?v=", "embed/");
  }

  url = url.split("&")[0];

  modal.style.display = "flex";

  player.innerHTML = `
    <iframe src="${url}" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
  `;
}

// ================= MODAL =================
function setupModal() {
  const modal = document.getElementById("trailerModal");
  const closeBtn = document.getElementById("closeModal");

  if (!modal || !closeBtn) return;

  closeBtn.onclick = () => {
    modal.style.display = "none";
    document.getElementById("modalPlayer").innerHTML = "";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.getElementById("modalPlayer").innerHTML = "";
    }
  };
}