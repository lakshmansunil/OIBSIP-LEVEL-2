var txt='';
        var a1;
        var res='';
        var ot=document.getElementById('answer');

        function root(){
            txt+='Math.sqrt(';
            ot.textContent+='√(';
        }
        function bo(){
            txt+='(';
            ot.textContent+='(';
        }
        function bc(){
            txt+=')';
            ot.textContent+=')';
        }

        function display(value){
            txt+=value;
            ot.textContent+=value;
        }
        function display2(v1,v2){
            txt+=v1;
            ot.textContent+=v2;
        }

        function del(){
            var temp=ot.textContent;
            if(txt.charAt(txt.length-1) == 't'){
                txt=txt.slice(0,txt.length - 9);
            }
            else if (temp.charAt(temp.length-1) == '^') {
                txt=txt.slice(0,txt.length - 2);
            }
            else{
                txt=txt.slice(0,txt.length - 1);
            }
            console.log(txt);
            temp=temp.slice(0,temp.length - 1);
            ot.textContent=temp;
        }

        function ans(){
            ot.textContent=a1;
            txt=String(a1);
        }
        
        function ce(){
            a1=res;
            txt='';
            ot.textContent='';
        }

        function entering(){
        res=String(eval(txt));
        ot.textContent=res;
        txt=res;
        }