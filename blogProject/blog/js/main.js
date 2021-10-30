
// crating array of objects to senf it in one html page
const obj = [{
    subject:"Origami",
    description: "origami, also called paper folding, art of folding objects out of paper to create both two-dimensional and three-dimensional subjects. The word origami (from Japanese oru [“to fold”] and kami [“paper”]) has become the generic description of this art form, although some European historians feel it places undue weight on the Japanese origins of an art that may well have developed independently around the world Basics While cutting was traditionally a part of origami, most modern practitioners—often called “folders”—eschew cutting (although it continues to be used in the Rokoan style of connected cranes). Most origami is folded from square paper and from a single sheet. However, rectangles and other nonsquare sheets may also be used, and the composite and modular styles of origami use multiple sheets (even hundreds of sheets may be used in a single artwork).",
    img:"img/oriori.jpeg"
},{
    subject:"iPhone Photography Tips",
    description: `1. Turn on Grid Lines Grid lines are SO key for photo composition! They help you level the horizon, follow the rule of thirds, center a subject, etc. 2. Mirror front camera for better selfies I’ve always HATED how iPhone selfies flip after you take them – I know that’s how it’s technically supposed to work but I feel like it always makes my face look unrecognizable. So for years I’ve only taken selfies in the Instagram app since it doesn’t flip the image, even though the quality is a lot lower.  3. Turn off “View Outside the Frame” This seems to be a new setting with the iPhone 11 and newer, but by default you can view outside of the frame of the photo. 4. Shoot video in 4k Once you’re in camera settings, click ‘Record Video’ and then choose the quality you want to shoot video in. 1. Clean your lens (most important iPhone photography tip) It sounds so incredibly simple yet so many of us forget to do it! 2. Tap on a subject to focus
    ￼
    Once you have the camera app open, tap the screen on the spot you want the camera to focus. Once you tap a yellow box will appear around the focus area. This will usually be your subject’s face, your food, etc. 
    
    3. Adjust light before you shoot
    
    After you tap the screen to set focus, you’ll see a yellow box and a sun appear where you tapped. From here you can hold your finger on the screen and drag up to add more light into the photo or drag down to darken the photo. 
    
    4. Use the grid for a straight horizon
     
    
    5. Use the leveling tool (+) for overhead shots
    
    When you’re taking overhead shots (like photos of food), two plus signs (one white, one yellow) will appear in your screen. When the two + line up and turn into one yellow +, that’s when your camera is level!
    
    
    6. Use self-timer to take non-selfie shots with the whole group
    ￼
    The self-timer button has become a little more hidden in recent updates but it’s just as useful as ever! When you open the camera, swipe up and you’ll see a menu under the frame. From there select the icon that looks like a stopwatch and choose 3 or 10 seconds. Tap the shutter button and the countdown will start. Now run into place and smile!
    `,
    img:"img/takingphoto.png"
},{
    subject:"5 Ideas to Make Your Life Easy",
    description: `1. CREATE BOUNDARIES + WRITE YOUR OWN RULES
    
    I’m probably not the first person to tell you that it’s important to create boundaries. We all need to know our limits and to ask others to respect them—but did you know that it’s also important to set boundaries with yourself.
    
    2. SIMPLIFY MEALTIME<br>There are a ton of systems out there: everything from meal planning and prepping, to meal delivery services, or even the simple eating method I personally use (which involves a capsule pantry and food “uniforms”). I’m also really interested in learning more about the jar method and I’m planning on taking this workshop soon.3. PRACTISE THE “PAUSE” ,One quick and easy tip that has made my life SO much easier is learning to press pause. It helps me to slow down and make better decisions. 4. GO TO BED EARLY (AT LEAST ONCE A WEEK),Do you know what makes life easier? Not being tired! ?

    Getting enough sleep is so important for your health and wellbeing but I know that eight hours a night on a regular basis is just not possible for most people.5. DO A “PAIN POINT AUDIT” OK, now let’s talk about something everyone should be doing: a pain point audit.`,
    img:"img/ideass.png"
}];

//save the objects

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
