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
                            ch+="<td class='data'+i+j></td>"
                            console.log('data'+i+j);
                    }
                    ch+="</tr>"
               }
               $("tr").html("");
               $("table").prepend(ch);
               $("td").on("click",function hye(){
                          const colorof=document.getElementById('colorPicker').value;
                          alert(this);
                          $(this).css("background-color",colorof);
                      });
           });
            //$("#colorPicker").on("input", function(){

            //});
    }
makeGrid();
