import Image from "next/image";

export default function ScreenFlow({ screens = [] }) {
  return (
    <div className="screen-flow">
      {screens.map((screen, i) => (
        <div key={i} className="screen-flow__item">
          <div className="screen-flow__step-num">{i + 1}</div>
          <div className="screen-flow__frame">
            <Image
              src={screen.src}
              alt={screen.alt}
              width={390}
              height={844}
              style={{ width: "100%", height: "auto" }}
              sizes="240px"
            />
          </div>
          {screen.label && (
            <p className="screen-flow__label">{screen.label}</p>
          )}
        </div>
      ))}
    </div>
  );
}
