const CenterPage = ({ children }) => {
  return (
    <>
      <style jsx>{`
        main {
          width: 100%;
          max-width: 330px;
          padding: 15px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
      `}</style>
      <main className="text-center">{children}</main>
    </>
  );
};

export default CenterPage;
