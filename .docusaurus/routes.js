
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/crypto-comix',
  component: ComponentCreator('/blog/crypto-comix'),
  exact: true,
  
},
{
  path: '/help/',
  component: ComponentCreator('/help/'),
  exact: true,
  
},
{
  path: '/help/DebtLetter/',
  component: ComponentCreator('/help/DebtLetter/'),
  exact: true,
  
},
{
  path: '/help/DepositLetter/',
  component: ComponentCreator('/help/DepositLetter/'),
  exact: true,
  
},
{
  path: '/page',
  component: ComponentCreator('/page'),
  exact: true,
  
},
{
  path: '/pages/subpage',
  component: ComponentCreator('/pages/subpage'),
  exact: true,
  
},
{
  path: '/team',
  component: ComponentCreator('/team'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/'),
  exact: true,
  
},
{
  path: '/docs/Mission',
  component: ComponentCreator('/docs/Mission'),
  exact: true,
  
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2'),
  exact: true,
  
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3'),
  exact: true,
  
},
{
  path: '/docs/manifesto',
  component: ComponentCreator('/docs/manifesto'),
  exact: true,
  
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx'),
  exact: true,
  
},
{
  path: '/docs/styles',
  component: ComponentCreator('/docs/styles'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
