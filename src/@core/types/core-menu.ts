import { Role } from "app/auth/models";

// prettier-ignore
export interface CoreMenuItem {
    id           : string;
    title        : string;
    url?         : string;
    type         : 'section' | 'collapsible' | 'item';
    role?        : Array<string>;
    rolesUser?        : Array<Role>;
    accessModuleApp?  : boolean;
    translate?   : string;
    icon?        : string;
    disabled?    : boolean;
    hidden?      : boolean;
    classes?     : string;
    exactMatch?  : boolean;
    externalUrl? : boolean;
    openInNewTab?: boolean;
    badge?       : {
        title?    : string;
        translate?: string;
        classes?    : string;
    };
    children?: CoreMenuItem[];
}

export interface CoreMenu extends CoreMenuItem {
  children?: CoreMenuItem[];
}
