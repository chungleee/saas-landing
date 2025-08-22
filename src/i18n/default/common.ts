export default {
  // Common translation in BaseLayout, Navbar and Footer
  title: 'Looply Rewards',
  brand: 'Looply Rewards',
  navigation: [
    {
      label: 'Customers',
      link: '/',
    },
    {
      label: 'Merchants',
      link: '/merchants',
    },
    {
      label: 'Mission',
      link: '/Mission',
    },
  ],
  footer: {
    rights: () => `© ${new Date().getFullYear()} Looply Rewards. All rights reserved.`,
    // If you want to show the year range, you can use the following code and comment the above line
    // rights: () => `© 2024-${new Date().getFullYear()} Your Company. All rights reserved.`,
  },
};
