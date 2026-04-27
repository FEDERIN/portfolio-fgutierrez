export default function Logo() {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group cursor-pointer"
    >
      {/* El "Contenedor" del componente */}
      <path
        d="M20 30V20H80V80H20V70"
        stroke="#03DAC6"
        strokeWidth="4"
        strokeLinecap="round"
        className="group-hover:stroke-white transition-colors duration-300"
      />
      
      <path
        d="M35 40L25 50L35 60"
        stroke="#03DAC6"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65 40L75 50L65 60"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    
      <path
        d="M45 65L55 35"
        stroke="#03DAC6"
        strokeWidth="4"
        strokeLinecap="round"
        className="opacity-50"
      />

      <circle cx="20" cy="50" r="3" fill="#03DAC6" />
      <circle cx="80" cy="50" r="3" fill="white" />
    </svg>
  );
}