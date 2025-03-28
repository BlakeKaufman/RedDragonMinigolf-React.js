import "./safeAreaWrapper.css";

export default function SafeAreaWrapper({ children, className }) {
  return (
    <div className={className} id="safeAreaWrapper">
      {children}
    </div>
  );
}
