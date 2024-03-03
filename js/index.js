const loadInformation = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const loadData = data.posts;
    displayData(loadData);
}
loadInformation()

const displayData = (data) => {
    const dataContainer = document.getElementById('data-container');
    data.forEach(element => {
        console.log(element)
        const dataCard = document.createElement('div')
        dataCard.classList = `bg-base-200 mb-8 rounded-2xl`
        dataCard.innerHTML = `
        <div class="flex p-8">
        <img src="${element.image}"
            class="rounded-lg shadow-2xl w-10 h-14 mr-6" />
        <div class="">
            <p># ${element.category}<span class="pl-8"> Author: ${element.author.name}</span> </p>
            <h3 class="text-2xl font-bold">${element.title}</h3>
            <p>${element.description}</p>
            <hr>
            <div class="flex justify-between">
                <div class="flex">
                    <div class="hero-content lg:flex-row">
                        <img src="images/message.png" />
                        <h1>${element.comment_count}</h1>
                    </div>
                    <div class="hero-content lg:flex-row">
                        <img src="images/view.png" />
                        <h1>${element.view_count}</h1>
                    </div>
                    <div class="hero-content lg:flex-row">
                        <img src="images/clock.png" />
                        <h1>${element.posted_time}</h1>
                    </div>
                </div>
                <div class="mt-4">
                    <img src="images/message-icon.png" alt="">
                </div>
            </div>
        </div>
    </div> 
     `;
     dataContainer.appendChild(dataCard);
    });

}
