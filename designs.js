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
