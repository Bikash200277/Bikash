let count=0;
let card= document.querySelectorAll(".content")
function toggleTheme{
    count++;
    if(count%2===0)
        {
            document.querySelector("body").classList.remove("bg-black","text-white");
            document.querySelector("body").classList.add("bg-light","text-black");
            for(let i=0;i<cards.length;i++)
                {
                    let card=cards[i]
                    card.classList.remove("bg-dark","text-white")
                    card.classList.add("bg-white","text-black")
                }
                document.querySelector("#aca")
        }
        else{
            document.querySelector("body").classList.add("bg-light","text-black");
            document.querySelector("body").classList.remove("bg-black","text-white");
           
        }
}