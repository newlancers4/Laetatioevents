const url = window.location.href
var suprises = {
    1: "24 hours / 24 gifts",
    2: "Cracker surprise",
    3: "Love in air",
    4: "Romantic surprise",
    5: "Beach Surprise",
    6: "12am Doorstep Surprise",
    7: "Man power agency",
    8: "Swim in the surprise",
    9: "Bike surprise",
    10: "Drone surprise",
    11: "Old nibba's surprise",
    12: "Teddy surprise",
    13: "Bus surprise",
    14: "Express with placards",
    15: "Orphanage surprise",
    16: "Terrace surprise",
    17: "Candle light surprise",
    18: "Famous street",
    19: "Pet surprise",
    20: "Surprise on big screen",
    21: "Candle light dinner",
    22: "Flash mob",
    23: "Prank surprise",
    24: "Surprise tour",
    25: "Surprise on wheels",
    26: "Musical surprise",
    27: "Chinna story",
    28: "Surprise hunt",
    29: "Messenger surprise",
    30: "Kids surprise",
    31: "Falling love",
    32: "Surprise outfit",
    33: "Surprise on small screen"
}

var td = {
    1: "Themed Decoration 1",
    2: "Themed Decoration 2",
    3: "Themed Decoration 3",
    4: "Themed Decoration 4",
    5: "Themed Decoration 5",
    6: "Themed Decoration 6",
    7: "Themed Decoration 7",
    8: "Themed Decoration 8",
    9: "Themed Decoration 9",
    10: "Themed Decoration 10",
    11: "Themed Decoration 11",
    12: "Themed Decoration 12",
    13: "Themed Decoration 13",
    14: "Themed Decoration 14",
    15: "Themed Decoration 15",
    16: "Themed Decoration 16",
    17: "Themed Decoration 17",
    18: "Themed Decoration 18",
    19: "Themed Decoration 19",
    20: "Themed Decoration 20",
    21: "Themed Decoration 21",
    22: "Themed Decoration 22",
    23: "Themed Decoration 23",
    24: "Themed Decoration 24",
    25: "Themed Decoration 25",
    26: "Themed Decoration 26",
    27: "Themed Decoration 27",
    28: "Themed Decoration 28",
    29: "Themed Decoration 29",
    30: "Themed Decoration 30",
    31: "Themed Decoration 31",
    32: "Themed Decoration 32",
    33: "Themed Decoration 33"
}
var hw = {
    1: "Home wedding decoration 1",
    2: "Home wedding decoration 2",
    3: "Home wedding decoration 2",
    4: "Home wedding decoration 4"
}

var bd = {
    1: "Balloon Decoration 1",
    2: "Balloon Decoration 2",
    3: "Balloon Decoration 3",
    4: "Balloon Decoration 4",
    5: "Balloon Decoration 5",
    6: "Balloon Decoration 6",
    7: "Balloon Decoration 7",
    8: "Balloon Decoration 8",
    9: "Balloon Decoration 9",
    10: "Balloon Decoration 10"
}
var ld = {
    1: "Lighting Decorations 1",
    2: "Lighting Decorations 2",
    3: "Lighting Decorations 3",
    4: "Lighting Decorations 4",
    5: "Lighting Decorations 5",
    6: "Lighting Decorations 6",
    7: "Lighting Decorations 7",
    8: "Lighting Decorations 8",
    9: "Lighting Decorations 9",
    10: "Lighting Decorations 10",
    11: "Lighting Decorations 11",
    12: "Lighting Decorations 12"

}




if (url.includes("?spid=")) {
    var urlSplit = url.split("?")
    console.log(urlSplit)
    var query = urlSplit[1].split("=")
    query[1] = parseInt(query[1])
    console.log(typeof query[1])
    var event = document.getElementById("event")
    var eventType = document.getElementById("event-type")
    event.value = "Surprises"
    eventType.value = suprises[query[1]]
    event.setAttribute("readonly", "true")
    eventType.setAttribute("readonly", "true")
}
else if (url.includes("?tdid=")) {
    console.log(url)
    var urlSplit = url.split("?")
    var query = urlSplit[1].split("=")
    query[1] = parseInt(query[1])
    var event = document.getElementById("event")
    var eventType = document.getElementById("event-type")
    event.value = "Themed Decorations"
    eventType.value = td[query[1]]
    event.setAttribute("readonly", "true")
    eventType.setAttribute("readonly", "true")
}
else if (url.includes("?bdid=")) {
    console.log(url)
    var urlSplit = url.split("?")
    var query = urlSplit[1].split("=")
    query[1] = parseInt(query[1])
    var event = document.getElementById("event")
    var eventType = document.getElementById("event-type")
    event.value = "Balloon Decorations"
    eventType.value = bd[query[1]]
    event.setAttribute("readonly", "true")
    eventType.setAttribute("readonly", "true")
}
else if (url.includes("?ldid=")) {
    console.log(url)
    var urlSplit = url.split("?")
    var query = urlSplit[1].split("=")
    query[1] = parseInt(query[1])
    var event = document.getElementById("event")
    var eventType = document.getElementById("event-type")
    event.value = "Light Decorations"
    eventType.value = ld[query[1]]
    event.setAttribute("readonly", "true")
    eventType.setAttribute("readonly", "true")
}
else if (url.includes("?hwid=")) {
    console.log(url)
    var urlSplit = url.split("?")
    var query = urlSplit[1].split("=")
    query[1] = parseInt(query[1])
    var event = document.getElementById("event")
    var eventType = document.getElementById("event-type")
    event.value = "Home wedding Decorations"
    eventType.value = bw[query[1]]
    event.setAttribute("readonly", "true")
    eventType.setAttribute("readonly", "true")
}
else{
 
    var image=new Image()
    image.src="./Assets/Logo/404-3.gif"
    image.style.height="100vh"
    image.style.width="100%"
    var body=document.body
    body.innerHTML = ""
    body.style.overflow="hidden"
    body.style.border=0
    body.style.padding=0
    body.style.margin=0
    body.appendChild(image)
}    




