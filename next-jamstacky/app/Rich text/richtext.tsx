import React from 'react';

interface CallToActionProps {
  value: {
    url: string;
    text: string;
  };
  isInline: boolean;
}

interface LinkProps {
  children: React.ReactNode;
  value: {
    href: string;
  };
}

interface TextColorProps {
  children: React.ReactNode;
  value: {
    value: string;
  };
}

interface HighlightColorProps {
  children: React.ReactNode;
  value: {
    value: string;
  };
}

interface BlockProps {
  children: React.ReactNode;
  node: {
    _key: string;
    level: number;
  };
}

const richText = {
  types: {
    callToAction: ({ value, isInline }: CallToActionProps) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }: LinkProps) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
   
  },
  blocks: {
    block: ({ children, node }: BlockProps) => (
      <div key={node._key} style={{ marginLeft: `${node.level * 10}px` }}>
        {children}
      </div>
    ),
  },
};

export default richText;

