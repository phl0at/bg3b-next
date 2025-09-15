import { FrontEndClass, BackEndBuild, SomeItem } from "./types";
import Amulets from "@/lib/equipment/amulets"
import Armours from "@/lib/equipment/armours";
import Boots from "@/lib/equipment/boots";
import Cloaks from "@/lib/equipment/cloaks";
import Gloves from "@/lib/equipment/gloves";
import Helmets from "@/lib/equipment/helmets";
import Rings from "@/lib/equipment/rings";
import Melee from "@/lib/equipment/meleeWeapons";
import Ranged from "@/lib/equipment/rangedWeapons";


export function addCantripPoints(_class: string, level: number) {
  switch (_class) {
    case "Bard": {
      if (level === 1) {
        return 2;
      } else if (level === 4 || level === 10) {
        return 1;
      } else {
        return 0;
      }
    }
    case "Cleric": {
      if (level === 1) {
        return 3;
      } else if (level === 4 || level === 10) {
        return 1;
      } else {
        return 0;
      }
    }
    case "Druid": {
      if (level === 1) {
        return 2;
      } else if (level === 4 || level === 10) {
        return 1;
      } else {
        return 0;
      }
    }
    default: {
      return 0;
    }
  }
}

export function parseMods(item: SomeItem) {
  if (!item) return ""
  const set = item.modifiers?.includes("=");
  const add = item.modifiers?.includes("+");

  if (set) {
    return `Sets ${item.modifiers?.split("=")[0]} to ${item.modifiers?.split("=")[1]
      }`;
  } else if (add) {
    const type = item.modifiers?.split("&*&")[1];
    return `Adds ${item.modifiers?.split("&*&")[0].split("+")[1]} ${type || "Physical"
      } damage`;
  } else {
    return '';
  }
}


export function mergeSequences(arr: number[]) {
  const numbers = [...arr];
  const result = [];
  let start = 0;

  while (start < numbers.length) {
    let end = start;

    while (end + 1 < numbers.length && numbers[end + 1] === numbers[end] + 1) {
      end++;
    }

    if (end - start >= 2) {
      result.push(`${numbers[start]}-${numbers[end]}`);
    } else {
      for (let i = start; i <= end; i++) {
        result.push(numbers[i].toString());
      }
    }
    start = end + 1;
  }

  return result.join(', ');
}


export function sortClasses(classes: FrontEndClass[]): FrontEndClass[] {

  if (classes.length <= 1) return classes;

  const pivot = classes.pop() as FrontEndClass;
  const left = [] as FrontEndClass[];
  const right = [] as FrontEndClass[];

  for (const _class of classes) {
    if (_class.order < pivot.order) {
      left.push(_class)
    } else {
      right.push(_class)
    }
  }

  return [...sortClasses(left), pivot, ...sortClasses(right)];
}


export const formatBuild = (build: BackEndBuild) => {
  const formattedBuild: any = { ...build }
  formattedBuild.abilityPoints = 0;
  formattedBuild.cantripPoints = 0;
  formattedBuild.amulet = Amulets[build.amulet as keyof typeof Amulets]
  formattedBuild.armour = Armours[build.armour as keyof typeof Armours]
  formattedBuild.boots = Boots[build.boots as keyof typeof Boots]
  formattedBuild.cloak = Cloaks[build.cloak as keyof typeof Cloaks]
  formattedBuild.gloves = Gloves[build.gloves as keyof typeof Gloves]
  formattedBuild.helmet = Helmets[build.helmet as keyof typeof Helmets]
  formattedBuild.ring1 = Rings[build.ring1 as keyof typeof Rings]
  formattedBuild.ring2 = Rings[build.ring2 as keyof typeof Rings]
  formattedBuild.meleeMH = Melee[build.meleeMH as keyof typeof Melee]
  formattedBuild.meleeOH = Melee[build.meleeOH as keyof typeof Melee]
  formattedBuild.rangedMH = Ranged[build.rangedMH as keyof typeof Ranged]
  formattedBuild.rangedOH = Ranged[build.rangedOH as keyof typeof Ranged]
  return formattedBuild
}