

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
            <div class='flex flex-col justify-between mb-48'>
            <div class="card ml-8 mt-8" style="width: 22rem; height: 16rem;">
            <img class='border border-gray-600' src="${project.image}" class="card-img-top" alt="project.image">
            <div class="card-body border border-gray-600">
                <h5 class="card-title text-blue">${project.description}</h5>
                <p class="card-text text-blue">Some quick example text to build on the card title and make up the bulk of
                    the card's
                    content.</p>
                <div class='mt-8 ml-20'>
                    <a href="${project.liveURL}" class="btn btn-primary">Live URL</a>
                    <a href="${project.gitURL}" class="btn btn-primary">Git URL</a>
                </div>
            </div>
        </div>
        </div>`)
            $portfolio.append($portCard)



            //     const $portCard = $(`
            //     <div class="card">
            //     <img class="card-img-top" src="${project.image}" target="_blank alt="project.image">   
            //     <a href="${project.liveURL}"button type="button" class="btn btn-success btn-sm">More</a>
            //     </div>
            // </div>`)
            //     $portfolio.append($portCard)

        })

    })
