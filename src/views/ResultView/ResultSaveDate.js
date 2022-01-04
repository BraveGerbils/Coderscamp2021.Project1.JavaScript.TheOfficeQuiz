export const ResultSaveDate = function() {
    let date
    let d = new Date()
    
    let day = d.getDate()
    day = day.toString().padStart("2", 0);

    let month = d.getMonth();
    month = month.toString().padStart("2", 0);
    
    let year = d.getFullYear();
    year = year.toString().padStart("2", 0);

    let hours = d.getHours();
    hours = hours.toString().padStart("2", 0);

    let minutes = d.getMinutes();
    minutes = minutes.toString().padStart("2", 0);

    let secundes = d.getSeconds();
    secundes = secundes.toString().padStart("2", 0);

    return date = `Data: ${day}-${month}-${year}, godzina: ${hours}:${minutes}:${secundes}`
    
}

