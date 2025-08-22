export default {
  meta: {
    title: 'AstroRise — Blazing-Fast, Customizable Astro Theme',
    description:
      'AstroRise is a high-performance Astro theme built for speed, flexibility, and modern development workflows. Create stunning websites effortlessly with a seamless developer experience.',
    robots: {
      index: true,
      follow: true,
    },
  },
  // Translation for index page
  hero: {
    headline: 'One rewards program. Every cafés you love.',
    sub_headline:
      'Collect points wherever you sip, redeem anywhere in the network. Supporting local has never been this rewarding.',
    cta_text: 'Join the waitlist',
    cta_link: '',
    img_file: 'placeholder.webp',
    email_label: 'Email address',
    email_form_placeholder: 'Your email address',
    submit_label: 'Join the waitlist',
  },
  product_promises: {
    headline: 'Why join Looply?',
    sub_headline: 'Collect points across all your favorite spots and cash them in anywhere. Every coffee counts.',
    promises: [
      {
        lead_in_text: 'Earn Everywhere, Redeem Anywhere',
        description: 'Collect points at every café in the network and use them across all participating merchants.',
      },
      {
        lead_in_text: 'Boost Your Daily Ritual',
        description: 'Turn everyday coffee runs into rewards that actually add up.',
      },
      {
        lead_in_text: 'Support Local, Get Rewarded',
        description: 'Support the cafés that make your community unique.',
      },
    ],
  },
  features_section: {
    headline: 'AstroRise Features',
    sub_headline: 'Unlock the unique advantages of using AstroRise as your Astro theme.',
    features: [
      {
        id: 'fast-performance',
        lead_in_text: 'Astro-Powered Speed',
        description:
          'Experience the unparalleled speed of Astro, optimized for quick loading times and seamless navigation.',
        color: 'text-black dark:text-white',
        icon: 'lightning',
      },
      {
        id: 'seo-optimized',
        lead_in_text: 'SEO Optimized',
        description:
          'AstroRise is designed with SEO best practices in mind, helping your website rank higher and attract more visitors.',
        color: 'text-black dark:text-white',
        icon: 'search',
      },
      {
        id: 'easy-integration',
        lead_in_text: 'Integration Ease',
        description: 'Easily integrate with Astro’s ecosystem and other tools for a smooth workflow.',
        color: 'text-black dark:text-white',
        icon: 'plugAndPlay',
      },
      {
        id: 'scalable-architecture',
        lead_in_text: 'Scalable Astro Framework',
        description: 'Utilize Astro’s scalable architecture to grow your site effortlessly as your business expands.',
        color: 'text-black dark:text-white',
        icon: 'infinite',
      },
      {
        id: 'user-friendly',
        lead_in_text: 'User-Centric Design',
        description:
          'Enjoy an intuitive interface designed with user experience in mind, thanks to Astro’s principles.',
        color: 'text-black dark:text-white',
        icon: 'users',
      },
      {
        id: 'customizable',
        lead_in_text: 'Easy Customization',
        description:
          'Fully customize your site with AstroRise, taking advantage of Astro’s flexibility for unique branding.',
        color: 'text-black dark:text-white',
        icon: 'customize',
      },
    ],
  },
  key_value_section: {
    key_values: [
      {
        title: 'Lightning-Fast Performance',
        painPoint: 'Modern users expect websites to load instantly.',
        agitatepainPoint: 'Slow-loading pages can cause high bounce rates and lost opportunities.',
        solution: 'AstroRise leverages Astro’s performance-first approach to ensure lightning-fast load times.',
        img_file: 'LightningFast.jpg',
      },
      {
        title: 'Modern Development Experience',
        painPoint: 'Outdated workflows and complex configurations hinder developer productivity.',
        agitatepainPoint: 'Wasting time on boilerplate and setup drains energy from what matters most—building.',
        solution: 'AstroRise provides a modern, developer-friendly setup with zero-config tooling.',
        img_file: 'ModernDX.jpg',
      },
      {
        title: 'Effortless Customization',
        painPoint: 'One-size-fits-all themes limit branding and creativity.',
        agitatepainPoint: 'Generic-looking sites fail to stand out and engage users.',
        solution: 'AstroRise is highly customizable, enabling unique and branded web experiences with ease.',
        img_file: 'Customization.jpg',
      },
    ],
  },
  CTA_section: {
    headline: 'Ready to get started?',
    sub_headline: 'Join us and revolutionize your digital experience.',
    CTA_text: 'Get started',
    CTA_link: '',
  },
  waitlist: {
    headline: 'Join the community!',
    sub_headline: 'Enter your email address and we’ll keep you updated on when it launches',
    email_label: 'Email address',
    email_form_placeholder: 'Your email address',
    submit_label: 'Join the waitlist',
    submit_message: 'Thank you for joining the waitlist',
  },
};
