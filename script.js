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
{ name: "George Kittle", team: "49ers", rating: 98, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/george-kittle.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1000 },
  { name: "Trent Williams", team: "49ers", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trent-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1000 },
  { name: "Fred Warner", team: "49ers", rating: 97, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/fred-warner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 1000 },
  { name: "Christian McCaffrey", team: "49ers", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christian-mccaffrey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 900 },
  { name: "Nick Bosa", team: "49ers", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-bosa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 800 },
  { name: "Brandon Aiyuk", team: "49ers", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandon-aiyuk.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 600 },
  { name: "Brock Purdy", team: "49ers", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brock-purdy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 500 },
  { name: "Demarcus Robinson", team: "49ers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/demarcus-robinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 300 },
  { name: "Eli Apple", team: "49ers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/eli-apple.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 300 },
  { name: "Clelin Ferrell", team: "49ers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/clelin-ferrell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 300 },
  { name: "Siran Neal", team: "49ers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/siran-neal.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 300 },
  { name: "Trent Taylor", team: "49ers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trent-taylor.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 300 },
  { name: "Brandon Parker", team: "49ers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandon-parker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 300 },
  { name: "Brian Robinson Jr.", team: "49ers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brian-robinson-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 300 },
  { name: "Luke Gifford", team: "49ers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/luke-gifford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 300 },
  { name: "Jake Brendel", team: "49ers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jake-brendel.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Mac Jones", team: "49ers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mac-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Eddy Pineiro", team: "49ers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/eddy-pineiro.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Jauan Jennings", team: "49ers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jauan-jennings.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Skyy Moore", team: "49ers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/skyy-moore.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Malik Turner", team: "49ers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/malik-turner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Yetur Gross-Matos", team: "49ers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/yetur-gross-matos.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Bryce Huff", team: "49ers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bryce-huff.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Eric Kendricks", team: "49ers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/eric-kendricks.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Deommodore Lenoir", team: "49ers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deommodore-lenoir.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Patrick Taylor Jr.", team: "49ers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/patrick-taylor-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 250 },
  { name: "Kendrick Bourne", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kendrick-bourne.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Luke Farrell", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/luke-farrell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Colton McKivitz", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/colton-mckivitz.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Zach Thomas", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zach-thomas.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Nick Zakelj", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-zakelj.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Kalia Davis", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kalia-davis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Jordan Elliott", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-elliott.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Darrick Forrest", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/darrick-forrest.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Kevin Givens", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kevin-givens.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Jason Pinnock", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jason-pinnock.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Curtis Robinson", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/curtis-robinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Garret Wallow", team: "49ers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/garret-wallow.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Spencer Burford", team: "49ers", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/spencer-burford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Matt Hennessy", team: "49ers", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matt-hennessy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Ben Bartch", team: "49ers", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ben-bartch.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 200 },
  { name: "Kyle Juszczyk", team: "49ers", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyle-juszczyk.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Colton Dowell", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/colton-dowell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Isaac Guerendo", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/isaac-guerendo.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Ricky Pearsall", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ricky-pearsall.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Robert Beal Jr.", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/robert-beal-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Renardo Green", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/renardo-green.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Chase Lucas", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chase-lucas.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Darrell Luter Jr.", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/darrell-luter-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Keion White", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/keion-white.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Jacob Cowing", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jacob-cowing.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Tarron Jackson", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tarron-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Tre Tomlinson", team: "49ers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tre-tomlinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 150 },
  { name: "Jake Tonges", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jake-tonges.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Brayden Willis", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brayden-willis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Evan Anderson", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/evan-anderson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Ji'Ayir Brown", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jiayir-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Milo Eifler", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/milo-eifler.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Andrew Farmer", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/andrew-farmer.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Jalen Graham", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-graham.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Malik Mustapha", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/malik-mustapha.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Sam Okuayinonu", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-okuayinonu.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Dee Winters", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dee-winters.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Tatum Bethune", team: "49ers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tatum-bethune.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Adrian Martinez", team: "49ers", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/adrian-martinez.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Dominick Puni", team: "49ers", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dominick-puni.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Thomas Morstead", team: "49ers", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/thomas-morstead.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Kurtis Rourke", team: "49ers", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kurtis-rourke.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 125 },
  { name: "Junior Bergen", team: "49ers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/junior-bergen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Jordan James", team: "49ers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-james.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Jordan Watkins", team: "49ers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-watkins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "William Bradley-King", team: "49ers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/william-bradley-king.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Derrick Canteen", team: "49ers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/derrick-canteen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Upton Stout", team: "49ers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/upton-stout.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Jakob Robinson", team: "49ers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jakob-robinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Mykel Williams", team: "49ers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mykel-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Isaac Alarcon", team: "49ers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/isaac-alarcon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Austen Pleasants", team: "49ers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/austen-pleasants.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Hayden Rucci", team: "49ers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/hayden-rucci.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Alfred Collins", team: "49ers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alfred-collins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Marques Sigle", team: "49ers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marques-sigle.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Sebastian Valdez", team: "49ers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sebastian-valdez.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "C.J. West", team: "49ers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cj-west.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Nick Martin", team: "49ers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-martin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Connor Colby", team: "49ers", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/connor-colby.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Drake Nugent", team: "49ers", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/drake-nugent.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },
  { name: "Jon Weeks", team: "49ers", rating: 70, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jon-weeks.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/SF", price: 100 },

  // ==================== Bears ====================
  { name: "Joe Thuney", team: "Bears", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-thuney.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 900 },
  { name: "Montez Sweat", team: "Bears", rating: 90, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/montez-sweat.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 600 },
  { name: "DJ Moore", team: "Bears", rating: 87, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dj-moore.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 500 },
  { name: "Grady Jarrett", team: "Bears", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/grady-jarrett.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 400 },
  { name: "D'Andre Swift", team: "Bears", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dandre-swift.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 400 },
  { name: "Jaquan Brisker", team: "Bears", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaquan-brisker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 400 },
  { name: "Travis Homer", team: "Bears", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/travis-homer.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "Caleb Williams", team: "Bears", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/caleb-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "Olamide Zaccheaus", team: "Bears", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/olamide-zaccheaus.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "Case Keenum", team: "Bears", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/case-keenum.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "Durham Smythe", team: "Bears", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/durham-smythe.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "Andrew Billings", team: "Bears", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/andrew-billings.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "Kevin Byard III", team: "Bears", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kevin-byard-iii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "Tremaine Edmunds", team: "Bears", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tremaine-edmunds.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "C.J. Gardner-Johnson", team: "Bears", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cj-gardner-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "Jonathan Owens", team: "Bears", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonathan-owens.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "Jalen Reeves-Maybin", team: "Bears", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-reeves-maybin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "T.J. Edwards", team: "Bears", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tj-edwards.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 300 },
  { name: "Ryan Bates", team: "Bears", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ryan-bates.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Devin Duvernay", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devin-duvernay.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Rome Odunze", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rome-odunze.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Josh Blackwell", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-blackwell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Dallis Flowers", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dallis-flowers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Jonathan Garvin", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonathan-garvin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Kyler Gordon", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyler-gordon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Jaylon Johnson", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaylon-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Jaylon Jones", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaylon-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Nick McCloud", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-mccloud.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Dominique Robinson", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dominique-robinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Joe Tryon-Shoyinka", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-tryon-shoyinka.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Nahshon Wright", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nahshon-wright.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Dayo Odeyingbo", team: "Bears", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dayo-odeyingbo.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 250 },
  { name: "Stephen Carlson", team: "Bears", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/stephen-carlson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 200 },
  { name: "Braxton Jones", team: "Bears", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/braxton-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 200 },
  { name: "Cole Kmet", team: "Bears", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cole-kmet.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 200 },
  { name: "Elijah Hicks", team: "Bears", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/elijah-hicks.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 200 },
  { name: "D'Marco Jackson", team: "Bears", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dmarco-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 200 },
  { name: "Chris Williams", team: "Bears", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 200 },
  { name: "Cairo Santos", team: "Bears", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cairo-santos.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 200 },
  { name: "Drew Dalman", team: "Bears", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/drew-dalman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 200 },
  { name: "Jonah Jackson", team: "Bears", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonah-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 200 },
  { name: "Tyson Bagent", team: "Bears", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyson-bagent.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 150 },
  { name: "Brittain Brown", team: "Bears", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brittain-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 150 },
  { name: "Austin Booker", team: "Bears", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/austin-booker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 150 },
  { name: "Daniel Hardy", team: "Bears", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/daniel-hardy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 150 },
  { name: "Tyrique Stevenson", team: "Bears", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyrique-stevenson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 150 },
  { name: "Roschon Johnson", team: "Bears", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/roschon-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 150 },
  { name: "Terell Smith", team: "Bears", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/terell-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 150 },
  { name: "Nikola Kalinic", team: "Bears", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nikola-kalinic.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 125 },
  { name: "Darnell Wright", team: "Bears", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/darnell-wright.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 125 },
  { name: "Gervon Dexter Sr.", team: "Bears", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/gervon-dexter-sr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 125 },
  { name: "Dominique Hampton", team: "Bears", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dominique-hampton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 125 },
  { name: "Gervarrius Owens", team: "Bears", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/gervarrius-owens.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 125 },
  { name: "Nephi Sewell", team: "Bears", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nephi-sewell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 125 },
  { name: "Kiran Amegadjie", team: "Bears", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kiran-amegadjie.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 125 },
  { name: "Noah Sewell", team: "Bears", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/noah-sewell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 125 },
  { name: "Kyle Hergel", team: "Bears", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyle-hergel.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 125 },
  { name: "Jordan McFadden", team: "Bears", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-mcfadden.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 125 },
  { name: "Maurice Alexander", team: "Bears", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/maurice-alexander.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Luther Burden III", team: "Bears", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/luther-burden-iii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Kyle Monangai", team: "Bears", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kyle-monangai.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "JP Richardson", team: "Bears", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jp-richardson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Jahdae Walker", team: "Bears", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jahdae-walker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Jamree Kromah", team: "Bears", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jamree-kromah.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Dontae Manning", team: "Bears", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dontae-manning.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Jeremiah Martin", team: "Bears", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeremiah-martin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Zah Frazier", team: "Bears", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zah-frazier.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Deion Hankins", team: "Bears", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deion-hankins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Theo Benedet", team: "Bears", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/theo-benedet.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Qadir Ismail", team: "Bears", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/qadir-ismail.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Colston Loveland", team: "Bears", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/colston-loveland.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Luke Newman", team: "Bears", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/luke-newman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Ruben Hyppolite II", team: "Bears", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ruben-hyppolite-ii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Tory Taylor", team: "Bears", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tory-taylor.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Ozzy Trapilo", team: "Bears", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ozzy-trapilo.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Shemar Turner", team: "Bears", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/shemar-turner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Scott Daly", team: "Bears", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/scott-daly.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },
  { name: "Luke Elkin", team: "Bears", rating: 65, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/luke-elkin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CHI", price: 100 },

  // ==================== Bengals ====================
  { name: "Ja'Marr Chase", team: "Bengals", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jamarr-chase.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 1200 },
  { name: "Joe Burrow", team: "Bengals", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-burrow.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 900 },
  { name: "Trey Hendrickson", team: "Bengals", rating: 92, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trey-hendrickson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 700 },
  { name: "Samaje Perine", team: "Bengals", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/samaje-perine.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 300 },
  { name: "Orlando Brown Jr.", team: "Bengals", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/orlando-brown-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 300 },
  { name: "Noah Fant", team: "Bengals", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/noah-fant.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 300 },
  { name: "Mike Gesicki", team: "Bengals", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mike-gesicki.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 300 },
  { name: "Drew Sample", team: "Bengals", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/drew-sample.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 300 },
  { name: "Oren Burks", team: "Bengals", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/oren-burks.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 300 },
  { name: "B.J. Hill", team: "Bengals", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bj-hill.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 300 },
  { name: "Cody Ford", team: "Bengals", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cody-ford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Ted Karras", team: "Bengals", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ted-karras.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Lucas Patrick", team: "Bengals", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lucas-patrick.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Dalton Risner", team: "Bengals", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dalton-risner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Gary Brightwell", team: "Bengals", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/gary-brightwell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Tee Higgins", team: "Bengals", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tee-higgins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Jalen Davis", team: "Bengals", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-davis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Dax Hill", team: "Bengals", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dax-hill.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Joseph Ossai", team: "Bengals", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joseph-ossai.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Cam Sample", team: "Bengals", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cam-sample.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Cam Taylor-Britt", team: "Bengals", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cam-taylor-britt.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Marco Wilson", team: "Bengals", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marco-wilson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 250 },
  { name: "Joe Flacco", team: "Bengals", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-flacco.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 200 },
  { name: "Tanner Hudson", team: "Bengals", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tanner-hudson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 200 },
  { name: "Tycen Anderson", team: "Bengals", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tycen-anderson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 200 },
  { name: "T.J. Slaton Jr.", team: "Bengals", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tj-slaton-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 200 },
  { name: "Geno Stone", team: "Bengals", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/geno-stone.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 200 },
  { name: "Brian Asamoah II", team: "Bengals", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brian-asamoah-ii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 200 },
  { name: "Evan McPherson", team: "Bengals", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/evan-mcpherson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 200 },
  { name: "Cordell Volson", team: "Bengals", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cordell-volson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 200 },
  { name: "Jake Browning", team: "Bengals", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jake-browning.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Sean Clifford", team: "Bengals", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sean-clifford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Chase Brown", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chase-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Andrei Iosivas", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/andrei-iosivas.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Charlie Jones", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/charlie-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Kendric Pryor", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kendric-pryor.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Mitchell Tinsley", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mitchell-tinsley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Isaiah Foskey", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/isaiah-foskey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "DJ Ivey", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dj-ivey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Cedric Johnson", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cedric-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Myles Murphy", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/myles-murphy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Josh Newton", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-newton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "DJ Turner II", team: "Bengals", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dj-turner-ii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 150 },
  { name: "Javon Foster", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/javon-foster.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Cam Grandy", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cam-grandy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Amarius Mims", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/amarius-mims.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Daijahn Anthony", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/daijahn-anthony.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Jordan Battle", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-battle.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Joe Giles-Harris", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-giles-harris.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Shaka Heyward", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/shaka-heyward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "McKinnley Jackson", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mckinnley-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Jordan Jefferson", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-jefferson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Russ Yeast", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/russ-yeast.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Erick All Jr.", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/erick-all-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Kris Jenkins Jr.", team: "Bengals", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kris-jenkins-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Matt Lee", team: "Bengals", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matt-lee.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 125 },
  { name: "Tahj Brooks", team: "Bengals", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tahj-brooks.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Xavier Johnson", team: "Bengals", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/xavier-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Dohnte Meyers", team: "Bengals", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dohnte-meyers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Kendall Milton", team: "Bengals", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kendall-milton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Jordan Moore", team: "Bengals", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-moore.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Ke'Shawn Williams", team: "Bengals", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/keshawn-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Jalen Kimber", team: "Bengals", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-kimber.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Bralyn Lux", team: "Bengals", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bralyn-lux.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Shemar Stewart", team: "Bengals", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/shemar-stewart.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Andrew Coker", team: "Bengals", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/andrew-coker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Liam Anderson", team: "Bengals", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/liam-anderson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Barrett Carter", team: "Bengals", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/barrett-carter.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Howard Cross III", team: "Bengals", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/howard-cross-iii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "PJ Jules", team: "Bengals", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/pj-jules.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Demetrius Knight Jr.", team: "Bengals", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/demetrius-knight-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Antwaun Powell-Ryland Jr.", team: "Bengals", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/antwaun-powell-ryland-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Ryan Rehkow", team: "Bengals", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ryan-rehkow.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Jacob Bayer", team: "Bengals", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jacob-bayer.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Dylan Fairchild", team: "Bengals", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dylan-fairchild.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "Jalen Rivers", team: "Bengals", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-rivers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },
  { name: "William Wagner", team: "Bengals", rating: 65, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/william-wagner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CIN", price: 100 },

  // ==================== Bills ====================
  { name: "Josh Allen", team: "Bills", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 1200 },
  { name: "Dion Dawkins", team: "Bills", rating: 88, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dion-dawkins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 500 },
  { name: "Joey Bosa", team: "Bills", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joey-bosa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 400 },
  { name: "Khalil Shakir", team: "Bills", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/khalil-shakir.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 400 },
  { name: "Mitchell Trubisky", team: "Bills", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mitchell-trubisky.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 400 },
  { name: "Spencer Brown", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/spencer-brown.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Mecole Hardman Jr.", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mecole-hardman-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Ty Johnson", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ty-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Curtis Samuel", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/curtis-samuel.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Christian Benford", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christian-benford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Taron Johnson", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/taron-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Matt Milano", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matt-milano.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Tre'Davious White", team: "Bills", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tredavious-white.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Dawson Knox", team: "Bills", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dawson-knox.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Larry Ogunjobi", team: "Bills", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/larry-ogunjobi.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Ed Oliver", team: "Bills", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ed-oliver.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Darnell Savage", team: "Bills", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/darnell-savage.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Taylor Rapp", team: "Bills", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/taylor-rapp.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 300 },
  { name: "Shane Buechele", team: "Bills", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/shane-buechele.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Brandin Cooks", team: "Bills", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandin-cooks.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "David Edwards", team: "Bills", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/david-edwards.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Connor McGovern", team: "Bills", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/connor-mcgovern.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "James Cook III", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/james-cook-iii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Jalen Virgil", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-virgil.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "AJ Epenesa", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/aj-epenesa.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Dane Jackson", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dane-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "DaQuan Jones", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/daquan-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Cam Lewis", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cam-lewis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Jordan Poyer", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-poyer.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Greg Rousseau", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/greg-rousseau.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Shaq Thompson", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/shaq-thompson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Gabe Davis", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/gabe-davis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Michael Hoecht", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/michael-hoecht.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Joshua Palmer", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joshua-palmer.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Jordan Phillips", team: "Bills", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-phillips.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 250 },
  { name: "Terrel Bernard", team: "Bills", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/terrel-bernard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 200 },
  { name: "Sam Franklin Jr.", team: "Bills", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-franklin-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 200 },
  { name: "Phidarian Mathis", team: "Bills", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/phidarian-mathis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 200 },
  { name: "Baylon Spector", team: "Bills", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/baylon-spector.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 200 },
  { name: "Mitch Wishnowsky", team: "Bills", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mitch-wishnowsky.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 200 },
  { name: "Damar Hamlin", team: "Bills", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/damar-hamlin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 200 },
  { name: "Tyler Bass", team: "Bills", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyler-bass.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 200 },
  { name: "Keon Coleman", team: "Bills", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/keon-coleman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 150 },
  { name: "Ray Davis", team: "Bills", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ray-davis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 150 },
  { name: "Reggie Gilliam", team: "Bills", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/reggie-gilliam.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 150 },
  { name: "Andre Jones Jr.", team: "Bills", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/andre-jones-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 150 },
  { name: "Javon Solomon", team: "Bills", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/javon-solomon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 150 },
  { name: "Matt Prater", team: "Bills", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matt-prater.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 150 },
  { name: "Alec Anderson", team: "Bills", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alec-anderson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Travis Clayton", team: "Bills", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/travis-clayton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Tylan Grable", team: "Bills", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tylan-grable.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Dalton Kincaid", team: "Bills", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dalton-kincaid.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Ryan Van Demark", team: "Bills", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ryan-van-demark.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Joe Andreessen", team: "Bills", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joe-andreessen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Cole Bishop", team: "Bills", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cole-bishop.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Jimmy Ciarlo", team: "Bills", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jimmy-ciarlo.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Dorian Williams", team: "Bills", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dorian-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "DeWayne Carter", team: "Bills", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dewayne-carter.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Nick Broeker", team: "Bills", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-broeker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "O'Cyrus Torrence", team: "Bills", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ocyrus-torrence.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Sedrick Van Pran-Granger", team: "Bills", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sedrick-van-pran-granger.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Reid Ferguson", team: "Bills", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/reid-ferguson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 125 },
  { name: "Frank Gore Jr.", team: "Bills", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/frank-gore-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Stephen Gosnell", team: "Bills", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/stephen-gosnell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Te'Cory Couch", team: "Bills", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tecory-couch.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "MJ Devonshire Jr.", team: "Bills", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mj-devonshire-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Maxwell Hairston", team: "Bills", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/maxwell-hairston.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Jordan Hancock", team: "Bills", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-hancock.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Daryl Porter Jr.", team: "Bills", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/daryl-porter-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Landon Jackson", team: "Bills", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/landon-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Tyrell Shavers", team: "Bills", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyrell-shavers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Dorian Strong", team: "Bills", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dorian-strong.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Jackson Hawes", team: "Bills", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jackson-hawes.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Keleki Latu", team: "Bills", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/keleki-latu.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Tommy Akingbesote", team: "Bills", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tommy-akingbesote.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Keonta Jenkins", team: "Bills", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/keonta-jenkins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Zion Logue", team: "Bills", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zion-logue.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "T.J. Sanders", team: "Bills", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tj-sanders.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Deone Walker", team: "Bills", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deone-walker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Chase Lundt", team: "Bills", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chase-lundt.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Wande Owens", team: "Bills", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/wande-owens.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },
  { name: "Maddux Trujillo", team: "Bills", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/maddux-trujillo.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/BUF", price: 100 },

  // ==================== Broncos ====================
  { name: "Garett Bolles", team: "Broncos", rating: 96, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/garett-bolles.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 900 },
  { name: "Evan Engram", team: "Broncos", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/evan-engram.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 400 },
  { name: "Courtland Sutton", team: "Broncos", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/courtland-sutton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 400 },
  { name: "Nik Bonitto", team: "Broncos", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nik-bonitto.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 400 },
  { name: "Zach Allen", team: "Broncos", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zach-allen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 300 },
  { name: "John Franklin-Myers", team: "Broncos", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/john-franklin-myers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 300 },
  { name: "J.K. Dobbins", team: "Broncos", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jk-dobbins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 300 },
  { name: "Mike McGlinchey", team: "Broncos", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mike-mcglinchey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 300 },
  { name: "Dre Greenlaw", team: "Broncos", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dre-greenlaw.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 300 },
  { name: "D.J. Jones", team: "Broncos", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dj-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 300 },
  { name: "Alex Singleton", team: "Broncos", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alex-singleton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 300 },
  { name: "Michael Deiter", team: "Broncos", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/michael-deiter.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 250 },
  { name: "Sam Ehlinger", team: "Broncos", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-ehlinger.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 250 },
  { name: "Ben Powers", team: "Broncos", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ben-powers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 250 },
  { name: "Jarrett Stidham", team: "Broncos", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jarrett-stidham.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 250 },
  { name: "Wil Lutz", team: "Broncos", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/wil-lutz.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 250 },
  { name: "Bo Nix", team: "Broncos", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bo-nix.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 250 },
  { name: "Lil'Jordan Humphrey", team: "Broncos", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/liljordan-humphrey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 250 },
  { name: "Pat Surtain II", team: "Broncos", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/pat-surtain-ii.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 250 },
  { name: "Adam Trautman", team: "Broncos", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/adam-trautman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Jonathon Cooper", team: "Broncos", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonathon-cooper.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Talanoa Hufanga", team: "Broncos", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/talanoa-hufanga.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "P.J. Locke", team: "Broncos", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/pj-locke.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Malcolm Roach", team: "Broncos", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/malcolm-roach.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Justin Strnad", team: "Broncos", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-strnad.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Brandon Jones", team: "Broncos", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brandon-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Matt Peart", team: "Broncos", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matt-peart.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Quinn Meinerz", team: "Broncos", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quinn-meinerz.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Sam Mustipher", team: "Broncos", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-mustipher.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Calvin Throckmorton", team: "Broncos", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/calvin-throckmorton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Luke Wattenberg", team: "Broncos", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/luke-wattenberg.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 200 },
  { name: "Michael Burton", team: "Broncos", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/michael-burton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Tyler Badie", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyler-badie.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Michael Bandy", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/michael-bandy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Troy Franklin", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/troy-franklin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Jaleel McLaughlin", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaleel-mclaughlin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Marvin Mims Jr.", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marvin-mims-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Adam Prentice", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/adam-prentice.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Cody Schrader", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cody-schrader.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Deuce Vaughn", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deuce-vaughn.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Kris Abrams-Draine", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kris-abrams-draine.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Ja'Quan McMillian", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaquan-mcmillian.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Riley Moss", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/riley-moss.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Eyioma Uwazurike", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/eyioma-uwazurike.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Matt Henningsen", team: "Broncos", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/matt-henningsen.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 150 },
  { name: "Nate Adkins", team: "Broncos", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nate-adkins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Frank Crum", team: "Broncos", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/frank-crum.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Levelle Bailey", team: "Broncos", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/levelle-bailey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Jonah Elliss", team: "Broncos", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jonah-elliss.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Jordan Jackson", team: "Broncos", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Devon Key", team: "Broncos", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devon-key.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "JL Skinner", team: "Broncos", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jl-skinner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Dondrea Tillman", team: "Broncos", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dondrea-tillman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Lucas Krull", team: "Broncos", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lucas-krull.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Drew Sanders", team: "Broncos", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/drew-sanders.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Alex Forsyth", team: "Broncos", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alex-forsyth.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Alex Palczewski", team: "Broncos", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alex-palczewski.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 125 },
  { name: "Pat Bryant", team: "Broncos", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/pat-bryant.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "RJ Harvey", team: "Broncos", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rj-harvey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Jahdae Barron", team: "Broncos", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jahdae-barron.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Sai'vion Jones", team: "Broncos", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/saivion-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Garrett Nelson", team: "Broncos", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/garrett-nelson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Jaden Robinson", team: "Broncos", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaden-robinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Reese Taylor", team: "Broncos", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/reese-taylor.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Marques Cox", team: "Broncos", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marques-cox.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Caleb Lohner", team: "Broncos", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/caleb-lohner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Jordan Miller", team: "Broncos", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-miller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Karene Reid", team: "Broncos", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/karene-reid.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Que Robinson", team: "Broncos", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/que-robinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Jordan Turner", team: "Broncos", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jordan-turner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Kristian Williams", team: "Broncos", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kristian-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Johnny Walker Jr.", team: "Broncos", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/johnny-walker-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Nash Jones", team: "Broncos", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nash-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Mitchell Fraboni", team: "Broncos", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mitchell-fraboni.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Nick Gargiulo", team: "Broncos", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-gargiulo.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },
  { name: "Jeremy Crawshaw", team: "Broncos", rating: 70, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeremy-crawshaw.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/DEN", price: 100 },

  // ==================== Browns ====================
  { name: "Myles Garrett", team: "Browns", rating: 99, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/myles-garrett.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 1200 },
  { name: "Denzel Ward", team: "Browns", rating: 89, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/denzel-ward.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 600 },
  { name: "Jeremiah Owusu-Koramoah", team: "Browns", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeremiah-owusu-koramoah.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 400 },
  { name: "Tyson Campbell", team: "Browns", rating: 85, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyson-campbell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 400 },
  { name: "Jerry Jeudy", team: "Browns", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jerry-jeudy.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 300 },
  { name: "Trayveon Williams", team: "Browns", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/trayveon-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 300 },
  { name: "DeAndre Carter", team: "Browns", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deandre-carter.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 300 },
  { name: "David Njoku", team: "Browns", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/david-njoku.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 300 },
  { name: "Cam Robinson", team: "Browns", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cam-robinson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 300 },
  { name: "Jerome Baker", team: "Browns", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jerome-baker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 300 },
  { name: "Devin Bush", team: "Browns", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devin-bush.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 300 },
  { name: "Rayshawn Jenkins", team: "Browns", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rayshawn-jenkins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 300 },
  { name: "Maliek Collins", team: "Browns", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/maliek-collins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 300 },
  { name: "Jack Conklin", team: "Browns", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jack-conklin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 300 },
  { name: "Ethan Pocic", team: "Browns", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ethan-pocic.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 250 },
  { name: "Wyatt Teller", team: "Browns", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/wyatt-teller.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 250 },
  { name: "Cornelius Lucas", team: "Browns", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cornelius-lucas.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 250 },
  { name: "Shelby Harris", team: "Browns", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/shelby-harris.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 250 },
  { name: "D'Angelo Ross", team: "Browns", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dangelo-ross.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 250 },
  { name: "Cameron Thomas", team: "Browns", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cameron-thomas.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 250 },
  { name: "Alex Wright", team: "Browns", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/alex-wright.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 250 },
  { name: "Martin Emerson Jr.", team: "Browns", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/martin-emerson-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 250 },
  { name: "Jerome Ford", team: "Browns", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jerome-ford.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 250 },
  { name: "Joel Bitonio", team: "Browns", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/joel-bitonio.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 200 },
  { name: "Tyre Phillips", team: "Browns", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tyre-phillips.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 200 },
  { name: "Grant Delpit", team: "Browns", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/grant-delpit.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 200 },
  { name: "Corey Bojorquez", team: "Browns", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/corey-bojorquez.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 200 },
  { name: "Kendrick Green", team: "Browns", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kendrick-green.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 200 },
  { name: "Teven Jenkins", team: "Browns", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/teven-jenkins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 200 },
  { name: "Deshaun Watson", team: "Browns", rating: 78, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deshaun-watson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 150 },
  { name: "Malachi Corley", team: "Browns", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/malachi-corley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 150 },
  { name: "Jamari Thrash", team: "Browns", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jamari-thrash.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 150 },
  { name: "Cedric Tillman", team: "Browns", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cedric-tillman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 150 },
  { name: "Tre Avery", team: "Browns", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tre-avery.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 150 },
  { name: "Myles Harden", team: "Browns", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/myles-harden.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 150 },
  { name: "Isaiah McGuire", team: "Browns", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/isaiah-mcguire.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 150 },
  { name: "Sam Webb", team: "Browns", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-webb.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 150 },
  { name: "Anthony Kendall", team: "Browns", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/anthony-kendall.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 150 },
  { name: "Brenden Bates", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/brenden-bates.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "KT Leveston", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kt-leveston.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Blake Whiteheart", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/blake-whiteheart.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Mohamoud Diabate", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mohamoud-diabate.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Mike Hall Jr.", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mike-hall-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Ronnie Hickman", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ronnie-hickman.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Sam Kamara", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sam-kamara.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Edefuan Ulofoshio", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/edefuan-ulofoshio.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Dawand Jones", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dawand-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Winston Reid", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/winston-reid.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Nathaniel Watson", team: "Browns", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nathaniel-watson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Dillon Gabriel", team: "Browns", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dillon-gabriel.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Shedeur Sanders", team: "Browns", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/shedeur-sanders.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Luke Wypler", team: "Browns", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/luke-wypler.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Zak Zinter", team: "Browns", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zak-zinter.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 125 },
  { name: "Isaiah Bond", team: "Browns", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/isaiah-bond.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Luke Floriea", team: "Browns", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/luke-floriea.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Gage Larvadain", team: "Browns", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/gage-larvadain.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Ahmani Marshall", team: "Browns", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ahmani-marshall.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Dylan Sampson", team: "Browns", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dylan-sampson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Raheim Sanders", team: "Browns", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/raheim-sanders.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Isaiah Wooden", team: "Browns", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/isaiah-wooden.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Adin Huntington", team: "Browns", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/adin-huntington.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Dom Jones", team: "Browns", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dom-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Quinshon Judkins", team: "Browns", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/quinshon-judkins.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Jeremiah Byers", team: "Browns", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jeremiah-byers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Sal Cannella", team: "Browns", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sal-cannella.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Harold Fannin Jr.", team: "Browns", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/harold-fannin-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Caden Prieskorn", team: "Browns", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/caden-prieskorn.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Christopher Edmonds", team: "Browns", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christopher-edmonds.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Mason Graham", team: "Browns", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mason-graham.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Easton Mascarenas-Arnold", team: "Browns", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/easton-mascarenas-arnold.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Donovan McMillon", team: "Browns", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/donovan-mcmillon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Carson Schwesinger", team: "Browns", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/carson-schwesinger.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Jack Conley", team: "Browns", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jack-conley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Kingsley Eguakun", team: "Browns", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kingsley-eguakun.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Andre Szmyt", team: "Browns", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/andre-szmyt.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Justin Osborne", team: "Browns", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/justin-osborne.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Nik Constantinou", team: "Browns", rating: 70, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nik-constantinou.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },
  { name: "Rex Sunahara", team: "Browns", rating: 68, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rex-sunahara.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/CLE", price: 100 },

  // ==================== Buccaneers ====================
  { name: "Mike Evans", team: "Buccaneers", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mike-evans.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 800 },
  { name: "Antoine Winfield Jr.", team: "Buccaneers", rating: 93, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/antoine-winfield-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 800 },
  { name: "Vita Vea", team: "Buccaneers", rating: 91, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/vita-vea.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 700 },
  { name: "Baker Mayfield", team: "Buccaneers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/baker-mayfield.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 400 },
  { name: "Lavonte David", team: "Buccaneers", rating: 86, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/lavonte-david.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 400 },
  { name: "Chris Godwin Jr.", team: "Buccaneers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-godwin-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 300 },
  { name: "Sterling Shepard", team: "Buccaneers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sterling-shepard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 300 },
  { name: "Jamel Dean", team: "Buccaneers", rating: 84, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jamel-dean.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 300 },
  { name: "Teddy Bridgewater", team: "Buccaneers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/teddy-bridgewater.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 300 },
  { name: "Greg Gaines", team: "Buccaneers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/greg-gaines.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 300 },
  { name: "J.T. Gray", team: "Buccaneers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jt-gray.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 300 },
  { name: "Deion Jones", team: "Buccaneers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/deion-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 300 },
  { name: "Anthony Nelson", team: "Buccaneers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/anthony-nelson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 300 },
  { name: "Haason Reddick", team: "Buccaneers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/haason-reddick.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 300 },
  { name: "Anthony Walker Jr.", team: "Buccaneers", rating: 83, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/anthony-walker-jr.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 300 },
  { name: "Dan Feeney", team: "Buccaneers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dan-feeney.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 250 },
  { name: "Rachaad White", team: "Buccaneers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rachaad-white.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 250 },
  { name: "Chase McLaughlin", team: "Buccaneers", rating: 82, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chase-mclaughlin.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 250 },
  { name: "Logan Hall", team: "Buccaneers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/logan-hall.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 250 },
  { name: "Kindle Vildor", team: "Buccaneers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kindle-vildor.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 250 },
  { name: "Zyon McCollum", team: "Buccaneers", rating: 81, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/zyon-mccollum.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 250 },
  { name: "Luke Goedeke", team: "Buccaneers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/luke-goedeke.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 200 },
  { name: "Charlie Heck", team: "Buccaneers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/charlie-heck.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 200 },
  { name: "Cade Otton", team: "Buccaneers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cade-otton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 200 },
  { name: "Tristan Wirfs", team: "Buccaneers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tristan-wirfs.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 200 },
  { name: "Benton Whitley", team: "Buccaneers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/benton-whitley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 200 },
  { name: "Riley Dixon", team: "Buccaneers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/riley-dixon.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 200 },
  { name: "Ko Kieft", team: "Buccaneers", rating: 80, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ko-kieft.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 200 },
  { name: "Mike Jordan", team: "Buccaneers", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mike-jordan.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 200 },
  { name: "Ben Bredeson", team: "Buccaneers", rating: 79, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ben-bredeson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 200 },
  { name: "Bucky Irving", team: "Buccaneers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/bucky-irving.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 150 },
  { name: "Kameron Johnson", team: "Buccaneers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/kameron-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 150 },
  { name: "Jalen McMillan", team: "Buccaneers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jalen-mcmillan.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 150 },
  { name: "Sean Tucker", team: "Buccaneers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sean-tucker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 150 },
  { name: "Owen Wright", team: "Buccaneers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/owen-wright.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 150 },
  { name: "Josh Hayes", team: "Buccaneers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-hayes.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 150 },
  { name: "Damarion Williams", team: "Buccaneers", rating: 77, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/damarion-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 150 },
  { name: "Devin Culp", team: "Buccaneers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/devin-culp.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Payne Durham", team: "Buccaneers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/payne-durham.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Chris Braswell", team: "Buccaneers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/chris-braswell.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "SirVocea Dennis", team: "Buccaneers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/sirvocea-dennis.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Yaya Diaby", team: "Buccaneers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/yaya-diaby.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Christian Izien", team: "Buccaneers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/christian-izien.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Mohamed Kamara", team: "Buccaneers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/mohamed-kamara.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Calijah Kancey", team: "Buccaneers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/calijah-kancey.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Tykee Smith", team: "Buccaneers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tykee-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Markees Watts", team: "Buccaneers", rating: 76, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/markees-watts.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Graham Barton", team: "Buccaneers", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/graham-barton.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Connor Bazelak", team: "Buccaneers", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/connor-bazelak.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Elijah Klein", team: "Buccaneers", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/elijah-klein.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Cody Mauch", team: "Buccaneers", rating: 75, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/cody-mauch.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 125 },
  { name: "Emeka Egbuka", team: "Buccaneers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/emeka-egbuka.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Garrett Greene", team: "Buccaneers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/garrett-greene.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Dennis Houston", team: "Buccaneers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/dennis-houston.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Tez Johnson", team: "Buccaneers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/tez-johnson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Michael Wiley", team: "Buccaneers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/michael-wiley.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Josh Williams", team: "Buccaneers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/josh-williams.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Benjamin Morrison", team: "Buccaneers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/benjamin-morrison.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Jacob Parrish", team: "Buccaneers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jacob-parrish.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Elijah Roberts", team: "Buccaneers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/elijah-roberts.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Jaden Smith", team: "Buccaneers", rating: 74, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jaden-smith.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Benjamin Chukwuma", team: "Buccaneers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/benjamin-chukwuma.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Marshall Foerner", team: "Buccaneers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marshall-foerner.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Marcus Banks", team: "Buccaneers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/marcus-banks.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Nash Hutmacher", team: "Buccaneers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nash-hutmacher.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Nick Jackson", team: "Buccaneers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/nick-jackson.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Jayson Jones", team: "Buccaneers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jayson-jones.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Elijah Simmons", team: "Buccaneers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/elijah-simmons.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Rashad Wisdom", team: "Buccaneers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/rashad-wisdom.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "JJ Roberts", team: "Buccaneers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/jj-roberts.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "David Walker", team: "Buccaneers", rating: 73, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/david-walker.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Luke Haggard", team: "Buccaneers", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/luke-haggard.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Ben Scott", team: "Buccaneers", rating: 72, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/ben-scott.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },
  { name: "Evan Deckers", team: "Buccaneers", rating: 68, img: "https://staticd.profootballnetwork.com/skm/assets/player-images/nfl/evan-deckers.png", logo: "https://static.www.nfl.com/h_40,w_40,q_auto,f_auto,dpr_2.0/league/api/clubs/logos/TB", price: 100 },

 
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
