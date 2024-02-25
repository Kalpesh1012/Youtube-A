const Shimmer = () => {
  return (
    <section className="p-4 m-4 bg-black text-white bg-opacity-70 ">
      {Array(9)
        .fill()
        .map((e, index) => (
          <article className="mt-8 rounded-lg" key={index}>
            <div className="ml-10 xl:h-7 xsm:h-3  xl:w-44 xsm:w-24 border-2 rounded-sm bg-gray-300"></div>
            <div className="flex">
              {Array(8)
                .fill()
                .map((e, index) => (
                  <div
                    key={index}
                    className="mt-5 ml-10 xl:h-[230px] xsm:h-28 xl:w-[150px] xsm:w-20 border-2 rounded-sm bg-gray-300 "
                  ></div>
                ))}
            </div>
          </article>
        ))}
    </section>
  );
};
export default Shimmer;
