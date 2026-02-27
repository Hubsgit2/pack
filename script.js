// === PART 1: DATA + STORE + PACKS ===

let coins = 500;
let collection = [];

const players = [
{ name: "Josh Allen", team: "Bills", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1200 },
{ name: "Josh Allen", team: "Bills", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fbuffalo-bills-josh-allen2025--qcoxd6nl.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1200 },
{ name: "Matt Milano", team: "Bills", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matt-milano.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 850 },
{ name: "James Cook", team: "Bills", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/james-cook.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 780 },
{ name: "Dawson Knox", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dawson-knox.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 760 },
{ name: "Gabe Davis", team: "Bills", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/gabe-davis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 740 },
{ name: "Jordan Poyer", team: "Bills", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-poyer.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 820 },
{ name: "Micah Hyde", team: "Bills", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/micah-hyde.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 810 },
{ name: "Tre'Davious White", team: "Bills", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tredavious-white.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 880 },
// CUT: Stefon Diggs (traded to Texans), Von Miller (released)

// RAVENS
{ name: "Lamar Jackson", team: "Ravens", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fbaltimore-ravens-lamar-jackson-min--itclg2yg.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1200 },   
{ name: "Lamar Jackson", team: "Ravens", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lamar-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 1200 },
{ name: "Mark Andrews", team: "Ravens", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mark-andrews.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 980 },
{ name: "Zay Flowers", team: "Ravens", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zay-flowers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 800 },
{ name: "Rashod Bateman", team: "Ravens", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rashod-bateman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 760 },
{ name: "Roquan Smith", team: "Ravens", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/roquan-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 930 },
{ name: "Marlon Humphrey", team: "Ravens", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marlon-humphrey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 900 },
{ name: "Kyle Hamilton", team: "Ravens", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyle-hamilton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 880 },
{ name: "Justin Tucker", team: "Ravens", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-tucker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 950 },
// CUT: Odell Beckham Jr (FA), Patrick Queen (signed Steelers)

// BROWNS
{ name: "Myles Garrett", team: "Browns", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fcleveland-browns-myles-garrett2021--7ghlfq2r.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 1200 },
{ name: "Myles Garrett", team: "Browns", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/myles-garrett.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 1200 },
{ name: "Nick Chubb", team: "Browns", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-chubb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 1100 },
{ name: "Deshaun Watson", team: "Browns", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deshaun-watson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 820 },
{ name: "David Njoku", team: "Browns", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/david-njoku.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 780 },
{ name: "Jeremiah Owusu-Koramoah", team: "Browns", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeremiah-owusu-koramoah.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 770 },
{ name: "Denzel Ward", team: "Browns", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/denzel-ward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 890 },
{ name: "Joel Bitonio", team: "Browns", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joel-bitonio.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 900 },
{ name: "Wyatt Teller", team: "Browns", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/wyatt-teller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 860 },
{ name: "Grant Delpit", team: "Browns", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/grant-delpit.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 760 },
{ name: "Jerome Ford", team: "Browns", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jerome-ford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 780 },
{ name: "Elijah Moore", team: "Browns", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/elijah-moore.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 800 },
{ name: "David Bell", team: "Browns", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/david-bell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 720 },
{ name: "Jordan Elliott", team: "Browns", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-elliott.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 760 },
{ name: "Anthony Walker Jr", team: "Browns", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/anthony-walker-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 780 },
{ name: "Martin Emerson", team: "Browns", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/martin-emerson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 800 },
{ name: "Greg Newsome II", team: "Browns", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/greg-newsome-ii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 820 },
{ name: "Sione Takitaki", team: "Browns", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sione-takitaki.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 760 },
{ name: "Harrison Bryant", team: "Browns", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/harrison-bryant.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 740 },
// CUT: Amari Cooper (signed Bills), Joe Flacco (not retained)

// BENGALS
{ name: "Ja'Marr Chase", team: "Bengals", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fcincinnati-bengals-jamarr-chase2024-2-01--tkiky7mo.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 1200 },
{ name: "Joe Burrow", team: "Bengals", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-burrow.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 1150 },
{ name: "Ja'Marr Chase", team: "Bengals", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jamarr-chase.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 1200 },
{ name: "Tee Higgins", team: "Bengals", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tee-higgins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 980 },
{ name: "Joe Mixon", team: "Bengals", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-mixon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 840 },
{ name: "Tyler Boyd", team: "Bengals", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyler-boyd.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 780 },
{ name: "Logan Wilson", team: "Bengals", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/logan-wilson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 800 },
{ name: "Trey Hendrickson", team: "Bengals", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trey-hendrickson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 910 },
{ name: "Sam Hubbard", team: "Bengals", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-hubbard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 790 },
{ name: "Chidobe Awuzie", team: "Bengals", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chidobe-awuzie.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 780 },
{ name: "Dax Hill", team: "Bengals", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dax-hill.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 730 },

// CHIEFS
{ name: "Patrick Mahomes", team: "Chiefs", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fkansas-city-chiefs-patrick-mahomes2025--vckout_x.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 1250 },
{ name: "Patrick Mahomes", team: "Chiefs", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/patrick-mahomes.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 1250 },
{ name: "Travis Kelce", team: "Chiefs", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/travis-kelce.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 1150 },
{ name: "Isiah Pacheco", team: "Chiefs", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/isiah-pacheco.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 800 },
{ name: "Rashee Rice", team: "Chiefs", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rashee-rice.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 780 },
{ name: "Chris Jones", team: "Chiefs", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 1150 },
{ name: "Nick Bolton", team: "Chiefs", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-bolton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 840 },
{ name: "Justin Reid", team: "Chiefs", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-reid.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 800 },
{ name: "Creed Humphrey", team: "Chiefs", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/creed-humphrey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 930 },
// CUT: L'Jarius Sneed (traded to Titans), Marquez Valdes-Scantling (released)

// COWBOYS
{ name: "CeeDee Lamb", team: "Cowboys", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ceedee-lamb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 1100 },
{ name: "Micah Parsons", team: "Cowboys", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/micah-parsons.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 1250 },
{ name: "Dak Prescott", team: "Cowboys", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dak-prescott.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 980 },
{ name: "Tony Pollard", team: "Cowboys", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tony-pollard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 860 },
{ name: "Jake Ferguson", team: "Cowboys", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jake-ferguson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 780 },
{ name: "Trevon Diggs", team: "Cowboys", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trevon-diggs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 980 },
{ name: "DeMarcus Lawrence", team: "Cowboys", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/demarcus-lawrence.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 880 },
{ name: "Leighton Vander Esch", team: "Cowboys", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/leighton-vander-esch.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 780 },
{ name: "Zack Martin", team: "Cowboys", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zack-martin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 1100 },
{ name: "Tyron Smith", team: "Cowboys", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyron-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 980 },
// CUT: Brandin Cooks (released)

// VIKINGS
{ name: "Justin Jefferson", team: "Vikings", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fminnesota-vikings-justin-jefferson2024--wdm8yvsn.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 1250 },
{ name: "Justin Jefferson", team: "Vikings", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-jefferson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 1250 },
{ name: "T.J. Hockenson", team: "Vikings", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tj-hockenson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 960 },
{ name: "Aaron Jones", team: "Vikings", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aaron-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 860 },
{ name: "Jordan Addison", team: "Vikings", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-addison.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 840 },
{ name: "Harrison Smith", team: "Vikings", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/harrison-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 960 },
{ name: "Danielle Hunter", team: "Vikings", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/danielle-hunter.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 900 },
{ name: "Byron Murphy Jr", team: "Vikings", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/byron-murphy-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 820 },
{ name: "Cam Bynum", team: "Vikings", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cam-bynum.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 800 },
{ name: "Jordan Hicks", team: "Vikings", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-hicks.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 780 },
// CUT: Kirk Cousins (moved to Falcons — kept there), Dalvin Cook (FA), Adam Thielen (Panthers), Eric Kendricks (FA), Patrick Peterson (FA)
// Kirk Cousins kept with Falcons only

// COMMANDERS
{ name: "Terry McLaurin", team: "Commanders", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/terry-mclaurin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 930 },
{ name: "Jahan Dotson", team: "Commanders", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jahan-dotson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 800 },
{ name: "Sam Howell", team: "Commanders", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-howell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 720 },
{ name: "Brian Robinson Jr", team: "Commanders", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brian-robinson-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 740 },
{ name: "Curtis Samuel", team: "Commanders", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/curtis-samuel.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 740 },
{ name: "Jonathan Allen", team: "Commanders", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonathan-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 900 },
{ name: "Daron Payne", team: "Commanders", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/daron-payne.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 880 },
{ name: "Kendall Fuller", team: "Commanders", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kendall-fuller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 800 },
// CUT: Chase Young (traded to 49ers), Montez Sweat (traded to Bears)

// EAGLES
{ name: "Jalen Hurts", team: "Eagles", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-hurts.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 1150 },
{ name: "A.J. Brown", team: "Eagles", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aj-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 1100 },
{ name: "DeVonta Smith", team: "Eagles", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devonta-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 930 },
{ name: "Dallas Goedert", team: "Eagles", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dallas-goedert.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 900 },
{ name: "D'Andre Swift", team: "Eagles", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dandre-swift.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 820 },
{ name: "Jason Kelce", team: "Eagles", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jason-kelce.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 1300 },
{ name: "Lane Johnson", team: "Eagles", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lane-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 1100 },
{ name: "Haason Reddick", team: "Eagles", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/haason-reddick.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 980 },
{ name: "Darius Slay", team: "Eagles", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/darius-slay.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 960 },
{ name: "James Bradberry", team: "Eagles", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/james-bradberry.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 880 },

// 49ERS
{ name: "Brock Purdy", team: "49ers", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brock-purdy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 860 },
{ name: "Christian McCaffrey", team: "49ers", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christian-mccaffrey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1250 },
{ name: "Deebo Samuel", team: "49ers", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deebo-samuel.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1050 },
{ name: "Brandon Aiyuk", team: "49ers", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandon-aiyuk.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 980 },
{ name: "George Kittle", team: "49ers", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/george-kittle.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1120 },
{ name: "Trent Williams", team: "49ers", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trent-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1200 },
{ name: "Nick Bosa", team: "49ers", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-bosa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1250 },
{ name: "Fred Warner", team: "49ers", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/fred-warner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1150 },
{ name: "Talanoa Hufanga", team: "49ers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/talanoa-hufanga.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 900 },
{ name: "Charvarius Ward", team: "49ers", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/charvarius-ward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 860 },

// RAIDERS
{ name: "Davante Adams", team: "Raiders", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/davante-adams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 1200 },
{ name: "Hunter Renfrow", team: "Raiders", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/hunter-renfrow.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 780 },
{ name: "Jakobi Meyers", team: "Raiders", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jakobi-meyers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 800 },
{ name: "Maxx Crosby", team: "Raiders", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/maxx-crosby.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 1120 },
{ name: "Kolton Miller", team: "Raiders", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kolton-miller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 860 },
{ name: "Tre'von Moehrig", team: "Raiders", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trevon-moehrig.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 740 },
// CUT: Josh Jacobs (signed Packers), Jimmy Garoppolo (FA), Chandler Jones (released), Marcus Peters (FA)

// CHARGERS
{ name: "Justin Herbert", team: "Chargers", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-herbert.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 1100 },
{ name: "Quentin Johnston", team: "Chargers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quentin-johnston.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 760 },
{ name: "Derwin James", team: "Chargers", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/derwin-james.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 1120 },
{ name: "Joey Bosa", team: "Chargers", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joey-bosa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 1100 },
{ name: "Khalil Mack", team: "Chargers", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/khalil-mack.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 980 },
{ name: "Asante Samuel Jr", team: "Chargers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/asante-samuel-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 820 },
{ name: "Corey Linsley", team: "Chargers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/corey-linsley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 900 },
// CUT: Austin Ekeler (signed Commanders), Keenan Allen (signed Bears), Mike Williams (signed Jets)

// JAGUARS
{ name: "Trevor Lawrence", team: "Jaguars", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trevor-lawrence.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 980 },
{ name: "Travis Etienne", team: "Jaguars", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/travis-etienne.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 860 },
{ name: "Calvin Ridley", team: "Jaguars", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/calvin-ridley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 900 },
{ name: "Christian Kirk", team: "Jaguars", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christian-kirk.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 820 },
{ name: "Zay Jones", team: "Jaguars", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zay-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 780 },
{ name: "Evan Engram", team: "Jaguars", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/evan-engram.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 800 },
{ name: "Josh Allen", team: "Jaguars", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-allen-lb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 900 },
{ name: "Foyesade Oluokun", team: "Jaguars", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/foyesade-oluokun.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 860 },
{ name: "Tyson Campbell", team: "Jaguars", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyson-campbell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 840 },
{ name: "Brandon Scherff", team: "Jaguars", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandon-scherff.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 900 },

// DOLPHINS
{ name: "Tua Tagovailoa", team: "Dolphins", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tua-tagovailoa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 900 },
{ name: "Tyreek Hill", team: "Dolphins", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyreek-hill.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 1250 },
{ name: "Jaylen Waddle", team: "Dolphins", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaylen-waddle.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 1020 },
{ name: "Raheem Mostert", team: "Dolphins", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/raheem-mostert.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 820 },
{ name: "Jeff Wilson Jr", team: "Dolphins", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeff-wilson-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 760 },
{ name: "Jalen Ramsey", team: "Dolphins", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-ramsey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 1150 },
{ name: "Xavien Howard", team: "Dolphins", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/xavien-howard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 960 },
{ name: "Bradley Chubb", team: "Dolphins", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bradley-chubb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 900 },
{ name: "Jaelan Phillips", team: "Dolphins", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaelan-phillips.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 860 },
{ name: "Connor Williams", team: "Dolphins", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/connor-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 780 },

// JETS
{ name: "Garrett Wilson", team: "Jets", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/garrett-wilson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 1000 },
{ name: "Breece Hall", team: "Jets", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/breece-hall.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 880 },
{ name: "Quinnen Williams", team: "Jets", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quinnen-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 1120 },
{ name: "Sauce Gardner", team: "Jets", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sauce-gardner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 1180 },
{ name: "C.J. Mosley", team: "Jets", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cj-mosley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 900 },
{ name: "D.J. Reed", team: "Jets", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dj-reed.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 840 },
{ name: "Alijah Vera-Tucker", team: "Jets", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alijah-vera-tucker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 820 },
// CUT: Allen Lazard (released), Mecole Hardman (back to Chiefs)

// CARDINALS
{ name: "Kyler Murray", team: "Cardinals", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyler-murray.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 860 },
{ name: "James Conner", team: "Cardinals", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/james-conner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 820 },
{ name: "Marvin Harrison Jr", team: "Cardinals", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marvin-harrison-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 900 },
{ name: "Trey McBride", team: "Cardinals", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trey-mcbride.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 840 },
{ name: "Budda Baker", team: "Cardinals", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/budda-baker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 960 },
{ name: "Jalen Thompson", team: "Cardinals", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-thompson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 820 },
{ name: "Paris Johnson Jr", team: "Cardinals", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/paris-johnson-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 780 },
{ name: "Zaven Collins", team: "Cardinals", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zaven-collins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 760 },
{ name: "BJ Ojulari", team: "Cardinals", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bj-ojulari.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 720 },
{ name: "Michael Wilson", team: "Cardinals", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/michael-wilson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 740 },

// RAMS
{ name: "Matthew Stafford", team: "Rams", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matthew-stafford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 900 },
{ name: "Cooper Kupp", team: "Rams", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cooper-kupp.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 1100 },
{ name: "Puka Nacua", team: "Rams", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/puka-nacua.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 980 },
{ name: "Kyren Williams", team: "Rams", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyren-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 860 },
{ name: "Tyler Higbee", team: "Rams", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyler-higbee.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 780 },
{ name: "Aaron Donald", team: "Rams", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aaron-donald.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 1250 },
{ name: "Ernest Jones", team: "Rams", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ernest-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 820 },
{ name: "Cobie Durant", team: "Rams", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cobie-durant.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 760 },
{ name: "Jordan Fuller", team: "Rams", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-fuller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 780 },
{ name: "Steve Avila", team: "Rams", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/steve-avila.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 740 },

// SEAHAWKS
{ name: "Chris Stoll", team: "Seahawks", rating: 70, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-stoll.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 500 },
{ name: "Jalen Sundell", team: "Seahawks", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-sundell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 520 },
{ name: "Chazz Surratt", team: "Seahawks", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chazz-surratt.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 540 },
{ name: "Drake Thomas", team: "Seahawks", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/drake-thomas.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 530 },
{ name: "Kenneth Walker III", team: "Seahawks", rating: 88, img: "blob:https://express.adobe.com/5ae03c60-0cec-487d-8e8b-4f75344300f7", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 860 },
{ name: "Leonard Williams", team: "Seahawks", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/leonard-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 900 },
{ name: "Devon Witherspoon", team: "Seahawks", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devon-witherspoon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 900 },
{ name: "Riq Woolen", team: "Seahawks", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/riq-woolen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 860 },
{ name: "Dareke Young", team: "Seahawks", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dareke-young.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 540 },
{ name: "Grey Zabel", team: "Seahawks", rating: 68, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/grey-zabel.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 480 },
{ name: "Sam Darnold", team: "Seahawks", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-darnold.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 540 },

{ name: "Uchenna Nwosu", team: "Seahawks", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/uchenna-nwosu.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 820 },
{ name: "Patrick O'Connell", team: "Seahawks", rating: 70, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/patrick-oconnell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 500 },
{ name: "Ty Okada", team: "Seahawks", rating: 69, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ty-okada.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 490 },
{ name: "Olu Oluwatimi", team: "Seahawks", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/olu-oluwatimi.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 540 },
{ name: "Connor O'Toole", team: "Seahawks", rating: 68, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/connor-otoole.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 480 },
{ name: "Robbie Outzs", team: "Seahawks", rating: 67, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/robbie-outzs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 470 },
{ name: "Brandon Pili", team: "Seahawks", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandon-pili.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 520 },
{ name: "Nehemiah Pritchett", team: "Seahawks", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nehemiah-pritchett.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 530 },
{ name: "Jarran Reed", team: "Seahawks", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jarran-reed.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 800 },
{ name: "Mason Richman", team: "Seahawks", rating: 68, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mason-richman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 480 },

{ name: "Brady Russell", team: "Seahawks", rating: 69, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brady-russell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 490 },
{ name: "Eric Saubert", team: "Seahawks", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/eric-saubert.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 540 },
{ name: "Rashid Shaheed", team: "Seahawks", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rashid-shaheed.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 700 },
{ name: "Jaxon Smith-Njigba", team: "Seahawks", rating: 85, img: "blob:https://express.adobe.com/3649d6d5-1963-4d24-b963-51ebadbef337", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 800 },

{ name: "Ernest Jones IV", team: "Seahawks", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ernest-jones-iv.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 560 },
{ name: "Josh Jones", team: "Seahawks", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 520 },
{ name: "Nick Kalerup", team: "Seahawks", rating: 68, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-kalerup.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 480 },
{ name: "Tyrice Knight", team: "Seahawks", rating: 70, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyrice-knight.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 500 },
{ name: "Cooper Kupp", team: "Seahawks", rating: 96, img: "blob:https://express.adobe.com/b9bbfa3f-26f7-4285-a2f0-333f5b770ec2", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 1100 },
{ name: "DeMarcus Lawrence", team: "Seahawks", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/demarcus-lawrence.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 880 },
{ name: "Drew Lock", team: "Seahawks", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/drew-lock.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 500 },
{ name: "Julian Love", team: "Seahawks", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/julian-love.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 800 },
{ name: "Abraham Lucas", team: "Seahawks", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/abraham-lucas.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 760 },
{ name: "Boye Mafe", team: "Seahawks", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/boye-mafe.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 840 },
{ name: "Rylie Mills", team: "Seahawks", rating: 70, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rylie-mills.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 500 },
{ name: "Jalen Milroe", team: "Seahawks", rating: 68, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-milroe.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 480 },
{ name: "Mike Morris", team: "Seahawks", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mike-morris.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 520 },
{ name: "Byron Murphy II", team: "Seahawks", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/byron-murphy-ii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 780 },

{ name: "Elijah Arroyo", team: "Seahawks", rating: 70, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/elijah-arroyo.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 500 },
{ name: "AJ Barner", team: "Seahawks", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aj-barner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 540 },
{ name: "Jake Bobo", team: "Seahawks", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jake-bobo.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 680 },
{ name: "Anthony Bradford", team: "Seahawks", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/anthony-bradford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 560 },
{ name: "Coby Bryant", team: "Seahawks", rating: 78, img: "https://
// CUT: Bobby Wagner (signed Rams), Jamal Adams (released)

// FALCONS
{ name: "Kirk Cousins", team: "Falcons", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kirk-cousins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 860 },
{ name: "Bijan Robinson", team: "Falcons", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bijan-robinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 980 },
{ name: "Drake London", team: "Falcons", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/drake-london.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 860 },
{ name: "Kyle Pitts", team: "Falcons", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyle-pitts.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 840 },
{ name: "Tyler Allgeier", team: "Falcons", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyler-allgeier.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 780 },
{ name: "Jessie Bates III", team: "Falcons", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jessie-bates-iii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 1020 },
{ name: "A.J. Terrell", team: "Falcons", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aj-terrell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 930 },
{ name: "Grady Jarrett", team: "Falcons", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/grady-jarrett.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 880 },
{ name: "Kaden Elliss", team: "Falcons", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kaden-elliss.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 780 },
{ name: "Darnell Mooney", team: "Falcons", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/darnell-mooney.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 760 },

// BUCCANEERS
{ name: "Baker Mayfield", team: "Buccaneers", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/baker-mayfield.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 800 },
{ name: "Mike Evans", team: "Buccaneers", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mike-evans.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 1050 },
{ name: "Chris Godwin", team: "Buccaneers", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-godwin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 930 },
{ name: "Rachaad White", team: "Buccaneers", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rachaad-white.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 840 },
{ name: "Cade Otton", team: "Buccaneers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cade-otton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 760 },
{ name: "Lavonte David", team: "Buccaneers", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lavonte-david.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 910 },
{ name: "Antoine Winfield Jr", team: "Buccaneers", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/antoine-winfield-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 1020 },
{ name: "Tristan Wirfs", team: "Buccaneers", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tristan-wirfs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 980 },
{ name: "Vita Vea", team: "Buccaneers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/vita-vea.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 900 },
// CUT: Devin White (signed Eagles), Carlton Davis (traded Lions)

// SAINTS
{ name: "Derek Carr", team: "Saints", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/derek-carr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 800 },
{ name: "Alvin Kamara", team: "Saints", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alvin-kamara.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 980 },
{ name: "Chris Olave", team: "Saints", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-olave.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 930 },
{ name: "Michael Thomas", team: "Saints", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/michael-thomas.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 820 },
{ name: "Taysom Hill", team: "Saints", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/taysom-hill.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 780 },
{ name: "Cameron Jordan", team: "Saints", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cameron-jordan.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 960 },
{ name: "Demario Davis", team: "Saints", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/demario-davis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 980 },
{ name: "Marshon Lattimore", team: "Saints", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marshon-lattimore.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 930 },
{ name: "Tyrann Mathieu", team: "Saints", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyrann-mathieu.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 900 },
{ name: "Erik McCoy", team: "Saints", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/erik-mccoy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 840 },

// PANTHERS
{ name: "Bryce Young", team: "Panthers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bryce-young.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 720 },
{ name: "Adam Thielen", team: "Panthers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/adam-thielen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 820 },
{ name: "Jonathan Mingo", team: "Panthers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonathan-mingo.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 760 },
{ name: "Miles Sanders", team: "Panthers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/miles-sanders.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 780 },
{ name: "Hayden Hurst", team: "Panthers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/hayden-hurst.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 760 },
{ name: "Brian Burns", team: "Panthers", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brian-burns.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 960 },
{ name: "Jaycee Horn", team: "Panthers", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaycee-horn.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 880 },
{ name: "Shaq Thompson", team: "Panthers", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/shaq-thompson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 840 },
{ name: "Derrick Brown", team: "Panthers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/derrick-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 900 },
{ name: "Xavier Woods", team: "Panthers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/xavier-woods.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 780 },

// STEELERS
{ name: "Justin Fields", team: "Steelers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-fields.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 780 },
{ name: "Najee Harris", team: "Steelers", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/najee-harris.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 840 },
{ name: "George Pickens", team: "Steelers", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/george-pickens.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 860 },
{ name: "Pat Freiermuth", team: "Steelers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/pat-freiermuth.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 820 },
{ name: "T.J. Watt", team: "Steelers", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tj-watt.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 1250 },
{ name: "Minkah Fitzpatrick", team: "Steelers", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/minkah-fitzpatrick.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 1100 },
{ name: "Cam Heyward", team: "Steelers", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cam-heyward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 1000 },
{ name: "Alex Highsmith", team: "Steelers", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alex-highsmith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 880 },
{ name: "Joey Porter Jr", team: "Steelers", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joey-porter-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 840 },
{ name: "Patrick Queen", team: "Steelers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/patrick-queen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 800 },
// CUT: Diontae Johnson (traded Panthers)
// ADDED: Patrick Queen (from Ravens — signed PIT 2024)

// PACKERS
{ name: "Jordan Love", team: "Packers", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-love.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 840 },
{ name: "Josh Jacobs", team: "Packers", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-jacobs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 1000 },
{ name: "Christian Watson", team: "Packers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christian-watson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 820 },
{ name: "Romeo Doubs", team: "Packers", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/romeo-doubs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 800 },
{ name: "Jayden Reed", team: "Packers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jayden-reed.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 780 },
{ name: "Jaire Alexander", team: "Packers", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaire-alexander.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 1100 },
{ name: "Rashan Gary", team: "Packers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rashan-gary.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 900 },
{ name: "Quay Walker", team: "Packers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quay-walker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 820 },
{ name: "Devonte Wyatt", team: "Packers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devonte-wyatt.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 780 },
{ name: "Elgton Jenkins", team: "Packers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/elgton-jenkins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 900 },
// CUT: AJ Dillon (released), Aaron Jones moved to Vikings

// LIONS
{ name: "Jared Goff", team: "Lions", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jared-goff.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 900 },
{ name: "Amon-Ra St. Brown", team: "Lions", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/amon-ra-st-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 1100 },
{ name: "Jahmyr Gibbs", team: "Lions", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jahmyr-gibbs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 900 },
{ name: "David Montgomery", team: "Lions", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/david-montgomery.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 840 },
{ name: "Sam LaPorta", team: "Lions", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-laporta.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 880 },
{ name: "Penei Sewell", team: "Lions", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/penei-sewell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 1100 },
{ name: "Aidan Hutchinson", team: "Lions", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aidan-hutchinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 1050 },
{ name: "Brian Branch", team: "Lions", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brian-branch.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 860 },
{ name: "Kerby Joseph", team: "Lions", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kerby-joseph.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 820 },
{ name: "Alex Anzalone", team: "Lions", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alex-anzalone.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 800 },


];

// Coins display
function updateCoins(){ document.getElementById("coins").innerText = coins; }

// Card rarity
function cardRarity(player) {
    if (player.rating === 99) return "Ultimate";
    if (player.rating >= 97) return "Legendary";
    if (player.rating >= 93) return "Elite";
    if (player.rating >= 81) return "Rare";
    return "Common";
}

// Display collection
function displayCollection() {
    const div = document.getElementById("collection");
    div.innerHTML = "";
    collection.forEach((p,index)=>{
        const card = document.createElement("div");
        card.className="card";
        card.innerHTML = `
            <div class="rarity-label">${cardRarity(p)}</div>
            <img class="player-photo" src="${p.img}" />
            <img class="team-logo" src="${p.logo}" />
            <div class="card-content">
                <h3>${p.name}</h3>
                <p>${p.team}</p>
                <p>⭐ ${p.rating}</p>
                <button onclick="sellCard(${index})">Sell</button>
            </div>
        `;
        div.appendChild(card);
    });
}

function sellCard(index){
    const card = collection.splice(index,1)[0];
    const sellPrice = Math.floor(card.price/2);
    coins += sellPrice;
    alert(`Sold ${card.name} for ${sellPrice} coins!`);
    updateCoins();
    displayCollection();
}

// Store
function toggleStore(){
    const storeDiv = document.getElementById("store-container");
    if(storeDiv.style.display==="none"){
        storeDiv.style.display="block";
        displayStore();
    } else storeDiv.style.display="none";
}

function displayStore(){
    const storeDiv = document.getElementById("store");
    storeDiv.innerHTML="";
    players.forEach((p,index)=>{
        const card = document.createElement("div");
        card.className="card";
        card.innerHTML = `
            <div class="rarity-label">${cardRarity(p)}</div>
            <img class="player-photo" src="${p.img}" />
            <img class="team-logo" src="${p.logo}" />
            <div class="card-content">
                <h3>${p.name}</h3>
                <p>${p.team}</p>
                <p>⭐ ${p.rating}</p>
                <p>Price: ${p.price} coins</p>
                <button onclick="buyCard(${index})">Buy</button>
            </div>
        `;
        storeDiv.appendChild(card);
    });
}

function buyCard(index){
    const p = players[index];
    if(coins >= p.price){
        coins -= p.price;
        collection.push(p);
        alert(`Bought ${p.name}!`);
        updateCoins();
        displayCollection();
    } else alert("Not enough coins!");
}

// Pack opening
function openPack(){
    if(coins < 200){ alert("Not enough coins!"); return; }
    coins -= 200;
    updateCoins();
    const packContainer = document.getElementById("pack-container");
    packContainer.innerHTML="";
    const packCards = [];
    for(let i=0;i<5;i++){
        const card = players[Math.floor(Math.random()*players.length)];
        packCards.push(card);
        collection.push(card);
    }
    packCards.forEach((card,index)=>{
        const cardEl = document.createElement("div");
        cardEl.className="pack-card front";
        cardEl.style.top="0px";
        cardEl.style.left=`${225 + index*20}px`;
        cardEl.innerHTML = `
            <img class="player-photo" src="${card.img}" />
            <img class="team-logo" src="${card.logo}" />
            <div class="card-content">
                <h4>${card.name}</h4>
                <p>${card.team}</p>
                <p>⭐ ${card.rating}</p>
            </div>
        `;
        packContainer.appendChild(cardEl);
        setTimeout(()=>{ cardEl.classList.add("revealed"); }, 500 + index*400);
    });
    setTimeout(displayCollection,3000);
}
// === PART 2: MINI-GAME ===

const canvas = document.getElementById("mini-game");
const ctx = canvas.getContext("2d");
let gameRunning = false;

// Player and defender
let playerObj = {x: 280, y: 250, width: 40, height: 40, speed: 5};
let defender = {x: Math.random()*500, y: 50, width: 40, height: 40, speed: 2};
const endZoneY = 0;
const keys = {};

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

function startMiniGame() {
    if(gameRunning) return;
    gameRunning = true;
    playerObj.x = 280; playerObj.y = 250;
    defender.x = Math.random() * 500; defender.y = 50;
    requestAnimationFrame(gameLoop);
}

function draw3DRect(obj, color) {
    const scale = 1 + (canvas.height - obj.y) / 1000;
    const w = obj.width * scale;
    const h = obj.height * scale;
    const x = obj.x - (w - obj.width)/2;
    const y = obj.y - (h - obj.height)/2;

    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 5;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);

    ctx.shadowBlur = 0;
}

function gameLoop() {
    if(!gameRunning) return;

    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, "#0b3d91");
    grad.addColorStop(1, "#004d00");
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#003366";
    ctx.fillRect(0,0,canvas.width,40);

    if(keys['ArrowLeft'] && playerObj.x>0) playerObj.x -= playerObj.speed;
    if(keys['ArrowRight'] && playerObj.x+playerObj.width<canvas.width) playerObj.x += playerObj.speed;
    if(keys['ArrowUp'] && playerObj.y>0) playerObj.y -= playerObj.speed;
    if(keys['ArrowDown'] && playerObj.y+playerObj.height<canvas.height) playerObj.y += playerObj.speed;

    draw3DRect(playerObj, "yellow");

    defender.y += defender.speed;
    if(defender.y > canvas.height) defender.y = -50;
    defender.x += (defender.x + 20 < playerObj.x + playerObj.width/2 ? 1 : -1);

    draw3DRect(defender, "red");

    if(playerObj.x < defender.x + defender.width &&
       playerObj.x + playerObj.width > defender.x &&
       playerObj.y < defender.y + defender.height &&
       playerObj.y + playerObj.height > defender.y){
        endMiniGame(false); return;
    }

    if(playerObj.y <= endZoneY + 40){ endMiniGame(true); return; }

    requestAnimationFrame(gameLoop);
}

function endMiniGame(won){
    gameRunning=false;
    if(won){ coins+=200; alert("Touchdown! +200 coins"); }
    else alert("Tackle! Try again.");
    updateCoins();
}

updateCoins();
displayCollection();

