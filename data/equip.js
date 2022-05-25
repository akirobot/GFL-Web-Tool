var _EQUIP = [
    //Accessory
    {Name:'VFL 6-24x56', Type:'Optical', Class:'Accessory', Stat1:'CritRate', Buff1:48},
    {Name:'EOT 518', Type:'Holographic', Class:'Accessory', Stat1:'ACC', Buff1:14, Stat2:'DMG', Buff2:8, Stat3:'ROF', Buff3:-4},
    {Name:'ITI Mars', Type:'RedDot', Class:'Accessory', Stat1:'ACC', Buff1:30, Stat2:'ROF', Buff2:-1},
    {Name:'PEQ-16A', Type:'Night', Class:'Accessory', Stat1:'NightReduction', Buff1:100},
    {Name:'AC4 Suppressor', Type:'Suppressor', Class:'Accessory', Stat1:'CritRate', Buff1:20, Stat2:'EVA', Buff2:10},
    {Name:'RMR T4 Red Dot Sight', Type:'Auxiliary', Class:'Accessory', Stat1:'CritRate', Buff1:30, Stat2:'ACC', Buff2:20},
    //Magazine
    {Name:'Mk211 High-Explosive Armor-Piercing Ammo', Type:'AP Ammo', Class:'Magazine', Stat1:'AP', Buff1:180},
    {Name:'M1022 Sniper Round', Type:'AP Ammo', Class:'Magazine', Stat1:'AP', Buff1:120, Stat2:'DMG', Buff2:10},
    {Name:'ILM Hollow Point Ammo', Type:'HP Ammo', Class:'Magazine', Stat1:'DMG', Buff1:15, Stat2:'AP', Buff2:-7},
    {Name:'Signal Flare', Type:'HP Ammo', Class:'Magazine', Stat1:'EchACC', Buff1:10, Stat2:'ROF', Buff2:-1},
    {Name:'#000 Buckshot', Type:'Shells', Class:'Magazine', Stat1:'DMG', Buff1:15, Stat2:'CritDMG', Buff2:22},
    {Name:'SABOT Slug', Type:'Shells', Class:'Magazine', Stat1:'Targets', Buff1:-2, Stat2:'DMG', Buff2:3, Stat3:'ACC', Buff3:20},
    {Name:'#7.5 Birdshot', Type:'Shells', Class:'Magazine', Stat1:'Targets', Buff1:2, Stat2:'ROF', Buff2:12, Stat3:'CritDMG', Buff3:-10},
    {Name:'Flashbang Rounds', Type:'Shells', Class:'Magazine', Stat1:'ACC', Buff1:20, Stat2:'DMGTaken', Buff2:-3},
    {Name:'APCR High-Velocity Ammo', Type:'HV Ammo', Class:'Magazine', Stat1:'DMG', Buff1:20},
    {Name:'Mk1000 SLAP', Type:'Special', Class:'Magazine', Stat1:'AP', Buff1:500, Stat2:'ROF', Buff2:-5},
    //Doll
    {Name:'#2 Processing Chip', Type:'Chip', Class:'Doll', Stat1:'DMG', Buff1:15, Stat2:'ROF', Buff2:25, Stat3:'CritDMG', Buff3:-50},
    {Name:'IOP X4 Exoskeleton', Type:'Exoskeleton', Class:'Doll', Stat1:'EVA', Buff1:20},
    {Name:'IOP T4 Exoskeleton', Type:'Exoskeleton', Class:'Doll', Stat1:'EVA', Buff1:35, Stat2:'DMG', Buff2:-6},
    {Name:'Type 3 Armor Plate', Type:'Plate', Class:'Doll', Stat1:'Armor', Buff1:11, Stat2:'EVA', Buff2:-2},
    {Name:'IOP Maximum Ammo Box', Type:'Ammo Box', Class:'Doll', Stat1:'Clip', Buff1:5, Stat2:'EVA', Buff2:-2},
    {Name:'Thermoptic Camouflage Cape', Type:'Camo Cape', Class:'Doll', Stat1:'CritDMG', Buff1:25, Stat2:'Move', Buff2:-3}
]

var _EQUIPPABLE = [
    {Type:'HG', slotclass1:"Accessory", slottype1:"Night, Suppressor, Auxiliary", slotclass2:"Magazine", slottype2:"HP Ammo", slotclass3:"Doll", slottype3:"Exoskeleton"},
    {Type:'SMG', slotclass1:"Doll", slottype1:"Chip, Exoskeleton", slotclass2:"Magazine", slottype2:"HP Ammo", slotclass3:"Accessory", slottype3:"Night, Suppressor, Holographic, RedDot, Optical"},
    {Type:'AR', slotclass1:"Accessory", slottype1:"Optical, Holographic, RedDot, Night, Suppressor", slotclass2:"Magazine", slottype2:"HV Ammo", slotclass3:"Doll", slottype3:"Chip, Exoskeleton"},
    {Type:'RF', slotclass1:"Magazine", slottype1:"AP Ammo", slotclass2:"Accessory", slottype2:"Optical, Holographic, RedDot, Suppressor", slotclass3:"Doll", slottype3:"Camo Cape"},
    {Type:'MG', slotclass1:"Magazine", slottype1:"AP Ammo, Special", slotclass2:"Accessory", slottype2:"Optical, Holographic, RedDot, Auxiliary", slotclass3:"Doll", slottype3:"Ammo Box"},
    {Type:'SG', slotclass1:"Doll", slottype1:"Armor", slotclass2:"Magazine", slottype2:"Shells", slotclass3:"Accessory", slottype3:"Optical, Holographic, RedDot, Night"}
]

var _SPECIALSET = [
    {ID:56, slotclass1:"Accessory", slottype1:"Optical, Holographic, RedDot, Night, Suppressor", slotclass2:"Accessory", slottype2:"Optical, Holographic, RedDot, Suppressor", slotclass2:"Magazine", slottype2:"HV Ammo"},
    {ID:57, slotclass1:"Accessory", slottype1:"Optical, Holographic, RedDot, Night, Suppressor", slotclass2:"Accessory", slottype2:"Optical, Holographic, RedDot, Suppressor", slotclass2:"Magazine", slottype2:"HV Ammo"}
]