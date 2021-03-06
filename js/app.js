

///////////////////////////////////
///// GET DATA FROM GOOGLE SHEETS
//////////////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1lLER4scBm67_Kh6aY1WIif3ORhnKmZhTgfwNDJht_K4/1/public/full?alt=json")


    /////// .then for when the data arrives/////

    .then((data) => {

        console.log(data)


        ///////// Map over the data////////

        const projects = data.feed.entry.map((item) => {
            return {
                description: item.gsx$description.$t,
                title: item.gsx$title.$t,
                gitURL: item.gsx$giturl.$t,
                image: item.gsx$image.$t,
                liveURL: item.gsx$liveurl.$t,
                project: item.gsx$project.$t
            }

        })
        console.log(projects)



        //////////////////////////////////////////////////
        //////  JQUERY TO RENDER YOUR PROJECTS BELOW//////
        /////////////////////////////////////////////////

        const $portfolio = $('#portfolio')
        console.log($portfolio)

        //////Projects are from the Google Sheet project is EACH project that will loop to create the card , etc/////////
        projects.forEach((project, index) => {
            console.log(projects)


            const $portCard = $(`
            <div class='mb-24'>
            <div class="card ml-2 mt-8 w-74 lg:w-56">
            <img class='border border-gray-600 ' src="${project.image}" class="card-img-top" alt="project.image">
            <div class="card-body border border-gray-600">
                <h3 class="card-title text-blue-500 text-center">${project.title}</h3>
                <h5 class="card-description text-blue-500 text-center">${project.description}</h5>
                <div class='mt-8 ml-32 lg:flex justify-center lg:mr-56'>
                <a href="${project.liveURL}" class="btn btn-primary bg-green-200 text-black lg:mb-2 lg:text-sm lg:mr-4" target="_blank">Live</a>
                <a href="${project.gitURL}" class="btn btn-primary bg-green-200 text-black lg:mb-2 lg:text-sm lg:mr-16" target="_blank">Git</a>
                </div>
            </div>
        </div>
        </div>`)
            $portfolio.append($portCard)



        })

    })
