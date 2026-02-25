let coins = 500;
let collection = [];

const players = [
  { name: "Josh Allen", team: "Bills", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1200 },
  { name: "Stefon Diggs", team: "Bills", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/stefon-diggs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1050 },
  { name: "Matt Milano", team: "Bills", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matt-milano.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 850 },
  { name: "James Cook", team: "Bills", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/james-cook.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 780 },
  { name: "Dawson Knox", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dawson-knox.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 760 },
  { name: "Gabe Davis", team: "Bills", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/gabe-davis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 740 },
  { name: "Von Miller", team: "Bills", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/von-miller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 900 },
  { name: "Jordan Poyer", team: "Bills", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-poyer.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 820 },
  { name: "Micah Hyde", team: "Bills", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/micah-hyde.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 810 },
  { name: "Tre'Davious White", team: "Bills", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tredavious-white.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 880 },

  { name: "Lamar Jackson", team: "Ravens", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lamar-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 1200 },
  { name: "Mark Andrews", team: "Ravens", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mark-andrews.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 980 },
  { name: "Zay Flowers", team: "Ravens", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zay-flowers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 800 },
  { name: "Odell Beckham Jr", team: "Ravens", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/odell-beckham-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 790 },
  { name: "Rashod Bateman", team: "Ravens", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rashod-bateman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 760 },
  { name: "Roquan Smith", team: "Ravens", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/roquan-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 930 },
  { name: "Marlon Humphrey", team: "Ravens", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marlon-humphrey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 900 },
  { name: "Kyle Hamilton", team: "Ravens", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyle-hamilton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 880 },
  { name: "Patrick Queen", team: "Ravens", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/patrick-queen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 800 },
  { name: "Justin Tucker", team: "Ravens", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-tucker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 950 },

  { name: "Myles Garrett", team: "Browns", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/myles-garrett.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 1200 },
  { name: "Nick Chubb", team: "Browns", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-chubb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 1100 },
  { name: "Amari Cooper", team: "Browns", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/amari-cooper.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 880 },
  { name: "Deshaun Watson", team: "Browns", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deshaun-watson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 820 },
  { name: "David Njoku", team: "Browns", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/david-njoku.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 780 },
  { name: "Jeremiah Owusu-Koramoah", team: "Browns", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeremiah-owusu-koramoah.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 770 },
  { name: "Denzel Ward", team: "Browns", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/denzel-ward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 890 },
  { name: "Joel Bitonio", team: "Browns", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joel-bitonio.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 900 },
  { name: "Wyatt Teller", team: "Browns", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/wyatt-teller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 860 },
  { name: "Grant Delpit", team: "Browns", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/grant-delpit.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 760 },

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

  { name: "Patrick Mahomes", team: "Chiefs", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/patrick-mahomes.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 1250 },
  { name: "Travis Kelce", team: "Chiefs", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/travis-kelce.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 1150 },
  { name: "Isiah Pacheco", team: "Chiefs", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/isiah-pacheco.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 800 },
  { name: "Rashee Rice", team: "Chiefs", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rashee-rice.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 780 },
  { name: "Marquez Valdes-Scantling", team: "Chiefs", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marquez-valdes-scantling.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 740 },
  { name: "Chris Jones", team: "Chiefs", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 1150 },
  { name: "Nick Bolton", team: "Chiefs", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-bolton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 840 },
  { name: "L'Jarius Sneed", team: "Chiefs", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ljarius-sneed.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 860 },
  { name: "Justin Reid", team: "Chiefs", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-reid.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 800 },
  { name: "Creed Humphrey", team: "Chiefs", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/creed-humphrey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 930 },

  { name: "CeeDee Lamb", team: "Cowboys", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ceedee-lamb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 1050 },
  { name: "Micah Parsons", team: "Cowboys", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/micah-parsons.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 1200 },
  { name: "Dak Prescott", team: "Cowboys", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dak-prescott.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 980 },
  { name: "Tony Pollard", team: "Cowboys", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tony-pollard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 860 },
  { name: "Brandin Cooks", team: "Cowboys", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandin-cooks.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 800 },
  { name: "Trevon Diggs", team: "Cowboys", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trevon-diggs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 930 },
  { name: "DeMarcus Lawrence", team: "Cowboys", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/demarcus-lawrence.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 880 },
  { name: "Leighton Vander Esch", team: "Cowboys", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/leighton-vander-esch.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 780 },
  { name: "Zack Martin", team: "Cowboys", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zack-martin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 1100 },
  { name: "Tyron Smith", team: "Cowboys", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyron-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 980 },

  { name: "Justin Jefferson", team: "Vikings", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-jefferson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 1200 },
  { name: "Dalvin Cook", team: "Vikings", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dalvin-cook.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 980 },
  { name: "Adam Thielen", team: "Vikings", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/adam-thielen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 860 },
  { name: "Kirk Cousins", team: "Vikings", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kirk-cousins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 880 },
  { name: "T.J. Hockenson", team: "Vikings", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tj-hockenson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 900 },
  { name: "Harrison Smith", team: "Vikings", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/harrison-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 910 },
  { name: "Danielle Hunter", team: "Vikings", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/danielle-hunter.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 880 },
  { name: "Eric Kendricks", team: "Vikings", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/eric-kendricks.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 840 },
  { name: "Patrick Peterson", team: "Vikings", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/patrick-peterson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 820 },
  { name: "Jordan Addison", team: "Vikings", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-addison.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 780 },

  { name: "Terry McLaurin", team: "Commanders", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/terry-mclaurin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 930 },
  { name: "Jahan Dotson", team: "Commanders", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jahan-dotson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 800 },
  { name: "Sam Howell", team: "Commanders", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-howell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 720 },
  { name: "Brian Robinson Jr", team: "Commanders", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brian-robinson-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 740 },
  { name: "Curtis Samuel", team: "Commanders", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/curtis-samuel.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 740 },
  { name: "Chase Young", team: "Commanders", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chase-young.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 820 },
  { name: "Jonathan Allen", team: "Commanders", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonathan-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 900 },
  { name: "Daron Payne", team: "Commanders", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/daron-payne.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 880 },
  { name: "Kendall Fuller", team: "Commanders", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kendall-fuller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 800 },
  { name: "Montez Sweat", team: "Commanders", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/montez-sweat.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 840 },

  { name: "Jalen Hurts", team: "Eagles", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-hurts.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 1150 },
  { name: "A.J. Brown", team: "Eagles", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aj-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 1100 },
  { name: "DeVonta Smith", team: "Eagles", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devonta-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 930 },
  { name: "Dallas Goedert", team: "Eagles", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dallas-goedert.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 900 },
  { name: "D'Andre Swift", team: "Eagles", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dandre-swift.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 820 },
  { name: "Jason Kelce", team: "Eagles", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jason-kelce.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 1150 },
  { name: "Lane Johnson", team: "Eagles", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lane-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 1100 },
  { name: "Haason Reddick", team: "Eagles", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/haason-reddick.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 980 },
  { name: "Darius Slay", team: "Eagles", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/darius-slay.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 960 },
  { name: "James Bradberry", team: "Eagles", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/james-bradberry.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 880 },

  { name: "Brock Purdy", team: "49ers", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brock-purdy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 860 },
  { name: "Christian McCaffrey", team: "49ers", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christian-mccaffrey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1250 },
  { name: "Deebo Samuel", team: "49ers", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deebo-samuel.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1050 },
  { name: "Brandon Aiyuk", team: "49ers", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandon-aiyuk.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 980 },
  { name: "George Kittle", team: "49ers", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/george-kittle.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1120 },
  { name: "Trent Williams", team: "49ers", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trent-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1200 },
  { name: "Nick Bosa", team: "49ers", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-bosa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1250 },
  { name: "Fred Warner", team: "49ers", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/fred-warner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1150 },
  { name: "Talanoa Hufanga", team: "49ers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/talanoa-hufanga.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 900 },
  { name: "Charvarius Ward", team: "49ers", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/charvarius-ward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 860 },

  { name: "Josh Jacobs", team: "Raiders", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-jacobs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 1000 },
  { name: "Davante Adams", team: "Raiders", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/davante-adams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 1200 },
  { name: "Jimmy Garoppolo", team: "Raiders", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jimmy-garoppolo.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 760 },
  { name: "Hunter Renfrow", team: "Raiders", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/hunter-renfrow.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 780 },
  { name: "Jakobi Meyers", team: "Raiders", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jakobi-meyers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 800 },
  { name: "Maxx Crosby", team: "Raiders", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/maxx-crosby.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 1120 },
  { name: "Chandler Jones", team: "Raiders", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chandler-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 900 },
  { name: "Marcus Peters", team: "Raiders", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marcus-peters.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 820 },
  { name: "Kolton Miller", team: "Raiders", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kolton-miller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 860 },
  { name: "Tre'von Moehrig", team: "Raiders", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trevon-moehrig.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 740 },

  { name: "Justin Herbert", team: "Chargers", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-herbert.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 1100 },
  { name: "Austin Ekeler", team: "Chargers", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/austin-ekeler.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 1000 },
  { name: "Keenan Allen", team: "Chargers", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/keenan-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 1020 },
  { name: "Mike Williams", team: "Chargers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mike-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 900 },
  { name: "Quentin Johnston", team: "Chargers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quentin-johnston.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 760 },
  { name: "Derwin James", team: "Chargers", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/derwin-james.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 1120 },
  { name: "Joey Bosa", team: "Chargers", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joey-bosa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 1100 },
  { name: "Khalil Mack", team: "Chargers", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/khalil-mack.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 980 },
  { name: "Asante Samuel Jr", team: "Chargers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/asante-samuel-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 820 },
  { name: "Corey Linsley", team: "Chargers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/corey-linsley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 900 },

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

  { name: "Tua Tagovailoa", team: "Dolphins", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tua-tagovailoa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 900 },
  { name: "Tyreek Hill", team: "Dolphins", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyreek-hill.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 1250 },
  { name: "Jaylen Waddle", team: "Dolphins", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaylen-waddle.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 1020 },
  { name: "Raheem Mostert", team: "Dolphins", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/raheem-mostert.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 820 },
  { name: "Jeff Wilson Jr", team: "Dolphins", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeff-wilson-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 760 },
  { name: "Jalen Ramsey", team: "Dolphins", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-ramsey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 1150 },
  { name: "Xavien Howard", team: "Dolphins", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/xavien-howard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 960 },
  { name: "Bradley Chubb", team: "Dolphins", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bradley-chubb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 900 },
  { name: "Jaelan Phillips", team: "Dolphins", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaelan-phillips.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 860 },
  { name: "Connor Williams", team: "Dolphins", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/connor-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 780 },

  { name: "Garrett Wilson", team: "Jets", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/garrett-wilson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 1000 },
  { name: "Breece Hall", team: "Jets", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/breece-hall.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 880 },
  { name: "Allen Lazard", team: "Jets", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/allen-lazard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 780 },
  { name: "Mecole Hardman", team: "Jets", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mecole-hardman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 760 },
  { name: "Quinnen Williams", team: "Jets", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quinnen-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 1120 },
  { name: "C.J. Mosley", team: "Jets", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cj-mosley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 900 },
  { name: "D.J. Reed", team: "Jets", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dj-reed.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 840 },
  { name: "Alijah Vera-Tucker", team: "Jets", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alijah-vera-tucker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 820 },

  { name: "Josh Allen", team: "Bills", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1200 },
  { name: "Stefon Diggs", team: "Bills", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/stefon-diggs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1050 },
  { name: "Matt Milano", team: "Bills", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matt-milano.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 850 },
  { name: "James Cook", team: "Bills", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/james-cook.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 780 },
  { name: "Dawson Knox", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dawson-knox.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 760 },
  { name: "Gabe Davis", team: "Bills", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/gabe-davis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 740 },
  { name: "Von Miller", team: "Bills", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/von-miller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 900 },
  { name: "Jordan Poyer", team: "Bills", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-poyer.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 820 },
  { name: "Micah Hyde", team: "Bills", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/micah-hyde.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 810 },
  { name: "Tre'Davious White", team: "Bills", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tredavious-white.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 880 },
  // 200th player ends here in this chunk
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

{ name: "Matthew Stafford", team: "Rams", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matthew-stafford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 900 },
{ name: "Cooper Kupp", team: "Rams", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cooper-kupp.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 1100 },
{ name: "Puka Nacua", team: "Rams", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/puka-nacua.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 980 },
{ name: "Kyren Williams", team: "Rams", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyren-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 860 },
{ name: "Tyler Higbee", team: "Rams", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyler-higbee.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 780 },
{ name: "Aaron Donald", team: "Rams", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aaron-donald.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 1250 },
{ name: "Ernest Jones", team: "Rams", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ernest-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 820 },
{ name: "Cobie Durant", team: "Rams", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cobie-durant.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 760 },
{ name: "Jordan Fuller", team: "Rams", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-fuller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 780 },
{ name: "Steve Avila", team: "Rams", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/steve-avila.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 740 },

{ name: "Geno Smith", team: "Seahawks", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/geno-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 840 },
{ name: "DK Metcalf", team: "Seahawks", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dk-metcalf.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 1020 },
{ name: "Tyler Lockett", team: "Seahawks", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyler-lockett.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 930 },
{ name: "Kenneth Walker III", team: "Seahawks", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kenneth-walker-iii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 860 },
{ name: "Jaxon Smith-Njigba", team: "Seahawks", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaxon-smith-njigba.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 800 },
{ name: "Bobby Wagner", team: "Seahawks", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bobby-wagner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 960 },
{ name: "Devon Witherspoon", team: "Seahawks", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devon-witherspoon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 900 },
{ name: "Quandre Diggs", team: "Seahawks", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quandre-diggs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 880 },
{ name: "Jamal Adams", team: "Seahawks", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jamal-adams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 840 },
{ name: "Uchenna Nwosu", team: "Seahawks", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/uchenna-nwosu.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 820 },

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
]
// Coins display
function updateCoins(){ document.getElementById("coins").innerText=coins; }

// Card rarity
function cardRarity(player) {
    if (player.rating === 99) return "Ultimate";
    if (player.rating >= 97) return "Legendary";
    if (player.rating >= 93) return "Elite";
    if (player.rating >= 81) return "Rare";
    return "Common";
}


// Display collection
function displayCollection(){
    const div = document.getElementById("collection");
    div.innerHTML="";
    collection.forEach((p,index)=>{
        const card = document.createElement("div");
        card.className="card";
        card.innerHTML=`
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
    coins+=sellPrice;
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
        card.innerHTML=`
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

// Buy card
function buyCard(index){
    const p = players[index];
    if(coins>=p.price){
        coins-=p.price;
        collection.push(p);
        alert(`Bought ${p.name}!`);
        updateCoins();
        displayCollection();
    } else alert("Not enough coins!");
}

// Madden-style pack opening
function openPack(){
    if(coins<200){ alert("Not enough coins!"); return; }
    coins-=200;
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
        cardEl.innerHTML=`
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

// Mini-game (Retro Bowl simplified 3D)
const canvas = document.getElementById("mini-game");
const ctx = canvas.getContext("2d");
let gameRunning = false;

// Player and defender objects
let playerObj = {x: 280, y: 250, width: 40, height: 40, speed: 5};
let defender = {x: Math.random()*500, y: 50, width: 40, height: 40, speed: 2};
const endZoneY = 0;
const keys = {};

// Listen to key presses
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
    // simulate 3D by adding a shadow and scaling by y-position
    const scale = 1 + (canvas.height - obj.y) / 1000; // closer = bigger
    const w = obj.width * scale;
    const h = obj.height * scale;
    const x = obj.x - (w - obj.width)/2;
    const y = obj.y - (h - obj.height)/2;

    // shadow
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 5;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);

    // reset shadow
    ctx.shadowBlur = 0;
}

function gameLoop() {
    if(!gameRunning) return;

    // Background with pseudo-3D gradient
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, "#0b3d91"); // far field
    grad.addColorStop(1, "#004d00"); // near field
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // End zone
    ctx.fillStyle = "#003366";
    ctx.fillRect(0,0,canvas.width,40);

    // Move player
    if(keys['ArrowLeft'] && playerObj.x>0) playerObj.x -= playerObj.speed;
    if(keys['ArrowRight'] && playerObj.x+playerObj.width<canvas.width) playerObj.x += playerObj.speed;
    if(keys['ArrowUp'] && playerObj.y>0) playerObj.y -= playerObj.speed;
    if(keys['ArrowDown'] && playerObj.y+playerObj.height<canvas.height) playerObj.y += playerObj.speed;

    // Draw 3D player
    draw3DRect(playerObj, "yellow");

    // Move defender
    defender.y += defender.speed;
    if(defender.y > canvas.height) defender.y = -50;
    defender.x += (defender.x + 20 < playerObj.x + playerObj.width/2 ? 1 : -1);

    // Draw 3D defender
    draw3DRect(defender, "red");

    // Collision
    if(playerObj.x < defender.x + defender.width &&
       playerObj.x + playerObj.width > defender.x &&
       playerObj.y < defender.y + defender.height &&
       playerObj.y + playerObj.height > defender.y){
        endMiniGame(false); return;
    }

    // Touchdown
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
