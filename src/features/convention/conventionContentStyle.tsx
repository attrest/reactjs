"use client";

import React from "react";
import Styled from "styled-components";

const sentenceSpacing = "1.5rem";
const Style = Styled.div`
  font-size: 1.15rem;
  line-height: 1.8;

  b {
    font-weight: 700;
  }

  code {
    font-family: system-ui;
    font-size: 80%;
    font-weight: 400;
    background: #f5f5f5;
    padding: 0 0.35rem 0.1rem;
    border-radius: 0.25rem;
    color: orange;
    margin-right: 0.1rem;
  }

  pre {
    font-family: system-ui;
    font-size: 80%;
    font-weight: 400;
    color: #555;
    padding: 1rem 1.5rem;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 0.75rem;
    margin-bottom: ${sentenceSpacing}
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    border-bottom: 2px solid #000;
    line-height: 0.8;
    margin-top: 3rem;
    margin-bottom: ${sentenceSpacing};
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 0.5rem;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 0.5rem;
    color: orange;
  }

  p {
    margin-bottom: ${sentenceSpacing};
    span {
      font-weight: 600;
    }
  }

  ul {
    margin-bottom: ${sentenceSpacing};
    padding-left: 1.25rem;
    &:not(.no-style) {
      li {
        position: relative;
        &::before {
          content: "";
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #000;
          margin-left: -0.65rem;
          position: relative;
          top: -5px;
        }
        + li {
          margin-top: 0.5rem;
        }
      }
    }
  }
`;

interface ConventionContentStyleProps {
  children: React.ReactNode;
}

const ConventionContentStyle = ({ children }: ConventionContentStyleProps) => {
  return <Style>{children}</Style>;
};

export default ConventionContentStyle;
