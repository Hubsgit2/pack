// === PART 1: DATA + STORE + PACKS ===

let coins = 500;
let collection = [];

const nflRoster = [
  // ==================== Arizona Cardinals ====================
  { name: "Kyler Murray", team: "Cardinals", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyler-murray.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 500 },
  { name: "James Conner", team: "Cardinals", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/james-conner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 650 },
  { name: "Marvin Harrison Jr", team: "Cardinals", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marvin-harrison-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 550 },
  { name: "Trey McBride", team: "Cardinals", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trey-mcbride.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 1000 },
  { name: "Budda Baker", team: "Cardinals", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/budda-baker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 650 },
  { name: "Paris Johnson Jr", team: "Cardinals", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/paris-johnson-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ARI", price: 250 },
{ name: "Josh Allen", team: "Bills", rating: 99, img: "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnfl%2Fplayers%2Fbuffalo-bills-josh-allen2025--qcoxd6nl.png&w=600&h=600&f=webp", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1200 },
  // ==================== Atlanta Falcons ====================
  { name: "Michael Penix Jr", team: "Falcons", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/michael-penix-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 150 },
  { name: "Bijan Robinson", team: "Falcons", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bijan-robinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 900 },
  { name: "Drake London", team: "Falcons", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/drake-london.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 550 },
  { name: "Kyle Pitts", team: "Falcons", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyle-pitts.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 400 },
  { name: "Darnell Mooney", team: "Falcons", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/darnell-mooney.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 350 },
  { name: "Grady Jarrett", team: "Falcons", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/grady-jarrett.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/ATL", price: 450 },

  // ==================== Baltimore Ravens ====================
  { name: "Lamar Jackson", team: "Ravens", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lamar-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 900 },
  { name: "Derrick Henry", team: "Ravens", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/derrick-henry.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 800 },
  { name: "Zay Flowers", team: "Ravens", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zay-flowers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 500 },
  { name: "Mark Andrews", team: "Ravens", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mark-andrews.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 500 },
  { name: "Roquan Smith", team: "Ravens", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/roquan-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 800 },
  { name: "Marlon Humphrey", team: "Ravens", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marlon-humphrey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 500 },
  { name: "Kyle Hamilton", team: "Ravens", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyle-hamilton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BAL", price: 750 },

  // ==================== Buffalo Bills ====================
  { name: "Josh Allen", team: "Bills", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1200 },
  { name: "James Cook", team: "Bills", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/james-cook.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 450 },
  { name: "Amari Cooper", team: "Bills", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/amari-cooper.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 400 },
  { name: "Khalil Shakir", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/khalil-shakir.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 350 },
  { name: "Matt Milano", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matt-milano.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 350 },
  { name: "Gregory Rousseau", team: "Bills", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/gregory-rousseau.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 500 },
  { name: "Dion Dawkins", team: "Bills", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dion-dawkins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 550 },

  // ==================== Carolina Panthers ====================
  { name: "Bryce Young", team: "Panthers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bryce-young.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 100 },
  { name: "Chuba Hubbard", team: "Panthers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chuba-hubbard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 350 },
  { name: "Diontae Johnson", team: "Panthers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/diontae-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 250 },
  { name: "Derrick Brown", team: "Panthers", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/derrick-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 950 },
  { name: "Jaycee Horn", team: "Panthers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaycee-horn.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 450 },
  { name: "Damien Lewis", team: "Panthers", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/damien-lewis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CAR", price: 400 },

  // ==================== Chicago Bears ====================
  { name: "Caleb Williams", team: "Bears", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/caleb-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 350 },
  { name: "D'Andre Swift", team: "Bears", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dandre-swift.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 400 },
  { name: "DJ Moore", team: "Bears", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dj-moore.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 500 },
  { name: "Rome Odunze", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rome-odunze.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 200 },
  { name: "Montez Sweat", team: "Bears", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/montez-sweat.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 650 },
  { name: "Jaquan Brisker", team: "Bears", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaquan-brisker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 400 },
  { name: "Keenan Allen", team: "Bears", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/keenan-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 450 },

  // ==================== Cincinnati Bengals ====================
  { name: "Joe Burrow", team: "Bengals", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-burrow.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 950 },
  { name: "Ja'Marr Chase", team: "Bengals", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jamarr-chase.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 1200 },
  { name: "Tee Higgins", team: "Bengals", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tee-higgins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 500 },
  { name: "Zack Moss", team: "Bengals", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zack-moss.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Trey Hendrickson", team: "Bengals", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trey-hendrickson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 750 },
  { name: "Sam Hubbard", team: "Bengals", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-hubbard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 350 },

  // ==================== Cleveland Browns ====================
  { name: "Deshaun Watson", team: "Browns", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deshaun-watson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Myles Garrett", team: "Browns", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/myles-garrett.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 1200 },
  { name: "Nick Chubb", team: "Browns", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-chubb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 350 },
  { name: "Jerry Jeudy", team: "Browns", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jerry-jeudy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 350 },
  { name: "Denzel Ward", team: "Browns", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/denzel-ward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 600 },
  { name: "Jeremiah Owusu-Koramoah", team: "Browns", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeremiah-owusu-koramoah.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 450 },

  // ==================== Dallas Cowboys ====================
  { name: "Dak Prescott", team: "Cowboys", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dak-prescott.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 450 },
  { name: "CeeDee Lamb", team: "Cowboys", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ceedee-lamb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 800 },
  { name: "Zack Martin", team: "Cowboys", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zack-martin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 700 },
  { name: "DeMarcus Lawrence", team: "Cowboys", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/demarcus-lawrence.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 350 },
  { name: "Trevon Diggs", team: "Cowboys", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trevon-diggs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 500 },
  { name: "Rico Dowdle", team: "Cowboys", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rico-dowdle.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DAL", price: 250 },

  // ==================== Denver Broncos ====================
  { name: "Bo Nix", team: "Broncos", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bo-nix.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 250 },
  { name: "Javonte Williams", team: "Broncos", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/javonte-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 250 },
  { name: "Courtland Sutton", team: "Broncos", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/courtland-sutton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 400 },
  { name: "Patrick Surtain II", team: "Broncos", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/patrick-surtain-ii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 1000 },
  { name: "Garett Bolles", team: "Broncos", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/garett-bolles.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 950 },
  { name: "Nik Bonitto", team: "Broncos", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nik-bonitto.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 400 },

  // ==================== Detroit Lions ====================
  { name: "Jared Goff", team: "Lions", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jared-goff.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 650 },
  { name: "Jahmyr Gibbs", team: "Lions", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jahmyr-gibbs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 1100 },
  { name: "Amon-Ra St. Brown", team: "Lions", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/amon-ra-st-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 950 },
  { name: "Penei Sewell", team: "Lions", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/penei-sewell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 1100 },
  { name: "Aidan Hutchinson", team: "Lions", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aidan-hutchinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 750 },
  { name: "Sam LaPorta", team: "Lions", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-laporta.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 450 },
  { name: "Brian Branch", team: "Lions", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brian-branch.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DET", price: 450 },

  // ==================== Green Bay Packers ====================
  { name: "Jordan Love", team: "Packers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-love.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 450 },
  { name: "Josh Jacobs", team: "Packers", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-jacobs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 600 },
  { name: "Jayden Reed", team: "Packers", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jayden-reed.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 400 },
  { name: "Micah Parsons", team: "Packers", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/micah-parsons.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 1100 },
  { name: "Jaire Alexander", team: "Packers", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaire-alexander.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 500 },
  { name: "Rashan Gary", team: "Packers", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rashan-gary.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 550 },
  { name: "Stefon Diggs", team: "Packers", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/stefon-diggs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/GB", price: 400 },

  // ==================== Houston Texans ====================
  { name: "C.J. Stroud", team: "Texans", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cj-stroud.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/HOU", price: 550 },
  { name: "Joe Mixon", team: "Texans", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-mixon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/HOU", price: 500 },
  { name: "Nico Collins", team: "Texans", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nico-collins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/HOU", price: 650 },
  { name: "Stefon Diggs", team: "Texans", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/stefon-diggs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/HOU", price: 400 },
  { name: "Will Anderson Jr", team: "Texans", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/will-anderson-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/HOU", price: 600 },
  { name: "Derek Stingley Jr", team: "Texans", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/derek-stingley-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/HOU", price: 750 },
  { name: "Dalton Schultz", team: "Texans", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dalton-schultz.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/HOU", price: 350 },

  // ==================== Indianapolis Colts ====================
  { name: "Anthony Richardson", team: "Colts", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/anthony-richardson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/IND", price: 100 },
  { name: "Jonathan Taylor", team: "Colts", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonathan-taylor.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/IND", price: 950 },
  { name: "Michael Pittman Jr", team: "Colts", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/michael-pittman-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/IND", price: 350 },
  { name: "Sauce Gardner", team: "Colts", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sauce-gardner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/IND", price: 700 },
  { name: "Quenton Nelson", team: "Colts", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quenton-nelson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/IND", price: 800 },
  { name: "DeForest Buckner", team: "Colts", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deforest-buckner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/IND", price: 650 },

  // ==================== Jacksonville Jaguars ====================
  { name: "Trevor Lawrence", team: "Jaguars", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trevor-lawrence.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 350 },
  { name: "Travis Etienne Jr", team: "Jaguars", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/travis-etienne-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 400 },
  { name: "Brian Thomas Jr", team: "Jaguars", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brian-thomas-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 350 },
  { name: "Evan Engram", team: "Jaguars", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/evan-engram.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 450 },
  { name: "Josh Hines-Allen", team: "Jaguars", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-hines-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 650 },
  { name: "Tyson Campbell", team: "Jaguars", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyson-campbell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/JAX", price: 400 },

  // ==================== Kansas City Chiefs ====================
  { name: "Patrick Mahomes", team: "Chiefs", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/patrick-mahomes.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 900 },
  { name: "Isiah Pacheco", team: "Chiefs", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/isiah-pacheco.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 450 },
  { name: "Travis Kelce", team: "Chiefs", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/travis-kelce.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 850 },
  { name: "George Karlaftis", team: "Chiefs", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/george-karlaftis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 700 },
  { name: "Chris Jones", team: "Chiefs", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 850 },
  { name: "Trent McDuffie", team: "Chiefs", rating: 94, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trent-mcduffie.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 850 },
  { name: "Joe Thuney", team: "Chiefs", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-thuney.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/KC", price: 950 },

  // ==================== Las Vegas Raiders ====================
  { name: "Aidan O'Connell", team: "Raiders", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aidan-oconnell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 100 },
  { name: "Maxx Crosby", team: "Raiders", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/maxx-crosby.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 1000 },
  { name: "Davante Adams", team: "Raiders", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/davante-adams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 550 },
  { name: "Kolton Miller", team: "Raiders", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kolton-miller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 700 },
  { name: "Josh Jacobs", team: "Raiders", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-jacobs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 500 },
  { name: "Nate Hobbs", team: "Raiders", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nate-hobbs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LV", price: 300 },

  // ==================== Los Angeles Chargers ====================
  { name: "Justin Herbert", team: "Chargers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-herbert.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 650 },
  { name: "J.K. Dobbins", team: "Chargers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jk-dobbins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 350 },
  { name: "Ladd McConkey", team: "Chargers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ladd-mcconkey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 350 },
  { name: "Rashawn Slater", team: "Chargers", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rashawn-slater.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 750 },
  { name: "Joey Bosa", team: "Chargers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joey-bosa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 450 },
  { name: "Khalil Mack", team: "Chargers", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/khalil-mack.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 550 },
  { name: "Derwin James Jr", team: "Chargers", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/derwin-james-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAC", price: 650 },

  // ==================== Los Angeles Rams ====================
  { name: "Matthew Stafford", team: "Rams", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matthew-stafford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 1100 },
  { name: "Kyren Williams", team: "Rams", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyren-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 400 },
  { name: "Puka Nacua", team: "Rams", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/puka-nacua.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 1000 },
  { name: "Cooper Kupp", team: "Rams", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cooper-kupp.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 550 },
  { name: "Davante Adams", team: "Rams", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/davante-adams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 600 },
  { name: "Jalen Ramsey", team: "Rams", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-ramsey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 650 },
  { name: "Kevin Dotson", team: "Rams", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kevin-dotson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/LAR", price: 500 },

  // ==================== Miami Dolphins ====================
  { name: "Tua Tagovailoa", team: "Dolphins", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tua-tagovailoa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 350 },
  { name: "De'Von Achane", team: "Dolphins", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devon-achane.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 550 },
  { name: "Tyreek Hill", team: "Dolphins", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyreek-hill.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 800 },
  { name: "Jaylen Waddle", team: "Dolphins", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaylen-waddle.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 500 },
  { name: "Jalen Ramsey", team: "Dolphins", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-ramsey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 600 },
  { name: "Terron Armstead", team: "Dolphins", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/terron-armstead.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 600 },
  { name: "Bradley Chubb", team: "Dolphins", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bradley-chubb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIA", price: 350 },

  // ==================== Minnesota Vikings ====================
  { name: "Sam Darnold", team: "Vikings", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-darnold.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 400 },
  { name: "Aaron Jones", team: "Vikings", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aaron-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 450 },
  { name: "Justin Jefferson", team: "Vikings", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-jefferson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 900 },
  { name: "T.J. Hockenson", team: "Vikings", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tj-hockenson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 550 },
  { name: "Jonathan Greenard", team: "Vikings", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonathan-greenard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 600 },
  { name: "Byron Murphy Jr", team: "Vikings", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/byron-murphy-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 450 },
  { name: "Harrison Smith", team: "Vikings", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/harrison-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/MIN", price: 400 },

  // ==================== New England Patriots ====================
  { name: "Drake Maye", team: "Patriots", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/drake-maye.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NE", price: 100 },
  { name: "Rhamondre Stevenson", team: "Patriots", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rhamondre-stevenson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NE", price: 350 },
  { name: "Christian Gonzalez", team: "Patriots", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christian-gonzalez.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NE", price: 1100 },
  { name: "Matthew Judon", team: "Patriots", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matthew-judon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NE", price: 450 },
  { name: "Christian Barmore", team: "Patriots", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christian-barmore.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NE", price: 450 },
  { name: "Kendrick Bourne", team: "Patriots", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kendrick-bourne.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NE", price: 150 },

  // ==================== New Orleans Saints ====================
  { name: "Derek Carr", team: "Saints", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/derek-carr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 150 },
  { name: "Alvin Kamara", team: "Saints", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alvin-kamara.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 550 },
  { name: "Chris Olave", team: "Saints", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-olave.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 450 },
  { name: "Marshon Lattimore", team: "Saints", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marshon-lattimore.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 450 },
  { name: "Cameron Jordan", team: "Saints", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cameron-jordan.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 350 },
  { name: "Demario Davis", team: "Saints", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/demario-davis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 500 },
  { name: "Tyrann Mathieu", team: "Saints", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyrann-mathieu.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NO", price: 300 },

  // ==================== New York Giants ====================
  { name: "Daniel Jones", team: "Giants", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/daniel-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYG", price: 100 },
  { name: "Saquon Barkley", team: "Giants", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/saquon-barkley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYG", price: 600 },
  { name: "Malik Nabers", team: "Giants", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/malik-nabers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYG", price: 350 },
  { name: "Andrew Thomas", team: "Giants", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/andrew-thomas.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYG", price: 800 },
  { name: "Dexter Lawrence", team: "Giants", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dexter-lawrence.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYG", price: 800 },
  { name: "Kayvon Thibodeaux", team: "Giants", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kayvon-thibodeaux.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYG", price: 350 },

  // ==================== New York Jets ====================
  { name: "Aaron Rodgers", team: "Jets", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aaron-rodgers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 250 },
  { name: "Breece Hall", team: "Jets", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/breece-hall.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 500 },
  { name: "Garrett Wilson", team: "Jets", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/garrett-wilson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 500 },
  { name: "Quinnen Williams", team: "Jets", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quinnen-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 750 },
  { name: "D.J. Reed", team: "Jets", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dj-reed.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 400 },
  { name: "Jermaine Johnson II", team: "Jets", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jermaine-johnson-ii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/NYJ", price: 350 },

  // ==================== Philadelphia Eagles ====================
  { name: "Jalen Hurts", team: "Eagles", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-hurts.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 650 },
  { name: "Saquon Barkley", team: "Eagles", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/saquon-barkley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 900 },
  { name: "A.J. Brown", team: "Eagles", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aj-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 800 },
  { name: "DeVonta Smith", team: "Eagles", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devonta-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 700 },
  { name: "Lane Johnson", team: "Eagles", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lane-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 1200 },
  { name: "Jason Kelce", team: "Eagles", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jason-kelce.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 650 },
  { name: "Quinyon Mitchell", team: "Eagles", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quinyon-mitchell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 600 },
  { name: "Darius Slay Jr", team: "Eagles", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/darius-slay-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PHI", price: 500 },

  // ==================== Pittsburgh Steelers ====================
  { name: "Russell Wilson", team: "Steelers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/russell-wilson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 250 },
  { name: "Najee Harris", team: "Steelers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/najee-harris.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 300 },
  { name: "George Pickens", team: "Steelers", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/george-pickens.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 400 },
  { name: "T.J. Watt", team: "Steelers", rating: 95, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tj-watt.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 900 },
  { name: "Cameron Heyward", team: "Steelers", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cameron-heyward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 700 },
  { name: "Minkah Fitzpatrick", team: "Steelers", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/minkah-fitzpatrick.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 600 },
  { name: "Patrick Queen", team: "Steelers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/patrick-queen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/PIT", price: 350 },

  // ==================== San Francisco 49ers ====================
  { name: "Brock Purdy", team: "49ers", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brock-purdy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 550 },
  { name: "Christian McCaffrey", team: "49ers", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christian-mccaffrey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 950 },
  { name: "Brandon Aiyuk", team: "49ers", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandon-aiyuk.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 600 },
  { name: "George Kittle", team: "49ers", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/george-kittle.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1100 },
  { name: "Trent Williams", team: "49ers", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trent-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1000 },
  { name: "Fred Warner", team: "49ers", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/fred-warner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1000 },
  { name: "Nick Bosa", team: "49ers", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-bosa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 800 },
  { name: "Charvarius Ward", team: "49ers", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/charvarius-ward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 550 },

  // ==================== Seattle Seahawks ====================
  { name: "Geno Smith", team: "Seahawks", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/geno-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 250 },
  { name: "Kenneth Walker III", team: "Seahawks", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kenneth-walker-iii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 450 },
  { name: "DK Metcalf", team: "Seahawks", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dk-metcalf.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 650 },
  { name: "Tyler Lockett", team: "Seahawks", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyler-lockett.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 350 },
  { name: "Devon Witherspoon", team: "Seahawks", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devon-witherspoon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 600 },
  { name: "Leonard Williams", team: "Seahawks", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/leonard-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 550 },
  { name: "Boye Mafe", team: "Seahawks", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/boye-mafe.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SEA", price: 350 },

  // ==================== Tampa Bay Buccaneers ====================
  { name: "Baker Mayfield", team: "Buccaneers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/baker-mayfield.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 450 },
  { name: "Rachaad White", team: "Buccaneers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rachaad-white.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 250 },
  { name: "Mike Evans", team: "Buccaneers", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mike-evans.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 750 },
  { name: "Chris Godwin", team: "Buccaneers", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-godwin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 600 },
  { name: "Vita Vea", team: "Buccaneers", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/vita-vea.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 700 },
  { name: "Lavonte David", team: "Buccaneers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lavonte-david.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 450 },
  { name: "Antoine Winfield Jr", team: "Buccaneers", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/antoine-winfield-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 800 },

  // ==================== Tennessee Titans ====================
  { name: "Will Levis", team: "Titans", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/will-levis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 100 },
  { name: "Tony Pollard", team: "Titans", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tony-pollard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 350 },
  { name: "DeAndre Hopkins", team: "Titans", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deandre-hopkins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 400 },
  { name: "Jeffery Simmons", team: "Titans", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeffery-simmons.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 750 },
  { name: "Harold Landry III", team: "Titans", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/harold-landry-iii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 500 },
  { name: "Kevin Byard", team: "Titans", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kevin-byard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TEN", price: 350 },

  // ==================== Washington Commanders ====================
  { name: "Jayden Daniels", team: "Commanders", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jayden-daniels.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 350 },
  { name: "Brian Robinson Jr", team: "Commanders", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brian-robinson-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 300 },
  { name: "Terry McLaurin", team: "Commanders", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/terry-mclaurin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 650 },
  { name: "Jahan Dotson", team: "Commanders", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jahan-dotson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 100 },
  { name: "Jonathan Allen", team: "Commanders", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonathan-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 650 },
  { name: "Daron Payne", team: "Commanders", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/daron-payne.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 500 },
  { name: "Emmanuel Forbes Jr", team: "Commanders", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/emmanuel-forbes-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/WAS", price: 100 },
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

