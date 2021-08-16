interface PrismicRichText {
  text?: string;
  html?: string;
}

interface PrismicImage {
  url?: string;
}

interface PrismicContact {
  data: {
    icon?: PrismicImage;
    value?: PrismicRichText;
    order?: number;
  };
}

interface PrismicContacts {
  nodes: PrismicContact[];
}

interface PrismicTimeline {
  data: {
    order: number;
    heading: PrismicRichText;
    subheading: PrismicRichText;
    start: PrismicRichText;
    end: PrismicRichText;
  };
}

interface PrismicAboutMe {
  id?: string;
  data: {
    title?: PrismicRichText;
    body?: PrismicRichText;
    first_name?: PrismicRichText;
    last_name?: PrismicRichText;
    job_title?: PrismicRichText;
    profile_picture?: PrismicImage;
  };
}
