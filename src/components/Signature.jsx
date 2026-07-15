export default function Signature({ color = "currentColor", width = 160 }) {
  return (
    <svg
      width={width}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Firma de Camilo Pinzón"
    >
      {/* Grupo principal con los estilos comunes del trazo de la firma */}
      <g
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 38 C12 20, 20 14, 26 18 C32 22, 28 36, 24 38 C20 40, 16 34, 20 30 C24 26, 32 28, 36 24" />
        <path d="M34 22 C36 18, 40 16, 42 20 C44 24, 42 32, 40 36 C38 40, 36 38, 37 34" />
        <path d="M40 28 C44 26, 50 26, 52 30 C54 34, 50 40, 46 40 C42 40, 40 36, 42 32 C44 28, 50 28, 54 30" />
        <path d="M54 30 C58 22, 64 18, 68 22 C72 26, 68 38, 64 40" />
        <path d="M66 28 C70 26, 76 28, 76 34 C76 40, 70 42, 68 38" />
        <path d="M78 34 C80 20, 84 14, 88 18" />
        <path d="M86 28 C90 24, 96 24, 98 28 C100 32, 98 38, 94 40 C90 42, 86 38, 88 34" />
      </g>

      {/* Rúbrica: Agrupada por separado debido al strokeWidth y la opacidad */}
      <g
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M20 44 C50 48, 90 50, 120 46 C130 44, 136 40, 132 36 C128 32, 118 38, 124 42"
          opacity="0.6"
        />
        <path
          d="M118 30 C122 22, 128 18, 132 22"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}