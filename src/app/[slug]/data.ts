export const projects = [
  {
    slug: "pos",
    title: "point of sale",
    company: 'EJJY',
    timeline: "2021-2024",
    team: [
      { name: "J. Maranga", photoSrc: "/images/avatar-default.png" },
      { name: "Andrew Oplas", photoSrc: "/images/avatar-andrew-oplas.png" },
    ],
    role: "Full Stack Developer",
    thumbnail: "/images/pos/pos-thumbnail.png",
    photos: [
      {
        photoSrc: "/images/pos/pos-banner.png",
        alt: "screenshot of the pos on a mac device",
      },
      {
        photoSrc: "/images/pos/pos-screenshot-1.png",
        alt: "screenshot of reports screen",
      },
      {
        photoSrc: "/images/pos/pos-screenshot-2.png",
        alt: "screenshot of sales screen",
      },
      {
        photoSrc: "/images/pos/pos-screenshot-3.png",
        alt: "screenshot of view branch machine screen",
      },
    ],
    contents: [
      {
        title: "Overview",
        content: `
        EJJY is a retail store that primarily retails a general range of food products. They needed to upgrade from their outdated POS system to one that integrates with inventory management. This new system ensures accurate tracking of all stock movements. Additionally, they aim to digitalize their operations, including tracking supplies, monitoring sales, managing customer relations, and ensuring compliance with financial regulations.

        We initially developed an inventory system to monitor supplies across their various branches, including a feature that allows the transfer of goods between locations. Subsequently, we created a digital POS system for their branches, enabling them to process customer orders efficiently. This setup ensures that both the inventory and POS systems are fully integrated, streamlining EJJY’s entire operation. Moreover, the POS system is now accredited by the Bureau of Internal Revenue (BIR), affirming its reliability and compliance with tax regulations.
        `,
        isFullWidth: true,
      },
      {
        title: "What I did",
        content: ["Project management", "Software development", "UI design"],
      },
      {
        title: "Tech stack",
        content: [
          "React",
          "Django Rest Framework",
          "Express",
          "Electron",
          "MySQL",
          "SQLite",
          "GCP",
        ],
      },
    ],
  },
  {
    slug: "marigold",
    title: "inventory system",
    timeline: "2021-2022",
    company: 'FREELANCE',
    team: [
      { name: "J. Pacaña", photoSrc: "/images/avatar-default.png" },
      { name: "Andrew Oplas", photoSrc: "/images/avatar-andrew-oplas.png" },
    ],
    role: "Full Stack Developer",
    thumbnail: "/images/marigold/marigold-thumbnail.png",
    photos: [
      {
        photoSrc: "/images/marigold/marigold-banner.png",
        alt: "screenshot of the app on a macbook and iphone devices",
      },
      {
        photoSrc: "/images/marigold/marigold-login.png",
        alt: "screenshot of login screen",
      },
      {
        photoSrc: "/images/marigold/marigold-dashboard.png",
        alt: "screenshot of dashboard screen",
      },
      {
        photoSrc: "/images/marigold/marigold-delivery.png",
        alt: "screenshot of delivery screen",
      },
      {
        photoSrc: "/images/marigold/marigold-preorders.png",
        alt: "screenshot of preorders screen",
      },
    ],
    contents: [
      {
        title: "Overview",
        content: `
        Marigold, a local store specializing in cooking and baking supplies, faced challenges with inventory management, often discovering too late that they were out of stock. They also wanted to digitize their inventory and enhance their monitoring of deliveries and customer orders.

        To address their needs, we developed a user-friendly web app. This digital solution provides a robust inventory system that keeps track of stock levels in real time. Additionally, it features tools to manage customer orders, including tracking who prepares and delivers each order.

        Moreover, the web app is mobile-responsive, allowing the admin to manage operations remotely. Whether away from the store or on the move, they can oversee the entire process with ease. Now, Marigold's operations are fully digital, streamlined, and more efficient.
        `,
        isFullWidth: true,
      },
      {
        title: "What I did",
        content: ["Project management", "Software development", "UI design"],
      },
      {
        title: "Tech stack",
        content: ["React", "Django Rest Framework", "MySQL"],
      },
    ],
  },
  {
    slug: "digirent",
    title: "digirent",
    timeline: "2020-2021",
    company: 'FREELANCE',
    team: [
      { name: "S. Shaibu", photoSrc: "/images/avatar-default.png" },
      { name: "Andrew Oplas", photoSrc: "/images/avatar-andrew-oplas.png" },
    ],
    role: "Frontend Developer",
    thumbnail: "/images/digirent/digirent-thumbnail.png",
    photos: [
      {
        photoSrc: "/images/digirent/digirent-banner.png",
        alt: "screenshot of the homepage on a macos display",
      },
      {
        photoSrc: "/images/digirent/digirent-list-property-screen.png",
        alt: "screenshot of list property screen",
        className: "lg:col-span-7",
      },
      {
        photoSrc: "/images/digirent/digirent-mobile-homepage.png",
        alt: "screenshot of homepage on mobile",
        className: "lg:col-span-5",
      },
      {
        photoSrc: "/images/digirent/digirent-add-property-screen.png",
        alt: "screenshot of add property screen",
        className: "lg:col-span-12",
      },
    ],
    contents: [
      {
        title: "Overview",
        content:
          "Digirent is revolutionizing the Dutch rental platforms industry by  leveraging technology to ensure safer, cheaper, and more transparent  transactions, driving down costs and simplifying processes. Their  dedicated team of technology enthusiasts is constantly innovating, using  cutting-edge solutions to reshape and enhance the rental market.",
        isFullWidth: true,
      },
      {
        title: "Collaboration",
        content:
          "This project began by transforming Photoshop designs into HTML and CSS.  Over time, the client rehired me to fully implement these designs, along  with a backend developer he also brought on board. I collaborated with  the backend developer to integrate the frontend with the API, using  Next.js for development and deploying updates via Netlify.",
        isFullWidth: true,
      },
      {
        title: "What I did",
        content: [
          "Design implementation",
          "Website development",
          "API integration",
        ],
      },
      {
        title: "Tech stack",
        content: ["Next", "Typescript", "Netlify"],
      },
    ],
  },
  {
    slug: "goodtime",
    title: "goodtime",
    company: 'ALGERT',
    timeline: "2022",
    team: [
      { name: "K. Adriano", photoSrc: "/images/avatar-default.png" },
      { name: "K. Solomon", photoSrc: "/images/avatar-default.png" },
      { name: "Andrew Oplas", photoSrc: "/images/avatar-andrew-oplas.png" },
    ],
    role: "Web Developer",
    thumbnail: "/images/goodtime/goodtime-thumbnail.png",
    photos: [
      {
        photoSrc: "/images/goodtime/goodtime-banner.png",
        alt: "screenshot of the homepage on a macos display",
      },
      {
        photoSrc: "/images/goodtime/goodtime-elementor-edit-screen.png",
        alt: "screenshot of elementor edit screen",
        className: "lg:col-span-12",
      },
      {
        photoSrc: "/images/goodtime/goodtime-ai-powered-screen.png",
        alt: "screenshot of ai powered screen",
        className: "lg:col-span-6",
      },
      {
        photoSrc: "/images/goodtime/goodtime-automated-screen.png",
        alt: "screenshot of automated screen",
        className: "lg:col-span-6",
      },
      {
        photoSrc: "/images/goodtime/goodtime-homepage.png",
        alt: "screenshot of homepage",
        className: "lg:col-span-12",
      },
    ],
    contents: [
      {
        title: "Overview",
        content: `
        GoodTime is a Meeting Optimization Engine that makes business meetings smarter.  GoodTime is set for major growth, and to help them reach their goals, they needed a brand as outstanding as their products. Within just three months, the designers and I at Algert.co completely transformed their brand identity and website. I took the lead in developing key elements like the header, footer, fonts, color scheme, buttons, cards, and page templates. We chose WordPress and Elementor for our main tools, which streamlined our design process.

        I also focused on crafting reusable components that could be effortlessly adapted across various pages, enhancing both the functionality and the aesthetic consistency of the site. This makeover didn't just update GoodTime's look—it propelled them forward in the market, ready to capture the attention of upscale customers.`,
        isFullWidth: true,
      },
      {
        title: "What we did",
        content: [
          "Website development",
          "Design strategy",
          "Illustrations",
          "Creative direction",
        ],
      },
      {
        title: "Tech stack",
        content: ["WordPress", "Elementor", "PHP", "HTML & CSS", "JavaScript"],
      },
    ],
  },
];
