
function makeGrid() {
    $('#sizePicker').on("submit", function(evt) {
           let ch="";
           evt.preventDefault();
           const heightof=document.getElementById('input_height').value;
           const widthof=document.getElementById('input_width').value;
               for(let i=0;i<heightof;i++)
               {
                    ch+="<tr>"
                    for(let j=0;j<widthof;j++)
                    {
                            ch+="<td></td>"
                    }
                    ch+="</tr>"
               }
               $("tr").html("");
               $("table").prepend(ch);
               $("td").on("click",function hye(){
                          const colorof=document.getElementById('colorPicker').value;
                          $(this).css("background-color",colorof);
                      });
           });
    }
makeGrid();

function populate(){
    document.getElementById('input_height').value=35;
    document.getElementById('input_width').value=35;
    const heightof=document.getElementById('input_height').value;
    const widthof=document.getElementById('input_width').value;
    let ch="";
    for(let i=0;i<heightof;i++)
       {
            ch+="<tr>"
            for(let j=0;j<widthof;j++)
            {
                    ch+="<td></td>"
            }
            ch+="</tr>"
       }
       $("tr").html("");
       $("table").prepend(ch);
       $( "td" ).each(function( index ) {
            //console.log(index);
            let coloring=Math.floor(Math.random()*222222);
            $(this).css("background-color",'#'+coloring);
       });
}
