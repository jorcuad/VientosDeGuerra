// source: https://en.wikipedia.org/wiki/Category:The_Cure_songs

let input = `Time is money, friend!
    Spit it out!
    I got the best deals, anywhere!
    I got what you need!
    Ah, potential customer.
    May I show you my wares?
    Welcome, friend!
    Yeah, what do you want?
    Wazzup?
    Be good!
    Be careful out there.
    Hm, interesting.
    Heeey, how you?
    Yeah, very funny...
    Alright, move along now!
    I gota long day kid...
    Shut it!
    You're just embarrassing yourself...
    I don't have time for this...
    You, knock it off!
    Heh, heh, Glad I could help!
    Amateur!!
    Keep it real!
    Can i lighten that coin purse up for ya?.
    Cha-ching!
    You break it, you buy it.
    I ain't got it, you don't want it.
    Can I interest you on a payment plan?
    Time is money, friend!
    Well, spit it out!
    I got the best deals, anywhere!
    I got what you need!
    Ah, potential customer.
    May I show you my wares?
    Welcome, friend!
    Yeah, what do you want?
    Hey, how you?
    Wazzup?
    Hm, interesting
    Be good!
    Be careful out there.
    Keep it real!
    Hurry back!
    Ello.
    Don't be shy.
    Greetings.
    Talk to me.
    Who you be?
    How you ?
    You come get da Voodoo.
    Relax.
    Hello!
    What be on your mind?
    Later.
    Spirits be with you.
    Be seeing ya.
    Stay away from the Voodoo.
    Me got the good stuff.
    Be coo!
    Making me angry, mon.
    The spirit not amused.
    Okay dokay
    Taz'dingooo!
    Don't be shy.
    Hey dere!
    How are ya?
    Talk to me.
    Hello!
    You come get the Voodoo.
    Relax.
    What'cha looking for?
    Me got the good stuff.
    Be good
    Be seeing ya.
    Okay dokay
    Stay away from the Voodoo.
    You be careful` ;

input = input.split('\n');
var dialog = document.getElementById("dialog-text");
var generator = titlegen.create();
generator.feed(input);
dialog.innerHTML = generator.next();
