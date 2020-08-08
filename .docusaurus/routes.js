
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/crypto-comix/',
  component: ComponentCreator('/crypto-comix/'),
  exact: true,
  
},
{
  path: '/crypto-comix/blog',
  component: ComponentCreator('/crypto-comix/blog'),
  exact: true,
  
},
{
  path: '/crypto-comix/blog/crypto-comix',
  component: ComponentCreator('/crypto-comix/blog/crypto-comix'),
  exact: true,
  
},
{
  path: '/crypto-comix/help/',
  component: ComponentCreator('/crypto-comix/help/'),
  exact: true,
  
},
{
  path: '/crypto-comix/help/DebtLetter/',
  component: ComponentCreator('/crypto-comix/help/DebtLetter/'),
  exact: true,
  
},
{
  path: '/crypto-comix/help/DepositLetter/',
  component: ComponentCreator('/crypto-comix/help/DepositLetter/'),
  exact: true,
  
},
{
  path: '/crypto-comix/page',
  component: ComponentCreator('/crypto-comix/page'),
  exact: true,
  
},
{
  path: '/crypto-comix/pages/subpage',
  component: ComponentCreator('/crypto-comix/pages/subpage'),
  exact: true,
  
},
{
  path: '/crypto-comix/team',
  component: ComponentCreator('/crypto-comix/team'),
  exact: true,
  
},
{
  path: '/crypto-comix/docs',
  component: ComponentCreator('/crypto-comix/docs'),
  
  routes: [
{
  path: '/crypto-comix/docs/',
  component: ComponentCreator('/crypto-comix/docs/'),
  exact: true,
  
},
{
  path: '/crypto-comix/docs/Mission',
  component: ComponentCreator('/crypto-comix/docs/Mission'),
  exact: true,
  
},
{
  path: '/crypto-comix/docs/doc2',
  component: ComponentCreator('/crypto-comix/docs/doc2'),
  exact: true,
  
},
{
  path: '/crypto-comix/docs/doc3',
  component: ComponentCreator('/crypto-comix/docs/doc3'),
  exact: true,
  
},
{
  path: '/crypto-comix/docs/doc4',
  component: ComponentCreator('/crypto-comix/docs/doc4'),
  exact: true,
  
},
{
  path: '/crypto-comix/docs/doc5',
  component: ComponentCreator('/crypto-comix/docs/doc5'),
  exact: true,
  
},
{
  path: '/crypto-comix/docs/doc6',
  component: ComponentCreator('/crypto-comix/docs/doc6'),
  exact: true,
  
},
{
  path: '/crypto-comix/docs/manifesto',
  component: ComponentCreator('/crypto-comix/docs/manifesto'),
  exact: true,
  
},
{
  path: '/crypto-comix/docs/mdx',
  component: ComponentCreator('/crypto-comix/docs/mdx'),
  exact: true,
  
},
{
  path: '/crypto-comix/docs/styles',
  component: ComponentCreator('/crypto-comix/docs/styles'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
