export type Command = <T>(args?: T[]) => T 

export interface Item {
  label?: string;
  icon?: string;
  command?: Command;
  separator?: boolean;
  shortcut?: string;
}

export interface Menu {
  title?: string;
  items?: Item[]
}
