
let HomePage ={
    
    LoadServices:function(){
        
        console.log("Script running");

        let result = $.get('https://jsonplaceholder.typicode.com/posts');

        result.then(
            (data)=>{
                let features = document.getElementById("jsfeature")
                let html="";
                for(let i=0 ; i<data.length ; i++){
                
                    html+="<div class='container'>"
                    html+="<div class='feat'>"
                    html+="<i class='fas fa-magic fa-3x'></i>"
                    html+="<h3>" + data[i].title + "</h3>"
                    html+="<p class='changeing'>" + data[i].body + "</p>"
                    html+="</div></div>"
                }
                features.innerHTML=html;
            },
            (error)=>{console.log(error);}
        );
    }
}



  


  
