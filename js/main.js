let WebForge = document.querySelector(".flashing");
document.onload = FlashingWord(WebForge, "WebForge");

function FlashingWord(element, DesiredWord)
{
    let Word = element.innerHtml;
    for (let i = 0; i < DesiredWord.length; i++)
    {
        setInterval(100);
        Word += DesiredWord[i];
        element.innerHtml = Word;
    }
}