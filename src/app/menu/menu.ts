import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: 'dashboard',
    title: 'Dashboard',
    translate: 'MENU.DASHBOARD.COLLAPSIBLE',
    type: 'item',
    icon: 'home',
    url: 'dashboard/ecommerce'

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
	        id: 'moduleapplicatif',
	        title: 'Module applicatif',
	        translate: 'MENU.APPS.MODULEAPPLICATIF.TITLE',
	        type: 'item',
	        icon: 'users',
	        url: 'apps/module-applicatif/module-applicatif-list'
          },      
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
        id: 'gestiondechet',
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
	            id: 'gestiontiersconfiguration',
	            title: 'Tiers',
	            translate: 'Tiers',
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
                      title: 'tiers',
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
                    }
              ]
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
      },
      {// GMAO
        id: 'gmao',
        title: 'Pages',
        translate: 'MENU.GMAO.SECTION',
        type: 'collapsible',
        icon: 'tool',
        children: [ // Fils GMAO
          {
            id: 'parc-machine',
            title: 'Parc machine',
            translate: 'MENU.APPS.GMAO.PARCMACHINE',
            type: 'item',
            icon: 'columns',
            url: 'apps/gmao/machine/machine-list'
          },
          {
            id: 'pdr',
            title: 'Pieces de rechange',
            translate: 'MENU.APPS.GMAO.PDR',
            type: 'item',
            icon: 'columns',
            url: 'apps/gmao/pdr/pdr-list'
          },
          {
            id: 'intervention',
            title: 'Intervention',
            translate: 'MENU.APPS.GMAO.INTERVENTION',
            type: 'collapsible',
            icon: 'activity',
            // changer le lien
            //url: 'apps/gmao/pdr/pdr-list',

              children:[
              // {
              //   id: 'demandeInter',
              //   title: 'Demande Intervention',
              //   translate: 'MENU.APPS.GMAO.DEMANDEINTERVENTION',
              //   type: 'item',
              //   icon: 'circle',
              //   // lien
              //   url: 'apps/gmao/intervention-curative/intervention-curative-list'
              // },
              {
                id: 'interventionCurative',
                title: 'intervention curative',
                translate: 'MENU.APPS.GMAO.INTERVENTIONCURATIVE',
                type: 'item',
                icon: 'circle',
                // lien
                url: 'apps/gmao/intervention-curative/intervention-curative-list'
              },
              {
                id: 'interventionPréventive',
                title: 'intervention prévnetive',
                translate: 'MENU.APPS.GMAO.INTERVENTIONPREVENTIVE',
                type: 'item',
                icon: 'circle',
                // lien
                url: 'apps/gmao/categorie-equipement/categorie-equipement-list'
              }

            ]
          },

          {
            id: 'tdb',
            title: 'Tableau de bord',
            translate: 'MENU.APPS.GMAO.TDB',
            type: 'item',
            icon: 'home',
            url: 'apps/gmao/categorie-equipement/categorie-equipement-list'
          },
         

          { //configuration
          id: 'gestiongmaoconfiguration',
          title: 'Configuration',
          // translate: 'MENU.APPS.GESTIONGMAO.CONF',
          type: 'collapsible',
          icon: 'settings',
            children: [
              {
                id: 'categorie-equipement',
                title: 'Categorie equipements',
                translate: 'MENU.APPS.GMAO.CATEGORIEEQUIPEMENT',
                type: 'item',
                icon: 'circle',
                url: 'apps/gmao/categorie-equipement/categorie-equipement-list'
              },
              {
                id: 'famillemachine',
                title: 'Familles',
                translate: 'MENU.APPS.GMAO.FAMILLEMACHINE',
                type: 'item',
                icon: 'circle',
                url: 'apps/gmao/famille/famille-list'
              },
              {
                id: 'marque',
                title: 'Marques',
                translate: 'MENU.APPS.GMAO.MARQUE',
                type: 'item',
                icon: 'circle',
                url: 'apps/gmao/marque/marque-list'
              },
              // {//A Vérifier l'affichage
              //   id: 'Departement',
              //   title: 'Departement',
              //   translate: 'MENU.APPS.GMAO.DEPARTEMENT',
              //   type: 'item',
              //   icon: 'circle',
              //   //Lien
              //   url: 'apps/gmao/marque/marque-list'
              //  },
               {
                id: 'localite',
                title: 'Localites',
                translate: 'MENU.APPS.GMAO.LOCALITE',
                type: 'item',
                icon: 'circle',
                url: 'apps/gmao/localite/localite-list'
              },
              {
                id: 'emplacement',
                title: 'Emplacements',
                translate: 'MENU.APPS.GMAO.EMPLACEMENT',
                type: 'item',
                icon: 'circle',
                url: 'apps/gmao/emplacement/emplacement-list'
              },
              // {
              //   id: 'etat-actuel',
              //   title: 'Etat actuel',
              //   translate: 'MENU.APPS.GMAO.ETATACTUEL',
              //   type: 'item',
              //   icon: 'circle',
              //   url: 'apps/gmao/etat-actuel/etat-actuel-list'
              // },
              {
                id: 'etat-machine',
                title: 'Etat machine',
                translate: 'MENU.APPS.GMAO.ETATMACHINE',
                type: 'item',
                icon: 'circle',
                url: 'apps/gmao/etat-machine/etat-machine-list'
              },
            //   {
            //   id: 'etat-famille',
            //   title: 'Etat famille',
            //   translate: 'MENU.APPS.GMAO.ETATFAMILLE',
            //   type: 'item',
            //   icon: 'circle',
            //   // url: 'apps/gestion-dechets/etat-famille/etat-famille-list'
            //  },

            // {
            //   id: 'etat-magasin',
            //   title: 'Etat magasin',
            //   translate: 'MENU.APPS.GMAO.ETATMAGASIN',
            //   type: 'item',
            //   icon: 'circle',
            //   url: 'apps/gestion-dechets/etat-magasin/etat-magasin-list'
            // },

            // {
            //   id: 'magasin',
            //   title: 'Magasins',
            //   translate: 'MENU.APPS.GMAO.MAGASIN',
            //   type: 'item',
            //   icon: 'circle',
            //   // url: 'apps/gestion-dechets/magasin/magasin-list'
            // },

            // {
            //   id: 'matiere',
            //   hidden:false,
            //   title: 'Matieres',
            //   translate: 'MENU.APPS.GESTIONDECHET.MATIERE',
            //   type: 'item',
            //   icon: 'circle',
            //   url: 'apps/gestion-dechets/matiere/matiere-list'
            // },
            // {
            //   id: 'fournisseur',
            //   title: 'Fournisseur',
            //   translate: 'MENU.APPS.GMAO.FOURNISSEUR',
            //   type: 'item',
            //   icon: 'circle',
            //   // url: 'apps/gestion-dechets/fournisseur/fournisseur-list'
            // },

            {
              id: 'unites',
              title: 'Unites',
              translate: 'MENU.APPS.GMAO.UNITES',
              type: 'item',
              icon: 'circle',
              url: 'apps/gmao/unite/unite-list'
            }

            ]//Configuration
          }//Configuration

          

        ]//Fils GMAO 
      }//Section GMAO

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
	      }
	    ]
  	 }
];
