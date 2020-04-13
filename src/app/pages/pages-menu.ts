import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Form Controls',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },

      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Checkbox',
        link: '/pages/forms/checkbox',
      },
      {
        title: 'Radio',
        link: '/pages/forms/radio',
      },
      {
        title: 'Slide',
        link: '/pages/forms/slide',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Colors',
        link: '/pages/ui-features/colors',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },

      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [

      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
];
