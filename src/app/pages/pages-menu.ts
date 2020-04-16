import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Tabs and Widjets',
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
        title: 'Modals',
        link: '/pages/modal-overlays/popover',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [

      {
        title: 'Progress Bar and Spinner',
        link: '/pages/extra-components/progress-bar',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Material Table',
        link: '/pages/tables/material-table',
      },
    ],
  },
];
