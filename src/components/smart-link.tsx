import * as React from 'react';

interface SmartLinkProps {
  href: string
  className?: string,
  label?: string,
  content?: string
}

const SmartLink:React.FC<SmartLinkProps> = ({ href, label, content, className, children}) => {
  const onClick = () => {
    if (typeof (window as any).ga === "function") {
      (window as any).ga("send", "event", {
        eventCategory: "Outbound Link",
        eventAction: "click",
        eventLabel: label || href || 'Unknown',
      });
    }
    console.log(`Navigate to ${label || href || 'somewhere'}.`);
    return true;
  }

  const exceptions = [
    'https://fast.com',
  ];

  const link = exceptions.indexOf(href) > -1
    ? href
    : `${href}?utm_source=tacv&utm_medium=website&utm_content=${content ||'list' }`;


  const embedlyProps = className === 'embedly-card' ? {
    'data-card-controls': 0,
    'data-card-chrome': 0,
    'data-card-recommend': 0,
    'data-card-width': '100%',
    'data-card-key': process.env.GATSBY_EMBEDLY_KEY,
  } : {};

  return (
    <a
      href={link}
      onClick={onClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...embedlyProps}
    >
      {children}
    </a>
  )
};

export default SmartLink;
