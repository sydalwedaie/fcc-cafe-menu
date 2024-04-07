const Menu = ({ title, icon, menu }) => {
  return (
    <section>
      <h2>{title}</h2>
      <img src={icon} alt={icon} />
      {menu.map(({ name, price }) => (
        <article key={name}>
          <p>{name}</p>
          <p>{price}</p>
        </article>
      ))}
    </section>
  );
};

export default Menu;
