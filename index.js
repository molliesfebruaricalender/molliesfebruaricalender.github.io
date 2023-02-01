let day_1 = [` <h1>6e Februari</h1>
    <label>Första dagen på kallendern oj vad klockan kan ticka. Idag så ska du ...</label>
    `,
    ` <h1>6e Februari</h1>
    <label>Idag ska du sticka!</label>
    <iframe 
        src="https://www.youtube.com/embed/hM5M2Fu0RtY">
    </iframe> `

]
let day_2 =   [`<h1>7e Februari</h1>
<label>Cultural appropiation kan va kul, Villes beteenden är skumma. Idag så ska du...</label>
 `,
`<h1>7e Februari</h1>
<label>Idag ska du bongo trumma!</label>
<iframe width="420" height="315"
    src="https://www.youtube.com/embed/jfNs0Z2duPs">
</iframe> `,
]

let day_3 = [
`<h1>8e Februari</h1>
<label>Lyssna på Ville han kan ge dig tips. Idag ska du lära dig...</label>
`,
`<h1>8e Februari</h1>
<label>Idag ska du Lära dig knyta slips!</label>
<iframe width="420" height="315"
    src="https://www.youtube.com/embed/PEDvzfaNX4k">
</iframe> `
]
let day_4 = [`    <h1>9e Februari</h1>
<label>Liksom Rollerderby, Lite stryk får du tåla. Idag ska du...</label>
`
    ,`    <h1>9e Februari</h1>
<label>Idag ska du en tavla måla</label>
<iframe width="420" height="315"
    src="https://www.youtube.com/embed/uEzAXWYzqxA">
</iframe> `
]
let day_5 = [`  <h1>10e Februari</h1>
<label>"Idag Är fredag ÅÅH jag orkar inte göra något!!" - Mollie Fredag kväll efter veckans slit</label>
`,
    
    `  <h1>10e Februari</h1>
<label>Idag ska du dricka cola och inte göra ETT SKIT!</label>
<iframe width="420" height="315"
    src="https://www.youtube.com/embed/fuq3Bq3cM-Q">
</iframe> `
]
let day_6 = [
    ` <h1>11e Februari</h1>
<label>Gör nått fett, våga chansa. Idag ska vi faktiskt....</label>

`
    ,` <h1>11e Februari</h1>
<label>Idag ska vi lära oss dansa!</label>
<iframe width="420" height="315"
    src="https://www.youtube.com/embed/ujREEgxEP7g">
</iframe> 
`]
let day_7 = [`    <h1>12e Februari</h1>
<label>Är man sinnesjuk kan man katter kväva. Idag ska du...</label>
`,
`    <h1>12e Februari</h1>
<label>Idag ska du väva!</label>
<iframe width="420" height="315"
    src="https://www.youtube.com/embed/4MV0RQEolB0">
</iframe> `]
let day_8 = [`    <h1>13e Februari</h1>
<label>Fuck alla barn i afrika det är vara PR! Idag ska du...</label>
`,
`    <h1>13e Februari</h1>
<label>Idag ska du kolla VR</label>
<label>(öppna denna och andra 360 VR videos i Youtube appen och starta VR mode. Sen stoppa in den i fodralet och njut)</label>
<iframe width="420" height="315"
    src="https://www.youtube.com/embed/QKm-SOOMC4c">
</iframe> `]
let day_9 = [` <h1>14e Februari</h1>
<label>Ville kan inte matte han har alltid fel. idag ska du...</label>
`,
` <h1>14e Februari</h1>
<label>Idag ska du spela dragspel!</label>
<iframe width="420" height="315"
    src="https://www.youtube.com/embed/kTDLfJ3fMJg">
</iframe> `]
let day_10 = [`  <h1>15e Februari</h1>
<label>Få inte för dig någonting du är bara en tjej. Men...</label>
`,
`  <h1>15e Februari</h1>
<label>Du klarade det! Här är en trofé föreställande dig!</label>
<iframe width="420" height="315"
    src="https://www.youtube.com/embed/D3P4FSs4xU4">
</iframe> 
`]


window.onload = (event) => {
    
    var d = new Date().getDate();
    console.log(d);
    var h = document.createElement("div");
    h.innerHTML = "";
    var body = document.getElementById("body");
    body.style.color = "white"
    if(d < 6 || d >15){

    }else{

        switch (d) {
            case 6:
                body.innerHTML=day_1[0];
                break;
            case 7:
                body.innerHTML=day_2[0];
                break;
            case 8:
                body.innerHTML=day_3[0];
                break;
            case 9:
                body.innerHTML=day_4[0];
                break;
            case 10:
                body.innerHTML=day_5[0];
                break;
            case 11:
                body.innerHTML=day_6[0];
                break;
            case 12:
                body.innerHTML=day_7[0];
                break;
            case 13:
                body.innerHTML=day_8[0];
                break;
            case 14:
                body.innerHTML=day_9[0];
                break;
            case 15:
                body.innerHTML=day_10[0];
                break;
            default:
                break;
                }
       var btn = document.createElement("button");
       btn.id = "next-btn";
       btn.innerHTML = "Öppna luckan och tryck här";
       btn.addEventListener("click", clicked)


       body.appendChild(btn);
    }
};

function clicked(){
    var d = new Date().getDate();
    var body = document.getElementById("body");
    switch (d) {
        case 6:
            body.innerHTML=day_1[1];
            body.style.backgroundImage = "url(https://nimble-needles.com/wp-content/uploads/2021/12/the-difference-between-crochet-and-knitting-1024x684.jpg)";
            break;
        case 7:
            body.style.backgroundImage = "url(https://cdn11.bigcommerce.com/s-hv21hhsv/images/stencil/2000x2000/products/28450/182343/CS_Ardmore_-_Jabula_119-5027_Afrika_Kingdom_Flat_RGB__29976.1635213614.jpg?c=2)";
            body.innerHTML=day_2[1];
            break;
        case 8:
            body.style.backgroundImage = "url(http://cdn.shopify.com/s/files/1/0805/4507/articles/How_to_tie_a_tie_Hextie_1024x1024.jpg?v=1603328803)";
            body.innerHTML=day_3[1];
            break;
        case 9:
            body.style.backgroundImage = "url(https://mymodernmet.com/wp/wp-content/uploads/2018/05/painting-ideas-3-1.jpg)";
            body.innerHTML=day_4[1];
            break;
        case 10:
            body.style.backgroundImage = "url(https://img.freepik.com/free-photo/pink-balloons-with-blurry-circle_23-2148992996.jpg?w=2000)";
            body.innerHTML=day_5[1];
            break;
        case 11:
            body.style.backgroundImage = "url(https://mermusik.se/wp-content/uploads/sites/205/2020/04/13-2.jpg)";
            body.innerHTML=day_6[1];
            break;
        case 12:
            body.style.backgroundImage = "url(https://res.cloudinary.com/colonialwilliamsburg/image/upload/q_auto,f_auto/v1482853381/trades-n-sites/weaver-making-cloth.jpg)";
            body.innerHTML=day_7[1];
            break;
        case 13:
            body.style.backgroundImage = "url(https://assets.entrepreneur.com/content/3x2/2000/1646048617-Myproject79.jpg)";
            body.innerHTML=day_8[1];
            break;
        case 14:
            body.style.backgroundImage = "url(https://m.media-amazon.com/images/M/MV5BNDkyN2MwNzMtZDJlMS00ZDZiLTgxNDMtYjNmYjA0MjVlODM4XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg)";
            body.innerHTML=day_9[1];
            break;
        case 15:
            body.style.backgroundImage = "url(https://thermobar.se/wp-content/uploads/2018/02/grattis.jpg)";
            body.innerHTML=day_10[1];
            break;
        default:
            break;
            }

}

