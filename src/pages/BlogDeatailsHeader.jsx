import BlogDetails from "./BlogDetails";

const BlogDeatailsHeader = () => {
  return (
    <div>
      <section className="w-full relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-right"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/8089093/pexels-photo-8089093.jpeg')",
          }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10  px-6 sm:px-10 md:px-16 lg:px-24 py-24 sm:py-32 md:py-44 lg:py-52">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gray/10 text-white">
              Blogs Details
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black bg-red-100/10 max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </section>
      <BlogDetails />
    </div>
  );
};

export default BlogDeatailsHeader;
