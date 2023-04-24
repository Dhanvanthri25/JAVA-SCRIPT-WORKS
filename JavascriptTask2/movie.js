function view()
{
    let movie={
        Release_date: " Release_date:  September 30, 2022",
        Director: "Director:  Mani Ratnam",
        Producer: "Producer:  Mani Ratnam, Siva Ananth, Subaskaran Allirajah, Suhasini Maniratnam, A. Subaskaran",
        Writer: "Writer:  Elango Kumaravel, B. Jeyamohan, Muthuraman, Mani Ratnam",
        Music: "Music:  A. R. Rahman",
        Studio: "Studio:  Madras Talkies, Lyca Productions",
        img:"ps1.jpg"

    }
    console.log(movie);
    document.getElementById("Release_date").innerText=movie.Release_date;
    document.getElementById("Director").innerText=movie.Director;
    document.getElementById("Producer").innerText=movie.Producer;
    document.getElementById("Writer").innerText=movie.Writer;
    document.getElementById("Music").innerText=movie.Music;
    document.getElementById("Studio").innerText=movie.Studio;
    document.getElementById("image1").src=movie.img;
    
    //img.src=movie.img;
    
    // document.getElementById("main").style.width="50%";
    // document.getElementById("main").style.color="Aqua";
    //var p1=document.getElementsByTagName("p");
    //p1[0].innerText="Mani Ratnam, Siva Ananth, Subaskaran Allirajah, Suhasini Maniratnam, A. Subaskaran";
    //document.getElementById("Release_date").innerHTML=movie.Release_date + "<br>" + movie.Release_date ;


    
}