import * as React from 'react';

interface SmartLinkProps {
  href: string
  className?: string,
  label?: string,
  content?: string
}

const SmartLink:React.FC<SmartLinkProps> = ({ href, label, content, className, children}) => {
  const onClick = () => {
    if (typeof window.ga === "function") {
      // @ts-ignore
      window.ga("send", "event", {
        eventCategory: "Outbound Link",
        eventAction: "click",
        eventLabel: label || href || 'Unknown',
      });
    }
    console.log(`Navigate to ${label || href || 'somewhere'}.`);
    return true;
  }

  const link = href === 'https://fast.com' ? href : `${href}?utm_source=tacv&utm_medium=website&utm_content=${content ||'list' }`;


  return (
    <a
      href={link}
      onClick={onClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
};

export default SmartLink;
