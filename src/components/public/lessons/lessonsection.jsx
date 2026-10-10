const LessonSection = () => {
    return (
      <div>
        <ol className="grid gap-8 md:grid-cols-3 p-6">
          <li className="relative bg-gray-50 rounded-xl">
            <div className="p-6 space-y-4">
              <div className="block w-10 h-10 mx-auto -mt-12 rounded-full ring-8 ring-white">
                <div className="w-10 h-10 rounded-full shadow-sm">
                  <div className="flex items-center justify-center w-10 h-10 text-lg font-bold bg-white rounded-full shadow-lg text-primary-600 tabular-nums">
                    1
                  </div>
                </div>
              </div>
  
              <div className="space-y-1">
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">Create a server</h3>
  
                <p className="text-gray-600">
                  Select any of these server providers, or use your own.
                </p>
              </div>
  
              <hr className="border-gray-200 border-dashed" />
  
              <ul className="space-y-1 font-medium text-gray-500">
                <li>UpCloud</li>
                <li>Digital Ocean</li>
                <li>Linode</li>
                <li>AWS EC2</li>
                <li>...</li>
              </ul>
            </div>
          </li>
  
          <li className="relative bg-gray-50 rounded-xl">
            <div className="p-6 space-y-4">
              <div className="block w-10 h-10 mx-auto -mt-12 rounded-full ring-8 ring-white">
                <div className="w-10 h-10 rounded-full shadow-sm">
                  <div className="flex items-center justify-center w-10 h-10 text-lg font-bold bg-white rounded-full shadow-lg text-primary-600 tabular-nums">
                    2
                  </div>
                </div>
              </div>
  
              <div className="space-y-1">
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">Connect GIT repository</h3>
  
                <p className="text-gray-600">
                  Connect your GIT repository and let Ploi handle the rest.
                </p>
              </div>
  
              <hr className="border-gray-200 border-dashed" />
  
              <ul className="space-y-1 font-medium text-gray-500">
                <li>laravel/laravel</li>
                <li>statamic/statamic</li>
                <li>...</li>
              </ul>
            </div>
          </li>

          <li className="relative bg-gray-50 rounded-xl">
            <div className="p-6 space-y-4">
              <div className="block w-10 h-10 mx-auto -mt-12 rounded-full ring-8 ring-white">
                <div className="w-10 h-10 rounded-full shadow-sm">
                  <div className="flex items-center justify-center w-10 h-10 text-lg font-bold bg-white rounded-full shadow-lg text-primary-600 tabular-nums">
                    2
                  </div>
                </div>
              </div>
  
              <div className="space-y-1">
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">Connect GIT repository</h3>
  
                <p className="text-gray-600">
                  Connect your GIT repository and let Ploi handle the rest.
                </p>
              </div>
  
              <hr className="border-gray-200 border-dashed" />
  
              <ul className="space-y-1 font-medium text-gray-500">
                <li>laravel/laravel</li>
                <li>statamic/statamic</li>
                <li>...</li>
              </ul>
            </div>
          </li>
  
        </ol>
      </div>
    );
  }
  
  export default LessonSection;
  