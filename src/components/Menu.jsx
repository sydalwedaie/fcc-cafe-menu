const Menu = ({ title, icon, menu }) => {
  return (
    <section className="py-4">
      <h2 className="text-center font-[Impact] text-2xl">{title}</h2>
      <img className="m-auto" src={icon} alt={icon} />
      {menu.map(({ name, price }) => (
        <article key={name} className="flex justify-between py-1">
          <p>{name}</p>
          <p>{price.toFixed(2)}</p>
        </article>
      ))}
    </section>
  );
};

export default Menu;
