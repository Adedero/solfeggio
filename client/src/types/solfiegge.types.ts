type Command = <T>(args?: T[]) => T 

export interface Menu {
  title?: string;
  items?: {
    label?: string;
    icon?: string;
    command?: Command;
    separator?: boolean;
    shortcut?: string;
  }[]
}