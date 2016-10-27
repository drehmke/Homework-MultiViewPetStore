namespace PetStoreApp.Controllers {
    // Interface so that I can enforce 
    interface IPet {
        id: number;
        name: string;
        img: string;
        description: string;
        price: number;
        age: number;
    }

    abstract class Pet implements IPet {
        constructor(
            public id: number,
            public name: string,
            public img: string,
            public description: string,
            public price: number,
            public age: number
        ) { }
    }

    class Dog extends Pet {
        constructor(id: number, name: string, img: string, price: number, age: number, description: string ) {
            super(id, name, img, description, price, age);
        }
    }
    class Bunny extends Pet {
        constructor(id: number, name: string, img: string, price: number, age: number, description: string ) {
            super(id, name, img, description, price, age);
        }
    }

    let dogs: Dog[] = [
        new Dog(1, `Fifi`, `dog-fifi.jpg`, 25.00, 6, `Flapper "Fifi" is a character who appeared in some shorts. She is the love interest of Pluto, and some of her main episodes are "Bone Trouble" and "Pluto's Quin-puplets". She is Minnie's pet along with Figaro. She is commonly found on Mickey and Friends merchandise in Japan. She is very jealous in relation to Pluto, but also is very gentle, sweet and talented, which made her win the first prize in a contest for dogs in the episode The Dog Show. She is the dog of Minnie since Minnie is young.`),
        new Dog(2, `Princess`, `dog-princess.jpg`, 160.50, 2, `Welcome to the Puppy Place--where every puppy finds a home! It seems like it's going to be just another normal Peterson family trip for haircuts - that is until Charles meets Princess, a spoiled but irresistible Yorkie pup. She belongs to one of the stylists but Princess's owner is moving and can't take the puppy with her. Charles volunteers to care for Princess until they find her a new home. But it doesn't take long for the Petersons to get tired of Princess's privileged ways. How will Charles ever find the right family for this high maintenance pup?`),
        new Dog(3, `Ol' Yeller`, `old-yeller.jpg`, 126.35, 59, `Young Travis Coates has been left to take care of his family ranch with his mother and younger brother, Arliss, while his father goes off on a cattle drive in the late 1860s in Texas. When a "dingy yellow" dog comes for an uninvited stay with the family, Travis reluctantly takes in the dog, which they name Old Yeller. The name has a double meaning: The fur color yellow pronounced as "yeller" and the fact that its bark sounds more like a human yell.
Though Travis initially loathes the "rascal" and at first tries to get rid of it, the dog eventually proves his worth, saving the family on several occasions, including saving Arliss from a bear, Travis from a bunch of wild hogs, and Mama and their friend Lisbeth from a loafer wolf. Travis grows to love Old Yeller, and they become great friends. The rightful owner of Yeller shows up looking for his dog and recognizing that the family has become attached to Yeller, trades the dog to Arliss for a horned toad and a home-cooked meal prepared by Travis' mother, who is an exceptional cook.
Old Yeller becomes infected with rabies while saving his family from an infected wolf. Travis is forced to kill Yeller after the fight with the wolf, because he cannot risk Yeller's becoming sick and turning on the family. Old Yeller had puppies with one of Travis' friend's dogs, and one of the puppies helps Travis get over Old Yeller's death. They take in the new dog and try to begin a fresh start.`)
    ];

    let bunnies: Bunny[] = [
        new Bunny(1, `Mork`, `bunny-brown.jpg`, 5.00, 5, `Mork arrives on Earth in an egg-shaped spacecraft. He has been assigned to observe human behavior by Orson, his mostly unseen and long-suffering superior. Orson has sent Mork, to get him off Ork, where humor is not permitted. Attempting to fit in, Mork dresses in an Earth suit, but wears it backward. He encounters 21-year-old Mindy, who is upset after an argument with her boyfriend, and offers assistance. Because of his odd garb, she mistakes him for a priest and is taken in by his willingness to listen (in fact, simply observing her behavior). When Mindy notices his backward suit and unconventional behavior, she asks who he really is, and he innocently tells her the truth. She promises to keep his identity a secret and allows him to move into her attic. Mindy's father Fred objects to his daughter living with a man (particularly one as bizarre as Mork), but Fred's mother-in-law Cora approves of Mork and the living arrangement. Mindy and Cora work at Fred's music store, where Cora gives lessons to Eugene , a child who becomes Mork's friend. Also seen occasionally are Mindy's snooty old high school friend Susan and the possibly insane Exidor.`),
        new Bunny(2, `Red`, `bunny-red.jpg`, 35.00, 8, `Kitty's husband, Eric's and Laurie's father and Hyde's adoptive father. Red is a Navy combat veteran, having served in World War II and the Korean War. Despite his mean exterior, Red also displays a soft side. His hobbies include working with his power tools, drinking beer, watching television, reading the newspaper, hunting and fishing. Both Kitty and Red's personae are a reflection of gender roles that existed in the 1970s.`),
        new Bunny(3, `Norton`, `bunny-white.jpg`, 65.00, 1, `A New York City sewer worker and Ralph's best friend (and upstairs neighbor). He is considerably more good-natured than Ralph, but nonetheless trades insults with him on a regular basis. Ed (typically called "Norton" by Ralph and sometimes his own wife) often gets mixed up in Ralph's schemes, and his carefree and rather dimwitted nature usually results in raising Ralph's ire, while Ralph often showers him with verbal abuse and throws him out of the apartment when Ed irritates him. In most episodes, Ed is shown to be better-read, better-liked, more worldly and more even-tempered than Ralph, despite his unassuming manner and the fact that he usually lets Ralph take the lead in their escapades. Ed and Ralph are both members of the fictional Raccoon Lodge ("An Emergency meeting is an Emergency meeting—never a poker game. An Executive Meeting, that's a poker game.")`),
    ];


    // Homepage Controller - Lists all the animals
    export class MasterController {
        public dogs;
        public bunnies;
        constructor() {
            this.bunnies = bunnies;
            this.dogs = dogs;
        }
    }

    // Details Controller - Returns the details for 1 animal
    export class DetailsController {
        public pet;

        constructor($stateParams: ng.ui.IStateParamsService) {
            console.log($stateParams[`type`]);
            if ($stateParams[`type`] == `dog`) {
                this.pet = dogs.filter((d) => d.id == $stateParams[`id`])[0];
            } else if ($stateParams[`type`] == `bunny`) {
                this.pet = bunnies.filter((b) => b.id == $stateParams[`id`])[0];
            }
            
        }
    }
}