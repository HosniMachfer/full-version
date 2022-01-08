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
            id: 'cycle-de-vie-dechet',
            title: 'Cycle de vie dechet',
            translate: 'MENU.APPS.GESTIONDECHET.CYCLEDEVIE',
            type: 'item',
            icon: 'trash-2',
            url: 'apps/gestion-dechets/cycle-de-vie-dechet'
          },
          {
	        id: 'conteneur',
	        title: 'Conteneur',
	        translate: 'MENU.APPS.GESTIONDECHET.CONTENEUR',
	        type: 'item',
	        icon: 'circle',
	        url: 'apps/gestion-dechets/conteneur/conteneur-list'
	        },
          {
            id: 'gestiondechetconfiguration',
            title: 'Configuration',
            translate: 'MENU.APPS.GESTIONDECHET.CONF',
            type: 'collapsible',
            icon: 'settings',
            children: [
                        {
                          id: 'usines',
                          title: 'Usines',
                          translate: 'MENU.APPS.GESTIONDECHET.USINES',
                          type: 'item',
                          icon: 'home',
                          url: 'apps/gestion-dechets/usine/usine-list'
                        },
                        {
                          id: 'collecteurs',
                          title: 'Collecteurs',
                          translate: 'MENU.APPS.GESTIONDECHET.COLLECTEURS',
                          type: 'item',
                          icon: 'truck',
                          url: 'apps/gestion-dechets/collecteur/collecteur-list'
                        },
                        {
                          id: 'recycleurs',
                          title: 'Recycleurs',
                          translate: 'MENU.APPS.GESTIONDECHET.RECYCLEURS',
                          type: 'item',
                          icon: 'refresh-cw',
                          url: 'apps/gestion-dechets/recycleur/recycleur-list'
                        },
                        {
                          id: 'tiers',
                          title: 'Mvtstocks',
                          translate: 'MENU.APPS.GESTIONDECHET.TIERS',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/tier/tier-list'
                        },
                        {
                          id: 'type-tiers',
                          title: 'Type tiers',
                          translate: 'MENU.APPS.GESTIONDECHET.TYPETIERS',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/type-tier/type-tier-list'
                        },
                        {
                          id: 'type-mouvements',
                          title: 'Type mouvements',
                          translate: 'MENU.APPS.GESTIONDECHET.TYPEMOUVEMENTS',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/type-mouvement/type-mouvement-list'
                        },
                        {
                          id: 'unites',
                          title: 'Unites',
                          translate: 'MENU.APPS.GESTIONDECHET.UNITES',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/unite/unite-list'
                        },
                        {
                          id: 'dechet',
                          title: 'Dechets',
                          translate: 'MENU.APPS.GESTIONDECHET.DECHETS',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/dechet/dechet-list'
                        },
                        {
                          id: 'etat-famille',
                          title: 'Etat famille',
                          translate: 'MENU.APPS.GESTIONDECHET.ETATFAMILLE',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/etat-famille/etat-famille-list'
                        },
                        {
                          id: 'etat-conteneur',
                          title: 'Etat conteneur',
                          translate: 'MENU.APPS.GESTIONDECHET.ETATCONTENEUR',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/etat-conteneur/etat-conteneur-list'
                        },
                        {
                          id: 'etat-magasin',
                          title: 'Etat magasin',
                          translate: 'MENU.APPS.GESTIONDECHET.ETATMAGASIN',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/etat-magasin/etat-magasin-list'
                        },
                        {
                          id: 'etat-mouvement',
                          title: 'Etat mouvement',
                          translate: 'MENU.APPS.GESTIONDECHET.ETATMOUVEMENT',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/etat-mouvement/etat-mouvement-list'
                        },
                        {
                          id: 'famille',
                          title: 'Familles',
                          translate: 'MENU.APPS.GESTIONDECHET.FAMILLE',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/famille/famille-list'
                        },
                        {
                          id: 'magasin',
                          title: 'Magasins',
                          translate: 'MENU.APPS.GESTIONDECHET.MAGASIN',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/magasin/magasin-list'
                        },
                        {
                          id: 'matiere',
                          title: 'Matieres',
                          translate: 'MENU.APPS.GESTIONDECHET.MATIERE',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/matiere/matiere-list'
                        },
                        {
                          id: 'mouvement',
                          title: 'Mouvement',
                          translate: 'MENU.APPS.GESTIONDECHET.MOUVEMENT',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/mouvement/mouvement-list'
                        },
                        {
                          id: 'mvtstock',
                          title: 'MvtStock',
                          translate: 'MENU.APPS.GESTIONDECHET.MVTSTOCK',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/mvtstock/mvtstock-list'
                        },
                        {
                          id: 'fournisseur',
                          title: 'Fournisseur',
                          translate: 'MENU.APPS.GESTIONDECHET.FOURNISSEUR',
                          type: 'item',
                          icon: 'circle',
                          url: 'apps/gestion-dechets/fournisseur/fournisseur-list'
                        }
            ]
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
  },
      {
        id: 'components',
        title: 'Components',
        translate: 'MENU.UI.COMPONENTS.COLLAPSIBLE',
        type: 'collapsible',
        icon: 'archive',
        children: [
          {
            id: 'components-alerts',
            title: 'Alerts',
            translate: 'MENU.UI.COMPONENTS.ALERTS',
            type: 'item',
            icon: 'circle',
            url: 'components/alerts'
          },
          {
            id: 'components-avatar',
            title: 'Avatar',
            translate: 'MENU.UI.COMPONENTS.AVATAR',
            type: 'item',
            icon: 'circle',
            url: 'components/avatar'
          },
          {
            id: 'components-badges',
            title: 'Badges',
            translate: 'MENU.UI.COMPONENTS.BADGES',
            type: 'item',
            icon: 'circle',
            url: 'components/badges'
          },
          {
            id: 'components-breadcrumbs',
            title: 'Breadcrumbs',
            translate: 'MENU.UI.COMPONENTS.BREADCRUMBS',
            type: 'item',
            icon: 'circle',
            url: 'components/breadcrumbs'
          },
          {
            id: 'components-buttons',
            title: 'Buttons',
            translate: 'MENU.UI.COMPONENTS.BUTTONS',
            type: 'item',
            icon: 'circle',
            url: 'components/buttons'
          },
          {
            id: 'components-carousel',
            title: 'Carousel',
            translate: 'MENU.UI.COMPONENTS.CAROUSEL',
            type: 'item',
            icon: 'circle',
            url: 'components/carousel'
          },
          {
            id: 'components-collapse',
            title: 'Collapse',
            translate: 'MENU.UI.COMPONENTS.COLLAPSE',
            type: 'item',
            icon: 'circle',
            url: 'components/collapse'
          },
          {
            id: 'components-divider',
            title: 'Divider',
            translate: 'MENU.UI.COMPONENTS.DIVIDER',
            type: 'item',
            icon: 'circle',
            url: 'components/divider'
          },
          {
            id: 'components-drop-downs',
            title: 'Dropdowns',
            translate: 'MENU.UI.COMPONENTS.DROPDOWNS',
            type: 'item',
            icon: 'circle',
            url: 'components/dropdowns'
          },
          {
            id: 'components-list-group',
            title: 'List Group',
            translate: 'MENU.UI.COMPONENTS.GROUP',
            type: 'item',
            icon: 'circle',
            url: 'components/list-group'
          },
          {
            id: 'components-media-objects',
            title: 'Media Objects',
            translate: 'MENU.UI.COMPONENTS.OBJECTS',
            type: 'item',
            icon: 'circle',
            url: 'components/media-objects'
          },
          {
            id: 'components-modals',
            title: 'Modals',
            translate: 'MENU.UI.COMPONENTS.MODALS',
            type: 'item',
            icon: 'circle',
            url: 'components/modals'
          },
          {
            id: 'components-navs',
            title: 'Navs',
            translate: 'MENU.UI.COMPONENTS.COMPONENT',
            type: 'item',
            icon: 'circle',
            url: 'components/navs'
          },
          {
            id: 'components-pagination',
            title: 'Pagination',
            translate: 'MENU.UI.COMPONENTS.PAGINATION',
            type: 'item',
            icon: 'circle',
            url: 'components/pagination'
          },
          {
            id: 'components-pill-badges',
            title: 'Pill Badges',
            translate: 'MENU.UI.COMPONENTS.PBADGES',
            type: 'item',
            icon: 'circle',
            url: 'components/pill-badges'
          },
          {
            id: 'components-pills',
            title: 'Pills',
            translate: 'MENU.UI.COMPONENTS.PILLS',
            type: 'item',
            icon: 'circle',
            url: 'components/pills'
          },
          {
            id: 'components-popovers',
            title: 'Popovers',
            translate: 'MENU.UI.COMPONENTS.POPOVERS',
            type: 'item',
            icon: 'circle',
            url: 'components/popovers'
          },
          {
            id: 'components-progress',
            title: 'Progress',
            translate: 'MENU.UI.COMPONENTS.PROGRESS',
            type: 'item',
            icon: 'circle',
            url: 'components/progress'
          },
          {
            id: 'components-ratings',
            title: 'Ratings',
            translate: 'MENU.UI.COMPONENTS.RATINGS',
            type: 'item',
            icon: 'circle',
            url: 'components/ratings'
          },
          {
            id: 'components-spinner',
            title: 'Spinner',
            translate: 'MENU.UI.COMPONENTS.SPINNER',
            type: 'item',
            icon: 'circle',
            url: 'components/spinner'
          },
          {
            id: 'components-tabs',
            title: 'Tabs',
            translate: 'MENU.UI.COMPONENTS.TABS',
            type: 'item',
            icon: 'circle',
            url: 'components/tabs'
          },
          {
            id: 'components-timeline',
            title: 'Timeline',
            translate: 'MENU.UI.COMPONENTS.TIMELINE',
            type: 'item',
            icon: 'circle',
            url: 'components/timeline'
          },
          {
            id: 'components-toasts',
            title: 'Toasts',
            translate: 'MENU.UI.COMPONENTS.TOASTS',
            type: 'item',
            icon: 'circle',
            url: 'components/toasts'
          },
          {
            id: 'components-tooltips',
            title: 'Tooltips',
            translate: 'MENU.UI.COMPONENTS.TOOLTIPS',
            type: 'item',
            icon: 'circle',
            url: 'components/tooltips'
          }
        ]
      }
];
