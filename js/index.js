
const loadInformation = async (searchValue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchValue}`);
    const data = await res.json();
    const loadData = data.posts;
    displayData(loadData);
}
const value = 'Comedy'
loadInformation(value)

const displayData = (data) => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = ''
    data.forEach(element => {
        console.log(element);
        const x = element.title

        const image = element.image;

        showBadge(image);
        // console.log(x);
        // console.log(typeof x);
        const dataCard = document.createElement('div');
        dataCard.classList = `w-full h-full lg:h-44 rounded-2xl bg-[#F3F3F5] sm:mb-3 lg:mb-7`
        dataCard.innerHTML = `
        <div class="bg-base-200 rounded-2xl">
        <div class="flex flex-col lg:flex-row gap-2 lg:gap-8 my-2 lg:mb-4">
          <img id="show-image" class="p-2 lg:p-4 w-32 h-full rounded-2xl" src="${element.image}" />
          <div class="py-2 lg:py-4">
            <div class="flex">
                <p>#${element.category}</p>
                <p class="pl-8">${element.author.name}</p>
            </div>
            <p class="font-bold text-2xl mb-2">${element.title}</p>
            <p>${element.description}</p>
            <hr>
            <div class="flex flex-col lg:flex-row mt-8">
                <div class="flex lg:flex-row gap-4 lg:gap-8">
                    <div class="flex lg:flex-row gap-1 lg:g-4">
                        <img class="w-4 lg:w-full" src="images/message.png" alt="">
                        <p>${element.comment_count}</p>
                    </div>
                    <div class="flex lg:flex-row gap-1 lg:g-4">
                        <img class="w-4 lg:w-full"  src="images/view.png" alt="">
                        <p>${element.view_count}</p>
                    </div>
                    <div class="flex lg:flex-row gap-1 lg:g-2">
                        <img class="w-4 lg:w-full" src="images/clock.png" alt="">
                        <p>${element.posted_time}min</p>
                    </div>
                </div>
                <div>
                    <img onclick="showRead('${element.title}','${element.view_count}')" class="pl-4 lg:pl-20" src="images/message-icon.png" alt="">
                </div>
            </div>
          </div>
        </div>
    </div>
        `;
        dataContainer.appendChild(dataCard);

        loadingSpinner(false)
    });
}

let count = 0;

const showCount = () => {
    count++;
    const idAddress = document.getElementById('read-count');
    idAddress.innerText = count;

    //console.log(count)
}

const showRead = (x,y) => {
    const info = document.getElementById('details-info');
    const textValue = document.createElement('div');
    textValue.className = ` rounded-2xl bg-[#F3F3F5]`
    //const detailsInfo = textValue.classList;
    textValue.innerHTML = `
      <div class="flex justify-between bg-white m-8 rounded-2xl p-8">
      <h2 class="font-bold text-xl">${x}</h2>
      <img class="w-4 h-5 flex items-center justify-center" src="images/view.png" alt="">
      <h2>${y}</h2>
      </div>
 `;

    info.appendChild(textValue)
    showCount()
}

const controlSearch = () => {
    //loadingSpinner(true)
    loadingSpinner(true)
    const inputData = document.getElementById('input-data');
    const inputValue = inputData.value;
    loadInformation(inputValue);
}

// showing all functionalities for latest post
const latestPost = async () => {
    const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
    const res = await fetch(url)
    const data = await res.json();

}

const loadPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    const loadData = data.posts;

    data.forEach(element => {
        console.log(element);
        lastPostShowing(element);
    })
}

loadPost()

const lastPostShowing = (post) => {
    const latestPostDetails = document.getElementById('show-last-post');
    const postDetails = document.createElement('div');
    postDetails.className = "card w-[450px] bg-base-100 shadow-xl mb-4";

    // Generating the HTML for the card dynamically for all latest post
    postDetails.innerHTML = `
                <figure class="px-10 pt-10">
                    <img src="${post.cover_image}" />
                </figure>
                <div class="card-body space-y-4  ">
                    <div class="flex flex-row gap-3" >
                        <img src="images/date.png" alt="">
                            <p>${post?.author?.posted_date || "No Publish Date"}</p>
                    </div>
                    <h2 class="text-black text-3xl font-bold">${post.title}</h2>
                    <p>${post.description}</p>
                    <div class="flex flex-row gap-7">
                        <div class="w-[50px] h-[50px]" >
                            <img class="rounded-full" src="${post.profile_image}" alt="">
                        </div>
                        <div>
                            <h1 class="text-black text-2xl font-semibold">${post.author.name}</h1>
                            <p>${post?.author?.designation || 'Unknown'}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;

    // Appending the card to the container
    latestPostDetails.appendChild(postDetails);
}

const loadingSpinner = (isTrue) => {
    const spinner = document.getElementById('loading-spinner');
    if (isTrue) {
        spinner.classList.remove('hidden');
    }
    else {
        spinner.classList.add('hidden');
    }
}

const showBadge = (image) => {

} 
