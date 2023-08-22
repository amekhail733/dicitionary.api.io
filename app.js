const https = require("https");

function getDef(term){
    try{
        const request = https.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=7070bc40-b4c1-4c4c-b5da-4d541be08f14`,
            (response) =>{
                let body = "";
                response.on("data", (data) =>{
                    body+= data.toString();
                });
                response.on("end", () =>{
                    const definition = JSON.parse(body);
                    console.log(definition[0].shortdef[0])
                })
            }
        );
        request.on("error", (error) => console.log(error.message));
    } catch(error){
        console.error(error.message);
    }
}
const query = process.argv.slice(2);
query.forEach(getDef);