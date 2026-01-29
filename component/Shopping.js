const Shopping = ({ items }) => {
  return (
    <section>
      <ol>
        {items.map((item) => (
          <li key={Math.random() * 5}>{item}</li>
        ))}
      </ol>
    </section>
  );
};
export default Shopping;