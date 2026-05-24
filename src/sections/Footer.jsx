const Footer = () => {
  return (
    <div className="mt-[0rem] border-t border-[var(--cream)]/10 text-center py-8">
      <p className="text-sm tracking-wide text-[var(--cream)]/55 font-bold">
        © {new Date().getFullYear()} Manish Negi — Built with React, GSAP & Spring Boot
      </p>
    </div>
  );
};

export default Footer;
