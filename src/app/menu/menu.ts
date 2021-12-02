import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: 'dashboard',
    title: 'Dashboard',
    translate: 'MENU.DASHBOARD.COLLAPSIBLE',
    type: 'collapsible',
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'home',
    badge: {
      title: '2',
      translate: 'MENU.DASHBOARD.BADGE',
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'analytics',
        title: 'Analytics',
        translate: 'MENU.DASHBOARD.ANALYTICS',
        type: 'item',
        //role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
        icon: 'circle',
        url: 'dashboard/analytics'
      },
      {
        // If role is not assigned will be display to all
        id: 'ecommerce',
        title: 'eCommerce',
        translate: 'MENU.DASHBOARD.ECOMMERCE',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      }
    ]
  },
  // Apps & Pages
  {
    id: 'apps',
    type: 'section',
    title: 'Apps & Pages',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [      
      {
        id: 'pages',
        title: 'Pages',
        translate: 'MENU.PAGES.SECTION',
        type: 'collapsible',
        icon: 'users',
        children: [
          {
            id: 'user',
            title: 'User',
            translate: 'MENU.PAGES.AUTH.COLLAPSIBLE',
            type: 'collapsible',
            icon: 'settings',
            children: [
              {
                id: 'forgot-password-v2',
                title: 'Forgot Password V2',
                translate: 'MENU.PAGES.AUTH.FORGOTPASSWORD2',
                type: 'item',
                url: 'pages/authentication/forgot-password-v2'
              },
              {
                id: 'reset-password-v2',
                title: 'Reset Password V2',
                translate: 'MENU.PAGES.AUTH.RESETPASSWORD2',
                type: 'item',
                url: 'pages/authentication/reset-password-v2'
              },
              {
	            id: 'account-settings',
	            title: 'Account Settings',
	            translate: 'MENU.PAGES.ACCOUNTSETTINGS',
	            type: 'item',
	            url: 'pages/account-settings'
	          }
            ]
          },
          {
            id: 'users',
            title: 'Users',
            translate: 'MENU.APPS.RH.USERS',
            type: 'item',
            icon: 'users',
            url: 'apps/user/user-list'
          },
          {
            id: 'roles',
            title: 'Roles',
            translate: 'MENU.APPS.RH.ROLES',
            type: 'item',
            icon: 'eye',
            url: 'apps/role/role-list'
          },
          {
            id: 'privileges',
            title: 'Privileges',
            translate: 'MENU.APPS.RH.PRIVILEGES',
            type: 'item',
             icon: 'circle',
            url: 'apps/privilege/privilege-list'
          }
        ]
      },
      {
        id: 'pages',
        title: 'Pages',
        translate: 'MENU.GESTIONDECHETS.SECTION',
        type: 'collapsible',
        icon: 'layers',
        children: [
            {
              id: 'usines',
              title: 'Usines',
              translate: 'MENU.APPS.GESTIONDECHET.USINES',
              type: 'item',
              icon: 'home',
              url: 'apps/usine/usine-list'
            },
            {
              id: 'collecteurs',
              title: 'Collecteurs',
              translate: 'MENU.APPS.GESTIONDECHET.COLLECTEURS',
              type: 'item',
              icon: 'truck',
              url: 'apps/collecteurs/collecteurs-list'
            },
            {
              id: 'recycleurs',
              title: 'Recycleurs',
              translate: 'MENU.APPS.GESTIONDECHET.RECYCLEURS',
              type: 'item',
              icon: 'refresh-cw',
              url: 'apps/recycleur/recycleur-list'
            },
            {
              id: 'cycle-de-vie-dechet',
              title: 'Cycle de vie dechet',
              translate: 'MENU.APPS.GESTIONDECHET.CYCLEDEVIE',
              type: 'item',
              icon: 'trash-2',
              url: 'apps/gestion-dechets/cycle-de-vie-dechet'
            }
        ]
      }
      

    ]
  },
  
  // Others
  {
    id: 'others',
    type: 'section',
    title: 'Others',
    translate: 'MENU.OTHERS.SECTION',
    icon: 'box',
    children: [
      {
        id: 'knowledgeBase',
        title: 'Knowledge Base',
        translate: 'MENU.PAGES.KB',
        type: 'item',
        icon: 'circle',
        url: 'pages/knowledge-base'
      },
      {
        id: 'disabled-menu',
        title: 'Disabled Menu',
        translate: 'MENU.OTHERS.DISABLED',
        icon: 'eye-off',
        type: 'item',
        url: '#',
        disabled: true
      }
    ]
  }
];
