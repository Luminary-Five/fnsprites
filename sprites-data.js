// DEVELOPER DATA SHEET: Add new sprites, change rarities, or toggle unreleased states here.
// Optional: add releaseDate: "YYYY-MM-DD" to any sprite. Before that date it counts as unreleased,
// and on/after that date it automatically counts as released.
// Use "0000-00-00" when a release date is unannounced; that acts like a null value and falls back to `unreleased`.
// Example: { id: "example_basic", name: "Example", theme: "Basic", rarity: "Rare", unreleased: true, releaseDate: "2026-07-20" }
const baseSprites = [

    { id: "batman_basic", name: "Batman", theme: "Basic", rarity: "Mythic", unreleased: false, releaseDate: "2026-07-16" },
    { id: "batman_gold", name: "Gold Batman", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
    { id: "batman_candy", name: "Gummy Batman", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
    { id: "batman_galaxy", name: "Galaxy Batman", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
    //	{ id: "batman_gem", name: "Gem Batman", theme: "Gem", rarity: "Special", unreleased: true },
    { id: "batman_holofoil", name: "Holofoil Batman", theme: "Holofoil", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
	{ id: "batman_rift", name: "Rift Batman", theme: "Rift", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },

    { id: "water_basic", name: "Water", theme: "Basic", rarity: "Rare", unreleased: false, releaseDate: "2026-06-06" },
    { id: "water_gold", name: "Gold Water", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-06" },
    { id: "water_candy", name: "Gummy Water", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-11" },
    { id: "water_galaxy", name: "Galaxy Water", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-18" },
    { id: "water_gem", name: "Gem Water", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
    { id: "water_holofoil", name: "Holofoil Water", theme: "Holofoil", rarity: "Special", unreleased: false, releaseDate: "2026-07-09" },
    
    { id: "earth_basic", name: "Earth", theme: "Basic", rarity: "Rare", unreleased: false, releaseDate: "2026-06-06" },
    { id: "earth_gold", name: "Gold Earth", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-06" },
    { id: "earth_candy", name: "Gummy Earth", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-11" },
    { id: "earth_galaxy", name: "Galaxy Earth", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-18" },
    { id: "earth_gem", name: "Gem Earth", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
    { id: "earth_rift", name: "Rift Earth", theme: "Rift", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
    
    { id: "fire_basic", name: "Fire", theme: "Basic", rarity: "Rare", unreleased: false, releaseDate: "2026-06-06" },
    { id: "fire_gold", name: "Gold Fire", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-06" },
    { id: "fire_candy", name: "Gummy Fire", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-11" },
    { id: "fire_galaxy", name: "Galaxy Fire", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-18" },
    { id: "fire_holofoil", name: "Holofoil Fire", theme: "Holofoil", rarity: "Special", unreleased: false, releaseDate: "2026-07-09" },
    { id: "fire_rift", name: "Rift Fire", theme: "Rift", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },

    { id: "duck_basic", name: "Duck", theme: "Basic", rarity: "Epic", unreleased: false, releaseDate: "2026-06-06" },
    { id: "duck_gold", name: "Gold Duck", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-06" },
    { id: "duck_candy", name: "Gummy Duck", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-11" },
    { id: "duck_galaxy", name: "Galaxy Duck", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-18" },
    { id: "duck_gem", name: "Gem Duck", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
	
    { id: "ghost_basic", name: "Ghost", theme: "Basic", rarity: "Epic", unreleased: false, releaseDate: "2026-06-06" },
    { id: "ghost_gold", name: "Gold Ghost", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-06" },
    { id: "ghost_candy", name: "Gummy Ghost", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-11" },
    { id: "ghost_galaxy", name: "Galaxy Ghost", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-18" },
    { id: "ghost_holofoil", name: "Holofoil Ghost", theme: "Holofoil", rarity: "Special", unreleased: false, releaseDate: "2026-07-09" },
	
    { id: "dream_basic", name: "Dream", theme: "Basic", rarity: "Legendary", unreleased: false, releaseDate: "2026-06-06" },
    { id: "dream_gold", name: "Gold Dream", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-06" },
    { id: "dream_candy", name: "Gummy Dream", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-11" },
    { id: "dream_galaxy", name: "Galaxy Dream", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-18" },
    { id: "dream_rift", name: "Rift Dream", theme: "Rift", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
	
    { id: "demon_basic", name: "Demon", theme: "Basic", rarity: "Epic", unreleased: false, releaseDate: "2026-06-06" },
    { id: "demon_gold", name: "Gold Demon", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-06" },
    { id: "demon_candy", name: "Gummy Demon", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-11" },
	{ id: "demon_galaxy", name: "Galaxy Demon", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-18" },
    { id: "demon_gem", name: "Gem Demon", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },

	{ id: "punk_basic", name: "Punk", theme: "Basic", rarity: "Legendary", unreleased: false, releaseDate: "2026-06-06" },
    { id: "punk_gold", name: "Gold Punk", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-06" },
    { id: "punk_candy", name: "Gummy Punk", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-11" },
    { id: "punk_galaxy", name: "Galaxy Punk", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-18" },
    { id: "punk_gem", name: "Gem Punk", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
    { id: "punk_rift", name: "Rift Punk", theme: "Rift", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },

	{ id: "king_basic", name: "King", theme: "Basic", rarity: "Epic", unreleased: false, releaseDate: "2026-06-06" },
    { id: "king_gold", name: "Gold King", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-06" },
    { id: "king_candy", name: "Gummy King", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-11" },
    { id: "king_galaxy", name: "Galaxy King", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-18" },
    { id: "king_holofoil", name: "Holofoil King", theme: "Holofoil", rarity: "Special", unreleased: false, releaseDate: "2026-07-09" },

    { id: "zeropoint_basic", name: "Zero Point", theme: "Basic", rarity: "Mythic", unreleased: false, releaseDate: "2026-06-06" },
    { id: "zeropoint_gold", name: "Gold Zero Point", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-06" },
    { id: "zeropoint_candy", name: "Gummy Zero Point", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-11" },
    { id: "zeropoint_galaxy", name: "Galaxy Zero Point", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-18" },
    { id: "zeropoint_gem", name: "Gem Zero Point", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
    { id: "zeropoint_holofoil", name: "Quack Zero Point", theme: "Holofoil", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
	
    { id: "theburntpeanut_basic", name: "Burnt Peanut", theme: "Basic", rarity: "Mythic", unreleased: false, releaseDate: "2026-06-06" },
	
    { id: "wick_basic", name: "John Wick", theme: "Basic", rarity: "Mythic", unreleased: true, releaseDate: "0000-00-00" },

	{ id: "pollo_basic", name: "Pollo", theme: "Basic", rarity: "Mythic", unreleased: false, releaseDate: "2026-07-18" },

	{ id: "vini_basic", name: "Vini Jr.", theme: "Basic", rarity: "Mythic", unreleased: false, releaseDate: "2026-07-16" },

    { id: "fishy_basic", name: "Fishy", theme: "Basic", rarity: "Rare", unreleased: false, releaseDate: "2026-06-25" },
    { id: "fishy_gold", name: "Gold Fishy", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "fishy_candy", name: "Gummy Fishy", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "fishy_galaxy", name: "Galaxy Fishy", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
	{ id: "fishy_gem", name: "Gem Fishy", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
	{ id: "fishy_holofoil", name: "Holofoil Fishy", theme: "Holofoil", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
    { id: "fishy_rift", name: "Rift Fishy", theme: "Rift", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },

    { id: "striker_basic", name: "Striker", theme: "Basic", rarity: "Epic", unreleased: false, releaseDate: "2026-06-25" },
    { id: "striker_gold", name: "Gold Striker", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "striker_candy", name: "Gummy Striker", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "striker_galaxy", name: "Galaxy Striker", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "striker_gem", name: "Gem Striker", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
    { id: "striker_holofoil", name: "Holofoil Striker", theme: "Holofoil", rarity: "Special", unreleased: false, releaseDate: "2026-07-09" },

    { id: "aura_basic", name: "Aura", theme: "Basic", rarity: "Epic", unreleased: false, releaseDate: "2026-06-25" },
    { id: "aura_gold", name: "Gold Aura", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "aura_candy", name: "Gummy Aura", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "aura_galaxy", name: "Galaxy Aura", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "aura_gem", name: "Gem Aura", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
	{ id: "aura_holofoil", name: "Holofoil Aura", theme: "Holofoil", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },

    { id: "boss_basic", name: "Boss", theme: "Basic", rarity: "Legendary", unreleased: false, releaseDate: "2026-06-25" },
    { id: "boss_gold", name: "Gold Boss", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "boss_candy", name: "Gummy Boss", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "boss_galaxy", name: "Galaxy Boss", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
	{ id: "boss_gem", name: "Gem Boss", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
	{ id: "boss_holofoil", name: "Holofoil Boss", theme: "Holofoil", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
    { id: "boss_rift", name: "Rift Boss", theme: "Rift", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },

    { id: "grim_basic", name: "Grim", theme: "Basic", rarity: "Mythic", unreleased: false, releaseDate: "2026-06-25" },
    { id: "grim_gold", name: "Gold Grim", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "grim_candy", name: "Gummy Grim", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
    { id: "grim_galaxy", name: "Galaxy Grim", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-06-25" },
	{ id: "grim_gem", name: "Gem Grim", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
	{ id: "grim_holofoil", name: "Holofoil Grim", theme: "Holofoil", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
    { id: "grim_rift", name: "Rift Grim", theme: "Rift", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },

    { id: "air_basic", name: "Air", theme: "Basic", rarity: "Rare", unreleased: false, releaseDate: "2026-07-16" },
    { id: "air_gold", name: "Gold Air", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
    { id: "air_candy", name: "Gummy Air", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
    { id: "air_galaxy", name: "Galaxy Air", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
	{ id: "air_gem", name: "Gem Air", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "2026-07-16" },
    { id: "air_holofoil", name: "Holofoil Air", theme: "Holofoil", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
	
    { id: "seven_basic", name: "Seven", theme: "Basic", rarity: "Legendary", unreleased: false, releaseDate: "2026-07-16" },
    { id: "seven_gold", name: "Gold Seven", theme: "Gold", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
    { id: "seven_candy", name: "Gummy Seven", theme: "Candy", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
    { id: "seven_galaxy", name: "Galaxy Seven", theme: "Galaxy", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },
	{ id: "seven_gem", name: "Gem Seven", theme: "Gem", rarity: "Special", unreleased: true, releaseDate: "0000-00-00" },
    { id: "seven_holofoil", name: "Holofoil Seven", theme: "Holofoil", rarity: "Special", unreleased: false, releaseDate: "2026-07-16" },

];
