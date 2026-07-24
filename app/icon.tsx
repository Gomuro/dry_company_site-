import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e7490",
          borderRadius: "6px",
        }}
      >
        <svg
          width={22}
          height={22}
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M22 66 V38 L50 16 L60 24 V19 H68 V30 L78 38 V66"
            stroke="white"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50 36 C56 44 62 50 62 56 A12 12 0 0 1 38 56 C38 50 44 44 50 36 Z"
            fill="white"
          />
          <path
            d="M6 76 C20 66 34 86 50 76 S80 66 94 76"
            stroke="white"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
