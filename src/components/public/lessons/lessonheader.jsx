function LessonHeader() {
    return (
      <div className="bg-blue-700 py-12 sm:py-16 lg:py-64 ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block text-6xl lg:inline xl:block">Want product news and updates?</h2>
            <br />
            <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2 flex justify-center " onSubmit={(e) => e.preventDefault()}>
            <div className="flex text-white gap-x-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium fuga molestiae, facere ipsam sapiente nobis. Qui,
            cupiditate fuga dolorem corrupti quos repellendus natus ducimus sed
            , molestiae dolores minima eveniet aliquid.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium fuga molestiae, facere ipsam sapiente nobis. Qui,
            cupiditate fuga dolorem corrupti quos repellendus natus ducimus sed
            , molestiae dolores minima eveniet aliquid.
            </div>
            
          </form>
        </div>
      </div>
    );
  }
  
  export default LessonHeader;
  