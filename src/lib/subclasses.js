// Barbarian
import Berserker from "../../public/images/classes/subclasses/Barbarian/Berserker.png";
import WildMagicBarbarian from "../../public/images/classes/subclasses/Barbarian/Wild Magic.png";
import Giant from "../../public/images/classes/subclasses/Barbarian/Giant.png";
import Wildheart from "../../public/images/classes/subclasses/Barbarian/Wildheart.png";
// Bard
import CollegeOfLore from "../../public/images/classes/subclasses/Bard/College of Lore.png";
import CollegeOfSwords from "../../public/images/classes/subclasses/Bard/College of Swords.png";
import CollegeOfValour from "../../public/images/classes/subclasses/Bard/College of Valour.png";
import CollegeOfGlamour from "../../public/images/classes/subclasses/Bard/College of Glamour.png";
// Cleric
import KnowledgeDomain from "../../public/images/classes/subclasses/Cleric/Knowledge Domain.png";
import LifeDomain from "../../public/images/classes/subclasses/Cleric/Life Domain.png";
import LightDomain from "../../public/images/classes/subclasses/Cleric/Light Domain.png";
import NatureDomain from "../../public/images/classes/subclasses/Cleric/Nature Domain.png";
import TempestDomain from "../../public/images/classes/subclasses/Cleric/Tempest Domain.png";
import TrickeryDomain from "../../public/images/classes/subclasses/Cleric/Trickery Domain.png";
import WarDomain from "../../public/images/classes/subclasses/Cleric/War Domain.png";
import DeathDomain from "../../public/images/classes/subclasses/Cleric/Death Domain.png";
// Druid
import CircleOfTheLand from "../../public/images/classes/subclasses/Druid/Circle of the Land.png";
import CircleOfTheMoon from "../../public/images/classes/subclasses/Druid/Circle of the Moon.png";
import CircleOfTheSpores from "../../public/images/classes/subclasses/Druid/Circle of the Spores.png";
import CircleOfTheStars from "../../public/images/classes/subclasses/Druid/Circle of the Stars.png";
// Fighter
import ArcaneArcher from "../../public/images/classes/subclasses/Fighter/Arcane Archer.png";
import BattleMaster from "../../public/images/classes/subclasses/Fighter/Battle Master.png";
import Champion from "../../public/images/classes/subclasses/Fighter/Champion.png";
import EldritchKnight from "../../public/images/classes/subclasses/Fighter/Eldritch Knight.png";
// Monk
import WayOfTheDrunkenMaster from "../../public/images/classes/subclasses/Monk/Way of the Drunken Master.png";
import WayOfShadow from "../../public/images/classes/subclasses/Monk/Way of Shadow.png";
import WayOfTheFourElements from "../../public/images/classes/subclasses/Monk/Way of the Four Elements.png";
import WayOfTheOpenHand from "../../public/images/classes/subclasses/Monk/Way of the Open Hand.png";
// Paladin
import OathOfDevotion from "../../public/images/classes/subclasses/Paladin/Oath of Devotion.png";
import OathOfTheAncients from "../../public/images/classes/subclasses/Paladin/Oath of the Ancients.png";
import OathOfVengeance from "../../public/images/classes/subclasses/Paladin/Oath of Vengeance.png";
import Oathbreaker from "../../public/images/classes/subclasses/Paladin/Oathbreaker.png";
import OathOfTheCrown from "../../public/images/classes/subclasses/Paladin/Oath of the Crown.png";
// Ranger
import Swarmkeeper from "../../public/images/classes/subclasses/Ranger/Swarmkeeper.png";
import BeastMaster from "../../public/images/classes/subclasses/Ranger/Beast Master.png";
import Gloomstalker from "../../public/images/classes/subclasses/Ranger/Gloomstalker.png";
import Hunter from "../../public/images/classes/subclasses/Ranger/Hunter.png";
// Rogue
import Thief from "../../public/images/classes/subclasses/Rogue/Thief.png";
import Assassin from "../../public/images/classes/subclasses/Rogue/Assassin.png";
import ArcaneTrickster from "../../public/images/classes/subclasses/Rogue/Arcane Trickster.png";
import Swashbuckler from "../../public/images/classes/subclasses/Rogue/Swashbuckler.png";
// Sorcerer
import ShadowMagic from "../../public/images/classes/subclasses/Sorcerer/Shadow Magic.png";
import DraconicBloodline from "../../public/images/classes/subclasses/Sorcerer/Draconic Bloodline.png";
import StormSorcery from "../../public/images/classes/subclasses/Sorcerer/Storm Sorcery.png";
import WildMagicSorcerer from "../../public/images/classes/subclasses/Sorcerer/Wild Magic.png";
// Warlock
import Hexblade from "../../public/images/classes/subclasses/Warlock/The Hexblade.png";
import TheArchfey from "../../public/images/classes/subclasses/Warlock/The Archfey.png";
import TheFiend from "../../public/images/classes/subclasses/Warlock/The Fiend.png";
import TheGreatOldOne from "../../public/images/classes/subclasses/Warlock/The Great Old One.png";
// Wizard
import Abjuration from "../../public/images/classes/subclasses/Wizard/Abjuration.png";
import Bladesinging from "../../public/images/classes/subclasses/Wizard/Bladesinging.png";
import Conjuration from "../../public/images/classes/subclasses/Wizard/Conjuration.png";
import Divination from "../../public/images/classes/subclasses/Wizard/Divination.png";
import Enchantment from "../../public/images/classes/subclasses/Wizard/Enchantment.png";
import Evocation from "../../public/images/classes/subclasses/Wizard/Evocation.png";
import Illusion from "../../public/images/classes/subclasses/Wizard/Illusion.png";
import Transmutation from "../../public/images/classes/subclasses/Wizard/Transmutation.png";
import Necromancy from "../../public/images/classes/subclasses/Wizard/Necromancy.png";

const SubClasses = [
  {
    class: 2,
    description:
      "Adaptable and adroit in all manner of languages and skills, your mind is an intellectual cup brimming with exquisite knowing.",
    id: 0,
    level: 1,
    name: "Knowledge Domain",
    img: KnowledgeDomain
  },
  {
    class: 2,
    description:
      "The Life domain is an aspect of many good deities, offering spells that protect and restore the mind, body, and soul.",
    id: 1,
    level: 1,
    name: "Life Domain",
    img: LifeDomain
  },
  {
    class: 2,
    description:
      "The Light domain is offered by deities of justice, majesty, and primordial flame, providing spells that dispel darkness and harm the undead.",
    id: 2,
    level: 1,
    name: "Light Domain",
    img: LightDomain,
  },
  {
    class: 2,
    description:
      "You embody the vast viridian power of the natural world, an avatar of the subtle divinity of fruitfall, avian migration, woodland silence, and the landslide's roaring fury.",
    id: 3,
    level: 1,
    name: "Nature Domain",
    img: NatureDomain
  },
  {
    class: 2,
    description:
      "Your faith has made you the very thunder that quakes the black firmament, the lightning coursing through the veins of a terrible storm.",
    id: 4,
    level: 1,
    name: "Tempest Domain",
    img: TempestDomain
  },
  {
    class: 2,
    description:
      "A domain shared by wicked, chaotic, and mischievous deities alike, those who channel Trickery specialize in deception and illusion magic.",
    id: 5,
    level: 1,
    name: "Trickery Domain",
    img: TrickeryDomain
  },
  {
    class: 2,
    description:
      "Fortified by holy zeal, you brandish an arsenal of sacramental savagery to use against those you deem unrighteous.",
    id: 6,
    level: 1,
    name: "War Domain",
    img: WarDomain
  },
  {
    class: 9,
    description:
      "Your veins carry draconic magic, the result of a powerful dragon ancestor.",
    id: 7,
    level: 1,
    name: "Draconic Bloodline",
    img: DraconicBloodline
  },
  {
    class: 9,
    description:
      "Whether crackling with the energy of ancient deluges or pierced by gales and hurricanes, your lineage is a strange tapestry scrawled by a tempest.",
    id: 8,
    level: 1,
    name: "Storm Sorcery",
    img: StormSorcery
  },
  {
    class: 9,
    description:
      "Your powers come from ancient forces of chaos. They churn withing you - waiting to burst free at any time.",
    id: 9,
    level: 1,
    name: "Wild Magic",
    img: WildMagicSorcerer
  },
  {
    class: 10,
    description:
      "Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges.",
    id: 10,
    level: 1,
    name: "The Archfey",
    img: TheArchfey
  },
  {
    class: 10,
    description:
      "Warlocks in service to fiends work towards corrupting, destructive ends - intentionally or otherwise - and receive hellish blessings in turn.",
    id: 11,
    level: 1,
    name: "The Fiend",
    img: TheFiend
  },
  {
    class: 10,
    description:
      "Warlocks bound to eldritch beings in the Far Realms work towards inscrutable goals, gaining strange powers over entropy and the mind.",
    id: 12,
    level: 1,
    name: "The Great Old One",
    img: TheGreatOldOne
  },
  {
    class: 6,
    description:
      " Following the ideal of the knight in shining armour, you act with honour and virtue to protect the weak and pursue the greater good.",
    id: 13,
    level: 1,
    name: "Oath of Devotion",
    img: OathOfDevotion
  },
  {
    class: 6,
    description:
      "You fight on the side of light in the cosmic struggle against darkness to preserve the sanctity of life and the beauty of nature.",
    id: 14,
    level: 1,
    name: "Oath of the Ancients",
    img: OathOfTheAncients
  },
  {
    class: 6,
    description:
      "You have set aside even your own purity to right wrongs and deliver justice to those who have committed the most grievous sins.",
    id: 15,
    level: 1,
    name: "Oath of Vengeance",
    img: OathOfVengeance
  },
  {
    class: 6,
    description:
      " You have broken your sacred Oath in pursuit of power and ambition. Only darkness remains to fuel you now.",
    id: 16,
    level: 1,
    name: "Oathbreaker",
    img: Oathbreaker
  },
  {
    class: 3,
    description:
      "The Circle of the Land Subclass has a heavy focus on the use of Nature Magic, and allows the Druid to regain some Spells after a Short Rest.",
    id: 17,
    level: 2,
    name: "Circle of the Land",
    img: CircleOfTheLand
  },
  {
    class: 3,
    description:
      "The Circle of the Moon Subclass has a much heavier focus on the Wild Shape Class Feature of the Druid. If you like shapeshifting, and want to do so more effectively then you'll likely enjoy this Subclass.",
    id: 18,
    level: 2,
    name: "Circle of the Moon",
    img: CircleOfTheMoon
  },
  {
    class: 3,
    description:
      "Druids of the Circle of Spores find beauty in decay. They see within mold and other fungi the ability to transform lifeless material into abundant, albeit somewhat strange, life. These druids believe that life and death are parts of a grand cycle, with one leading to the other and then back again. Death isn't the end of life, but instead a change of state that sees life shift into a new form.",
    id: 19,
    level: 2,
    name: "Circle of the Spores",
    img: CircleOfTheSpores
  },
  {
    class: 11,
    description:
      "Abjuration spells summon wards, banish enemies, and nullify magic, suitable for those who wish to defend themselves and others.",
    id: 20,
    level: 2,
    name: "Abjuration",
    img: Abjuration
  },
  {
    class: 11,
    description:
      "As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant.",
    id: 21,
    level: 2,
    name: "Conjuration",
    img: Conjuration
  },
  {
    class: 11,
    description:
      "The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight.",
    id: 22,
    level: 2,
    name: "Divination",
    img: Divination
  },
  {
    class: 11,
    description:
      "As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between.",
    id: 23,
    level: 2,
    name: "Enchantment",
    img: Enchantment
  },
  {
    class: 11,
    description:
      "Evocation spells focus elemental energy into powerful attacks and enchantments. Those who specialize in this school are known as evokers.",
    id: 24,
    level: 2,
    name: "Evocation",
    img: Evocation
  },
  {
    class: 11,
    description:
      "You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists (including many gnome wizards) are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain.",
    id: 25,
    level: 2,
    name: "Illusion",
    img: Illusion
  },
  {
    class: 11,
    description:
      "The School of Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate.",
    id: 26,
    level: 2,
    name: "Necromancy",
    img: Necromancy
  },
  {
    class: 11,
    description:
      "You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality's forge.",
    id: 27,
    level: 2,
    name: "Transmutation",
    img: Transmutation
  },
  {
    class: 4,
    description:
      "Battle Masters are paragons of tactical superiority, combining combat maneuvers and experience in the field to dominate every fight.",
    id: 28,
    level: 3,
    name: "Battle Master",
    img: BattleMaster
  },
  {
    class: 4,
    description:
      "You approach the complex problems posed by combat with one distinctively effective solution - you hit those problems, really quite hard.",
    id: 29,
    level: 3,
    name: "Champion",
    img: Champion
  },
  {
    class: 4,
    description:
      "Eldritch Knights study magic to supplement their weaponry, allowing them to overcome resistance from the toughest foes.",
    id: 30,
    level: 3,
    name: "Eldritch Knight",
    img: EldritchKnight
  },
  {
    class: 5,
    description:
      "Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Sometimes the members of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves' guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students.",
    id: 31,
    level: 3,
    name: "Way of Shadow",
    img: WayOfShadow
  },
  {
    class: 5,
    description:
      "These monks 'bend' the four elements at will, becoming 'avatars' of balance.",
    id: 32,
    level: 3,
    name: "Way of the Four Elements",
    img: WayOfTheFourElements
  },
  {
    class: 5,
    description:
      "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed.",
    id: 33,
    level: 3,
    name: "Way of the Open Hand",
    img: WayOfTheOpenHand
  },
  {
    class: 0,
    description:
      "Violence is both a means and an end. You follow a path of untrammeled fury, slick with blood, as you thrill in the chaos of battle, heedless of your own well-being.",
    id: 34,
    level: 3,
    name: "Berserker",
    img: Berserker
  },
  {
    class: 0,
    description:
      "Many places in the multiverse abound with beauty, intense emotion, and rampant magic; the Feywild, the Upper Planes, and other realms of supernatural power radiate with such forces and can profoundly influence people. As folk of deep feeling, barbarians are especially susceptible to these wild influences, with some barbarians being transformed by the magic. These magic-suffused barbarians walk the Path of Wild Magic. Elf, tiefling, aasimar, and genasi barbarians often seek this path, eager to manifest the otherworldly magic of their ancestors.",
    id: 35,
    level: 3,
    name: "Wild Magic",
    img: WildMagicBarbarian
  },
  {
    class: 0,
    description:
      "Your attunement with nature and its beasts inspires your rage, empowering you with supernatural might.",
    id: 36,
    level: 3,
    name: "Wildheart",
    img: Wildheart
  },
  {
    class: 1,
    description:
      "You pursue beauty and truth, collecting knowledge from scholarly tomes to peasants' tales, and use your gifts to hold both audiences and enemies spellbound.",
    id: 37,
    level: 3,
    name: "College of Lore",
    img: CollegeOfLore
  },
  {
    class: 1,
    description:
      "Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. Though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right.",
    id: 38,
    level: 3,
    name: "College of Swords",
    img: CollegeOfSwords
  },
  {
    class: 1,
    description:
      "You wander the land to witness and relate the deeds of the mighty, keeping alive the memory of heroes of the past and inspiring heroes of the future.",
    id: 39,
    level: 3,
    name: "College of Valour",
    img: CollegeOfValour
  },
  {
    class: 7,
    description:
      "Beast Masters bind themselves to an animal companion, sharing an intelligent bond that flourishes in and out of combat.",
    id: 40,
    level: 3,
    name: "Beast Master",
    img: BeastMaster
  },
  {
    class: 7,
    description:
      "Gloom stalkers are at home in the darkest places: deep under the earth, in gloomy alleyways, in primeval forests, and wherever else the light dims. Most folk enter such places with trepidation, but a gloom stalker ventures boldly into the darkness, seeking to ambush threats before they can reach the broader world. Such rangers are often found in the Underdark, but they will go any place where evil lurks in the shadows.",
    id: 41,
    level: 3,
    name: "Gloomstalker",
    img: Gloomstalker
  },
  {
    class: 7,
    description:
      "Hunters seek the most dangerous prey in Faerun, from ancient dragons to massive hordes of undead, and excel at slaying them all.",
    id: 42,
    level: 3,
    name: "Hunter",
    img: Hunter
  },
  {
    class: 8,
    description:
      "Arcane Tricksters are rogues with a clever touch of magic, using illusions and enchantments to keep their opponents on the backfoot.",
    id: 43,
    level: 3,
    name: "Arcane Trickster",
    img: ArcaneTrickster
  },
  {
    class: 8,
    description:
      "You focus your training on the grim art of death. Those who adhere to this archetype are diverse: hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity. Stealth, poison, and disguise help you eliminate your foes with deadly efficiency.",
    id: 44,
    level: 3,
    name: "Assassin",
    img: Assassin
  },
  {
    class: 8,
    description:
      "Thieves use their skills in stealth and larceny to acquire whatever they wish, whether from a third story window or the depths of long-forgotten ruins.",
    id: 45,
    level: 3,
    name: "Thief",
    img: Thief
  },
  {
    class: 0,
    description:
      "You walk the path of giants, invoking their elemental might and size by drawing strength from the same primal forces as them.",
    id: 46,
    level: 3,
    name: "Giant",
    img: Giant
  },
  {
    class: 1,
    description:
      "You mastered your craft under the tutelage of fey creatures, whose captivating magic swirls within you, ready to be released.",
    id: 47,
    level: 3,
    name: "College of Glamour",
    img: CollegeOfGlamour
  },
  {
    class: 2,
    description:
      "You nourish your faith on the forces that create the dead and give rise to the undead.",
    id: 48,
    level: 1,
    name: "Death Domain",
    img: DeathDomain
  },
  {
    class: 3,
    description:
      "You are guided by the infinite mysteries of the cosmos. It is through your understanding of the stars that your druidic magic gains its potency.",
    id: 49,
    level: 2,
    name: "Circle of the Stars",
    img: CircleOfTheStars
  },
  {
    class: 4,
    description:
      "You are capable of weaving magic into your attacks, giving your archery a supernatural quality - and your foes something to fear.",
    id: 50,
    level: 3,
    name: "Arcane Archer",
    img: ArcaneArcher
  },
  {
    class: 5,
    description:
      "With the unpredictable lurches of a tippler, you hiccup your way through battle, frustrating foes with carefully executed movements concealed beneath a facade of incompetence.",
    id: 51,
    level: 3,
    name: "Way of the Drunken Master",
    img: WayOfTheDrunkenMaster
  },
  {
    class: 6,
    description:
      "You have sworn yourself to the ideals of civilization, serving the laws that hold society together and preserving the order they command.",
    id: 52,
    level: 1,
    name: "Oath of the Crown",
    img: OathOfTheCrown
  },
  {
    class: 7,
    description:
      "You have forged a deep connection with your natural surroundings and formed a magical bond with a swarm of nature spirits. This swarm serves as a helpful companion and a potent force in battle.",
    id: 53,
    level: 3,
    name: "Swarmkeeper",
    img: Swarmkeeper
  },
  {
    class: 8,
    description:
      "You live and breathe the art of the blade, excelling in single combat thanks to your quick feet and wits.",
    id: 54,
    level: 3,
    name: "Swashbuckler",
    img: Swashbuckler
  },
  {
    class: 9,
    description:
      "You siphon your powers from the Shadowfell itself, the light in your soul snuffed out by an unsettling darkness.",
    id: 55,
    level: 1,
    name: "Shadow Magic",
    img: ShadowMagic
  },
  {
    class: 10,
    description:
      "You have made your pact with a mysterious entity from the Shadowfell - a force that manifests in sentient magic weapons carved from the stuff of shadow.",
    id: 56,
    level: 1,
    name: "The Hexblade",
    img: Hexblade,
  },
  {
    class: 11,
    description:
      "A master of wizardry and swordplay, you combine the elegant maneuvers of a warrior with the devastating magics of a mage.",
    id: 57,
    level: 2,
    name: "Bladesinging",
    img: Bladesinging
  },
];
export default SubClasses;
