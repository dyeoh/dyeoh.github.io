interface PrismicRichText {
  text?: string;
  html?: string;
}

interface PrismicAboutMe {
  id?: string;
  data: {
    body?: PrismicRichText;
    title?: PrismicRichText;
    profile_picture?: {
      url?: string;
    };
  };
}
