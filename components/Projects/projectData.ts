export enum Tag {
  Frontend = "frontend",
  Backend = "backend",
  React = "react",
  ReactNative = "reactnative",
  Svelte = "svelte",
  SvelteKit = "sveltekit",
  Astro = "astro",
  AWS = "aws",
  Serverless = "serverless",
  Gatsby = "gatsby",
  NextJS = "nextjs",
}

type Project = {
  name: string;
  desc: string;
  image: string;
  tags: Tag[];
  siteUrl?: string;
};

const imagePrefix =
  "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/";

export const projectData: Project[] = [
  {
    name: "Future Super",
    desc: "Website for one of Australia's fastest growing super funds",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/v1644364447/future-super-website.png",
    tags: [Tag.Frontend, Tag.Astro, Tag.Svelte],
    siteUrl: "https://www.futuresuper.com.au",
  },
  {
    name: "Array",
    desc: "Microinvesting app allowing people to invest in renewables with as little as $5",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/v1644364447/array.png",
    tags: [
      Tag.Frontend,
      Tag.Backend,
      Tag.ReactNative,
      Tag.React,
      Tag.AWS,
      Tag.Serverless,
    ],
  },
  {
    name: "Levels",
    desc: "Diabetes tracking and management app",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/v1644364447/levels.png",
    tags: [
      Tag.Frontend,
      Tag.Backend,
      Tag.ReactNative,
      Tag.React,
      Tag.AWS,
      Tag.Serverless,
    ],
  },
  {
    name: "Your Impact Wrap",
    desc: "Spotify-wrapped style annual impact highlights for Future Super members",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/v1644364447/impact_recap.png",
    tags: [Tag.Frontend, Tag.Astro, Tag.Svelte],
    siteUrl: "https://impactrecap.futuresuper.com.au/",
  },
  {
    name: "Super Fund Breakup Letter",
    desc: "Customise and send a breakup letter to your old super fund",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/v1644364447/breakup_letter.png",
    tags: [Tag.Frontend, Tag.Gatsby, Tag.React, Tag.AWS, Tag.Serverless],
    siteUrl: "https://letter.futuresuper.com.au/",
  },
  {
    name: "Future Super App",
    desc: "Mobile app for Future Super members",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/v1707626497/qalcwlhaflzyjvuggf9t.png",
    tags: [Tag.Frontend, Tag.ReactNative, Tag.React, Tag.AWS, Tag.Serverless],
  },
  {
    name: "Design Your Own Billboard Competition",
    desc: "Write a billboard message - winning entries became real billboards across Australia",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/v1644364447/billboard.png",
    tags: [Tag.Frontend, Tag.SvelteKit, Tag.Svelte, Tag.AWS, Tag.Serverless],
    siteUrl: "https://billboard.futuresuper.com.au/",
  },
  {
    name: "Create A Climate Tile",
    desc: "Design and share your own social media tile with a climate message",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/v1644364447/not_mute_on_climate.png",
    tags: [Tag.Frontend, Tag.SvelteKit, Tag.Svelte, Tag.AWS, Tag.Serverless],
    siteUrl: "https://www.notmuteonclimate.com.au/",
  },
  {
    name: "Fossil Fuel Tracker",
    desc: "Highlights the amount the Australian goverment has spent supsidising fossil fuels",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/v1644364447/ticker.png",
    tags: [Tag.Frontend, Tag.Astro, Tag.Svelte],
    siteUrl: "https://fossilfuelsperminute.com/",
  },
  {
    name: "SmartMonday Dashboard",
    desc: "MySuper dashboard for the SmartMonday super fund",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/v1644364447/smartmonday.png",
    tags: [Tag.Frontend, Tag.Astro, Tag.Svelte],
    siteUrl: "https://smartmonday-dashboard.netlify.app/",
  },
  {
    name: "Ethical Match Quiz",
    desc: "Do your ethics match those of an ethical super fund?",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/f_auto,q_auto/v1644364447/quiz.png",
    tags: [Tag.Frontend, Tag.Gatsby, Tag.React],
    siteUrl: "https://www.q.futuresuper.com.au/",
  },
  {
    name: "Future Group Website",
    desc: "Website for Future Group, a company using the power of money to build a sustainable and equitable world",
    image:
      "https://res.cloudinary.com/andrewsel/image/upload/v1707626498/vxxzqobn0cop6724cfgu.png",
    tags: [Tag.Frontend, Tag.NextJS, Tag.React],
    siteUrl: "https://www.futuregroup.com.au/",
  },
];
