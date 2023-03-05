// const jsPDF = require('jspdf').default;


// index.js
const bdy=document.body;
const conta_r=document.getElementById("conta-r");
const date_I=document.getElementById("date");
const day_I=document.getElementById("day-out")
const time=document.getElementById("time");
const loc=document.getElementById("location");
const topic=document.getElementById("topic");
const attendies=document.getElementById("attendies");
const e_mail=document.getElementById("E-Mail")
const agenda=document.getElementById("agenda");
const nextstep=document.getElementById("nextstep");
var day_name;
nextstep.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'Enter') {
    createtable()
  }
});
date_I.addEventListener("focusout",()=>
{
    var day=["Monday","Thuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var date=new Date(date_I.value);
     day_name=day[date.getDay()]
    day_I.innerText=day_name
    return day_name
})

function createtable()
{
    // the datas from the html 

        // date_I.value
        // time.value
        // loc.value
        // topic.value
        // attendies.value
        // e_mail.value
        // agenda.value
        // nextstep.value
    var data_html=[null,date_I.value,day_name,time.value,loc.value,topic.value,attendies.value,e_mail.value,agenda.value,nextstep.value]
    var table = document.createElement("table");
    conta_r.appendChild(table);
    var tr,td;
    var headings=[null,"Date","Day","Time","Location","Topic","Attendies","e_mail","Agenda","Nextstep"]    
    var  Frow;
    for(let i=0;i<=9;i++)
    {
        tr=document.createElement("tr");
        tr.id="row"+i
        table.appendChild(tr)
        
        for(let j=0 ;j<=1;j++)
        {
            
            td=document.createElement("td");
            td.className="col"+j;
            tr.appendChild(td);
            table.rows[i].cells[j].style.textAlign="Justify";
        }
        if(i>0)
        {
            
            for(let x=0;x<headings.length-1;x++)
            {
                table.rows[i].cells[0].innerText=headings[i];
            }

            for(let k=0;k<=data_html.length-1;k++)
            {
                table.rows[i].cells[1].innerText=data_html[i];
            }

        }
    }
    // Setting up the First line of the Table
    Frow=table.rows[0];
    Frow.innerText="Minutes Of Meeting";
    Frow.style.textAlign="center";

    // createpdf(table)
}
// function createpdf(table)
// {
//     // let pdf=new jsPDF;
//     let pdf=new jsPDF
//     pdf.text("Minuetes of Meeting",10,10);
//     pdf.autoTable({html: table});
//     pdf.save('MOM.pdf');

//     // creating the download link 
//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(pdf.output('blob'));
//     downloadLink.download = 'mom.pdf';
//     downloadLink.innerText = 'Download PDF';
//     document.getElementById('conta-r').appendChild(downloadLink);
// }