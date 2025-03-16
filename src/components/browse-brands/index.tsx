const BrowseBrands = () => {
  return (
    <section className="browse-brands">
      {Array.from({ length: 5 }, (_, i) => i).map(index => (
        <div className="brand shadow" key={index} >
          <img src="/images/logo.png" alt="" />
        </div>
      ))}
    </section>
  )
}

export default BrowseBrands;
