const obj = [{
    subject:"Origami",
    description: "origami, also called paper folding, art of folding objects out of paper to create both two-dimensional and three-dimensional subjects. The word origami (from Japanese oru [“to fold”] and kami [“paper”]) has become the generic description of this art form, although some European historians feel it places undue weight on the Japanese origins of an art that may well have developed independently around the world<br>Basics While cutting was traditionally a part of origami, most modern practitioners—often called “folders”—eschew cutting (although it continues to be used in the Rokoan style of connected cranes). Most origami is folded from square paper and from a single sheet. However, rectangles and other nonsquare sheets may also be used, and the composite and modular styles of origami use multiple sheets (even hundreds of sheets may be used in a single artwork).",
    img:"img/oriori.jpeg"
},{
    subject:"PhotoShot",
    description: "some desc",
    img:"img/takePhoto.jpeg"
},{
    subject:"10 Ideas to Make Your Life Easy",
    description: "some desc",
    img:"img/ideas.jpeg"
}];



$('#origami').click(function(){
    const open= window.sessionStorage.setItem('subject', JSON.stringify(obj[0]));
    window.location.href(subject.html);
});

$('#photoShot').click(function(){
    const open= window.sessionStorage.setItem('subject', JSON.stringify(obj[1]));
    window.location.href(subject.html);
});

$('#ideas').click(function(){
    
    const open= window.sessionStorage.setItem('subject', JSON.stringify(obj[2]));
    window.location.href(subject.html);
});