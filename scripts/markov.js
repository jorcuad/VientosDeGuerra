// source: https://en.wikipedia.org/wiki/Category:The_Cure_songs

let input =     `Time is money, friend!
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
    Heeey, how you doin'?
    Yeah, very funny...
    Alright, move along now!
    I gota long day kid...
    Shut it!
    You're just embarrassing yourself...
    I don't have time for this...
    You, knock it off!
    Yo
    Heh, heh, Glad I could help!
    Amateur!!
    Keep it real!
    GTL friend; gambling, tinkering, laundry. Note: has been debated, laundering, launderin'. jersey shore ref
    Can i lighten that coin purse up for ya?.
    Cha-ching!
    You break it, you buy it.
    I ain't got it, you don't want it.
    Can I interest you on a payment plan?`;

input = input.split('\n');
var dialog = document.getElementById("dialog-text");
var generator = titlegen.create();
generator.feed(input);
dialog.innerHTML = generator.next();
