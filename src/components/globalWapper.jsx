import "./globalWrapper.css";

export default function GlobalContentWrapper({ children, className = "" }) {
  return (
    <div className={className} id="globalContentWrapper">
      {children}
    </div>
  );
}
