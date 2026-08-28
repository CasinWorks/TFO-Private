import React from 'react';
import { SITES } from '../config/sites';

type Variant = 'nav' | 'mobile';

interface SiteNavLinksProps {
  variant: Variant;
  onGoPortal: () => void;
  portalActive?: boolean;
}

const navClass =
  'hover:text-[#C5A880] transition-colors cursor-pointer';
const mobileClass =
  'block w-full text-left hover:text-[#C5A880] text-lg font-serif-luxury tracking-normal normal-case';
const activeNavClass = 'text-[#C5A880]';
const activeMobileClass = 'text-[#C5A880]';

export const SiteNavLinks: React.FC<SiteNavLinksProps> = ({
  variant,
  onGoPortal,
  portalActive = false,
}) => {
  const cls = variant === 'nav' ? navClass : mobileClass;

  return (
    <>
      <button
        type="button"
        onClick={onGoPortal}
        className={`${cls} ${portalActive ? (variant === 'nav' ? activeNavClass : activeMobileClass) : ''}`}
      >
        Portal
      </button>
      <a href={SITES.jets} className={cls}>
        Jets
      </a>
      <a href={SITES.limousine} className={cls}>
        Iceland
      </a>
    </>
  );
};

