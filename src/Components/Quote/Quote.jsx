

function Quote(prop) {
    const [{Quote, Author}] = prop.data;
  return (
    <>
        <section className="border border-gray-300 p-3 mt-9 mx-20">
          <section className="w-fit py-2 px-auto mx-auto font-serif text-xl italic">
            {"\""}{Quote}{"\""}
            <p className="text-gray-600 italic">-{Author}</p>
          </section>
        </section>
    </>
  )
}

export default Quote
