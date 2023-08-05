



let url = urlinit + urlPath;

let request = fetch(url);

// function sendData(request)

//     .then(response =>{}).catch(error =>{

//     })




function getAnswer(url){
    var url = window.location.href;
    var equalsToPosition = url.search("=");
    var answer = url.slice(equalsToPosition + 1);
    return answer;
}


function getQuestionsList(){
    var urlinit = "";

    var urlPath = "";

    fetch(urlPath)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            var output = "";

            for(i=0;i< data.length; i++){
                


            }
        })
}


function getId(){
    var url = window.location.href;
    var equalsToPosition = url.search("=");
    var id = url.slice(equalsToPosition + 1);

    return id;
}