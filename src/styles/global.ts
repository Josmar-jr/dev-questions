import { css } from '@emotion/react';

export const global = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Roboto:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #f8f8f8;
  }

  .next-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    &---contained {
      object-fit: contain;
    }
  }
`;
