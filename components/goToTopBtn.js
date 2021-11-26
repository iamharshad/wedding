import * as React from 'react';

const GotoTopBtn = () => {
  const [isGotoTopActive, setIsGotoTopActive] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsGotoTopActive(window.scrollY > 300);
    });
  });
  const handleGotoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      className={`gototop-btn d-flex justify-content-center align-items-center text-white ${
        isGotoTopActive ? 'active' : ''
      }`}
      onClick={handleGotoTop}
    >
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};

export default GotoTopBtn;
