export default function DisplayCompany({companies}){
    return (
        <main class="min-h-screen">
        <div>
        <div class=
        "max-w-2xl min-h-screen mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-4 mt-[12vh] bg-gray-50">
          <h2 class=
          "text-lg mt-5 font-bold leading-7 text-gray-800 sm:text-4xl sm:truncate">
          Test Patterns</h2>
          {companies.map((data)=>{
             return (
                <div class="">
            <div class=
            "mt-3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
              <div class=
              "w-full rounded shadow py-4 group relative flex flex-col justify-between">
                <div class=
                "bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src=
                {data.logo}
                alt="" class=
                "w-full object-center object-cover lg:w-full" /></div>
                <div class="mt-4 flex justify-center">
                  <h3 class="text-lg font-semibold text-gray-700">
                  {data.companyname}</h3>
                </div>
              </div>
          </div>
        </div>
             )
          })}
      </div>
      </div>
    </main>
    )
}