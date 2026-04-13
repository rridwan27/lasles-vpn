const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex items-center bg-white dark:bg-gray-900 pt-20 pb-12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white leading-tight">
            Trusted by Thousands of <br />
            Happy Customer
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base text-center leading-relaxed max-w-md mt-4">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
