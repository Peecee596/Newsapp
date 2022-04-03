var newsData

const fetchNews= async()=>{
     await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=d065882e6e554c9b98d9ace2b05d7a4d')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        console.log(data.articles)
        newsData=data.articles;
        console.log(newsData)

        topIndiaNews=[];
        var newsCard=document.getElementById('newsCard')
        count=0;
        newsData.forEach((item,index) => {
            console.log(newsData[index].author)
            const news=`
            <div class="col">
            <div class="p-3 border bg-light">
                <div class="card">
                <img src="${newsData[index].urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${newsData[index].title}</h5>
                <p class="card-text">${newsData[index].description}</p>
                <a href="${newsData[index].url}" class="btn btn-primary">Check Out Full Article-${newsData[index].source.name}</a>
                </div>
            </div>
            </div>  
            </div>          
            `
            topIndiaNews.push(news)
            console.log(topIndiaNews)

        });
        console.log(topIndiaNews)       
        newsCard.innerHTML=topIndiaNews
    })
    
}
fetchNews();