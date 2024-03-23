const Loading = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{ flex: 1 }}
    >
      <div className="spinner-border " role="status">
        <span className="visually-hidden"></span>
      </div>
    </section>
  );
};

export default Loading;
