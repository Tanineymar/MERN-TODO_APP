import { useId } from "react"

function Logo({ width = 240, dark = false }) {
  const id = useId()
  const iconGradId = `iconGrad-${id}`
  const dotGradId = `dotGrad-${id}`

  return (
    <svg width={width} viewBox="160 50 360 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id={iconGradId}
          x1="160" y1="52" x2="256" y2="148"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7F77DD"/>
          <stop offset="100%" stopColor="#534AB7"/>
        </linearGradient>
        <linearGradient
          id={dotGradId}
          x1="445" y1="54" x2="459" y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F472B6"/>
          <stop offset="100%" stopColor="#A855F7"/>
        </linearGradient>
      </defs>

      <rect x="160" y="52" width="96" height="96" rx="22" fill={`url(#${iconGradId})`}/>

      <circle cx="184" cy="84" r="6" fill="none" stroke="#EEEDFE" strokeWidth="2"/>
      <path d="M180.5 84 L183.5 87 L188.5 81.5" fill="none" stroke="#EEEDFE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="196" y="80" width="44" height="7" rx="3.5" fill="#EEEDFE" opacity="0.9"/>

      <circle cx="184" cy="103" r="6" fill="none" stroke="#CECBF6" strokeWidth="1.8"/>
      <path d="M180.5 103 L183.5 106 L188.5 100.5" fill="none" stroke="#CECBF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="196" y="99" width="34" height="7" rx="3.5" fill="#CECBF6" opacity="0.65"/>

      <circle cx="184" cy="122" r="6" fill="none" stroke="#AFA9EC" strokeWidth="1.5" opacity="0.55"/>
      <rect x="196" y="118" width="40" height="7" rx="3.5" fill="#AFA9EC" opacity="0.4"/>

      <text x="272" y="117"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
        fontSize="58"
        fontWeight="700"
        fill={dark ? "#ffffff" : "#1a1a2e"}
        letterSpacing="-1.5">Taskly</text>

      <circle cx="452" cy="61" r="7" fill={`url(#${dotGradId})`}/>
      <circle cx="449.5" cy="58.5" r="2.5" fill="white" opacity="0.35"/>
    </svg>
  )
}

export default Logo