import { useEffect, useState } from 'react';

const COUNTRY_REGION = {
  PK: 'PK',
  AE: 'ME', SA: 'ME', QA: 'ME', KW: 'ME', BH: 'ME', OM: 'ME',
  GB: 'EU', DE: 'EU', FR: 'EU', NL: 'EU', IT: 'EU', ES: 'EU',
  PL: 'EU', SE: 'EU', NO: 'EU', DK: 'EU', BE: 'EU', CH: 'EU',
  AT: 'EU', PT: 'EU',
};

export const useGeoRedirect = () => {
  const [region, setRegion] = useState('LOADING');
  useEffect(() => {
    const hostname = window.location.hostname;
    const isLocal  = hostname === 'localhost' || hostname === '127.0.0.1';
    if (isLocal) { setRegion('PK'); return; }
    const detect = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) });
        const data = await res.json();
        setRegion(COUNTRY_REGION[data.country_code] || 'GLOBAL');
      } catch { setRegion('GLOBAL'); }
    };
    detect();
  }, []);
  return region;
};

export const SERVICES = [
  { label: 'Track & Trace', slug: 'track-and-trace', href: 'https://website.teletix.pk/solutions/track-and-trace' },
  { label: 'Teletix Pro',   slug: 'teletix-pro',     href: 'https://website.teletix.pk/solutions/teletix-pro'     },
  { label: 'WhatsApp API',  slug: 'whatsapp-api',    href: 'https://website.teletix.pk/solutions/whatsapp-api'    },
  { label: 'Telebook',      slug: 'telebook',        href: 'https://website.teletix.pk/solutions/telebook'        },
  { label: 'AutoCall',      slug: 'autocall',        href: 'https://website.teletix.pk/solutions/autocall'        },
];

export const PK_BASE = 'https://website.teletix.pk';

export const BRANCH_REGIONS = [
  { code: 'PK', name: 'Pakistan',    flag: '🇵🇰', href: 'https://website.teletix.pk/', color: '#01411C', status: 'live'         },
  { code: 'ME', name: 'Middle East', flag: '🇦🇪', href: null,                           color: '#009A44', status: 'coming-soon' },
  { code: 'EU', name: 'Europe',      flag: '🇪🇺', href: null,                           color: '#003399', status: 'coming-soon' },
];